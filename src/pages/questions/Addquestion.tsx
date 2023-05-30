import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Selector from '~/components/Selector'
import LayoutBody from '~/layout/LayoutBody'
import * as Yup from 'yup'
import Select from '~/components/Select'
import InputRadio from '~/components/InputRadio'

const FLAG = 5

interface IFormQuestion {
  subject: string
  status: string
  level: string
  grade: string
  questionType: string
  questionGroup: string
  question: string
  answer: string
  answer1: string
  answer2: string
  answer3?: string
  answer4?: string
  answer5?: string
}
const schemaForm = Yup.object({
  subject: Yup.string().required(),
  status: Yup.string().required(),
  level: Yup.string().required(),
  grade: Yup.string().required(),
  questionType: Yup.string().required(),
  questionGroup: Yup.string().required(),
  question: Yup.string().required(),
  answer: Yup.string().required(),
  answer1: Yup.string().required(),
  answer2: Yup.string().required(),
  answer3: Yup.string(),
  answer4: Yup.string(),
  answer5: Yup.string()
})

const InputAnswer = () => {
  return (
    <div>
      <Input />
    </div>
  )
}

export default function Addquestion() {
  const [isModalAdd, setIdModelAdd] = useState(false)
  const [inputs, setInputs] = useState([
    { id: 0, component: <Input key={0} placeholder='Đáp án 1' /> },
    { id: 1, component: <Input key={1} placeholder='Đáp án 2' /> }
  ])

  const methods = useForm<IFormQuestion>({
    defaultValues: {
      subject: '',
      status: '',
      level: '',
      grade: '',
      questionType: '',
      questionGroup: '',
      question: '',
      answer: '',
      answer1: '',
      answer2: ''
    },
    resolver: yupResolver(schemaForm)
  })
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    watch
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
  const handleForm = (data: IFormQuestion) => {
    console.log(data)
    console.log('Ađ')
  }

  const ad = watch()
  // console.log(ad)
  return (
    <LayoutBody titleConten='Thêm câu hỏi'>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleForm)} className='p-2 mt-10 w-2/3 m-auto'>
          {/* lớp và môn học  */}
          <div className='grid grid-cols-2 gap-12 items-center'>
            {/* subject */}

            <Selector title='Môn học' name='subject' errorMessage={errors.subject?.message} register={register}>
              <option className='font-sm' value='' disabled>
                Chọn Môn
              </option>
              <option value='1'>Anh</option>
              <option value='2'>toán</option>
            </Selector>
            <Selector title='Lớp' name='grade' errorMessage={errors.grade?.message} register={register}>
              <option className='font-sm' value='' disabled>
                Chọn Lớp
              </option>
              <option value='1'>10</option>
              <option value='2'>11</option>
            </Selector>

            {/* lớp grade */}
          </div>
          {/* level và mức độ  */}
          <div className='grid grid-cols-2 gap-10 items-center'>
            <Selector title='Level' name='level' errorMessage={errors.level?.message} register={register}>
              <option className='font-sm' value='' disabled>
                Level
              </option>
              <option value='1'>khó</option>
              <option value='2'>TB</option>
            </Selector>

            <Selector
              title='Mức độ'
              name='questionGroup'
              errorMessage={errors.questionGroup?.message}
              register={register}
            >
              <option className='font-sm' value='' disabled>
                Mức độ
              </option>
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
                    {/*  */}
                    <InputRadio register={register} name='status' value='1' label='Public' />
                    <InputRadio register={register} name='status' value='2' label='Private' />

                    <div className='col-span-2 mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.status?.message}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1'>
              <div className='grid grid-cols-4 items-center'>
                <div className='col-span-1 mb-5 py-3.5'>Câu hỏi</div>
                <div className='col-span-3 '>
                  <div className='grid grid-cols-2  mt-2 items-center'>
                    <InputRadio register={register} name='questionType' value='1' label='1 Đáp án' />
                    <InputRadio register={register} name='questionType' value='2' label='2 Đáp án' />

                    <div className='col-span-2 mt-1 text-red-600 min-h-[1.25rem] text-sm'>
                      {errors.questionType?.message}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* question */}
          {isModalAdd ? (
            <div className='mt-3 border border-gray-300 p-10 rounded-md'>
              <div>
                <p className=' font-medium'>Câu hỏi của bạn : </p>

                <Input
                  placeholder='Mời nhập câu hỏi ở đây'
                  name='question'
                  register={register}
                  errorMessage={errors.question?.message}
                />
              </div>
              <div className='mt-2'>
                <p className=' font-medium'>Câu trả lời : </p>

                <div className='w-2/3 ml-10'>
                  <Input
                    name='answer1'
                    register={register}
                    errorMessage={errors.answer1?.message}
                    placeholder='Đáp án 1'
                  />
                  <Input
                    name='answer2'
                    placeholder='Đáp án 2 '
                    register={register}
                    errorMessage={errors.answer2?.message}
                  />
                </div>
                <div className='mt-3'>
                  Đáp án : <Input register={register} name='answer' placeholder='Nhập đáp án' />
                </div>
              </div>
              <div className='grid w-2/3 m-auto grid-cols-2 justify-items-center items-center gap-6 mt-10'>
                <Button
                  type='button'
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
                type='button'
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
