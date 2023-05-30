import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Selector from '~/components/Selector'
import LayoutBody from '~/layout/LayoutBody'
import * as Yup from 'yup'
import InputRadio from '~/components/InputRadio'

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

export default function Addquestion() {
  const [arraddInputAnswer, setArraddInputAnswer] = useState<number[] | []>([])
  const [isModalAdd, setIdModelAdd] = useState(false)
  const [currentInput, setCurrentInput] = useState<number>(3)
  const [typeInput, setTypeInput] = useState<'radio' | 'checkbox'>('radio')
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
      answer2: '',
      answer3: '',
      answer4: '',
      answer5: ''
    },
    resolver: yupResolver(schemaForm)
  })
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = methods

  const handleAddQuestion = (id: number) => {
    if (id < 6) {
      setArraddInputAnswer((pre) => [...pre, id])
      setCurrentInput((pre) => pre + 1)
    }
  }
  const deleteInputAnswer = (id: string) => {
    setArraddInputAnswer(() => arraddInputAnswer.filter((item) => item !== Number(id)))
  }
  const handleForm = (data: IFormQuestion) => {
    console.log(data)
    console.log('Ađ')
  }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.value == '1' ? setTypeInput('radio') : setTypeInput('checkbox')

  const ad = watch()
  console.log(ad)
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
                    <InputRadio
                      register={register}
                      name='questionType'
                      value='1'
                      label='1 Đáp án'
                      onChange={handleOnChange}
                    />
                    <InputRadio
                      register={register}
                      name='questionType'
                      value='2'
                      label='2 Đáp án'
                      onChange={handleOnChange}
                    />

                    <div className='col-span-2 mt-1 text-red-600 min-h-[1.25rem] text-sm'>
                      {errors.questionType?.message}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* question */}
          {isModalAdd && watch('questionType') ? (
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

                <div className='ml-10'>
                  <div className='flex gap-3 w-full items-center'>
                    <input value='1' className='w-4 h-4' type={typeInput} {...register('answer')} />
                    <div className='flex-1'>
                      <Input
                        name='answer1'
                        register={register}
                        errorMessage={errors.answer1?.message || errors.answer?.message}
                        placeholder='Đáp án 1'
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div className=' flex gap-3 w-full items-center'>
                    <input value='2' className='w-4 h-4' type={typeInput} {...register('answer')} />
                    <div className='flex-1 '>
                      <Input
                        name='answer2'
                        placeholder='Đáp án 2 '
                        register={register}
                        errorMessage={errors.answer2?.message || errors.answer?.message}
                      />
                    </div>
                  </div>
                  {/*  */}
                  {arraddInputAnswer &&
                    arraddInputAnswer.length > 0 &&
                    arraddInputAnswer.map((item, index) => {
                      return (
                        <div key={item} className=' flex gap-3 w-full items-center'>
                          <input value={item} className='w-4 h-4' type={typeInput} {...register('answer')} />
                          <div className='flex-1 relative'>
                            <Input
                              name={`answer${item}`}
                              placeholder={`Đáp án ${item}`}
                              register={register}
                              errorMessage={errors.answer?.message}
                            />
                            <div className='absolute top-5 -right-9 h-6 w-6 text-center bg-gray-100 hover:bg-gray-500 rounded-full'>
                              <i
                                onClick={() => deleteInputAnswer(item)}
                                className='fa-solid fa-xmark fa-lg'
                                style={{ color: '#373434' }}
                              />
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  {/*  */}
                </div>
              </div>
              <div className='grid w-2/3 m-auto grid-cols-2 justify-items-center items-center gap-6 mt-10'>
                <Button
                  type='button'
                  className='border border-gray-300 bg-yellow-400 rounded-md  p-2 cursor-pointer font-medium'
                  onClick={() => handleAddQuestion(currentInput)}
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
