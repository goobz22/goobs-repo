// src/components/Accordion/accordion.stories.tsx

import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, expect } from '@storybook/test'
import { Accordion, AccordionSummary, AccordionDetails } from './index'
import Typography from '../Typography'

/**
 * Setup story metadata
 */
const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    a11y: {
      disable: false,
    },
  },
  // If you want color pickers or controls for specific props, you can define them in argTypes
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Accordion>

/**
 * Reusable child content
 */
const sampleContent = (
  <Typography
    fontvariant="merriparagraph"
    text="This is the accordion content."
  />
)

/**
 * 1) Basic single Accordion
 */
export const SingleAccordion: Story = {
  name: 'Single Accordion (collapsed by default)',
  render: args => (
    <Accordion {...args}>
      <AccordionSummary>Single Accordion</AccordionSummary>
      <AccordionDetails>{sampleContent}</AccordionDetails>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // 1. Verify that the accordion content is not visible initially
    expect(
      canvas.queryByText('This is the accordion content.')
    ).not.toBeInTheDocument()

    // 2. Click on the summary to expand
    await userEvent.click(canvas.getByText('Single Accordion'))

    // 3. Verify that the content is now visible
    expect(
      canvas.getByText('This is the accordion content.')
    ).toBeInTheDocument()
  },
}

/**
 * 2) Basic single Accordion (defaultExpanded)
 */
export const DefaultExpanded: Story = {
  name: 'Single Accordion (defaultExpanded)',
  render: args => (
    <Accordion defaultExpanded {...args}>
      <AccordionSummary>Default Expanded</AccordionSummary>
      <AccordionDetails>{sampleContent}</AccordionDetails>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The content should be visible initially because defaultExpanded is true
    expect(
      canvas.getByText('This is the accordion content.')
    ).toBeInTheDocument()
  },
}

/**
 * 3) Multiple Accordions
 */
export const MultipleAccordions: Story = {
  name: 'Multiple Accordions',
  render: args => (
    <>
      <Accordion {...args}>
        <AccordionSummary>First Item</AccordionSummary>
        <AccordionDetails>
          <Typography
            fontvariant="merriparagraph"
            text="Details for first item."
          />
        </AccordionDetails>
      </Accordion>
      <Accordion {...args}>
        <AccordionSummary>Second Item</AccordionSummary>
        <AccordionDetails>
          <Typography
            fontvariant="merriparagraph"
            text="Details for second item."
          />
        </AccordionDetails>
      </Accordion>
      <Accordion {...args}>
        <AccordionSummary>Third Item</AccordionSummary>
        <AccordionDetails>
          <Typography
            fontvariant="merriparagraph"
            text="Details for third item."
          />
        </AccordionDetails>
      </Accordion>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Initially, no details are visible
    expect(
      canvas.queryByText('Details for first item.')
    ).not.toBeInTheDocument()
    expect(
      canvas.queryByText('Details for second item.')
    ).not.toBeInTheDocument()
    expect(
      canvas.queryByText('Details for third item.')
    ).not.toBeInTheDocument()

    // Expand the second item
    await userEvent.click(canvas.getByText('Second Item'))
    expect(canvas.getByText('Details for second item.')).toBeInTheDocument()

    // Expand the first item
    await userEvent.click(canvas.getByText('First Item'))
    expect(canvas.getByText('Details for first item.')).toBeInTheDocument()

    // The second item should generally remain expanded unless the `Accordion` is configured otherwise
    expect(canvas.getByText('Details for second item.')).toBeInTheDocument()
  },
}

/**
 * 4) Nested Accordion
 */
export const NestedAccordion: Story = {
  name: 'Nested Accordion',
  render: args => (
    <Accordion {...args}>
      <AccordionSummary>Parent Accordion</AccordionSummary>
      <AccordionDetails>
        <Typography fontvariant="merriparagraph" text="Top-level content" />
        <Accordion {...args}>
          <AccordionSummary>Nested Accordion</AccordionSummary>
          <AccordionDetails>{sampleContent}</AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // The nested content is not initially visible
    expect(
      canvas.queryByText('This is the accordion content.')
    ).not.toBeInTheDocument()

    // Expand the parent
    await userEvent.click(canvas.getByText('Parent Accordion'))
    expect(canvas.getByText('Top-level content')).toBeInTheDocument()

    // Now expand the nested accordion
    await userEvent.click(canvas.getByText('Nested Accordion'))
    expect(
      canvas.getByText('This is the accordion content.')
    ).toBeInTheDocument()
  },
}

