// src/components/ComplexTextEditor/SimpleEditor.tsx

import React from 'react'
import { Box, TextField } from '@mui/material'

/**
 * Extend the simple editor props to support TextField behaviors:
 * - error
 * - helperText
 * - required
 */
type SimpleEditorProps = {
  value: string
  setValue: (value: string) => void
  minRows?: number
  label?: string
  error?: boolean
  helperText?: React.ReactNode
  required?: boolean
}

/**
 * A simple multiline text editor.
 */
const SimpleEditor: React.FC<SimpleEditorProps> = ({
  value,
  setValue,
  minRows = 5,
  label,
  error,
  helperText,
  required,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TextField
        fullWidth
        multiline
        variant="outlined"
        minRows={minRows}
        label={label}
        value={value}
        error={error}
        helperText={helperText}
        required={required}
        onChange={handleChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            '& fieldset': {
              borderColor: 'black',
            },
            '&:hover fieldset': {
              borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
            '& .MuiInputBase-input': {
              transform: 'translateY(-8px)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'black',
            '&.Mui-focused': {
              color: 'black',
            },
          },
        }}
      />
    </Box>
  )
}

export default SimpleEditor
