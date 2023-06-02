interface IQuestionType {
  id: number
  content: string
  subjectId: number
  gradeId: number
  levelId: number
  questionGroupId: number
  statusId: number
  questionTypeId: number
}

export interface IQuestions extends IQuestionType {
  createAnswerQuestionDtos: {
    content: string
    isRight: boolean
  }[]
}
export interface IQuestionsResponse extends IQuestionType {
  createdAt: string
  updatedAt: string
  answers: {
    id: number
    content: string
    isRight: boolean
  }[]
}

export interface IQuestionResponsHasPage {
  totalPage: number
  data: IQuestionsResponse[]
}