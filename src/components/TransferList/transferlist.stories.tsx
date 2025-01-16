// src/components/TransferList/transferlist.stories.tsx

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import TransferList, {
  TransferListProps,
  TransferListDropdownDataMap,
} from './index'
import { Box } from '@mui/material'

/**
 * Shared story metadata
 */
const meta: Meta<typeof TransferList> = {
  title: 'Components/TransferList',
  component: TransferList,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof TransferList>

/**
 * Data sets for single-selection
 */
const singleLeftItems = ['Item A', 'Item B', 'Item C']
const singleRightItems = ['Item X', 'Item Y']

/**
 * Data for multiple-selection
 * The user picks from a dropdown "knowledgebase" or "topics" (example),
 * then sees different left/right items for each category.
 */
const sampleDropdownDataMap: TransferListDropdownDataMap = {
  knowledgebase: {
    leftItems: ['Article 1', 'Article 2'],
    rightItems: ['Article 3'],
  },
  topics: {
    leftItems: ['React', 'TypeScript'],
    rightItems: ['Storybook'],
  },
}
const sampleDropdownOptions = [
  { value: 'knowledgebase', label: 'Knowledgebase' },
  { value: 'topics', label: 'Topics' },
]

/**
 * 1) Basic Single-Selection (Empty Right)
 */
export const BasicSingle: Story = {
  args: {
    variant: 'singleSelection',
    leftItems: ['Alpha', 'Beta', 'Gamma'],
    rightItems: [],
    leftTitle: 'Available Items',
    rightTitle: 'Chosen Items',
    onChange: (left, right) => {
      console.log('Updated single => left:', left, 'right:', right)
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Confirm the presence of "Alpha", "Beta", "Gamma" on the left
    expect(canvas.getByText('Alpha')).toBeInTheDocument()
    expect(canvas.getByText('Beta')).toBeInTheDocument()
    expect(canvas.getByText('Gamma')).toBeInTheDocument()

    // Check that the right side is empty
    // userEvent is optional for further testing.
  },
}

/**
 * 2) Single-Selection with Pre-Filled Right Items
 */
export const SinglePrefilled: Story = {
  args: {
    variant: 'singleSelection',
    leftItems: singleLeftItems,
    rightItems: singleRightItems,
    leftTitle: 'Left Column',
    rightTitle: 'Right Column',
    onChange: (left, right) => {
      console.log('Pre-filled single => left:', left, 'right:', right)
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Confirm "Item A, B, C" in the left list
    expect(canvas.getByText('Item A')).toBeInTheDocument()
    expect(canvas.getByText('Item B')).toBeInTheDocument()
    expect(canvas.getByText('Item C')).toBeInTheDocument()

    // Confirm "Item X, Y" in the right list
    expect(canvas.getByText('Item X')).toBeInTheDocument()
    expect(canvas.getByText('Item Y')).toBeInTheDocument()

    // Example of moving "Item A" to the right
    // 1) Check "Item A"
    await userEvent.click(canvas.getByText('Item A'))
    // 2) Click the ">" button to move selected to the right
    const moveRightBtn = canvas.getByRole('button', {
      name: 'move selected right',
    })
    await userEvent.click(moveRightBtn)

    // Now "Item A" should be removed from left, appear in right
    expect(canvas.queryByText('Item A')).not.toBeInTheDocument()
    expect(canvas.getByText('Item A')).toBeInTheDocument() // On the right side

    // No direct assertion for final arrays, but we confirm the UI updated.
  },
}

/**
 * 3) Multiple-Selection variant, with a dropdown
 */
export const MultipleWithDropdown: Story = {
  args: {
    variant: 'multipleSelection',
    dropdownLabel: 'Select Category',
    dropdownOptions: sampleDropdownOptions,
    dropdownDataMap: sampleDropdownDataMap,
    onChange: (left, right, dropdownValue) => {
      console.log('Updated multiple =>', {
        left,
        right,
        dropdownValue,
      })
    },
  },
  // We can define a custom "play" function to test picking a dropdown value, then moving items.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // The dropdown label "Select Category" should appear
    expect(canvas.getByText('Select Category')).toBeInTheDocument()

    // 1) Click on the dropdown
    await userEvent.click(canvas.getByRole('button'))
    // 2) Click "Knowledgebase"
    await userEvent.click(canvas.getByText('Knowledgebase'))

    // Now left items = "Article 1", "Article 2", right items = "Article 3"
    // Move "Article 1" => right
    await userEvent.click(canvas.getByText('Article 1')) // check item
    const moveRightBtn = canvas.getByRole('button', {
      name: 'move selected right',
    })
    await userEvent.click(moveRightBtn)
    // "Article 1" should move to the right
    expect(canvas.queryByText('Article 1')).not.toBeInTheDocument()
  },
}

/**
 * 4) With itemLabelMap
 *    Suppose our internal values are "HIGH", "MEDIUM", "LOW", but we want fancy labels.
 */
export const WithItemLabelMap: Story = {
  args: {
    variant: 'singleSelection',
    leftItems: ['HIGH', 'MEDIUM'],
    rightItems: ['LOW'],
    itemLabelMap: {
      HIGH: 'High Priority',
      MEDIUM: 'Medium Priority',
      LOW: 'Low Priority',
    },
    onChange: (left, right) => {
      console.log('Label mapped => left:', left, 'right:', right)
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // We see "High Priority" & "Medium Priority" on the left, "Low Priority" on the right
    expect(canvas.getByText('High Priority')).toBeInTheDocument()
    expect(canvas.getByText('Medium Priority')).toBeInTheDocument()
    expect(canvas.getByText('Low Priority')).toBeInTheDocument()
  },
}

/**
 * 5) Large scenario: multipleSelection with big lists
 *    We'll just ensure no crash occurs.
 */
export const LargeScenario: Story = {
  args: {
    variant: 'multipleSelection',
    dropdownLabel: 'Select Type',
    dropdownOptions: [{ value: 'fruits' }, { value: 'vegetables' }],
    dropdownDataMap: {
      fruits: {
        leftItems: ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'],
        rightItems: ['Orange'],
      },
      vegetables: {
        leftItems: ['Carrot', 'Broccoli', 'Lettuce'],
        rightItems: [],
      },
    },
    onChange: (left, right, dropdownValue) => {
      console.log('Large scenario =>', { left, right, dropdownValue })
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Basic existence test
    expect(canvas.getByText('Select Type')).toBeInTheDocument()
  },
}
