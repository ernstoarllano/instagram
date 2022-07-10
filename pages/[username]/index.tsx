import Profile from 'components/account/Profile'
import { AccountsProfilePageProps } from 'interfaces/Accounts'
import { prisma } from 'lib/prisma'
import { GetServerSideProps } from 'next'

const UserProfilePage = ({ user }: AccountsProfilePageProps) => {
  const { posts } = user

  return <Profile user={user} posts={posts} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context
  const { username } = context.query

  res.setHeader(
    'Cache-Control',
    'public s-maxage=10, stale-while-revalidate=59'
  )

  const user = await prisma.user.findUnique({
    where: {
      username: username as string,
    },
    select: {
      name: true,
      username: true,
      image: true,
      posts: true,
    },
  })

  return {
    props: {
      user,
    },
  }
}

export default UserProfilePage
