import userReducer from './reducers/userReducer'
import invoiceReducer from './reducers/invoiceReducer'
import loaderReducer from './reducers/loaderReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
    user: userReducer,
    loader: loaderReducer
  }
})

export default store