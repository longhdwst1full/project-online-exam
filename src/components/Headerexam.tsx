import { Link } from 'react-router-dom'

export default function Headerexam() {
  return (
    <>
      <header className='w-full text-gray-700 bg-[#F0EAEA] border-b-gray-100 shadow-sm body-font'>
        <div className='container m-auto lg:w-[1200px] flex flex-col justify-around items-center p-6 mx-auto md:flex-row'>
          <Link to='/' className='my-auto ml-9 px-2  font-bold text-gray-900  '>
            BITEST
          </Link>

          <div className='border py-2 px-6 rounded-lg border-gray-400 bg-orange-300 flex justify-center'>
            <p className='font-medium mr-2'>Time: </p>
            <span>22:00</span>
          </div>
          <div className='w-10 h-10 rounded-full border border-gray-400 overflow-hidden'>
            <img src='https://picsum.photos/200' alt='' />
          </div>
        </div>
      </header>
    </>
  )
}
