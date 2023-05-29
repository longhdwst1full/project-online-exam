import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import LayoutBody from '~/layout/LayoutBody'
import * as Yup from 'yup'
import Selector from '~/components/Selector'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Select from '~/components/Select'

interface IExam {
  subject: string
  grade: string
  title: string
  status: string
  code: string
  time: string
  level: string
  image?: string
  listquestion: [string]
}

const validateForm = Yup.object({
  subject: Yup.string().required(),
  grade: Yup.string().required(),
  title: Yup.string().required(),
  status: Yup.string().required(),
  code: Yup.string().required(),
  time: Yup.string().required(),
  level: Yup.string().required(),
  image: Yup.string(),
  listquestion: Yup.string().required()
})

export default function AddExam() {
  const methods = useForm<IExam>({
    defaultValues: {
      subject: '',
      grade: '',
      title: '',
      status: '',
      code: '',
      time: '',
      level: '',
      image: '',
      listquestion: []
    },
    resolver: yupResolver(validateForm)
  })
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
    setError
  } = methods

  const handleForm = (data: IExam) => {
    console.log(data)
  }
  const ad = watch()
  console.log(ad)

  return (
    <LayoutBody titleConten='Thêm bài thi'>
      <FormProvider {...methods}>
        {/* <Select /> */}
        <form onSubmit={handleSubmit(handleForm)} className='grid grid-cols-2 p-2 mt-10'>
          <div className='grid w-5/6 m-auto col-span-1 border-r-[1px] border-gray-400 pr-6'>
            {/* lớp và môn học  */}

            <div className='grid grid-cols-1 items-center'>
              <div className='grid grid-cols-4 items-center'>
                <div className='col-span-1 mb-5 py-3'>Môn học</div>
                <div className='col-span-3 '>
                  <Select register={register} name='subject' errorMessage={errors.subject?.message}>
                    <option value='' disabled>
                      Chọn Môn
                    </option>
                    <option value='1'>Anh</option>
                    <option value='2'>toán</option>
                  </Select>
                </div>
              </div>
            </div>
            {/*  */}

            <div className='grid grid-cols-4'>
              <div className='col-span-1 mb-5 py-3.5'>Tiêu đề</div>
              <div className='col-span-3'>
                <Input
                  placeholder='Mời nhập mã tiêu đề ..'
                  name='title'
                  register={register}
                  errorMessage={errors.title?.message}
                />
              </div>
            </div>

            <div className='grid grid-cols-4 items-center'>
              <div className='col-span-1 mb-5 py-3.5'>Status</div>
              <div className='col-span-3 '>
                <div className='grid grid-cols-2  mt-2 items-center'>
                  <div className='col-span-1 '>
                    <div className='flex items-center ml-1'>
                      <input
                        id='default-radio-1'
                        type='radio'
                        value='1'
                        {...register('status')}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                      <label htmlFor='default-radio-1' className=' p-2'>
                        Public
                      </label>
                    </div>
                  </div>
                  <div className='col-span-1 '>
                    <div className='flex items-center ml-1'>
                      <input
                        id='default-radio-2'
                        type='radio'
                        value='2'
                        {...register('status')}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                      <label htmlFor='default-radio-2' className=' p-2 '>
                        Private
                      </label>
                    </div>
                  </div>
                  <div className='col-span-2 mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.status?.message}</div>
                </div>
              </div>
            </div>

            <div className='flex justify-between items-center gap-4'>
              <div className='flex-1 grid grid-cols-3 '>
                <div className='col-span-1 my-4 py-2.5'>Thời gian</div>
                <div className='col-span-2'>
                  <Input
                    register={register}
                    name='time'
                    type='number'
                    min='15'
                    errorMessage={errors.time?.message}
                    placeholder='30 phút'
                    classNameInput='mt-2'
                  />
                </div>
              </div>
              <div className='grid flex-1 grid-cols-2'>
                <div className='col-span-2 mt-2'>
                  <div className='grid grid-cols-1 items-center'>
                    <div className='grid grid-cols-4 items-center'>
                      <div className='col-span-1 mb-5 py-3'>Lớp</div>
                      <div className='col-span-3 '>
                        <Select register={register} name='grade' errorMessage={errors.grade?.message}>
                          <option value='' disabled>
                            Chọn Lớp
                          </option>
                          <option value='1'>10</option>
                          <option value='2'>11</option>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-4'>
              <div className='flex-1 grid grid-cols-3 '>
                <div className='col-span-1 my-4 py-2.5'>Mã code</div>
                <div className='col-span-2'>
                  <Input register={register} name='code' errorMessage={errors.code?.message} />
                </div>
              </div>
              <div className='grid flex-1 grid-cols-2'>
                <div className='col-span-2 mt-2'>
                  <div className='grid grid-cols-1 items-center'>
                    <div className='grid grid-cols-4 items-center'>
                      <div className='col-span-1 mb-5 py-3'>Level</div>
                      <div className='col-span-3 '>
                        <Select register={register} name='level' errorMessage={errors.level?.message}>
                          <option value='' disabled>
                            Level
                          </option>
                          <option value='1'>khó</option>
                          <option value='2'>TB</option>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-4'>
              <div className='flex-1 grid grid-cols-3 '>
                <div className='col-span-1 mb-5 mr-2 py-3.5'>Ảnh</div>
                <div className='col-span-2'>
                  <Input register={register} name='images' type='file' />
                </div>
              </div>
              <div className='flex-1'></div>
            </div>

            <div className='text-center mt-10'>
              <Button
                type='submit'
                className='border border-gray-300 bg-green-500 rounded-md w-1/3 p-2 cursor-pointer font-medium'
              >
                Lưu
              </Button>
            </div>
          </div>
          <div className='col-span-1 p-3'>
            <p className='text-center my-3 text-xl font-medium'>Câu hỏi</p>
            <div className='p-2 mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.listquestion?.message}</div>
            {/* choose add question */}
            <div className='border border-gray-400 rounded'>
              <div className='flex items-center pl-4 '>
                <input
                  id='bordered-checkbox-1'
                  type='checkbox'
                  value='1'
                  {...register('listquestion')}
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  htmlFor='bordered-checkbox-1'
                  className='w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  11 23232
                </label>
              </div>
              <div className='flex items-center pl-4'>
                <input
                  id='bordered-checkbox-1'
                  type='checkbox'
                  value='2'
                  {...register('listquestion')}
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  htmlFor='bordered-checkbox-1'
                  className='w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  11 23232
                </label>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </LayoutBody>
  )
}
