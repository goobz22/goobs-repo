'use client'

import React, { useMemo, useState } from 'react'
import Popup from '../../Form/Popup' // <-- Import your Popup or PopupForm
import { ContentSectionProps } from '../../Content'
import { TransferListDropdownDataMap } from '../../TransferList'

// Import the relevant types from your shared `types.ts`
import type {
  // If you have an "Administrator" interface there, you can import that too
  RawAdministrator,
  CompanyInfo,
  RawSeverityLevel,
  RawStatus,
  RawSubStatus,
  RawTopic,
  RawQueue,
  RawArticle,
  RawEmployee,
} from '../types'

/** If you declared an "Administrator" interface in your types, import it too: */
// import type { Administrator } from '../types'

// Our 3 variants: 'company', 'customer', 'administrator'
export type ManageTaskVariant = 'company' | 'customer' | 'administrator'

export interface ManageTaskProps {
  open: boolean
  onClose: () => void
  variant: ManageTaskVariant

  // For "company" variant:
  companyAccounts?: CompanyInfo[]
  /** administrators can be an array of RawAdministrator or your full Administrator type */
  administrators?: RawAdministrator[] /* | Administrator[] */

  // For "customer" variant => assignedEmployee
  employees?: RawEmployee[]

  // Common data (shared across all variants):
  statuses: RawStatus[]
  subStatuses: RawSubStatus[]
  schedulingQueues: RawQueue[]
  severityLevels: RawSeverityLevel[]

  // Topics & Articles for the TransferList in "company" or "administrator"
  topics?: RawTopic[]
  knowledgebaseArticles?: RawArticle[]

  // Pre-filled fields
  defaultTaskTitle?: string
  defaultTaskDescription?: string
  defaultNextActionDate?: Date | null

  /**
   * Called on "Save." We pass back form fields + TransferList data.
   * If variant='company' or 'administrator', includes transferListData.
   */
  onSubmit?: (data: {
    taskTitle: string
    taskDescription: string
    nextActionDate: Date | null
    transferListData?: TransferListDropdownDataMap
  }) => void
}

function isDefinedDropdown<T>(val: T | false | null | undefined): val is T {
  return Boolean(val)
}

