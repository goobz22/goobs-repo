'use client'
import React from 'react'
import { Button, Box, ButtonProps } from '@mui/material'
import Typography from '../Typography'
import { SvgIconProps } from '@mui/material/SvgIcon'

export interface CustomButtonProps extends ButtonProps {
  text?: string
  /**
   * The background color for the button when not disabled.
   * If `backgroundcolor` is "none", it behaves like a text button.
   */
  backgroundcolor?: string
  /** The text color. Defaults to white unless disabled. */
  fontcolor?: string
  fontvariant?: 'merriparagraph' | 'merrihelperfooter'
  width?: string
  height?: string
  /**
   * If you want to disable the button in a custom way (string),
   * we unify this with MUI's `disabled` boolean.
   */
  disableButton?: 'true' | 'false'

  /** Optional icon to display. */
  icon?: React.ReactElement<SvgIconProps>
  iconcolor?: string
  iconsize?: string
  iconlocation?: 'left' | 'right' | 'above'
  fontlocation?: 'left' | 'center' | 'right'
}

function CustomButton({
  text,
  variant = 'contained',
  fontvariant = 'merriparagraph',
  onClick,
  fontcolor,
  backgroundcolor,
  width,
  height,
  disableButton,
  icon,
  iconcolor,
  iconsize,
  iconlocation = 'left',
  fontlocation = 'center',
  disabled,
  ...restProps
}: CustomButtonProps) {
  // Merge MUI's "disabled" with our "disableButton"
  const isReallyDisabled = disabled || disableButton === 'true'

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onClick?.(event)
  }

  // If user provides an icon, clone it to override color/size if desired
  const IconComponent = icon
    ? React.cloneElement(icon, {
        sx: {
          // MUI icons accept a `sx` prop, but it's optional.
          // If you do NOT want to rely on sx, you could remove this.
          color: iconcolor || 'inherit',
          fontSize: iconsize || '20px',
          minWidth: iconsize || '20px',
          minHeight: iconsize || '20px',
          margin: 0,
        },
      } as Partial<SvgIconProps>)
    : null

  // Base inline styles for the button
  const buttonStyle: React.CSSProperties = {
    minWidth: 'fit-content',
    width: 'auto',
    height: '40px',
    padding: '8px 16px',
    display: 'inline-flex',
    flexShrink: 0,
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    flexDirection: iconlocation === 'above' ? 'column' : 'row',
    alignItems: 'center',
    justifyContent:
      fontlocation === 'left'
        ? 'flex-start'
        : fontlocation === 'right'
          ? 'flex-end'
          : 'center',
    gap: '8px',
    // Default background color (handled below)
  }

  // If disabled, force a grey background
  if (isReallyDisabled) {
    buttonStyle.backgroundColor = '#cccccc'
    buttonStyle.opacity = 1
    buttonStyle.cursor = 'not-allowed'
  } else if (backgroundcolor && backgroundcolor !== 'none') {
    // Normal colored background
    buttonStyle.backgroundColor = backgroundcolor
  } else if (backgroundcolor === 'none') {
    // No background => text button
    buttonStyle.backgroundColor = 'transparent'
  }

  // Inline styles for the top-level container (Box)
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: width || 'auto',
    height: height || '40px',
    minWidth: 'fit-content',
  }

  return (
    <Box style={containerStyle}>
      <Button
        {...restProps}
        variant={variant}
        onClick={handleButtonClick}
        disabled={isReallyDisabled}
        disableElevation
        disableRipple
        style={buttonStyle}
      >
        {/* If iconlocation="above", show the icon first */}
        {iconlocation === 'above' && IconComponent}

        {/* The text+icon container */}
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:
              fontlocation === 'left'
                ? 'flex-start'
                : fontlocation === 'right'
                  ? 'flex-end'
                  : 'center',
            width: '100%',
            height: '100%',
            gap: '8px',
          }}
        >
          {iconlocation === 'left' && IconComponent}

          <Typography
            fontvariant={fontvariant}
            fontcolor={isReallyDisabled ? 'grey' : fontcolor || 'white'}
            text={text || ''}
          />

          {iconlocation === 'right' && IconComponent}
        </Box>
      </Button>
    </Box>
  )
}

export default CustomButton
