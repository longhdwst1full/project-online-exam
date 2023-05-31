import { IQuestions, IQuestionsResponse } from '~/types/question.type'
import http from './http'

// add question
export const addQuestion = (data: Omit<IQuestions, 'id'>) => {
  return http.post<IQuestionsResponse>('questions', data)
}

// get all question
export const getAllQuestions = () => {
  return http.get<IQuestionsResponse[]>('questions')
}

// get all questions user create
export const getMyQuestions = () => {
  return http.get<IQuestionsResponse[]>('questionuser')
}

// update question
export const updateQuestion = (data: IQuestions) => {
  return http.patch<IQuestionsResponse>('questions', data)
}

// delete question
export const deleteQuestion = (id: string | number) => {
  return http.delete(`questions/${id}`)
}
