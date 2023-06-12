import {Button, Dialog, DialogTrigger, Popover, CheckboxGroup, Checkbox, Label} from 'react-aria-components'
import arrowDown from '../assets/icon-arrow-down.svg'
import iconPlus from'../assets/icon-plus.svg'

const Header = ({ showForm }) => {
  const handleClick = () => {
    showForm(true)
  } 

  return (
    <header className='header container flex justify-sb'>
      <div>
        <h1 className='fs-400 letter-spacing-400 line-height-500'>Invoices</h1>
        <p className='text-secondary'>No invoices</p>
      </div>

      <div className='flex'>
        <DialogTrigger>
          <Button className='flex text-primary bg-body button'>
            Filter by status

            <img src={arrowDown} alt='arrow down'/>
          </Button>
          <Popover>
            <Dialog>
            <CheckboxGroup>
              <Label className='sr-only'>Payment Status</Label>
              <Checkbox value="soccer">
                <div className="checkbox" aria-hidden="true">
                  <svg viewBox="0 0 18 18"><polyline points="1 9 7 14 15 4" /></svg>
                </div>
                <span className='fw-bold fs-200'>Draft</span> 
              </Checkbox>
              <Checkbox value="baseball">
                <div className="checkbox" aria-hidden="true">
                  <svg viewBox="0 0 18 18"><polyline points="1 9 7 14 15 4" /></svg>
                </div>
                <span className='fw-bold fs-200'>Pending</span> 
              </Checkbox>
              <Checkbox value="basketball">
                <div className="checkbox" aria-hidden="true">
                  <svg viewBox="0 0 18 18"><polyline points="1 9 7 14 15 4" /></svg>
                </div>
                <span className='fw-bold fs-200'>Paid</span> 
              </Checkbox>
            </CheckboxGroup>
            </Dialog>
          </Popover>
        </DialogTrigger>

        <button 
          type='button'
          onClick={handleClick} 
          className='button button--new-invoice'>
          <div><img src={iconPlus} height='10' width='10' alt='plus' /></div>

          New Invoice
        </button>
      </div>
    </header>
  )
}

export default Header