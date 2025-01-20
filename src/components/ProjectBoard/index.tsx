'use client'

import React, { useState } from 'react'
import { Box, Stack } from '@mui/material'
import Toolbar from '../Toolbar'
import AddTask from './AddTask/client'
import ManageTask from './ManageTask/client'
import ShowTask from './ShowTask/client'

// -------------------------------------------------
// Import the types from our new types/index.tsx
// -------------------------------------------------
import { ProjectBoardProps, ColumnData, Task, BoardType } from './types'

// 1) Import BOTH hooks: column-level & task-level
import { useColumnDragAndDrop } from './utils/useDragandDrop/columns'
import { useTaskDragAndDrop } from './utils/useDragandDrop/tasks'

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
  onUpdateTask,
}: ProjectBoardProps) {
  // 1) Merge columns + tasks
  const mergedColumns = mergeColumnsAndTasks(columns, tasks, boardType)

  // 2) Local column state (includes tasks)
  const [columnState, setColumnState] = useState<ColumnData[]>(mergedColumns)

  // 3) Single-task selection state
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
  const allTasks: Task[] = columnState.flatMap(col => col.tasks)

  // ---------------------------------------------------------------------------
  // 4) HOOKS FOR DRAG-AND-DROP
  // ---------------------------------------------------------------------------
  // a) Column-level
  const {
    dragItem,
    setDragItem,
    handleColumnDragStart,
    handleColumnDragOver,
    handleColumnDrop,
  } = useColumnDragAndDrop(columnState, setColumnState)

  // b) Task-level
  //    (IMPORTANT: we pass setColumnState so tasks can move across columns)
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
  // 5) AddTask, ManageTask, ShowTask modals
  // ---------------------------------------------------------------------------
  const [addTaskOpen, setAddTaskOpen] = useState(false)
  const [manageTaskOpen, setManageTaskOpen] = useState('-1')
  const [showTaskOpen, setShowTaskOpen] = useState('-1')

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

  function handleManageTaskSubmit(data: {
    taskTitle: string
    taskDescription: string
    nextActionDate: Date | null
    transferListData?: unknown
  }) {
    if (!selectedTask) {
      setManageTaskOpen('-1')
      return
    }
    const { colIndex, taskIndex } = selectedTask
    if (
      colIndex < 0 ||
      colIndex >= columnState.length ||
      taskIndex < 0 ||
      taskIndex >= columnState[colIndex].tasks.length
    ) {
      setManageTaskOpen('-1')
      return
    }

    const selectedTaskId = columnState[colIndex].tasks[taskIndex]._id
    const { taskTitle, taskDescription } = data

    // Update in state
    const newCols = columnState.map(col => {
      const updatedTasks = col.tasks.map(t =>
        t._id === selectedTaskId
          ? { ...t, title: taskTitle, description: taskDescription }
          : t
      )
      return { ...col, tasks: updatedTasks }
    })
    setColumnState(newCols)

    // Optionally call onUpdateTask
    onUpdateTask?.({
      companyId: company?._id || 'missing-company-id',
      _id: selectedTaskId,
      input: {
        title: taskTitle,
        description: taskDescription,
      },
    })

    setManageTaskOpen('-1')
  }

  // Determine if exactly one task is selected & get that ID
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
    } else {
      // Indices out of range => reset selection
      setSelectedTask(null)
    }
  }

  // ---------------------------------------------------------------------------
  // 6) Toolbar
  // ---------------------------------------------------------------------------
  const buttons = [
    {
      text: 'Create Task',
      onClick: () => setAddTaskOpen(true),
    },
    {
      text: 'Manage Task',
      onClick: () => {
        if (exactlyOneSelected && selectedTaskId) {
          setManageTaskOpen(selectedTaskId)
        }
      },
      disabled: !exactlyOneSelected || !selectedTaskId,
    },
    {
      text: 'Show Task',
      onClick: () => {
        if (exactlyOneSelected && selectedTaskId) {
          setShowTaskOpen(selectedTaskId)
        }
      },
      disabled: !exactlyOneSelected || !selectedTaskId,
    },
  ]

  // Example “administrators” list (for ManageTask)
  const administrators = rawEmployees.map(emp => ({
    _id: emp._id,
    fullName: `${emp.firstName ?? ''} ${emp.lastName ?? ''}`.trim(),
  }))

  // For the “company” variant, build an array of accounts (for ManageTask)
  const companyAccounts = company
    ? [{ _id: company._id, companyName: company.companyName }]
    : []

  // ---------------------------------------------------------------------------
  // 7) Render the Board
  // ---------------------------------------------------------------------------
  return (
    <Box sx={{ boxSizing: 'border-box', width: '100%', height: '100%' }}>
      <Toolbar buttons={buttons} />

      <Stack direction="row" spacing={3} mt={1} pl={4}>
        <Column
          columns={columnState}
          selectedTask={selectedTask}
          onSelectTask={handleSelectTask}
          // Column-level drag
          onColumnDragStart={handleColumnDragStart}
          onColumnDragOver={handleColumnDragOver}
          onColumnDrop={handleColumnDrop}
          // TASK-LEVEL drag (we pass from the parent’s real hook)
          handleTaskDragStart={(e, colI, taskI) =>
            handleTaskDragStart(e, colI, taskI, selectedTask)
          }
          handleTaskDragOver={handleTaskDragOver}
          handleTaskDrop={handleTaskDrop}
        />
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
        onClose={() => setManageTaskOpen('-1')}
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
        onClose={() => setShowTaskOpen('-1')}
        topics={rawTopics.map(t => t.topic)}
        knowledgebaseArticles={rawArticles.map(a => a.articleTitle)}
        schedulingQueues={rawQueues}
        customers={rawCustomers}
        employees={rawEmployees}
        statuses={rawStatuses}
        subStatuses={rawSubStatuses}
        severityLevels={rawSeverityLevels}
      />
    </Box>
  )
}

export default ProjectBoard
