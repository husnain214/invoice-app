import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/loginService'
import userService from '../services/userService'
import invoiceService from '../services/invoiceService'

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    fetchUser(state, action) {
      const loggedUserJSON = window.localStorage.getItem('loggedInvoiceAppUser')

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
    try {
      await userService.createAccount(user)
      alert('success')
    } catch (error) {
      alert(error)
    }
  }
}

export const changeTheme = user => {
  return async dispatch => {
    user = { ...user, theme: user.theme ? 0 : 1 }

    try {
      const updatedUser = await userService.updateAccount(user)
      window.localStorage.setItem('loggedInvoiceAppUser', JSON.stringify(updatedUser))
      dispatch(setUser(updatedUser))
    } catch (error) {
      console.error(error)
    }
  }
}

export const userLogin = credentials => {
  return async dispatch => {
    try {
      const loggedUser = await loginService.login(credentials)
      console.log(loggedUser)
      dispatch(setUser(loggedUser))
      invoiceService.setConfig(loggedUser.token)
      window.localStorage.setItem('loggedInvoiceAppUser', JSON.stringify(loggedUser))
    } catch(error) {
      alert(error)
    }
  }
}

export const logout = () => {
  return async dispatch => {
    window.localStorage.removeItem('loggedInvoiceAppUser')
    dispatch(removeUser(null))
  }
}