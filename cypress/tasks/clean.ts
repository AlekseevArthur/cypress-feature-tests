import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const clean = async () => {
  return await prisma.book.deleteMany({})
}

export default clean
