'use client'

import { usePathname, useRouter } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { PasswordInput } from './PasswordInput'
import { Loader2 } from 'lucide-react'

const baseSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(5, { message: 'Password must be at least 5 characters' }),
})

const registerSchema = baseSchema.extend({
  confirmPassword: z.string().min(5, { message: 'Password must be at least 5 characters' }),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passwords do not match',
})

type UserAuthFormValues = z.infer<typeof baseSchema | typeof registerSchema>

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const pathname = usePathname()
  const isRegister = pathname === '/register'
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<UserAuthFormValues>({
    resolver: zodResolver(isRegister ? registerSchema : baseSchema),
    defaultValues: {
      email: '',
      password: '',
      ...(isRegister && { confirmPassword: '' }),
    } as any,
  })

  const onSubmit = async (values: UserAuthFormValues) => {
    setIsLoading(true)

    try {
      if (!values.email || !values.password) {
        form.setError('email', { message: 'Email is required' })
        form.setError('password', { message: 'Password is required' })
        return
      }

      if (isRegister) {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })

        const result = await res.json()

        if (!res.ok) {
          form.setError('email', { message: result.message || 'Failed to register' })
          return
        }

        const login = await signIn('credentials', {
          email: values.email,
          password: values.password,
          redirect: false,
        })

        if (login?.ok) {
          router.push('/dashboard')
        } else {
          form.setError('email', { message: 'Login after registration failed.' })
        }
      } else {
        const login = await signIn('credentials', {
          email: values.email,
          password: values.password,
          redirect: false,
        })

        if (login?.ok) {
          router.push('/dashboard')
        } else {
          form.setError('email', { message: 'Invalid email or password.' })
          form.setError('password', { message: 'Invalid email or password.' })
        }
      }
    } catch (err) {
      form.setError('email', { message: 'Something went wrong. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('w-full', className)} {...props}>
      <div className="mb-3 flex flex-col space-y-2 text-left">
        <h1 className="text-2xl font-semibold tracking-tight">
          {isRegister ? 'Register' : 'Login'}
        </h1>
        <p className="text-muted-foreground text-sm">
          {isRegister
            ? 'Enter your email and password to create a new account.'
            : 'Enter your email and password to login.'}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput disabled={isLoading} placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
                {!isRegister && (
                  <Link
                    href="/forgot-password"
                    className="text-muted-foreground absolute -top-0.5 right-0 text-sm font-medium hover:opacity-75"
                  >
                    Forgot password?
                  </Link>
                )}
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          {isRegister && (
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Retype Password</FormLabel>
                  <FormControl>
                    <PasswordInput disabled={isLoading} placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isRegister ? 'Registering...' : 'Logging in...'}
              </span>
            ) : (
              isRegister ? 'Register' : 'Login'
            )}
          </Button>
        </form>
      </Form>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        {isRegister ? (
          <>
            Already have an account?{' '}
            <Link href="/login" className="hover:text-primary font-medium underline underline-offset-4">
              Login
            </Link>
          </>
        ) : (
          <>
            Don’t have an account?{' '}
            <Link href="/register" className="hover:text-primary font-medium underline underline-offset-4">
              Sign up
            </Link>
          </>
        )}
      </p>
    </div>
  )
}
