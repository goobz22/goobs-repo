// src/components/IncrementNumberField/numberfield.stories.tsx

import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import IncrementNumberField from './index'
import type { IncrementNumberFieldProps } from './index'

/**
 * Setup Storybook metadata
 */
const meta: Meta<typeof IncrementNumberField> = {
  title: 'Components/IncrementNumberField',
  component: IncrementNumberField,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof IncrementNumberField>

/**
 * 1) Basic usage
 */
export const Basic: Story = {
  name: 'Basic (Default)',
  args: {
    label: 'Increment Number',
    initialValue: '0',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Check that the label is present
    expect(canvas.getByLabelText('Increment Number')).toBeInTheDocument()

    // Grab the textfield and buttons
    const decrementBtn = canvas.getByRole('button', { name: '-' })
    const incrementBtn = canvas.getByRole('button', { name: '+' })
    const input = canvas.getByLabelText('Increment Number') as HTMLInputElement

    // Initial should be "0"
    expect(input.value).toBe('0')

    // Click + once
    await userEvent.click(incrementBtn)
    expect(input.value).toBe('1')

    // Click - twice; it won't go below 0
    await userEvent.click(decrementBtn)
    expect(input.value).toBe('0')

    await userEvent.click(decrementBtn)
    // still "0"
    expect(input.value).toBe('0')
  },
}

/**
 * 2) With Initial Value
 */
export const WithInitialValue: Story = {
  args: {
    label: 'With Initial Value',
    initialValue: '5',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText(
      'With Initial Value'
    ) as HTMLInputElement

    // Confirm initial
    expect(input.value).toBe('5')
  },
}

/**
 * 3) Manual Typing
 */
export const ManualTyping: Story = {
  args: {
    label: 'Manual Typing',
    initialValue: '10',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Manual Typing') as HTMLInputElement

    // Should start at "10"
    expect(input.value).toBe('10')

    // Click into input and type "25"
    await userEvent.click(input)
    // We'll select all and type new value. Or we can backspace:
    await userEvent.keyboard('[Backspace][Backspace]')
    await userEvent.keyboard('25')

    // Now "25"
    expect(input.value).toBe('25')
  },
}

/**
 * 4) Custom Styles
 */
export const CustomStyles: Story = {
  args: {
    label: 'Custom Colors',
    initialValue: '3',
    backgroundcolor: '#e3f2fd', // light blue
    outlinecolor: '#0d47a1', // dark blue
    fontcolor: '#d32f2f', // red
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Custom Colors') as HTMLInputElement

    // Verify initial value
    expect(input.value).toBe('3')

    // Increment
    const incrementBtn = canvas.getByRole('button', { name: '+' })
    await userEvent.click(incrementBtn)
    expect(input.value).toBe('4')
  },
}

/**
 * 5) Multiple Increments
 */
export const MultipleIncrements: Story = {
  args: {
    label: 'Increments',
    initialValue: '0',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Increments') as HTMLInputElement
    const incrementBtn = canvas.getByRole('button', { name: '+' })

    // Press + five times
    for (let i = 0; i < 5; i++) {
      await userEvent.click(incrementBtn)
    }
    // Expect "5"
    expect(input.value).toBe('5')
  },
}
