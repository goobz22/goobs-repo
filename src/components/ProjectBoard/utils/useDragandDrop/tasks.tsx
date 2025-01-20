'use client'

import React from 'react'
import type {
  ColumnData,
  Task,
  BoardType,
  CompanyInfo,
  OnUpdateTaskArgs,
} from '../../types'

// The same DragItem shape used in columns.tsx
type DragItem = {
  type: 'column' | 'task'
  columnIndex: number
  taskIndex?: number
} | null

/**
 * Hook managing task-level drag and drop.
 * Receives the same `dragItem` and `setDragItem` from useColumnDragAndDrop,
 * so both columns and tasks share the same drag state.
 */
export function useTaskDragAndDrop(
  columnState: ColumnData[],
  setColumnState: React.Dispatch<React.SetStateAction<ColumnData[]>>,
  dragItem: DragItem,
  setDragItem: React.Dispatch<React.SetStateAction<DragItem>>,
  company: CompanyInfo | undefined,
  onUpdateTask?: (args: OnUpdateTaskArgs) => void,
  boardType?: BoardType // e.g. "severityLevel", "status", "subStatus", "topic"
) {
  // --------------------------------------------------------------------------
  // TASK DRAG EVENTS
  // --------------------------------------------------------------------------
  function handleTaskDragStart(
    e: React.DragEvent,
    columnIndex: number,
    taskIndex: number,
    selectedTask: { colIndex: number; taskIndex: number } | null
  ) {
    // Only allow dragging if the user actually selected this exact task
    if (
      selectedTask &&
      selectedTask.colIndex === columnIndex &&
      selectedTask.taskIndex === taskIndex
    ) {
      setDragItem({ type: 'task', columnIndex, taskIndex })
    } else {
      e.preventDefault()
    }
  }

  function handleTaskDragOver(e: React.DragEvent) {
    e.preventDefault()
  }

  function handleTaskDrop(
    e: React.DragEvent,
    dropColumnIndex: number,
    dropTaskIndex: number
  ) {
    e.preventDefault()
    if (!dragItem || dragItem.type !== 'task') return

    const { columnIndex: sourceColIdx, taskIndex: sourceTaskIdx } = dragItem
    const newCols = [...columnState]

    // Remove from old column
    const sourceCol = newCols[sourceColIdx]
    if (
      !sourceCol ||
      sourceTaskIdx == null ||
      sourceTaskIdx < 0 ||
      sourceTaskIdx >= sourceCol.tasks.length
    ) {
      setDragItem(null)
      return
    }

    const [movedTask] = sourceCol.tasks.splice(sourceTaskIdx, 1)

    // Insert into new column
    const destCol = newCols[dropColumnIndex]
    if (!destCol) {
      setDragItem(null)
      return
    }

    // Clamp dropTaskIndex to valid range
    if (dropTaskIndex < 0) dropTaskIndex = 0
    if (dropTaskIndex > destCol.tasks.length) {
      dropTaskIndex = destCol.tasks.length
    }

    destCol.tasks.splice(dropTaskIndex, 0, movedTask)

    // If user dropped into a different column => update the relevant ID
    if (sourceColIdx !== dropColumnIndex) {
      updateTaskField(movedTask, destCol._id, boardType)

      // Also call onUpdateTask if provided
      onUpdateTask?.({
        companyId: company?._id || 'missing-company-id',
        _id: movedTask._id,
        input: {
          ...buildUpdateInput(boardType, destCol._id),
        },
      })
    }

    setColumnState(newCols)
    setDragItem(null)
  }

  // --------------------------------------------------------------------------
  // HELPERS
  // --------------------------------------------------------------------------
  function updateTaskField(
    task: Task,
    newColId: string,
    bType: BoardType | undefined
  ) {
    switch (bType) {
      case 'severityLevel':
        task.severityId = newColId
        break
      case 'status':
        task.statusId = newColId
        break
      case 'subStatus':
        task.substatusId = newColId
        break
      case 'topic':
        task.topicIds = [newColId]
        break
    }
  }

  function buildUpdateInput(bType: BoardType | undefined, newColId: string) {
    switch (bType) {
      case 'severityLevel':
        return { severityId: newColId }
      case 'status':
        return { statusId: newColId }
      case 'subStatus':
        return { substatusId: newColId }
      case 'topic':
        return { topicIds: [newColId] }
      default:
        return {}
    }
  }

  return {
    handleTaskDragStart,
    handleTaskDragOver,
    handleTaskDrop,
  }
}
