// src/components/PasswordField/passwordfield.stories.tsx

import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import PasswordField, { PasswordFieldProps } from './index'

/**
 * Storybook metadata
 */
const meta: Meta<typeof PasswordField> = {
  title: 'Components/PasswordField',
  component: PasswordField,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof PasswordField>

/**
 * 1) Basic usage
 */
export const Basic: Story = {
  args: {
    label: 'Password',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Grab the input by label
    const input = canvas.getByLabelText('Password') as HTMLInputElement
    // Initially, the type should be "password"
    expect(input.type).toBe('password')

    // Click the eye icon to toggle visibility
    const eyeIcon = canvas.getByRole('img', { name: /toggle password/i })
    // If 'ShowHideEyeIcon' has an accessible name or role, adjust this query
    // For example, if your icon has aria-label or alt text:
    // const eyeIcon = canvas.getByLabelText(/toggle password/i)
    // or getByRole('button', { name: 'Show Password' }) etc.

    // If your ShowHideEyeIcon doesn't have an accessible role or label, you can use:
    // const eyeIcon = canvas.getByTestId('someTestId')
    // Make sure you set data-testid in your icon or container.

    await userEvent.click(eyeIcon)
    expect(input.type).toBe('text')
  },
}

/**
 * 2) With Placeholder
 */
export const WithPlaceholder: Story = {
  args: {
    label: 'Enter your password',
    placeholder: '********',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText(
      'Enter your password'
    ) as HTMLInputElement
    // Confirm the placeholder is "********"
    expect(input.placeholder).toBe('********')
  },
}

/**
 * 3) Custom Colors
 */
export const CustomColors: Story = {
  args: {
    label: 'Custom Colors',
    backgroundcolor: '#f3e5f5', // a light purple
    outlinecolor: '#ab47bc', // a deeper purple
    fontcolor: '#4a148c', // an even darker purple
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Custom Colors') as HTMLInputElement
    // Type in some password
    await userEvent.type(input, 'mySecret123')
    expect(input.value).toBe('mySecret123')
  },
}

/**
 * 4) Disabled
 */
export const DisabledField: Story = {
  args: {
    label: 'Disabled Password',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Disabled Password') as HTMLInputElement
    // Ensure it's disabled
    expect(input).toBeDisabled()
  },
}

/**
 * 5) Controlled by external state (example)
 *    This scenario demonstrates how you might control the PasswordField externally,
 *    though in practice you'd likely do so in your actual React app, not just a story.
 */
export const ControlledExternalState: Story = {
  args: {
    label: 'Controlled Password',
    // We'll just simulate an "onChange" and log the typed value:
    onChange: e => {
      console.log('Password changed =>', e.target.value)
    },
  },
  // You can add interactions here if you want to type, toggle visibility, etc.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText(
      'Controlled Password'
    ) as HTMLInputElement
    // Type a password
    await userEvent.type(input, 'External123')
    expect(input.value).toBe('External123')
  },
}
