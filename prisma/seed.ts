import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Husni Fatah",
      email: "husni@example.com",
      profile: {
        create: {
          bio: "Programmer dari Semarang",
        },
      },
      posts: {
        create: [
          {
            title: "Belajar Prisma",
            content: "Langkah awal belajar ORM modern",
            published: true,
          },
          {
            title: "Belajar SQL",
            published: false,
          },
        ],
      },
    },
    include: {
      profile: true,
      posts: true,
    },
  });

  console.log("User created:", user);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
