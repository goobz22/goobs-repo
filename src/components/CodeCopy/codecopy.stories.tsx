// src/components/CodeCopy/codecopy.stories.tsx

// Remove `import React from 'react'` because it's unused
import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import CodeCopy from './index'

/**
 * Rename the default export to avoid 'meta' naming conflicts
 */
const metaConfig: Meta<typeof CodeCopy> = {
  title: 'Components/CodeCopy',
  component: CodeCopy,
  argTypes: {
    language: {
      control: { type: 'select' },
      options: [
        'javascript',
        'typescript',
        'css',
        'html',
        'json',
        // Add or remove languages based on your highlight.js usage
      ],
    },
  },
}
export default metaConfig

/**
 * Create a type for our stories
 */
type Story = StoryObj<typeof CodeCopy>

/**
 * 1) Basic example with JavaScript code
 *    - We do `await userEvent.click()`, so keep `async`.
 */
export const BasicCode: Story = {
  args: {
    code: `function greet() {
  console.log("Hello, world!");
}`,
    language: 'javascript',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Check that the code text appears
    expect(canvas.getByText(/function greet/)).toBeInTheDocument()

    // Try copying
    const copyButton = canvas.getByRole('button', { name: /copy code/i })
    await userEvent.click(copyButton)
    // (Optional) Confirm "Code copied" message or other side effects
  },
}

/**
 * 2) TypeScript code sample
 *    - No `await`, so remove `async`.
 */
export const TypeScriptExample: Story = {
  args: {
    code: `interface Person {
  name: string;
  age: number;
}
const user: Person = { name: "Alice", age: 25 };`,
    language: 'typescript',
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Check that the interface text appears
    expect(canvas.getByText(/interface Person/)).toBeInTheDocument()
  },
}

/**
 * 3) JSON code sample
 *    - No `await`, so remove `async`.
 */
export const JSONExample: Story = {
  args: {
    code: `{
  "name": "example",
  "version": "1.0.0",
  "dependencies": {}
}`,
    language: 'json',
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm we see the JSON content
    expect(canvas.getByText(/"name": "example"/)).toBeInTheDocument()
  },
}

/**
 * 4) Large Code Block
 *    - No `await`, so remove `async`.
 */
export const LargeCodeBlock: Story = {
  args: {
    code: `// A large sample of code
function example() {
  // This is a multi-line sample
  const items = [1, 2, 3, 4, 5];
  items.forEach(item => {
    console.log(item);
  });
}
// Some more lines
class Test {
  constructor() {
    this.value = 42;
  }
  getValue() {
    return this.value;
  }
}`,
    language: 'javascript',
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Just check for a piece of text
    expect(canvas.getByText(/A large sample of code/)).toBeInTheDocument()
  },
}