const ManageTask: React.FC<ManageTaskProps> = ({
  open,
  onClose,
  variant,

  // Defaults so we don't crash if these arrays are omitted
  companyAccounts = [],
  administrators = [],
  employees = [],

  statuses,
  subStatuses,
  schedulingQueues,
  severityLevels,

  topics = [],
  knowledgebaseArticles = [],

  defaultTaskTitle = '',
  defaultTaskDescription = '',
  defaultNextActionDate = null,

  onSubmit,
}) => {
  // -------------------------------------------------------------------------
  // Local state for dropdowns
  // -------------------------------------------------------------------------
  const [selectedCompany, setSelectedCompany] = useState('')
  const [selectedCustomer, setSelectedCustomer] = useState('')
  const [selectedAdministrator, setSelectedAdministrator] = useState('')
  const [selectedEmployee, setSelectedEmployee] = useState('')
  const [selectedSeverity, setSelectedSeverity] = useState('')
  const [selectedQueue, setSelectedQueue] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')
  const [selectedSubStatus, setSelectedSubStatus] = useState('')

  // Basic text fields:
  const [taskTitle, setTaskTitle] = useState(defaultTaskTitle)
  const [taskDescription, setTaskDescription] = useState(defaultTaskDescription)
  const [nextActionDate, setNextActionDate] = useState<Date | null>(
    defaultNextActionDate
  )

  // -------------------------------------------------------------------------
  // TransferList only if variant="company" or "administrator"
  // -------------------------------------------------------------------------
  // Convert articles/topics to displayable strings
  const articleTitles = useMemo(
    () => knowledgebaseArticles.map(a => a.articleTitle || `Article#${a._id}`),
    [knowledgebaseArticles]
  )
  const topicTitles = useMemo(
    () => topics.map(t => t.topic || `Topic#${t._id}`),
    [topics]
  )

  // The TransferListDropdownDataMap for "knowledgebase" & "topics"
  const [transferListDataMap, setTransferListDataMap] =
    useState<TransferListDropdownDataMap>({
      knowledgebase: {
        leftItems: articleTitles,
        rightItems: [],
      },
      topics: {
        leftItems: topicTitles,
        rightItems: [],
      },
    })

  // The dropdown options for switching categories in the TransferList
  const multiSelectOptions = useMemo(
    () => [{ value: 'knowledgebase' }, { value: 'topics' }],
    []
  )

  // TransferList change handler
  const handleTransferListChange = (
    newLeft: string[],
    newRight: string[],
    dropdownValue?: string
  ) => {
    if (!dropdownValue) return
    setTransferListDataMap(prev => ({
      ...prev,
      [dropdownValue]: {
        leftItems: newLeft,
        rightItems: newRight,
      },
    }))
  }

  // -------------------------------------------------------------------------
  // On "Save" => gather all data
  // -------------------------------------------------------------------------
  const handleSave = () => {
    const formData = {
      taskTitle,
      taskDescription,
      nextActionDate,
      // Only pass transferListData for "company"/"administrator"
      transferListData:
        variant === 'company' || variant === 'administrator'
          ? transferListDataMap
          : undefined,
    }
    onSubmit?.(formData)
  }

  // -------------------------------------------------------------------------
  // Build ContentSection grids for <Popup> (similar pattern to AddTask)
  // -------------------------------------------------------------------------

  // 1) Main grid: all inputs (dropdowns, textfields, datefield, transferlist, etc.)
  const mainGrid: ContentSectionProps['grids'][0] = {
    grid: {
      gridconfig: {
        gridwidth: '100%',
      },
    },
    dropdown: (
      [
        // ----- COMPANY variant: Company + Administrator + Severity + Queue + Status + Substatus -----
        variant === 'company' && {
          label: 'Company Account',
          name: 'companyAccount',
          options: companyAccounts.map(acc => ({ value: acc.companyName })),
          value: selectedCompany,
          onChange: e => setSelectedCompany(e.target.value),
          columnconfig: { row: 1, column: 1, columnwidth: '50%' },
        },
        variant === 'company' && {
          label: 'Assigned Administrator',
          name: 'assignedAdministrator',
          // We handle either RawAdministrator or an Administrator w/ "fullName"
          options: administrators.map(a => {
            // If you have "fullName" guaranteed, use it; else build from firstName/lastName
            const name =
              'fullName' in a && a.fullName
                ? a.fullName
                : `${a.firstName ?? ''} ${a.lastName ?? ''}`.trim() || 'Unknown'
            return { value: name }
          }),
          value: selectedAdministrator,
          onChange: e => setSelectedAdministrator(e.target.value),
          columnconfig: { row: 1, column: 2, columnwidth: '50%' },
        },
        variant === 'company' && {
          label: 'Severity Level',
          name: 'severityLevel',
          options: severityLevels.map(s => ({
            value: String(s.severityLevel),
          })),
          value: selectedSeverity,
          onChange: e => setSelectedSeverity(e.target.value),
          columnconfig: { row: 2, column: 1, columnwidth: '50%' },
        },
        variant === 'company' && {
          label: 'Associated Product (Queue)',
          name: 'associatedQueue',
          options: schedulingQueues.map(q => ({ value: q.queueName })),
          value: selectedQueue,
          onChange: e => setSelectedQueue(e.target.value),
          columnconfig: { row: 2, column: 2, columnwidth: '50%' },
        },
        variant === 'company' && {
          label: 'Status',
          name: 'status',
          options: statuses.map(s => ({ value: s.status })),
          value: selectedStatus,
          onChange: e => setSelectedStatus(e.target.value),
          columnconfig: { row: 3, column: 1, columnwidth: '50%' },
        },
        variant === 'company' && {
          label: 'Substatus',
          name: 'substatus',
          options: subStatuses.map(s => ({ value: s.subStatus })),
          value: selectedSubStatus,
          onChange: e => setSelectedSubStatus(e.target.value),
          columnconfig: { row: 3, column: 2, columnwidth: '50%' },
        },

        // ----- CUSTOMER variant: Customer + Employee + Severity + Queue + Status + Substatus -----
        variant === 'customer' && {
          label: 'Customer Account',
          name: 'customerAccount',
          options: [{ value: 'SampleCustomerAccount' }], // or real data
          value: selectedCustomer,
          onChange: e => setSelectedCustomer(e.target.value),
          columnconfig: { row: 1, column: 1, columnwidth: '50%' },
        },
        variant === 'customer' && {
          label: 'Assigned Employee',
          name: 'assignedEmployee',
          options: employees.map(emp => ({
            value: `${emp.firstName ?? ''} ${emp.lastName ?? ''}`.trim(),
          })),
          value: selectedEmployee,
          onChange: e => setSelectedEmployee(e.target.value),
          columnconfig: { row: 1, column: 2, columnwidth: '50%' },
        },
        variant === 'customer' && {
          label: 'Severity Level',
          name: 'severityLevel',
          options: severityLevels.map(s => ({
            value: String(s.severityLevel),
          })),
          value: selectedSeverity,
          onChange: e => setSelectedSeverity(e.target.value),
          columnconfig: { row: 2, column: 1, columnwidth: '50%' },
        },
        variant === 'customer' && {
          label: 'Associated Product (Queue)',
          name: 'associatedQueue',
          options: schedulingQueues.map(q => ({ value: q.queueName })),
          value: selectedQueue,
          onChange: e => setSelectedQueue(e.target.value),
          columnconfig: { row: 2, column: 2, columnwidth: '50%' },
        },
        variant === 'customer' && {
          label: 'Status',
          name: 'status',
          options: statuses.map(s => ({ value: s.status })),
          value: selectedStatus,
          onChange: e => setSelectedStatus(e.target.value),
          columnconfig: { row: 3, column: 1, columnwidth: '50%' },
        },
        variant === 'customer' && {
          label: 'Substatus',
          name: 'substatus',
          options: subStatuses.map(s => ({ value: s.subStatus })),
          value: selectedSubStatus,
          onChange: e => setSelectedSubStatus(e.target.value),
          columnconfig: { row: 3, column: 2, columnwidth: '50%' },
        },

        // ----- ADMINISTRATOR variant: Severity + Queue + Status + Substatus -----
        variant === 'administrator' && {
          label: 'Severity Level',
          name: 'severityLevel',
          options: severityLevels.map(s => ({
            value: String(s.severityLevel),
          })),
          value: selectedSeverity,
          onChange: e => setSelectedSeverity(e.target.value),
          columnconfig: { row: 1, column: 1, columnwidth: '50%' },
        },
        variant === 'administrator' && {
          label: 'Associated Product (Queue)',
          name: 'associatedQueue',
          options: schedulingQueues.map(q => ({ value: q.queueName })),
          value: selectedQueue,
          onChange: e => setSelectedQueue(e.target.value),
          columnconfig: { row: 1, column: 2, columnwidth: '50%' },
        },
        variant === 'administrator' && {
          label: 'Status',
          name: 'status',
          options: statuses.map(s => ({ value: s.status })),
          value: selectedStatus,
          onChange: e => setSelectedStatus(e.target.value),
          columnconfig: { row: 2, column: 1, columnwidth: '50%' },
        },
        variant === 'administrator' && {
          label: 'Substatus',
          name: 'substatus',
          options: subStatuses.map(s => ({ value: s.subStatus })),
          value: selectedSubStatus,
          onChange: e => setSelectedSubStatus(e.target.value),
          columnconfig: { row: 2, column: 2, columnwidth: '50%' },
        },
      ] as (
        | false
        | {
            label: string
            name: string
            options: { value: string }[]
            value: string
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
            columnconfig: { row: number; column: number; columnwidth: string }
          }
      )[]
    ).filter(isDefinedDropdown),

    // Show multi-category TransferList only for 'company' or 'administrator'
    transferlist:
      variant === 'company' || variant === 'administrator'
        ? [
            {
              // We assume your ContentSection can handle these advanced props
              variant: 'multipleSelection', // if your TransferList supports it
              dropdownLabel: 'Topics or Articles',
              dropdownOptions: multiSelectOptions,
              dropdownDataMap: transferListDataMap,
              leftTitle: 'Unassigned',
              rightTitle: 'Assigned',
              onChange: handleTransferListChange,
              columnconfig: { row: 4, column: 1, columnwidth: '100%' },
            },
          ]
        : undefined,

    textfield: [
      {
        label: 'Task Title',
        value: taskTitle,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setTaskTitle(e.target.value),
        columnconfig: { row: 5, column: 1, columnwidth: '100%' },
      },
      {
        label: 'Task Description',
        value: taskDescription,
        multiline: true,
        minRows: 5,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setTaskDescription(e.target.value),
        columnconfig: { row: 6, column: 1, columnwidth: '100%' },
      },
    ],

    datefield: [
      {
        label: 'Next Action Date',
        value: nextActionDate,
        onChange: (date: Date | null) => setNextActionDate(date),
        columnconfig: { row: 7, column: 1, columnwidth: '50%' },
      },
    ],
  }

  // 2) Buttons grid
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
        onClick: onClose, // Just call parent to toggle open=false
        columnconfig: { row: 1, column: 1 },
      },
      {
        text: 'Save',
        backgroundcolor: '#1976d2',
        fontcolor: 'white',
        onClick: handleSave,
        columnconfig: { row: 1, column: 2 },
      },
    ],
  }

  // -------------------------------------------------------------------------
  // Render using <Popup> just like <AddTask> does
  // -------------------------------------------------------------------------
  return (
    <Popup
      open={open}
      title="Manage Task"
      width={700}
      grids={[mainGrid, buttonGrid]}
    />
  )
}

export default ManageTask
