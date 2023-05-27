import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <LayoutHome>
        <HomePage />
      </LayoutHome>
    )
  },
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
    path: 'doexam',
    element: <DoExam />
  },
  {
    path: '/history',
    element: <HistoryExam />
  },

  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])
function App() {
  return <RouterProvider router={router} />
}

export default App
