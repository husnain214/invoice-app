import './design-system.css'
import AccountPage from './components/AccountPage'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import UserPage from './components/UserPage'
import { intializeUser } from './reducers/userReducer'
import { useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
const App = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(intializeUser())
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path='/*' element={user ? <UserPage /> : <AccountPage />} />
      </Routes>
      <LoadingScreen />
    </>
  )
}

export default App