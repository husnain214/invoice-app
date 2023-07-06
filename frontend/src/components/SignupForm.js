import FormElement from './FormElement'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const SignupForm = () => {
  const ref = useRef()
  const handleSubmit = e => {
    e.preventDefault()

    const formData = new FormData(ref.current)
    
    for(let [key, value] of formData.entries()) {
      console.log(key, value)
    }
  }
  return (
    <>
      <header className='flow'>
        <h1 className='text-cornflower-blue fs-400'>Invoice App</h1>

        <p className='fs-200'>Create your account</p>
      </header>
      <main className='grid'>
        <form action='' method='POST' onSubmit={handleSubmit} className='account-page--form grid' ref={ref}>
          <div className='grid'>
            <FormElement
              type='text'
              inputName='name'
              inputLabel={'Your Name'}
              placeholder={'Alex Kingsley'}
            />
            
            <FormElement
              type='email'
              inputName='email'
              inputLabel={'Email Address'}
              placeholder={'alex@email.com'}
            />
          </div>

          <div className='grid'>
            <FormElement
              type='password'
              inputName='password'
              inputLabel={'Password'}
              placeholder={'**********'}
            />
            <FormElement
              type='password'
              inputName='confirm-password'
              inputLabel={'Confirm Password'}
              placeholder={'**********'}
            />
          </div>

          <FormElement
            type='file'
            inputName='profile-picture'
            inputLabel={'Profile Picture'}
          />

          <button type="submit" className='button'>Signup now</button>
          <div className='span-decor'>
            <span>or</span>
          </div>
          <Link to='/login' className='button'>Login</Link>
        </form>
      </main>
    </>
  )
}

export default SignupForm