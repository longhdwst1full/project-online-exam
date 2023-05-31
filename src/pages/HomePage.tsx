import { useQuery } from '@tanstack/react-query'
import { getAllExam } from '~/api/exam.api'
import FillterTop from '~/components/FillterTop'
import Pagination from '~/components/Pagination'
import PostExam from '~/components/PostExam'
import { IExamResponse } from '~/types/exam.type'

export default function HomePage() {
  const { data: getListDoExam } = useQuery({
    queryKey: ['listDoExam'],
    queryFn: () => getAllExam()
  })
  console.log(getListDoExam?.data)
  return (
    <div>
      {/* section hero    */}
      <main className='container lg:w-[1200px] m-auto'>
        <section className='bg-gray-50'>
          {/* filter */}
          <FillterTop />
          {/* list exam */}
          <div className=' sm:grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4'>
            {getListDoExam?.data &&
              getListDoExam?.data.map((item: IExamResponse) => <PostExam key={item.id} exam={item} />)}
          </div>
        </section>
        <div className='my-4 text-center'>
          <Pagination />
        </div>
      </main>
    </div>
  )
}
