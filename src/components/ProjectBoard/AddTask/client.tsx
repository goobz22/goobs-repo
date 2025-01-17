'use client'

import React, { useState, useEffect } from 'react'

// Your PopupForm + ContentSection types
import PopupForm from '../../Form/Popup'
import { ContentSectionProps } from '../../Content'

// Types from "../index"
import type {
  Task,
  RawStatus,
  RawSubStatus,
  RawTopic,
  RawQueue,
  RawArticle,
  RawCustomer,
  RawEmployee,
  RawSeverityLevel,
} from '../index'

export type AddTaskVariant = 'customer' | 'company' | 'administrator'

export interface AddTaskProps {
  open: boolean
  onClose: () => void
  /**
   * Called when the user clicks "Create Task."
   * We pass back an Omit<Task, '_id'> that the parent can store.
   */
  onSubmit: (newTask: Omit<Task, '_id'>) => void
  /**
   * Controls which fields appear:
   *   - 'customer'
   *   - 'company'
   *   - 'administrator'
   */
  variant?: AddTaskVariant

  /** Data for the various dropdowns, etc. */
  statuses: RawStatus[]
  subStatuses: RawSubStatus[]
  topics: RawTopic[]
  schedulingQueues: RawQueue[]
  knowledgebaseArticles: RawArticle[]
  customers: RawCustomer[]
  employees: RawEmployee[]
  severityLevels: RawSeverityLevel[]
}

