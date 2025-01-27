'use client'

import React, { useState, useEffect, SyntheticEvent } from 'react'
import { Autocomplete } from '@mui/material'
import { styled } from '@mui/material/styles'
import { black, white } from '../../styles/palette'
import Typography from '../Typography'
import TextField from '../TextField'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

interface DropdownOption {
  value: string
  attribute1?: string
  attribute2?: string
}

export interface SearchableDropdownProps {
  label: string
  options: DropdownOption[]
  defaultValue?: string
  backgroundcolor?: string
  outlinecolor?: string
  fontcolor?: string
  inputfontcolor?: string
  shrunkfontcolor?: string
  unshrunkfontcolor?: string
  placeholdercolor?: string
  shrunklabelposition?: 'onNotch' | 'aboveNotch'
  onChange?: (value: DropdownOption | null) => void
  error?: boolean
  helperText?: string
  name?: string
  required?: boolean
  placeholder?: string
}

const StyledAutocomplete = styled(
  Autocomplete<DropdownOption, false, false, true>
)<{
  backgroundcolor?: string
  outlinecolor?: string
  fontcolor?: string
  inputfontcolor?: string
  shrunkfontcolor?: string
  unshrunkfontcolor?: string
  shrunklabelposition?: 'onNotch' | 'aboveNotch'
}>(props => {
  const {
    outlinecolor,
    fontcolor,
    inputfontcolor,
    shrunkfontcolor,
    unshrunkfontcolor,
    shrunklabelposition,
  } = props

  return {
    '& .MuiOutlinedInput-root': {
      overflow: 'visible',
      minHeight: '45px',
      height: '45px !important',
      '& fieldset': {
        borderColor: outlinecolor || black.main,
      },
      '&:hover fieldset': {
        borderColor: outlinecolor || black.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: outlinecolor || black.main,
      },
    },
    '& .MuiAutocomplete-input': {
      color: inputfontcolor || fontcolor || black.main,
      paddingTop: '0px',
      paddingBottom: '0px',
    },
    '& .MuiInputLabel-root': {
      color: unshrunkfontcolor || 'black',
      '&.Mui-focused': {
        color: shrunkfontcolor || 'black',
      },
      '&.MuiInputLabel-shrink': {
        color: shrunkfontcolor || 'black',
        ...(shrunklabelposition === 'aboveNotch' && {
          transform: 'translate(0px, -17px) scale(0.75)',
        }),
        ...(shrunklabelposition === 'onNotch' && {
          transform: 'translate(13px, -5px) scale(0.75)',
        }),
      },
    },
  }
})

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  label,
  options,
  defaultValue,
  backgroundcolor,
  outlinecolor,
  fontcolor = black.main,
  inputfontcolor = black.main,
  shrunkfontcolor = black.main,
  unshrunkfontcolor = black.main,
  placeholdercolor = black.main,
  shrunklabelposition = 'onNotch', // Defaults to 'onNotch'
  onChange,
  error = false,
  helperText,
  name,
  required = false,
  placeholder,
}) => {
  const [value, setValue] = useState<DropdownOption | string | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const defaultOption = options.find(option => option.value === defaultValue)
    if (defaultOption) {
      const displayText =
        defaultOption.value.replace(/_/g, ' ').charAt(0).toUpperCase() +
        defaultOption.value.replace(/_/g, ' ').slice(1)
      setValue(defaultOption)
      setInputValue(displayText)
    }
  }, [defaultValue, options])

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: DropdownOption | string | null
  ) => {
    if (typeof newValue === 'string') {
      // freeSolo typed text
      setValue(newValue)
      setInputValue(newValue)
      onChange?.(null)
    } else {
      setValue(newValue)
      if (newValue) {
        const displayText =
          newValue.value.replace(/_/g, ' ').charAt(0).toUpperCase() +
          newValue.value.replace(/_/g, ' ').slice(1)
        setInputValue(displayText)
        onChange?.(newValue)
      } else {
        setInputValue('')
        onChange?.(null)
      }
    }
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    // Only reset isFocused if there's no selection or typed input
    if (!value && !inputValue) {
      setIsFocused(false)
    }
  }

  return (
    <StyledAutocomplete
      id={name}
      options={options}
      freeSolo
      value={value}
      onChange={handleChange}
      inputValue={inputValue}
      onInputChange={(_e, newInputValue) => {
        setInputValue(newInputValue)
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
      forcePopupIcon
      popupIcon={<ArrowDropDownIcon sx={{ color: black.main }} />}
      disablePortal={false}
      backgroundcolor={backgroundcolor}
      outlinecolor={outlinecolor}
      fontcolor={fontcolor}
      inputfontcolor={inputfontcolor}
      filterOptions={(opts, state) => {
        const input = state.inputValue.toLowerCase()
        return opts.filter(o => o.value.toLowerCase().includes(input))
      }}
      getOptionLabel={(option: DropdownOption | string) => {
        if (typeof option === 'string') {
          return option
        }
        return (
          option.value.replace(/_/g, ' ').charAt(0).toUpperCase() +
          option.value.replace(/_/g, ' ').slice(1)
        )
      }}
      /**
       * Add an explicit type to the `props` parameter here to avoid
       * the “Unsafe array destructuring of a tuple element with an `any` value” error.
       */
      renderOption={(
        liProps: React.HTMLAttributes<HTMLLIElement> & { key?: React.Key },
        option: DropdownOption
      ) => {
        // Destructure `key` so it won't be spread
        const { key, ...restLiProps } = liProps
        return (
          <li key={key} {...restLiProps} style={{ color: black.main }}>
            <Typography
              fontvariant="merriparagraph"
              text={option.value.replace(/_/g, ' ')}
              fontcolor={black.main}
            />
            {option.attribute1 && (
              <Typography
                fontvariant="merriparagraph"
                text={`${option.attribute1}${
                  option.attribute2 ? ` | ${option.attribute2}` : ''
                }`}
                fontcolor={black.main}
              />
            )}
          </li>
        )
      }}
      renderInput={params => (
        <TextField
          {...params}
          required={required}
          error={error}
          helperText={helperText}
          label={label}
          placeholder={placeholder}
          onFocus={handleFocus}
          shrunkfontcolor={shrunkfontcolor}
          onBlur={handleBlur}
          backgroundcolor={backgroundcolor}
          shrunklabelposition={shrunklabelposition}
          slotProps={{
            inputLabel: {
              shrink: isFocused || !!value || !!inputValue,
              sx: {
                color: isFocused ? shrunkfontcolor : unshrunkfontcolor,
                pointerEvents: 'none',
                zIndex: 1,
                overflow: 'visible',
                '&.MuiInputLabel-shrink': {
                  color: shrunkfontcolor,
                  ...(shrunklabelposition === 'aboveNotch' && {
                    transform: 'translate(0px, -17px) scale(0.75)',
                  }),
                  ...(shrunklabelposition === 'onNotch' && {
                    transform: 'translate(15px, -15px) scale(0.75)',
                  }),
                },
                '&:not(.MuiInputLabel-shrink)': {
                  transform: 'none',
                  top: '10px',
                  left: '14px',
                },
              },
            },
            input: {
              ...params.InputProps,
              notched:
                shrunklabelposition === 'onNotch' &&
                (isFocused || !!value || !!inputValue),
            },
          }}
          sx={{
            overflow: 'visible',
            '& .MuiOutlinedInput-root': {
              backgroundColor: backgroundcolor || white.main,
              color: fontcolor,
              minHeight: '40px',
              height: '40px !important',
              overflow: 'visible',
              '& fieldset': {
                borderColor: outlinecolor || black.main,
                overflow: 'visible',
              },
              '&:hover fieldset': {
                borderColor: outlinecolor || black.main,
              },
              '&.Mui-focused fieldset': {
                borderColor: outlinecolor || black.main,
              },
              '& input': {
                backgroundColor: backgroundcolor || white.main,
                color: inputfontcolor,
                paddingTop: '0px',
                paddingBottom: '0px',
                '&::placeholder': {
                  color: placeholdercolor,
                  opacity: 1,
                },
              },
            },
            '& .MuiInputLabel-root': {
              color: unshrunkfontcolor,
              overflow: 'visible',
              zIndex: 1,
            },
            // Hide any built-in clear indicator (just in case)
            '& .MuiAutocomplete-clearIndicator': {
              display: 'none',
            },
          }}
        />
      )}
      sx={{
        '& .MuiAutocomplete-option': {
          color: black.main,
        },
        '& .MuiAutocomplete-option[aria-selected="true"]': {
          backgroundColor: `${black.main}08`,
        },
      }}
    />
  )
}

export default SearchableDropdown
