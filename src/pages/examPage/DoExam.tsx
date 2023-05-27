import React from 'react'
import Button from '~/components/Button'
import Headerexam from '~/components/Headerexam'
import ItemExam from '~/components/ItemExam'
import LayoutBody from '~/layout/LayoutBody'

export default function DoExam() {
  return (
    <div>
      <Headerexam />
      <LayoutBody titleConten='Bài Làm'>
        <div className='w-3/4 m-auto p-2'>
          <div className='w-1/3 text-center border border-gray-300 mb-10'>
            <div className='  p-4  grid grid-cols-5 items-center'>
              <div className='col-span-2 text-left'>
                <p className='mt-2'>Bài thi môn: </p>
                <p className='mt-2'>Tên: </p>
                <p className='mt-2'>Lớp: </p>
              </div>
              <div className='col-span-3 text-left'>
                <p className='mt-2'>Toán </p>
                <p className='mt-2'>A </p>
                <p className='mt-2'>10 </p>
              </div>
            </div>
          </div>
          {/* list question */}
          <div className='border border-gray-300 min-h-[200px] mb-5 p-5'>
            <ItemExam />
            <ItemExam />
          </div>
          <div className='text-right mr-10'>
            <Button className="px-6 py-2 font-semibold rounded-full bg-blue-500 text-gray-50 hover:bg-white hover:border-blue-600 hover:text-slate-800 border">Submit</Button>
          </div>
        </div>
      </LayoutBody>
    </div>
  )
}
