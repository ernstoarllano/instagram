import { Accounts } from 'interfaces/Accounts'
import Link from 'next/link'
import Header from './Header'

const Accounts = ({ children }: Accounts) => {
  return (
    <>
      <Header />
      <main>
        <section className="lg:flex lg:max-w-[935px] lg:mx-auto mt-16 border border-solid border-gray-300 rounded-[3px]">
          <div className="lg:flex lg:flex-grow lg:justify-stretch">
            <ul className="lg:flex lg:basis-[236px] lg:border-r lg:border-l-0 lg:border-y-0 lg:border-solid lg:border-gray-300">
              <li>
                <Link href="/accounts/edit">
                  <a className="block py-3 px-6 font-semibold border-l-2 border-solid border-gray-900">
                    Edit profile
                  </a>
                </Link>
              </li>
            </ul>
            <article className="lg:flex lg:flex-auto p-10">{children}</article>
          </div>
        </section>
      </main>
    </>
  )
}

export default Accounts
