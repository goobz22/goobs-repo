'use client'

import React, { FC } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import Left from './left'
import LeftCenter from './leftCenter'
import Right from './right'
import RightCenter, { RightCenterProps } from './rightCenter'
import { CustomButtonProps } from '../Button'
import { DropdownProps } from '../Dropdown'
import { SearchbarProps } from '../Searchbar'

/**
 * Props for CustomToolbar:
 *  - `buttons` (optional) -> <Left />
 *  - `searchbarProps` (optional) -> <LeftCenter />
 *  - `rightCenterProps` (optional) -> <RightCenter />
 *  - `dropdown` (optional) -> <Right />
 */
export interface CustomToolbarProps {
  buttons?: CustomButtonProps[]
  searchbarProps?: SearchbarProps
  rightCenterProps?: RightCenterProps
  dropdown?: DropdownProps
}

const CustomToolbar: FC<CustomToolbarProps> = ({
  buttons,
  searchbarProps,
  rightCenterProps,
  dropdown,
}) => {
  // Three breakpoints:
  // 1) Desktop: width > 1024px
  // 2) Tablet:  600px < width <= 1024px
  // 3) Mobile:  width <= 600px
  const isTabletOrBelow = useMediaQuery('(max-width:1024px)')
  const isMobile = useMediaQuery('(max-width:600px)')

  // =============== DESKTOP (width > 1024px) ===============
  // Use a "wrap" layout so items never overlap;
  // if the searchbar is too big, it automatically wraps to a new line.
  if (!isTabletOrBelow) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap', // <-- Important to prevent overlap
          alignItems: 'center',
          gap: 2, // Some spacing between items
          width: '100%',
        }}
      >
        {/* Buttons on the left */}
        <Left buttons={buttons} />

        {/* Searchbar in the same row; will wrap if there's no room */}
        {searchbarProps && <LeftCenter {...searchbarProps} />}

        {/* RightCenter (e.g., ReusableSelector for selected rows) */}
        {rightCenterProps && <RightCenter {...rightCenterProps} />}

        {/* Dropdown on the far right (also wraps if needed) */}
        {dropdown && <Right dropdown={dropdown} />}
      </Box>
    )
  }

  // =============== MOBILE (width <= 600px) ===============
  // Hide the searchbar entirely; stack everything in separate rows if needed
  if (isMobile) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {/* Row 1: Buttons (Left) */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Left buttons={buttons} />
        </Box>

        {/* Row 2: RightCenter (if any) */}
        {rightCenterProps && (
          <Box sx={{ mt: 2 }}>
            <RightCenter {...rightCenterProps} />
          </Box>
        )}

        {/* Row 3: Dropdown (if any) */}
        {dropdown && (
          <Box sx={{ mt: 2 }}>
            <Right dropdown={dropdown} />
          </Box>
        )}
      </Box>
    )
  }

  // =============== TABLET (600px < width <= 1024px) ===============
  // Each item on its own row, with the searchbar explicitly centered.
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* Row 1: Buttons (Left) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Left buttons={buttons} />
      </Box>

      {/* Row 2: Centered Searchbar */}
      {searchbarProps && (
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'center', // center horizontally
          }}
        >
          <LeftCenter {...searchbarProps} />
        </Box>
      )}

      {/* Row 3: RightCenter */}
      {rightCenterProps && (
        <Box sx={{ mt: 2 }}>
          <RightCenter {...rightCenterProps} />
        </Box>
      )}

      {/* Row 4: Dropdown */}
      {dropdown && (
        <Box sx={{ mt: 2 }}>
          <Right dropdown={dropdown} />
        </Box>
      )}
    </Box>
  )
}

export default CustomToolbar
