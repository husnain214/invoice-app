import { Button, Dialog, DialogTrigger, Popover, CheckboxGroup, Checkbox, Label } from 'react-aria-components'
import arrowDown from '../assets/icon-arrow-down.svg'
import iconPlus from'../assets/icon-plus.svg'
import { useState } from 'react'

const Header = ({ showForm, updateFilters }) => {
  const [visibility, setVisibility] = useState('none')
  const [paidChecked, setPaidChecked] = useState(false)
  const [pendingChecked, setPendingChecked] = useState(false)
  const [draftChecked, setDraftChecked] = useState(false)    

  return (
    <header className='header container flex justify-sb'>
      <div>
        <h1 className='fs-400 letter-spacing-400 line-height-500'>Invoices</h1>
        <p className='text-secondary'>No invoices</p>
      </div>

      <div className='flex'>
          <Button className='flex text-primary bg-body button' onClick={() => setVisibility( visibility === '' ? 'none' : '')}>
            Filter by status

            <img src={arrowDown} alt='arrow down'/>
          </Button>
          
          <div className='custom-popover' style={{ display: visibility }}>
            <CheckboxGroup>
              <Label className='sr-only'>Payment Status</Label>
              <Checkbox
                value='Draft'
                isSelected={draftChecked}
                onChange={() => {
                  updateFilters('draft')
                  setDraftChecked(draftChecked ? false : true)
                }}>
                <div className='checkbox' aria-hidden='true'>
                  <svg viewBox='0 0 18 18'><polyline points='1 9 7 14 15 4' /></svg>
                </div>
                <span className='fw-bold fs-200'>Draft</span>
              </Checkbox>
              <Checkbox
                value='Pending'
                isSelected={pendingChecked}
                onChange={() => {
                  updateFilters('pending')
                  setPendingChecked(pendingChecked ? false : true)
                }}>
                <div className='checkbox' aria-hidden='true'>
                  <svg viewBox='0 0 18 18'><polyline points='1 9 7 14 15 4' /></svg>
                </div>
                <span className='fw-bold fs-200'>Pending</span>
              </Checkbox>
            
              <Checkbox
                value='Paid'
                isSelected={true}
                onChange={() => {
                  updateFilters('paid')
                  setPaidChecked(paidChecked ? false : true)
                }}>
                <div className='checkbox' aria-hidden='true'>
                  <svg viewBox='0 0 18 18'><polyline points='1 9 7 14 15 4' /></svg>
                </div>
                <span className='fw-bold fs-200'>Paid</span>
              </Checkbox>
            </CheckboxGroup>
          </div>

        <button 
          type='button'
          onClick={() => showForm(true)} 
          className='button button--new-invoice'>
          <div><img src={iconPlus} height='10' width='10' alt='plus' /></div>

          New Invoice
        </button>
      </div>
    </header>
  )
}

export default Header