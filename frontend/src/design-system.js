import { CalendarCell, CalendarGrid, Heading, Calendar, Dialog, DateInput, DateSegment, Group, DatePicker, Button, Item, Label, ListBox, Popover, Select, SelectValue } from 'react-aria-components'
import arrowDown from './assets/icon-arrow-down.svg'
import arrowLeft from './assets/icon-arrow-left.svg'
import arrowRight from './assets/icon-arrow-right.svg'
import iconCalendar from './assets/icon-calendar.svg'
import './design-system.css'

const DesignSystem = () => {

  return(
    <>
      <h1 className='fs-400 letter-spacing-400 line-height-500'>Aliquam porttitor mauris sit amet orci Aenean</h1>
      <h2 className='fs-300 letter-spacing-300 line-height-300'>Aliquam porttitor mauris sit amet orci Aenean</h2>
      <h3 className='fs-200 letter-spacing-200 line-height-400'>Aliquam porttitor mauris sit amet orci Aenean</h3>
      
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis</p>  

      <button className='button button--mark'>Mark as paid</button>
      <button className='button button--edit'>Edit</button>
      <button className='button button--draft'>Save as Draft</button>
      <button className='button button--delete'>Delete</button>
      <button className='button button--add'>Add New Item</button>

      <div className='form-element'>
        <label className='label'>First name</label>
        <input type='text' className='input' />
      </div>

      <Select className='form-element'>
        <Label className='label'>Payment Terms</Label>
        <Button className='input'>
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

      <DatePicker className='form-element' isReadOnly={true}>
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
    </>
  )
}

export default DesignSystem