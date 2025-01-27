'use client'
import React, { useState, useCallback } from 'react'
import TextField, { TextFieldProps } from '../TextField'

export interface NumberFieldProps extends Omit<TextFieldProps, 'onChange'> {
  initialValue?: string
  /**
   * A standard ChangeEvent<HTMLInputElement> so parent can do
   * e.g. (event) => parseInt(event.target.value) ...
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  min?: number
  max?: number
}

/**
 * A controlled numeric field that only allows digits
 * and optionally enforces min/max constraints.
 */
const NumberField: React.FC<NumberFieldProps> = ({
  initialValue = '',
  onChange,
  label,
  min,
  max,
  ...rest
}) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value.replace(/[^0-9]/g, '')

      // Let parent know even if newValue is empty:
      onChange?.(event)

      if (newValue === '') {
        setValue('')
        return
      }

      const numValue = parseInt(newValue, 10)

      if (min !== undefined && numValue < min) {
        setValue(String(min))
      } else if (max !== undefined && numValue > max) {
        setValue(String(max))
      } else {
        setValue(newValue)
      }
    },
    [onChange, min, max]
  )

  return (
    <TextField
      value={value}
      onChange={handleChange}
      label={label}
      type="text"
      inputMode="numeric"
      variant="outlined"
      {...rest}
    />
  )
}

export default NumberField
