import { toast } from 'react-toastify'
import classNames from 'classnames'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteExam, getAllExam } from '~/api/exam.api'
import Button from '~/components/Button'
import FillterTop from '~/components/FillterTop'
import LayoutBody from '~/layout/LayoutBody'
import { IHistoryExamResponse } from '~/types/exam.type'

export default function ListExam() {
  const { data: getListExamQuery } = useQuery({
    queryKey: ['listExam'],
    queryFn: () => getAllExam()
  })
  console.log('data', getListExamQuery?.data)
  const [listExam, setListExam] = useState<IHistoryExamResponse[] | []>([])
  const deleteExamMutation = useMutation({
    mutationKey: ['deleteExam'],
    mutationFn: (id: number) => deleteExam(id),
    onSuccess() {
      toast.success('Xoa thanh cong')
    },
    onError(error) {
      console.log(error)
    }
  })
  const handleClcik = (id: number) => {
    console.log(id)
    const a = confirm('Are you sure you want to delete')
    if (a) {
      deleteExamMutation.mutateAsync(id)
    }
  }
  return (
    <LayoutBody titleConten='Danh sách bài thi' btnTitle='Thêm bài thi' btnLink='/exam/add'>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg  min-h-screen container m-auto lg:max-w-[1200px]'>
        <div className='pt-10 px-4 mt-2 text-right  pb-4'>
          <FillterTop />
        </div>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Ảnh
              </th>
              <th scope='col' className='px-6 py-3'>
                Tiêu Đề
              </th>
              <th scope='col' className='px-6 py-3 text-center'>
                Code
              </th>
              <th scope='col' className='px-6 py-3 text-center'>
                Status
              </th>
              <th scope='col' className='px-6 py-3 text-center'>
                Số Câu
              </th>
              <th scope='col' className='px-6 py-3 text-center'>
                Hàng Động
              </th>
            </tr>
          </thead>
          <tbody>
            {getListExamQuery?.data &&
              getListExamQuery?.data.data.map((item) => {
                const status = item.statusId === 1 ? 'Public' : item.statusId === 2 ? 'Private' : 'Draft'
                return (
                  <tr
                    key={item.id}
                    className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                  >
                    <td className='px-4 py-2 w-5/6 m-auto block '>
                      <div className='relative w-full pt-[100%]'>
                        <img
                          className='absolute top-0 left-0 h-full w-full bg-white object-cover'
                          src={item?.image ? item.image : 'https://picsum.photos/200'}
                          alt=''
                        />
                      </div>
                    </td>
                    <td className='px-4 py-2 w-[300px] '>
                      <span className='line-clamp-2 font-medium'>{item.name}</span>
                    </td>
                    <td className='px-4 py-2 text-center'>{item.code}</td>
                    <td className='px-4 py-2 text-center'>{status}</td>
                    <td className='px-4 py-2 text-center'>{item.questions.length}</td>
                    <td className='px-4 py-2 text-center'>
                      <div className='flex justify-evenly items-center'>
                        {/* <Link to='' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                          <i className='p-2  fa-solid fa-xl fa-eye' style={{ color: '#FFBD1A' }} />
                        </Link> */}
                        <Link
                          to={item.statusId === 3 ? `/exam/${item.id}` : ''}
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
                          className='p-2 font-medium   hover:underline'
                          disabled={item.statusId === 3 ? false : true}
                          onClick={() => handleClcik(item.id)}
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
      </div>
    </LayoutBody>
  )
}
