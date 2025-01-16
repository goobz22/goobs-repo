// src/components/ProjectBoard/projectboard.stories.tsx

import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, expect } from '@storybook/test'
import ProjectBoard, {
  ProjectBoardProps,
  Task,
  RawStatus,
  RawSubStatus,
  RawTopic,
  RawQueue,
  RawArticle,
  RawCustomer,
  RawEmployee,
  RawSeverityLevel,
  CompanyInfo,
} from './index'
import AddTask, { AddTaskProps } from './AddTask/client'
import ManageTask, { ManageTaskProps } from './ManageTask/client'
import ShowTask, { ShowTaskProps } from './ShowTask/client'

/**
 * We define a single default export referencing the ProjectBoard as the main component.
 * We'll create multiple stories: some show ProjectBoard usage, some show the popups (AddTask, ManageTask, ShowTask) standalone.
 */
const meta: Meta<typeof ProjectBoard> = {
  title: 'Components/ProjectBoard',
  component: ProjectBoard,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof ProjectBoard>

/**
 * Sample "raw" data arrays to pass into ProjectBoard or popups.
 */
const sampleStatuses: RawStatus[] = [
  { _id: 'stat-1', status: 'Open', description: 'Open tasks' },
  { _id: 'stat-2', status: 'Closed', description: 'Closed tasks' },
]
const sampleSubStatuses: RawSubStatus[] = [
  { _id: 'sub-1', subStatus: 'Pending Info', description: 'Waiting on info' },
  { _id: 'sub-2', subStatus: 'In Progress', description: 'Actively working' },
]
const sampleTopics: RawTopic[] = [
  { _id: 'topic-1', topic: 'Frontend' },
  { _id: 'topic-2', topic: 'Backend' },
]
const sampleQueues: RawQueue[] = [
  { _id: 'queue-1', queueName: 'Tier 1 Support' },
  { _id: 'queue-2', queueName: 'Tier 2 Support' },
]
const sampleArticles: RawArticle[] = [
  { _id: 'article-1', articleTitle: 'Setup Guide' },
  { _id: 'article-2', articleTitle: 'Troubleshooting FAQ' },
]
const sampleCustomers: RawCustomer[] = [
  { _id: 'cust-1', firstName: 'Alice', lastName: 'Wonder' },
  { _id: 'cust-2', firstName: 'Bob', lastName: 'Builder' },
]
const sampleEmployees: RawEmployee[] = [
  { _id: 'emp-1', firstName: 'John', lastName: 'Doe' },
  { _id: 'emp-2', firstName: 'Jane', lastName: 'Smith' },
]
const sampleSeverityLevels: RawSeverityLevel[] = [
  { _id: 'sev-1', severityLevel: 1, description: 'Low severity' },
  { _id: 'sev-2', severityLevel: 5, description: 'High severity' },
]
const sampleCompany: CompanyInfo = {
  _id: 'co-123',
  companyName: 'Acme Inc.',
}

/**
 * Some sample tasks to display in the board.
 */
const sampleTasks: Task[] = [
  {
    _id: 'task-101',
    title: 'Fix login bug',
    description: 'Users cannot log in under certain conditions.',
    severityId: 'sev-2', // referencing a high severity
    statusId: 'stat-1', // referencing "Open"
    substatusId: 'sub-1', // referencing "Pending Info"
    topicIds: ['topic-1'],
    createdAt: new Date(),
  },
  {
    _id: 'task-102',
    title: 'Add new dashboard feature',
    description: 'Implement a new chart in the dashboard.',
    severityId: 'sev-1',
    statusId: 'stat-1',
    substatusId: 'sub-2', // referencing "In Progress"
    topicIds: ['topic-2'],
  },
  {
    _id: 'task-103',
    title: 'Update docs',
    description: 'Improve the documentation for deployment steps.',
    severityId: 'sev-1',
    statusId: 'stat-2', // "Closed"
    substatusId: 'sub-2',
    topicIds: ['topic-1', 'topic-2'],
  },
]

/**
 * Some sample columns for each board type scenario.
 */
const sampleStatusColumns = [
  { _id: 'stat-1', title: 'Open', description: 'Open tasks or tickets' },
  { _id: 'stat-2', title: 'Closed', description: 'Closed tasks' },
]
const sampleSeverityColumns = [
  { _id: 'sev-1', title: 'Low', description: 'Low severity tasks' },
  { _id: 'sev-2', title: 'High', description: 'High severity tasks' },
]
const sampleSubStatusColumns = [
  { _id: 'sub-1', title: 'Pending Info', description: 'Waiting for info' },
  { _id: 'sub-2', title: 'In Progress', description: 'Actively in progress' },
]
const sampleTopicColumns = [
  { _id: 'topic-1', title: 'Frontend', description: 'UI tasks' },
  { _id: 'topic-2', title: 'Backend', description: 'Server tasks' },
]

/**
 * 1) Basic "status" board
 */
export const BasicStatusBoard: Story = {
  name: 'Basic Board (Status-based)',
  args: {
    variant: 'company',
    boardType: 'status',
    company: sampleCompany,
    columns: sampleStatusColumns,
    tasks: sampleTasks,
    rawStatuses: sampleStatuses,
    rawSubStatuses: sampleSubStatuses,
    rawTopics: sampleTopics,
    rawQueues: sampleQueues,
    rawArticles: sampleArticles,
    rawCustomers: sampleCustomers,
    rawEmployees: sampleEmployees,
    rawSeverityLevels: sampleSeverityLevels,
  } as ProjectBoardProps,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Check for columns
    expect(canvas.getByText('Open')).toBeInTheDocument()
    expect(canvas.getByText('Closed')).toBeInTheDocument()

    // Check for a sample task
    expect(canvas.getByText('Fix login bug')).toBeInTheDocument()

    // Try selecting a task
    await userEvent.click(canvas.getByText('Fix login bug'))
  },
}

