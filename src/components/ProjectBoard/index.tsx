'use client'

import React, { useMemo, useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { useAtom } from 'jotai'
import { columnsAtom } from './jotai/atom'

import Toolbar from '../Toolbar'
import AddTask from './forms/AddTask/client'
import ManageTask from './forms/ManageTask/client'
import ShowTask from './forms/ShowTask/client'
import { ProjectBoardProps, ColumnData, Task, BoardType } from './types'

import { useColumnDragAndDrop } from './utils/useDragandDrop/columns'
import { useComputeBoardResize } from './utils/useComputeBoard'
import Board from './board' // <-- Our new Board component (desktop/tablet/mobile)

// 1) IMPORT the palette here
import * as palette from '../../styles/palette'

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
  companyAccounts,
  administrators,
  showTaskOpen: showTaskProp,
  manageTaskOpen: manageTaskProp,
  onUpdateTask,
  onEdit,
  onDelete,
  onDuplicate,
  onCloseTask,
  onComment,
}: ProjectBoardProps) {
  // -----------------------------------------------------------------
  // 1) Use a Jotai atom for columns + tasks
  // -----------------------------------------------------------------
  const [columnState, setColumnState] = useAtom(columnsAtom)

  // Merge incoming data => single array
  const mergedColumns = useMemo(() => {
    return mergeColumnsAndTasks(columns, tasks, boardType)
  }, [columns, tasks, boardType])

  // Initialize the atom whenever columns/tasks change
  useEffect(() => {
    setColumnState(mergedColumns)
  }, [mergedColumns, setColumnState])

  // -----------------------------------------------------------------
  // 2) Single-task selection state
  // -----------------------------------------------------------------
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

  // Flatten tasks for modals
  const allTasks: Task[] = useMemo(() => {
    return columnState.flatMap(col => col.tasks)
  }, [columnState])

  // -----------------------------------------------------------------
  // 3) COLUMN-LEVEL DRAG & DROP
  // -----------------------------------------------------------------
  const { handleColumnDragStart, handleColumnDragOver, handleColumnDrop } =
    useColumnDragAndDrop(columnState, setColumnState)

  // -----------------------------------------------------------------
  // 4) Local state for modals
  // -----------------------------------------------------------------
  const [addTaskOpen, setAddTaskOpen] = useState(false)
  const [localManageTaskOpen, setLocalManageTaskOpen] = useState('-1')
  const [localShowTaskOpen, setLocalShowTaskOpen] = useState('-1')

  const manageTaskOpen = manageTaskProp ?? localManageTaskOpen
  const showTaskOpen = showTaskProp ?? localShowTaskOpen

  // -----------------------------------------------------------------
  // 5) AddTask handler
  // -----------------------------------------------------------------
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

  // -----------------------------------------------------------------
  // 6) ManageTask handler
  // -----------------------------------------------------------------
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

    // Optionally call external update
    onUpdateTask?.({
      companyId: company?._id || 'missing-company-id',
      _id: selectedTaskId,
      input: {
        title: data.taskTitle,
        description: data.taskDescription,
      },
    })

    if (!manageTaskProp) {
      setLocalManageTaskOpen('-1')
    }
  }

  // -----------------------------------------------------------------
  // 7) ShowTask handler
  // -----------------------------------------------------------------
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

  // -----------------------------------------------------------------
  // 8) SEARCH + FILTER
  // -----------------------------------------------------------------
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value)
  }

  const filteredColumnState = useMemo(() => {
    return columnState.map(col => {
      const lowerTerm = searchTerm.toLowerCase()
      const filteredTasks = col.tasks.filter(
        task =>
          task.title.toLowerCase().includes(lowerTerm) ||
          task.description.toLowerCase().includes(lowerTerm)
      )
      return { ...col, tasks: filteredTasks }
    })
  }, [columnState, searchTerm])

  // -----------------------------------------------------------------
  // 9) "Fit / Overflow" columns for Desktop
  // -----------------------------------------------------------------
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

  // -----------------------------------------------------------------
  // 10) Render
  // -----------------------------------------------------------------
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

  // Toolbar buttons
  const buttons = [
    {
      text: 'Create Task',
      onClick: () => setAddTaskOpen(true),
    },
    {
      text: 'Manage Task',
      onClick: () => {
        if (exactlyOneSelected && selectedTaskId) {
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
          if (!showTaskProp) {
            setLocalShowTaskOpen(selectedTaskId)
          }
        }
      },
      disabled: !exactlyOneSelected || !selectedTaskId,
    },
  ]

  return (
    <Box
      ref={containerRef}
      sx={{ boxSizing: 'border-box', width: '100%', height: '100%' }}
    >
      <Toolbar
        buttons={buttons}
        searchbarProps={{
          label: 'Search...',
          value: searchTerm,
          onChange: handleSearchChange,

          // 2) USE semiTransparentWhite.main FOR THE SEARCHBAR BG
          backgroundcolor: palette.semiTransparentWhite.main,
          shrunkfontcolor: palette.white.main,
          unshrunkfontcolor: palette.white.main,
          shrunklabelposition: 'onNotch',
        }}
      />

      {/* Our new Board component handles desktop/tablet/mobile layouts */}
      <Stack direction="row" spacing={3} mt={1} pl={4}>
        <Board
          columns={fittedColumns}
          overflowColumns={overflowColumns}
          selectedOverflowColumnId={selectedOverflowColumnId}
          onChangeSelectedOverflowColumn={setSelectedOverflowColumnId}
          selectedTask={selectedTask}
          onSelectTask={handleSelectTask}
          onColumnDragStart={handleColumnDragStart}
          onColumnDragOver={handleColumnDragOver}
          onColumnDrop={handleColumnDrop}
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
