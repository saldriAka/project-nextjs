import { z } from 'zod'

export const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  role: z.enum(['admin', 'user']),
  avatar: z.string().url(),
  isActive: z.enum(['active', 'inactive']),
})

export type UserInput = z.infer<typeof userSchema>
