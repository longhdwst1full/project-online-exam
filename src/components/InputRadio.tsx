import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  value: string
  name: string
  label: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}
export default function InputRadio(props: Props) {
  const { register, label, value, name, rules } = props
  const registerResult = register && name ? register(name, rules) : null
  return (
    <div className='col-span-1 '>
      <div className='flex items-center ml-1'>
        <input
          id={value}
          {...registerResult}
          type='radio'
          value={value}
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        <label htmlFor={value} className=' p-2'>
          {label}
        </label>
      </div>
    </div>
  )
}
