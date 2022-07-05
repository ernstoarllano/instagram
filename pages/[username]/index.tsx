import { useRouter } from 'next/router'

const UserHome = () => {
  const router = useRouter()
  const { username } = router.query

  return <div>Hello {username}</div>
}

export default UserHome
