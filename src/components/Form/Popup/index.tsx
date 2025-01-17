'use client'

import React, { useMemo, useState, useEffect } from 'react'
import { Close } from '@mui/icons-material'
import { Dialog, IconButton, Box } from '@mui/material'
import ContentSection, { ContentSectionProps } from '../../Content'
import { formContainerStyle } from '../../../styles/Form'
import { ExtendedTypographyProps } from '../../Content/Structure/typography/useGridTypography'

export interface PopupProps {
  open: boolean
  /**
   * Optional flag indicating the popup should be closed.
   * This is just for observing the internal 'closed' state externally,
   * or forcing the component closed from outside.
   */
  close?: boolean
  title?: string
  description?: string
  grids?: ContentSectionProps['grids']
  content?: React.ReactNode
  width?: number
}

function Popup({
  open,
  close,
  title,
  description,
  grids,
  content,
  width = 450,
}: PopupProps) {
  // Local states that sync with props
  const [isOpen, setIsOpen] = useState(open)
  const [, setIsClosed] = useState(!open)

  // Sync local state with `open` prop whenever it changes
  useEffect(() => {
    setIsOpen(open)
    setIsClosed(!open)
  }, [open])

  // If the parent sets `close` explicitly, update local states accordingly
  useEffect(() => {
    if (typeof close === 'boolean') {
      setIsOpen(!close)
      setIsClosed(close)
    }
  }, [close])

  // Memoized grids for the header
  const headerGrid = useMemo(
    (): ContentSectionProps['grids'][0] => ({
      grid: {
        gridconfig: {
          gridname: 'formHeader',
          marginbottom: 0.5,
          gridwidth: '100%',
        },
      },
      typography: [
        {
          text: title,
          fontvariant: 'merrih5',
          fontcolor: 'black',
          columnconfig: {
            row: 1,
            column: 1,
            gridname: 'formHeader',
            columnwidth: '100%',
            alignment: 'left',
            marginbottom: 1.5,
          },
        },
        {
          text: description,
          fontvariant: 'merriparagraph',
          fontcolor: 'black',
          columnconfig: {
            row: 2,
            column: 1,
            alignment: 'left',
            gridname: 'formHeader',
            columnwidth: '100%',
          },
        },
      ] as ExtendedTypographyProps[],
    }),
    [title, description]
  )

  const renderHeader = useMemo(
    () => <ContentSection grids={[headerGrid]} />,
    [headerGrid]
  )

  const renderContent = useMemo(
    () => (
      <Box sx={formContainerStyle}>
        <Box mb={0}>{renderHeader}</Box>
        {content || (grids && <ContentSection grids={grids} />)}
      </Box>
    ),
    [renderHeader, content, grids]
  )

  // Handle close (icon & outside/backdrop)
  const handleClose = () => {
    setIsOpen(false)
    setIsClosed(true)
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose} // Clicking outside/backdrop or pressing ESC triggers this
      fullWidth
      maxWidth={false}
      PaperProps={{
        style: {
          width: `${width}px`,
          // ensure pointer events are enabled inside the Dialog
          pointerEvents: 'auto',
        },
      }}
    >
      <IconButton
        size="small"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme => theme.palette.grey[500],
          // Ensure it's on top and clickable
          zIndex: theme => theme.zIndex.modal + 1,
          cursor: 'pointer', // Explicitly show pointer
          '&:hover': {
            color: theme => theme.palette.grey[700],
          },
        }}
      >
        <Close />
      </IconButton>
      {renderContent}
    </Dialog>
  )
}

export default Popup
