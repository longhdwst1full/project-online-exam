import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import LayoutBody from '~/layout/LayoutBody'

export default function ListQuestion() {
  return (
    <LayoutBody titleConten='Danh sách Câu hỏi' btnLink='/question/add' btnTitle='Thêm câu hỏi'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Tiêu Đề
            </th>
            {/* <th scope='col' className='px-6 py-3'>
              Code
            </th> */}
            <th scope='col' className='px-6 py-3'>
              Số Câu
            </th>
            <th scope='col' className='w-fit px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <th scope='row' className='px-4 py-2'>
              câu hỏi 1
            </th>
            <td className='px-4 py-2'>Laptop</td>
            {/* <td className='px-4 py-2'>$2999</td> */}
            <td className='w-fit px-4 py-2'>
              <div className='w-full flex justify-center gap-4 items-center'>
                <Link to='' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                  <i className='p-2  fa-solid fa-xl fa-eye' style={{ color: '#FFBD1A' }} />
                </Link>
                <Link to='' className='p-2  font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                  <i className='fa-regular fa-pen-to-square fa-xl' />
                </Link>
                <Button className='p-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                  <i className='fa-solid fa-trash fa-xl' style={{ color: '#ff0000' }} />
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </LayoutBody>
  )
}
