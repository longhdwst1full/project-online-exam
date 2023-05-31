import { IGeneral } from '~/types/general'
import http from './http'

export const getGrades = () => {
  return http.get<IGeneral[]>('grades')
}
export const getStatus = () => {
  return http.get<IGeneral[]>('statuses')
}
export const getLevels = () => {
  return http.get<IGeneral[]>('levels')
}
export const getQuestiontypes = () => {
  return http.get<IGeneral[]>('questiontypes')
}
export const getQuestionGroup = () => {
  return http.get<IGeneral[]>('questiongroups')
}
export const getSubjects = () => {
  return http.get<IGeneral[]>('subjects')
}

export const uploadImage = (data: FormData) => {
  return http.post('image', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
