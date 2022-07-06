import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from 'hooks/useAuth'
import { SignUpFields } from 'interfaces/Login'
import { SubmitHandler, useForm } from 'react-hook-form'
import loginSchema from 'schema/login'

const SignUpForm = () => {
  const { register } = useAuth()

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFields>({
    resolver: yupResolver(loginSchema),
  })

  /**
   * Asynchronously registers a new user
   *
   * @async
   * @param {Object} data
   */
  const onSubmit: SubmitHandler<SignUpFields> = async (data: SignUpFields) => {
    const { email, password } = data

    await register(email, password)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="space-y-3">
        <div className="flex flex-col items-stretch">
          <div className="relative w-full text-sm">
            <label className="block w-full h-9 text-xs text-gray-500 leading-[36px]">
              Phone number, username, or email
            </label>
            <input
              className="w-full h-9 px-2 text-xs bg-gray-100 border border-solid border-gray-300 rounded-[3px] focus-visible:border-gray-500"
              type="text"
              {...registerField('email', { required: true })}
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
              {...registerField('password', { required: true })}
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
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  )
}

export default SignUpForm
