import { useEffect } from 'react'
import './UserPage.css'
import logo from '../assets/logo.svg'
import iconSun from '../assets/icon-sun.svg'
import imageAvatar from '../assets/image-avatar.jpg'
import arrowDown from '../assets/icon-arrow-down.svg'
import iconPlus from'../assets/icon-plus.svg'
import imageEmpty from '../assets/illustration-empty.svg'
import Invoice from './Invoice'

const UserPage = () => {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light')
  }, [])

  const toggleTheme = () => {
    const theme = document.body.getAttribute('data-theme') === 'light'
                  ? 'dark'
                  : 'light'
    document.body.setAttribute('data-theme', theme)
  }

  return (
    <>
      <div className='user-page grid'>
        <aside className='sidebar bg-oxford-blue'>
          <div><img src={logo} alt='logo'/></div>
          <button onClick={toggleTheme}><img src={iconSun} alt='sun'/></button>
          <button><img src={imageAvatar} alt='avatar'/></button>
        </aside>

        <header className='header container flex justify-sb'>
          <div>
            <h1 className='fs-400 letter-spacing-400 line-height-500'>Invoices</h1>
            <p className='text-secondary'>No invoices</p>
          </div>

          <div className='flex'>
            <button className='flex text-primary bg-body button'>
              Filter by status

              <img src={arrowDown} alt='arrow down'/>
            </button>

            <button className='button button--new-invoice'>
              <div><img src={iconPlus} height='10' width='10' alt='plus' /></div>

              New Invoice
            </button>
          </div>
        </header>

        <main className='main-content container flow'>
          {/* <div><img className='d-inline' src={imageEmpty} width='241' height='200' alt='illustration empty'/></div>
          
          <div className='flow'>
            <h2 className='fs-400 letter-spacing-400 line-height-500'>There is nothing here</h2>
            
            <p className='text-secondary'>
              Create an invoice by clicking the
              <br />
              <span className='fw-bold'>New Invoice</span> button and get started
            </p>
          </div> */}

          <Invoice />
          <Invoice />
          <Invoice />
          <Invoice />
          <Invoice />
          <Invoice />
          <Invoice />
          <Invoice />
        </main>
      </div>
    </>
  )
}

export default UserPage