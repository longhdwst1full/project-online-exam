export interface IRegister {
  email: string
  password: string
  confirmPassword: string
  image?: string
  displayName: string
}

export interface AuthResponse {
  accessToken: string
  data: {
    id: string
    email: string
    image?: string
    displayName: string
    createdAt: string
    updatedAt: string
  }
}
