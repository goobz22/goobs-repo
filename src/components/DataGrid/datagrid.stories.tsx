// src/components/DataGrid/datagrid.stories.tsx

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import DataGrid from './index'
import type { ColumnDef, RowData } from './types' // Keep only the used types

/**
 * A quick utility for generating IDs.
 * If you prefer a real UUID approach, use 'crypto.randomUUID()' (in modern browsers)
 * or 'uuid' library. For this example, we'll do a simple alphanumeric approach.
 */
function randomUUID(): string {
  return Math.random().toString(36).substring(2, 9)
}

/**
 * 1) Example columns
 */
const sampleColumns: ColumnDef[] = [
  { field: '_id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Name', width: 180 },
  { field: 'status', headerName: 'Status', width: 120 },
  {
    field: 'description',
    headerName: 'Description',
    // Example custom cell rendering
    renderCell: ({ value }) => {
      // Safely handle non-string values to avoid default object stringification
      const displayValue = typeof value === 'string' ? value : ''
      return <i style={{ color: 'blue' }}>{displayValue}</i>
    },
  },
]

/**
 * 2) Example row data
 */
const sampleRows: RowData[] = [
  {
    _id: randomUUID(),
    name: 'Alpha',
    status: 'Active',
    description: 'First row item',
  },
  {
    _id: randomUUID(),
    name: 'Beta',
    status: 'Inactive',
    description: 'Second row item',
  },
  {
    _id: randomUUID(),
    name: 'Gamma',
    status: 'Active',
    description: 'Third row item',
  },
  {
    _id: randomUUID(),
    name: 'Delta',
    status: 'Active',
    description: 'Fourth row item',
  },
  {
    _id: randomUUID(),
    name: 'Epsilon',
    status: 'Inactive',
    description: 'Fifth row item',
  },
]

/**
 * 3) Larger dataset for some stories (e.g., pagination)
 */
function createManyRows(count: number): RowData[] {
  const arr: RowData[] = []
  for (let i = 1; i <= count; i++) {
    arr.push({
      _id: randomUUID(),
      name: `Row #${i}`,
      status: i % 2 === 0 ? 'Active' : 'Inactive',
      description: `Item number ${i} with random text`,
    })
  }
  return arr
}
const largeRows = createManyRows(55)

/**
 * 4) Sample toolbar props (buttons + dropdowns)
 */
const sampleButtons = [
  {
    text: 'Refresh',
    onClick: () => console.log('Refresh clicked'),
  },
  {
    text: 'New Item',
    onClick: () => console.log('New Item clicked'),
  },
]

const sampleDropdowns = [
  {
    label: 'Filter Status',
    options: [{ value: 'all' }, { value: 'active' }, { value: 'inactive' }],
    defaultValue: 'all',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log('Dropdown changed =>', e.target.value)
    },
  },
]

/**
 * 5) Default Storybook metadata
 */
const meta: Meta<typeof DataGrid> = {
  title: 'Components/DataGrid',
  component: DataGrid,
  parameters: {
    a11y: { disable: false },
  },
}
export default meta

type Story = StoryObj<typeof DataGrid>

/**
 * 6) Stories
 */

/**
 * 1) Empty scenario
 *    - No actual `await` usage, so remove `async`.
 */
export const Empty: Story = {
  name: 'Empty Grid',
  args: {
    columns: sampleColumns,
    rows: [],
    onSelectionChange: ids => console.log('Selection =>', ids),
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // No rows => "No data available" text might appear
    expect(canvas.getByText(/No data available/i)).toBeInTheDocument()
  },
}

/**
 * 2) Basic usage with data
 *    - Uses `await` for userEvent interaction => keep `async`.
 */
export const Basic: Story = {
  args: {
    columns: sampleColumns,
    rows: sampleRows,
    onSelectionChange: ids => console.log('Selection =>', ids),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm we see "Alpha", "Beta", etc.
    expect(canvas.getByText('Alpha')).toBeInTheDocument()
    expect(canvas.getByText('Beta')).toBeInTheDocument()

    // Example: click "Alpha" row's checkbox (or row text, depending on your DataGrid usage)
    await userEvent.click(canvas.getByText('Alpha'))
    // The console logs "Selection => [theAlphaID]" (no direct assertion here)
  },
}

