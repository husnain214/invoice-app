import arrowDown from '../assets/icon-arrow-down.svg'
import iconPlus from'../assets/icon-plus.svg'

const Header = ({ showForm }) => {
  const handleClick = () => {
    showForm(true)
  } 

  return (
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

        <button 
          type='button'
          onClick={handleClick} 
          className='button button--new-invoice'>
          <div><img src={iconPlus} height='10' width='10' alt='plus' /></div>

          New Invoice
        </button>
      </div>
    </header>
  )
}

export default Header