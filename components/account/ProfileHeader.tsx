import { AccountsProfileHeaderProps } from 'interfaces/Accounts'
import Image from 'next/image'
import Link from 'next/link'

const ProfileHeader = ({ user }: AccountsProfileHeaderProps) => {
  return (
    <div className="lg:flex lg:items-stretch lg:flex-shrink-0 w-full">
      <div className="lg:flex lg:justify-center lg:flex-grow lg:mr-8">
        <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden">
          {user?.image && (
            <Image
              src={user?.image}
              alt={user?.name}
              width={150}
              height={150}
            />
          )}
        </div>
      </div>
      <div className="lg:flex-grow-[2] space-y-6">
        <div className="lg:flex lg:items-center space-x-3">
          <h2 className="lg:text-[28px] font-light">
            {user?.username || 'username'}
          </h2>
          <Link href="/accounts/edit">
            <a className="py-1 px-2 text-sm font-semibold border border-solid border-gray-300 rounded-[3px]">
              Edit profile
            </a>
          </Link>
        </div>
        <div>
          <ul className="lg:flex lg:items-center space-x-6">
            <li>
              <div>
                <span className="mr-2 font-semibold">
                  {user?.posts?.length || 0}
                </span>
                posts
              </div>
            </li>
            <li>
              <div>
                <span className="mr-2 font-semibold">0</span>
                follwers
              </div>
            </li>
            <li>
              <div>
                <span className="mr-2 font-semibold">0</span>
                following
              </div>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-base font-semibold">
            {user?.name || 'name'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
