import { useField } from '../hooks'

const FormElement = ({ inputName, inputLabel, type='text', placeholder='' }) => {
  const formInput = useField(inputName, inputLabel, type)

  return (
    <div className='form-element'>
      <label className='label' htmlFor={formInput.name}>{inputLabel}</label>

      <input {...formInput} className='input' placeholder={placeholder} />
    </div>
  )
}

export default FormElement