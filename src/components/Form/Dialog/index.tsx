'use client'

import React, { useMemo } from 'react'
import { Dialog, Box } from '@mui/material'
import ContentSection, { ContentSectionProps } from '../../Content'
import { formContainerStyle } from '../../../styles/Form'
import { ExtendedTypographyProps } from '../../Content/Structure/typography/useGridTypography'

export interface DialogFormProps {
  title?: string
  description?: string
  grids?: ContentSectionProps['grids']
  content?: React.ReactNode
  width?: number
}

function CustomDialog({
  title,
  description,
  grids,
  content,
  width = 450,
}: DialogFormProps) {
  // We render this dialog as always open (embedded in pages).

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

  return (
    <Dialog
      open
      // No close icon, no user-initiated closing from outside or ESC
      onClose={() => {}}
      fullWidth
      maxWidth={false}
      PaperProps={{
        style: {
          width: `${width}px`,
        },
      }}
    >
      {renderContent}
    </Dialog>
  )
}

export default CustomDialog
