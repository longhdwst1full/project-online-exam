import React from 'react'
import Select from './Select'

export default function FillterTop() {
  return (
    <>
      <div className='mt-4 w-3/5 ml-auto rounded  bg-[#FFBD1A]'>
        <div className='grid grid-cols-3 gap-3 px-3 py-2 mt-2  items-center'>
          {/* <select name='' id=''>
            <option value='' disabled>
              Level
            </option>
            <option value=''>Trung bình</option>
            <option value=''>Khá</option>
            <option value=''>Giỏi</option>
          </select> */}
          {/* <select name='' id=''>
            <option value='' disabled>
              Lớp
            </option>
            <option value=''>10</option>
          </select> */}
          <Select showErr={false} classNameSelect='!p-1 my-1 ' />
          <Select showErr={false} classNameSelect='!p-1 my-1 ' />
          <Select showErr={false} classNameSelect='!p-1 my-1 ' />
        </div>
      </div>
    </>
  )
}
