import arrowRight from '../assets/icon-arrow-right.svg'
import './Invoice.css'
const Invoice = () => {
  return (
    <div className='invoice flex justify-sb align-center'>
      <div className='flex align-center justify-sb'>
        <h2 className='letter-spacing-200 line-height-100'><span className='text-cornflower-blue'>#</span>RT3080</h2>
        <p className='text-secondary'>Due 19 Aug 2021</p>
        <p className='text-secondary'>Jensen Huang</p>
      </div>

      <p className='fs-200 fw-bold line-height-400 letter-spacing-200'>£ 1,800.90</p>

      <div className='flex align-center'>
        <div className='invoice-status invoice-status--paid flex align-center'>
          <span className='fw-bold fs-200 letter-spacing-200 line-height-100'>Paid</span>
        </div>
        
        <img src={arrowRight} alt='arrow right'/>
      </div>
    </div>
  )
}

export default Invoice