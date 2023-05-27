import React from 'react'
import { Outlet } from 'react-router-dom'
import Button from '~/components/Button'
import Footer from '~/components/Footer'
import HeaderHome from '~/components/HeaderHome'

interface Props {
  children?: React.ReactNode
}
export default function LayoutHome({ children }: Props) {
  return (
    <div className=''>
      <HeaderHome />
      {children}
      <Outlet />
      <Footer />
    </div>
  )
}
