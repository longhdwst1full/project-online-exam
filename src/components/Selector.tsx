import React from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'
interface Props {
  title: string
  errorMessage?: string
  name: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  children?: React.ReactNode
}
export default function Selector(props: Props) {
  const { title, children, errorMessage, register, name, rules } = props
  const registerResult = register && name ? register(name, rules) : null
  return (
    <div className='grid grid-cols-1 items-center'>
      <div className='grid grid-cols-4 items-center'>
        <div className='col-span-1 mb-5 py-3'>{title}</div>
        <div className='col-span-3 '>
          <select
            className='bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
            {...registerResult}
          >
            {children}
          </select>
          <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
        </div>
      </div>
    </div>
  )
}
