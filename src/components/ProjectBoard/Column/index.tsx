'use client'

import React, { useState, useCallback } from 'react'
import { Box, Stack, useTheme, useMediaQuery, Checkbox } from '@mui/material'
import Typography from '../../../components/Typography'
import { black, white } from '../../../styles/palette'
import Card from '../../Card'
import Dropdown from '../../Dropdown'

// 1) Import the types from your ProjectBoard
import type { ColumnData, Task } from '../../ProjectBoard/types'

// The same shape you use in your drag hooks
type DragItem = {
  type: 'column' | 'task'
  columnIndex: number
  taskIndex?: number
} | null

/** Helper to get a unique string ID from a task. */
function getTaskId(task: Task): string {
  return task._id
}

/**
 * Moves a single task from one column to another (at the end).
 * @returns A new array of columns with the task moved.
 */
function moveTaskToColumn(
  sourceColIdx: number,
  sourceTaskIdx: number,
  destColIdx: number,
  columnState: ColumnData[]
): ColumnData[] {
  // Make a copy of the columns
  const newCols = [...columnState]

  // Remove from old column
  const sourceCol = newCols[sourceColIdx]
  if (
    !sourceCol ||
    sourceTaskIdx < 0 ||
    sourceTaskIdx >= sourceCol.tasks.length
  ) {
    return newCols // no change
  }

  const [movedTask] = sourceCol.tasks.splice(sourceTaskIdx, 1)

  // Insert into new column (at end)
  const destCol = newCols[destColIdx]
  if (!destCol) {
    return newCols // no change
  }
  destCol.tasks.push(movedTask)

  return newCols
}

export interface ColumnProps {
  columns: ColumnData[]
  selectedTask: { colIndex: number; taskIndex: number } | null
  onSelectTask: (colIndex: number, taskIndex: number) => void

  // ----- COLUMN-LEVEL DRAG
  onColumnDragStart: (e: React.DragEvent, columnIndex: number) => void
  onColumnDragOver: (e: React.DragEvent, columnIndex: number) => void
  onColumnDrop: (e: React.DragEvent, columnIndex: number) => void

  // ----- TASK-LEVEL DRAG from PARENT
  handleTaskDragStart: (
    e: React.DragEvent,
    columnIndex: number,
    taskIndex: number,
    selectedTask: { colIndex: number; taskIndex: number } | null
  ) => void
  handleTaskDragOver: (e: React.DragEvent) => void
  handleTaskDrop: (
    e: React.DragEvent,
    dropColumnIndex: number,
    dropTaskIndex: number
  ) => void
}

/**
 * Renders either (a) ALL columns (desktop) or (b) ONE column (mobile).
 * Desktop includes a column-level checkbox in the header (top-right).
 */
