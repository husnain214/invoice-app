import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './UserPage.css'

import SideBar from './SideBar'
import InvoiceList from './InvoiceList.js'
import InvoiceDetailsPage from './InvoiceDetailsPage'
import InvoiceForm from './InvoiceForm'

const UserPage = ({ invoices, toggleTheme, updateFilters }) => {
  const [invoicFormVisible, setInvoiceFormVisible] = useState(false)
  const [selectedInvoice, setSelectedInvoice] = useState(null)

  return (
    <>
      <div className='user-page'>
        <SideBar toggleTheme={toggleTheme} />

        <div className='p-relative'>
          <Routes>
            <Route path='/' element={<InvoiceList 
              openInvoiceForm={setInvoiceFormVisible} 
              invoices={invoices} 
              updateFilters={updateFilters}
              />
            } />

            <Route path='/invoices/:invoiceID' element={
              <InvoiceDetailsPage 
                setInvoice={setSelectedInvoice} 
                invoices={invoices} 
                openInvoiceForm={setInvoiceFormVisible} 
              />
            } />
          </Routes>

          <InvoiceForm 
            visibility={invoicFormVisible} 
            invoiceID={selectedInvoice} 
            setVisibility={setInvoiceFormVisible} 
          />
        </div>
      </div>
    </>
  )
}

export default UserPage