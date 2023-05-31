import { IUser } from '~/types/user.type'

export const getInforUserLs = () => {
  const result = localStorage.getItem('inforCustomer')
  return result ? JSON.parse(result) : null
}
export const LocalStorageEventTarget = new EventTarget()

export const setInforUserLs = (data: IUser) => {
  localStorage.setItem('inforCustomer', JSON.stringify(data))
}
export const clearInforCustomer = () => {
  localStorage.getItem('inforCustomer')
  const clearLSEvent = new Event('clearLS')
  LocalStorageEventTarget.dispatchEvent(clearLSEvent)
}
