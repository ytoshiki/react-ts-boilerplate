import Axios, { AxiosResponse } from 'axios'
import { API_URL } from '../../config'
import storage from '../../utils/storage'

export const axios = Axios.create({
  baseURL: API_URL
})

axios.interceptors.request.use(function (config) {
  const token = storage.getToken()
  if (token && typeof token === 'string') {
    config.headers.authorization = `${token}`
  }

  if (token) {
    config.headers.authorization = token
  }

  config.headers.Accept = 'application/json'
  return config
})

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response?.data as unknown as AxiosResponse
  },
  (error) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const message = (error.response?.data?.message || error.message) as string

    if (message) {
      console.log(message)
    }

    return Promise.reject(error)
  }
)
