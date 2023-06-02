import { useMemo, useState } from 'react'
import Button from '~/components/Button'
import Input from '~/components/Input'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { IAuthResponseErr, IRegister } from '~/types/registerr.type'
import { Link, useNavigate } from 'react-router-dom'
import InputFile from '~/components/InputFile'
import { registerAuth } from '~/api/auth.api'
import { toast } from 'react-toastify'
import { uploadImage } from '~/api/general.api'

const schemaLogin = Yup.object({
  image: Yup.string(),
  email: Yup.string().email('Email không đúng định dạng').required('Email là trường bắt buộc nhập '),
  password: Yup.string().min(6).required('Password là trường bắt buộc nhập'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Nhập lại mật khẩu không đúng')
    .min(6, 'Mật khẩu ít nhất 6 ký tự')
    .required('CofirmPassword là trường bắt buộc nhập'),
  displayName: Yup.string().required('Không được bỏ trống')
})

export default function Register() {
  const [file, setFile] = useState<File>()
  const {
    setError,
    register,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm<IRegister>({
    defaultValues: {
      email: '',
      displayName: '',
      password: '',
      image: ''
    },
    resolver: yupResolver(schemaLogin)
  })

  const previewImage = useMemo(() => {
    return file ? URL.createObjectURL(file) : ''
  }, [file])

  const navigate = useNavigate()
  const avatar = watch('image')
  const uploadAvatarMutaion = useMutation(uploadImage)
  const registerAccountMutation = useMutation({
    mutationFn: (body: IRegister) => registerAuth(body)
  })

  const processForm = async (data: IRegister) => {
    console.log(data)

    let avatarName = avatar
    if (file) {
      const form = new FormData()
      form.append('image', file)
      const uploadRes = await uploadAvatarMutaion.mutateAsync(form)
      avatarName = uploadRes.data.data
    }
    registerAccountMutation.mutate(
      { ...data, image: avatarName },
      {
        onSuccess: () => {
          navigate('/login')
          toast.success('Dang ki thanh cong')
        },
        onError: (error: any) => {
          console.log(error)
          const formError: IAuthResponseErr = error.response?.data
          if (
            formError.statusCode === 422 &&
            formError.type == 'UnprocessableEntity' &&
            formError.message == 'Email already exists'
          ) {
            setError('email', {
              message: formError.detail,
              type: 'Server'
            })
          }
          if (
            formError.statusCode === 422 &&
            formError.type == 'UnprocessableEntity' &&
            formError.message == 'Invalid password'
          ) {
            setError('password', {
              message: formError.detail,
              type: 'Server'
            })
          }
        }
      }
    )
  }

  const handleChangeFile = (file?: File) => {
    setFile(file)
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
              {previewImage ? (
                <img src={previewImage} alt='' />
              ) : (
                <>
                  <p className='px-2 mb-2'>Ảnh</p>

                  <InputFile onChange={handleChangeFile} />
                </>
              )}
            </div>
          </div>
          <div className='!mt-2.5'>
            <p className='px-2 '>Email</p>

            <Input name='email' register={register} errorMessage={errors.email?.message} placeholder='Enter email' />
          </div>

          <div className='!mt-2.5'>
            <p className='px-2 '>Mật khẩu </p>

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
            <p className='px-2'>Nhập lại mật khẩu </p>

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
            <Link className='underline ml-2' to='/login'>
              Đăng nhập
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
