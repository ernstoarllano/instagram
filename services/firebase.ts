import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { firestore } from 'lib/firebase'

export const getUserByUID = async (userId: any) => {
  if (!userId) return

  const req = query(
    collection(firestore, 'users'),
    limit(1),
    where('userId', '==', userId)
  )

  const res = await getDocs(req)

  return res.docs[0].data()
}
