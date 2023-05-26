import { Link } from 'react-router-dom'
import arrowRight from '../assets/icon-arrow-right.svg'
import './Invoice.css'

const Invoice = ({ invoice }) => {
  const { id, paymentDue, clientName, total, status} = invoice

  return (
    <Link to={`/invoices/${id}`} className='invoice flex justify-sb align-center'>
      <div className='flex align-center justify-sb'>
        <h2 className='letter-spacing-200 fs-200 text-primary line-height-100'><span className='text-cornflower-blue'>#</span>{id}</h2>
        <p className='text-secondary'>{paymentDue}</p>
        <p className='text-secondary'>{clientName}</p>
      </div>

      <p className='fs-200 fw-bold line-height-400 text-primary letter-spacing-200'>£ {total}</p>

      <div className='flex align-center'>
        <div className={`invoice-status invoice-status--${status} flex align-center`}>
          <span className='fw-bold fs-200 letter-spacing-200 line-height-100'>{status}</span>
        </div>
        
        <img src={arrowRight} alt='arrow right'/>
      </div>
    </Link>
  )
}

export default Invoice