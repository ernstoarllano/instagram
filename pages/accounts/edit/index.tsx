import Accounts from 'components/Accounts'
import EditProfile from 'components/accounts/EditProfile'
import type { NextPage } from 'next'

const EditPage: NextPage = () => {
  return (
    <Accounts>
      <EditProfile />
    </Accounts>
  )
}

export default EditPage
