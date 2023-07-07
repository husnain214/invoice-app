import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { Route, Routes} from 'react-router-dom'
import './InvoiceForm.css'
import './AccountPage.css'

const AccountPage = () => {
  document.body.setAttribute('data-theme', 'light')

  return (
    <div className='account-page container grid'>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/create-account' element={<SignupForm />} />
      </Routes>
    </div>
  )
}

export default AccountPage