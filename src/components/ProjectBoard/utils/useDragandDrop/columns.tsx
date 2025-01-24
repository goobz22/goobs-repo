// src/components/ProjectBoard/utils/useDragandDrop/columns.tsx

'use client'

import React from 'react'
import type { ColumnData } from '../../types'

/** A small helper type describing the item we're dragging (column or task). */
type DragItem = {
  type: 'column' | 'task'
  columnIndex: number
  taskIndex?: number
} | null

/**
 * Hook that manages column-level drag and drop reordering.
 * - If a user checks a column’s checkbox, we allow them to drag it left/right.
 * - We reorder the array in state whenever they drop it on another column.
 */
export function useColumnDragAndDrop(
  columnState: ColumnData[],
  setColumnState: React.Dispatch<React.SetStateAction<ColumnData[]>>
) {
  // Which column/task is being dragged
  const [dragItem, setDragItem] = React.useState<DragItem>(null)

  /** Utility to reorder columns in the array. */
  function reorder<T>(list: T[], startIndex: number, endIndex: number): T[] {
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }

  // --------------------------------------------------------------------------
  // COLUMN DRAG EVENTS
  // --------------------------------------------------------------------------
  function handleColumnDragStart(e: React.DragEvent, columnIndex: number) {
    // Let the browser know we intend a "move" operation
    e.dataTransfer.effectAllowed = 'move'
    setDragItem({ type: 'column', columnIndex })
  }

  function handleColumnDragOver(e: React.DragEvent) {
    // Must prevent default so drop is allowed
    e.preventDefault()
    // Indicate we're moving the item
    e.dataTransfer.dropEffect = 'move'
  }

  function handleColumnDrop(e: React.DragEvent, dropColumnIndex: number) {
    e.preventDefault()

    // If no valid dragItem or not a column, clear & return
    if (!dragItem || dragItem.type !== 'column') {
      setDragItem(null)
      return
    }

    // Actually reorder columns in state
    const newCols = reorder(columnState, dragItem.columnIndex, dropColumnIndex)
    setColumnState(newCols)

    // Done dragging
    setDragItem(null)
  }

  return {
    handleColumnDragStart,
    handleColumnDragOver,
    handleColumnDrop,
  }
}
