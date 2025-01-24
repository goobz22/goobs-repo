// src/components/ProjectBoard/index.tsx

'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import Toolbar from '../Toolbar'
import AddTask from './AddTask/client'
import ManageTask from './ManageTask/client'
import ShowTask from './ShowTask/client'

// -------------------------------------------------
// Import the types from our new types/index.ts
// -------------------------------------------------
import { ProjectBoardProps, ColumnData, Task, BoardType } from './types'

// 1) Import BOTH hooks: column-level & task-level
import { useColumnDragAndDrop } from './utils/useDragandDrop/columns'
import { useTaskDragAndDrop } from './utils/useDragandDrop/tasks'

// 2) Import our new hook that decides how many columns fit
import { useComputeBoardResize } from './utils/useComputeBoard'

// Import the Column component
import Column from './Column'

/**
 * Safely merges columns + tasks for display, ensuring each column has its `tasks` array.
 */
function mergeColumnsAndTasks(
  columns: Array<{ _id: string; title: string; description: string }>,
  tasks: Task[],
  boardType: BoardType
): ColumnData[] {
  return columns.map(col => {
    const colId = col._id
    const matchingTasks = tasks.filter(task => {
      switch (boardType) {
        case 'severityLevel':
          return task.severityId === colId
        case 'status':
          return task.statusId === colId
        case 'subStatus':
          return task.substatusId === colId
        case 'topic':
          return task.topicIds?.includes(colId)
        default:
          return false
      }
    })

    return {
      _id: col._id,
      title: col.title,
      description: col.description,
      tasks: matchingTasks,
    }
  })
}

