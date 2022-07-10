import EditProfile from 'components/account/EditProfile'
import Accounts from 'components/Accounts'
import type { NextPage } from 'next'

const EditPage: NextPage = () => {
  return (
    <Accounts>
      <EditProfile />
    </Accounts>
  )
}

export default EditPage
