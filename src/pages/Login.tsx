import { Link, useNavigate } from 'react-router-dom'
import Button from '~/components/Button'
import Input from '~/components/Input'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { IAuthResponseErr, IRegister } from '~/types/registerr.type'
import { setInforUserLs } from '~/utils/auth'
import { useMutation } from '@tanstack/react-query'
import { loginAuth } from '~/api/auth.api'
import { toast } from 'react-toastify'

const schemaLogin = Yup.object({
  email: Yup.string().email('Email không đúng định dạng').required('Email là trường bắt buộc nhập '),
  password: Yup.string().min(6).required('Password là trường bắt buộc nhập')
})

type ILogin = Pick<IRegister, 'email' | 'password'>

export default function Login() {
  const navigate = useNavigate()
  const {
    setError,
    register,
    formState: { errors },
    handleSubmit
  } = useForm<ILogin>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schemaLogin)
  })

  const loginMutation = useMutation({
    mutationFn: (data: ILogin) => loginAuth(data)
  })
  console.log(loginMutation)
  const processForm = (data: ILogin) => {
    console.log(data)
    loginMutation.mutate(data, {
      onSuccess(data, variables, context) {
        console.log('data login respon', data)
        setInforUserLs(data.data.user)
        navigate('/')
        toast.success('Đăng nhập thành công')
      },
      onError: (error: any) => {
        console.log('error respon ', error)
        const formError: IAuthResponseErr = error.response?.data
        if (
          formError.statusCode === 401 &&
          formError.type == 'Unauthorized' &&
          formError.message == 'Email does not exist'
        ) {
          setError('email', {
            message: formError.detail,
            type: 'Server'
          })
        }
        if (
          formError.statusCode === 401 &&
          formError.type == 'Unauthorized' &&
          formError.message == 'Incorrect password'
        ) {
          setError('password', {
            message: formError.detail,
            type: 'Server'
          })
        }
      }
    })
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
            <p className='text-center text-lg font-medium mb-5 p-2'>Đăng nhập</p>

            <div className=''>
              <label htmlFor='email' className=' px-2'>
                Email
              </label>

              <Input
                name='email'
                register={register}
                type='email'
                errorMessage={errors.email?.message}
                placeholder='Enter email'
              />
            </div>
            <div>
              <div className='flex justify-between px-2'>
                <label htmlFor='password' className=''>
                  Mật khẩu
                </label>
                <span className='font-normal text-sm'>Quên mật khẩu ?</span>
              </div>

              <div className='relative'>
                <Input
                  type='password'
                  name='password'
                  register={register}
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
              Đăng nhập
            </Button>

            <p className='text-center text-sm text-gray-500'>
              Có phải bạn chưa có tài khoản?
              <Link className='underline ml-2' to='/register'>
                Đăng kí
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
