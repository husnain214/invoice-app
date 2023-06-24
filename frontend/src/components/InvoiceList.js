import imageEmpty from '../assets/illustration-empty.svg'
import Invoice from './Invoice'
import Header from './Header'
import InvoiceForm from './InvoiceForm'

const InvoiceList = ({ invoices, openInvoiceForm, updateFilters, invoiceFormVisible, selectedInvoice, setInvoiceFormVisible }) => {
  return (
    <>
      <Header 
        showForm={ openInvoiceForm } 
        invoiceCount = {invoices.length} 
        updateFilters={updateFilters} 
      />
    
      <main className='main-content container flow'>
      {
        invoices.length !== 0
        ? invoices.map(invoice => <Invoice key={invoice.id} invoice={invoice} />)
        : <>
            <div>
              <img 
                className='d-inline' 
                src={imageEmpty} 
                width='241' 
                height='200' 
                alt='illustration empty' 
              />
            </div>

            <div className='flow'>
              <h2 className='fs-400 letter-spacing-400 line-height-500'>There is nothing here</h2>
              
              <p className='text-secondary'>
                Create an invoice by clicking the
                <br />
                <span className='fw-bold'>New Invoice</span> button and get started
              </p>
            </div>
          </>
      }
      </main>

      <InvoiceForm 
        visibility={invoiceFormVisible} 
        invoiceID={selectedInvoice} 
        setVisibility={setInvoiceFormVisible} 
      />
    </>
  )
}

export default InvoiceList