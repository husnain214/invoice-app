import iconDelete from '../assets/icon-delete.svg'

const ItemRow = () => {
  return (
    <tr className='form-element grid'>
      <td>
        <input 
          type='text' 
          aria-labelledby='item-name' 
          className='input' 
        />
      </td>

      <td>
        <input 
          type='text' 
          aria-labelledby='quantity' 
          className='input'
        />
      </td>

      <td>
        <input 
          type='text' 
          aria-labelledby='price' 
          className='input'
        />
      </td>

      <td className='fw-bold text-secondary'>248.00</td>
      <td>
        <button type='button'>
          <img src={iconDelete} alt='delete' />
        </button>
      </td>
    </tr>
  )
}

export default ItemRow