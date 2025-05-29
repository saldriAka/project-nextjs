import prisma from '@/lib/db'

export async function getUsers(): Promise<any[]> {
  return prisma.users.findMany()
}

export async function getUserById(id: string) {
  return prisma.users.findUnique({ where: { id } })
}
