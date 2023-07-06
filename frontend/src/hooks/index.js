import { useState } from 'react'

export const useField = (name, label = '', type, minLength=0, autoComplete = 'false') => {
  const [value, setValue] = useState('')

  const onChange = event => setValue(event.target.value)

  return {
    value,
    type,
    minLength,
    autoComplete,
    onChange,
    name,
    label
  }
}

