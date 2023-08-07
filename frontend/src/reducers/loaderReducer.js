import { createSlice } from '@reduxjs/toolkit'

const loaderSlice = createSlice({
  name: 'loader',
  initialState: false,
  reducers: {
    enableLoader(state, action) {
      return true
    },
    disableLoader(state, action) {
      return false
    }
  }
})

const { enableLoader, disableLoader } = loaderSlice.actions

export default loaderSlice.reducer

export const openLoader = () => {
  return dispatch => {
    dispatch(enableLoader())
  }
}

export const closeLoader = () => {
  return dispatch => {
    dispatch(disableLoader())
  }
}

