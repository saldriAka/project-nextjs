const { PrismaClient } = require('@prisma/client');
const roles = require('./roles.json');
const users = require('./users.json');

const prisma = new PrismaClient();

async function main() {
  // Seed roles menggunakan role_name sebagai unique key
  for (const role of roles) {
    await prisma.roles.upsert({
      where: { role_name: role.role_name },
      update: {},
      create: {
        role_name: role.role_name,
        role_desc: role.role_desc,
      },
    });
  }

  const roleMap = await prisma.roles.findMany().then((data) =>
    data.reduce((acc, role) => {
      acc[role.role_name] = role.id;
      return acc;
    }, {})
  );

  for (const user of users) {
    const roleId = roleMap[user.role_name];
    console.log('Assigning roleId', roleId, 'to user', user.email);

    if (!roleId) {
      throw new Error(`RoleId not found for role_name: ${user.role_name}`);
    }

    await prisma.users.upsert({
      where: { email: user.email },
      update: {},
      create: {
        email: user.email,
        password: user.password,
        avatar: user.avatar,
        role: {
          connect: { id: roleId }
        }
      }
    });
  }
}

main()
  .then(async () => {
    console.log('✅ Seeding successful');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
