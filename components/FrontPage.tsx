import FrontPagePosts from 'components/front-page/FrontPagePosts'
import Header from 'components/Header'
import ProfileSuggestions from 'components/ProfileSuggestions'
import ProfileSwitch from 'components/ProfileSwitch'
import { FrontPage } from 'interfaces/FrontPage'

const FrontPage = ({ user, posts, users }: FrontPage) => {
  return (
    <>
      <Header />
      <main>
        <section className="lg:flex lg:flex-col lg:max-w-[821px] lg:mx-auto mt-16">
          <div className="lg:flex lg:flex-grow lg:relative">
            <div className="lg:basis-[470px] lg:mr-8 space-y-6">
              <FrontPagePosts posts={posts} />
            </div>
            <div className="lg:self-start lg:basis-[351px] lg:sticky lg:top-3 space-y-6">
              <ProfileSwitch user={user} />
              <ProfileSuggestions users={users} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default FrontPage
