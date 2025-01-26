// src/components/ProjectBoard/projectboard.stories.tsx

import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, expect } from '@storybook/test'
import ProjectBoard from './index'
import { ProjectBoardProps } from './types'
import { AddTaskProps, AddTaskVariant } from './forms/AddTask/client'
import { ShowTaskProps } from './forms/ShowTask/client'

// For standalone popups:
import AddTask from './forms/AddTask/client'
import ShowTask from './forms/ShowTask/client'

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

/* ----------------------------------------------------------------------------
   1) PROJECT BOARD STORIES
---------------------------------------------------------------------------- */

/**
 * Example #1: Status-based board
 * We provide real data (no placeholders).
 */
export const BasicStatusBoard: Story = {
  name: 'Basic Board (Status-based)',
  args: {
    variant: 'company',
    boardType: 'status',
    company: {
      _id: 'co-123',
      companyName: 'Acme Inc.',
    },
    columns: [
      { _id: 'stat-1', title: 'Open', description: 'Open tasks or tickets' },
      { _id: 'stat-2', title: 'Closed', description: 'Closed tasks' },
    ],
    tasks: [
      {
        _id: 'task-101',
        title: 'Fix login bug',
        description: 'Users cannot log in under certain conditions.',
        severityId: 'sev-2',
        statusId: 'stat-1',
        substatusId: 'sub-1',
        topicIds: ['topic-1'],
        createdAt: new Date(),
      },
      {
        _id: 'task-102',
        title: 'Add new dashboard feature',
        description: 'Implement a new chart in the dashboard.',
        severityId: 'sev-1',
        statusId: 'stat-1',
        substatusId: 'sub-2',
        topicIds: ['topic-2'],
      },
      {
        _id: 'task-103',
        title: 'Update docs',
        description: 'Improve the documentation for deployment steps.',
        severityId: 'sev-1',
        statusId: 'stat-2',
        substatusId: 'sub-2',
        topicIds: ['topic-1', 'topic-2'],
      },
    ],

    rawStatuses: [
      { _id: 'stat-1', status: 'Open', description: 'Open tasks' },
      { _id: 'stat-2', status: 'Closed', description: 'Closed tasks' },
    ],
    rawSubStatuses: [
      {
        _id: 'sub-1',
        subStatus: 'Pending Info',
        description: 'Waiting on info',
      },
      {
        _id: 'sub-2',
        subStatus: 'In Progress',
        description: 'Actively working',
      },
    ],
    rawTopics: [
      { _id: 'topic-1', topic: 'Frontend' },
      { _id: 'topic-2', topic: 'Backend' },
    ],
    rawQueues: [
      { _id: 'queue-1', queueName: 'Tier 1 Support' },
      { _id: 'queue-2', queueName: 'Tier 2 Support' },
    ],
    rawArticles: [
      { _id: 'article-1', articleTitle: 'Setup Guide' },
      { _id: 'article-2', articleTitle: 'Troubleshooting FAQ' },
    ],
    rawCustomers: [
      { _id: 'cust-1', firstName: 'Alice', lastName: 'Wonder' },
      { _id: 'cust-2', firstName: 'Bob', lastName: 'Builder' },
    ],
    rawEmployees: [
      { _id: 'emp-1', firstName: 'John', lastName: 'Doe' },
      { _id: 'emp-2', firstName: 'Jane', lastName: 'Smith' },
    ],
    rawSeverityLevels: [
      { _id: 'sev-1', severityLevel: 1, description: 'Low severity' },
      { _id: 'sev-2', severityLevel: 5, description: 'High severity' },
    ],

    // Provide callbacks:
    onComment: (text, taskId) =>
      console.log('[BasicStatusBoard] onComment =>', { text, taskId }),
    onEdit: data => console.log('[BasicStatusBoard] onEdit =>', data),
    onDelete: data => console.log('[BasicStatusBoard] onDelete =>', data),
    onDuplicate: data => console.log('[BasicStatusBoard] onDuplicate =>', data),
    onCloseTask: data => console.log('[BasicStatusBoard] onCloseTask =>', data),
    onEditComment: (commentId, newText, taskId) =>
      console.log('[BasicStatusBoard] onEditComment =>', {
        commentId,
        newText,
        taskId,
      }),
  } as ProjectBoardProps,

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Check for columns
    expect(canvas.getByText('Open')).toBeInTheDocument()
    expect(canvas.getByText('Closed')).toBeInTheDocument()

    // Check for sample tasks
    expect(canvas.getByText('Fix login bug')).toBeInTheDocument()

    // Click one to open (Show Task) in the preview
    await userEvent.click(canvas.getByText('Fix login bug'))
  },
}

/**
 * Example #2: Severity-based board
 */
