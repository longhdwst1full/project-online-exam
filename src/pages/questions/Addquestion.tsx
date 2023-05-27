import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Selector from '~/components/Selector'
import LayoutBody from '~/layout/LayoutBody'
import * as Yup from 'yup'

const FLAG = 5

const schemaForm = Yup.object({
  subject: Yup.string().required(),
  status: Yup.string().required(),
  level: Yup.string().required(),
  grade: Yup.string().required(),
  questionType: Yup.string().required(),
  questionGroup: Yup.string().required()
})
export default function Addquestion() {
  const [isModalAdd, setIdModelAdd] = useState(false)
  const [inputs, setInputs] = useState([
    { id: 0, component: <Input key={0} placeholder='Đáp án 1' /> },
    { id: 1, component: <Input key={1} placeholder='Đáp án 2' /> }
  ])

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

  const handleAddQuestion = () => {
    const nextKey = inputs.length

    if (FLAG > nextKey) {
      const newInput = {
        id: nextKey,
        component: (
          <div className='relative '>
            <div className='flex-1 '>
              <Input placeholder={`Đáp án ${nextKey + 1} `} />
            </div>
            <span
              className='absolute top-2 -right-9  h-6   w-6 text-center hover:bg-red-600   bg-gray-500 rounded-full'
              onClick={() => deleteInputAnswer(nextKey)}
            >
              X
            </span>
          </div>
        )
      }
      setInputs([...inputs, newInput])
    } else {
      alert('Max trả lời 5')
    }
  }
  const deleteInputAnswer = (id: number) => {
    setInputs(() => inputs.filter((input) => input.id !== id))
  }
  const handleForm = (data: any) => {
    console.log(data)
  }
  return (
    <LayoutBody titleConten='Add Question'>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleForm)} className='p-2 mt-10 w-2/3 m-auto'>
          {/* lớp và môn học  */}
          <div className='grid grid-cols-2 gap-12 items-center'>
            <Selector title='Môn học'>
              <option defaultValue="">Chọn Môn</option>
              <option value='1'>Anh</option>
              <option value='2'>toán</option>
            </Selector>

            <Selector title='Lớp'>
              <option defaultValue="">Chọn Lớp</option>
              <option value='1'>10</option>
              <option value='2'>11</option>
            </Selector>
          </div>
          {/* level và mức độ  */}
          <div className='grid grid-cols-2 gap-10 items-center'>
            <Selector title='Level'>
              <option defaultValue="">Level</option>
              <option value='1'>khó</option>
              <option value='2'>TB</option>
            </Selector>
            <Selector title='Mức độ'>
              <option defaultValue="">Mức độ</option>
              <option value='1'>Nhận biết</option>
              <option value='2'>Vận dụng</option>
            </Selector>
          </div>
          {/* status và câu hỏi  */}
          <div className='grid grid-cols-2 gap-10 items-center'>
            <div className='grid grid-cols-1 items-center'>
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
            </div>
            <div className='grid grid-cols-1'>
              <div className='grid grid-cols-4 items-center'>
                <div className='col-span-1 mb-5 py-3.5'>Câu hỏi</div>
                <div className='col-span-3 '>
                  <div className='grid grid-cols-2  mt-2 items-center'>
                    <div className='col-span-1 '>
                      <div className='flex items-center ml-1'>
                        <input
                          id='default-radio-3'
                          type='radio'
                          value=''
                          name='default-radio'
                          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                        />
                        <label htmlFor='default-radio-3' className=' p-2'>
                          1 Đáp án
                        </label>
                      </div>
                    </div>
                    <div className='col-span-1 '>
                      <div className='flex items-center ml-1'>
                        <input
                          id='default-radio-4'
                          type='radio'
                          value=''
                          name='default-radio'
                          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                        />
                        <label htmlFor='default-radio-4' className=' p-2 '>
                          2 Đáp án
                        </label>
                      </div>
                    </div>
                    <div className='col-span-2 mt-1 text-red-600 min-h-[1.25rem] text-sm'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* question */}
          {isModalAdd ? (
            <div className='mt-3 border border-gray-300 p-10 rounded-md'>
              <div className=''>
                <p className=' font-medium'>Câu hỏi của bạn : </p>
                <Input placeholder='Mời nhập câu hỏi ở đây' className='p-2' />
              </div>
              <div className='mt-2'>
                <p className=' font-medium'>Câu trả lời : </p>

                <div className='w-2/3 ml-10'>
                  {inputs.map(({ id, component }) => (
                    <div key={id}>{component}</div>
                  ))}
                </div>
              </div>
              <div className='grid w-2/3 m-auto grid-cols-2 justify-items-center items-center gap-6 mt-10'>
                <Button
                  className='border border-gray-300 bg-yellow-400 rounded-md  p-2 cursor-pointer font-medium'
                  onClick={handleAddQuestion}
                >
                  Thêm Câu Trả lời
                </Button>

                <Button
                  type='submit'
                  className='border border-gray-300 bg-green-500 rounded-md block p-2 cursor-pointer font-medium'
                >
                  Lưu
                </Button>
              </div>
            </div>
          ) : (
            <div className='text-center mt-10'>
              <Button
                className='border border-gray-300 bg-green-500 rounded-md w-1/3 p-2 cursor-pointer font-medium'
                onClick={() => setIdModelAdd(!isModalAdd)}
              >
                Thêm Câu hỏi
              </Button>
            </div>
          )}
        </form>
      </FormProvider>
    </LayoutBody>
  )
}
