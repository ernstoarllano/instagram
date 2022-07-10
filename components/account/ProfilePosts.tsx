import { AccountsPosts } from 'interfaces/Accounts'
import Image from 'next/image'
import Link from 'next/link'

const ProfilePosts = ({ posts }: AccountsPosts) => {
  return (
    <div>
      {posts && (
        <div className="lg:flex lg:items-center space-x-6">
          {posts.map((post) => {
            return (
              <div key={post?.id} className="w-[312px] h-[312px]">
                <div className="relative">
                  <Link href="/">
                    <a>
                      <Image
                        src={post?.image}
                        alt={post?.title}
                        width={312}
                        height={312}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ProfilePosts
