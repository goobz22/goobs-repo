// src/components/Toolbar/leftCenter/index.tsx

'use client'

import React, { FC } from 'react'
import { Box } from '@mui/material'
import Searchbar, { SearchbarProps } from '../../Searchbar'

const LeftCenter: FC<Partial<SearchbarProps>> = props => {
  const {
    label,
    backgroundcolor,
    iconcolor,
    outlinecolor,
    fontcolor,
    placeholder,
    // Provide sensible defaults:
    value = '',
    onChange = () => {},
  } = props

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '400px',
        height: '50px',
      }}
    >
      <Box sx={{ marginTop: '-10px' }}>
        <Searchbar
          label={label}
          backgroundcolor={backgroundcolor}
          iconcolor={iconcolor}
          outlinecolor={outlinecolor}
          fontcolor={fontcolor}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Box>
    </Box>
  )
}

export default LeftCenter
