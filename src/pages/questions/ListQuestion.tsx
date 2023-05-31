import { useMutation, useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteQuestion, getAllQuestions } from '~/api/question.api'
import Button from '~/components/Button'
import Modal from '~/components/ModalCustome'
import LayoutBody from '~/layout/LayoutBody'
import { IQuestionsResponse } from '~/types/question.type'
import { toast } from 'react-toastify'

export default function ListQuestion() {
  const { data: questionQuery } = useQuery({
    queryKey: ['listQuestion'],
    queryFn: () => getAllQuestions()
  })
  const deleteQuestionMutation = useMutation({
    mutationKey: ['deleteQuestion'],
    mutationFn: (id: number) => deleteQuestion(id),
    onSuccess() {
      toast.success('Delete successfully!')
    },
    onError(error) {
      console.log(error)
    }
  })
  const [listQuestions, setListQuestions] = useState<IQuestionsResponse[] | []>([])

  const [oneQuestion, setOneQuestion] = useState<IQuestionsResponse>()
  const [isModal, setIsModal] = useState<boolean>(false)
  const [idQuestion, setIdQueston] = useState<number | null>(null)

  useEffect(() => {
    if (questionQuery?.data) {
      const questionsArray = Array.isArray(questionQuery.data) ? questionQuery.data : [questionQuery.data]
      setListQuestions((prev) => [...prev, ...questionsArray])
    }
  }, [questionQuery?.data])

  const handleDeleteQuestion = (id: number) => {
    const a = confirm('Are you sure you want to delete')
    if (a) {
      deleteQuestionMutation.mutate(id)
    }
  }

  useEffect(() => {
    const aquestion = listQuestions.find((item) => item.id === idQuestion)

    setOneQuestion(aquestion)
  }, [idQuestion, listQuestions])
  const bodyContent = (
    <div className='grid grid-cols-2 justify-items-center pb- gap-4'>
      {oneQuestion &&
        oneQuestion.answers.map((item) => (
          <div key={item.id} className='col-span-1'>
            {item.content}
          </div>
        ))}
    </div>
  )
  return (
    <div className='relative'>
      <LayoutBody titleConten='Danh sách Câu hỏi' btnLink='/question/add' btnTitle='Thêm câu hỏi'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Tiêu Đề
              </th>
              {/* <th scope='col' className='px-6 py-3'>
                Code
              </th> */}
              <th scope='col' className='px-6 py-3 text-center'>
                Đáp án
              </th>
              <th scope='col' className='w-fit px-6 py-3 text-center'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {listQuestions &&
              listQuestions.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                  >
                    <th scope='row' className='px-4 py-2'>
                      {item.content}
                    </th>
                    <td className='px-4 py-2 grid gap-4 grid-cols-2 justify-items-center'>
                      {item.answers &&
                        item.answers.map((answer, index) => (
                          <div key={answer.id} className='col-span-1'>
                            <p>{answer.content}</p>
                          </div>
                        ))}
                    </td>
                    {/* <td className='px-4 py-2'>$2999</td> */}
                    <td className='text-center w-fit px-4 py-2'>
                      <div className='w-full flex justify-center gap-4 items-center'>
                        <Button
                          className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                          onClick={() => {
                            setIdQueston(item.id)
                            setIsModal(true)
                          }}
                        >
                          <i className='p-2  fa-solid fa-xl fa-eye' style={{ color: '#FFBD1A' }} />
                        </Button>
                        <Link
                          to={item.statusId === 3 ? `question/${item.id}/edit` : ''}
                          className={classNames('p-2  font-medium text-blue-600 dark:text-blue-500 hover:underline', {
                            'text-orange cursor-not-allowed': item.statusId !== 3
                          })}
                        >
                          <i
                            className={classNames('fa-regular fa-pen-to-square fa-xl', {
                              '!text-[#2011ef]': item.statusId === 3,
                              '!text-[#48abf1]': item.statusId !== 3
                            })}
                          />
                        </Link>
                        <Button
                          className='p-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'
                          disabled={item.statusId === 3 ? false : true}
                          onClick={() => handleDeleteQuestion(item.id)}
                        >
                          <i
                            className={classNames('fa-solid fa-trash fa-xl', {
                              '!text-[#ff0000]': item.statusId === 3,
                              '!text-[#d9acac]': item.statusId !== 3
                            })}
                          />
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </LayoutBody>
      {isModal && oneQuestion && (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-end items-center'>
          <Modal
            title={oneQuestion && oneQuestion.content}
            handleClose={() => setIsModal(false)}
            body={bodyContent}
            // footer={footer}
          />
        </div>
      )}
    </div>
  )
}
