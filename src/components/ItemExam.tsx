import React from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  register?: UseFormRegister<any>
  value?: string
  name: string
}
export default function ItemExam({ register, name, value, ...rest }: Props) {
  const registerResult = register && name ? register(name) : null
  return (
    <div className='bg-slate-400/10 p-4 mb-5 rounded-lg'>
      <div className=''>
        <p className='font-semibold'>
          Câu số 1 :<span className='ml-1'>dfdfd</span>
        </p>
        <div className='mt-4 mx-4 grid grid-cols-4'>
          <div className='col-span-2'>
            <p className='mb-2 mt-1'>
              <input {...registerResult} {...rest} id='1' type='radio' value='1' />
              <label htmlFor='1' className='ml-1'>
                dfdfd
              </label>
            </p>
            <p className='mb-2 mt-1'>
              <input id='2' type='radio' {...registerResult} {...rest} value='2' />
              <label htmlFor='2' className='ml-1'>
                dfdfd
              </label>
            </p>
          </div>
          <div className='col-span-2'>
            <p className='mb-2 mt-1'>
              <input type='radio' id='3' {...registerResult} {...rest} value='3' />
              <label className='ml-1' htmlFor='3'>
                dfdfd
              </label>
            </p>
            <p className='mb-2 mt-1'>
              <input id='4' type='radio' {...register} {...rest} {...registerResult} value='4' />
              <label htmlFor='4' className='ml-1'>
                dfdfd
              </label>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
