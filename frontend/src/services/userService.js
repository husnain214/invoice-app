import axios from 'axios'
const baseURL = '/api/users'

const createAccount = async credentials => {
  let oldFilename = credentials.get('profile-picture').name
  const newFilename = credentials.get('name') + '-image.' + oldFilename.split('.').pop()
  
  credentials.set('profile-picture', credentials.get('profile-picture'), newFilename)

  const response = await axios.post(baseURL, credentials, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
  return response.data
}

const updateAccount = async updatedUser => {
  console.log(updatedUser)
  const response = await axios.put(`${baseURL}/${updatedUser.id}`, updatedUser)
  return response.data
}

export default { createAccount, updateAccount }