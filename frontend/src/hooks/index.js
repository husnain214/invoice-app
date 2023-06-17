import { useState } from 'react'

export const useTextField = (name, label = '') => {
  const [value, setValue] = useState('')

  const onChange = event => setValue(event.target.value)

  return {
    value,
    onChange,
    name,
    label
  }
}
