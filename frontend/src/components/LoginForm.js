import { useDispatch } from 'react-redux'
import FormElement from './FormElement'
import { Link } from 'react-router-dom'
import { userLogin } from '../reducers/userReducer'
import { useRef } from 'react'

const LoginForm = () => {
  const dispatch = useDispatch()
  const ref = useRef()
  
  const handleSubmit = event => {
    event.preventDefault()

    const formData = new FormData(ref.current)

    dispatch(userLogin(formData))
    event.target.querySelectorAll('input').forEach(input => input.value = '')
  }

  const demoLogin = () => {
    const formData = new FormData()
    formData.append('email', process.env.REACT_APP_DEMO_EMAIL)
    formData.append('password', process.env.REACT_APP_DEMO_PASSWORD)
    dispatch(userLogin(formData))
  }

  return (
    <>
      <header className='flow'>
        <h1 className='text-cornflower-blue fs-400'>Invoice App</h1>

        <p className='fs-200'>Login to your account</p>
      </header>
      <main className='grid'>
        <form action='' method='POST' onSubmit={handleSubmit} className='account-page--form grid' ref={ref}>
          <FormElement 
            type='email' 
            inputName='email' 
            inputLabel={'Email Address'} 
            placeholder={'alex@email.com'}
          />

          <FormElement 
            type='password' 
            inputName='password' 
            inputLabel={'Password'} 
            placeholder={'**********'}
          />

          <button type="submit" className='button cta-btn'>Login</button>
          <button onClick={demoLogin} type='button' className='button cta-btn'>Demo</button>
          <div className='span-decor'>
            <span>or</span>
          </div>
          <Link to='/create-account' className='button'>Signup now</Link>
        </form>
      </main>
    </>
  )
}

export default LoginForm