import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { today, getLocalTimeZone } from '@internationalized/date'
import { addInvoice } from '../reducers/invoiceReducer'

import AriaDatePicker from './AriaDatePicker'
import AriaSelectMenu from './AriaSelectMenu'
import FormElement from './FormElement'
import iconDelete from '../assets/icon-delete.svg'

import './InvoiceForm.css'

const InvoiceForm = ({ visibility, setVisibility }) => {
  const dispatch = useDispatch()
  const [itemIDs, setItems] = useState([{ id: 1 }])
  const [date, setDate] = useState(today(getLocalTimeZone()))
  const [terms, setTerms] = useState('Net 30 Days')

  const handleSubmit = event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    formData.append('date', date)
    formData.append('payment-terms', terms)

    dispatch(addInvoice(formData))
  }

  return (
    <div className='invoice-form-container' data-visible={visibility}>
      <div className='scroll-wrapper bg-neutral flow'>
        <h1 className='fs-300'>New Invoice</h1>

        <form className='invoice-form flow' method='POST' action='' onSubmit={handleSubmit}>
          <section aria-labelledby='bill-from' className='form-section flow'>
            <h4 className='text-cornflower-blue fs-200' id='bill-from'>Bill From</h4>

            <FormElement inputName={'address-from'} inputLabel={'Street Address'}  />

            <div className='flex justify-sb align-center'>
              <FormElement inputName={'city-from'} inputLabel={'City'} />
              <FormElement inputName={'post-code-from'} inputLabel={'Post Code'} />
              <FormElement inputName={'country-from'} inputLabel={'Country'} />
            </div>
          </section>
          
          <section aria-labelledby='bill-to' className='form-section flow'>
            <h4 className='text-cornflower-blue fs-200' id='bill-to'>Bill To</h4>

            <FormElement inputLabel={"Client's Name"} inputName={'client-name'} />
            <FormElement inputLabel={"Client's Email"} inputName={'client-email'} />
            <FormElement inputLabel={'Street Address'} inputName={'street-address-to'} />

            <div className='flex justify-sb align-center'>
              <FormElement inputLabel={'City'} inputName={'city-to'} />
              <FormElement inputLabel={'Post Code'} inputName={'post-code-to'} />
              <FormElement inputLabel={'First name'} inputName={'country-to'} />
            </div>

            <div className='flex align-center justify-sb'>
              <AriaSelectMenu terms={terms} setTerms={setTerms} />
              <AriaDatePicker date={date} setDate={setDate} />
            </div>

            <FormElement inputLabel={'Project Description'} inputName={'project-description'} />
          </section>

          <section aria-labelledby='item-list' className='form-section flow'>
            <h4 className='text-cornflower-blue fs-200' id='item-list'>Item List</h4>

            <table>
              <thead>
                <tr className='form-element grid'>
                  <th className='label' id='item-name'>Item Name</th>
                  <th className='label' id='quantity'>Qty.</th>
                  <th className='label' id='price'>Price</th>
                  <th className='label'>Total</th>
                  <th className='sr-only'>Delete</th>
                </tr>
              </thead>

              <tbody>
                {
                  itemIDs.map(item => {
                    return (
                      <tr key={item.id} className='form-element grid'>
                        <td>
                          <input type='text' name={`item-${item.id}-name`} aria-labelledby='item-name' className='input' />
                        </td>

                        <td>
                          <input type='text' name={`item-${item.id}-quantity`} aria-labelledby='quantity' className='input' />
                        </td>

                        <td>
                          <input type='text' name={`item-${item.id}-price`} aria-labelledby='price' className='input'/>
                        </td>

                        <td className='fw-bold text-secondary'>248.00</td>
                        <td>
                          <button type='button' onClick={() => setItems( itemIDs.filter( filter => filter.id !== item.id ))}>
                            <img src={iconDelete} alt='delete' /> 
                            <span className='sr-only'>delete item</span>
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <button className='button button--add' type='button' onClick={() => setItems( itemIDs.concat( { id: itemIDs.length + 1 }))}>Add New Item</button>
          </section>
          <div className='flex justify-sb align-center'>
            <button type='button' onClick={() => setVisibility('false')} className='button button--discard'>Discard</button>
        
            <div className='flex justify-sb align-center'>
              <button className='button button--draft' type='button'>Save as Draft</button>
              <button className='button button--mark' type='submit'>Save and Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InvoiceForm