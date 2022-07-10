import { User, UserPost } from 'interfaces/User'

export interface FrontPage {
  user: User
  posts: UserPost[]
  users: User[]
}

export interface FrontPagePosts {
  posts: UserPost[]
}

export interface FrontPageUserSuggestions {
  users: User[]
}
