// src/components/Checkbox/checkbox.stories.tsx

import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import DataGridCheckbox from './index'

/**
 * Storybook metadata
 */
const meta: Meta<typeof DataGridCheckbox> = {
  title: 'Components/Checkbox',
  component: DataGridCheckbox,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof DataGridCheckbox>

/**
 * 1) Basic usage (unchecked by default)
 */
export const Basic: Story = {
  args: {
    checked: false,
    indeterminate: false,
    onChange: e => console.log('Basic onChange =>', e.target.checked),
    onClick: e => console.log('Basic onClick =>', e.type),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The checkbox is unchecked initially
    const checkbox = canvas.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()

    // We can click it
    await userEvent.click(checkbox)
    // The console logs "Basic onChange => true" and "Basic onClick => click"
  },
}

/**
 * 2) Pre-checked scenario
 */
export const Checked: Story = {
  args: {
    checked: true,
    onChange: e => console.log('Checked story =>', e.target.checked),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The checkbox is initially checked
    const checkbox = canvas.getByRole('checkbox')
    expect(checkbox).toBeChecked()

    // Clicking unchecks it
    await userEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  },
}

/**
 * 3) Indeterminate scenario
 */
export const Indeterminate: Story = {
  args: {
    checked: false,
    indeterminate: true,
    onChange: () => console.log('Indeterminate changed'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')
    // There's no built-in "toBeIndeterminate()" in Testing Library,
    // but we can confirm it has "aria-checked" = "mixed".
    expect(checkbox).toHaveAttribute('aria-checked', 'mixed')

    // Clicking it will check it
    await userEvent.click(checkbox)
    // Now it's checked
    expect(checkbox).toBeChecked()
  },
}

/**
 * 4) Disabled scenario
 */
export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    onChange: () => console.log('Disabled => onChange called'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')
    // It's checked but disabled
    expect(checkbox).toBeChecked()
    expect(checkbox).toBeDisabled()

    // Clicking won't change it
    await userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  },
}

/**
 * 5) OnClick vs OnChange
 *    This scenario prints logs so we can see which fires first.
 */
export const OnClickVsOnChange: Story = {
  args: {
    checked: false,
    onClick: e => console.log('onClick => event:', e.type),
    onChange: e => console.log('onChange => event:', e.target.checked),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')

    // Step 1: click it
    await userEvent.click(checkbox)
    // The logs show the order: onClick, then onChange
    expect(checkbox).toBeChecked()

    // Step 2: click again to uncheck
    await userEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  },
}
