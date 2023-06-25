import { Route, Routes } from 'react-router-dom'

import './UserPage.css'

import SideBar from './SideBar'
import InvoiceList from './InvoiceList.js'
import InvoiceDetailsPage from './InvoiceDetailsPage'

const UserPage = ({ invoices, toggleTheme, updateFilters }) => {

  return (
    <>
      <div className='user-page'>
        <SideBar toggleTheme={toggleTheme} />

        <div className='p-relative'>
          <Routes>
            <Route path='/' element={<InvoiceList 
              invoices={invoices} 
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