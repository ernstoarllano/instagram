import AccountsContext from 'context/accounts'
import { useAuth } from 'hooks/useAuth'
import { AccountsProvider } from 'interfaces/Accounts'
import { useContext, useEffect, useState } from 'react'
import { getUserByUID } from 'services/firebase'

const AccountsProvider = ({ children }: AccountsProvider) => {
  const { currentUser } = useAuth()
  const [userId, setUserId] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [fullName, setFullname] = useState<string | null>(null)
  const [emailAddress, setEmailAddress] = useState<string | null>(null)
  const [following, setFollowing] = useState<string[] | null>([])
  const [followers, setFollowers] = useState<string[] | null>([])
  const [dateCreated, setDateCreated] = useState<number | null>(null)
  const [loading, setLoading] = useState<boolean | true>(true)

  useEffect(() => {
    const checkUserExists = async () => {
      const user = await getUserByUID(currentUser?.uid)

      if (user) {
        setUserId(user.userId)
        setUsername(user.username)
        setFullname(user.fullName)
        setEmailAddress(user.emailAddress)
        setFollowing(user.following)
        setFollowers(user.followers)
        setDateCreated(user.dateCreated)
        setLoading(false)
      }
    }

    checkUserExists()
  }, [currentUser])

  return (
    <AccountsContext.Provider
      value={{
        userId,
        username,
        fullName,
        emailAddress,
        following,
        followers,
        dateCreated,
      }}
    >
      {!loading && children}
    </AccountsContext.Provider>
  )
}

export const useAccounts = () => {
  return useContext(AccountsContext)
}

export default AccountsProvider
