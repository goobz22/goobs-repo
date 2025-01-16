// src/components/Toolbar/toolbar.stories.tsx

import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import CustomToolbar from './index'

/**
 * Because Searchbar uses `<input>`, that means onChange expects HTMLInputElement.
 * Because Dropdown uses `<select>`, that means onChange expects HTMLSelectElement.
 */
import type { SearchbarProps } from '../Searchbar'
import type { DropdownProps } from '../Dropdown'

/**
 * Sample data for our stories
 */
const sampleButtons = [
  { text: 'Button 1', onClick: () => console.log('Button 1 clicked') },
  { text: 'Button 2', onClick: () => console.log('Button 2 clicked') },
]

// CORRECT: searchbarProps uses HTMLInputElement
const sampleSearchProps: SearchbarProps = {
  label: 'Search Something',
  placeholder: 'Type here...',
  value: '',
  onChange: e => console.log('Searching =>', e.target.value), // e: ChangeEvent<HTMLInputElement>
}

// CORRECT: each dropdown uses HTMLSelectElement
// *** Notice we only pass `value`, `attribute1`, `attribute2` in `options`. ***
const sampleDropdowns: DropdownProps[] = [
  {
    label: 'Dropdown 1', // This is the top-level label for the dropdown
    options: [
      { value: 'option_1', attribute1: 'Option 1' },
      { value: 'option_2', attribute1: 'Option 2' },
      { value: 'option_3', attribute1: 'Option 3' },
    ],
    onChange: e => console.log('Dropdown 1 changed =>', e.target.value), // e: ChangeEvent<HTMLSelectElement>
  },
  {
    label: 'Dropdown 2', // Top-level label
    options: [
      { value: 'apple', attribute1: 'Apple' },
      { value: 'banana', attribute1: 'Banana' },
      { value: 'cherry', attribute1: 'Cherry' },
    ],
    // No onChange => that's allowed if optional
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
 * 1) Basic story (uses userEvent => keep async)
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
 * 2) With Search (uses userEvent => keep async)
 */
export const WithSearch: Story = {
  args: {
    buttons: [{ text: 'New Button' }],
    searchbarProps: sampleSearchProps, // OK: typed as <HTMLInputElement>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Confirm presence of button
    expect(canvas.getByText('New Button')).toBeInTheDocument()

    // The search label text is "Search Something"
    // Use { selector: 'input' } to ensure we get the <input> element
    const input = canvas.getByLabelText('Search Something', {
      selector: 'input',
    })
    await userEvent.type(input, 'Hello World')
    expect(input).toHaveValue('Hello World')
  },
}

/**
 * 3) With single Dropdown (no userEvent => remove async)
 */
export const WithDropdown: Story = {
  args: {
    buttons: [{ text: 'Only Button' }],
    dropdowns: [
      {
        label: 'Pick an Option', // The top-level dropdown label
        options: [
          { value: 'Alpha', attribute1: 'Alpha' },
          { value: 'Beta', attribute1: 'Beta' },
          { value: 'Gamma', attribute1: 'Gamma' },
        ],
        onChange: e => console.log('Single dropdown =>', e.target.value),
      },
    ],
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // There's a single button labeled "Only Button"
    expect(canvas.getByText('Only Button')).toBeInTheDocument()

    // The dropdown label
    expect(canvas.getByText('Pick an Option')).toBeInTheDocument()
  },
}

/**
 * 4) Full Setup
 */
export const FullSetup: Story = {
  args: {
    buttons: sampleButtons,
    searchbarProps: sampleSearchProps,
    customComponent: (
      <div style={{ background: '#e1bee7', padding: '8px' }}>
        Middle Component
      </div>
    ),
    dropdowns: sampleDropdowns, // typed as <HTMLSelectElement>
  },
  play: ({ canvasElement }) => {
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
