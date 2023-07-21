import { createSlice } from '@reduxjs/toolkit'
import invoiceService from '../services/invoiceService'

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: [],
  reducers: {
    createInvoice(state, action) {
      return state.concat(action.payload)
    },
    deleteInvoice(state, action) {
      return state.filter(invoice => invoice.id !== action.payload)
    },
    updateInvoice(state, action) {
      return state.map(invoice => invoice.id === action.payload.id ? action.payload : invoice)
    },
    setInvoices(state, action) {
      return action.payload
    }
  }
})

const { createInvoice, deleteInvoice, updateInvoice, setInvoices} = invoiceSlice.actions

export default invoiceSlice.reducer

export const initializeInvoices = () => {
  return async dispatch => {
    const invoices = await invoiceService.getAll()
    dispatch(setInvoices(invoices))
  }
}

export const addInvoice = invoice => {
  return async dispatch => {
    const createdInvoice = await invoiceService.create(invoice)

    dispatch(createInvoice(createdInvoice))
  }
}

export const removeInvoice = id => {
  return async dispatch => {
    dispatch(deleteInvoice(id))
  }
}

export const changeInvoice = invoice => {
  return async dispatch => {
    const changedInvoice = await invoiceService.update(invoice)
    dispatch(updateInvoice(changedInvoice))
  }
}