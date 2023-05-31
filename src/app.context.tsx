import { createContext } from 'react'
import { clearInforCustomer } from './utils/auth'

interface IAppContext {
  reset: () => void
}
const initialSate = {
  reset: () => null
}
export const AppContext = createContext<IAppContext>(initialSate)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const reset = () => {
    clearInforCustomer()
  }
  return (
    <AppContext.Provider
      value={{
        reset
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
