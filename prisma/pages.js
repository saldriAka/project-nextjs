import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.users.findUniqueOrThrow({
    where: { email: 'admin@admin.com' },
  });

  for (let i = 1; i <= 15; i++) {
    const isPublished = faker.datatype.boolean();
    const isDraft = !isPublished;

    const languages = ['EN', 'ID'];

    for (const lang of languages) {
      const title = faker.lorem.sentence(3) + (lang === 'ID' ? ' (ID)' : '');
      const slug =
        lang === 'EN'
          ? `page-${i}-en-${faker.word.adjective().toLowerCase()}`
          : `halaman-${i}-id-${faker.word.noun().toLowerCase()}`;

      const page = await prisma.page.create({
        data: {
          createdById: user.id,
          isPublished,
          isDraft,
          title,
          slug,
          desc: faker.lorem.paragraph(),
          metaTitle: faker.lorem.words(3),
          metaDescription: faker.lorem.sentence(),
          content: {
            blocks: [
              {
                type: 'paragraph',
                data: { text: faker.lorem.paragraphs(1) },
              },
            ],
          },
          canonicalUrl: faker.internet.url(),
          robots: 'index, follow',
          coverImageUrl: faker.image.urlPicsumPhotos(),
          ogImageUrl: faker.image.urlPicsumPhotos(),
        },
      });

      console.log(`✅ Created Page ${page.id} [${lang}]`);
    }
  }
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
