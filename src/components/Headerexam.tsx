import { Link } from 'react-router-dom'
import Popover from './Popover'

interface Props {
  time: string
}
export default function Headerexam({ time }: Props) {
  return (
    <>
      <header className='w-full text-gray-700 bg-[#F0EAEA] border-b-gray-100 shadow-sm body-font'>
        <div className='container m-auto lg:w-[1200px] flex flex-col justify-around items-center p-6 mx-auto md:flex-row'>
          <Link to='/' className='my-auto ml-9 px-2  font-bold text-gray-900  '>
            BITEST
          </Link>

          <div className='border py-2 px-6 rounded-lg border-gray-400 bg-orange-300 flex justify-center'>
            <p className='font-medium mr-2'>Time: </p>
            <span>{time}</span>
          </div>
          <div className='w-10 h-10 rounded-full border border-gray-400 overflow-hidden'>
            <Popover
              renderPopover={
                <div className='relative z-10  rounded-sm border border-gray-200 bg-white shadow-md '>
                  <Link
                    to='/user/my-profile'
                    className='block w-full bg-white py-3 px-4 text-left hover:bg-slate-100  text-black hover:text-cyan-500'
                  >
                    Tài khoản của tôi
                  </Link>
                  <Link
                    to=''
                    className='block w-full text-black bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                  >
                    Question
                  </Link>
                  <Link
                    to=''
                    className='block w-full text-black bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'
                  >
                    Exam
                  </Link>
                  <button className='border-none block w-full bg-white py-3 px-4 text-left hover:bg-slate-100 hover:text-cyan-500'>
                    Đăng xuất
                  </button>
                </div>
              }
            >
              <Link to='/user/my-profile' className='d-flex align-items-center gap-10 text-white'>
                <img
                  className='block object-cover h-[36px] w-[36px] rounded-full'
                  alt='user'
                  src='https://picsum.photos/200'
                />
                <p className='mb-0 flex flex-column align-items-center justify-start text-left'>fdfdf</p>
              </Link>
            </Popover>
          </div>
        </div>
      </header>
    </>
  )
}
