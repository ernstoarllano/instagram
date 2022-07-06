import FrontPage from 'components/FrontPage'
import Login from 'components/Login'
import { useAuth } from 'hooks/useAuth'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  const { currentUser } = useAuth()

  if (!currentUser) return <Login />

  return <FrontPage />
}

export default HomePage
