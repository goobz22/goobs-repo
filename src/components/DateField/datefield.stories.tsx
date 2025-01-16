// src/components/DateField/datefield.stories.tsx

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import DateField, { DateFieldProps } from './index'

/**
 * Storybook metadata
 */
const meta: Meta<typeof DateField> = {
  title: 'Components/DateField',
  component: DateField,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof DateField>

/**
 * 1) Basic usage (no initial date)
 */
export const Basic: Story = {
  args: {
    label: 'Select Date',
    onChange: date => console.log('Selected date =>', date),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // We confirm the label is present
    expect(canvas.getByLabelText('Select Date')).toBeInTheDocument()
  },
}

/**
 * 2) With Initial Value
 */
export const WithInitialValue: Story = {
  args: {
    label: 'Initial Value',
    value: new Date('2025-01-01'),
    onChange: date => console.log('Selected date =>', date),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Should show "01/01/2025" in the input
    const input = canvas.getByLabelText('Initial Value') as HTMLInputElement
    expect(input.value).toMatch(/01\/01\/2025/)
  },
}

/**
 * 3) Select from Calendar
 */
export const SelectFromCalendar: Story = {
  args: {
    label: 'Click Calendar Icon',
    onChange: date => console.log('Date chosen =>', date),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open the calendar by clicking the calendar icon
    // You can find it by role="img" with name "calendar" (or by alt text if it had any).
    const icon = canvas.getByRole('img', { name: /calendar/i })
    await userEvent.click(icon)

    // Now pick a date from the displayed calendar:
    // This "1" might be found by "button", { name: /^1$/ } (for day=1).
    const dayButton = canvas.getByRole('button', { name: /^1$/ })
    await userEvent.click(dayButton)

    // Confirm the input changed to something containing "/01/"
    const input = canvas.getByLabelText(
      'Click Calendar Icon'
    ) as HTMLInputElement
    expect(input.value).toMatch(/\/01\//)
  },
}

/**
 * 4) Manual Typing
 */
export const ManualTyping: Story = {
  args: {
    label: 'Type a Date (MM/DD/YYYY)',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText(
      'Type a Date (MM/DD/YYYY)'
    ) as HTMLInputElement

    // Focus input and type "02/14/2025" character by character
    await userEvent.click(input)
    await userEvent.type(input, '02/14/2025')

    // Confirm the final value is "02/14/2025"
    expect(input.value).toBe('02/14/2025')
  },
}

/**
 * 5) Arrow Keys (Month/Day/Year)
 */
export const ArrowKeyAdjustments: Story = {
  args: {
    label: 'Use Arrow Keys',
    value: new Date('2025-03-15'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Use Arrow Keys') as HTMLInputElement

    // Confirm initial value "03/15/2025"
    expect(input.value).toBe('03/15/2025')

    // Click to focus inside "month" part (positions 0-2 => '03')
    await userEvent.click(input)
    input.setSelectionRange(0, 2)

    // Press ArrowUp to go from "03" => "04"
    await userEvent.keyboard('{arrowup}')
    expect(input.value).toBe('04/15/2025')

    // Move cursor to "day" part
    input.setSelectionRange(3, 5)
    // ArrowDown => from "15" => "14"
    await userEvent.keyboard('{arrowdown}')
    expect(input.value).toBe('04/14/2025')

    // Move cursor to "year" part
    input.setSelectionRange(6, 10)
    // ArrowUp => "2025" => "2026"
    await userEvent.keyboard('{arrowup}')
    expect(input.value).toBe('04/14/2026')
  },
}
