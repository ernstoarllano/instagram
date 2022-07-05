import Footer from 'components/Footer'
import { LayoutProps } from 'interfaces/Layout'

const Layout = ({ children }: LayoutProps) => {
  return (
    <section>
      <main>{children}</main>
      <Footer />
    </section>
  )
}

export default Layout
