import { createSlice } from '@reduxjs/toolkit'
import invoiceService from '../services/invoiceService'

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: [],
  reducers: {
    createInvoice(state, action) {
      
    },
    deleteInvoice(state, action) {
    },
    setInvoices(state, action) {
      return action.payload
    }
  }
})