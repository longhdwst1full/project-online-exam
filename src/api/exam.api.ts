import http from './http'
import { IExam, IExamResponsHasPage, IExamResponse, IHistoryExamResponse } from '~/types/exam.type'

// add Exam
export const addExam = (data: Omit<IExam, 'id'>) => {
  return http.post<IExamResponse>('exams', data)
}

// get all Exam
export const getAllExam = () => {
  return http.get<IExamResponsHasPage>('exams/getall')
}

// get all Exam user create
export const getMyExam = () => {
  return http.get<IExamResponsHasPage>('examusers')
}
// get one  Exam user create
export const getOneExam = (id: number) => {
  return http.get<IExamResponse>(`exams/${id}`)
}
// get exam by code
export const getExamByCode = (code: string) => {
  return http.get<IExamResponse>(`exams/getbycode/${code}`)
}
// get exam by search name
export const getExamByName = (name: string) => {
  return http.get<IExamResponse>(`exams/search/${name}`)
}

// update question
export const updateExam = (data: IExam) => {
  return http.patch<IExamResponse>('exams', data)
}

// delete question
export const deleteExam = (id: number) => {
  return http.delete(`exams/${id}`)
}

// history exam

export const historyExam = (id: number) => {
  return http.get<IHistoryExamResponse[]>(`historyexam/${id}`)
}
// history exam

export const historyExamUser = () => {
  return http.get<IHistoryExamResponse[]>(`historyuser`)
}
