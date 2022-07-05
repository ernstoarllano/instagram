import AuthProvider from 'hooks/useAuth'
import type { AppProps } from 'next/app'
import 'styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App
