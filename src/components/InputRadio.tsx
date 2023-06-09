import React from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number
  name: string
  label: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}
export default function InputRadio(props: Props) {
  const { register, label, value, name, rules, ...rest } = props
  const registerResult = register && name ? register(name, rules) : null
  return (
    <div className='col-span-1 '>
      <div className='flex items-center ml-1'>
        <input
          id={`${name}${value}`}
          {...registerResult}
          type='radio'
          value={value}
          {...rest}
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        <label htmlFor={`${name}${value}`} className=' p-2'>
          {label}
        </label>
      </div>
    </div>
  )
}
