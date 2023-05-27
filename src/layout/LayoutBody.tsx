import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  btnLink?: string
  btnTitle?: string
  titleConten: string
}
export default function LayoutBody({ btnLink, children, titleConten,btnTitle }: Props) {
  return (
    <div className='containter min-h-screen lg:max-w-[1200px] m-auto'>
      <div className='my-4 text-right'>
        {btnTitle&& btnLink && (
          <Link
            className='text-right  mt-2 mr-4 inline-block rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75'
            to={btnLink}
          >
            <span className='block rounded-lg bg-white px-8 py-3 text-sm font-medium hover:bg-transparent'>
              {btnTitle}
            </span>
          </Link>
        )}

        <h1 className='text-center text-gray-500 lg:text-3xl md:text-lg text-md font-bold '>{titleConten}</h1>
      </div>
      <div className='mt-2'>{children}</div>
    </div>
  )
}
