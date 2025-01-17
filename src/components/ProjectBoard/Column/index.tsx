// src\components\ProjectBoard\Column\index.tsx
'use client'

import React, { useState, useCallback } from 'react'
import { Box, Stack, useTheme, useMediaQuery } from '@mui/material'
import Typography from '../../../components/Typography'
import { black, white } from '../../../styles/palette'

// Import the Card component
import Card from '../../Card'

// Types
import type { Task, ColumnData } from '../../ProjectBoard'
import Dropdown from '../../Dropdown'

/** Helper to get a unique string ID from a task. */
function getTaskId(task: Task): string {
  return task._id || 'unknown-task-id'
}

export type ColumnProps = {
  /** An array of columns to show (on desktop, we show all; on mobile, we pick one). */
  columns: ColumnData[]

  /**
   * Single-selected task (by colIndex & taskIndex).
   * If the user has chosen to "Manage" or "Show" a single task, we highlight it.
   */
  selectedTask: { colIndex: number; taskIndex: number } | null

  /** Called when the user toggles a task’s selection. */
  onSelectTask: (colIndex: number, taskIndex: number) => void

  // ----- Column-level drag-and-drop handlers -----
  onColumnDragStart: (e: React.DragEvent, columnIndex: number) => void
  onColumnDragOver: (e: React.DragEvent, columnIndex: number) => void
  onColumnDrop: (e: React.DragEvent, columnIndex: number) => void

  // ----- Task-level drag-and-drop handlers -----
  onTaskDragStart: (
    e: React.DragEvent,
    columnIndex: number,
    taskIndex: number
  ) => void
  onTaskDragOver: (
    e: React.DragEvent,
    columnIndex: number,
    taskIndex: number
  ) => void
  onTaskDragDrop: (
    e: React.DragEvent,
    columnIndex: number,
    taskIndex: number
  ) => void
}

