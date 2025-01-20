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

  /** Optional callback to update the store when a task changes columns, etc. */
  onUpdateTask?: (args: OnUpdateTaskArgs) => void
}
