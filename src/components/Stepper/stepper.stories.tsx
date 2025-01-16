// src/components/Stepper/stepper.stories.tsx

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import { CustomStepper, CustomStepperProps } from './index'

// --------------------------------------------------------------------------
// Sample Steps
// --------------------------------------------------------------------------
const basicSteps: CustomStepperProps['steps'] = [
  {
    stepNumber: 1,
    label: 'Step One',
    stepLink: '#step1',
    status: 'completed',
  },
  {
    stepNumber: 2,
    label: 'Step Two',
    stepLink: '#step2',
    status: 'active',
  },
  {
    stepNumber: 3,
    label: 'Step Three',
    stepLink: '#step3',
    status: 'inactive',
  },
]

const errorSteps: CustomStepperProps['steps'] = [
  {
    stepNumber: 1,
    label: 'First Step',
    stepLink: '#first',
    status: 'completed',
  },
  {
    stepNumber: 2,
    label: 'Second Step (Error)',
    stepLink: '#second',
    status: 'error',
    description: 'Something went wrong here!',
  },
  {
    stepNumber: 3,
    label: 'Final Step',
    stepLink: '#final',
    status: 'inactive',
  },
]

const withDescriptions: CustomStepperProps['steps'] = [
  {
    stepNumber: 1,
    label: 'Initial',
    stepLink: '/initial',
    status: 'completed',
    description: 'All good so far.',
  },
  {
    stepNumber: 2,
    label: 'Middle',
    stepLink: '/middle',
    status: 'active',
    description: 'Ongoing step with a helpful tooltip.',
  },
  {
    stepNumber: 3,
    label: 'Complete',
    stepLink: '/complete',
    status: 'inactive',
    description: 'Locked until the previous step is done.',
  },
]

const complexSteps: CustomStepperProps['steps'] = [
  {
    stepNumber: 1,
    label: 'Phase 1',
    stepLink: '#phase1',
    status: 'completed',
  },
  {
    stepNumber: 2,
    label: 'Phase 2',
    stepLink: '#phase2',
    status: 'completed',
    description: 'Successfully done Phase 2.',
  },
  {
    stepNumber: 3,
    label: 'Phase 3',
    stepLink: '#phase3',
    status: 'active',
  },
  {
    stepNumber: 4,
    label: 'Phase 4 (Locked)',
    stepLink: '#phase4',
    status: 'inactive',
    description: 'This is locked until Phase 3 completes.',
  },
  {
    stepNumber: 5,
    label: 'Phase 5 (Error)',
    stepLink: '#phase5',
    status: 'error',
    description: 'An error occurred here.',
  },
]

// --------------------------------------------------------------------------
// Storybook Config
// --------------------------------------------------------------------------
const meta: Meta<typeof CustomStepper> = {
  title: 'Components/Stepper',
  component: CustomStepper,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof CustomStepper>

/**
 * 1) Basic usage
 */
export const Basic: Story = {
  args: {
    steps: basicSteps,
    activeStep: 2, // The second step is active
    nonLinear: true,
    orientation: 'horizontal',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm we see "Step One", "Step Two", "Step Three"
    expect(canvas.getByText('Step One')).toBeInTheDocument()
    expect(canvas.getByText('Step Two')).toBeInTheDocument()
    expect(canvas.getByText('Step Three')).toBeInTheDocument()
  },
}

/**
 * 2) Steps with an error state
 */
export const WithErrorStep: Story = {
  args: {
    steps: errorSteps,
    activeStep: 2,
    nonLinear: true,
    orientation: 'horizontal',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Check for the label "Second Step (Error)" is in the DOM
    expect(canvas.getByText(/second step \(error\)/i)).toBeInTheDocument()

    // Hover or click the info icon for the second step's description if desired
    const errorIcon = canvas.queryByRole('button') // might need additional query if you want to test the tooltip
    // The rest depends on your DOM structure & how you prefer to test the tooltip
  },
}

/**
 * 3) With Descriptions (Tooltip icons)
 */
export const Descriptions: Story = {
  args: {
    steps: withDescriptions,
    activeStep: 2,
    orientation: 'vertical',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The step with description "Ongoing step with a helpful tooltip." should appear
    expect(canvas.getByText('Middle')).toBeInTheDocument()

    // If you'd like to test the tooltip:
    // 1) Find the info icon for "Middle" step
    // 2) userEvent.hover() or userEvent.click() to open the tooltip
  },
}

/**
 * 4) Complex scenario with multiple steps
 */
export const Complex: Story = {
  args: {
    steps: complexSteps,
    activeStep: 3, // Step 3 is active
    nonLinear: false, // For a more linear approach
    orientation: 'horizontal',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm "Phase 5 (Error)" is in the DOM
    expect(canvas.getByText('Phase 5 (Error)')).toBeInTheDocument()

    // "Phase 3" is active, so you might see a highlight or active style
    // Confirm the step is in the DOM
    expect(canvas.getByText('Phase 3')).toBeInTheDocument()
  },
}

/**
 * 5) Interactive: Switching Active Step
 *    Demonstrates how you'd handle switching active steps (though typically the parent would do so).
 */
export const Interactive: Story = {
  // We'll reuse "basicSteps", but let us handle active step in a local state
  render: args => {
    const [currentStep, setCurrentStep] = React.useState(1)

    const nextStep = () => {
      setCurrentStep(prev => Math.min(prev + 1, args.steps.length))
    }
    const prevStep = () => {
      setCurrentStep(prev => Math.max(prev - 1, 1))
    }

    return (
      <div>
        <CustomStepper {...args} activeStep={currentStep} />
        <div style={{ marginTop: '16px' }}>
          <button onClick={prevStep} disabled={currentStep <= 1}>
            Previous
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep >= args.steps.length}
            style={{ marginLeft: '8px' }}
          >
            Next
          </button>
        </div>
      </div>
    )
  },
  args: {
    steps: basicSteps,
    nonLinear: true,
    orientation: 'horizontal',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Initially, Step #1 (Step One) is active
    expect(canvas.getByText('Step One')).toBeInTheDocument()

    // "Next" button to move to step #2
    const nextBtn = canvas.getByRole('button', { name: 'Next' })
    await userEvent.click(nextBtn)
    // Now step #2 is active, you might test the style or check the console

    // "Previous" button to go back
    const prevBtn = canvas.getByRole('button', { name: 'Previous' })
    await userEvent.click(prevBtn)
    // Step #1 is active again
  },
}
