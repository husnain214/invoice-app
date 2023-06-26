import { useState } from 'react'

import AriaDatePicker from './AriaDatePicker'
import AriaSelectMenu from './AriaSelectMenu'
import FormElement from './FormElement'
import ItemsRow from './ItemsRow'

import './InvoiceForm.css'

const InvoiceForm = ({ visibility, setVisibility, invoiceID }) => {
  const [rows, setRows] = useState([<ItemsRow />])

  return (
    <div className='invoice-form-container' data-visible={visibility}>
      <div className='scroll-wrapper bg-neutral flow'>
        <h1 className='fs-300'>Edit <span className='text-cornflower-blue'>#</span>{invoiceID}</h1>

        <form className='invoice-form flow'>
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
              <AriaSelectMenu />
              <AriaDatePicker />
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
                {rows}
              </tbody>
            </table>
            <button className='button button--add' type='button' onClick={() => setRows([...rows, <ItemsRow />])}>Add New Item</button>
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