import axios from 'axios'
import { useMainStore } from '@/stores/main.js'
axios.defaults.withCredentials = true
axios.defaults.timeout = 600000
axios.defaults.baseURL = import.meta.env.VITE_BASE_API
axios.interceptors.request.use(
  async (config) => {
    const mainStore = useMainStore()
    config.headers = {
      Authorization: 'Bearer ' + mainStore.firebase.stsTokenManager.accessToken,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Content-Type': 'application/json'
    }
    return config
  },
  async (error) => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  async (response) => {
    return response
  },
  async (error) => {
    return Promise.reject(error)
  }
)
export default axios
