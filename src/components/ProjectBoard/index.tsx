'use client'

import React, { useMemo, useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { useAtom } from 'jotai'
import { columnsAtom } from './jotai/atom'

import Toolbar from '../Toolbar'
import AddTask from './forms/AddTask/client'
import ShowTask from './forms/ShowTask/client'
import { ProjectBoardProps, ColumnData, Task, BoardType } from './types'

import { useColumnDragAndDrop } from './utils/useDragandDrop/columns'
import { useComputeBoardResize } from './utils/useComputeBoard'
import Board from './board'

import * as palette from '../../styles/palette'

/**
 * Merge the incoming tasks into columns based on the boardType.
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
  showTaskOpen: showTaskProp,
  onEdit,
  onDelete,
  onDuplicate,
  onCloseTask,
  onComment,
  onEditComment,
  currentUserName, // <--- pass currentUserName down to ShowTask
}: ProjectBoardProps) {
  // -----------------------------------------------------------------
  // 1) Atom state for columns + tasks
  // -----------------------------------------------------------------
  const [columnState, setColumnState] = useAtom(columnsAtom)

  const mergedColumns = useMemo(() => {
    return mergeColumnsAndTasks(columns, tasks, boardType)
  }, [columns, tasks, boardType])

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
      setSelectedTask(null) // deselect if clicked again
    } else {
      setSelectedTask({ colIndex, taskIndex })
    }
  }

  // Flatten tasks to find the one to display in ShowTask
  const allTasks: Task[] = useMemo(() => {
    return columnState.flatMap(col => col.tasks)
  }, [columnState])

  // -----------------------------------------------------------------
  // 3) COLUMN DRAG & DROP
  // -----------------------------------------------------------------
  const { handleColumnDragStart, handleColumnDragOver, handleColumnDrop } =
    useColumnDragAndDrop(columnState, setColumnState)

  // -----------------------------------------------------------------
  // 4) Local modals
  // -----------------------------------------------------------------
  const [addTaskOpen, setAddTaskOpen] = useState(false)
  const [localShowTaskOpen, setLocalShowTaskOpen] = useState('-1')

  // If parent controls `showTaskOpen`, use that; else local
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
      title: newTask.title || '',
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
  // 6) ShowTask: gather fields
  // -----------------------------------------------------------------
  const currentShowTask = allTasks.find(t => t._id === showTaskOpen)

  const showTaskTitle = currentShowTask?.title
  const showTaskDescription = currentShowTask?.description
  const showTaskCreatedBy = currentShowTask?.createdBy
  const showTaskComments = currentShowTask?.comments ?? []
  const showTaskCustomerAssigned = currentShowTask?.customerAssigned
  const showTaskSeverity = currentShowTask?.severity
  const showTaskSchedulingQueue = currentShowTask?.schedulingQueue
  const showTaskStatus = currentShowTask?.status
  const showTaskSubStatus = currentShowTask?.subStatus
  const showTaskTopics = currentShowTask?.topicLabels
  const showTaskKBArticles = currentShowTask?.kbArticles
  const showTaskTeamMemberAssigned = currentShowTask?.teamMember
  const showTaskNextActionDate = currentShowTask?.nextActionDate

  // -----------------------------------------------------------------
  // 7) Convert raw data => arrays of strings for ShowTask
  // -----------------------------------------------------------------
  const showTaskCustomerOptions = useMemo(() => {
    return (rawCustomers ?? []).map(c =>
      [c.firstName, c.lastName].filter(Boolean).join(' ')
    )
  }, [rawCustomers])

  const showTaskSeverityOptions = useMemo(() => {
    return (rawSeverityLevels ?? []).map(
      sl => sl.description || `Severity #${sl.severityLevel}`
    )
  }, [rawSeverityLevels])

  const showTaskSchedulingQueueOptions = useMemo(() => {
    return (rawQueues ?? []).map(q => q.queueName)
  }, [rawQueues])

  const showTaskStatusOptions = useMemo(() => {
    return (rawStatuses ?? []).map(s => s.status)
  }, [rawStatuses])

  const showTaskSubStatusOptions = useMemo(() => {
    return (rawSubStatuses ?? []).map(ss => ss.subStatus)
  }, [rawSubStatuses])

  const showTaskTopicOptions = useMemo(() => {
    return (rawTopics ?? []).map(t => t.topic)
  }, [rawTopics])

  const showTaskKBArticleOptions = useMemo(() => {
    return (rawArticles ?? []).map(a => a.articleTitle)
  }, [rawArticles])

  const showTaskTeamMemberOptions = useMemo(() => {
    return (rawEmployees ?? []).map(e =>
      [e.firstName, e.lastName].filter(Boolean).join(' ')
    )
  }, [rawEmployees])

  // -----------------------------------------------------------------
  // 8) SEARCH + FILTER
  // -----------------------------------------------------------------
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value)
  }

  const filteredColumnState = useMemo(() => {
    const lowerTerm = searchTerm.toLowerCase()
    return columnState.map(col => {
      const filteredTasks = col.tasks.filter(
        t =>
          t.title.toLowerCase().includes(lowerTerm) ||
          t.description.toLowerCase().includes(lowerTerm)
      )
      return { ...col, tasks: filteredTasks }
    })
  }, [columnState, searchTerm])

  // -----------------------------------------------------------------
  // 9) "Fit / Overflow" columns
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
  // 10) Handling comment edits => (commentId, newText, taskId)
  // -----------------------------------------------------------------
  function handleEditComment(
    commentId: string,
    newText: string,
    taskId: string
  ) {
    // Immediate local update
    setColumnState(oldCols =>
      oldCols.map(col => {
        const updatedTasks = col.tasks.map(task => {
          if (task._id !== taskId) return task
          const updatedComments = (task.comments || []).map(c => {
            if (c._id === commentId) {
              return {
                ...c,
                text: newText,
                updatedAt: new Date().toISOString(),
                lastEditedBy: currentUserName ?? 'CurrentUser',
              }
            }
            return c
          })
          return { ...task, comments: updatedComments }
        })
        return { ...col, tasks: updatedTasks }
      })
    )

    // Also call parent if provided
    onEditComment?.(commentId, newText, taskId)
  }

  // -----------------------------------------------------------------
  // 11) Render
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
      text: 'Show Task',
      onClick: () => {
        if (exactlyOneSelected && selectedTaskId) {
          // If parent does NOT control showTaskOpen, use local
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
          backgroundcolor: palette.semiTransparentWhite.main,
          shrunkfontcolor: palette.white.main,
          unshrunkfontcolor: palette.white.main,
          shrunklabelposition: 'onNotch',
        }}
      />

      {/* Board layout */}
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
        // Provide currentUserName => ShowTask can restrict edits
        currentUserName={currentUserName}
        // Parent-provided actions
        onEdit={() => onEdit?.({ _id: showTaskOpen || '' })}
        onDelete={() => onDelete?.({ _id: showTaskOpen || '' })}
        onDuplicate={() => onDuplicate?.({ _id: showTaskOpen || '' })}
        onCloseTask={() => onCloseTask?.({ _id: showTaskOpen || '' })}
        // Add new comment
        onComment={text => onComment?.(text, showTaskOpen || '')}
        // Dropdowns & multi-select
        customerOptions={showTaskCustomerOptions}
        severityOptions={showTaskSeverityOptions}
        schedulingQueueOptions={showTaskSchedulingQueueOptions}
        statusOptions={showTaskStatusOptions}
        subStatusOptions={showTaskSubStatusOptions}
        topicOptions={showTaskTopicOptions}
        knowledgebaseArticleOptions={showTaskKBArticleOptions}
        teamMemberOptions={showTaskTeamMemberOptions}
        // Edits a comment => pass (commentId, newText) => handle local + external
        onEditComment={(commentId, newText) =>
          handleEditComment(commentId, newText, showTaskOpen || '')
        }
      />
    </Box>
  )
}

export default React.memo(ProjectBoard)
