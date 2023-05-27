import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function HeaderHome() {
  return (
    <>
      <header className='w-full text-gray-700 bg-[#F0EAEA] border-b-gray-100 shadow-sm body-font'>
        <div className='container m-auto lg:w-[1200px] flex flex-col items-start justify-between p-6 mx-auto md:flex-row'>
          <Link to='' className='my-auto ml-9 px-2  font-bold text-gray-900  '>
            BITEST
          </Link>
          <fieldset className='w-1/3 m-auto  text-gray-500'>
            <label htmlFor='Search' className='hidden'>
              Search
            </label>
            <div className='relative'>
              <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                <button type='button' title='search' className='p-1 focus:outline-none focus:ring'>
                  <svg fill='currentColor' viewBox='0 0 512 512' className='w-4 h-4 dark:text-gray-100'>
                    <path d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z'></path>
                  </svg>
                </button>
              </span>
              <input
                type='search'
                name='Search'
                placeholder='Search...'
                className='md:w-full border border-gray-300 p-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400'
              />
            </div>
          </fieldset>
          <div className='items-center flex gap-3 h-full'>
            <Link
              to='/login'
              className='px-6 py-2  font-semibold rounded-full bg-red-500 text-white hover:bg-teal-500 hover:text-slate-700'
            >
              SignIn
            </Link>
            <Link
              to='/register'
              className='px-6 py-2 font-semibold rounded-full bg-blue-500 text-gray-50 hover:bg-white hover:border-blue-600 hover:text-slate-800 border'
            >
              SignUp
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
