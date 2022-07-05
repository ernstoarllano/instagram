import { AuthContextProps } from 'interfaces/Auth'
import { createContext } from 'react'

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: false,
  signIn: async () => {},
  signUp: async () => {},
  logout: async () => {},
})

export default AuthContext
