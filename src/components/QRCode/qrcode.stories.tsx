// src/components/QRCode/qrcode.stories.tsx

import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import QRCodeComponent, { QRCodeProps } from './index'

/**
 * Define Storybook metadata for the QRCodeComponent.
 */
const meta: Meta<typeof QRCodeComponent> = {
  title: 'Components/QRCode',
  component: QRCodeComponent,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof QRCodeComponent>

/**
 * 1) Basic usage
 */
export const Basic: Story = {
  name: 'Basic Usage',
  args: {
    username: 'john.doe',
    appName: 'MyApplication',
  } as QRCodeProps,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Check for the "Secret:" text in the component
    expect(canvas.getByText(/Secret:/i)).toBeInTheDocument()
  },
}

/**
 * 2) With Custom Title
 */
export const WithTitle: Story = {
  args: {
    username: 'jane.doe',
    appName: 'AwesomeApp',
    title: 'Scan This Code',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm we see our title text
    expect(canvas.getByText(/scan this code/i)).toBeInTheDocument()
  },
}

/**
 * 3) Larger Size
 */
export const LargeSize: Story = {
  args: {
    username: 'big.qr',
    appName: 'LargeApp',
    size: 400,
    title: 'Large QR Example',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // We won't measure pixel size, but we confirm the text
    expect(canvas.getByText('Large QR Example')).toBeInTheDocument()
  },
}

/**
 * 4) On Secret Generated Callback
 *    We show how to capture the secret in a callback
 */
export const WithSecretCallback: Story = {
  args: {
    username: 'callback.user',
    appName: 'CallbackApp',
    onSecretGenerated: secret => {
      // This just logs to the console, but you could do something more
      // such as storing it or displaying it in the UI
      console.log('[QRCode] Secret generated =>', secret)
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Secret should appear
    expect(canvas.getByText(/Secret:/)).toBeInTheDocument()
    // There's no direct assertion for the console log, but we ensure no crash
  },
}

/**
 * 5) Custom Styles
 */
export const CustomStyles: Story = {
  args: {
    username: 'styled.user',
    appName: 'StyledApp',
    title: 'Custom Styled QR',
    size: 300,
    sx: {
      backgroundColor: '#f0f4c3',
      borderRadius: 2,
      p: 4,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm the title is present
    expect(canvas.getByText('Custom Styled QR')).toBeInTheDocument()
  },
}
