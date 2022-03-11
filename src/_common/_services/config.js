import Axios from 'axios'
import useAxios, { configure } from 'axios-hooks'

const Api = Axios.create({
  baseURL: 'https://api.github.com',
  timeout: Number(60000)
})

configure({ cache: false, axios: Api })
const axiosHooks = useAxios

export { Api, axiosHooks }
