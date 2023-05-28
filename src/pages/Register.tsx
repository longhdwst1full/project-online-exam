import React from 'react'
import Button from '~/components/Button'
import Input from '~/components/Input'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { IRegister } from '~/types/registerr.type'
import { Link } from 'react-router-dom'

const schemaLogin = Yup.object({
  email: Yup.string().email('Email không đúng định dạng').required('Email là trường bắt buộc nhập '),
  password: Yup.string().min(6).required('Password là trường bắt buộc nhập'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Nhập lại mật khẩu không đúng')
    .min(6, 'Mật khẩu ít nhất 6 ký tự')
    .required('CofirmPassword là trường bắt buộc nhập'),
  displayName: Yup.string().required('Không được bỏ trống')
})

export default function Register() {
  const {
    setError,
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<IRegister>({
    defaultValues: {
      email: '',
      displayName: '',
      password: ''
    },
    resolver: yupResolver(schemaLogin)
  })

  const processForm = (data: IRegister) => {
    console.log(data)
  }
  return (
    <div className='flex justify-center items-center mx-auto h-[100vh]  max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className=' flex-1 mx-auto max-w-lg'>
        <h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>Đăng kí</h1>

        <form
          onSubmit={handleSubmit(processForm)}
          className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'
        >
          <div className='grid grid-cols-2 gap-6'>
            <div>
              <p className='px-2'>Tên hiển thị</p>
              <Input
                name='displayName'
                type='text'
                register={register}
                errorMessage={errors.displayName?.message}
                placeholder='Enter displayName'
              />
            </div>
            <div>
              <p className='px-2'>Ảnh</p>

              <Input name='image' register={register} classNameInput='py-2.5' type='file' />
            </div>
          </div>
          <div className='!mt-2.5'>
            <p className='px-2 '>Email</p>

            <Input name='email' register={register} errorMessage={errors.email?.message} placeholder='Enter email' />
          </div>

          <div className='!mt-2.5'>
            <p className='px-2 '>Password</p>

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
          {/* confirmpassword */}
          <div className='!mt-2.5'>
            <p className='px-2'>ConfirmPassword</p>

            <div className='relative'>
              <Input
                type='password'
                name='confirmPassword'
                register={register}
                errorMessage={errors.confirmPassword?.message}
                placeholder='Enter confirmPassword'
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
            Đăng kí
          </Button>

          <p className='text-center text-sm text-gray-500'>
            Bạn đã có tài khoản?
            <Link className='underline' to='/login'>
              Đăng nhập
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
