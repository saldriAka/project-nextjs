import { NextResponse } from 'next/server'
import { registerUser } from '@/features/auth/auth.service'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
    }

    const user = await registerUser(email, password)

    return NextResponse.json({ message: 'User created', user })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 })
    }
    return NextResponse.json({ message: 'Register failed' }, { status: 400 })
  }
}
