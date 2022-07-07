import { AuthContext } from 'interfaces/Auth'
import { createContext } from 'react'

const AuthContext = createContext<AuthContext>({
  currentUser: null,
  loading: false,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
})

export default AuthContext
