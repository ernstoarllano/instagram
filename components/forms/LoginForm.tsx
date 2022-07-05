import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from 'hooks/useAuth'
import { Login } from 'interfaces/Login'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import loginSchema from 'schema/login'

const LoginForm = () => {
  const { signIn, signUp } = useAuth()
  const [login, setLogin] = useState<boolean | false>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<Login> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password)
    } else {
      await signUp(email, password)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="space-y-2">
        <div className="flex flex-col items-stretch">
          <div className="relative w-full text-sm">
            <label className="block w-full h-9 text-xs text-gray-500 leading-[36px]">
              Phone number, username, or email
            </label>
            <input
              className="w-full h-9 px-2 text-xs bg-gray-100 border border-solid border-gray-300 rounded-[3px] focus-visible:border-gray-500"
              type="text"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="text-sm text-red-400">
                Please enter a valid email.
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-stretch">
          <div className="relative w-full text-sm">
            <label className="block w-full h-9 text-xs text-gray-500 leading-[36px]">
              Password
            </label>
            <input
              className="w-full h-9 px-2 text-xs bg-gray-100 border border-solid border-gray-300 rounded-[3px] focus-visible:border-gray-500"
              type="password"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className="text-sm text-red-400">
                Your password must contain between 6 and 20 characters.
              </p>
            )}
          </div>
        </div>
        <div>
          <button
            className="w-full h-9 font-semibold text-white bg-blue-500 rounded-[3px]"
            type="submit"
            onClick={() => setLogin(true)}
          >
            Log In
          </button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
