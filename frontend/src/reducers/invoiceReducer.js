import { createSlice } from '@reduxjs/toolkit'
import invoiceService from '../services/invoiceService'
import { closeLoader, openLoader } from '../reducers/loaderReducer'

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
    try {
      const invoices = await invoiceService.getAll()
      dispatch(setInvoices(invoices))
    } catch (error) {
      console.error(error)
    }
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
    await invoiceService.remove(id)
    dispatch(deleteInvoice(id))
  }
}

export const changeInvoice = invoice => {
  return async dispatch => {
    dispatch(openLoader())

    try {
      const changedInvoice = await invoiceService.update(invoice)
      dispatch(updateInvoice(changedInvoice))
    } catch (error) {
      console.error(error)
    }

    dispatch(closeLoader())
  }
}