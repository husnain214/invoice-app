import { useTextField } from '../hooks'

const FormElement = ({ inputName, inputLabel, type='text', placeholder='' }) => {
  const formInput = useTextField(inputName)

  return (
    <div className='form-element'>
      <label className='label' htmlFor={formInput.name}>{inputLabel}</label>

      <input 
        name={formInput.name}
        id={formInput.name}
        type={type}
        className='input' 
        value={formInput.value}
        onChange={formInput.onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormElement