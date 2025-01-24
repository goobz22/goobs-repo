'use client'

/** A minimal typed comment for any type of task. */
export type Comment = {
  _id: string
  text: string
  createdAt: Date
  updatedAt: Date
}

/**
 * A generic "Task" type for your boards.
 * It can store severityId, statusId, substatusId, schedulingQueueId, topicIds, etc.
 *
 * Now extended with fields that `ShowTask` uses directly (e.g. createdBy, comments array, etc.).
 */
export type Task = {
  _id: string
  /** The parent company ID or other domain-specific reference. */
  companyId?: string

  title: string
  description: string

  /** If severity is linked to a separate record, store it here. */
  severityId?: string
  /** The main status. */
  statusId?: string
  /** The sub-status. */
  substatusId?: string
  /** The scheduling queue ID. */
  schedulingQueueId?: string
  /** Topics array, each referencing a topic ID. */
  topicIds?: string[]
  /** Comments array, referencing comment IDs. */
  commentIds?: string[]
  /** Employee IDs assigned to the task. */
  employeeIds?: string[]
  /** Knowledgebase article IDs. */
  articleIds?: string[]
  /** The "customer" ID if you have one. */
  customerId?: string

  /** Timestamps. */
  createdAt?: Date
  closedAt?: Date
  updatedAt?: Date
  createdBy?: string

  /**
   * If you want to store the actual comments (rather than just commentIds),
   * so ShowTask can display them directly.
   */
  comments?: Array<{
    _id: string
    authorName: string
    text: string
  }>

  /** If you store the "customer assigned" label as text (e.g. "Bobbie Sue"). */
  customerAssigned?: string

  /** Severity label text (e.g. "Critical"). */
  severity?: string

  /** Scheduling Queue text (e.g. "Technologies Unlimited"). */
  schedulingQueue?: string

  /** High-level status text (e.g. "Open"). */
  status?: string

  /** Sub-status text (e.g. "In Progress"). */
  subStatus?: string

  /**
   * If you want to store the actual topic strings (e.g. ["Technical Support"]).
   * This can be used in addition to or instead of topicIds.
   */
  topicLabels?: string[]

  /**
   * If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).
   * This can be used in addition to or instead of articleIds.
   */
  kbArticles?: string[]

  /** A string representing the assigned team member (e.g. "Matthew Goluba"). */
  teamMember?: string

  /** If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST"). */
  nextActionDate?: string
}

/** Each "column" references an array of Task objects. */
export type ColumnData = {
  _id: string
  title: string
  description: string
  tasks: Task[]
}

/** Board types: which property we use to group tasks into columns. */
export type BoardType = 'severityLevel' | 'status' | 'subStatus' | 'topic'

/** Raw typed data for "severity levels." */
export type RawSeverityLevel = {
  _id: string
  severityLevel: number
  description?: string
}

/** Raw typed data for "statuses." */
export type RawStatus = {
  _id: string
  status: string
  description?: string
}

/** Raw typed data for "substatuses." */
export type RawSubStatus = {
  _id: string
  subStatus: string
  description?: string
}

/** Raw typed data for "topics." */
export type RawTopic = {
  _id: string
  topic: string
  description?: string
}

/** Raw typed data for "queues." */
export type RawQueue = {
  _id: string
  queueName: string
}

/** Raw typed data for "articles." */
export type RawArticle = {
  _id: string
  articleTitle: string
}

/** Raw typed data for "customers." */
export type RawCustomer = {
  _id: string
  firstName?: string
  lastName?: string
}

/** Raw typed data for "employees." */
export type RawEmployee = {
  _id: string
  firstName?: string
  lastName?: string
}

/** Optional "company" type. */
export type CompanyInfo = {
  _id: string
  companyName: string
}

/** Raw typed data for "administrators." */
export type RawAdministrator = {
  _id: string
  firstName?: string
  lastName?: string
  /** Add a `fullName` field if your code references it. */
  fullName?: string
}

/** If your UI's ManageTask expects an `Administrator` with a guaranteed `fullName`: */
export interface Administrator {
  _id: string
  fullName: string
}

/** Additional props for updating a task’s fields in the store (drag-drop, etc.) */
export interface OnUpdateTaskArgs {
  companyId: string
  _id: string
  input: Record<string, unknown>
}

/** The 3 variants we support in Add/Manage: 'administrator' | 'company' | 'customer'. */
export type BoardVariant = 'administrator' | 'company' | 'customer'

/**
 * Props for ProjectBoard.
 * (columns[] can lack a `tasks` field initially; we will merge tasks ourselves.)
 */
export interface ProjectBoardProps {
  variant: BoardVariant
  boardType: BoardType
  company?: CompanyInfo

  columns?: {
    _id: string
    title: string
    description: string
  }[]

  tasks?: Task[]

  rawStatuses: RawStatus[]
  rawSubStatuses: RawSubStatus[]
  rawTopics: RawTopic[]
  rawQueues: RawQueue[]
  rawArticles: RawArticle[]
  rawCustomers: RawCustomer[]
  rawEmployees: RawEmployee[]
  rawSeverityLevels: RawSeverityLevel[]

  /**
   * If your app wants to pass "companyAccounts" or "administrators" data
   * to the ManageTask component, you can define them here.
   *
   * Example: companyAccounts: CompanyInfo[],
   * administrators: RawAdministrator[] (or Administrator[]).
   */
  companyAccounts?: CompanyInfo[]
  administrators?: RawAdministrator[] | Administrator[]

  /**
   * If your app wants to control the "ShowTask" and "ManageTask" modals externally,
   * store them here as string states representing the task ID or '-1'.
   */
  showTaskOpen?: string
  manageTaskOpen?: string

  /** Optional callback to update the store when a task changes columns, etc. */
  onUpdateTask?: (args: OnUpdateTaskArgs) => void

  /** If ShowTask supports "Edit," "Delete," or "Duplicate," pass them here. */
  onEdit?: (args: { _id: string }) => void
  onDelete?: (args: { _id: string }) => void
  onDuplicate?: (args: { _id: string }) => void
  onCloseTask?: (args: { _id: string }) => void

  /**
   * If ShowTask calls onComment with both commentText and _id,
   * define the signature here. You can also do (text: string) => void if that’s your design.
   */
  onComment?: (commentText: string, _id: string) => void
}
