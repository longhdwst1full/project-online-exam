import { IQuestionsResponse } from './question.type'
import { IUserRespon } from './registerr.type'

export interface IExam {
  id: number
  name: string
  code: string
  image?: string
  subjectId: number
  gradeId: number
  levelId: number
  statusId: number
  time: number
  idQuestions: number[]
}

export interface IDoExam {
  id: string
  questings: {
    id: string
    answerQuestion: string[]
  }
}

export interface IExamResponse extends Omit<IExam, 'idQuestions'> {
  createdAt: string
  updatedAt: string
  questions: IQuestionsResponse[]
}

export interface IExamResponsHasPage {
  totalPage: number
  data: IExamResponse[]
}

export interface IHistoryExamResponse {
  id: number
  appUserId: number
  createAt: string
  completeTime: number
  questionRight: number
  toTalScore: number
  appUser: IUserRespon
}
