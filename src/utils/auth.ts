import { IUser } from '~/types/user.type'

export const getInforUserLs = () => {
  const result = localStorage.getItem('inforCustomer')
  return result ? JSON.parse(result) : null
}

export const setInforUserLs = (data: IUser) => {
  localStorage.setItem('inforCustomer', JSON.stringify(data))
}
