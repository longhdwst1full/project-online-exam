import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import Input from '~/components/Input'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { IRegister } from '~/types/registerr.type'

const schemaLogin = Yup.object({
  email: Yup.string().email('Email không đúng định dạng').required('Email là trường bắt buộc nhập '),
  password: Yup.string().min(6).required('Password là trường bắt buộc nhập')
})

type ILogin = Pick<IRegister, 'email' | 'password'>

export default function Login() {
  const {
    setError,
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<ILogin>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schemaLogin)
  })

  const processForm = (data: ILogin) => {
    console.log(data)
  }
  return (
    <div className=''>
      <div className='flex justify-center items-center mx-auto h-[100vh]  max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className=' flex-1 mx-auto max-w-lg'>
          <h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>Get started today</h1>

          <form
            onSubmit={handleSubmit(processForm)}
            className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'
          >
            <p className='text-center text-lg font-medium mb-5 p-2'>Sign in to your account</p>

            <div>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>

              <Input
                name='email'
                register={register}
                type='email'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Enter email'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>

              <div className='relative'>
                <Input
                  type='password'
                  name='password'
                  register={register}
                  className='mt-8'
                  errorMessage={errors.password?.message}
                  placeholder='Enter password'
                />

                <span className='absolute inset-y-0  -top-4 end-0 grid place-content-center px-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                </span>
              </div>
            </div>

            <Button
              type='submit'
              className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
            >
              Sign in
            </Button>

            <p className='text-center text-sm text-gray-500'>
              No account?
              <Link className='underline' to='/register'>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
