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
          <Item id={'Net 1 Days'}>Net 1 Days</Item>
          <Item id={'Net 7 Days'}>Net 7 Days</Item>
          <Item id={'Net 14 Days'}>Net 14 Days</Item>
          <Item id={'Net 30 Days'}>Net 30 Days</Item>
        </ListBox>
      </Popover>
    </Select>
  )
}

export default AriaSelectMenu