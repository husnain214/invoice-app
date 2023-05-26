import { CalendarCell, CalendarGrid, Heading, Calendar, Dialog, DateInput, DateSegment, Group, DatePicker, Button, Item, Label, ListBox, Popover, Select, SelectValue } from 'react-aria-components'
import arrowDown from '../assets/icon-arrow-down.svg'
import arrowLeft from '../assets/icon-arrow-left.svg'
import arrowRight from '../assets/icon-arrow-right.svg'
import iconCalendar from '../assets/icon-calendar.svg'
import iconDelete from '../assets/icon-delete.svg'
import './InvoiceForm.css'
const InvoiceForm = ({ visibility, setVisibility }) => {
  return (
    <div className='invoice-form-container' data-visible={visibility}>
      <div className='scroll-wrapper bg-neutral'>
        <form className='invoice-form flow'>
          <h3>New Invoice</h3>

          <section aria-labelledby='bill-from' className='form-section flow'>
            <h4 className='text-cornflower-blue fs-200' id='bill-from'>Bill From</h4>

            <div className='form-element'>
              <label className='label' htmlFor='address-from'>Street Address</label>
              <input name='address-from' id='address-from' type='text' className='input' />
            </div>

            <div className='flex justify-sb align-center'>
              <div className='form-element'>
                <label className='label' htmlFor='city-from'>City</label>
                <input type='text' className='input' id='city-from' name='city-from' />
              </div>

              <div className='form-element'>
                <label className='label' htmlFor='post-code-from'>Post Code</label>
                <input type='text' name='post-code-from' id='post-code-from' className='input' />
              </div>

              <div className='form-element'>
                <label className='label' htmlFor='country-from'>Country</label>
                <input type='text' className='input' id='country-from' name='country-from' />
              </div>
            </div>
          </section>
          
          <section aria-labelledby='bill-to' className='form-section flow'>
            <h4 className='text-cornflower-blue fs-200' id='bill-to'>Bill To</h4>

            <div className='form-element'>
              <label className='label' htmlFor='client-name'>Client's Name</label>
              <input type='text' id='client-name' name='client-name' className='input' />
            </div>

            <div className='form-element'>
              <label className='label' htmlFor='client-email'>Client's Email</label>
              <input type='text' id='client-email' name='client-email' className='input' />
            </div>

            <div className='form-element'>
              <label className='label' htmlFor='street-address-to'>Street Address</label>
              <input type='text' name='street-address-to' id='street-address-to' className='input' />
            </div>

            <div className='flex justify-sb align-center'>
              <div className='form-element'>
                <label className='label' htmlFor='city-to'>City</label>
                <input type='text' name='city-to' className='input' />
              </div>

              <div className='form-element'>
                <label className='label' htmlFor='post-code-to'>Post Code</label>
                <input type='text' className='input' id='post-code-to' name='post-code-to'  />
              </div>

              <div className='form-element'>
                <label className='label' htmlFor='country-to'>First name</label>
                <input type='text' name='country-to' id='country-to' className='input' />
              </div>
            </div>

            <div className='flex align-center justify-sb'>
              <Select className='form-element'>
                <Label className='label'>Payment Terms</Label>
                <Button className='flex input'>
                  <SelectValue />
                  <span aria-hidden="true">
                    <img src={arrowDown} alt='arrow down'/>
                  </span>
                </Button>
                <Popover>
                  <ListBox>
                    <Item>Net 1 Days</Item>
                    <Item>Net 7 Days</Item>
                    <Item>Net 14 Days</Item>
                    <Item>Net 30 Days</Item>
                  </ListBox>
                </Popover>
              </Select>
              <DatePicker className='form-element'>
                <Label className='label'>Date</Label>
                <Group className='flex input'>
                  <DateInput className='flex'>
                    {(segment) => <DateSegment segment={segment} />}
                  </DateInput>
                  <Button className='form-element--button'>
                    <img src={iconCalendar} alt=''/>
                  </Button>
                </Group>
                <Popover>
                  <Dialog>
                    <Calendar className='flow'>
                      <header className='flex justify-sb'>
                        <Button className='form-element--button' slot="previous">
                          <img src={arrowLeft} alt=''/>
                        </Button>
                        <Heading className='fs-100' />
                        <Button className='form-element--button' slot="next">
                          <img src={arrowRight} alt=''/>
                        </Button>
                      </header>
                      <CalendarGrid>
                        {(date) => <CalendarCell date={date} />}
                      </CalendarGrid>
                    </Calendar>
                  </Dialog>
                </Popover>
              </DatePicker>
            </div>

            <div className='form-element'>
              <label className='label'>Project Description</label>
              <input type='text' className='input' id='project-description' name='project-description' />
            </div>
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
                <tr className='form-element grid'>
                  <td><input type='text' aria-labelledby='item-name' className='input'/></td>
                  <td><input type='text' aria-labelledby='quantity' className='input'/></td>
                  <td><input type='text' aria-labelledby='price' className='input'/></td>
                  <td className='fw-bold text-secondary'>248.00</td>
                  <td>
                    <button type='button'>
                      <img src={iconDelete} alt='delete'/>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className='button button--add' type='button'>Add New Item</button>
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