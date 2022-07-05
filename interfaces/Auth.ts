import { User } from 'firebase/auth'

export interface AuthContextProps {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export interface AuthProviderProps {
  children: React.ReactNode
}