function Column({
  columns,
  selectedTask,
  onSelectTask,
  onColumnDragStart,
  onColumnDragOver,
  onColumnDrop,
  onTaskDragStart,
  onTaskDragOver,
  onTaskDragDrop,
}: ColumnProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  // Tracks which column is currently selected on mobile
  const [mobileColumnIndex, setMobileColumnIndex] = useState(0)

  // Build dropdown options from columns (only the column title)
  const columnDropdownOptions = columns.map(col => ({
    value: col.title,
  }))

  // Handler for when the user selects a new column in the dropdown
  const handleColumnDropdownChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedTitle = e.target.value
      const foundIndex = columns.findIndex(c => c.title === selectedTitle)
      if (foundIndex >= 0) {
        setMobileColumnIndex(foundIndex)
      }
    },
    [columns]
  )

  // ----- DESKTOP LAYOUT: show all columns side-by-side -----
  if (!isMobile) {
    return (
      <Stack direction="row" spacing={3}>
        {columns.map((col, colIndex) => (
          <Box
            key={col._id}
            /* The entire column is draggable for reorder */
            draggable
            onDragStart={e => onColumnDragStart(e, colIndex)}
            onDragOver={e => onColumnDragOver(e, colIndex)}
            onDrop={e => onColumnDrop(e, colIndex)}
            sx={{
              boxSizing: 'border-box',
              // The column is 275px on xs, 300px on sm+, etc.
              width: {
                xs: '275px',
                sm: '300px',
              },
              height: '70vh',
              backgroundColor: black.main,
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'column',
              // Hide horizontal scroll, allow vertical scroll
              overflowX: 'hidden',
              overflowY: 'auto',
            }}
          >
            {/* Column Head */}
            <Box
              sx={{
                borderBottom: `1px solid ${white.main}`,
                p: 2,
              }}
            >
              <Stack direction="column" spacing={0.5}>
                <Typography fontvariant="merrih4" fontcolor={white.main}>
                  {col.title}
                </Typography>
                <Typography fontvariant="merrih6" fontcolor={white.main}>
                  {col.description}
                </Typography>
              </Stack>
            </Box>

            {/* Column Body: list of tasks */}
            <Box sx={{ p: 2, flex: 1 }}>
              {!col.tasks || col.tasks.length === 0 ? (
                <Typography fontcolor={white.main}>No tasks yet</Typography>
              ) : (
                <Stack spacing={1}>
                  {col.tasks.map((task, taskIndex) => {
                    const isSelected =
                      selectedTask?.colIndex === colIndex &&
                      selectedTask?.taskIndex === taskIndex

                    return (
                      <Card
                        key={getTaskId(task)}
                        variant="task"
                        sx={{
                          mx: '5px',
                          // Card no longer uses `responsiveWidths`,
                          // so we set width via `sx` if desired:
                          width: {
                            xs: '250px',
                            sm: '250px',
                          },
                        }}
                        taskProps={{
                          title: task.title,
                          description: task.description,
                          checked: isSelected,
                          onCheck: () => onSelectTask(colIndex, taskIndex),
                          draggable: isSelected,
                          onDragStart: e =>
                            onTaskDragStart(e, colIndex, taskIndex),
                          onDragOver: e =>
                            onTaskDragOver(e, colIndex, taskIndex),
                          onDrop: e => onTaskDragDrop(e, colIndex, taskIndex),
                        }}
                      />
                    )
                  })}
                </Stack>
              )}
            </Box>
          </Box>
        ))}
      </Stack>
    )
  }

  // ----- MOBILE LAYOUT: show only ONE column + a dropdown to choose -----
  const currentColumn = columns[mobileColumnIndex]

  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Single column container on mobile */}
      <Box
        key={currentColumn._id}
        draggable
        onDragStart={e => onColumnDragStart(e, mobileColumnIndex)}
        onDragOver={e => onColumnDragOver(e, mobileColumnIndex)}
        onDrop={e => onColumnDrop(e, mobileColumnIndex)}
        sx={{
          boxSizing: 'border-box',
          // Same responsive logic for mobile
          width: {
            xs: '300px',
            sm: '300px',
          },
          height: '70vh',
          backgroundColor: black.main,
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
      >
        {/* Column Head with a Dropdown for columns */}
        <Box
          sx={{
            borderBottom: `1px solid ${white.main}`,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Dropdown
            label="Select Column"
            options={columnDropdownOptions}
            value={currentColumn.title}
            onChange={handleColumnDropdownChange}
            name="mobileColumnSelect"
            fontcolor="#000"
            shrunkfontcolor={white.main}
            backgroundcolor={white.main}
            shrunklabelposition="aboveNotch"
          />

          {/* Display the chosen column's description below the dropdown */}
          <Typography fontvariant="merrih6" fontcolor={white.main}>
            {currentColumn.description}
          </Typography>
        </Box>

        {/* Column Body: list of tasks in the chosen column */}
        <Box sx={{ p: 2, flex: 1 }}>
          {!currentColumn.tasks || currentColumn.tasks.length === 0 ? (
            <Typography fontcolor={white.main}>No tasks yet</Typography>
          ) : (
            <Stack spacing={1}>
              {currentColumn.tasks.map((task, taskIndex) => {
                const isSelected =
                  selectedTask?.colIndex === mobileColumnIndex &&
                  selectedTask?.taskIndex === taskIndex

                return (
                  <Card
                    key={getTaskId(task)}
                    variant="task"
                    sx={{
                      mx: '5px',
                      // Card no longer uses `responsiveWidths`,
                      // so we set width via `sx` if desired:
                      width: {
                        xs: '250px',
                        sm: '250px',
                        md: '250px',
                        lg: '250px',
                        xl: '250px',
                      },
                    }}
                    taskProps={{
                      title: task.title,
                      description: task.description,
                      checked: isSelected,
                      onCheck: () => onSelectTask(mobileColumnIndex, taskIndex),
                      draggable: isSelected,
                      onDragStart: e =>
                        onTaskDragStart(e, mobileColumnIndex, taskIndex),
                      onDragOver: e =>
                        onTaskDragOver(e, mobileColumnIndex, taskIndex),
                      onDrop: e =>
                        onTaskDragDrop(e, mobileColumnIndex, taskIndex),
                    }}
                  />
                )
              })}
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Column
