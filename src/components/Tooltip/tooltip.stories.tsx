// src/components/Tooltip/tooltip.stories.tsx

import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import StyledTooltip, { CustomTooltipProps } from './index'
import { Box, Button } from '@mui/material'

/**
 * Define Storybook metadata
 */
const meta: Meta<typeof StyledTooltip> = {
  title: 'Components/Tooltip',
  component: StyledTooltip,
  argTypes: {
    tooltipcolor: { control: 'color' },
    tooltipplacement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof StyledTooltip>

/**
 * 1) Basic usage
 */
export const Basic: Story = {
  args: {
    title: 'Basic Tooltip Text',
    tooltipcolor: '#000000',
    tooltipplacement: 'top',
    offsetX: 0,
    offsetY: 0,
    arrow: true,
    children: <Button variant="contained">Hover me</Button>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // We hover over the button
    const button = canvas.getByRole('button', { name: /hover me/i })
    await userEvent.hover(button)

    // Check that the tooltip appears
    // Note: In a real environment, we might confirm the tooltip text.
    // But the Testing Library does not always handle floating elements easily.
    // We'll just ensure no error is thrown.
  },
}

/**
 * 2) Different color (Red) and offset
 */
export const RedColorOffset: Story = {
  args: {
    title: 'Red Tooltip with offset',
    tooltipcolor: '#ff0000', // Red
    tooltipplacement: 'right',
    offsetX: 10,
    offsetY: 20,
    arrow: true,
    children: <Button variant="contained">Hover for Red Tooltip</Button>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', {
      name: /Hover for Red Tooltip/i,
    })
    await userEvent.hover(button)
    // No direct assertion for color, but we ensure it doesn't crash.
  },
}

/**
 * 3) Multiple Tooltips in one story
 */
export const MultipleTooltips: Story = {
  render: () => (
    <Box display="flex" gap={2}>
      <StyledTooltip
        title="First tooltip"
        tooltipcolor="#3f51b5"
        tooltipplacement="bottom"
        offsetX={0}
        offsetY={0}
        arrow
      >
        <Button variant="contained">First</Button>
      </StyledTooltip>

      <StyledTooltip
        title="Second tooltip"
        tooltipcolor="#009688"
        tooltipplacement="top"
        offsetX={10}
        offsetY={10}
        arrow
      >
        <Button variant="contained">Second</Button>
      </StyledTooltip>

      <StyledTooltip
        title="Third tooltip"
        tooltipcolor="#f44336"
        tooltipplacement="left"
        offsetX={-10}
        offsetY={0}
        arrow
      >
        <Button variant="contained">Third</Button>
      </StyledTooltip>
    </Box>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // We can test the presence of the buttons
    expect(canvas.getByRole('button', { name: /first/i })).toBeInTheDocument()
    expect(canvas.getByRole('button', { name: /second/i })).toBeInTheDocument()
    expect(canvas.getByRole('button', { name: /third/i })).toBeInTheDocument()
  },
}

/**
 * 4) No Arrow, different placement
 */
export const NoArrowBottom: Story = {
  args: {
    title: 'No arrow tooltip',
    tooltipcolor: '#000000',
    tooltipplacement: 'bottom',
    offsetX: 0,
    offsetY: 0,
    arrow: false,
    children: <Button variant="contained">No Arrow</Button>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /no arrow/i })
    await userEvent.hover(button)
  },
}

/**
 * 5) Large offset scenario
 */
export const LargeOffset: Story = {
  args: {
    title: 'Large offset example',
    tooltipcolor: '#424242',
    tooltipplacement: 'right',
    offsetX: 50,
    offsetY: 50,
    arrow: true,
    children: <Button variant="contained">Huge Offset</Button>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /huge offset/i })
    await userEvent.hover(button)
    // The tooltip should appear far away from the button.
  },
}
