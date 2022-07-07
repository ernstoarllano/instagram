import { User } from 'firebase/auth'

export interface AuthContext {
  currentUser: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export interface AuthProvider {
  children: React.ReactNode
}
