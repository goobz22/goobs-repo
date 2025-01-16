// src/components/ComplexTextEditor/editor.stories.tsx

import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import ComplexTextEditor from './index'

/**
 * Helper for minimal onChange usage
 */
const noOpOnChange = (val: string) => {
  console.log('TextEditor onChange =>', val)
}

/**
 * Default metadata for Storybook
 */
const meta: Meta<typeof ComplexTextEditor> = {
  title: 'Components/ComplexTextEditor',
  component: ComplexTextEditor,
  parameters: {
    a11y: { disable: false },
  },
}
export default meta

type Story = StoryObj<typeof ComplexTextEditor>

/**
 * 1) Minimal usage: simple mode, no label
 */
export const BasicSimple: Story = {
  name: 'Basic (Simple)',
  args: {
    value: 'Hello world!',
    editorType: 'simple',
    onChange: noOpOnChange,
  },
  // Kept async because we use await userEvent.type
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm the text "Hello world!"
    expect(canvas.getByDisplayValue('Hello world!')).toBeInTheDocument()

    // Type " - edited"
    await userEvent.type(canvas.getByDisplayValue('Hello world!'), ' - edited')
    expect(
      canvas.getByDisplayValue('Hello world! - edited')
    ).toBeInTheDocument()
  },
}

/**
 * 2) With label and accordion = false
 *    Still "simple" editor
 *    - No userEvent calls => remove async
 */
export const LabeledSimple: Story = {
  args: {
    label: 'Simple Editor Label',
    value: 'Some text here',
    editorType: 'simple',
    onChange: noOpOnChange,
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The label "Simple Editor Label" should be rendered as well
    expect(canvas.getByText('Simple Editor Label')).toBeInTheDocument()

    // Check the text
    expect(canvas.getByDisplayValue('Some text here')).toBeInTheDocument()
  },
}

/**
 * 3) Complex mode (starting with "simple" internally, but toolbar toggles are visible).
 */
export const ComplexMode: Story = {
  args: {
    value:
      'Start with complex but show toolbar toggles (simple vs rich vs markdown).',
    editorType: 'complex',
    onChange: noOpOnChange,
  },
  // Kept async because we use await userEvent.click
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The text is in the "simple" sub-mode initially
    expect(
      canvas.getByDisplayValue(
        'Start with complex but show toolbar toggles (simple vs rich vs markdown).'
      )
    ).toBeInTheDocument()

    // The top toolbar has toggle buttons: "Simple", "Rich Text", "Markdown"
    expect(canvas.getByRole('button', { name: /simple/i })).toBeInTheDocument()
    expect(
      canvas.getByRole('button', { name: /rich text/i })
    ).toBeInTheDocument()
    expect(
      canvas.getByRole('button', { name: /markdown/i })
    ).toBeInTheDocument()

    // Switch to "Markdown" mode (for demonstration)
    await userEvent.click(canvas.getByRole('button', { name: /markdown/i }))
    // The editor re-renders in "markdown" sub-mode
    // No direct assertion, but no crash indicates success
  },
}

/**
 * 4) Accordion usage
 *    If accordion is true, the editor is inside an expandable panel
 */
export const WithAccordion: Story = {
  args: {
    label: 'Accordion Editor Label',
    value: 'Some initial text in an accordion panel',
    editorType: 'complex',
    accordion: true,
    onChange: noOpOnChange,
  },
  // Kept async because we use await userEvent.click
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The label is the accordion summary
    expect(canvas.getByText('Accordion Editor Label')).toBeInTheDocument()

    // The content is initially collapsed. Expand by clicking
    await userEvent.click(canvas.getByText('Accordion Editor Label'))

    // Now "Some initial text in an accordion panel" is visible in the editor
    expect(
      canvas.getByDisplayValue('Some initial text in an accordion panel')
    ).toBeInTheDocument()
  },
}

/**
 * 5) Basic markdown scenario
 *    - No userEvent calls => remove async
 */
export const MarkdownMode: Story = {
  args: {
    value: '**Bold** text, *italic* text',
    editorType: 'markdown',
    onChange: noOpOnChange,
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // If "markdown" is truly separate, we might see a <textarea> or something
    // If your code defaults to "simple", we see the text in a <TextField>
    expect(
      canvas.getByDisplayValue('**Bold** text, *italic* text')
    ).toBeInTheDocument()
  },
}

/**
 * 6) Large text scenario with 10 rows
 *    - No userEvent calls => remove async
 */
export const LargeText: Story = {
  args: {
    label: 'Large Text Editor',
    value:
      'Lots of text\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6\nLine 7\nLine 8\nLine 9\nLine 10',
    editorType: 'simple',
    minRows: 10,
    onChange: noOpOnChange,
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirms the multi-line text is present
    expect(canvas.getByDisplayValue(/Lots of text/)).toBeInTheDocument()
    // We won't do a robust check for each line, but we ensure no error occurs
  },
}
