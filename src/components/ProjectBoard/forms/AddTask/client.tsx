'use client'

import React, { useState } from 'react'

// Popup with open/close
import Popup from '../../../Form/Popup'
import { ContentSectionProps } from '../../../Content'

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
} from '../../types'

export type AddTaskVariant = 'customer' | 'company' | 'administrator'

export interface AddTaskProps {
  /**
   * Controls whether the Popup is open or closed.
   */
  open: boolean

  /**
   * If `true`, force the Popup closed.
   */
  close?: boolean

  /**
   * Called when user closes the dialog (via Cancel, X button, backdrop, etc.).
   */
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
  close,
  onClose,
  onSubmit,
  variant = 'customer',
  statuses,
  subStatuses,
  topics,
  schedulingQueues,
  knowledgebaseArticles,
  customers,
  employees,
  severityLevels,
}) => {
  // -------------------------------------------------------------------------
  // 1) Local state for fields
  // -------------------------------------------------------------------------
  const [selectedAccount, setSelectedAccount] = useState('') // For "customer" or "company"
  const [selectedAdministrator, setSelectedAdministrator] = useState('') // For "company"
  const [selectedEmployee, setSelectedEmployee] = useState('') // For "customer"

  const [selectedSeverity, setSelectedSeverity] = useState('')
  const [selectedQueue, setSelectedQueue] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')
  const [selectedSubStatus, setSelectedSubStatus] = useState('')

  // MultiSelect states for topics & knowledgebase articles (by ID)
  const [selectedTopicIds, setSelectedTopicIds] = useState<string[]>([])
  const [selectedArticleIds, setSelectedArticleIds] = useState<string[]>([])

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  // -------------------------------------------------------------------------
  // 2) Convert raw data to dropdown-friendly arrays
  //    (For the <Dropdown> fields, not the multiSelect.)
  // -------------------------------------------------------------------------
  const severityOptions = severityLevels.map(sl => ({ value: sl._id }))
  const statusOptions = statuses.map(s => ({ value: s._id }))
  const subStatusOptions = subStatuses.map(s => ({ value: s._id }))
  const queueOptions = schedulingQueues.map(q => ({ value: q._id }))

  const customerOptions = customers.map(c => ({
    value: c._id || '',
    attribute1: [c.firstName, c.lastName].filter(Boolean).join(' '),
  }))

  // Example "company accounts"
  const companyAccountOptions = [{ value: 'AcmeInc' }, { value: 'TechCorp' }]

  // For assigning employees or administrators
  const employeeOptions = employees.map(e => ({
    value: e._id || '',
    attribute1: [e.firstName, e.lastName].filter(Boolean).join(' '),
  }))

  // -------------------------------------------------------------------------
  // 3) Handle "Submit"
  // -------------------------------------------------------------------------
  const handleSubmit = () => {
    // Build Omit<Task, '_id'>
    const newTaskData: Omit<Task, '_id'> = {
      title: taskTitle,
      description: taskDescription,
      topicIds: selectedTopicIds, // store topic IDs
      articleIds: selectedArticleIds, // store knowledgebase article IDs
    }

    if (selectedSeverity) {
      newTaskData.severityId = selectedSeverity
    }
    if (selectedQueue) {
      newTaskData.schedulingQueueId = selectedQueue
    }
    if (selectedStatus) {
      newTaskData.statusId = selectedStatus
    }
    if (selectedSubStatus) {
      newTaskData.substatusId = selectedSubStatus
    }

    // Variant-specific fields
    if (variant === 'customer') {
      newTaskData.customerId = selectedAccount || undefined
      if (selectedEmployee) {
        newTaskData.employeeIds = [selectedEmployee]
      }
    } else if (variant === 'company') {
      newTaskData.companyId = selectedAccount || undefined
      if (selectedAdministrator) {
        newTaskData.employeeIds = [selectedAdministrator]
      }
    }

    // 'administrator' => no special account fields
    onSubmit(newTaskData)
  }

  // -------------------------------------------------------------------------
  // 4) Type guard for filter(Boolean)-style usage
  // -------------------------------------------------------------------------
  function isDefinedDropdown<T>(val: T | false | null | undefined): val is T {
    return Boolean(val)
  }

  // -------------------------------------------------------------------------
  // 5) Define the grids for ContentSection
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
        // "customer"
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
        // "company"
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
        // row=2 => Severity, Queue
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
        // row=3 => Status, Substatus
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

    // ----------------------------
    // MultiSelect for "Topics" + "Knowledgebase Articles"
    // (Storing IDs)
    // ----------------------------
    multiSelect: [
      {
        label: 'Topics (by ID)',
        /**
         * We'll store the IDs in the multi-select to keep
         * `selectedTopicIds` consistent with the Task interface (topicIds).
         */
        options: topics.map(t => t._id),
        defaultSelected: selectedTopicIds,
        onChange: (newVals: string[]) => setSelectedTopicIds(newVals),
        columnconfig: { row: 4, column: 1, columnwidth: '100%' },
      },
      {
        label: 'Knowledgebase Articles (by ID)',
        options: knowledgebaseArticles.map(a => a._id),
        defaultSelected: selectedArticleIds,
        onChange: (newVals: string[]) => setSelectedArticleIds(newVals),
        columnconfig: { row: 5, column: 1, columnwidth: '100%' },
      },
    ],

    // row=6 => Task Title
    textfield: [
      {
        label: 'Task Title',
        value: taskTitle,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setTaskTitle(e.target.value),
        columnconfig: { row: 6, column: 1, columnwidth: '100%' },
      },
    ],

    // row=7 => Task Description
    complexeditor: [
      {
        label: 'Task Description',
        editorType: 'simple',
        value: taskDescription,
        minRows: 5,
        onChange: (val: string) => setTaskDescription(val),
        columnconfig: { row: 7, column: 1, columnwidth: '100%' },
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
        onClick: onClose, // Tells the parent to close
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
  // 6) Render
  // -------------------------------------------------------------------------
  return (
    <Popup
      open={open}
      // If close is undefined, default to false so Popup sees a boolean
      close={close ?? false}
      onClose={onClose}
      title="Create Task"
      width={700}
      grids={[mainGrid, buttonGrid]}
    />
  )
}

export default AddTask
