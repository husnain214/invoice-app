import { Link, useNavigate, useParams } from 'react-router-dom'

import EditInvoiceForm from './EditInvoiceForm'
import arrowLeft from '../assets/icon-arrow-left.svg'
import './Invoice.css'
import './InvoiceDetailsPage.css'
import { useEffect, useRef, useState } from 'react'
import DeleteInvoiceDialog from './DeleteInvoiceDialog'
import { changeInvoice, removeInvoice } from '../reducers/invoiceReducer'
import { useDispatch } from 'react-redux'

const InvoiceItems = ({ items }) => {
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

const InvoiceDetailsPage = ({ invoices }) => {
  const { invoiceID } = useParams()
  const [isPageValid, setIsPageValid] = useState(false)
  const [invoiceFormVisible, setInvoiceFormVisible] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const InvoiceDetailsRef = useRef()

  useEffect(() => {
    if(!invoices.length) {  
      navigate('/')
    }

    setIsPageValid(true)
  }, [invoices, navigate])

  if (!isPageValid) return

  const selectedInvoice = invoices.find( invoice => invoice.id === invoiceID)
  const { id, description, status, senderAddress, paymentTerms, createdAt, paymentDue, clientName, clientAddress, clientEmail, items, total } = selectedInvoice

  const deleteInvoice = () => {
    dispatch(removeInvoice(id))
    navigate('/')
  }

  const markPaid = () => {
    const invoice = {
      id: invoiceID,
      createdAt,
      paymentTerms,
      paymentDue,
      description,
      clientName,
      clientEmail,
      senderAddress,
      clientAddress,
      items,
      total,
      status: 'Paid'
    }

    dispatch(changeInvoice(invoice))
  }

  const openDeleteDialog = () => {
    InvoiceDetailsRef.current.openDialog()
  }

  return (
    <>
      <div className='invoice-page container p-relative'>
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

              <div className={`invoice-status invoice-status--${status.toLowerCase()} flex align-center`}>
                <span className='fw-bold fs-200 letter-spacing-200 line-height-100'>{status}</span>
              </div>
            </div>

            <div className='flex align-center justify-sb hidden-mobile'>
              <button className='button button--edit' onClick={() => {
                setInvoiceFormVisible(true)
              }}>Edit</button>
              <button onClick={openDeleteDialog} className='button button--delete'>Delete</button>
              <button onClick={markPaid} className='button button--mark'>Mark as Paid</button>
            </div>
          </div>
        </header>

        <main className='invoice-details grid bg-neutral' style={{ '--gap': '3rem' }}>
          <div className='flex align-center justify-sb'>
            <div className='flow'>
              <h2 className='letter-spacing-200 text-primary fs-200 line-height-100'><span className='text-cornflower-blue'>#</span>{id.slice(0, 6).toUpperCase()}</h2>
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
                  <p className='fw-bold fs-200 text-primary'>{createdAt.slice(0, 10)}</p>
                </div>
                <div className='flow'>
                  <p className='text-secondary'>Payment Due</p>
                  <p className='fw-bold fs-200 text-primary'>{paymentDue.slice(0, 10)}</p>
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

      <footer className='bg-neutral desktop-hidden'>
        <div className='container flex align-center justify-center'>
          <button className='button button--edit' onClick={() => {
            setInvoiceFormVisible(true)
          }}>Edit</button>
          <button onClick={openDeleteDialog} className='button button--delete'>Delete</button>
          <button className='button button--mark'>Mark as Paid</button>
        </div>
      </footer>

      <EditInvoiceForm 
        visibility={invoiceFormVisible} 
        setVisibility={setInvoiceFormVisible} 
        invoiceID={invoiceID}
      />

      <DeleteInvoiceDialog deleteInvoice={deleteInvoice} ref={InvoiceDetailsRef} />
    </>
  )
}

export default InvoiceDetailsPage