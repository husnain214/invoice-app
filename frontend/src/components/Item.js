import { useState } from 'react'

import iconDelete from '../assets/icon-delete.svg'

const Item = ({ item, setItems, itemIDs }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)

  return (
    <tr className='form-element grid'>
      <td>
        <input 
          type='text' 
          name={`item-${item.id}-name`} 
          aria-labelledby='item-name' 
          value={name}
          onChange={({ target }) => setName(target.value)}
          className='input' />
      </td>

      <td>
        <input 
          type='number' 
          name={`item-${item.id}-quantity`} 
          value={quantity}
          onChange={({ target }) => setQuantity(target.value)}
          aria-labelledby='quantity' 
          className='input' />
      </td>

      <td>
        <input 
          type='text' 
          name={`item-${item.id}-price`} 
          value={price}
          onChange={({ target }) => setPrice(target.value)}
          aria-labelledby='price' 
          className='input'/>
      </td>

      <td className='fw-bold text-secondary'>
        <input 
        className='fw-bold text-secondary' 
        style={{width: 'min-content', outline: 'none', border: 0, textAlign: 'center'}} 
        readOnly 
        name={`item-${item.id}-total-price`}
        value={`${price * quantity}.00`} />
      </td>

      <td>
        <button type='button' onClick={() => setItems( itemIDs.filter( filter => filter.id !== item.id ))}>
          <img src={iconDelete} alt='delete' /> 
          <span className='sr-only'>delete item</span>
        </button>
      </td>
    </tr>
  )
}

export default Item