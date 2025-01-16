// src/components/Toolbar/toolbar.stories.tsx

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import CustomToolbar, { CustomToolbarProps } from './index'
import { CustomButtonProps } from '../Button'
import { SearchbarProps } from '../Searchbar'
import { DropdownProps } from '../Dropdown'
import { Box } from '@mui/material'

/**
 * Sample data for our stories
 */
const sampleButtons: CustomButtonProps[] = [
  { text: 'Button 1', onClick: () => console.log('Button 1 clicked') },
  { text: 'Button 2', onClick: () => console.log('Button 2 clicked') },
]

const sampleSearchProps: Partial<SearchbarProps> = {
  label: 'Search Something',
  placeholder: 'Type here...',
  value: '',
  onChange: e => console.log('Searching =>', e.target.value),
}

const sampleDropdowns: DropdownProps[] = [
  {
    label: 'Dropdown 1',
    options: [
      { value: 'option_1' },
      { value: 'option_2' },
      { value: 'option_3' },
    ],
    onChange: e => console.log('Dropdown 1 changed =>', e.target.value),
  },
  {
    label: 'Dropdown 2',
    options: [{ value: 'apple' }, { value: 'banana' }, { value: 'cherry' }],
  },
]

/**
 * Storybook metadata
 */
const meta: Meta<typeof CustomToolbar> = {
  title: 'Components/Toolbar',
  component: CustomToolbar,
  parameters: {
    a11y: { disable: false },
  },
}
export default meta

type Story = StoryObj<typeof CustomToolbar>

/**
 * 1) Basic (buttons only, no search, no custom component, no dropdowns)
 */
export const Basic: Story = {
  args: {
    buttons: sampleButtons,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // We have "Button 1" and "Button 2"
    expect(canvas.getByText('Button 1')).toBeInTheDocument()
    expect(canvas.getByText('Button 2')).toBeInTheDocument()

    // Click "Button 1"
    await userEvent.click(canvas.getByText('Button 1'))
    // No direct assertion for console logs, but we ensure no error
  },
}

/**
 * 2) With Search
 *    Show searchbar on left, plus minimal buttons. No custom component or dropdowns.
 */
export const WithSearch: Story = {
  args: {
    buttons: [{ text: 'New Button' }],
    searchbarProps: sampleSearchProps,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm presence of button
    expect(canvas.getByText('New Button')).toBeInTheDocument()

    // The search label text is "Search Something"
    expect(canvas.getByLabelText('Search Something')).toBeInTheDocument()

    // Type a query in the search
    const input = canvas.getByLabelText('Search Something') as HTMLInputElement
    await userEvent.type(input, 'Hello World')
    expect(input.value).toBe('Hello World')
  },
}

/**
 * 3) With Custom Component & Single Dropdown
 */
export const CustomAndDropdown: Story = {
  args: {
    buttons: [{ text: 'Only Button' }],
    customComponent: (
      <Box
        sx={{
          backgroundColor: '#f8bbd0',
          padding: '8px',
          borderRadius: '4px',
        }}
      >
        Custom Middle
      </Box>
    ),
    dropdowns: [
      {
        label: 'Pick an Option',
        options: [{ value: 'Alpha' }, { value: 'Beta' }, { value: 'Gamma' }],
        onChange: e => console.log('Single dropdown =>', e.target.value),
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // There's a single button labeled "Only Button"
    expect(canvas.getByText('Only Button')).toBeInTheDocument()

    // The custom middle component text
    expect(canvas.getByText('Custom Middle')).toBeInTheDocument()

    // The dropdown label
    expect(canvas.getByText('Pick an Option')).toBeInTheDocument()
  },
}

/**
 * 4) Full Setup: Buttons, Search, Custom, and Multiple Dropdowns
 */
export const FullSetup: Story = {
  args: {
    buttons: sampleButtons,
    searchbarProps: sampleSearchProps,
    customComponent: (
      <Box
        sx={{
          backgroundColor: '#e1bee7',
          padding: '8px',
          borderRadius: '4px',
        }}
      >
        Middle Component
      </Box>
    ),
    dropdowns: sampleDropdowns,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Check the left buttons
    expect(canvas.getByText('Button 1')).toBeInTheDocument()
    expect(canvas.getByText('Button 2')).toBeInTheDocument()

    // The search label
    expect(canvas.getByLabelText('Search Something')).toBeInTheDocument()

    // The custom middle text
    expect(canvas.getByText('Middle Component')).toBeInTheDocument()

    // The two dropdown labels
    expect(canvas.getByText('Dropdown 1')).toBeInTheDocument()
    expect(canvas.getByText('Dropdown 2')).toBeInTheDocument()
  },
}

/**
 * 5) Responsiveness
 *    Demonstrates how the toolbar collapses on smaller screens.
 *    In practice, we can't "resize" the browser in a typical Storybook test,
 *    but we can at least confirm no error occurs with the layout.
 */
export const Responsive: Story = {
  args: {
    buttons: [
      { text: 'LongNameButton1' },
      { text: 'LongNameButton2' },
      { text: 'LongNameButton3' },
    ],
    searchbarProps: {
      label: 'Responsive Search',
      placeholder: 'Try me on wide screens!',
    },
    dropdowns: sampleDropdowns,
    customComponent: (
      <Box sx={{ backgroundColor: '#ffecb3', padding: '8px' }}>
        Responsive Middle
      </Box>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // There's no direct resizing test here, but we ensure it mounts
    expect(canvas.getByText('LongNameButton1')).toBeInTheDocument()
    expect(canvas.getByText('Responsive Search')).toBeInTheDocument()
    expect(canvas.getByText('Responsive Middle')).toBeInTheDocument()
  },
}
