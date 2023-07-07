import axios from 'axios'
const baseURL = '/api/users'

const createAccount = async credentials => {
  console.log(credentials)
  const response = await axios.post(baseURL, { 
    data: 'You are sexy' 
  }, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return response.data
}

export default { createAccount }