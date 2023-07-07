import FormElement from './FormElement'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <>
      <header className='flow'>
        <h1 className='text-cornflower-blue fs-400'>Invoice App</h1>

        <p className='fs-200'>Login to your account</p>
      </header>
      <main className='grid'>
        <form action='' method='POST' className='account-page--form grid'>
          <FormElement 
            type='email' 
            name='email' 
            inputLabel={'Email Address'} 
            placeholder={'alex@email.com'}
          />

          <FormElement 
            type='password' 
            name='assword' 
            inputLabel={'Password'} 
            placeholder={'**********'}
          />

          <button type="submit" className='button'>Login</button>
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