export const SeverityBoard: Story = {
  name: 'Severity Board',
  args: {
    variant: 'administrator',
    boardType: 'severityLevel',
    company: {
      _id: 'co-123',
      companyName: 'Acme Inc.',
    },
    columns: [
      { _id: 'sev-1', title: 'Low', description: 'Low severity tasks' },
      { _id: 'sev-2', title: 'High', description: 'High severity tasks' },
    ],
    tasks: [
      {
        _id: 'task-101',
        title: 'Fix login bug',
        description: 'Users cannot log in under certain conditions.',
        severityId: 'sev-2',
        statusId: 'stat-1',
      },
      {
        _id: 'task-102',
        title: 'Add new dashboard feature',
        description: 'Implement a new chart in the dashboard.',
        severityId: 'sev-1',
        statusId: 'stat-1',
      },
      {
        _id: 'task-103',
        title: 'Update docs',
        description: 'Improve the documentation for deployment steps.',
        severityId: 'sev-1',
        statusId: 'stat-2',
      },
    ],
    rawStatuses: [
      { _id: 'stat-1', status: 'Open', description: 'Open tasks' },
      { _id: 'stat-2', status: 'Closed', description: 'Closed tasks' },
    ],
    rawSubStatuses: [
      {
        _id: 'sub-1',
        subStatus: 'Pending Info',
        description: 'Waiting on info',
      },
      {
        _id: 'sub-2',
        subStatus: 'In Progress',
        description: 'Actively working',
      },
    ],
    rawTopics: [
      { _id: 'topic-1', topic: 'Frontend' },
      { _id: 'topic-2', topic: 'Backend' },
    ],
    rawQueues: [
      { _id: 'queue-1', queueName: 'Tier 1 Support' },
      { _id: 'queue-2', queueName: 'Tier 2 Support' },
    ],
    rawArticles: [
      { _id: 'article-1', articleTitle: 'Setup Guide' },
      { _id: 'article-2', articleTitle: 'Troubleshooting FAQ' },
    ],
    rawCustomers: [
      { _id: 'cust-1', firstName: 'Alice', lastName: 'Wonder' },
      { _id: 'cust-2', firstName: 'Bob', lastName: 'Builder' },
    ],
    rawEmployees: [
      { _id: 'emp-1', firstName: 'John', lastName: 'Doe' },
      { _id: 'emp-2', firstName: 'Jane', lastName: 'Smith' },
    ],
    rawSeverityLevels: [
      { _id: 'sev-1', severityLevel: 1, description: 'Low severity' },
      { _id: 'sev-2', severityLevel: 5, description: 'High severity' },
    ],

    // Provide callbacks:
    onComment: (text, taskId) =>
      console.log('[SeverityBoard] onComment =>', { text, taskId }),
    onEdit: data => console.log('[SeverityBoard] onEdit =>', data),
    onDelete: data => console.log('[SeverityBoard] onDelete =>', data),
    onDuplicate: data => console.log('[SeverityBoard] onDuplicate =>', data),
    onCloseTask: data => console.log('[SeverityBoard] onCloseTask =>', data),
    onEditComment: (commentId, newText, taskId) =>
      console.log('[SeverityBoard] onEditComment =>', {
        commentId,
        newText,
        taskId,
      }),
  } as ProjectBoardProps,

  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText('Low')).toBeInTheDocument()
    expect(canvas.getByText('High')).toBeInTheDocument()
  },
}

/**
 * Example #3: SubStatus-based board
 */
export const SubStatusBoard: Story = {
  name: 'SubStatus Board',
  args: {
    variant: 'customer',
    boardType: 'subStatus',
    company: {
      _id: 'co-123',
      companyName: 'Acme Inc.',
    },
    columns: [
      { _id: 'sub-1', title: 'Pending Info', description: 'Waiting for info' },
      {
        _id: 'sub-2',
        title: 'In Progress',
        description: 'Actively in progress',
      },
    ],
    tasks: [
      {
        _id: 'task-101',
        title: 'Fix login bug',
        description: 'Users cannot log in under certain conditions.',
        severityId: 'sev-2',
        substatusId: 'sub-1',
      },
      {
        _id: 'task-102',
        title: 'Add new dashboard feature',
        description: 'Implement a new chart in the dashboard.',
        severityId: 'sev-1',
        substatusId: 'sub-2',
      },
    ],
    rawStatuses: [
      { _id: 'stat-1', status: 'Open' },
      { _id: 'stat-2', status: 'Closed' },
    ],
    rawSubStatuses: [
      {
        _id: 'sub-1',
        subStatus: 'Pending Info',
        description: 'Waiting on info',
      },
      {
        _id: 'sub-2',
        subStatus: 'In Progress',
        description: 'Actively working',
      },
    ],
    rawTopics: [
      { _id: 'topic-1', topic: 'Frontend' },
      { _id: 'topic-2', topic: 'Backend' },
    ],
    rawQueues: [],
    rawArticles: [],
    rawCustomers: [],
    rawEmployees: [],
    rawSeverityLevels: [],

    // Provide callbacks:
    onComment: (text, taskId) =>
      console.log('[SubStatusBoard] onComment =>', { text, taskId }),
    onEdit: data => console.log('[SubStatusBoard] onEdit =>', data),
    onDelete: data => console.log('[SubStatusBoard] onDelete =>', data),
    onDuplicate: data => console.log('[SubStatusBoard] onDuplicate =>', data),
    onCloseTask: data => console.log('[SubStatusBoard] onCloseTask =>', data),
    onEditComment: (commentId, newText, taskId) =>
      console.log('[SubStatusBoard] onEditComment =>', {
        commentId,
        newText,
        taskId,
      }),
  } as ProjectBoardProps,
}

