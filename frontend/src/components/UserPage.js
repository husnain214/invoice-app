import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './UserPage.css'
import data from '../data.json'

import SideBar from './SideBar'
import InvoiceList from './InvoiceList.js'
import InvoiceDetailsPage from './InvoiceDetailsPage'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../reducers/userReducer'

const UserPage = () => {
  const [invoices, setInvoices] = useState([])
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [filtersList, setFiltersList] = useState([])

  useEffect(() => {
    setInvoices(data)
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

  const toggleTheme = () => {
    dispatch(changeTheme(user))
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