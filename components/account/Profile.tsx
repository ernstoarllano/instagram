import ProfileHeader from 'components/account/ProfileHeader'
import ProfilePosts from 'components/account/ProfilePosts'
import Header from 'components/Header'

const Profile = ({ user, posts }: any) => {
  return (
    <>
      <Header />
      <main>
        <section className="lg:flex lg:flex-col lg:max-w-[935px] lg:mx-auto mt-16 space-y-12">
          <ProfileHeader user={user} />
          <ProfilePosts posts={posts} />
        </section>
      </main>
    </>
  )
}

export default Profile
