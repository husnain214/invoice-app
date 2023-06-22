import { Link, useNavigate, useParams } from 'react-router-dom'

import arrowLeft from '../assets/icon-arrow-left.svg'
import './Invoice.css'
import './InvoiceDetailsPage.css'
import { useEffect, useState } from 'react'

const InvoiceItems = ({ items }) => {
  console.log(window.innerWidth)
  if(window.innerWidth < 600) {
    return (
      <div className='invoice-items flow'>
        {
          items.map(item => {
            return (
              <div key={item.key} className='flex align-center justify-sb'>
                <div className='flow'>
                  <p className='fs-200 text-primary fw-bold'>{item.name}</p>
                  <p className='fs-200'>{item.quantity} x £ {item.price}</p>
                </div>

                <span className='fw-bold fs-200'>£ {item.total}</span>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <table className='invoice-table'>
      <thead>
        <tr>
          <th className='fw-semi-bold'>Item Name</th>
          <th className='fw-semi-bold'>QTY.</th>
          <th className='fw-semi-bold'>Price</th>
          <th className='fw-semi-bold'>Total</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map((item, index) => {
            return (
              <tr key={index}>
                <td className='fw-bold fs-200 text-primary'>{item.name}</td>
                <td className='fw-bold fs-200'>{item.quantity}</td>
                <td className='fw-bold fs-200 text-primary'>{item.price}</td>
                <td className='fw-bold fs-200 text-primary'>{item.total}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

const InvoiceDetailsPage = ({ invoices, setInvoice, openInvoiceForm }) => {
  const { invoiceID } = useParams()
  const [isPageValid, setIsPageValid] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if(!invoices.length) {  
      navigate('/')
    }

    setIsPageValid(true)
  }, [invoices, navigate])

  if (!isPageValid) return

  const selectedInvoice = invoices.find( invoice => invoice.id === invoiceID)
  const { id, description, senderAddress, createdAt, paymentDue, clientName, clientAddress, clientEmail, items, total } = selectedInvoice

  return (
    <div className='invoice-page container'>
      <header className='header flow' style={{ '--flow-spacing': '2rem' }}>
        <nav>
          <Link to='/' className='flex fs-200 text-primary letter-spacing-200 line-height-100 fw-bold align-center'>
            <img src={arrowLeft} alt='arrow left'/>

            Go back
          </Link>
        </nav>

        <div className='invoice-controls bg-neutral flex justify-sb align-center'>
          <div className='flex align-center' style={{ 'gap': '4rem' }}>
            <span className='text-secondary'>Status</span>

            <div className={`invoice-status invoice-status--pending flex align-center`}>
              <span className='fw-bold fs-200 letter-spacing-200 line-height-100'>Pending</span>
            </div>
          </div>

          <div className='flex align-center justify-sb hidden-mobile'>
            <button className="button button--edit" onClick={() => {
              setInvoice(invoiceID)
              openInvoiceForm(true)
            }}>Edit</button>
            <button className="button button--delete">Delete</button>
            <button className="button button--mark">Mark as Paid</button>
          </div>
        </div>
      </header>

      <main className='invoice-details grid bg-neutral' style={{ '--gap': '3rem' }}>
        <div className='flex align-center justify-sb'>
          <div className='flow'>
            <h2 className='letter-spacing-200 text-primary fs-200 line-height-100'><span className='text-cornflower-blue'>#</span>{id}</h2>
            <p className='text-secondary'>{description}</p>
          </div>

          <div>
            <p className='text-secondary'>{senderAddress.street}</p>
            <p className='text-secondary'>{senderAddress.city}</p>
            <p className='text-secondary'>{senderAddress.postCode}</p>
            <p className='text-secondary'>{senderAddress.country}</p>
          </div>
        </div>

        <div className='invoice-details--location flex justify-start align-start' style={{ '--gap': '8rem' }}>
          <div className='flex align-center'>
            <div className='flow'>
              <div className='flow'>
                <p className='text-secondary'>Invoice Date</p>
                <p className='fw-bold fs-200 text-primary'>{createdAt}</p>
              </div>
              <div className='flow'>
                <p className='text-secondary'>Payment Due</p>
                <p className='fw-bold fs-200 text-primary'>{paymentDue}</p>
              </div>
            </div>
          </div>
          <div className='flow'>
            <p className='text-secondary'>Bill To</p>

            <div className='flow'>
              <p className='fw-bold fs-200 text-primary'>{clientName}</p>
              <p className='text-secondary'>{clientAddress.street}</p>
              <p className='text-secondary'>{clientAddress.city}</p>
              <p className='text-secondary'>{clientAddress.postCode}</p>
              <p className='text-secondary'>{clientAddress.country}</p>
            </div>
          </div>
          <div className='flow'>
            <p className='text-secondary'>Sent to</p>
            <p className='fs-200 fw-bold text-primary'>{clientEmail}</p>
          </div>
        </div>

        <div>
          <InvoiceItems items={items} />

          <div className='total-cost flex align-center justify-sb'>
            <p>Amount Due</p>
            <p className='fs-300 fw-bold'>£ {total}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default InvoiceDetailsPage