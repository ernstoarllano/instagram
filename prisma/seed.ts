import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding...')

  await prisma.user.create({
    data: {
      name: 'Walker',
      email: 'walker@walker.com',
      image: '/public/avatars/pplcallmegiorgio.jpg',
      posts: {
        create: [
          {
            title: 'First Post',
            content: 'This is the first post',
            image: '/public/photos/adventure.jpg',
          },
        ],
      },
    },
  })

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
