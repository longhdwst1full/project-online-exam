import { useCallback } from 'react'
import Button from './Button'

interface ModalProps {
  handleClose: () => void
  title: string
  body?: React.ReactElement
  footer?: React.ReactElement
}

const Modal = ({ handleClose, title, body, footer }: ModalProps) => {
  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800bg-opacity-70'>
        <div className='relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto'>
          {/*content*/}
          <div className='h-fulllg:h-autoborder-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none '>
            {/*header*/}
            <div className='bg-green-500 relative flex items-center justify-between p-10 rounded-t '>
              <h3 className='text-xl  font-semibold text-white'>{title}</h3>
              <button
                className='absolute top-2 right-2 p-1  ml-auto border-0   text-white  hover:opacity-70  transition   '
                onClick={handleClose}
              >
                <i className='fa-regular fa-circle-xmark fa-xl'></i>
              </button>
            </div>
            {/*body*/}
            <div className='relative p-8 flex-auto'> {body}</div>
            {/*footer*/}
            <div className=''>{footer}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
