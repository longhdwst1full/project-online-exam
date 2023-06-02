export interface IRegister {
  email: string
  password: string
  confirmPassword: string
  image?: string
  displayName: string
}

export interface IUserRespon {
  id: number
  email: string
  image?: string
  displayName: string
  createdAt: string
  updatedAt: string
  token: string
  refreshToken: string
}
export interface AuthResponse {
  message: string
  user: IUserRespon
}

export interface IAuthResponseErr {
  detail: string
  message: string
  statusCode: number
  type: string
}
