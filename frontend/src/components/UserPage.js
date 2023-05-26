import { useState } from 'react'
import './UserPage.css'
import SideBar from './SideBar'
import InvoiceList from './InvoiceList.js'
import InvoiceDetailsPage from './InvoiceDetailsPage'
import { Route, Routes } from 'react-router-dom'
import InvoiceForm from './InvoiceForm'

const UserPage = ({ invoices, toggleTheme }) => {
  const [invoicFormVisible, setInvoiceFormVisible] = useState(false)

  return (
    <>
      <div className='user-page'>
        <SideBar toggleTheme={toggleTheme} />

        <div className='p-relative'>
          <Routes>
            <Route path='/' element={<InvoiceList openInvoiceForm={setInvoiceFormVisible} invoices={invoices} />} />
            <Route path='/invoices/:invoiceID' element={<InvoiceDetailsPage invoices={invoices} />} />
          </Routes>

          <InvoiceForm visibility={invoicFormVisible} setVisibility={setInvoiceFormVisible} />
        </div>
      </div>
    </>
  )
}

export default UserPage