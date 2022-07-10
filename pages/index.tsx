import FrontPage from 'components/FrontPage'
import Login from 'components/Login'
import { useAuth } from 'hooks/useAuth'
import { prisma } from 'lib/prisma'
import { GetServerSideProps } from 'next'

const HomePage = ({ user, users }: any) => {
  const { currentUser } = useAuth()
  const { posts } = user

  if (!currentUser) return <Login />

  return <FrontPage user={user} posts={posts} users={users} />
}

export const getServerSideProps: GetServerSideProps = async () => {
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
