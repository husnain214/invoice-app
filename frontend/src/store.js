import userReducer from './reducers/userReducer'
import invoiceReducer from './reducers/invoiceReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
    user: userReducer
  }
})

export default store