import { yupResolver } from '@hookform/resolvers/yup'
import { useMemo, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import LayoutBody from '~/layout/LayoutBody'
import * as Yup from 'yup'
import Selector from '~/components/Selector'
import Button from '~/components/Button'
import Input from '~/components/Input'
import Select from '~/components/Select'
import InputRadio from '~/components/InputRadio'
import { useMutation, useQuery } from '@tanstack/react-query'
import { addExam } from '~/api/exam.api'
import { IExam } from '~/types/exam.type'
import { useNavigate } from 'react-router-dom'
import {
  getGrades,
  getLevels,
  getQuestionGroup,
  getQuestiontypes,
  getStatus,
  getSubjects,
  uploadImage
} from '~/api/general.api'
import InputFile from '~/components/InputFile'
import { getAllQuestions } from '~/api/question.api'

interface IExamForm {
  subject: string
  grade: string
  title: string
  status: string
  code: string
  time: string
  level: string
  image?: string
  listquestion: number[]
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
  listquestion: Yup.number().required()
})

export default function AddExam() {
  const methods = useForm<IExamForm>({
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
  const addExamMutation = useMutation({
    mutationKey: ['addExam'],
    mutationFn: (data: Omit<IExam, 'id'>) => addExam(data)
  })
  const [file, setFile] = useState<File>()
  const previewImage = useMemo(() => {
    return file ? URL.createObjectURL(file) : ''
  }, [file])
  const uploadAvatarMutaion = useMutation(uploadImage)
  const navigate = useNavigate()
  const { data: allQuestionQuery } = useQuery({
    queryKey: ['allquery'],
    queryFn: () => getAllQuestions()
  })
  // get list genaral
  const { data: gradesQuery } = useQuery({
    queryKey: ['grades'],
    queryFn: () => getGrades()
  })
  const { data: subjectQuery } = useQuery({
    queryKey: ['subject'],
    queryFn: () => getSubjects()
  })
  const { data: statusQuery } = useQuery({
    queryKey: ['status'],
    queryFn: () => getStatus()
  })
  const { data: levelQuery } = useQuery({
    queryKey: ['level'],
    queryFn: () => getLevels()
  })
  console.log('status', statusQuery)

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
    setError
  } = methods
  const inputFile = useRef(null)
  const ad = watch()
  console.log(ad)
  const avatar = watch('image')

  const handleForm = async (data: IExamForm) => {
    console.log(data)

    let avatarName = avatar
    if (file) {
      const form = new FormData()
      form.append('image', file)
      const uploadRes = await uploadAvatarMutaion.mutateAsync(form)
      avatarName = uploadRes.data.data
    }

    addExamMutation.mutate(
      {
        name: data.title,
        code: data.code,
        image: avatarName,
        subjectId: Number(data.subject),
        gradeId: Number(data.grade),
        levelId: Number(data.level),
        statusId: Number(data.status),
        time: Number(data.time),
        idQuestions: [5, 6, 9, 11]
      },
      {
        onSuccess: () => {
          // navigate('/login')
          toast.success('Them thanh cong')
        },
        onError: (error) => {
          console.log(error)
        }
      }
    )
  }

  const handleChangeFile = (file?: File) => {
    setFile(file)
  }
  return (
    <LayoutBody titleConten='Thêm bài thi'>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleForm)} className='grid grid-cols-2 p-2 mt-10'>
          <div className='grid w-5/6 m-auto col-span-1 border-r-[1px] border-gray-400 pr-6'>
            {/* lớp và môn học  */}
            <Selector title='Môn học' name='subject' errorMessage={errors.subject?.message} register={register}>
              <option className='font-sm' value='' disabled>
                Chọn Môn
              </option>
              {subjectQuery?.data &&
                subjectQuery.data.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </Selector>

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
                  <InputRadio register={register} name='status' value='1' label='Public' />
                  <InputRadio register={register} name='status' value='2' label='Private' />
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
              {/* grandes */}
              <div className='grid flex-1 grid-cols-2'>
                <div className='col-span-2 mt-2'>
                  <Selector title='Lớp' name='grade' errorMessage={errors.grade?.message} register={register}>
                    <option className='font-sm' value='' disabled>
                      Chọn Lớp
                    </option>
                    {gradesQuery?.data &&
                      gradesQuery.data.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                  </Selector>
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
                  {/* level */}
                  <Selector title='Level' name='level' errorMessage={errors.level?.message} register={register}>
                    <option className='font-sm' value='' disabled>
                      Level
                    </option>
                    {levelQuery?.data &&
                      levelQuery.data.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                  </Selector>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-4'>
              <div className='flex-1 grid grid-cols-3 '>
                {/* <div className='col-span-1 mb-5 mr-2 py-3.5'>Ảnh</div>
                <div className='col-span-2'>
                  <Input register={register} name='images' type='file' />
                </div> */}
                {previewImage ? (
                  <img src={previewImage} alt='' />
                ) : (
                  <>
                    <p className='px-2 mb-2'>Ảnh</p>

                    <InputFile onChange={handleChangeFile} />
                  </>
                )}
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
              {allQuestionQuery?.data &&
                allQuestionQuery?.data.data.map((item) => (
                  <div key={item.id} className='flex items-center pl-4 '>
                    <input
                      id='bordered-checkbox-1'
                      type='checkbox'
                      value={item.id}
                      {...register('listquestion')}
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    />
                    <label
                      htmlFor='bordered-checkbox-1'
                      className='w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      {item.content}
                    </label>
                  </div>
                ))}
            </div>
          </div>
        </form>
      </FormProvider>
    </LayoutBody>
  )
}
