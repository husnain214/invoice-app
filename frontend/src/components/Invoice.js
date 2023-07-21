import { Link } from 'react-router-dom'
import arrowRight from '../assets/icon-arrow-right.svg'
import './Invoice.css'

const Invoice = ({ invoice }) => {
  const { id, paymentDue, clientName, total, status} = invoice

  return (
    <Link to={`/invoices/${id}`} className='invoice'>
    <h2 className='letter-spacing-200 fs-200 text-primary line-height-100'><span className='text-cornflower-blue'>#</span>{id.slice(0, 6).toUpperCase()}</h2>
    <p className='text-secondary'>{paymentDue.slice(0, 10)}</p>
    <p className='text-secondary'>{clientName}</p>
    <p className='fs-300 fw-bold line-height-400 text-primary letter-spacing-200'>£ {total}</p>

    <div className='flex-group flex justify-sb align-center'>
      <div className={`invoice-status invoice-status--${status} flex align-center`}>
        <span className='fw-bold fs-200 letter-spacing-200 line-height-100'>{status}</span>
      </div>
      
      <img className='hidden-mobile' src={arrowRight} alt='arrow right'/>
    </div>
    </Link>
  )
}

export default Invoice