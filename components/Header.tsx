import { HeartIcon, LogoutIcon } from '@heroicons/react/outline'
import { HomeIcon, UserCircleIcon } from '@heroicons/react/solid'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="lg:flex lg:items-center lg:h-[60px] border-b border-solid border-gray-300">
      <div className="lg:flex lg:items-center lg:justify-between w-full lg:max-w-[975px] lg:mx-auto">
        <h1 className="inline-block lg:max-w-[103px]">
          <Logo />
        </h1>
        <div>Search</div>
        <div className="flex items-center justify-between space-x-2">
          <Link href="/">
            <a>
              <HomeIcon className="w-7 h-7" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <HeartIcon className="w-7 h-7" />
            </a>
          </Link>
          <Link href="/accounts/edit">
            <a>
              <UserCircleIcon className="w-7 h-70" />
            </a>
          </Link>
          <button onClick={() => signOut()}>
            <LogoutIcon className="w-7 h-10" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
