import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import { historyExamUser } from '~/api/exam.api'
import Button from '~/components/Button'
import FillterTop from '~/components/FillterTop'
import Footer from '~/components/Footer'
import HeaderHome from '~/components/HeaderHome'
import LayoutBody from '~/layout/LayoutBody'

export default function HistoryExam() {
  const { data: historyExamQuery } = useQuery({
    queryKey: ['history'],
    queryFn: () => historyExamUser()
  })
  return (
    <>
      <HeaderHome />
      <LayoutBody titleConten='Lịch sử  thi' btnTitle='Làm bài' btnLink='/exam'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg  min-h-screen container m-auto lg:max-w-[1200px]'>
          <div className='pt-10 px-4 mt-2 flex items-center justify-between pb-4'>
            <div>
              <button
                id='dropdownRadioButton'
                data-dropdown-toggle='dropdownRadio'
                className='inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                type='button'
              >
                <svg
                  className='w-4 h-4 mr-2 text-gray-400'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                    clipRule='evenodd'
                  />
                </svg>
                Last 30 days
                <svg
                  className='w-3 h-3 ml-2'
                  aria-hidden='true'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id='dropdownRadio'
                className='z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
                data-popper-reference-hidden
                data-popper-escaped
                data-popper-placement='top'
                style={{
                  position: 'absolute',
                  inset: 'auto auto 0px 0px',
                  margin: 0,
                  transform: 'translate3d(522.5px, 3847.5px, 0px)'
                }}
              >
                <ul
                  className='p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200'
                  aria-labelledby='dropdownRadioButton'
                >
                  <li>
                    <div className='flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                      <input
                        id='filter-radio-example-1'
                        type='radio'
                        name='filter-radio'
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                      <label
                        htmlFor='filter-radio-example-1'
                        className='w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300'
                      >
                        Last day
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className='flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                      <input
                        defaultChecked
                        id='filter-radio-example-2'
                        type='radio'
                        name='filter-radio'
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                      <label
                        htmlFor='filter-radio-example-2'
                        className='w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300'
                      >
                        Last 7 days
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex-1 w-full'>
              <FillterTop />
            </div>
          </div>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Tiêu Đề
                </th>
                <th scope='col' className='px-6 py-3'>
                  Code
                </th>
                <th scope='col' className='px-6 py-3'>
                  Điểm
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {historyExamQuery?.data &&
                historyExamQuery.data.map((item) => (
                  <tr
                    key={item.id}
                    className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                  >
                    <th scope='row' className='px-4 py-2'>
                      {item.questionRight}
                    </th>
                    <td className='px-4 py-2'>{item.completeTime}</td>
                    <td className='px-4 py-2'>{item.questionRight}</td>
                    <td className='px-4 py-2'>
                      <div className='flex justify-evenly items-center'>
                        <Link to='' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                          <i className='p-2  fa-solid fa-xl fa-eye' style={{ color: '#FFBD1A' }} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </LayoutBody>
      <Footer />
    </>
  )
}
