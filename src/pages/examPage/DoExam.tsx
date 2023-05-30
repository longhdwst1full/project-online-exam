import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '~/components/Button'
import Headerexam from '~/components/Headerexam'
import ItemExam from '~/components/ItemExam'
import Modal from '~/components/ModalCustome'
import LayoutBody from '~/layout/LayoutBody'

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
const result = answer.map((item) => `id${item.id}`)
console.log('result', result)
export default function DoExam() {
  const [timeLeft, setTimeLeft] = useState<number>(5)
  const [showModal1, setShowModal] = useState(false)
  // const timerRef = useRef<number | null>(null)
  const timerRef: React.MutableRefObject<number | null> = useRef<number | null>(null)

  const [btnDisable, setBtnDisable] = useState<boolean>(false)
  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      id1: '',
      id2: ''
    }
  })
  const footer = (
    <div className='flex gap-5 items-center justify-end pt-3 p-4 bg-slate-400'>
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

  const processFormExam = useCallback((data: any) => {
    // console.log('data', data)
    window.clearInterval(timerRef.current!)
    setTimeLeft(0)

    setShowModal(true)
    setBtnDisable(true)
  }, [])
  // const ad = watch()
  // console.log(ad)

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1)
    }, 1000)

    return () => window.clearInterval(timerRef.current!)
  }, [])

  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit(processFormExam)()
    }
  }, [timeLeft, processFormExam, handleSubmit])
  // console.log(timeLeft)
  const minutes = useMemo(() => Math.floor(timeLeft / 60), [timeLeft])
  const seconds = useMemo(() => timeLeft - minutes * 60, [minutes, timeLeft])
  return (
    <div className='relative'>
      <>
        <Headerexam time={`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`} />
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
                  disabled={btnDisable}
                  className='px-6 py-2 font-semibold rounded-full bg-blue-500 text-gray-50 hover:bg-white hover:border-blue-600 hover:text-slate-800 border'
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </LayoutBody>
      </>
      {showModal1 === true && (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/50 flex justify-end items-center'>
          <Modal
            title='Chúc mừng bạn hoàn thành xong bài thi'
            handleClose={() => setShowModal(false)}
            body={bodyContent}
            footer={footer}
          />
        </div>
      )}
    </div>
  )
}
