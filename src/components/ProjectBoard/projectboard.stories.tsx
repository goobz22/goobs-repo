// src/components/ProjectBoard/projectboard.stories.tsx

import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, expect } from '@storybook/test'
import ProjectBoard from './index'
import {
  ProjectBoardProps,
  RawStatus,
  RawSubStatus,
  RawTopic,
  RawQueue,
  RawArticle,
  RawCustomer,
  RawEmployee,
  RawSeverityLevel,
  CompanyInfo,
  Task,
} from './types'
import AddTask, { AddTaskProps, AddTaskVariant } from './AddTask/client'
import ManageTask, {
  ManageTaskProps,
  ManageTaskVariant,
} from './ManageTask/client'
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

/* --------------------------------------------------------------------------
   SAMPLE DATA FOR PROJECTBOARD + POPUPS
-------------------------------------------------------------------------- */

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

/* --------------------------------------------------------------------------
   1) PROJECT BOARD STORIES
-------------------------------------------------------------------------- */

/**
 * Board #1: Status-based
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
 * Board #2: Severity-based
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
    expect(canvas.getByText('Low')).toBeInTheDocument()
    expect(canvas.getByText('High')).toBeInTheDocument()
  },
}

/**
 * Board #3: SubStatus-based
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
 * Board #4: Topic-based
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
   2) ADDTASK POPUP STORIES (3 variants)
-------------------------------------------------------------------------- */

/** Base function to create an AddTask story with the given variant. */
function makeAddTaskStory(
  variant: AddTaskVariant,
  storyName: string
): StoryObj {
  return {
    name: storyName,
    render: () => {
      const props: AddTaskProps = {
        open: true,
        onClose: () => console.log('AddTask onClose'),
        onSubmit: newTask => {
          console.log(`[AddTask ${variant}] onSubmit => `, newTask)
        },
        variant,
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
      // Just ensure the "Create Task" button is present
      const createBtn = canvas.getByRole('button', { name: /Create Task/i })
      expect(createBtn).toBeInTheDocument()
      // Type something into "Task Title"
      const titleField = canvas.getByLabelText(/Task Title/i)
      await userEvent.type(titleField, `My ${variant} Task`)
      expect(titleField).toHaveValue(`My ${variant} Task`)
    },
  }
}

export const AddTaskPopup_Customer = makeAddTaskStory(
  'customer',
  'AddTask Popup - Customer Variant'
)
export const AddTaskPopup_Company = makeAddTaskStory(
  'company',
  'AddTask Popup - Company Variant'
)
export const AddTaskPopup_Administrator = makeAddTaskStory(
  'administrator',
  'AddTask Popup - Administrator Variant'
)

/* --------------------------------------------------------------------------
   3) MANAGETASK POPUP STORIES (3 variants)
-------------------------------------------------------------------------- */

/** Base function to create a ManageTask story with the given variant. */
function makeManageTaskStory(
  variant: ManageTaskVariant,
  storyName: string
): StoryObj {
  return {
    name: storyName,
    render: () => {
      const props: ManageTaskProps = {
        open: true,
        onClose: () => console.log(`[ManageTask ${variant}] onClose`),
        variant,
        // If variant='company' or 'administrator', pass these:
        companyAccounts: [{ _id: 'co-123', companyName: 'Acme Inc.' }],
        administrators: [{ _id: 'adm-1', fullName: 'Jane Admin' }],

        employees: sampleEmployees,
        statuses: sampleStatuses,
        subStatuses: sampleSubStatuses,
        schedulingQueues: sampleQueues,
        severityLevels: sampleSeverityLevels,
        topics: sampleTopics,
        knowledgebaseArticles: sampleArticles,

        defaultTaskTitle: `Existing Title [${variant}]`,
        defaultTaskDescription: `Existing Desc [${variant}]`,
        defaultNextActionDate: null,

        onSubmit: data => {
          console.log(`[ManageTask ${variant}] onSubmit => `, data)
        },
      }
      return <ManageTask {...props} />
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement)
      // Confirm the default title
      const titleField = canvas.getByLabelText(/Task Title/i)
      expect(titleField).toHaveValue(`Existing Title [${variant}]`)

      // Check "Save" button
      const saveBtn = canvas.getByRole('button', { name: /Save/i })
      await userEvent.click(saveBtn)
    },
  }
}

export const ManageTaskPopup_Customer = makeManageTaskStory(
  'customer',
  'ManageTask Popup - Customer Variant'
)
export const ManageTaskPopup_Company = makeManageTaskStory(
  'company',
  'ManageTask Popup - Company Variant'
)
export const ManageTaskPopup_Administrator = makeManageTaskStory(
  'administrator',
  'ManageTask Popup - Administrator Variant'
)

/* --------------------------------------------------------------------------
   4) SHOWTASK POPUP STORY
   (ShowTask has no "variant" so we just show it once)
-------------------------------------------------------------------------- */

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

      // For ShowTask these are simple string fields:
      status: 'Open',
      subStatus: 'Pending Info',
      severity: 'High',
      schedulingQueue: 'Tier 1 Support',
      topics: ['Frontend', 'Backend'],
      knowledgebaseArticles: ['Setup Guide', 'Troubleshooting FAQ'],
      teamMemberAssigned: 'Jane Smith',
      nextActionDate: '09/15/2023 - 8:30AM CST',

      onComment: text => console.log('ShowTask onComment =>', text),
      onCloseTask: () => console.log('ShowTask onCloseTask'),
      onEdit: () => console.log('ShowTask onEdit'),
      onDelete: () => console.log('ShowTask onDelete'),
      onDuplicate: () => console.log('ShowTask onDuplicate'),
    }
    return <ShowTask {...props} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Check for the title text
    expect(canvas.getByText('Sample Task Title')).toBeInTheDocument()
    // Check for a comment
    expect(canvas.getByText('First comment here!')).toBeInTheDocument()

    // Try the "Comment" button (just ensures it's present/clickable)
    const commentBtn = canvas.getByRole('button', { name: /Comment/i })
    await userEvent.click(commentBtn)
  },
}
