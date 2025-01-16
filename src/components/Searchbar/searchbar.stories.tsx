// src/components/Searchbar/searchbar.stories.tsx

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import Searchbar, { SearchbarProps } from './index'

/**
 * Setup Storybook metadata
 */
const meta: Meta<typeof Searchbar> = {
  title: 'Components/Searchbar',
  component: Searchbar,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof Searchbar>

/**
 * 1) Basic usage (no label, no special colors)
 */
export const Basic: Story = {
  args: {
    placeholder: 'Search...',
    value: '',
    onChange: e => {
      console.log('Basic search input =>', e.target.value)
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The input might have "Search..." as the placeholder
    const input = canvas.getByPlaceholderText('Search...') as HTMLInputElement

    // Initially empty
    expect(input.value).toBe('')

    // Type something
    await userEvent.type(input, 'Hello')
    expect(input.value).toBe('Hello')
  },
}

/**
 * 2) With Label
 */
export const WithLabel: Story = {
  args: {
    label: 'Search Label',
    placeholder: 'Search items',
    value: '',
    onChange: e => {
      console.log('WithLabel input =>', e.target.value)
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // The label is visible
    expect(canvas.getByText('Search Label')).toBeInTheDocument()

    // Type some text
    const input = canvas.getByLabelText('Search Label') as HTMLInputElement
    await userEvent.type(input, 'Apple')
    expect(input.value).toBe('Apple')
  },
}

/**
 * 3) Custom Colors
 */
export const CustomColors: Story = {
  args: {
    label: 'Colored Search',
    placeholder: 'Look here...',
    value: '',
    backgroundcolor: '#e3f2fd', // Light blue
    iconcolor: '#0d47a1', // Darker blue
    outlinecolor: '#64b5f6', // Another shade of blue
    fontcolor: '#1a237e', // Deep purple for text
    onChange: e => {
      console.log('CustomColors input =>', e.target.value)
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Colored Search') as HTMLInputElement

    // Type "Colored"
    await userEvent.type(input, 'Colored')
    expect(input.value).toBe('Colored')
  },
}

/**
 * 4) Outline None
 */
export const NoOutline: Story = {
  args: {
    label: 'No Border',
    placeholder: 'Try typing...',
    value: '',
    outlinecolor: 'none',
    onChange: e => {
      console.log('NoOutline input =>', e.target.value)
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('No Border') as HTMLInputElement

    // Type "Borderless"
    await userEvent.type(input, 'Borderless')
    expect(input.value).toBe('Borderless')
  },
}

/**
 * 5) Pre-filled Value
 */
export const Prefilled: Story = {
  args: {
    label: 'Prefilled Search',
    placeholder: 'Modify me...',
    value: 'Initial text',
    onChange: e => {
      console.log('Prefilled input =>', e.target.value)
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm initial value
    const input = canvas.getByLabelText('Prefilled Search') as HTMLInputElement
    expect(input.value).toBe('Initial text')

    // Clear it and type new text
    await userEvent.clear(input)
    await userEvent.type(input, 'New content')
    expect(input.value).toBe('New content')
  },
}
