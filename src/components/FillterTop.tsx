import React from 'react'
import Select from './Select'
import { useQuery } from '@tanstack/react-query'
import { getGrades, getLevels, getSubjects } from '~/api/general.api'

export default function FillterTop() {
  const { data: gradesQuery } = useQuery({
    queryKey: ['grades'],
    queryFn: () => getGrades()
  })
  const { data: subjectQuery } = useQuery({
    queryKey: ['subject'],
    queryFn: () => getSubjects()
  })
  const { data: levelQury } = useQuery({
    queryKey: ['level'],
    queryFn: () => getLevels()
  })
  return (
    <>
      <div className='mt-4 w-3/5 ml-auto rounded  bg-[#FFBD1A]'>
        <div className='grid grid-cols-3 gap-3 px-3 py-2 mt-2  items-center'>
          <Select showErr={false} classNameSelect='!p-1 my-1 '>
            <option defaultValue=''>Chọn Môn</option>
            {subjectQuery?.data &&
              subjectQuery.data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </Select>
          <Select showErr={false} classNameSelect='!p-1 my-1 '>
            <option defaultValue=''>Chọn Lớp</option>
            {gradesQuery?.data &&
              gradesQuery.data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </Select>
          <Select showErr={false} classNameSelect='!p-1 my-1 '>
            <option defaultValue=''>Chọn Level</option>
            {levelQury?.data &&
              levelQury.data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </Select>
        </div>
      </div>
    </>
  )
}
