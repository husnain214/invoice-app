import axios from 'axios'
const baseUrl = '/api/invoices'

let config

const setConfig = (newToken) => {
  config = {
    headers: { Authorization: `bearer ${newToken}` },
  }
}

const create = async invoice => {
  const response = await axios.post(baseUrl, invoice, config)

  return response.data
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const update = async updatedInvoice => {
  const response = await axios.put(baseUrl, updatedInvoice, config)
  return response.data
}

const remove = async id => {
  const response = await axios.delete(baseUrl, id, config)
  return response.data
}

export default { create, update, remove, getAll, setConfig }