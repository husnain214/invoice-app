import axios from 'axios'
const baseURL = '/api/login'

const login = async credentials => {
  const object = {}
  for(const [key, value] of credentials) {
    object[key] = value
  }
  const response = await axios.post(baseURL, object)
  
  return response.data
}

export default { login }