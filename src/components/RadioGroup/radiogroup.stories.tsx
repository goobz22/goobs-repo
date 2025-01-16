// src/components/RadioGroup/radiogroup.stories.tsx

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import RadioGroup, { RadioGroupProps, RadioOption } from './index'

/**
 * Example options to be used across stories
 */
const sampleOptions: RadioOption[] = [
  { label: 'Option A' },
  { label: 'Option B' },
  { label: 'Option C' },
]

/**
 * Setup Storybook metadata
 */
const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof RadioGroup>

/**
 * 1) Basic usage
 */
export const Basic: Story = {
  args: {
    name: 'basicExample',
    labelText: 'Choose an Option',
    options: sampleOptions,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Verify label text
    expect(canvas.getByText('Choose an Option')).toBeInTheDocument()

    // The group has three radio options: Option A, B, C
    expect(canvas.getByText('Option A')).toBeInTheDocument()
    expect(canvas.getByText('Option B')).toBeInTheDocument()
    expect(canvas.getByText('Option C')).toBeInTheDocument()
  },
}

/**
 * 2) With a default selected value
 */
export const WithDefaultValue: Story = {
  args: {
    name: 'defaultExample',
    labelText: 'Select your favorite',
    defaultValue: 'Option B',
    options: sampleOptions,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm "Option B" is selected by default
    const optionB = canvas.getByLabelText('Option B') as HTMLInputElement
    expect(optionB).toBeChecked()
  },
}

/**
 * 3) Custom Label Styles
 *    Demonstrates per-option fontColor / fontVariant
 */
export const CustomLabelStyles: Story = {
  args: {
    name: 'customStyles',
    labelText: 'Which flavor do you prefer?',
    options: [
      { label: 'Vanilla', fontColor: '#3f51b5', fontVariant: 'merriparagraph' },
      {
        label: 'Chocolate',
        fontColor: '#f44336',
        fontVariant: 'merriparagraph',
      },
      {
        label: 'Strawberry',
        fontColor: '#009688',
        fontVariant: 'merriparagraph',
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The label text should be visible
    expect(canvas.getByText('Which flavor do you prefer?')).toBeInTheDocument()

    // Check presence of each custom-labeled item
    expect(canvas.getByText('Vanilla')).toBeInTheDocument()
    expect(canvas.getByText('Chocolate')).toBeInTheDocument()
    expect(canvas.getByText('Strawberry')).toBeInTheDocument()
  },
}

/**
 * 4) Label variant & color from the top-level props
 */
export const TopLevelLabelStyling: Story = {
  args: {
    name: 'topLevelStyling',
    labelText: 'Survey Question',
    labelFontColor: '#673ab7', // Deep Purple
    options: sampleOptions,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm the top-level label text
    expect(canvas.getByText('Survey Question')).toBeInTheDocument()
  },
}

/**
 * 5) Interaction: Selecting an Option
 */
export const SelectingOption: Story = {
  args: {
    name: 'interactionExample',
    labelText: 'Pick a letter',
    options: sampleOptions,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Initially none are selected
    const optionA = canvas.getByLabelText('Option A') as HTMLInputElement
    const optionB = canvas.getByLabelText('Option B') as HTMLInputElement
    const optionC = canvas.getByLabelText('Option C') as HTMLInputElement

    expect(optionA).not.toBeChecked()
    expect(optionB).not.toBeChecked()
    expect(optionC).not.toBeChecked()

    // Click on Option C
    await userEvent.click(optionC)
    expect(optionC).toBeChecked()

    // Option A & B remain unchecked
    expect(optionA).not.toBeChecked()
    expect(optionB).not.toBeChecked()
  },
}
