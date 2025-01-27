'use client'
import React from 'react'
import MultipleSelectChip, { MultiSelectChipProps } from '../../../MultiSelect'
import { columnconfig, cellconfig } from '../../../Grid'

/**
 * Extend MultiSelectChipProps for use in the grid system.
 */
export type ExtendedMultiSelectProps = MultiSelectChipProps & {
  /**
   * Additional configuration for the grid column.
   */
  columnconfig?: Omit<columnconfig, 'component'> & {
    component?: columnconfig['component']
  }
  /**
   * Configuration for the individual cell.
   */
  cellconfig?: cellconfig
}

interface MultiSelectGridProps {
  multiSelect?: ExtendedMultiSelectProps | ExtendedMultiSelectProps[]
}

/**
 * Custom hook to transform multiSelect props into `columnconfig` entries.
 */
const useMultiSelect = (
  grid: MultiSelectGridProps
): columnconfig | columnconfig[] | null => {
  const { multiSelect } = grid

  if (!multiSelect) return null

  // Helper function to build each columnconfig item
  const renderMultiSelect = (
    item: ExtendedMultiSelectProps,
    index: number
  ): columnconfig => {
    const { columnconfig: itemColumnConfig, cellconfig, ...restProps } = item

    // Validate required grid configuration
    if (
      !itemColumnConfig ||
      typeof itemColumnConfig !== 'object' ||
      typeof itemColumnConfig.row !== 'number' ||
      typeof itemColumnConfig.column !== 'number'
    ) {
      throw new Error(
        'columnconfig must be an object with row and column as numbers'
      )
    }

    return {
      ...itemColumnConfig,
      cellconfig: {
        ...cellconfig,
      },
      component: (
        <MultipleSelectChip key={`multiselect-${index}`} {...restProps} />
      ),
    }
  }

  // If it's an array, process each item; otherwise process a single item
  if (Array.isArray(multiSelect)) {
    return multiSelect.map(renderMultiSelect)
  } else {
    return renderMultiSelect(multiSelect, 0)
  }
}

export default useMultiSelect
