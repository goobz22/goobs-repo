// src/components/ConfirmationCodeInput/codeinput.stories.tsx

import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import ConfirmationCodeInputs, { ConfirmationCodeInputsProps } from './index'

/**
 * Configure Storybook metadata
 */
const meta: Meta<typeof ConfirmationCodeInputs> = {
  title: 'Components/ConfirmationCodeInputs',
  component: ConfirmationCodeInputs,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof ConfirmationCodeInputs>

/**
 * 1) Basic Usage (no initial value)
 */
export const Basic: Story = {
  args: {
    codeLength: 6,
    isValid: false,
    'aria-label': 'Basic Confirmation Code',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Confirm that each input is present
    for (let i = 1; i <= 6; i++) {
      expect(canvas.getByLabelText(`Code Digit ${i}`)).toBeInTheDocument()
    }
  },
}

/**
 * 2) Prefilled Value
 */
export const PrefilledValue: Story = {
  name: 'With Prefilled Value',
  args: {
    codeLength: 4,
    isValid: false,
    value: '1234',
    'aria-label': 'Prefilled Confirmation Code',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // The inputs should be "1", "2", "3", and "4"
    for (let i = 1; i <= 4; i++) {
      const input = canvas.getByLabelText(`Code Digit ${i}`) as HTMLInputElement
      expect(input.value).toBe(String(i))
    }
  },
}

/**
 * 3) Code is valid (green indicator)
 */
export const ValidCode: Story = {
  args: {
    codeLength: 6,
    value: '123456',
    isValid: true, // This should make the circle green
    'aria-label': 'Valid Confirmation Code',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Check that each digit is in place
    for (let i = 1; i <= 6; i++) {
      const input = canvas.getByLabelText(`Code Digit ${i}`) as HTMLInputElement
      expect(input.value).toBe(String(i))
    }

    // Confirm the circle is labeled "Code is valid"
    expect(canvas.getByLabelText('Code is valid')).toBeInTheDocument()
  },
}

/**
 * 4) Manual Typing
 */
export const ManualTyping: Story = {
  args: {
    codeLength: 4,
    isValid: false,
    'aria-label': 'Manual Code Entry',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Type "9876" across the 4 inputs
    for (let i = 1; i <= 4; i++) {
      const input = canvas.getByLabelText(`Code Digit ${i}`) as HTMLInputElement
      await userEvent.type(input, String(9 - i)) // "9", "8", "7", "6"
      // Move automatically to the next input after typing 1 digit
    }

    // Verify each input is now "9", "8", "7", "6"
    const expectedDigits = ['9', '8', '7', '6']
    for (let i = 1; i <= 4; i++) {
      const input = canvas.getByLabelText(`Code Digit ${i}`) as HTMLInputElement
      expect(input.value).toBe(expectedDigits[i - 1])
    }
  },
}

/**
 * 5) Arrow/Backspace Navigation
 *    Demonstrates moving between inputs using arrow keys and backspace.
 */
export const ArrowAndBackspace: Story = {
  args: {
    codeLength: 4,
    isValid: false,
    value: '', // start empty
    'aria-label': 'Arrow Navigation Code',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Start with the first digit
    const input1 = canvas.getByLabelText(`Code Digit 1`) as HTMLInputElement
    await userEvent.click(input1)
    // Type "1"
    await userEvent.keyboard('1')
    // Should auto-focus the second digit
    const input2 = canvas.getByLabelText(`Code Digit 2`) as HTMLInputElement
    expect(input2).toHaveFocus()
    // Type "2"
    await userEvent.keyboard('2')

    // Arrow left to go back to first digit
    await userEvent.keyboard('{arrowleft}')
    expect(input1).toHaveFocus()

    // Press backspace to clear first digit
    await userEvent.keyboard('{backspace}')
    expect(input1.value).toBe('')
    // Should remain on first input (after clearing)
    expect(input1).toHaveFocus()

    // Type "9"
    await userEvent.keyboard('9')
    expect(input1.value).toBe('9')

    // Move to second input, confirm "2" is still there
    await userEvent.keyboard('{arrowright}')
    expect(input2).toHaveFocus()
    expect(input2.value).toBe('2')
  },
}
