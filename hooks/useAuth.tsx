import AuthContext from 'context/auth'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth'
import { AuthProvider } from 'interfaces/Auth'
import { auth } from 'lib/firebase'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'

const AuthProvider = ({ children }: AuthProvider) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean | true>(true)
  const router = useRouter()

  /**
   * Asynchronously signs in an existing user
   *
   * @async
   * @param {string} email
   * @param {string} password
   */
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((existingUser) => {
        setCurrentUser(existingUser.user)
        setLoading(false)
        router.push('/')
      })
      .catch((err) => console.error(err.code))
  }

  /**
   * Asynchronously registers a new user
   *
   * @async
   * @param {string} email
   * @param {string} password
   */
  const register = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((newUser) => {
        setCurrentUser(newUser.user)
        setLoading(false)
        router.push('/')
      })
      .catch((err) => console.error(err.code))
  }

  /**
   * Asynchronously signs out the current user
   *
   * @async
   */
  const logout = async () => {
    await signOut(auth)
      .then(() => {
        setCurrentUser(null)
        setLoading(false)
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider
      value={{ currentUser, loading, login, register, logout }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvider
