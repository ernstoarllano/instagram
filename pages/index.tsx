import FrontPage from 'components/FrontPage'
import { prisma } from 'lib/prisma'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'

const HomePage = ({ user, users }: any) => {
  const { posts } = user
  const { data } = useSession()
  console.log(data)

  return <FrontPage user={user} posts={posts} users={users} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context

  res.setHeader(
    'Cache-Control',
    'public s-maxage=10, stale-while-revalidate=59'
  )

  const user = await prisma.user.findUnique({
    where: {
      username: 'pplcallmegiorgio',
    },
    select: {
      name: true,
      username: true,
      image: true,
      posts: {
        include: {
          author: true,
        },
      },
    },
  })

  const users = await prisma.user.findMany({
    where: {
      NOT: {
        username: 'pplcallmegiorgio',
      },
    },
    select: {
      id: true,
      name: true,
      username: true,
      image: true,
    },
  })

  return {
    props: {
      user,
      users,
    },
  }
}

export default HomePage
