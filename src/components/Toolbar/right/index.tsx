// src/components/Toolbar/Right/index.tsx

'use client'

import React from 'react'
import { Box } from '@mui/material'
import Dropdown, { DropdownProps } from '../../Dropdown'
import { black } from '../../../styles/palette'

export interface RightProps {
  /** A single dropdown to render on the right side. */
  dropdown?: DropdownProps
}

function Right({ dropdown }: RightProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        height: '100%',
        padding: '0 15px',
        gap: '10px',
        width: '200px',
      }}
    >
      {dropdown && (
        <Dropdown
          outlinecolor={black.main}
          fontcolor={black.main}
          shrunkfontcolor={black.main}
          onChange={() => console.log('Dropdown changed')}
          {...dropdown}
        />
      )}
    </Box>
  )
}

export default Right
