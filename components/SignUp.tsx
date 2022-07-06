import Link from 'next/link'
import SignUpForm from './forms/SignUpForm'
import Logo from './Logo'

const SignUp = () => {
  return (
    <section>
      <main>
        <div className="lg:flex lg:flex-col lg:max-w-[348px] lg:mx-auto lg:mt-16 space-y-3">
          <div className="p-10 lg:border lg:border-solid lg:border-gray-300 space-y-3">
            <div className="max-w-[175px] mx-auto">
              <Logo />
            </div>
            <h2 className="text-[17px] font-semibold text-gray-500 leading-[20px] text-center">
              Sign up to see photos and videos from your friends.
            </h2>
            <div className="max-w-[300px] lg:max-w-[350px] mx-auto">
              <SignUpForm />
            </div>
          </div>
          <div className="p-5 text-sm text-center lg:border lg:border-solid lg:border-gray-300">
            <p>
              Have an account?
              <Link href="/accounts/login">
                <a className="ml-1 text-blue-500">Log in</a>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </section>
  )
}

export default SignUp
