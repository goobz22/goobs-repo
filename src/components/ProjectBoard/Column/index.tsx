'use client'

import React, { useState, useCallback } from 'react'
import { Box, Stack, useTheme, useMediaQuery, Checkbox } from '@mui/material'
import Typography from '../../../components/Typography'
import { black, white } from '../../../styles/palette'
import Card from '../../Card'
import Dropdown from '../../Dropdown'

// 1) Import the types from your ProjectBoard
import type { ColumnData, Task } from '../types'

/** Drag item shape for our local DnD. */
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
  /**
   * Normally, pass an array with exactly ONE column in it—unless it's mobile.
   * On mobile, you can pass the entire array. Then the component internally
   * chooses a single column via a dropdown.
   */
  columns: ColumnData[]

  /**
   * If we're doing the "overflow" approach, pass all overflow columns here.
   * Then we only render whichever one the user selects in a dropdown.
   */
  overflowColumns?: ColumnData[]

  /** The ID of whichever overflow column is selected. */
  selectedOverflowColumnId?: string

  /** Callback to pick a different overflow column in the dropdown. */
  onChangeSelectedOverflowColumn?: (colId: string) => void

  /** The currently selected task (colIndex, taskIndex) if any. */
  selectedTask: { colIndex: number; taskIndex: number } | null

  /** Callback when the user checks/unchecks a task. */
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
 * Renders either:
 *   (1) Desktop multi‐column or single‐column layout
 *       (but here, we typically get `columns.length === 1` if the parent is controlling).
 *   (2) The "overflow column" scenario, if `overflowColumns` is set:
 *       we show a dropdown to pick which overflow column to display.
 *   (3) Mobile mode: only one column is shown, with a dropdown at the top to select
 *       which column is displayed, ignoring the overflow logic.
 */
function Column({
  columns,
  overflowColumns,
  selectedOverflowColumnId,
  onChangeSelectedOverflowColumn,

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

  // We'll store a local "dragItem"
  const [dragItem, setDragItem] = useState<DragItem>(null)

  // ---------------------------------------------------------------------------
  // 1) If this is an OVERFLOW column scenario, we need to figure out
  //    which single ColumnData to show from the `overflowColumns` array.
  // ---------------------------------------------------------------------------
  const hasOverflow = Boolean(overflowColumns?.length)
  let activeOverflowColumn: ColumnData | undefined
  if (hasOverflow && selectedOverflowColumnId && overflowColumns) {
    activeOverflowColumn =
      overflowColumns.find(c => c._id === selectedOverflowColumnId) ||
      overflowColumns[0]
  }

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
    if (isTaskDraggable(colIndex, taskIndex)) {
      setDragItem({ type: 'task', columnIndex: colIndex, taskIndex })
      handleTaskDragStart(e, colIndex, taskIndex, selectedTask)
    }
  }

  // If user drops on the column background => handle column reorder or cross-column move
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
        columns // passing "columns" here is normally an array with just 1 col, but
        // your parent is actually storing the entire state for re-renders
      )
      // Also call the parent's handleTaskDrop so it can do final updates
      onColumnDrop(e, dropColIndex)
      handleTaskDrop(e, dropColIndex, columns[0].tasks.length)
      setDragItem(null)
    }
  }

  // Called when the user changes the "overflow columns" dropdown (desktop only)
  const handleOverflowDropdownChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const colTitle = e.target.value
      if (overflowColumns && onChangeSelectedOverflowColumn) {
        const found = overflowColumns.find(c => c.title === colTitle)
        if (found) {
          onChangeSelectedOverflowColumn(found._id)
        }
      }
    },
    [overflowColumns, onChangeSelectedOverflowColumn]
  )

  // Column dropdown change (mobile only)
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

  // ===========================================================================
  //  MOBILE VIEW
  // ===========================================================================
  if (isMobile) {
    // Mobile always shows a single column with a dropdown at the top
    // ignoring any "overflow" concept.
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

  // ===========================================================================
  //  DESKTOP VIEW
  // ===========================================================================
  // If this is an "overflow column", we show a dropdown to pick from `overflowColumns`.
  if (hasOverflow && activeOverflowColumn) {
    return (
      <Box
        key="overflow-desktop-column"
        draggable={false}
        onDragStart={() => {}}
        onDragOver={e => e.preventDefault()}
        onDrop={e => handleLocalColumnDrop(e, 0)} // "0" is somewhat arbitrary here
        sx={{
          boxSizing: 'border-box',
          width: '300px',
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
        {/* Overflow Column Head */}
        <Box
          sx={{
            borderBottom: `1px solid ${white.main}`,
            p: 2,
            position: 'relative',
          }}
        >
          {/* No column-level "select" checkbox here, but you could add if needed */}
          {/* Overflow dropdown in top-right */}
          <Dropdown
            label="More Columns"
            options={overflowColumns!.map(col => ({
              value: col.title,
            }))}
            value={activeOverflowColumn.title}
            onChange={handleOverflowDropdownChange}
            name="overflowColumnSelect"
            fontcolor="#000"
            shrunkfontcolor={white.main}
            backgroundcolor={white.main}
            shrunklabelposition="aboveNotch"
          />

          <Stack direction="column" spacing={0.5} mt={1}>
            <Typography fontvariant="merrih4" fontcolor={white.main}>
              {activeOverflowColumn.title}
            </Typography>
            <Typography fontvariant="merrih6" fontcolor={white.main}>
              {activeOverflowColumn.description}
            </Typography>
          </Stack>
        </Box>

        {/* Overflow Column Body: tasks */}
        <Box sx={{ p: 2, flex: 1 }}>
          {!activeOverflowColumn.tasks?.length ? (
            <Typography fontcolor={white.main}>No tasks yet</Typography>
          ) : (
            <Stack spacing={1}>
              {activeOverflowColumn.tasks.map((task, taskIndex) => {
                // Because we only have one "column" here, let's treat colIndex as 0
                // If you want to track real indexes, you'd have to store them externally.
                const isSelected =
                  selectedTask?.colIndex === 0 &&
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
                      disabled: false,
                      onCheck: () => {
                        onSelectTask(0, taskIndex)
                      },
                      draggable: false, // or true if you want to allow DnD
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
    )
  }

  // Normal (non‐overflow) desktop columns scenario:
  // Usually, the parent only passes `[oneColumn]` in `columns`, so we just render that single column box.
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
              width: '300px',
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
                          onDragOver: handleTaskDragOver,
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

export default React.memo(Column)