const AddTask: React.FC<AddTaskProps> = ({
  open,
  onClose,
  onSubmit,
  variant = 'customer',
  statuses,
  subStatuses,
  topics,
  schedulingQueues,
  customers,
  employees,
  severityLevels,
}) => {
  // -------------------------------------------------------------------------
  // 1) Local state for fields
  // -------------------------------------------------------------------------
  // If variant="customer", store customerId + assignedEmployee (employeeIds)
  const [selectedAccount, setSelectedAccount] = useState('') // for "customer" or "company"
  const [selectedAdministrator, setSelectedAdministrator] = useState('') // for "company"
  const [selectedEmployee, setSelectedEmployee] = useState('') // for "customer"

  const [selectedSeverity, setSelectedSeverity] = useState('')
  const [selectedQueue, setSelectedQueue] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')
  const [selectedSubStatus, setSelectedSubStatus] = useState('')

  const [unassignedTopics, setUnassignedTopics] = useState<string[]>([])
  const [assignedTopics, setAssignedTopics] = useState<string[]>([])

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  // -------------------------------------------------------------------------
  // 2) Initialize "topics" in the TransferList
  // -------------------------------------------------------------------------
  useEffect(() => {
    // If you want all topics initially unassigned:
    const allTopicValues = topics.map(t => t.topic)
    setUnassignedTopics(allTopicValues)
    setAssignedTopics([])
  }, [topics])

  // -------------------------------------------------------------------------
  // 3) Convert raw data to dropdown-friendly arrays
  // -------------------------------------------------------------------------
  const severityOptions = severityLevels.map(sl => ({
    value: sl._id, // or sl._id if you store it that way
  }))
  const statusOptions = statuses.map(s => ({ value: s._id }))
  const subStatusOptions = subStatuses.map(s => ({ value: s._id }))
  const queueOptions = schedulingQueues.map(q => ({ value: q._id }))

  const customerOptions = customers.map(c => ({
    value: c._id || '',
    attribute1: [c.firstName, c.lastName].filter(Boolean).join(' '),
  }))

  // Example "company accounts" (placeholder). You could also supply these from props.
  const companyAccountOptions = [{ value: 'AcmeInc' }, { value: 'TechCorp' }]

  // For assigning employees or administrators
  const employeeOptions = employees.map(e => ({
    value: e._id || '',
    attribute1: [e.firstName, e.lastName].filter(Boolean).join(' '),
  }))

  // -------------------------------------------------------------------------
  // 4) TransferList handler
  // -------------------------------------------------------------------------
  const handleTopicsChange = (left: string[], right: string[]) => {
    setUnassignedTopics(left)
    setAssignedTopics(right)
  }

  // -------------------------------------------------------------------------
  // 5) Handle "Submit"
  // -------------------------------------------------------------------------
  const handleSubmit = () => {
    // Build an Omit<Task, '_id'> that matches your Task interface fields
    const newTaskData: Omit<Task, '_id'> = {
      title: taskTitle,
      description: taskDescription,
      topicIds: assignedTopics,
    }

    // Severity => severityId
    if (selectedSeverity) {
      newTaskData.severityId = selectedSeverity
    }

    // Scheduling queue => schedulingQueueId
    if (selectedQueue) {
      newTaskData.schedulingQueueId = selectedQueue
    }

    // Status => statusId
    if (selectedStatus) {
      newTaskData.statusId = selectedStatus
    }

    // Substatus => substatusId
    if (selectedSubStatus) {
      newTaskData.substatusId = selectedSubStatus
    }

    // Variant-specific fields
    if (variant === 'customer') {
      // "Customer Account" => newTaskData.customerId
      newTaskData.customerId = selectedAccount || undefined
      // "Assigned Employee" => newTaskData.employeeIds = [selectedEmployee]
      if (selectedEmployee) {
        newTaskData.employeeIds = [selectedEmployee]
      }
    } else if (variant === 'company') {
      // "Company Account" => newTaskData.companyId
      newTaskData.companyId = selectedAccount || undefined
      // "Assigned Administrator" => newTaskData.employeeIds = [selectedAdministrator]
      if (selectedAdministrator) {
        newTaskData.employeeIds = [selectedAdministrator]
      }
    } else if (variant === 'administrator') {
      // e.g., no special account fields
      // Possibly defaults or skip
    }

    onSubmit(newTaskData)
  }

  // -------------------------------------------------------------------------
  // 6) Type guard for filter(Boolean)-style usage
  // -------------------------------------------------------------------------
  function isDefinedDropdown<T>(val: T | false | null | undefined): val is T {
    return Boolean(val)
  }

  // -------------------------------------------------------------------------
  // 7) Define the grids for ContentSection
  // -------------------------------------------------------------------------
  const mainGrid: ContentSectionProps['grids'][0] = {
    grid: {
      gridconfig: {
        gridwidth: '100%',
      },
    },
    dropdown: (
      [
        // ----------------------------
        // "customer" => Customer Account + Assigned Employee
        // ----------------------------
        variant === 'customer' && {
          label: 'Customer Account',
          name: 'customerAccount',
          options: customerOptions,
          value: selectedAccount,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setSelectedAccount(e.target.value),
          columnconfig: { row: 1, column: 1, columnwidth: '50%' },
        },
        variant === 'customer' && {
          label: 'Assigned Employee',
          name: 'assignedEmployee',
          options: employeeOptions,
          value: selectedEmployee,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setSelectedEmployee(e.target.value),
          columnconfig: { row: 1, column: 2, columnwidth: '50%' },
        },

        // ----------------------------
        // "company" => Company Account + Assigned Administrator
        // ----------------------------
        variant === 'company' && {
          label: 'Company Account',
          name: 'companyAccount',
          options: companyAccountOptions,
          value: selectedAccount,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setSelectedAccount(e.target.value),
          columnconfig: { row: 1, column: 1, columnwidth: '50%' },
        },
        variant === 'company' && {
          label: 'Assigned Administrator',
          name: 'assignedAdministrator',
          options: employeeOptions,
          value: selectedAdministrator,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setSelectedAdministrator(e.target.value),
          columnconfig: { row: 1, column: 2, columnwidth: '50%' },
        },

        // ----------------------------
        // row=2 => Severity, Queue (all variants)
        // ----------------------------
        {
          label: 'Severity Level',
          name: 'severityLevel',
          options: severityOptions,
          value: selectedSeverity,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setSelectedSeverity(e.target.value),
          columnconfig: { row: 2, column: 1, columnwidth: '50%' },
        },
        {
          label: 'Associated Product (Queue)',
          name: 'associatedQueue',
          options: queueOptions,
          value: selectedQueue,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setSelectedQueue(e.target.value),
          columnconfig: { row: 2, column: 2, columnwidth: '50%' },
        },

        // ----------------------------
        // row=3 => Status, Substatus (all variants)
        // ----------------------------
        {
          label: 'Status',
          name: 'status',
          options: statusOptions,
          value: selectedStatus,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setSelectedStatus(e.target.value),
          columnconfig: { row: 3, column: 1, columnwidth: '50%' },
        },
        {
          label: 'Substatus',
          name: 'substatus',
          options: subStatusOptions,
          value: selectedSubStatus,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setSelectedSubStatus(e.target.value),
          columnconfig: { row: 3, column: 2, columnwidth: '50%' },
        },
      ] as (
        | false
        | {
            label: string
            name: string
            options: { value: string; attribute1?: string }[]
            value: string
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
            columnconfig: { row: number; column: number; columnwidth: string }
          }
      )[]
    ).filter(isDefinedDropdown),

    // TransferList
    transferlist: [
      {
        leftItems: unassignedTopics,
        rightItems: assignedTopics,
        leftTitle: 'Unassigned Topics',
        rightTitle: 'Assigned Topics',
        onChange: handleTopicsChange,
        columnconfig: { row: 4, column: 1, columnwidth: '100%' },
      },
    ],

    // Task Title
    textfield: [
      {
        label: 'Task Title',
        value: taskTitle,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setTaskTitle(e.target.value),
        columnconfig: { row: 5, column: 1, columnwidth: '100%' },
      },
    ],

    // Task Description
    complexeditor: [
      {
        label: 'Task Description',
        editorType: 'simple',
        value: taskDescription,
        minRows: 5,
        onChange: (val: string) => setTaskDescription(val),
        columnconfig: { row: 6, column: 1, columnwidth: '100%' },
      },
    ],
  }

  // Button grid (aligned to right)
  const buttonGrid: ContentSectionProps['grids'][0] = {
    grid: {
      gridconfig: {
        alignment: 'right',
      },
    },
    button: [
      {
        text: 'Cancel',
        backgroundcolor: 'none',
        fontcolor: 'black',
        onClick: onClose,
        columnconfig: { row: 1, column: 1 },
      },
      {
        text: 'Create Task',
        backgroundcolor: '#1976d2',
        fontcolor: 'white',
        onClick: handleSubmit,
        columnconfig: { row: 1, column: 2 },
      },
    ],
  }

  // -------------------------------------------------------------------------
  // 8) Render
  // -------------------------------------------------------------------------
  return (
    <PopupForm
      open={open}
      title="Create Task"
      width={700}
      grids={[mainGrid, buttonGrid]}
    />
  )
}

export default AddTask
