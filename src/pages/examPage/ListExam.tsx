import React from 'react'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import FillterTop from '~/components/FillterTop'
import LayoutBody from '~/layout/LayoutBody'

export default function ListExam() {
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
                Số Câu
              </th>
              <th scope='col' className='px-6 py-3 text-center'>
                Hàng Động
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <td className='px-4 py-2 w-5/6 m-auto block '>
                <div className='relative w-full pt-[100%]'>
                  <img
                    className='absolute top-0 left-0 h-full w-full bg-white object-cover'
                    src='https://picsum.photos/200'
                    alt=''
                  />
                </div>
              </td>
              <td className='px-4 py-2 w-[300px] '>
                <span className='line-clamp-2 font-medium'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint inventore qui. Quos quae
                  velit, unde eaque voluptatem sint ipsam veritatis enim nesciunt corporis illum est deserunt magnam
                  autem consequuntur!
                </span>
              </td>
              <td className='px-4 py-2 text-center'>8523</td>
              <td className='px-4 py-2 text-center'>20</td>
              <td className='px-4 py-2 text-center'>
                <div className='flex justify-evenly items-center'>
                  <Link to='' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                    <i className='p-2  fa-solid fa-xl fa-eye' style={{ color: '#FFBD1A' }} />
                  </Link>
                  <Link to='' className='p-2  font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                    <i className='fa-regular fa-pen-to-square fa-xl' />
                  </Link>
                  <Button className='p-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                    <i className='fa-solid fa-trash fa-xl' style={{ color: '#ff0000' }} />
                  </Button>
                </div>
              </td>
            </tr>

            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <td className='px-4 py-2  w-5/6    m-auto block '>
                <div className='relative w-full pt-[100%]'>
                  <img
                    className='absolute top-0 left-0 h-full w-full bg-white object-cover'
                    src='https://picsum.photos/200'
                    alt=''
                  />
                </div>
              </td>
              <td className='px-4 py-2'>Silver</td>
              <td className='px-4 py-2'>Laptop</td>
              <td className='px-4 py-2'>$2999</td>
              <td className='px-4 py-2'>
                <div className='flex justify-evenly items-center'>
                  <Link to='' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                    <i className='p-2  fa-solid fa-xl fa-eye' style={{ color: '#FFBD1A' }} />
                  </Link>
                  <Link to='' className='p-2  font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                    <i className='fa-regular fa-pen-to-square fa-xl' />
                  </Link>
                  <Button className='p-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                    <i className='fa-solid fa-trash fa-xl' style={{ color: '#ff0000' }} />
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </LayoutBody>
  )
}
