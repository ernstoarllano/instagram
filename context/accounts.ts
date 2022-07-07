import { AccountsContext } from 'interfaces/Accounts'
import { createContext } from 'react'

const AccountsContext = createContext<AccountsContext>({
  userId: null,
  username: null,
  fullName: null,
  emailAddress: null,
  following: [],
  followers: [],
  dateCreated: null,
})

export default AccountsContext