function ProjectBoard({
  variant,
  boardType,
  company,
  columns = [],
  tasks = [],
  rawStatuses,
  rawSubStatuses,
  rawTopics,
  rawQueues,
  rawArticles,
  rawCustomers,
  rawEmployees,
  rawSeverityLevels,

  // OPTIONAL: If you want to pass these arrays to ManageTask
  companyAccounts,
  administrators,

  // We can still read these if you want to control modals externally
  // but we'll also track local state for them
  showTaskOpen: showTaskProp,
  manageTaskOpen: manageTaskProp,

  // Optionally handle updates
  onUpdateTask,

  // Callback props for ShowTask actions
  onEdit,
  onDelete,
  onDuplicate,
  onCloseTask,
  onComment,
}: ProjectBoardProps) {
  // ---------------------------------------------------------------------------
  // 1) Merge columns + tasks into our initial state
  // ---------------------------------------------------------------------------
  const mergedColumns = useMemo(() => {
    return mergeColumnsAndTasks(columns, tasks, boardType)
  }, [columns, tasks, boardType])

  const [columnState, setColumnState] = useState<ColumnData[]>(mergedColumns)

  // ---------------------------------------------------------------------------
  // 2) Single-task selection state
  // ---------------------------------------------------------------------------
  const [selectedTask, setSelectedTask] = useState<{
    colIndex: number
    taskIndex: number
  } | null>(null)

  function handleSelectTask(colIndex: number, taskIndex: number) {
    if (
      selectedTask?.colIndex === colIndex &&
      selectedTask?.taskIndex === taskIndex
    ) {
      setSelectedTask(null)
    } else {
      setSelectedTask({ colIndex, taskIndex })
    }
  }

  // Flatten tasks (useful for manage/show modals)
  const allTasks: Task[] = useMemo(() => {
    return columnState.flatMap(col => col.tasks)
  }, [columnState])

  // ---------------------------------------------------------------------------
  // 3) DRAG-AND-DROP: Column-level + Task-level
  // ---------------------------------------------------------------------------
  const {
    dragItem,
    setDragItem,
    handleColumnDragStart,
    handleColumnDragOver,
    handleColumnDrop,
  } = useColumnDragAndDrop(columnState, setColumnState)

  const { handleTaskDragStart, handleTaskDragOver, handleTaskDrop } =
    useTaskDragAndDrop(
      columnState,
      setColumnState,
      dragItem,
      setDragItem,
      company,
      onUpdateTask,
      boardType
    )

  // ---------------------------------------------------------------------------
  // 4) LOCAL STATE FOR MODALS
  // ---------------------------------------------------------------------------
  const [addTaskOpen, setAddTaskOpen] = useState(false)

  const [localManageTaskOpen, setLocalManageTaskOpen] = useState('-1')
  const [localShowTaskOpen, setLocalShowTaskOpen] = useState('-1')

  const manageTaskOpen = manageTaskProp ?? localManageTaskOpen
  const showTaskOpen = showTaskProp ?? localShowTaskOpen

  // ---------------------------------------------------------------------------
  // 5) AddTask Logic
  // ---------------------------------------------------------------------------
  function handleAddTaskSubmit(newTask: Omit<Task, '_id'>) {
    if (columnState.length === 0) return
    const newCols = [...columnState]
    const colId = newCols[0]._id

    const typedTask: Task = {
      ...newTask,
      _id: String(Date.now()),
      title: newTask.title || 'Untitled Task',
      description: newTask.description || '',
    }

    switch (boardType) {
      case 'severityLevel':
        typedTask.severityId = colId
        break
      case 'status':
        typedTask.statusId = colId
        break
      case 'subStatus':
        typedTask.substatusId = colId
        break
      case 'topic':
        typedTask.topicIds = [colId]
        break
    }

    newCols[0].tasks.push(typedTask)
    setColumnState(newCols)
    setAddTaskOpen(false)
  }

  // ---------------------------------------------------------------------------
  // 6) ManageTask Logic
  // ---------------------------------------------------------------------------
  function handleManageTaskSubmit(data: {
    taskTitle: string
    taskDescription: string
  }) {
    if (!selectedTask) return
    const { colIndex, taskIndex } = selectedTask
    if (
      colIndex < 0 ||
      colIndex >= columnState.length ||
      taskIndex < 0 ||
      taskIndex >= columnState[colIndex].tasks.length
    ) {
      return
    }
    const selectedTaskId = columnState[colIndex].tasks[taskIndex]._id

    // Update in state
    const newCols = columnState.map(col => {
      const updatedTasks = col.tasks.map(t =>
        t._id === selectedTaskId
          ? { ...t, title: data.taskTitle, description: data.taskDescription }
          : t
      )
      return { ...col, tasks: updatedTasks }
    })
    setColumnState(newCols)

    // If you do external updates:
    onUpdateTask?.({
      companyId: company?._id || 'missing-company-id',
      _id: selectedTaskId,
      input: {
        title: data.taskTitle,
        description: data.taskDescription,
      },
    })

    // Close the ManageTask if controlling it locally:
    if (!manageTaskProp) {
      setLocalManageTaskOpen('-1')
    }
  }

  // ---------------------------------------------------------------------------
  // 7) ShowTask Logic
  // ---------------------------------------------------------------------------
  const currentShowTask = allTasks.find(t => t._id === showTaskOpen)

  const showTaskTitle = currentShowTask?.title || 'Placeholder Title'
  const showTaskDescription =
    currentShowTask?.description || 'Placeholder description'
  const showTaskCreatedBy = currentShowTask?.createdBy || 'Unknown User'
  const showTaskComments = currentShowTask?.comments || []
  const showTaskCustomerAssigned =
    currentShowTask?.customerAssigned || 'Bobbie Sue'
  const showTaskSeverity = currentShowTask?.severity || 'Critical'
  const showTaskSchedulingQueue =
    currentShowTask?.schedulingQueue || 'Technologies Unlimited'
  const showTaskStatus = currentShowTask?.status || 'Open'
  const showTaskSubStatus = currentShowTask?.subStatus || 'In Progress'
  const showTaskTopics = currentShowTask?.topicLabels || ['Technical Support']
  const showTaskKBArticles = currentShowTask?.kbArticles || [
    'How to Troubleshoot Stuff',
  ]
  const showTaskTeamMemberAssigned =
    currentShowTask?.teamMember || 'Some Team Member'
  const showTaskNextActionDate =
    currentShowTask?.nextActionDate || '09/15/2023 - 8:30AM CST'

  // ---------------------------------------------------------------------------
  // 8) SEARCH STATE + FILTERING
  // ---------------------------------------------------------------------------
  // Store what the user types in the search bar
  const [searchTerm, setSearchTerm] = useState('')

  // When user types in the search bar, update local state
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value)
  }

  // Create a *filtered* version of `columnState` that only keeps tasks
  // whose title or description matches the `searchTerm` (case-insensitive).
  const filteredColumnState = useMemo(() => {
    return columnState.map(col => {
      const filteredTasks = col.tasks.filter(task => {
        const lowerTerm = searchTerm.toLowerCase()
        return (
          task.title.toLowerCase().includes(lowerTerm) ||
          task.description.toLowerCase().includes(lowerTerm)
        )
      })
      return { ...col, tasks: filteredTasks }
    })
  }, [columnState, searchTerm])

  // ---------------------------------------------------------------------------
  // 9) "fit / overflow" logic for columns in desktop mode
  // ---------------------------------------------------------------------------
  // We choose 300px or 275px for the fixed "desktop" column width
  const {
    containerRef,
    fittedColumns,
    overflowColumns,
    selectedOverflowColumnId,
    setSelectedOverflowColumnId,
  } = useComputeBoardResize({
    columns: filteredColumnState,
    columnWidth: 300,
    showOverflowDropdown: true,
  })

  // ---------------------------------------------------------------------------
  // 10) Render
  // ---------------------------------------------------------------------------
  const exactlyOneSelected = selectedTask !== null
  let selectedTaskId = ''
  if (exactlyOneSelected) {
    const { colIndex, taskIndex } = selectedTask
    if (
      colIndex >= 0 &&
      colIndex < columnState.length &&
      taskIndex >= 0 &&
      taskIndex < columnState[colIndex].tasks.length
    ) {
      selectedTaskId = columnState[colIndex].tasks[taskIndex]._id
    }
  }

  // Prepare the buttons for the top toolbar
  const buttons = [
    {
      text: 'Create Task',
      onClick: () => setAddTaskOpen(true),
    },
    {
      text: 'Manage Task',
      onClick: () => {
        if (exactlyOneSelected && selectedTaskId) {
          // If there's no external manageTaskProp, store in local state
          if (!manageTaskProp) {
            setLocalManageTaskOpen(selectedTaskId)
          }
        }
      },
      disabled: !exactlyOneSelected || !selectedTaskId,
    },
    {
      text: 'Show Task',
      onClick: () => {
        if (exactlyOneSelected && selectedTaskId) {
          // If there's no external showTaskProp, store in local state
          if (!showTaskProp) {
            setLocalShowTaskOpen(selectedTaskId)
          }
        }
      },
      disabled: !exactlyOneSelected || !selectedTaskId,
    },
  ]

  // Update useEffect to sync columnState when props change
  useEffect(() => {
    setColumnState(mergedColumns)
  }, [mergedColumns])

  return (
    <Box
      ref={containerRef}
      sx={{ boxSizing: 'border-box', width: '100%', height: '100%' }}
    >
      <Toolbar
        buttons={buttons}
        // integrate the search bar
        searchbarProps={{
          label: 'Search...',
          value: searchTerm,
          onChange: handleSearchChange,
        }}
      />

      {/* 
        In mobile mode, the <Column> component itself will handle the "single dropdown" approach.
        In desktop mode, we manually show `fittedColumns` plus an optional overflow column. 
      */}
      <Stack direction="row" spacing={3} mt={1} pl={4}>
        {/* Render each "fitted" column normally */}
        {fittedColumns.map(col => {
          return (
            <Column
              key={col._id}
              columns={[col]} // pass a single column in the array
              selectedTask={selectedTask}
              onSelectTask={handleSelectTask}
              // Column-level drag
              onColumnDragStart={handleColumnDragStart}
              onColumnDragOver={handleColumnDragOver}
              onColumnDrop={handleColumnDrop}
              // Task-level drag
              handleTaskDragStart={(e, cI, tI) =>
                handleTaskDragStart(e, cI, tI, selectedTask)
              }
              handleTaskDragOver={handleTaskDragOver}
              handleTaskDrop={handleTaskDrop}
            />
          )
        })}

        {/* If there are overflow columns, show them in a special "overflow" column with a dropdown */}
        {overflowColumns.length > 0 && (
          <Column
            key="overflow-column"
            // We'll pass only ONE "selected overflow" column for rendering,
            // plus the full "overflowColumns" array so the <Column> can show a dropdown
            columns={
              [
                /* the single column we want to render */
              ]
            }
            overflowColumns={overflowColumns}
            selectedOverflowColumnId={selectedOverflowColumnId}
            onChangeSelectedOverflowColumn={setSelectedOverflowColumnId}
            selectedTask={selectedTask}
            onSelectTask={handleSelectTask}
            // DnD handlers
            onColumnDragStart={handleColumnDragStart}
            onColumnDragOver={handleColumnDragOver}
            onColumnDrop={handleColumnDrop}
            handleTaskDragStart={(e, cI, tI) =>
              handleTaskDragStart(e, cI, tI, selectedTask)
            }
            handleTaskDragOver={handleTaskDragOver}
            handleTaskDrop={handleTaskDrop}
          />
        )}
      </Stack>

      {/* AddTask Modal */}
      <AddTask
        open={addTaskOpen}
        onClose={() => setAddTaskOpen(false)}
        variant={variant}
        onSubmit={handleAddTaskSubmit}
        statuses={rawStatuses}
        subStatuses={rawSubStatuses}
        topics={rawTopics}
        schedulingQueues={rawQueues}
        knowledgebaseArticles={rawArticles}
        customers={rawCustomers}
        employees={rawEmployees}
        severityLevels={rawSeverityLevels}
      />

      {/* ManageTask Modal */}
      <ManageTask
        open={manageTaskOpen !== '-1'}
        onClose={() => {
          if (!manageTaskProp) {
            setLocalManageTaskOpen('-1')
          }
        }}
        variant={variant}
        companyAccounts={companyAccounts}
        administrators={administrators}
        employees={rawEmployees}
        statuses={rawStatuses}
        subStatuses={rawSubStatuses}
        schedulingQueues={rawQueues}
        severityLevels={rawSeverityLevels}
        topics={rawTopics}
        knowledgebaseArticles={rawArticles}
        defaultTaskTitle={
          exactlyOneSelected
            ? allTasks.find(t => t._id === selectedTaskId)?.title || ''
            : ''
        }
        defaultTaskDescription={
          exactlyOneSelected
            ? allTasks.find(t => t._id === selectedTaskId)?.description || ''
            : ''
        }
        defaultNextActionDate={null}
        onSubmit={handleManageTaskSubmit}
      />

      {/* ShowTask Modal */}
      <ShowTask
        open={showTaskOpen !== '-1'}
        onClose={() => {
          if (!showTaskProp) {
            setLocalShowTaskOpen('-1')
          }
        }}
        taskTitle={showTaskTitle}
        createdBy={showTaskCreatedBy}
        description={showTaskDescription}
        comments={showTaskComments}
        customerAssigned={showTaskCustomerAssigned}
        severity={showTaskSeverity}
        schedulingQueue={showTaskSchedulingQueue}
        status={showTaskStatus}
        subStatus={showTaskSubStatus}
        topics={showTaskTopics}
        knowledgebaseArticles={showTaskKBArticles}
        teamMemberAssigned={showTaskTeamMemberAssigned}
        nextActionDate={showTaskNextActionDate}
        onEdit={() => onEdit?.({ _id: showTaskOpen || '' })}
        onDelete={() => onDelete?.({ _id: showTaskOpen || '' })}
        onDuplicate={() => onDuplicate?.({ _id: showTaskOpen || '' })}
        onCloseTask={() => onCloseTask?.({ _id: showTaskOpen || '' })}
        onComment={text => onComment?.(text, showTaskOpen || '')}
      />
    </Box>
  )
}

export default React.memo(ProjectBoard)
