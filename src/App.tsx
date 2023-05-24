import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import './index.css'
import Login from './pages/Login'
import Register from './pages/Register'
import LayoutAmin from './components/LayoutAmin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutAmin></LayoutAmin>
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
