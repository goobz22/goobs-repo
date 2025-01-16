'use client'

import React, {
  useState,
  useEffect,
  useCallback,
  FocusEventHandler,
  FocusEvent,
} from 'react'
import {
  Box,
  styled,
  MenuItem,
  FormControl,
  FormControlProps,
  Select,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  SelectChangeEvent,
} from '@mui/material'
import Typography from '../Typography'
import { white } from '../../styles/palette'

// -----------------------------
// Types
// -----------------------------
export interface SimpleDropdownOption {
  value: string
}

export interface ComplexDropdownOption extends SimpleDropdownOption {
  attribute1?: string
  attribute2?: string
}

export type DropdownOption = SimpleDropdownOption | ComplexDropdownOption

export interface DropdownProps {
  label: string
  options: DropdownOption[]
  defaultValue?: string
  backgroundcolor?: string
  outlinecolor?: string
  fontcolor?: string
  shrunkfontcolor?: string
  unshrunkfontcolor?: string
  /**
   * Positions the label text when shrunk.
   * - `onNotch` = label sits on top of the outlined notch.
   * - `aboveNotch` = label moves above the notch.
   */
  shrunklabelposition?: 'onNotch' | 'aboveNotch'
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  helperText?: string
  name?: string
  required?: boolean
  onBlur?: FocusEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  value?: string
}

// -----------------------------
// Utility
// -----------------------------
const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

// -----------------------------
// Styles
// -----------------------------
const StyledBox = styled(Box)(() => ({
  width: '100%',
  marginTop: '10px',
}))

const StyledMenuItem = styled(MenuItem)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  backgroundColor: white.main,
}))

interface StyledFormControlProps extends FormControlProps {
  $hasValue: boolean
  $focused: boolean
  $backgroundcolor?: string
  $outlinecolor?: string
  $fontcolor?: string
  $shrunkfontcolor?: string
  $unshrunkfontcolor?: string
  $shrunklabelposition?: 'onNotch' | 'aboveNotch'
  $error?: boolean
}

const StyledFormControl = styled(FormControl, {
  shouldForwardProp: prop =>
    ![
      '$hasValue',
      '$focused',
      '$backgroundcolor',
      '$outlinecolor',
      '$fontcolor',
      '$shrunkfontcolor',
      '$unshrunkfontcolor',
      '$shrunklabelposition',
      '$error',
    ].includes(prop as string),
})<StyledFormControlProps>(
  ({
    $hasValue,
    $backgroundcolor,
    $outlinecolor,
    $fontcolor,
    $shrunkfontcolor,
    $unshrunkfontcolor,
    $shrunklabelposition,
    $error,
  }) => ({
    minHeight: '55px',
    '& .MuiInputLabel-root': {
      // ----- UN-SHRUNK LABEL STYLES (Static) -----
      '&:not(.MuiInputLabel-shrink)': {
        transform: 'translate(14px, 9px) scale(1)',
      },
      color: $unshrunkfontcolor || 'black',
      '&.Mui-focused': {
        color: $shrunkfontcolor || 'black',
      },
      // ----- SHRUNK LABEL STYLES -----
      '&.MuiInputLabel-shrink': {
        color: $shrunkfontcolor || 'black',
        ...(($shrunklabelposition === 'aboveNotch' && {
          // Move label entirely above the outline
          transform: 'translate(0px, -17px) scale(0.75)',
        }) ||
          ($shrunklabelposition === 'onNotch' && {
            // Sits on top of the notched outline
            transform: 'translate(14px, -9px) scale(0.75)',
          })),
      },
    },
    '& .MuiOutlinedInput-root': {
      minHeight: '40px',
      height: '40px',
      backgroundColor: $backgroundcolor || 'inherit',
      color: $fontcolor || 'black',
      '& .MuiSelect-icon': {
        color: $fontcolor || 'black',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor:
          $outlinecolor ||
          ($error ? '' : $hasValue ? 'black' : 'rgba(0, 0, 0, 0.23)'),
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor:
          $outlinecolor ||
          ($error ? '' : $hasValue ? 'black' : 'rgba(0, 0, 0, 0.23)'),
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor:
          $outlinecolor ||
          ($error ? '' : $hasValue ? 'black' : 'rgba(0, 0, 0, 0.23)'),
      },
      '& .MuiOutlinedInput-input': {
        padding: '8px 14px',
        color: $fontcolor || 'black',
      },
    },
  })
)

