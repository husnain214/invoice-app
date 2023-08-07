import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './UserPage.css'

import SideBar from './SideBar'
import InvoiceList from './InvoiceList.js'
import InvoiceDetailsPage from './InvoiceDetailsPage'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme, logout } from '../reducers/userReducer'
import { initializeInvoices } from '../reducers/invoiceReducer'

const UserPage = () => {
  const invoices = useSelector(state => state.invoice)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [filtersList, setFiltersList] = useState([])

  useEffect(() => {
    dispatch(initializeInvoices())
    setFilteredInvoices(
      filtersList.length === 0 
      ? invoices
      : invoices.filter(invoice => filtersList.includes(invoice.status))
    )
    
    document.body.setAttribute('data-theme', user.theme ? 'dark' : 'light')
  }, [filtersList, invoices, user.theme])

  const [filteredInvoices, setFilteredInvoices] = useState([])

  const updateFilters = checked => {
    setFiltersList(
      filtersList.includes(checked) 
      ? filtersList.filter(filter => filter !== checked)
      : [...filtersList, checked]
    )

    if(filtersList.length === 0) setFilteredInvoices(invoices)
  } 

  return (
    <>
      <div className='user-page'>
        <SideBar />

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