'use client'

import React from 'react'
import type { ColumnData } from '../../types'

// A small helper type for the drag info we store.
type DragItem = {
  type: 'column' | 'task'
  columnIndex: number
  taskIndex?: number
} | null

/**
 * Hook managing column-level drag and drop.
 * Keeps track of what's being dragged via `dragItem` state.
 */
export function useColumnDragAndDrop(
  columnState: ColumnData[],
  setColumnState: React.Dispatch<React.SetStateAction<ColumnData[]>>
) {
  // Tracks the item currently being dragged (could be a column or a task)
  const [dragItem, setDragItem] = React.useState<DragItem>(null)

  /**
   * Utility to reorder a list.
   */
  function reorder<T>(list: T[], startIndex: number, endIndex: number): T[] {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }

  // --------------------------------------------------------------------------
  // COLUMN DRAG EVENTS
  // --------------------------------------------------------------------------
  function handleColumnDragStart(e: React.DragEvent, columnIndex: number) {
    setDragItem({ type: 'column', columnIndex })
  }

  function handleColumnDragOver(e: React.DragEvent) {
    e.preventDefault()
  }

  function handleColumnDrop(e: React.DragEvent, dropColumnIndex: number) {
    e.preventDefault()
    if (!dragItem || dragItem.type !== 'column') {
      setDragItem(null)
      return
    }

    const newCols = reorder(columnState, dragItem.columnIndex, dropColumnIndex)
    setColumnState(newCols)
    setDragItem(null)
  }

  return {
    // State describing what’s being dragged
    dragItem,
    setDragItem,

    // Column handlers
    handleColumnDragStart,
    handleColumnDragOver,
    handleColumnDrop,
  }
}
