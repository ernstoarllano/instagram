import FrontPage from 'components/FrontPage'
import Login from 'components/Login'
import { useAuth } from 'hooks/useAuth'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { user } = useAuth()

  if (!user) return <Login />

  return <FrontPage />
}

export default Home
