import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from './Header'

const Profile = () => {
  const router = useRouter()
  const { username } = router.query
  return (
    <>
      <Header />
      <main>
        <section className="lg:flex lg:max-w-[935px] lg:mx-auto mt-16">
          <div className="lg:flex lg:items-stretch lg:flex-shrink-0 w-full">
            <div className="lg:flex lg:justify-center lg:flex-grow lg:mr-8">
              Image
            </div>
            <div className="lg:flex-grow-[2]">
              <div className="lg:flex lg:items-center space-x-3">
                <h2 className="lg:text-[32px] font-light">{username}</h2>
                <Link href="/accounts/edit">
                  <a className="py-1 px-2 font-semibold border border-solid border-gray-300 rounded-[3px]">
                    Edit profile
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Profile
