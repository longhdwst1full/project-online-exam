import React from 'react'
import { Link } from 'react-router-dom'

export default function PostExam() {
  return (
    <div>
      <Link to=''>
        <div className='overflow-hidden rounded-lg bg-white shadow transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md'>
          <div className='relative w-full pt-[100%]'>
            <img
              src='https://api-ecom.duthanhduoc.com/images/ef8fcfa8-c006-486e-9660-462efa93ad43.jpg'
              alt=''
              className='absolute top-0 left-0 h-full w-full bg-white object-cover'
            />
          </div>
          <div className='overflow-hidden p-2'>
            <div className='min-h-[2rem]   line-clamp-2'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, temporibus inventore velit molestiae
              quis iure quas earum exercitationem. Et eum odit quaerat tempora, nihil excepturi facilis possimus
              inventore magnam eos?
            </div>

            <div className='my-3  flex items-center text-sm justify-between'>
              <p>
                Số Câu hỏi:<span className='mx-2'>28</span>
              </p>
              <p>
                Số lượt làm : <span className='mx-2'>888</span>
              </p>
            </div>
            <div
              // to=''
              className='bg-[#EE0000] text-center text-white mt-5 w-full block  my-2 p-1 cursor-pointer rounded-lg hover:shadow hover:bg-orange-500   '
            >
              Lam ngay
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
