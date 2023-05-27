import React from 'react'
import { Link } from 'react-router-dom'
import FillterTop from '~/components/FillterTop'
import PostExam from '~/components/PostExam'

export default function HomePage() {
  return (
    <div>
      {/* section hero    */}
      <main className='container lg:w-[1200px] m-auto'>
        <section className='bg-gray-50'>
          {/* filter */}
        <FillterTop/>
          {/* list exam */}
          <div className=' sm:grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4'>
            <PostExam />
            <PostExam />
            <PostExam />
            <PostExam />
          </div>
        </section>
      </main>
    </div>
  )
}
