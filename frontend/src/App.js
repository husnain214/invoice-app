import './design-system.css'
import data from './data.json'
import UserPage from './components/UserPage'
import { useEffect, useState } from 'react'

const App = () => {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    setInvoices(data)
    document.body.setAttribute('data-theme', 'light')
  }, [])

  const toggleTheme = () => {
    const theme = document.body.getAttribute('data-theme') === 'light'
                  ? 'dark'
                  : 'light'
    document.body.setAttribute('data-theme', theme)
  }

  return (
    <>
      <UserPage invoices={invoices} toggleTheme={toggleTheme} />
    </>
  )
}

export default App