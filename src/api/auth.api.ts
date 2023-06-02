import { AuthResponse, IRegister } from '~/types/registerr.type'
import http from './http'

export const registerAuth = (data: Omit<IRegister, 'confirmPassword'>) => {
  return http.post<AuthResponse>('register', data)
}
export const loginAuth = (data: Pick<IRegister, 'email' | 'password'>) => {
  return http.post<AuthResponse>('login', data)
}
