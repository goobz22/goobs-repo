// src\components\Card\variants\task\index.tsx
'use client'

import React from 'react'
import { Paper, Box, Checkbox, PaperProps } from '@mui/material'
import Typography from '../../../../components/Typography'

interface TaskCardProps extends PaperProps {
  title?: string
  description?: string
  /** Whether the card is currently checked/selected. */
  checked?: boolean
  /** Disables the checkbox (prevents selection). */
  disabled?: boolean
  /** Called when the user toggles the checkbox. */
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /** Height of the card. */
  height?: string | number
}

const TaskCard: React.FC<TaskCardProps> = ({
  title = 'Task Title',
  description = 'Description',
  checked = false,
  disabled = false, // <--- NEW
  onCheck,
  height = 'auto',
  sx,
  ...rest
}) => {
  return (
    <Paper
      elevation={1}
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        // Default width/height (can be overridden by sx)
        ...(height && { height }),

        p: 2,
        border: '1px solid #e8e8e8',
        ...sx,
      }}
      {...rest}
    >
      {/* A checkbox in the upper-right corner */}
      <Checkbox
        checked={checked}
        disabled={disabled} // <--- NEW
        onChange={onCheck}
        color="primary"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
        }}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 4 }}>
        <Typography
          text={title}
          fontcolor="black"
          fontvariant="merrih5"
          sx={{ marginBottom: '4px' }}
        />
        <Typography
          text={description}
          fontcolor="black"
          fontvariant="merriparagraph"
        />
      </Box>
    </Paper>
  )
}

export default TaskCard