/**
 * 2) Severity-based board
 *    No user interactions => remove `async`.
 */
export const SeverityBoard: Story = {
  name: 'Severity Board',
  args: {
    variant: 'administrator',
    boardType: 'severityLevel',
    company: sampleCompany,
    columns: sampleSeverityColumns,
    tasks: sampleTasks,
    rawStatuses: sampleStatuses,
    rawSubStatuses: sampleSubStatuses,
    rawTopics: sampleTopics,
    rawQueues: sampleQueues,
    rawArticles: sampleArticles,
    rawCustomers: sampleCustomers,
    rawEmployees: sampleEmployees,
    rawSeverityLevels: sampleSeverityLevels,
    onUpdateTask: ({ companyId, _id, input }) => {
      console.log(
        `onUpdateTask called => companyId: ${companyId}, taskId: ${_id}, updates: `,
        input
      )
    },
  } as ProjectBoardProps,
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Check for columns "Low" / "High"
    expect(canvas.getByText('Low')).toBeInTheDocument()
    expect(canvas.getByText('High')).toBeInTheDocument()
  },
}

/**
 * 3) SubStatus-based board
 *    No user interactions => no `play` needed.
 */
export const SubStatusBoard: Story = {
  name: 'SubStatus Board',
  args: {
    variant: 'customer',
    boardType: 'subStatus',
    company: sampleCompany,
    columns: sampleSubStatusColumns,
    tasks: sampleTasks,
    rawStatuses: sampleStatuses,
    rawSubStatuses: sampleSubStatuses,
    rawTopics: sampleTopics,
    rawQueues: sampleQueues,
    rawArticles: sampleArticles,
    rawCustomers: sampleCustomers,
    rawEmployees: sampleEmployees,
    rawSeverityLevels: sampleSeverityLevels,
  } as ProjectBoardProps,
}

/**
 * 4) Topic-based board
 *    No user interactions => no `play` needed.
 */
export const TopicBoard: Story = {
  name: 'Topic Board',
  args: {
    variant: 'company',
    boardType: 'topic',
    company: sampleCompany,
    columns: sampleTopicColumns,
    tasks: sampleTasks,
    rawStatuses: sampleStatuses,
    rawSubStatuses: sampleSubStatuses,
    rawTopics: sampleTopics,
    rawQueues: sampleQueues,
    rawArticles: sampleArticles,
    rawCustomers: sampleCustomers,
    rawEmployees: sampleEmployees,
    rawSeverityLevels: sampleSeverityLevels,
  } as ProjectBoardProps,
}

