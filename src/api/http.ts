import axios from 'axios'
import { IUserRespon } from '~/types/registerr.type'
import { getInforUserLs, setInforUserLs } from '~/utils/auth'

const http = axios.create({
  baseURL: 'http://192.168.111.12:5094/api/'
})

// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken: IUserRespon = getInforUserLs()
    if (accessToken?.token) {
      config.headers['Authorization'] = `Bearer ${accessToken.token}`
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  async (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const originalRequest = error.config
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const user: IUserRespon = getInforUserLs()
      const accessToken = await http.post('appuser/refresh', { refreshToken: user.refreshToken })
      setInforUserLs(accessToken.data.user)
      return http(originalRequest)
    }
    return Promise.reject(error)
  }
)
export default http
