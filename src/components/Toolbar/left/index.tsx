// src/components/Toolbar/Left/index.tsx

'use client'

import React, { FC } from 'react'
import { Box, styled } from '@mui/material'
import CustomButton, { CustomButtonProps } from '../../Button'
import { white, grey, black } from '../../../styles/palette'

/** A simple vertical divider */
const VerticalDivider = styled(Box)({
  borderLeft: '2px solid black',
  height: '20px',
})

export interface LeftProps {
  /** Array of button configs to render on the left side */
  buttons?: CustomButtonProps[]
}

const Left: FC<LeftProps> = ({ buttons }) => {
  const buttonHeight = '45px'

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* Vertical Divider */}
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '0 15px' }}>
        <VerticalDivider />
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '0 15px',
        }}
      >
        {buttons?.map((btn, i) => {
          const isDisabled = !!btn.disabled
          return (
            <CustomButton
              key={i}
              text={btn.text}
              onClick={btn.onClick}
              disabled={isDisabled}
              disableButton={isDisabled ? 'true' : 'false'}
              fontcolor={white.main}
              backgroundcolor={isDisabled ? grey.main : black.main}
              fontvariant="merriparagraph"
              variant="contained"
              height={buttonHeight}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default Left
