import React from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface ISelecte extends React.SelectHTMLAttributes<HTMLSelectElement> {
  errorMessage?: string
  classNameSelect?: string
  classNameError?: string
  showErr?: boolean
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}
export default function Select({
  showErr = true,
  errorMessage,
  name,
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
  classNameSelect,
  register,
  rules,
  ...rest
}: ISelecte) {
  const registerResult = register && name ? register(name, rules) : null
  return (
    <div className={showErr ? 'mt-2' : ''}>
      <select
        className={`p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-lg focus:shadow-sm ${classNameSelect}`}
        {...registerResult}
        {...rest}
      >
        <option defaultValue=''>Chọn Môn</option>
        <option value='1'>Anh</option>
        <option value='2'>toán</option>
      </select>
      {showErr && <div className={classNameError}>{errorMessage}</div>}
    </div>
  )
}
