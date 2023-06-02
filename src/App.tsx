import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import './index.css'
import Login from './pages/Login'
import Register from './pages/Register'
import LayoutHome from './layout/LayoutHome'
import HomePage from './pages/HomePage'
import ListExam from './pages/examPage/ListExam'
import ListQuestion from './pages/questions/ListQuestion'
import Addquestion from './pages/questions/Addquestion'
import AddExam from './pages/examPage/AddExam'
import HistoryExam from './pages/historyExam'
import DoExam from './pages/examPage/DoExam'
import { clearInforCustomer, getInforUserLs } from './utils/auth'
import NotFoud from './pages/NotFoud'
import { IUserRespon } from './types/registerr.type'
import { useEffect } from 'react'

const ProtectRouter = () => {
  const useToken: IUserRespon | null = getInforUserLs()

  const userLs = Boolean(useToken && useToken.token)

  return userLs ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const useToken: IUserRespon | null = getInforUserLs()

  const userLs = Boolean(useToken && useToken.token)

  return !userLs ? <Outlet /> : <Navigate to='/' />
}
const router = createBrowserRouter([
  {
    path: '',
    index: true,
    element: (
      <LayoutHome>
        <HomePage />
      </LayoutHome>
    )
  },
  {
    path: '',
    element: <RejectedRoute />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  },

  {
    path: '',
    element: <ProtectRouter />,
    children: [
      {
        path: 'question',
        element: <LayoutHome />,
        children: [
          { path: '', element: <ListQuestion /> },
          { path: 'add', element: <Addquestion /> },
          { path: 'edit', element: <Addquestion /> }
        ]
      },
      {
        path: 'exam',
        element: <LayoutHome />,
        children: [
          { path: '', element: <ListExam /> },
          { path: 'add', element: <AddExam /> },
          { path: 'edit', element: <Addquestion /> }
        ]
      },
      {
        path: 'doexam/:id',
        element: <DoExam />
      },
      {
        path: 'history',
        element: <HistoryExam />
      }
    ]
  },
  {
    path: '*',
    element: <NotFoud />
  }
])
function App() {
  useEffect(() => {
    const handleClearLS = () => {
      clearInforCustomer()
    }

    window.addEventListener('clearLS', handleClearLS)
    return () => window.removeEventListener('clearLS', handleClearLS)
  }, [])

  return <RouterProvider router={router} />
}

export default App
