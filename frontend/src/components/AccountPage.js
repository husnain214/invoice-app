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

      <footer>
        Design from <a target='_blank' rel='noreferrer' href='https://www.frontendmentor.io' className='text-cornflower-blue'>Frontend Mentor</a>
      </footer>
    </div>
  )
}

export default AccountPage