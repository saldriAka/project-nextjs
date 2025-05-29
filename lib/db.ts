import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

async function connectDB() {
  try {
    await prisma.$connect()
    console.log('✅ Prisma connected to the database successfully.')
  } catch (err) {
    console.error('❌ Prisma failed to connect:', err)
  }
}

connectDB() 

export default prisma