const StyledOutlinedInput = styled(OutlinedInput, {
  shouldForwardProp: prop =>
    ![
      '$backgroundcolor',
      '$fontcolor',
      '$hasValue',
      '$focused',
      '$outlinecolor',
      '$error',
    ].includes(prop as string),
})(() => ({}))

// -----------------------------
// Component
// -----------------------------
const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  defaultValue,
  backgroundcolor,
  outlinecolor,
  fontcolor,
  shrunkfontcolor,
  unshrunkfontcolor,
  shrunklabelposition = 'onNotch',
  onChange,
  error = false,
  helperText,
  name,
  required = false,
  onBlur,
  onFocus,
  value: externalValue,
}) => {
  // -----------------------------
  // Determine initial value
  // -----------------------------
  let initialSelected = ''

  if (externalValue !== undefined && externalValue !== '') {
    initialSelected = externalValue
  } else if (defaultValue) {
    const defaultOption = options.find(opt => opt.value === defaultValue)
    if (defaultOption) {
      initialSelected = defaultOption.value
    }
  }

  // -----------------------------
  // Local State
  // -----------------------------
  const [selectedValue, setSelectedValue] = useState<string>(initialSelected)
  const [focused, setFocused] = useState(false)

  // -----------------------------
  // Sync with external value
  // -----------------------------
  useEffect(() => {
    if (externalValue !== undefined) {
      setSelectedValue(externalValue)
    }
  }, [externalValue])

  // -----------------------------
  // Handlers
  // -----------------------------
  const handleChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      const newValue = event.target.value as string
      setSelectedValue(newValue)

      if (onChange) {
        onChange(event as unknown as React.ChangeEvent<HTMLInputElement>)
      }
    },
    [onChange]
  )

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setFocused(false)
      onBlur?.(e)
    },
    [onBlur]
  )

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setFocused(true)
      onFocus?.(e)
    },
    [onFocus]
  )

  // -----------------------------
  // Render function
  // -----------------------------
  const renderMenuItem = (option: DropdownOption) => {
    const itemLabel = capitalizeFirstLetter(option.value.replace(/_/g, ' '))

    if (!('attribute1' in option)) {
      // Simple
      return (
        <MenuItem key={option.value} value={option.value}>
          <Typography fontvariant="merriparagraph" text={itemLabel} />
        </MenuItem>
      )
    } else {
      // Complex
      return (
        <StyledMenuItem key={option.value} value={option.value}>
          <Typography fontvariant="merriparagraph" text={itemLabel} />
          <Typography
            fontvariant="merriparagraph"
            text={`${option.attribute1}${
              option.attribute2 ? ` | ${option.attribute2}` : ''
            }`}
            fontcolor="textSecondary"
          />
        </StyledMenuItem>
      )
    }
  }

  const hasValue = Boolean(selectedValue && selectedValue.length)

  // Update the notching logic
  const shouldNotch = shrunklabelposition === 'onNotch' && (hasValue || focused)
  const inputLabelForOutlined = shouldNotch ? label : ''

  return (
    <StyledBox>
      <StyledFormControl
        fullWidth
        variant="outlined"
        required={required}
        error={error}
        $hasValue={hasValue}
        $focused={focused}
        $backgroundcolor={backgroundcolor}
        $outlinecolor={outlinecolor}
        $fontcolor={fontcolor}
        $shrunkfontcolor={shrunkfontcolor}
        $unshrunkfontcolor={unshrunkfontcolor}
        $shrunklabelposition={shrunklabelposition}
        $error={error}
      >
        <InputLabel htmlFor={name}>{label}</InputLabel>

        <Select
          label={inputLabelForOutlined}
          value={selectedValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          input={
            <StyledOutlinedInput
              label={inputLabelForOutlined}
              notched={shouldNotch}
            />
          }
          inputProps={{
            name,
          }}
        >
          {options.map(renderMenuItem)}
        </Select>

        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </StyledFormControl>
    </StyledBox>
  )
}

export default Dropdown
