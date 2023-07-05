import FormElement from './FormElement'

const SignupForm = () => {
  return (
    <>
      <header className='flow'>
        <h1 className='text-cornflower-blue fs-400'>Invoice App</h1>

        <p className='fs-200'>Create your account</p>
      </header>
      <main className='grid'>
        <form action='' className='account-page--form grid'>
          <FormElement 
            type='email' 
            name='email' 
            inputLabel={'Email Address'} 
            placeholder={'alex@email.com'}
          />

          <FormElement 
            type='password' 
            name='password' 
            inputLabel={'password'} 
            placeholder={'**********'}
          />

          <button type="submit" className='button'>Login</button>
          <div className='span-decor'>
            <span>or</span>
          </div>
          <button type='button' className='button'>Signup now</button>
        </form>
      </main>
    </>
  )
}

export default SignupForm