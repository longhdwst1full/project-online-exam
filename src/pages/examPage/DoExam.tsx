import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '~/components/Button'
import Headerexam from '~/components/Headerexam'
import Input from '~/components/Input'
import ItemExam from '~/components/ItemExam'
import Modal from '~/components/ModalCustome'
import LayoutBody from '~/layout/LayoutBody'

interface IDoExam {
  idQuestion: string
  answer: string[]
}
const answer = [
  {
    id: 1,
    answer: 'content:A',
    isright: true
  },
  {
    id: 2,
    answer: 'content:B',
    isright: false
  }
]

export default function DoExam() {
  const [showModal1, setShowModal] = useState(false)
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      id1: '',
      id2: ''
    }
  })
  const footer = (
    <div className='flex gap-5 items-center justify-end mt-3 p-4 bg-slate-400'>
      <Button className='border mr-10  border-gray-300 bg-green-500 rounded-md   p-2 cursor-pointer font-medium'>
        Xem lại bài
      </Button>
    </div>
  )
  const bodyContent = (
    <div className='w-2/3 m-auto text-center  mb-10'>
      <div className='border border-gray-500  p-4  grid grid-cols-5 items-center'>
        <div className='col-span-2 text-left'>
          <p className='mt-2'>Bài thi môn: </p>
          <p className='mt-2'>Tên: </p>
          <p className='mt-2'>Lớp: </p>
          <p className='mt-2'>Điểm :</p>
          <p className='mt-2'>Số Câu Đúng :</p>
          <p className='mt-2'>Số Câu Sai :</p>
        </div>
        <div className='border-l-gray-400 border-l-[1px] text-center pl-3 col-span-3 '>
          <p className='mt-2'>Toán </p>
          <p className='mt-2'>A </p>
          <p className='mt-2'>10 </p>
          <p className='mt-2'>10 </p>
          <p className='mt-2'>10 </p>
          <p className='mt-2'>10 </p>
        </div>
      </div>
    </div>
  )

  const processFormExam = (data: any) => {
    console.log('data', data)
  }
  const ad = watch()
  console.log(ad)
  return (
    <div>
      {showModal1 ? (
        <>
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
              <form onSubmit={handleSubmit(processFormExam)}>
                <div className='border border-gray-300 min-h-[200px] mb-5 p-5'>
                  <ItemExam value='1' name='id1' register={register} />
                  <ItemExam value='2' name='id2' register={register} />
                  {/* <ItemExam /> */}
                </div>
                <div className='text-right mr-10'>
                  <Button
                    type='submit'
                    className='px-6 py-2 font-semibold rounded-full bg-blue-500 text-gray-50 hover:bg-white hover:border-blue-600 hover:text-slate-800 border'
                    onClick={() => setShowModal(!showModal1)}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </LayoutBody>
        </>
      ) : (
        <Modal
          title='Chúc mừng bạn hoàn thành xong bài thi'
          handleClose={() => setShowModal(!showModal1)}
          body={bodyContent}
          footer={footer}
        />
      )}
    </div>
  )
}
