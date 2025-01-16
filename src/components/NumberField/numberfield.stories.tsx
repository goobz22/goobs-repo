// src/components/NumberField/numberfield.stories.tsx

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import NumberField, { NumberFieldProps } from './index'

/**
 * Configure Storybook metadata
 */
const meta: Meta<typeof NumberField> = {
  title: 'Components/NumberField',
  component: NumberField,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof NumberField>

/**
 * 1) Basic usage (empty by default)
 */
export const Basic: Story = {
  args: {
    label: 'Enter a Number',
    initialValue: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm the label
    const input = canvas.getByLabelText('Enter a Number') as HTMLInputElement
    expect(input.value).toBe('')
  },
}

/**
 * 2) With Initial Value
 */
export const WithInitialValue: Story = {
  args: {
    label: 'Number With Initial Value',
    initialValue: '123',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm initial value
    const input = canvas.getByLabelText(
      'Number With Initial Value'
    ) as HTMLInputElement
    expect(input.value).toBe('123')
  },
}

/**
 * 3) Min/Max Constraints
 */
export const WithMinMax: Story = {
  args: {
    label: 'Number With Min=10 & Max=20',
    initialValue: '15',
    min: 10,
    max: 20,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText(
      'Number With Min=10 & Max=20'
    ) as HTMLInputElement

    // Confirm initial value "15"
    expect(input.value).toBe('15')

    // Type a smaller value "5"
    await userEvent.clear(input)
    await userEvent.type(input, '5')
    // The component should set it to "10" since min=10
    expect(input.value).toBe('10')

    // Type a larger value "25"
    await userEvent.clear(input)
    await userEvent.type(input, '25')
    // The component should set it to "20" since max=20
    expect(input.value).toBe('20')
  },
}

/**
 * 4) Custom Styles
 */
export const CustomStyles: Story = {
  args: {
    label: 'Custom Styled NumberField',
    initialValue: '42',
    backgroundcolor: '#fff8e1', // Light yellow
    outlinecolor: '#ff5722', // Orange
    fontcolor: '#3f51b5', // Indigo
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Verify initial
    const input = canvas.getByLabelText(
      'Custom Styled NumberField'
    ) as HTMLInputElement
    expect(input.value).toBe('42')

    // Type "123"
    await userEvent.clear(input)
    await userEvent.type(input, '123')
    expect(input.value).toBe('123')
  },
}

/**
 * 5) Manual Typing Interaction
 */
export const ManualTyping: Story = {
  args: {
    label: 'Manual Typing',
    initialValue: '',
    min: 0,
    max: 999,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Manual Typing') as HTMLInputElement

    // Type "567"
    await userEvent.type(input, '567')
    expect(input.value).toBe('567')

    // Now type some non-digits like "abc", which should be ignored
    await userEvent.type(input, 'abc')
    expect(input.value).toBe('567')
  },
}
