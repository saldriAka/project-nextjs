
import bcrypt from 'bcryptjs'
import prisma from '@/lib/db'

export async function registerUser(email: string, password: string) {
  // Cek apakah email sudah digunakan
  const existing = await prisma.users.findUnique({ where: { email } })
  if (existing) {
    throw new Error('Email already in use.')
  }

  // Cari role "user"
  const role = await prisma.roles.findFirst({
    where: { role_name: 'user' },
  })
  if (!role) {
    throw new Error('Default role not found.')
  }

  // Hash password dan buat user baru
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await prisma.users.create({
    data: {
      email,
      password: hashedPassword,
      roleId: role.id,
    },
  })

  return user
}
