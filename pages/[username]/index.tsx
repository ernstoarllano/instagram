import Profile from 'components/account/Profile'
import { AccountsProfilePage } from 'interfaces/Accounts'
import { prisma } from 'lib/prisma'
import { GetServerSideProps } from 'next'

const UserProfilePage = ({ user }: AccountsProfilePage) => {
  const { posts } = user

  return <Profile user={user} posts={posts} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const user = await prisma.user.findUnique({
    where: {
      username: params?.username,
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
