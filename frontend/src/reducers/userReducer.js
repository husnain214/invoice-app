import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/loginService'
import invoiceService from '../services/invoiceService'

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    fetchUser(state, action) {
      const loggedUserJSON = window.localStorage.getItem('loggedinvoiceappUser')

      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        invoiceService.setConfig(user.token)

        return user
      }
    },
    setUser(state, action) {
      return action.payload
    },
    removeUser(state, action) {
      return null
    }
  }
})

const { setUser, removeUser, fetchUser } = userSlice.actions

export default userSlice.reducer

export const intializeUser = () => {
  return dispatch => {
    dispatch(fetchUser())
  }
}

export const addUser = user => {
  return async dispatch => {
    const loggedUser = await loginService.login(user)

    dispatch(setUser(loggedUser))
    invoiceService.setConfig(loggedUser.token)
    window.localStorage.setItem('loggedinvoiceappUser', JSON.stringify(loggedUser))
  }
}

export const logout = () => {
  return async dispatch => {
    window.localStorage.removeItem('loggedinvoiceappUser')
    dispatch(removeUser(null))
  }
}