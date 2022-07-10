import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding...')

  await prisma.user.create({
    data: {
      name: 'Walker',
      username: 'pplcallmegiorgio',
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
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
