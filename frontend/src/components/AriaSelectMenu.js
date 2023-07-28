import { Button, Item, Label, ListBox, Popover, Select, SelectValue } from 'react-aria-components'

import arrowDown from '../assets/icon-arrow-down.svg'

const AriaSelectMenu = ({ terms, setTerms }) => {
  return (
    <Select className='form-element' onSelectionChange={setTerms} selectedKey={terms}>
      <Label className='label'>Payment Terms</Label>
      <Button className='flex input'>
        <SelectValue onChange={setTerms} />
        <span aria-hidden="true">
          <img src={arrowDown} alt='arrow down'/>
        </span>
      </Button>
      <Popover>
        <ListBox>
          <Item id={1}>Net 1 Days</Item>
          <Item id={7}>Net 7 Days</Item>
          <Item id={14}>Net 14 Days</Item>
          <Item id={30}>Net 30 Days</Item>
        </ListBox>
      </Popover>
    </Select>
  )
}

export default AriaSelectMenu