/**
 * Example #4: Topic-based board
 */
export const TopicBoard: Story = {
  name: 'Topic Board',
  args: {
    variant: 'company',
    boardType: 'topic',
    company: {
      _id: 'co-123',
      companyName: 'Acme Inc.',
    },
    columns: [
      { _id: 'topic-1', title: 'Frontend', description: 'UI tasks' },
      { _id: 'topic-2', title: 'Backend', description: 'Server tasks' },
    ],
    tasks: [
      {
        _id: 'task-101',
        title: 'Fix login bug',
        description: 'Users cannot log in under certain conditions.',
        topicIds: ['topic-1'],
      },
      {
        _id: 'task-102',
        title: 'Add new dashboard feature',
        description: 'Implement a new chart in the dashboard.',
        topicIds: ['topic-2'],
      },
    ],
    rawStatuses: [],
    rawSubStatuses: [],
    rawTopics: [
      { _id: 'topic-1', topic: 'Frontend' },
      { _id: 'topic-2', topic: 'Backend' },
    ],
    rawQueues: [],
    rawArticles: [],
    rawCustomers: [],
    rawEmployees: [],
    rawSeverityLevels: [],

    // Provide callbacks:
    onComment: (text, taskId) =>
      console.log('[TopicBoard] onComment =>', { text, taskId }),
    onEdit: data => console.log('[TopicBoard] onEdit =>', data),
    onDelete: data => console.log('[TopicBoard] onDelete =>', data),
    onDuplicate: data => console.log('[TopicBoard] onDuplicate =>', data),
    onCloseTask: data => console.log('[TopicBoard] onCloseTask =>', data),
    onEditComment: (commentId, newText, taskId) =>
      console.log('[TopicBoard] onEditComment =>', {
        commentId,
        newText,
        taskId,
      }),
  } as ProjectBoardProps,
}

/* ----------------------------------------------------------------------------
   2) ADDTASK POPUP STORIES (3 variants)
---------------------------------------------------------------------------- */

/**
 * Helper to create AddTask stories with raw data inlined.
 */
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

        statuses: [
          { _id: 'stat-1', status: 'Open', description: 'Open tasks' },
          { _id: 'stat-2', status: 'Closed', description: 'Closed tasks' },
        ],
        subStatuses: [
          {
            _id: 'sub-1',
            subStatus: 'Pending Info',
            description: 'Waiting on info',
          },
          {
            _id: 'sub-2',
            subStatus: 'In Progress',
            description: 'Actively working',
          },
        ],
        topics: [
          { _id: 'topic-1', topic: 'Frontend' },
          { _id: 'topic-2', topic: 'Backend' },
        ],
        schedulingQueues: [
          { _id: 'queue-1', queueName: 'Tier 1 Support' },
          { _id: 'queue-2', queueName: 'Tier 2 Support' },
        ],
        knowledgebaseArticles: [
          { _id: 'article-1', articleTitle: 'Setup Guide' },
          { _id: 'article-2', articleTitle: 'Troubleshooting FAQ' },
        ],
        customers: [
          { _id: 'cust-1', firstName: 'Alice', lastName: 'Wonder' },
          { _id: 'cust-2', firstName: 'Bob', lastName: 'Builder' },
        ],
        employees: [
          { _id: 'emp-1', firstName: 'John', lastName: 'Doe' },
          { _id: 'emp-2', firstName: 'Jane', lastName: 'Smith' },
        ],
        severityLevels: [
          { _id: 'sev-1', severityLevel: 1, description: 'Low severity' },
          { _id: 'sev-2', severityLevel: 5, description: 'High severity' },
        ],
      }
      return <AddTask {...props} />
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement)
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

