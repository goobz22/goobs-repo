// src/components/PhoneNumberField/phonenumberfield.stories.tsx

import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import PhoneNumberField from './index'

/**
 * Setup Storybook metadata
 */
const meta: Meta<typeof PhoneNumberField> = {
  title: 'Components/PhoneNumberField',
  component: PhoneNumberField,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof PhoneNumberField>

/**
 * 1) Basic usage (empty by default)
 */
export const Basic: Story = {
  args: {
    label: 'Phone Number',
    placeholder: '(555) 555-5555',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm the label is present
    const input = canvas.getByLabelText('Phone Number') as HTMLInputElement
    expect(input.value).toBe('+1') // Usually shows "+1" or "+1 " initially, depending on your logic
  },
}

/**
 * 2) With Initial Value
 */
export const WithInitialValue: Story = {
  args: {
    label: 'Contact Number',
    value: '1234567890', // Should format to "+1 123-456-7890"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm it rendered the formatted phone
    const input = canvas.getByLabelText('Contact Number') as HTMLInputElement
    expect(input.value).toBe('+1 123-456-7890')
  },
}

/**
 * 3) Manual Typing
 */
export const ManualTyping: Story = {
  args: {
    label: 'Manual Input',
    placeholder: '(555) 555-5555',
    // optional onChange if you want to see logs in the console
    onChange: e => console.log('Phone changed =>', e.target.value),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Manual Input') as HTMLInputElement

    // Type "9876543210"
    await userEvent.type(input, '9876543210')

    // Final result should be "+1 987-654-3210"
    expect(input.value).toBe('+1 987-654-3210')
  },
}

/**
 * 4) Overflow Digits (stops at 10)
 */
export const OverflowDigits: Story = {
  args: {
    label: 'Overflow Check',
    placeholder: '(555) 555-5555',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Overflow Check') as HTMLInputElement

    // Type more than 10 digits: "123456789012345"
    await userEvent.type(input, '123456789012345')
    // Expect it to stop at "+1 123-456-7890"
    expect(input.value).toBe('+1 123-456-7890')
  },
}

/**
 * 5) Error State
 */
export const ErrorState: Story = {
  args: {
    label: 'Phone (Error)',
    error: true,
    helperText: 'Invalid phone number!',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm helper text
    expect(canvas.getByText('Invalid phone number!')).toBeInTheDocument()
  },
}

/**
 * 6) Disabled Field
 */
export const DisabledField: Story = {
  args: {
    label: 'Disabled Phone Number',
    disabled: true,
    value: '5555555555', // +1 555-555-5555
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText(
      'Disabled Phone Number'
    ) as HTMLInputElement
    // It's disabled, so user can't type
    expect(input).toBeDisabled()
    // Confirm initial value is properly formatted
    expect(input.value).toBe('+1 555-555-5555')
  },
}
