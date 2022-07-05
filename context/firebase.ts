import { Firebase } from 'interfaces/Firebase'
import { createContext } from 'react'

const FirebaseContext = createContext<Firebase | null>(null)

export default FirebaseContext
