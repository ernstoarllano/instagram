import AuthContext from 'context/auth'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth'
import { AuthProviderProps } from 'interfaces/Auth'
import { auth } from 'lib/firebase'
import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo, useState } from 'react'

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean | false>(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setLoading(false)
      } else {
        router.push('/')
        setLoading(true)
      }
    })
  }, [auth])

  const signIn = async (email: string, password: string) => {
    setLoading(true)

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
      })
      .catch((err) => console.error(err.code))
      .finally(() => setLoading(false))
  }
  const signUp = async (email: string, password: string) => {
    console.log(email, password)
  }
  const logout = async () => {}

  const authMemo = useMemo(
    () => ({ user, loading, signIn, signUp, logout }),
    [user, loading]
  )

  return (
    <AuthContext.Provider value={authMemo}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvider
