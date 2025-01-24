// src/components/ProjectBoard/Column/index.tsx

'use client'

import React, { useState, useCallback } from 'react'
import { Box, Stack, useTheme, useMediaQuery, Checkbox } from '@mui/material'
import { useAtom } from 'jotai'
import { columnsAtom } from '../jotai/atom'

import Typography from '../../../components/Typography'
import Card from '../../Card'
import Dropdown from '../../Dropdown'
import { black, white } from '../../../styles/palette'

import type { ColumnData, Task } from '../types'
import { useTaskDragAndDrop } from '../utils/useDragandDrop/tasks'

type DragItem = {
  type: 'column' | 'task'
  columnIndex: number
  taskIndex?: number
} | null

function getTaskId(task: Task): string {
  return task._id
}

export interface ColumnProps {
  /** Usually a single column in desktop, or multiple in mobile. */
  columns: ColumnData[]

  /** If "overflow" columns exist, pass them here for the dropdown approach. */
  overflowColumns?: ColumnData[]
  selectedOverflowColumnId?: string
  onChangeSelectedOverflowColumn?: (colId: string) => void

  /** Which task is currently selected in the entire board, if any. */
  selectedTask: { colIndex: number; taskIndex: number } | null
  onSelectTask: (colIndex: number, taskIndex: number) => void

  // Column-level DnD from ProjectBoard
  onColumnDragStart: (e: React.DragEvent, columnIndex: number) => void
  onColumnDragOver: (e: React.DragEvent, columnIndex: number) => void
  onColumnDrop: (e: React.DragEvent, columnIndex: number) => void
}

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
}: ColumnProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  // We read/write the entire array of columns from the global store for tasks
  const [allColumns, setAllColumns] = useAtom(columnsAtom)

  const [selectedColumnIndex, setSelectedColumnIndex] = useState<number | null>(
    null
  )
  const [mobileColumnIndex, setMobileColumnIndex] = useState<number>(0)

  const [dragItem, setDragItem] = useState<DragItem>(null)

  // TASK-LEVEL DnD
  const {
    handleTaskDragStart: globalTaskDragStart,
    handleTaskDragOver: globalTaskDragOver,
    handleTaskDrop: globalTaskDrop,
  } = useTaskDragAndDrop()

  /** Wrap for local usage: pass allColumns to update cross-column moves. */
  function handleLocalTaskDragStart(
    e: React.DragEvent,
    columnIndex: number,
    taskIndex: number
  ) {
    if (isTaskDraggable(columnIndex, taskIndex)) {
      globalTaskDragStart(e, { columnIndex, taskIndex })
    } else {
      e.preventDefault()
    }
  }
  function handleLocalTaskDragOver(e: React.DragEvent) {
    globalTaskDragOver(e)
  }
  function handleLocalTaskDrop(
    e: React.DragEvent,
    dropColumnIndex: number,
    dropTaskIndex: number
  ) {
    e.preventDefault()
    globalTaskDrop(e, {
      dropColumnIndex,
      dropTaskIndex,
      allColumns,
      setAllColumns,
    })
    setDragItem(null)
  }

  // COLUMN CHECKBOX
  function handleColumnCheck(colIndex: number) {
    if (selectedColumnIndex === colIndex) {
      setSelectedColumnIndex(null)
    } else {
      onSelectTask(-1, -1)
      setSelectedColumnIndex(colIndex)
    }
  }
  function isColumnDraggable(colIndex: number): boolean {
    return selectedColumnIndex === colIndex
  }

  function handleLocalColumnDragStart(e: React.DragEvent, colIndex: number) {
    // Only drag if the checkbox is selected
    if (isColumnDraggable(colIndex)) {
      setDragItem({ type: 'column', columnIndex: colIndex })
      onColumnDragStart(e, colIndex)
    }
  }
  function handleLocalColumnDrop(e: React.DragEvent, dropColIndex: number) {
    e.preventDefault()
    if (!dragItem) return

    if (dragItem.type === 'column') {
      onColumnDrop(e, dropColIndex)
      setDragItem(null)
    } else if (dragItem.type === 'task') {
      // If user drops a task onto the column background => move it to the end
      handleLocalTaskDrop(e, dropColIndex, columns[dropColIndex].tasks.length)
    }
  }

  // TASK CHECKBOX
  function isTaskCheckboxDisabled() {
    return selectedColumnIndex !== null
  }
  function isColumnCheckboxDisabled() {
    return selectedTask !== null
  }
  function isTaskDraggable(colIndex: number, taskIndex: number) {
    if (selectedColumnIndex !== null) return false
    return (
      selectedTask?.colIndex === colIndex &&
      selectedTask?.taskIndex === taskIndex
    )
  }

  // OVERFLOW DROPDOWN
  const handleOverflowDropdownChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!overflowColumns || !onChangeSelectedOverflowColumn) return
      const colTitle = e.target.value
      const found = overflowColumns.find(c => c.title === colTitle)
      if (found) {
        onChangeSelectedOverflowColumn(found._id)
      }
    },
    [overflowColumns, onChangeSelectedOverflowColumn]
  )

  // MOBILE COLUMN DROPDOWN
  const handleColumnDropdownChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const title = e.target.value
      const foundIndex = columns.findIndex(c => c.title === title)
      if (foundIndex >= 0) {
        setSelectedColumnIndex(null)
        onSelectTask(-1, -1)
        setMobileColumnIndex(foundIndex)
      }
    },
    [columns, onSelectTask]
  )

  // MOBILE
  if (isMobile && columns.length > 0) {
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
          onDragOver={e => e.preventDefault()}
          onDrop={e => handleLocalColumnDrop(e, mobileColumnIndex)}
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

          {/* Column Body (tasks) */}
          <Box sx={{ p: 2, flex: 1 }}>
            {!currentColumn.tasks?.length ? (
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
                      sx={{ mx: '5px', width: { xs: '250px', sm: '250px' } }}
                      taskProps={{
                        title: task.title,
                        description: task.description,
                        checked: isSelected,
                        disabled: false,
                        onCheck: () => {
                          onSelectTask(mobileColumnIndex, taskIndex)
                        },
                        draggable: isTaskDraggable(
                          mobileColumnIndex,
                          taskIndex
                        ),
                        onDragStart: e =>
                          handleLocalTaskDragStart(
                            e,
                            mobileColumnIndex,
                            taskIndex
                          ),
                        onDragOver: handleLocalTaskDragOver,
                        onDrop: e => {
                          handleLocalTaskDrop(e, mobileColumnIndex, taskIndex)
                        },
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

  // OVERFLOW COLUMN (desktop)
  const hasOverflow = Boolean(overflowColumns?.length)
  let activeOverflowColumn: ColumnData | undefined
  if (!isMobile && hasOverflow && selectedOverflowColumnId && overflowColumns) {
    activeOverflowColumn =
      overflowColumns.find(c => c._id === selectedOverflowColumnId) ||
      overflowColumns[0]
  }

  if (!isMobile && hasOverflow && activeOverflowColumn) {
    return (
      <Box
        key="overflow-desktop-column"
        draggable={false}
        onDragOver={e => e.preventDefault()}
        onDrop={e => handleLocalColumnDrop(e, 0)}
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
        <Box
          sx={{
            borderBottom: `1px solid ${white.main}`,
            p: 2,
            position: 'relative',
          }}
        >
          <Dropdown
            label="More Columns"
            options={overflowColumns?.map(col => ({ value: col.title })) ?? []}
            value={activeOverflowColumn?.title}
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

        <Box sx={{ p: 2, flex: 1 }}>
          {!activeOverflowColumn.tasks?.length ? (
            <Typography fontcolor={white.main}>No tasks yet</Typography>
          ) : (
            <Stack spacing={1}>
              {activeOverflowColumn.tasks.map((task, taskIndex) => {
                const isSelected =
                  selectedTask?.colIndex === 0 &&
                  selectedTask?.taskIndex === taskIndex

                return (
                  <Card
                    key={getTaskId(task)}
                    variant="task"
                    sx={{ mx: '5px', width: { xs: '250px', sm: '250px' } }}
                    taskProps={{
                      title: task.title,
                      description: task.description,
                      checked: isSelected,
                      disabled: false,
                      onCheck: () => {
                        onSelectTask(0, taskIndex)
                      },
                      draggable: isTaskDraggable(0, taskIndex),
                      onDragStart: e =>
                        handleLocalTaskDragStart(e, 0, taskIndex),
                      onDragOver: handleLocalTaskDragOver,
                      onDrop: e => handleLocalTaskDrop(e, 0, taskIndex),
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

  // NORMAL DESKTOP COLUMNS
  return (
    <Stack direction="row" spacing={3}>
      {columns.map((col, colIndex) => {
        const colChecked = selectedColumnIndex === colIndex

        return (
          <Box
            key={col._id}
            draggable={isColumnDraggable(colIndex)}
            onDragStart={e => handleLocalColumnDragStart(e, colIndex)}
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
            {/* Column Header */}
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
                            if (selectedColumnIndex !== null) return
                            onSelectTask(colIndex, taskIndex)
                          },

                          draggable: isTaskDraggable(colIndex, taskIndex),
                          onDragStart: e =>
                            handleLocalTaskDragStart(e, colIndex, taskIndex),
                          onDragOver: handleLocalTaskDragOver,
                          onDrop: e =>
                            handleLocalTaskDrop(e, colIndex, taskIndex),
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