/* ----------------------------------------------------------------------------
   3) SHOWTASK POPUP STORY (Standalone)
   Here we add multiple revision histories in comments
---------------------------------------------------------------------------- */
export const ShowTaskPopup: StoryObj = {
  name: 'ShowTask Popup (Standalone)',
  render: () => {
    // We define all fields we want to display or edit:
    const props: ShowTaskProps = {
      open: true,
      onClose: () => console.log('ShowTask onClose'),

      // Provide a real "title" and "description" from the story:
      taskTitle: 'Sample Task Title',
      createdBy: 'John Doe',
      description: 'Lorem ipsum dolor sit amet...',

      // Optional "customerAssigned" so the chip is visible
      customerAssigned: 'Bobbie Sue',

      // We also provide arrays so editing can show dropdowns:
      customerOptions: ['Alice', 'Bobbie Sue', 'Sally Customer'],
      severityOptions: ['Low', 'Medium', 'High'],
      schedulingQueueOptions: ['Tier 1 Support', 'Tier 2 Support'],
      statusOptions: ['Open', 'Pending', 'Closed'],
      subStatusOptions: ['Pending Info', 'In Progress', 'Waiting on Customer'],
      topicOptions: ['Frontend', 'Backend', 'DevOps'],
      knowledgebaseArticleOptions: ['Setup Guide', 'Troubleshooting FAQ'],
      teamMemberOptions: ['Jane Smith', 'John Doe', 'Alice Dev'],

      // Our comments now have multiple revisions:
      comments: [
        {
          _id: 'comm-1',
          authorName: 'Alice',
          text: 'First comment here!',
          createdAt: '2023-08-15T10:00:00Z',
          updatedAt: '2023-08-15T10:05:00Z',
          lastEditedBy: 'Alice',
          editHistory: [
            {
              _id: 'rev-orig-comm-1',
              editedBy: 'Alice',
              editedAt: '2023-08-15T10:00:00Z',
              text: 'First comment here!',
              isOriginal: true,
            },
            {
              _id: 'rev-2-comm-1',
              editedBy: 'Alice',
              editedAt: '2023-08-15T10:05:00Z',
              text: 'First comment, slightly edited by Alice!',
              isOriginal: false,
            },
          ],
        },
        {
          _id: 'comm-2',
          authorName: 'Bob',
          text: 'Another comment with multiple edits!',
          createdAt: '2023-08-15T10:10:00Z',
          updatedAt: '2023-08-15T10:25:00Z',
          lastEditedBy: 'Bob',
          editHistory: [
            {
              _id: 'rev-orig-comm-2',
              editedBy: 'Bob',
              editedAt: '2023-08-15T10:10:00Z',
              text: 'Another comment with multiple edits!',
              isOriginal: true,
            },
            {
              _id: 'rev-2-comm-2',
              editedBy: 'Bob',
              editedAt: '2023-08-15T10:20:00Z',
              text: 'Bob changed it once!',
              isOriginal: false,
            },
            {
              _id: 'rev-3-comm-2',
              editedBy: 'Bob',
              editedAt: '2023-08-15T10:25:00Z',
              text: 'And changed it a second time!',
              isOriginal: false,
            },
          ],
        },
      ],

      status: 'Open',
      subStatus: 'Pending Info',
      severity: 'High',
      schedulingQueue: 'Tier 1 Support',
      topics: ['Frontend', 'Backend'],
      knowledgebaseArticles: ['Setup Guide', 'Troubleshooting FAQ'],
      teamMemberAssigned: 'Jane Smith',
      nextActionDate: '09/15/2023 - 8:30AM CST',

      // Bob is the current user => he can edit his own comment(s).
      currentUserName: 'Bob',

      onComment: text => console.log('ShowTask onComment =>', text),
      onCloseTask: () => console.log('ShowTask onCloseTask'),
      onEdit: data => console.log('ShowTask onEdit =>', data),
      onDelete: () => console.log('ShowTask onDelete'),
      onDuplicate: () => console.log('ShowTask onDuplicate'),
      // We add "taskId" ourselves in the log for demonstration
      onEditComment: (commentId, newText) => {
        const fakeTaskId = 'storybookTaskId'
        console.log('ShowTask onEditComment =>', {
          commentId,
          newText,
          taskId: fakeTaskId,
        })
      },
    }
    return <ShowTask {...props} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Confirm the title
    expect(canvas.getByText('Sample Task Title')).toBeInTheDocument()
    // Confirm the revised comment texts
    expect(canvas.getByText('First comment here!')).toBeInTheDocument()
    expect(
      canvas.getByText('Another comment with multiple edits!')
    ).toBeInTheDocument()

    // Try the "Comment" button
    const commentBtn = canvas.getByRole('button', { name: /Comment/i })
    await userEvent.click(commentBtn)
  },
}
