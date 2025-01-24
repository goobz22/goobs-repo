'use client'

import { atom } from 'jotai'
import type { ColumnData } from '../types'

/**
 * A global store of all columns (including the tasks in each column).
 */
export const columnsAtom = atom<ColumnData[]>([])
