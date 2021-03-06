import Link from 'next/link'
import LoginForm from './forms/LoginForm'
import Logo from './Logo'

const Login = () => {
  return (
    <section>
      <main>
        <article className="lg:flex lg:flex-row lg:flex-grow lg:items-center lg:justify-center lg:max-w-[935px] lg:mx-auto lg:mt-16">
          <div className="lg:basis-[427.32px] lg:relative lg:h-[581.15px] lg:mr-8 lg:bg-phones lg:bg-no-repeat lg:bg-phone">
            <div className="lg:absolute lg:top-[30px] lg:right-[18px] lg:w-[250px] lg:h-[538.84px] lg:bg-cover lg:bg-no-repeat lg:bg-chat"></div>
          </div>
          <div className="lg:basis-[350px] space-y-3">
            <div className="p-10 lg:border lg:border-solid lg:border-gray-300">
              <div className="max-w-[175px] mx-auto mb-3">
                <Logo />
              </div>
              <div className="max-w-[300px] lg:max-w-[350px] mx-auto">
                <LoginForm />
              </div>
            </div>
            <div className="p-5 text-sm text-center lg:border lg:border-solid lg:border-gray-300">
              <p>
                {"Don't have an acccount?"}
                <Link href="/accounts/emailsignup">
                  <a className="ml-1 text-blue-500">Sign up</a>
                </Link>
              </p>
            </div>
          </div>
        </article>
      </main>
    </section>
  )
}

export default Login
