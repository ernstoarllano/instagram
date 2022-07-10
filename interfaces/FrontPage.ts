import { User, UserPost } from 'interfaces/User'

export interface FrontPageProps {
  user: User
  posts: UserPost[]
  users: User[]
}

export interface FrontPagePostsProps {
  posts: UserPost[]
}

export interface FrontPageUserSuggestionsProps {
  users: User[]
}
