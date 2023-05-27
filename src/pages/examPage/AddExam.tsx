import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import LayoutBody from '~/layout/LayoutBody'
import * as Yup from 'yup'
import Selector from '~/components/Selector'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Select from '~/components/Select'

const schemaForm = Yup.object({})
export default function AddExam() {
  const methods = useForm({
    defaultValues: {},
    resolver: yupResolver(schemaForm)
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

  const handleForm = (data: any) => {
    console.log(data)
  }
  return (
    <LayoutBody titleConten='Thêm bài thi'>
      <FormProvider {...methods}>
        {/* <Select /> */}
        <form onSubmit={handleSubmit(handleForm)} className='grid grid-cols-2 p-2 mt-10'>
          <div className='grid w-5/6 m-auto col-span-1 border-r-[1px] border-gray-400 pr-6'>
            {/* lớp và môn học  */}

            <Selector title='Môn học'>
              <option defaultValue=''>Chọn Môn</option>
              <option value='1'>Anh</option>
              <option value='2'>toán</option>
            </Selector>

            <div className='grid grid-cols-4'>
              <div className='col-span-1 mb-5 py-3.5'>Tiêu đề</div>
              <div className='col-span-3'>
                <Input placeholder='Mời nhập mã tiêu đề ..' />
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
                        value=''
                        name='default-radio'
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
                        value=''
                        name='default-radio'
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                      <label htmlFor='default-radio-2' className=' p-2 '>
                        Private
                      </label>
                    </div>
                  </div>
                  <div className='col-span-2 mt-1 text-red-600 min-h-[1.25rem] text-sm'></div>
                </div>
              </div>
            </div>

            <div className='flex justify-between gap-4'>
              <div className='flex-1 grid grid-cols-3 '>
                <div className='col-span-1 mb-5 mr-2 py-3.5'>Thời gian</div>
                <div className='col-span-2'>
                  <Input />
                </div>
              </div>
              <div className='grid flex-1 grid-cols-2'>
                <div className='col-span-2 mt-2'>
                  <Selector title='Lớp'>
                    <option defaultValue=''>Chọn Lớp</option>
                    <option value='1'>10</option>
                    <option value='2'>11</option>
                  </Selector>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-4'>
              <div className='flex-1 grid grid-cols-3 '>
                <div className='col-span-1 mb-5 mr-2 py-3.5'>Mã code</div>
                <div className='col-span-2'>
                  <Input />
                </div>
              </div>
              <div className='grid flex-1 grid-cols-2'>
                <div className='col-span-2 mt-2'>
                  <Selector title='Level'>
                    <option defaultValue=''>Level</option>
                    <option value='1'>khó</option>
                    <option value='2'>TB</option>
                  </Selector>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-4'>
              <div className='flex-1 grid grid-cols-3 '>
                <div className='col-span-1 mb-5 mr-2 py-3.5'>Ảnh</div>
                <div className='col-span-2'>
                  <Input type='file' />
                </div>
              </div>
              <div className='flex-1'></div>
            </div>

            <div className='text-center mt-10'>
              <Button className='border border-gray-300 bg-green-500 rounded-md w-1/3 p-2 cursor-pointer font-medium'>
                Lưu
              </Button>
            </div>
          </div>
          <div className='col-span-1 p-3'>
            <p className='text-center my-3 text-xl font-medium'>Câu hỏi</p>
            {/* choose add question */}
            <div className='border border-gray-400 rounded'>
              <div className='flex items-center pl-4 '>
                <input
                  id='bordered-checkbox-1'
                  type='checkbox'
                  value=''
                  name='bordered-checkbox'
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
                  value=''
                  name='bordered-checkbox'
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