function Column({
  columns,
  selectedTask,
  onSelectTask,
  onColumnDragStart,
  onColumnDragOver,
  onColumnDrop,

  // Task-level handlers from the parent
  handleTaskDragStart,
  handleTaskDragOver,
  handleTaskDrop,
}: ColumnProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  // Tracks which column is currently selected for column-level dragging (desktop only)
  const [selectedColumnIndex, setSelectedColumnIndex] = useState<number | null>(
    null
  )

  // For mobile layout: which column is displayed
  const [mobileColumnIndex, setMobileColumnIndex] = useState<number>(0)

  // We'll store a local "dragItem" so if user drops on the column background,
  // we know if it's a column or a task. If it's a task, we do a local move.
  const [dragItem, setDragItem] = useState<DragItem>(null)

  // Column checkbox logic (desktop only)
  function handleColumnCheck(colIndex: number) {
    if (selectedColumnIndex === colIndex) {
      setSelectedColumnIndex(null)
    } else {
      onSelectTask(-1, -1) // unselect any task
      setSelectedColumnIndex(colIndex)
    }
  }

  // Update dragItem on column drag start
  function handleLocalColumnDragStart(e: React.DragEvent, colIndex: number) {
    setDragItem({ type: 'column', columnIndex: colIndex })
    onColumnDragStart(e, colIndex)
  }

  // Update dragItem on task drag start
  function handleLocalTaskDragStart(
    e: React.DragEvent,
    colIndex: number,
    taskIndex: number
  ) {
    setDragItem({ type: 'task', columnIndex: colIndex, taskIndex })
    handleTaskDragStart(e, colIndex, taskIndex, selectedTask)
  }

  // If user drops on the column background => handle column reorder or cross-column
  function handleLocalColumnDrop(e: React.DragEvent, dropColIndex: number) {
    e.preventDefault()
    if (!dragItem) return

    if (dragItem.type === 'column') {
      // Let the parent's column logic reorder columns
      onColumnDrop(e, dropColIndex)
      setDragItem(null)
    } else if (dragItem.type === 'task') {
      // If user is dropping a task on the column background, move it to the end
      moveTaskToColumn(
        dragItem.columnIndex,
        dragItem.taskIndex ?? -1,
        dropColIndex,
        columns
      )
      // Also call the parent's handleTaskDrop so it can do final updates
      handleTaskDrop(e, dropColIndex, columns[dropColIndex].tasks.length)
      setDragItem(null)
    }
  }

  const handleColumnDropdownChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedTitle = e.target.value
      const foundIndex = columns.findIndex(c => c.title === selectedTitle)
      if (foundIndex >= 0) {
        setSelectedColumnIndex(null)
        onSelectTask(-1, -1)
        setMobileColumnIndex(foundIndex)
      }
    },
    [columns, onSelectTask]
  )

  // Only the checked column is draggable (desktop)
  function isColumnDraggable(colIndex: number): boolean {
    return selectedColumnIndex === colIndex
  }

  // A helper for whether a task is draggable (desktop)
  function isTaskDraggable(colIndex: number, taskIndex: number): boolean {
    if (selectedColumnIndex !== null) return false
    return (
      selectedTask?.colIndex === colIndex &&
      selectedTask?.taskIndex === taskIndex
    )
  }

  // If a column is selected => tasks cannot be checked (desktop)
  function isTaskCheckboxDisabled() {
    return selectedColumnIndex !== null
  }

  // If a task is selected => column cannot be checked (desktop)
  function isColumnCheckboxDisabled() {
    return selectedTask !== null
  }

  // ---------------------------------------------------------------------------
  // DESKTOP
  // ---------------------------------------------------------------------------
  if (!isMobile) {
    return (
      <Stack direction="row" spacing={3}>
        {columns.map((col, colIndex) => {
          const colChecked = selectedColumnIndex === colIndex

          return (
            <Box
              key={col._id}
              draggable={isColumnDraggable(colIndex)}
              onDragStart={e => {
                if (isColumnDraggable(colIndex)) {
                  handleLocalColumnDragStart(e, colIndex)
                }
              }}
              onDragOver={e => {
                e.preventDefault()
                onColumnDragOver(e, colIndex)
              }}
              onDrop={e => handleLocalColumnDrop(e, colIndex)}
              sx={{
                boxSizing: 'border-box',
                width: { xs: '275px', sm: '300px' },
                height: '70vh',
                backgroundColor: black.main,
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                overflowX: 'hidden',
                overflowY: 'auto',
                position: 'relative',
              }}
            >
              {/* Column Head */}
              <Box
                sx={{
                  borderBottom: `1px solid ${white.main}`,
                  p: 2,
                  position: 'relative',
                }}
              >
                {/* Column checkbox in top-right (desktop only) */}
                <Checkbox
                  checked={colChecked}
                  disabled={isColumnCheckboxDisabled()}
                  onChange={() => handleColumnCheck(colIndex)}
                  sx={{
                    position: 'absolute',
                    top: 2,
                    right: 2,
                    color: white.main,
                    '&.Mui-checked': {
                      color: white.main,
                    },
                  }}
                />

                <Stack direction="column" spacing={0.5}>
                  <Typography fontvariant="merrih4" fontcolor={white.main}>
                    {col.title}
                  </Typography>
                  <Typography fontvariant="merrih6" fontcolor={white.main}>
                    {col.description}
                  </Typography>
                </Stack>
              </Box>

              {/* Column Body: tasks */}
              <Box sx={{ p: 2, flex: 1 }}>
                {!col.tasks?.length ? (
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
                            width: { xs: '250px', sm: '250px' },
                          }}
                          taskProps={{
                            title: task.title,
                            description: task.description,
                            checked: isSelected,
                            disabled: isTaskCheckboxDisabled(),
                            onCheck: () => {
                              // If a column is selected, ignore
                              if (selectedColumnIndex !== null) return
                              onSelectTask(colIndex, taskIndex)
                            },

                            draggable: isTaskDraggable(colIndex, taskIndex),
                            onDragStart: e =>
                              isTaskDraggable(colIndex, taskIndex) &&
                              handleLocalTaskDragStart(e, colIndex, taskIndex),
                            onDragOver: e => {
                              e.preventDefault()
                              handleTaskDragOver(e)
                            },
                            onDrop: e => {
                              e.preventDefault()
                              handleTaskDrop(e, colIndex, taskIndex)
                            },
                          }}
                        />
                      )
                    })}
                  </Stack>
                )}
              </Box>
            </Box>
          )
        })}
      </Stack>
    )
  }

  // ---------------------------------------------------------------------------
  // MOBILE
  // ---------------------------------------------------------------------------
  // On mobile:
  //   - No column checkbox.
  //   - Column drag‐and‐drop disabled.
  //   - Task drag‐and‐drop disabled, but the task checkbox *does* work.
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
      <Box
        key={currentColumn._id}
        // Disable column drag events on mobile
        draggable={false}
        onDragStart={() => {}}
        onDragOver={e => e.preventDefault()}
        onDrop={() => {}}
        sx={{
          boxSizing: 'border-box',
          width: { xs: '300px', sm: '300px' },
          height: '70vh',
          backgroundColor: black.main,
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        {/* Column Head + Dropdown */}
        <Box
          sx={{
            borderBottom: `1px solid ${white.main}`,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            position: 'relative',
          }}
        >
          {/* No column checkbox on mobile */}
          <Dropdown
            label="Select Column"
            options={columns.map(col => ({ value: col.title }))}
            value={currentColumn.title}
            onChange={handleColumnDropdownChange}
            name="mobileColumnSelect"
            fontcolor="#000"
            shrunkfontcolor={white.main}
            backgroundcolor={white.main}
            shrunklabelposition="aboveNotch"
          />

          <Typography fontvariant="merrih6" fontcolor={white.main}>
            {currentColumn.description}
          </Typography>
        </Box>

        {/* Column Body: tasks */}
        <Box sx={{ p: 2, flex: 1 }}>
          {!currentColumn.tasks?.length ? (
            <Typography fontcolor={white.main}>No tasks yet</Typography>
          ) : (
            <Stack spacing={1}>
              {currentColumn.tasks.map((task, taskIndex) => {
                // Task checkbox *should* work on mobile
                const isSelected =
                  selectedTask?.colIndex === mobileColumnIndex &&
                  selectedTask?.taskIndex === taskIndex

                return (
                  <Card
                    key={getTaskId(task)}
                    variant="task"
                    sx={{
                      mx: '5px',
                      width: { xs: '250px', sm: '250px' },
                    }}
                    taskProps={{
                      title: task.title,
                      description: task.description,
                      checked: isSelected,
                      disabled: false, // allow checking
                      onCheck: () => {
                        onSelectTask(mobileColumnIndex, taskIndex)
                      },
                      // Disable drag‐and‐drop for mobile tasks
                      draggable: false,
                      onDragStart: () => {},
                      onDragOver: e => e.preventDefault(),
                      onDrop: () => {},
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
