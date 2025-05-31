import prisma from '@/lib/db'
import { User } from '@/types/user'
import { UserInput } from './users.schema'
import { hash } from 'bcryptjs'

export async function getUsers(
  page = 1,
  limit = 10,
  search = '',
  statusFilter: string | null = null,
  roleFilter: string | null = null
): Promise<{ data: User[]; total: number }> {
  const where: any = {
    ...(search && {
      name: {
        contains: search,
        mode: 'insensitive',
      },
    }),
    ...(statusFilter && {
      isActive: statusFilter === 'active',
    }),
    ...(roleFilter && {
      role: {
        role_name: roleFilter,
      },
    }),
  }

  const [users, total] = await Promise.all([
    prisma.users.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      include: { role: true },
    }),
    prisma.users.count({ where }),
  ])

  return {
    data: users.map((user) => ({
      id: user.id,
      name: user.name ?? '',
      email: user.email,
      avatar: user.avatar ?? '',
      isActive: user.isActive,
      role: user.role.role_name,
    })),
    total,
  }
}



export async function createUser(data: UserInput) {
  const role = await prisma.roles.findFirst({
    where: { role_name: data.role },
  })

  if (!role) throw new Error(`Role '${data.role}' not found`)

  const dataFinal = {
    ...data,
    isActive: data.isActive === 'active', // ✅ konversi string ke boolean di sini
  }

  return prisma.users.create({
    data: {
      name: dataFinal.name,
      email: dataFinal.email,
      password: await hash('password123', 10),
      avatar: 'https://i.pravatar.cc/150?img=3',
      isActive: dataFinal.isActive,
      roleId: role.id,
    },
  })
}

export async function updateUser(id: number, data: UserInput) {
  const role = await prisma.roles.findFirst({
    where: { role_name: data.role },
  })

  if (!role) throw new Error(`Role '${data.role}' not found`)

  const dataFinal = {
    ...data,
    isActive: data.isActive === 'active', // ✅ konversi string ke boolean di sini
  }

  return prisma.users.update({
    where: { id },
    data: {
      name: dataFinal.name,
      email: dataFinal.email,
      avatar: 'https://i.pravatar.cc/150?img=3',
      roleId: role.id,
      isActive: dataFinal.isActive,
    },
  })
}

export async function deleteUser(id: number) {
  return prisma.users.delete({ where: { id } })
}

export async function isEmailUsed(email: string) {
  const existing = await prisma.users.findUnique({
    where: { email },
  })

  return !!existing
}

export async function getUserById(id: number) {
  return await prisma.users.findUnique({
    where: { id },
  })
}