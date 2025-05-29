import { getUsers } from '@/features/users/users.service'
import { NextResponse } from 'next/server'


export async function GET() {
  const users = await getUsers()
  return NextResponse.json(users)
}
