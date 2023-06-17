import { useTextField } from '../hooks'

const FormElement = ({ inputName, inputLabel }) => {
  const formInput = useTextField(inputName)

  return (
    <div className='form-element'>
      <label className='label' htmlFor={formInput.name}>{inputLabel}</label>

      <input 
        name={formInput.name}
        id={formInput.name}
        type='text' 
        className='input' 
        value={formInput.value}
        onChange={formInput.onChange}
      />
    </div>
  )
}

export default FormElement