import { FrontPageUserSuggestions } from 'interfaces/FrontPage'
import Image from 'next/image'
import Link from 'next/link'

const ProfileSuggestions = ({ users }: FrontPageUserSuggestions) => {
  const handleFollow = () => {
    alert('Follow profile')
  }

  return (
    <div className="space-y-3">
      <div className="lg:flex lg:items-center lg:justify-between">
        <span className="text-sm font-semibold text-gray-500">
          Suggestions For You
        </span>
        <Link href="/">
          <a className="text-xs font-semibold">See All</a>
        </Link>
      </div>
      {users && (
        <div className="space-y-6">
          {users.map((user) => {
            return (
              <div
                key={user?.id}
                className="lg:flex lg:items-center lg:justify-between"
              >
                <div className="lg:flex lg:items-center lg:flex-grow">
                  <div className="relative w-[36px] h-[36px] mr-4 rounded-full overflow-clip">
                    <Link href={`/${user?.username}`}>
                      <a>
                        <Image
                          src={user?.image}
                          alt={user?.name}
                          width={36}
                          height={36}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="font-semibold">
                      <Link href={`/${user?.username}`}>
                        <a>{user?.username}</a>
                      </Link>
                    </span>
                    <span className="text-xs text-gray-500">
                      Suggested for you
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    className="text-xs font-semibold text-blue-500"
                    onClick={handleFollow}
                  >
                    Follow
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ProfileSuggestions
