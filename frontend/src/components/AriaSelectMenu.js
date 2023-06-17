import { Button, Item, Label, ListBox, Popover, Select, SelectValue } from 'react-aria-components'

import arrowDown from '../assets/icon-arrow-down.svg'

const AriaSelectMenu = () => {
  return (
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
  )
}

export default AriaSelectMenu