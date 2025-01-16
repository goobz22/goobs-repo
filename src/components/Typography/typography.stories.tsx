// src/components/Typography/typography.stories.tsx

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import Typography, { TypographyProps } from './index'
import { Box } from '@mui/material'

/**
 * Create Storybook metadata
 */
const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof Typography>

/**
 * 1) Basic usage with default text (no custom color)
 */
export const Basic: Story = {
  args: {
    text: 'Hello, world!',
    fontvariant: 'arapeyh3', // Using "arapey" family with "h3" variant
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The text "Hello, world!" should appear
    expect(canvas.getByText('Hello, world!')).toBeInTheDocument()
  },
}

/**
 * 2) Inter h1 with custom color
 */
export const InterH1CustomColor: Story = {
  args: {
    text: 'Large heading in Inter',
    fontvariant: 'interh1', // "inter" + "h1"
    fontcolor: '#d32f2f', // Red
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The text "Large heading in Inter" should appear in red color
    expect(canvas.getByText('Large heading in Inter')).toBeInTheDocument()
  },
}

/**
 * 3) Merriweather paragraph
 */
export const MerriParagraph: Story = {
  args: {
    text: 'This is a Merriweather paragraph with normal weight.',
    fontvariant: 'merriparagraph',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(
      canvas.getByText('This is a Merriweather paragraph with normal weight.')
    ).toBeInTheDocument()
  },
}

/**
 * 4) Additional subvariants (helperfooter, helperheader)
 */
export const SubVariants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography text="Arapey Helperheader" fontvariant="arapeyhelperheader" />
      <Typography text="Inter Helperfooter" fontvariant="interhelperfooter" />
      <Typography text="Merri H6" fontvariant="merrih6" />
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText('Arapey Helperheader')).toBeInTheDocument()
    expect(canvas.getByText('Inter Helperfooter')).toBeInTheDocument()
    expect(canvas.getByText('Merri H6')).toBeInTheDocument()
  },
}

/**
 * 5) Using 'variant' prop from MUI (fallback)
 *    If you pass variant="h4" and no fontvariant, it uses MUI default.
 */
export const UsingMuiVariantFallback: Story = {
  args: {
    text: 'Default MUI h4 fallback',
    variant: 'h4', // Uses MUI's built-in variant
    fontcolor: '#1976d2', // Blue
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText('Default MUI h4 fallback')).toBeInTheDocument()
  },
}

/**
 * 6) Combining text & children
 */
export const TextAndChildren: Story = {
  render: () => (
    <Typography fontvariant="merriparagraph" fontcolor="#9c27b0">
      This content is from <strong>children</strong>, plus text prop:
      <em style={{ marginLeft: '8px', color: '#000' }}>Hello!</em>
    </Typography>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(
      canvas.getByText('This content is from children, plus text prop:Hello!')
    ).toBeInTheDocument()
  },
  // No explicit args since we override render
}

/**
 * 7) Interactive test: clicking or focusing (optional)
 *    Typically for typography, we don't do much interaction, but let's show an example
 */
export const Interactive: Story = {
  args: {
    text: 'Click me!',
    fontvariant: 'interh5',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textEl = canvas.getByText('Click me!')
    // We'll do a quick user click
    await userEvent.click(textEl)
    // No state changes, but ensures no error occurs
  },
}
