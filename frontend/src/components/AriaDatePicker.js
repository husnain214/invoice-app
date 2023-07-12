import { CalendarCell, CalendarGrid, Heading, Calendar, Dialog, DateInput, DateSegment, Group, DatePicker, Button, Label, Popover } from 'react-aria-components'
import arrowLeft from '../assets/icon-arrow-left.svg'
import arrowRight from '../assets/icon-arrow-right.svg'
import iconCalendar from '../assets/icon-calendar.svg'

const AriaDatePicker = ({ date, setDate }) => {
  return (
    <DatePicker value={date} onChange={setDate} className='form-element'>
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
  )
}

export default AriaDatePicker