import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './UserPage.css'
import data from '../data.json'

import SideBar from './SideBar'
import InvoiceList from './InvoiceList.js'
import InvoiceDetailsPage from './InvoiceDetailsPage'

const UserPage = () => {
  const [invoices, setInvoices] = useState([])

  const [filtersList, setFiltersList] = useState([])

  useEffect(() => {
    setInvoices(data)
    setFilteredInvoices(
      filtersList.length === 0 
      ? invoices
      : invoices.filter(invoice => filtersList.includes(invoice.status))
    )
    
    document.body.setAttribute('data-theme', 'dark')
  }, [filtersList, invoices])

  const [filteredInvoices, setFilteredInvoices] = useState([])

  const updateFilters = checked => {
    setFiltersList(
      filtersList.includes(checked) 
      ? filtersList.filter(filter => filter !== checked)
      : [...filtersList, checked]
    )

    if(filtersList.length === 0) setFilteredInvoices(invoices)
  } 

  const toggleTheme = () => {
    const theme = document.body.getAttribute('data-theme') === 'light'
                  ? 'dark'
                  : 'light'
    document.body.setAttribute('data-theme', theme)
  }

  return (
    <>
      <div className='user-page'>
        <SideBar toggleTheme={toggleTheme} />

        <div className='p-relative'>
          <Routes>
            <Route path='/' element={<InvoiceList 
              invoices={filteredInvoices} 
              updateFilters={updateFilters}
              />
            } />

            <Route path='/invoices/:invoiceID' element={
              <InvoiceDetailsPage 
                invoices={invoices} 
              />
            } />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default UserPage