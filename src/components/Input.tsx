import React from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}
export default function Input({
  errorMessage,
  name,
  className,
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
  classNameInput,
  register,
  rules,
  ...rest
}: IInput) {
  const registerResult = register && name ? register(name, rules) : null
  return (
    <div className='mt-2'>
      <input
        className={`p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-lg focus:shadow-sm ${classNameInput}`}
        {...registerResult}
        {...rest}
      />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
