import Image from 'next/image'
import Link from 'next/link'

const ProfileSwitch = ({ user }: any) => {
  const handleProfileSwitch = () => {
    alert('Switch profile')
  }

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="lg:flex lg:items-center lg:flex-grow">
        <div className="relative w-[56px] h-[56px] mr-4 rounded-full overflow-hidden">
          <Link href={`/${user?.username}`}>
            <a>
              <Image
                src={user?.image}
                alt={user?.name}
                width={56}
                height={56}
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
          <span>{user?.name}</span>
        </div>
      </div>
      <div>
        <button
          className="text-sm font-semibold text-blue-500"
          onClick={handleProfileSwitch}
        >
          Switch
        </button>
      </div>
    </div>
  )
}

export default ProfileSwitch
