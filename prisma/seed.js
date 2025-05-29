const { PrismaClient } = require('@prisma/client');
const users = require('./users.json'); // pastikan path sesuai
const prisma = new PrismaClient();

async function main() {
  for (const user of users) {
    await prisma.users.create({
      data: {
        id: parseInt(user.id),
        name: user.name,
        email: user.email,
      },
    });
  }
}

main()
  .then(async () => {
    console.log('✅ Users seeded successfully');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
