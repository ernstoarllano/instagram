export interface User {
  id: number
  name: string
  username: string
  email: string
  emailVerified?: string
  image: string
  posts?: UserPost[]
}

export interface UserPost {
  id: number
  title: string
  content: string
  image: string
  published: boolean
  author?: User
  authorId: number
}
