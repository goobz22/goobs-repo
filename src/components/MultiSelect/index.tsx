import * as React from 'react'
import { Theme, useTheme, styled, SxProps, alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl, { FormControlProps } from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'

export interface MultiSelectChipProps
  extends Omit<FormControlProps, 'onChange'> {
  label?: React.ReactNode
  options?: string[]
  defaultSelected?: string[]
  onChange?: (values: string[]) => void

  backgroundcolor?: string
  outlinecolor?: string
  fontcolor?: string
  inputfontcolor?: string
  shrunkfontcolor?: string
  unshrunkfontcolor?: string
  placeholdercolor?: string

  shrunklabelposition?: 'onNotch' | 'aboveNotch'
  sx?: SxProps
}

const ITEM_HEIGHT = 40
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function getStyles(
  name: string,
  selectedArray: readonly string[],
  theme: Theme
) {
  return {
    fontWeight: selectedArray.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  }
}

const StyledFormControl = styled(FormControl, {
  shouldForwardProp: prop =>
    ![
      'backgroundcolor',
      'outlinecolor',
      'fontcolor',
      'inputfontcolor',
      'shrunkfontcolor',
      'unshrunkfontcolor',
      'placeholdercolor',
      'shrunklabelposition',
    ].includes(prop as string),
})<
  Pick<
    MultiSelectChipProps,
    | 'backgroundcolor'
    | 'outlinecolor'
    | 'fontcolor'
    | 'inputfontcolor'
    | 'shrunkfontcolor'
    | 'unshrunkfontcolor'
    | 'placeholdercolor'
    | 'shrunklabelposition'
  > & { hasvalue: string }
>(
  ({
    backgroundcolor,
    outlinecolor,
    fontcolor,
    inputfontcolor,
    shrunkfontcolor,
    unshrunkfontcolor,
    placeholdercolor,
    shrunklabelposition,
    hasvalue,
  }) => ({
    '& .MuiOutlinedInput-root': {
      minHeight: '40px',
      backgroundColor: backgroundcolor || 'inherit',
      color: fontcolor || 'inherit',
      '& fieldset': {
        borderColor:
          outlinecolor || (hasvalue === 'true' ? 'black' : 'rgba(0,0,0,0.23)'),
      },
      '&:hover fieldset': {
        borderColor:
          outlinecolor || (hasvalue === 'true' ? 'black' : 'rgba(0,0,0,0.23)'),
      },
      '&.Mui-focused fieldset': {
        borderColor:
          outlinecolor || (hasvalue === 'true' ? 'black' : 'rgba(0,0,0,0.23)'),
      },
      '& input': {
        color: inputfontcolor || fontcolor || 'inherit',
        '&::placeholder': {
          color: placeholdercolor || alpha('#000', 0.54),
        },
      },
      '& .MuiSelect-icon': {
        color: inputfontcolor || fontcolor || 'inherit',
      },
    },
    '& .MuiInputLabel-root': {
      color: unshrunkfontcolor || fontcolor || 'inherit',
      '&.Mui-focused': {
        color: shrunkfontcolor || fontcolor || 'inherit',
      },
      '&.MuiInputLabel-shrink': {
        color: shrunkfontcolor || fontcolor || 'inherit',
        ...(shrunklabelposition === 'aboveNotch' && {
          transform: 'translate(0px, -17px) scale(0.75)',
        }),
        ...(shrunklabelposition === 'onNotch' && {
          transform: 'translate(13px, -4px) scale(0.75)',
        }),
      },
    },
  })
)

export default function MultipleSelectChip(props: MultiSelectChipProps) {
  const {
    label = 'Chip',
    options = [],
    defaultSelected = [],
    onChange,

    backgroundcolor,
    outlinecolor,
    fontcolor,
    inputfontcolor,
    shrunkfontcolor,
    unshrunkfontcolor,
    placeholdercolor,
    shrunklabelposition,

    sx,
    ...rest
  } = props

  const theme = useTheme()
  const [selectedValues, setSelectedValues] =
    React.useState<string[]>(defaultSelected)

  const hasValue = React.useMemo(
    () => (selectedValues.length > 0).toString(),
    [selectedValues]
  )

  const handleSelectChange = (
    event: SelectChangeEvent<typeof selectedValues>
  ) => {
    const { value } = event.target
    const newValue = typeof value === 'string' ? value.split(',') : value
    setSelectedValues(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <StyledFormControl
        sx={{ width: 300, ...sx }}
        variant="outlined"
        hasvalue={hasValue}
        backgroundcolor={backgroundcolor}
        outlinecolor={outlinecolor}
        fontcolor={fontcolor}
        inputfontcolor={inputfontcolor}
        shrunkfontcolor={shrunkfontcolor}
        unshrunkfontcolor={unshrunkfontcolor}
        placeholdercolor={placeholdercolor}
        shrunklabelposition={shrunklabelposition}
        {...rest}
      >
        <InputLabel id="multi-select-chip-label">{label}</InputLabel>
        <Select
          labelId="multi-select-chip-label"
          id="multi-select-chip"
          multiple
          /**
           * Remove any fixed height. Let the
           * OutlinedInput's styles control minHeight.
           */
          value={selectedValues}
          onChange={handleSelectChange}
          input={
            <OutlinedInput
              label={label}
              /**
               * Give the input an initial minHeight (e.g. 55px),
               * and allow it to wrap chips, thus expanding the height
               */
              sx={{
                minHeight: 55,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 0.5,
                alignItems: 'center',
              }}
              placeholder={placeholdercolor ? (label as string) : undefined}
            />
          }
          renderValue={selected => (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 0.5,
              }}
            >
              {selected.map(val => (
                <Chip key={val} label={val} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map(name => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, selectedValues, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
    </Box>
  )
}