/**
 * 5) Custom styles
 */
export const CustomStyles: Story = {
  name: 'Custom Styled Accordion',
  render: args => (
    <Accordion
      sx={{
        border: '2px solid #4caf50',
        borderRadius: '8px',
        marginTop: '10px',
      }}
      {...args}
    >
      <AccordionSummary>Custom Styles</AccordionSummary>
      <AccordionDetails>
        <Typography
          fontvariant="merriparagraph"
          text="Look at this fancy border!"
        />
      </AccordionDetails>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Expand and verify
    await userEvent.click(canvas.getByText('Custom Styles'))
    expect(canvas.getByText('Look at this fancy border!')).toBeInTheDocument()
  },
}

/**
 * 6) Accordion with many lines of content
 */
export const LargeContent: Story = {
  name: 'Accordion With Large Content',
  render: args => (
    <Accordion {...args}>
      <AccordionSummary>Lots of Text</AccordionSummary>
      <AccordionDetails>
        <div>
          <Typography fontvariant="merriparagraph" text="Line 1" />
          <Typography fontvariant="merriparagraph" text="Line 2" />
          <Typography fontvariant="merriparagraph" text="Line 3" />
          <Typography fontvariant="merriparagraph" text="Line 4" />
          <Typography fontvariant="merriparagraph" text="Line 5" />
          <Typography fontvariant="merriparagraph" text="Line 6" />
          <Typography fontvariant="merriparagraph" text="Line 7" />
          <Typography fontvariant="merriparagraph" text="Line 8" />
          <Typography fontvariant="merriparagraph" text="Line 9" />
        </div>
      </AccordionDetails>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Expand
    await userEvent.click(canvas.getByText('Lots of Text'))
    // Confirm a few lines
    expect(canvas.getByText('Line 1')).toBeInTheDocument()
    expect(canvas.getByText('Line 9')).toBeInTheDocument()
  },
}

/**
 * 7) Disabled Accordion
 */
export const DisabledAccordion: Story = {
  name: 'Disabled Accordion',
  render: args => (
    <Accordion disabled {...args}>
      <AccordionSummary>Cannot Expand</AccordionSummary>
      <AccordionDetails>{sampleContent}</AccordionDetails>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Try to expand
    await userEvent.click(canvas.getByText('Cannot Expand'))
    // Content should remain hidden
    expect(
      canvas.queryByText('This is the accordion content.')
    ).not.toBeInTheDocument()
  },
}

/**
 * 8) Controlled Accordion
 *    Example scenario of controlling the expanded state from outside.
 *    This is purely illustrative; the 'expanded' prop can be toggled using a button or state in a real app.
 */
export const ControlledAccordion: Story = {
  name: 'Controlled Accordion (toggle via props)',
  render: () => {
    const [isExpanded, setIsExpanded] = React.useState(false)

    return (
      <>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          Toggle Accordion
        </button>

        <Accordion expanded={isExpanded}>
          <AccordionSummary>Controlled Accordion</AccordionSummary>
          <AccordionDetails>
            <Typography
              fontvariant="merriparagraph"
              text="This is controlled externally."
            />
          </AccordionDetails>
        </Accordion>
      </>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Initially hidden
    expect(
      canvas.queryByText('This is controlled externally.')
    ).not.toBeInTheDocument()

    // Click the external toggle button
    await userEvent.click(
      canvas.getByRole('button', { name: 'Toggle Accordion' })
    )

    // Now the content should appear
    expect(
      canvas.getByText('This is controlled externally.')
    ).toBeInTheDocument()

    // Click again to hide
    await userEvent.click(
      canvas.getByRole('button', { name: 'Toggle Accordion' })
    )
    expect(
      canvas.queryByText('This is controlled externally.')
    ).not.toBeInTheDocument()
  },
}