/**
 * 3) With toolbar: Buttons, Dropdown, and Search
 *    - We do have `await userEvent.type(...)`.
 */
export const WithToolbar: Story = {
  args: {
    columns: sampleColumns,
    rows: sampleRows,
    buttons: sampleButtons,
    dropdowns: sampleDropdowns,
    searchbarProps: {
      label: 'Search rows',
      placeholder: 'Type to filter rows',
      value: '',
      onChange: () => {}, // No-op to fix TS error
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Check for "Refresh" button
    expect(canvas.getByText('Refresh')).toBeInTheDocument()
    // Type in the searchbar labeled "Search rows"
    const searchField = canvas.getByLabelText('Search rows')
    await userEvent.type(searchField, 'Alpha')
    expect(searchField).toHaveValue('Alpha')
    // "Alpha" might remain, others might hide if your search logic is triggered
  },
}

/**
 * 4) Row Selection + Manage actions
 */
export const RowSelectionManage: Story = {
  args: {
    columns: sampleColumns,
    rows: sampleRows,
    onSelectionChange: ids => console.log('RowSelection =>', ids),
    onManage: () => console.log('Manage clicked with single row'),
    onShow: () => console.log('Show clicked with single row'),
    onDuplicate: ids => console.log('Duplicating rows =>', ids),
    onDelete: ids => console.log('Deleting rows =>', ids),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // For multiple row selection: click "Beta" row, then "Gamma"
    await userEvent.click(canvas.getByText('Beta'))
    await userEvent.click(canvas.getByText('Gamma'))

    // The ManageRow bar appears with "2 items selected"
    expect(canvas.getByText(/2 items selected/i)).toBeInTheDocument()

    // Attempt a "Delete" operation
    await userEvent.click(canvas.getByText('Delete'))
  },
}

/**
 * 5) Pagination example with a larger dataset
 */
export const PaginationAndLargeData: Story = {
  args: {
    columns: sampleColumns,
    rows: largeRows,
    onSelectionChange: ids => console.log('Large data selection =>', ids),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // We can confirm we see row #1, row #2, ...
    // The console logs will show pagination events if we click next page.

    // For example, user clicks next page:
    const nextPageButton = canvas.getByRole('button', {
      name: 'Go to next page',
    })
    await userEvent.click(nextPageButton)
    // No direct assertion here, just confirming no crash
  },
}

/**
 * 6) Error scenario
 *    - No actual `await` usage, so remove `async`.
 */
export const WithError: Story = {
  args: {
    columns: sampleColumns,
    rows: sampleRows,
    error: new Error('Something went wrong'),
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // We see the error alert with "Something went wrong"
    expect(canvas.getByText('Something went wrong')).toBeInTheDocument()
  },
}

/**
 * 7) All features combined
 *    - Uses `await` for userEvent click => keep `async`.
 */
export const FullFeatures: Story = {
  args: {
    columns: sampleColumns,
    rows: sampleRows,
    buttons: sampleButtons,
    dropdowns: sampleDropdowns,
    searchbarProps: {
      label: 'Search everything',
      placeholder: 'Try searching "Beta" or "Delta"',
      value: '',
      onChange: () => {}, // No-op to fix TS error
    },
    onSelectionChange: ids => console.log('Full selection =>', ids),
    onManage: () => console.log('Manage row pressed'),
    onShow: () => console.log('Show row pressed'),
    onDuplicate: ids => console.log('Full-Feature: Duplicate =>', ids),
    onDelete: ids => console.log('Full-Feature: Delete =>', ids),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm all UI elements are present
    expect(canvas.getByText('Refresh')).toBeInTheDocument()
    expect(canvas.getByText('New Item')).toBeInTheDocument()
    expect(canvas.getByText('Filter Status')).toBeInTheDocument()

    // Rows are displayed, plus search, row manage, etc.
    await userEvent.click(canvas.getByText('Gamma'))
    expect(canvas.getByText(/1 item selected/i)).toBeInTheDocument()

    // There's a "Manage" button for single-row actions
    await userEvent.click(canvas.getByText('Manage'))
    // Logs "Manage row pressed"
  },
}