/* --------------------------------------------------------------------------
   POPUP COMPONENT STORIES
   We'll pass in minimal props to demonstrate usage. 
   We override `render` to show each popup alone (AddTask, ManageTask, ShowTask).
------------------------------------------------------------------------- */

/**
 * 5) AddTask (standalone)
 *    We do use user interactions => keep async.
 */
export const AddTaskPopup: StoryObj = {
  name: 'AddTask Popup (Standalone)',
  render: () => {
    const props: AddTaskProps = {
      open: true,
      onClose: () => console.log('AddTask onClose'),
      onSubmit: newTask => {
        console.log('AddTask onSubmit => newTask:', newTask)
      },
      variant: 'company', // or "customer" / "administrator"
      statuses: sampleStatuses,
      subStatuses: sampleSubStatuses,
      topics: sampleTopics,
      schedulingQueues: sampleQueues,
      knowledgebaseArticles: sampleArticles,
      customers: sampleCustomers,
      employees: sampleEmployees,
      severityLevels: sampleSeverityLevels,
    }
    return <AddTask {...props} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Check the presence of the "Submit" button
    expect(canvas.getByRole('button', { name: /Submit/i })).toBeInTheDocument()
    // Type a task title
    const titleField = canvas.getByLabelText('Task Title')
    await userEvent.type(titleField, 'My New Task')
    expect(titleField).toHaveValue('My New Task')
  },
}

/**
 * 6) ManageTask (standalone)
 *    We do user interactions => keep async.
 */
export const ManageTaskPopup: StoryObj = {
  name: 'ManageTask Popup (Standalone)',
  render: () => {
    const props: ManageTaskProps = {
      open: true,
      onClose: () => console.log('ManageTask onClose'),
      variant: 'customer', // or "company"/"administrator"
      // "company" or "administrator" might expect certain props:
      companyAccounts: [{ _id: 'co-123', companyName: 'Acme Inc.' }],
      administrators: [{ _id: 'adm-1', fullName: 'Jane Admin' }],

      employees: sampleEmployees,

      statuses: sampleStatuses,
      subStatuses: sampleSubStatuses,
      schedulingQueues: sampleQueues,
      severityLevels: sampleSeverityLevels,
      topics: sampleTopics,
      knowledgebaseArticles: sampleArticles,

      defaultTaskTitle: 'Existing Task Title',
      defaultTaskDescription: 'Existing Description',
      defaultNextActionDate: null,

      onSubmit: data => {
        console.log('ManageTask onSubmit => form data:', data)
      },
    }
    return <ManageTask {...props} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm "Existing Task Title" in the Title field
    const titleField = canvas.getByLabelText('Task Title')
    expect(titleField).toHaveValue('Existing Task Title')

    // Check "Save" button
    const saveBtn = canvas.getByRole('button', { name: /Save/i })
    await userEvent.click(saveBtn)
  },
}

/**
 * 7) ShowTask (standalone)
 *    We do user interactions => keep async.
 */
export const ShowTaskPopup: StoryObj = {
  name: 'ShowTask Popup (Standalone)',
  render: () => {
    const props: ShowTaskProps = {
      open: true,
      onClose: () => console.log('ShowTask onClose'),
      taskTitle: 'Sample Task Title',
      createdBy: 'John Doe',
      description: 'Lorem ipsum dolor sit amet...',
      comments: [
        {
          _id: 'comm-1',
          authorName: 'Alice',
          text: 'First comment here!',
        },
        {
          _id: 'comm-2',
          authorName: 'Bob',
          text: 'Another comment!',
        },
      ],
      topics: sampleTopics.map(t => t.topic),
      knowledgebaseArticles: sampleArticles.map(a => a.articleTitle),
      statuses: sampleStatuses,
      subStatuses: sampleSubStatuses,
      severityLevels: sampleSeverityLevels,
      schedulingQueues: sampleQueues,
      customers: sampleCustomers,
      employees: sampleEmployees,
    }
    return <ShowTask {...props} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Check for the title text
    expect(canvas.getByText('Sample Task Title')).toBeInTheDocument()
    // Check for a comment
    expect(canvas.getByText('First comment here!')).toBeInTheDocument()

    // Attempt "Comment" button
    const commentBtn = canvas.getByRole('button', { name: /Comment/i })
    await userEvent.click(commentBtn)
  },
}
