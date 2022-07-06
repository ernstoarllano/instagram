import { AuthContextProps } from 'interfaces/Auth'
import { createContext } from 'react'

const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  loading: false,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
})

export default AuthContext
