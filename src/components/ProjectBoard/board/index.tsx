'use client'

import React from 'react'
import { useTheme, useMediaQuery } from '@mui/material'
import DesktopBoard from './desktop'
import MobileBoard from './mobile'
import TabletBoard from './tablet'

import type { ColumnData } from '../types'

/** Describe the props we need to display the board. */
export interface BoardProps {
  /** The columns to display (already "filtered/fitted" if needed). */
  columns: ColumnData[]

  /** Overflow columns, if any. */
  overflowColumns?: ColumnData[]
  selectedOverflowColumnId?: string
  onChangeSelectedOverflowColumn?: (colId: string) => void

  /** Which task is selected? */
  selectedTask: { colIndex: number; taskIndex: number } | null
  onSelectTask: (colIndex: number, taskIndex: number) => void

  /** Column-level DnD from the parent ProjectBoard */
  onColumnDragStart: (e: React.DragEvent, columnIndex: number) => void
  onColumnDragOver: (e: React.DragEvent, columnIndex: number) => void
  onColumnDrop: (e: React.DragEvent, columnIndex: number) => void
}

export default function Board(props: BoardProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  if (isMobile) {
    return <MobileBoard {...props} />
  }
  if (isTablet) {
    return <TabletBoard {...props} />
  }
  return <DesktopBoard {...props} />
}
