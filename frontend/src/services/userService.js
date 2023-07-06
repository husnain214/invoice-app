import axios from 'axios'
const baseURL = '/api/users'

const createAccount = async credentials => {
  const response = await axios.post(baseURL, credentials)
  return response.data
}

export default { createAccount }