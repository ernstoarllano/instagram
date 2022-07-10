import { User, UserPost } from 'interfaces/User'

export interface Accounts {
  children: React.ReactNode
}

export interface AccountsContext {
  userId: string | null
  username: string | null
  fullName: string | null
  emailAddress: string | null
  following: string[] | null
  followers: string[] | null
  dateCreated: number | null
}

export interface AccountsProvider {
  children: React.ReactNode
}

export interface AccountsProfilePage {
  user: User
}

export interface AccountsPosts {
  posts: UserPost[]
}

export interface AccountsProfile {
  user: User
  posts: UserPost[]
}

export interface AccountsProfileHeader {
  user: User
}
