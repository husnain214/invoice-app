import './design-system.css'
import data from './data.json'
import UserPage from './components/UserPage'
import { useEffect, useState } from 'react'

const App = () => {
  const [invoices, setInvoices] = useState([])

  const [filtersList, setFiltersList] = useState([])

  useEffect(() => {
    setInvoices(data)
    setFilteredInvoices(
      filtersList.length === 0 
      ? invoices
      : invoices.filter(invoice => filtersList.includes(invoice.status))
    )
    
    document.body.setAttribute('data-theme', 'light')
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
      <UserPage invoices={filteredInvoices} toggleTheme={toggleTheme} updateFilters={updateFilters} />
    </>
  )
}

export default App