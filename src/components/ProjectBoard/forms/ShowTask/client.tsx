'use client'

import React, { useState, useEffect } from 'react'
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Chip,
  Menu,
  MenuItem,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MoreVertIcon from '@mui/icons-material/MoreVert'

// Custom components
import Typography from '../../../Typography'
import CustomButton from '../../../Button'
import ComplexTextEditor from '../../../ComplexTextEditor'
import SearchableDropdown from '../../../SearchableDropdown'
import MultipleSelectChip from '../../../MultiSelect'
import DateField from '../../../DateField'
import TextField from '../../../TextField'

// Colors
import { gunpowder, woad, red, white, black } from '../../../../styles/palette'

/** A single historical revision of a comment. */
export interface CommentEditHistory {
  _id: string
  editedBy: string
  editedAt: string
  text?: string
  /** We'll add a flag to distinguish "original" from "edit" in the dropdown label. */
  isOriginal?: boolean
}

/** A single comment with creation/update times, optional edit history. */
export interface ShowTaskComment {
  _id: string
  authorName: string
  text: string

  createdAt?: string
  updatedAt?: string
  lastEditedBy?: string

  editHistory?: CommentEditHistory[]
}

/**
 * Props for ShowTask.
 */
export interface ShowTaskProps {
  open: boolean
  onClose: () => void

  // Main Task fields
  taskTitle?: string
  createdBy?: string
  description?: string

  // Comments array
  comments?: ShowTaskComment[]

  // Right-side fields
  customerAssigned?: string
  severity?: string
  schedulingQueue?: string
  status?: string
  subStatus?: string
  topics?: string[]
  knowledgebaseArticles?: string[]
  teamMemberAssigned?: string
  nextActionDate?: string

  // Options for dropdowns / multi-select
  customerOptions?: string[]
  severityOptions?: string[]
  schedulingQueueOptions?: string[]
  statusOptions?: string[]
  subStatusOptions?: string[]
  topicOptions?: string[]
  knowledgebaseArticleOptions?: string[]
  teamMemberOptions?: string[]

  // Which user is viewing / editing? If provided, only that user can edit
  // comments they authored. We'll display "Last edited by {currentUserName}" if they do.
  currentUserName?: string

  // Callback actions
  onCloseTask?: () => void
  onComment?: (commentText: string) => void
  onEdit?: (updatedData: {
    taskTitle: string
    description: string
    customerAssigned: string
    severity: string
    schedulingQueue: string
    status: string
    subStatus: string
    topics: string[]
    knowledgebaseArticles: string[]
    teamMemberAssigned: string
    nextActionDate: string
  }) => void
  onDelete?: () => void
  onDuplicate?: () => void
  /**
   * Called when a comment’s text is edited. We pass (commentId, newText).
   */
  onEditComment?: (commentId: string, newText: string) => void
}

/** A small helper to format e.g. "3 hours ago" for creation/update times. */
function formatRelativeTime(dateStr?: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return ''
  const now = new Date()
  const diff = +now - +d
  if (diff < 0) return 'in the future?'
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `${mins} minute${mins === 1 ? '' : 's'} ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`
  const days = Math.floor(hours / 24)
  return `${days} day${days === 1 ? '' : 's'} ago`
}

function safeParseDate(dateStr?: string): Date | null {
  if (!dateStr) return null
  const d = new Date(dateStr)
  return Number.isNaN(d.getTime()) ? null : d
}

const ShowTask: React.FC<ShowTaskProps> = ({
  open,
  onClose,

  // Main fields
  taskTitle = '',
  createdBy = '',
  description = '',
  comments = [],

  // Right-side fields
  customerAssigned = '',
  severity = '',
  schedulingQueue = '',
  status = '',
  subStatus = '',
  topics = [],
  knowledgebaseArticles = [],
  teamMemberAssigned = '',
  nextActionDate = '',

  // Dropdown / multi-select options
  customerOptions = [],
  severityOptions = [],
  schedulingQueueOptions = [],
  statusOptions = [],
  subStatusOptions = [],
  topicOptions = [],
  knowledgebaseArticleOptions = [],
  teamMemberOptions = [],

  currentUserName,

  // Actions
  onCloseTask,
  onComment,
  onEdit,
  onDelete,
  onDuplicate,
  onEditComment,
}) => {
  // -------------------- STATE --------------------
  // 1) Local comment state => updates appear immediately
  const [localComments, setLocalComments] =
    useState<ShowTaskComment[]>(comments)

  // 2) For adding new comment
  const [newComment, setNewComment] = useState('')
  // 3) Whether we are editing the left-side fields
  const [isEditing, setIsEditing] = useState(false)
  // 4) formData for all left & right fields (including description)
  const [formData, setFormData] = useState({
    taskTitle,
    description,
    customerAssigned,
    severity,
    schedulingQueue,
    status,
    subStatus,
    topics,
    knowledgebaseArticles,
    teamMemberAssigned,
    nextActionDate,
  })

  // 5) For editing an individual comment’s text
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null)
  const [editingCommentText, setEditingCommentText] = useState('')

  // 6) Let user flick through old revisions: selectedRevisions[commentId] = revisionId
  const [selectedRevisions, setSelectedRevisions] = useState<
    Record<string, string | null>
  >({})

  // -------------------- SETUP ORIGINAL REVISIONS --------------------
  useEffect(() => {
    setLocalComments(prev =>
      prev.map(c => {
        if (!c.editHistory || c.editHistory.length === 0) {
          // We'll treat the comment's createdAt as the time of the "original" version
          const originalTime = c.createdAt || new Date().toISOString()
          const originalRev: CommentEditHistory = {
            _id: `rev-orig-${c._id}`,
            editedBy: c.authorName,
            editedAt: originalTime,
            text: c.text,
            isOriginal: true,
          }
          return {
            ...c,
            editHistory: [originalRev],
          }
        }
        return c
      })
    )
  }, [])

  // -------------------- MAIN COMMENT ACTIONS --------------------
  /** Create a new comment in local state with `currentUserName` as author. */
  const handleComment = () => {
    const trimmed = newComment.trim()
    if (!trimmed) return

    // Build a new comment object
    const newLocalComment: ShowTaskComment = {
      _id: `temp-${Date.now()}`,
      authorName: currentUserName || 'UnknownUser',
      text: trimmed,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      lastEditedBy: currentUserName || 'UnknownUser',
      editHistory: [
        {
          _id: `rev-orig-temp-${Date.now()}`,
          editedBy: currentUserName || 'UnknownUser',
          editedAt: new Date().toISOString(),
          text: trimmed,
          isOriginal: true,
        },
      ],
    }

    // Add to local state
    setLocalComments([...localComments, newLocalComment])

    // Also call the parent’s onComment if provided
    onComment?.(trimmed)

    // Clear the input
    setNewComment('')
  }

  /** Begin editing a comment’s text. */
  const startEditingComment = (commentId: string, currentText: string) => {
    setEditingCommentId(commentId)
    setEditingCommentText(currentText)
  }

  /** Save the edited text => call onEditComment + local update. */
  const saveEditingComment = (commentId: string) => {
    onEditComment?.(commentId, editingCommentText)

    setLocalComments(prev =>
      prev.map(c => {
        if (c._id !== commentId) return c

        const newUpdatedAt = new Date().toISOString()
        const newEditedBy = currentUserName || 'UnknownUser'

        // Also push a new revision to editHistory
        const newRevision: CommentEditHistory = {
          _id: `rev-${Date.now()}`,
          editedBy: newEditedBy,
          editedAt: newUpdatedAt,
          text: editingCommentText,
          isOriginal: false,
        }

        return {
          ...c,
          text: editingCommentText,
          updatedAt: newUpdatedAt,
          lastEditedBy: newEditedBy,
          editHistory: [...(c.editHistory || []), newRevision],
        }
      })
    )
    setEditingCommentId(null)
    setEditingCommentText('')
    // Clear any selected revision
    setSelectedRevisions(prev => ({ ...prev, [commentId]: null }))
  }

  /** Cancel editing a comment. */
  const cancelEditingComment = () => {
    setEditingCommentId(null)
    setEditingCommentText('')
  }

  // -------------------- RIGHT-SIDE "EDIT" TOGGLE --------------------
  const handleEditToggle = () => {
    if (isEditing) {
      // If we were editing, clicking "Save" calls onEdit with new fields (including description)
      onEdit?.({
        taskTitle: formData.taskTitle,
        description: formData.description,
        customerAssigned: formData.customerAssigned,
        severity: formData.severity,
        schedulingQueue: formData.schedulingQueue,
        status: formData.status,
        subStatus: formData.subStatus,
        topics: formData.topics,
        knowledgebaseArticles: formData.knowledgebaseArticles,
        teamMemberAssigned: formData.teamMemberAssigned,
        nextActionDate: formData.nextActionDate,
      })
      setIsEditing(false)
    } else {
      setIsEditing(true)
    }
  }

  // -------------------- REVISION SELECT --------------------
  const handleSelectRevision = (
    commentId: string,
    revisionId: string | null
  ) => {
    setSelectedRevisions(prev => ({
      ...prev,
      [commentId]: revisionId || null,
    }))
  }

  // Reusable style for each right-side row
  const rightSideRowStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    pb: 2,
    borderBottom: '1px solid black',
    mx: -2,
    px: 2,
  }

  // ----- For the triple-dot menu on each comment -----
  interface CommentMenuState {
    anchor: HTMLElement | null
    commentId: string | null
  }
  const [commentMenu, setCommentMenu] = useState<CommentMenuState>({
    anchor: null,
    commentId: null,
  })

  const openCommentMenu = (
    event: React.MouseEvent<HTMLElement>,
    commentId: string
  ) => {
    setCommentMenu({ anchor: event.currentTarget, commentId })
  }
  const closeCommentMenu = () => {
    setCommentMenu({ anchor: null, commentId: null })
  }

  const handleEditClick = (commentId: string, text: string) => {
    closeCommentMenu()
    startEditingComment(commentId, text)
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          border: '2px solid black',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: 'none',
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        {/* =================== TOP ROW: Title + CreatedBy + Edit/Delete/Close =================== */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2,
            borderBottom: '2px solid black',
          }}
        >
          {/* LEFT: Title & createdBy */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {isEditing ? (
              <TextField
                label="Task Title"
                value={formData.taskTitle}
                onChange={e =>
                  setFormData(prev => ({ ...prev, taskTitle: e.target.value }))
                }
                outlinecolor={black.main}
                fontcolor={black.main}
                shrunklabelposition="aboveNotch"
                sx={{ mb: 1 }}
              />
            ) : (
              <Typography
                fontvariant="merrih4"
                fontcolor="black"
                text={formData.taskTitle}
                sx={{ fontSize: '18px', fontWeight: 'bold' }}
              />
            )}
            <Typography
              fontvariant="merrih5"
              fontcolor="gray"
              text={`created by ${createdBy}`}
              sx={{ fontSize: '14px', mt: 0.5 }}
            />
          </Box>

          {/* RIGHT: Edit, Delete, Duplicate, Close */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {onEdit && (
              <CustomButton
                text={isEditing ? 'Save' : 'Edit'}
                fontcolor="black"
                backgroundcolor="none"
                onClick={handleEditToggle}
              />
            )}
            {onDelete && (
              <CustomButton
                text="Delete"
                fontcolor="black"
                backgroundcolor="none"
                onClick={onDelete}
              />
            )}
            {onDuplicate && (
              <CustomButton
                text="Duplicate"
                fontcolor="black"
                backgroundcolor="none"
                onClick={onDuplicate}
              />
            )}
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* =================== MAIN CONTENT: LEFT (Description & Comments) + RIGHT (Fields) =================== */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 0 }}>
          {/* LEFT COLUMN */}
          <Box sx={{ p: 2, pt: 0 }}>
            {/* DESCRIPTION BOX */}
            <Box
              sx={{
                border: '1px solid black',
                mx: -2,
                px: 2,
                pt: '5px',
                pb: '10px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* If editing, show ComplexTextEditor. Otherwise, heading + text. */}
              {isEditing ? (
                <>
                  <Typography
                    fontvariant="merrih5"
                    fontcolor="black"
                    text="Task Description"
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  />
                  <ComplexTextEditor
                    value={formData.description}
                    onChange={val =>
                      setFormData(prev => ({
                        ...prev,
                        description: val,
                      }))
                    }
                    label="Task Description"
                    editorType="simple"
                    minRows={3}
                  />
                </>
              ) : (
                <>
                  <Typography
                    fontvariant="merrih5"
                    fontcolor="black"
                    text="Task Description"
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  />
                  <Typography
                    fontvariant="merrih6"
                    fontcolor="black"
                    text={formData.description}
                    sx={{ fontSize: '14px', whiteSpace: 'pre-wrap' }}
                  />
                </>
              )}
            </Box>

            {/* EXISTING COMMENTS */}
            {localComments.map(comment => {
              const selectedRevId = selectedRevisions[comment._id] || null

              let displayedText = comment.text
              let displayedTime = comment.updatedAt
              let displayedAuthor = comment.lastEditedBy || comment.authorName

              if (selectedRevId && comment.editHistory) {
                const foundRev = comment.editHistory.find(
                  r => r._id === selectedRevId
                )
                if (foundRev) {
                  displayedText = foundRev.text || ''
                  displayedTime = foundRev.editedAt
                  displayedAuthor = foundRev.editedBy
                }
              }

              const createdTime = formatRelativeTime(comment.createdAt)
              const updatedTime = formatRelativeTime(displayedTime)
              const hasHistory =
                comment.editHistory && comment.editHistory.length > 0
              const canEdit =
                currentUserName && comment.authorName === currentUserName

              const isMenuOpen =
                commentMenu.anchor && commentMenu.commentId === comment._id

              // If user is editing THIS comment, show the editor; otherwise show the layout
              return (
                <Box key={comment._id} sx={{ mb: 0 }}>
                  {editingCommentId === comment._id ? (
                    // ========== EDITING THIS COMMENT ==========
                    <Box
                      sx={{
                        border: '1px solid black',
                        mx: -2,
                        px: 2,
                        py: 1,
                      }}
                    >
                      <ComplexTextEditor
                        value={editingCommentText}
                        onChange={val => setEditingCommentText(val)}
                        label="Edit Comment"
                        minRows={3}
                        editorType="simple"
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          mt: 1,
                          gap: 1,
                        }}
                      >
                        <CustomButton
                          text="Save"
                          backgroundcolor={woad.dark}
                          fontcolor={white.main}
                          onClick={() => saveEditingComment(comment._id)}
                        />
                        <CustomButton
                          text="Cancel"
                          backgroundcolor="none"
                          fontcolor="black"
                          onClick={cancelEditingComment}
                        />
                      </Box>
                    </Box>
                  ) : (
                    // ========== DISPLAY COMMENT (with top row & bottom-left text) ==========
                    <Box
                      sx={{
                        border: '1px solid black',
                        mx: -2,
                        px: 2,
                        py: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '80px',
                      }}
                    >
                      {/* Top Row: Author + triple-dot menu */}
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                        }}
                      >
                        {/* Left side: Author name */}
                        <Typography
                          fontvariant="merrih5"
                          fontcolor="black"
                          text={comment.authorName}
                          sx={{ fontWeight: 'bold' }}
                        />

                        {/* Right side: triple-dot icon => menu */}
                        <IconButton
                          size="small"
                          onClick={e => openCommentMenu(e, comment._id)}
                          sx={{ mb: 1 }}
                        >
                          <MoreVertIcon fontSize="small" />
                        </IconButton>

                        <Menu
                          anchorEl={commentMenu.anchor}
                          open={Boolean(isMenuOpen)}
                          onClose={closeCommentMenu}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                        >
                          {/* Normal 'Edit' item with default hover style */}
                          {onEditComment && canEdit && (
                            <MenuItem
                              onClick={() =>
                                handleEditClick(comment._id, comment.text)
                              }
                            >
                              Edit
                            </MenuItem>
                          )}
                          {/* "Revision History" item => no grey hover */}
                          {hasHistory && (
                            <MenuItem
                              disableRipple
                              sx={{
                                py: 0.5,
                                cursor: 'default',
                                '&:hover': {
                                  backgroundColor: 'transparent',
                                },
                              }}
                            >
                              <Box sx={{ width: 220 }}>
                                <SearchableDropdown
                                  label="Revision History"
                                  shrunklabelposition="aboveNotch"
                                  placeholder="Select revision..."
                                  options={(comment.editHistory || []).map(
                                    rev => {
                                      const revTime = formatRelativeTime(
                                        rev.editedAt
                                      )
                                      const prefix = rev.isOriginal
                                        ? 'Original'
                                        : 'Edited'
                                      return {
                                        value: rev._id,
                                        attribute1: `${prefix} ${revTime} by ${rev.editedBy}`,
                                      }
                                    }
                                  )}
                                  onChange={opt =>
                                    handleSelectRevision(
                                      comment._id,
                                      opt?.value || null
                                    )
                                  }
                                  outlinecolor={black.main}
                                  fontcolor={black.main}
                                  defaultValue={selectedRevId || undefined}
                                />
                              </Box>
                            </MenuItem>
                          )}
                        </Menu>
                      </Box>

                      {/* Bottom area: comment text + creation/edit info */}
                      <Box sx={{ mt: 'auto' }}>
                        <Typography
                          fontvariant="merriparagraph"
                          fontcolor="black"
                          text={displayedText}
                          sx={{ fontSize: '14px', mt: 0.5 }}
                        />
                        <Box sx={{ fontSize: '12px', color: 'gray', mt: 0.5 }}>
                          {comment.createdAt && (
                            <span>
                              Created {createdTime} by {comment.authorName}
                            </span>
                          )}
                          {displayedTime && displayedAuthor && (
                            <span>
                              {' '}
                              | Edited {updatedTime} by {displayedAuthor}
                            </span>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
              )
            })}

            {/* NEW COMMENT EDITOR */}
            <Box sx={{ mx: -2, px: 2, py: 0 }}>
              <ComplexTextEditor
                value={newComment}
                onChange={val => setNewComment(val)}
                label="Add Comment"
                minRows={3}
                editorType="simple"
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  mt: 2,
                  gap: 2,
                }}
              >
                {onCloseTask && (
                  <CustomButton
                    text="Close Task"
                    backgroundcolor={gunpowder.main}
                    fontcolor={white.main}
                    onClick={onCloseTask}
                  />
                )}
                <CustomButton
                  text="Comment"
                  backgroundcolor={woad.dark}
                  fontcolor={white.main}
                  onClick={handleComment}
                />
              </Box>
            </Box>
          </Box>

          {/* RIGHT COLUMN */}
          <Box
            sx={{
              borderLeft: '2px solid black',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {/* Customer Assigned */}
            <Box sx={rightSideRowStyle}>
              {!isEditing && (
                <Typography
                  fontvariant="merriparagraph"
                  fontcolor="black"
                  text="Customer Assigned"
                  sx={{ fontWeight: 'bold', fontSize: '14px' }}
                />
              )}
              {isEditing ? (
                <SearchableDropdown
                  label="Customer Assigned"
                  options={customerOptions.map(v => ({ value: v }))}
                  shrunklabelposition="aboveNotch"
                  defaultValue={formData.customerAssigned}
                  onChange={newVal =>
                    setFormData(prev => ({
                      ...prev,
                      customerAssigned: newVal?.value || '',
                    }))
                  }
                  outlinecolor={black.main}
                  fontcolor={black.main}
                />
              ) : (
                formData.customerAssigned && (
                  <Chip
                    label={formData.customerAssigned}
                    variant="filled"
                    sx={{
                      backgroundColor: woad.main,
                      color: white.main,
                      mt: 1,
                    }}
                  />
                )
              )}
            </Box>

            {/* Severity */}
            <Box sx={rightSideRowStyle}>
              {!isEditing && (
                <Typography
                  fontvariant="merriparagraph"
                  fontcolor="black"
                  text="Severity"
                  sx={{ fontWeight: 'bold', fontSize: '14px' }}
                />
              )}
              {isEditing ? (
                <SearchableDropdown
                  label="Severity"
                  options={severityOptions.map(opt => ({ value: opt }))}
                  shrunklabelposition="aboveNotch"
                  defaultValue={formData.severity}
                  onChange={newVal =>
                    setFormData(prev => ({
                      ...prev,
                      severity: newVal?.value || '',
                    }))
                  }
                  outlinecolor={black.main}
                  fontcolor={black.main}
                />
              ) : formData.severity ? (
                <Chip
                  label={formData.severity}
                  variant="filled"
                  sx={{
                    backgroundColor: red.main,
                    color: white.main,
                    mt: 1,
                  }}
                />
              ) : null}
            </Box>

            {/* Scheduling Queue */}
            <Box sx={rightSideRowStyle}>
              {!isEditing && (
                <Typography
                  fontvariant="merriparagraph"
                  fontcolor="black"
                  text="Scheduling Queue"
                  sx={{ fontWeight: 'bold', fontSize: '14px' }}
                />
              )}
              {isEditing ? (
                <SearchableDropdown
                  label="Scheduling Queue"
                  options={schedulingQueueOptions.map(opt => ({ value: opt }))}
                  shrunklabelposition="aboveNotch"
                  defaultValue={formData.schedulingQueue}
                  onChange={newVal =>
                    setFormData(prev => ({
                      ...prev,
                      schedulingQueue: newVal?.value || '',
                    }))
                  }
                  outlinecolor={black.main}
                  fontcolor={black.main}
                />
              ) : formData.schedulingQueue ? (
                <Chip
                  label={formData.schedulingQueue}
                  variant="filled"
                  sx={{
                    backgroundColor: '#C48EA6',
                    color: white.main,
                    mt: 1,
                  }}
                />
              ) : null}
            </Box>

            {/* Status */}
            <Box sx={rightSideRowStyle}>
              {!isEditing && (
                <Typography
                  fontvariant="merriparagraph"
                  fontcolor="black"
                  text="Status"
                  sx={{ fontWeight: 'bold', fontSize: '14px' }}
                />
              )}
              {isEditing ? (
                <SearchableDropdown
                  label="Status"
                  options={statusOptions.map(opt => ({ value: opt }))}
                  shrunklabelposition="aboveNotch"
                  defaultValue={formData.status}
                  onChange={newVal =>
                    setFormData(prev => ({
                      ...prev,
                      status: newVal?.value || '',
                    }))
                  }
                  outlinecolor={black.main}
                  fontcolor={black.main}
                />
              ) : formData.status ? (
                <Chip
                  label={formData.status}
                  variant="filled"
                  sx={{
                    backgroundColor: black.main,
                    color: white.main,
                    mt: 1,
                  }}
                />
              ) : null}
            </Box>

            {/* Sub Status */}
            <Box sx={rightSideRowStyle}>
              {!isEditing && (
                <Typography
                  fontvariant="merriparagraph"
                  fontcolor="black"
                  text="Sub Status"
                  sx={{ fontWeight: 'bold', fontSize: '14px' }}
                />
              )}
              {isEditing ? (
                <SearchableDropdown
                  label="Sub Status"
                  options={subStatusOptions.map(opt => ({ value: opt }))}
                  defaultValue={formData.subStatus}
                  onChange={newVal =>
                    setFormData(prev => ({
                      ...prev,
                      subStatus: newVal?.value || '',
                    }))
                  }
                  outlinecolor={black.main}
                  fontcolor={black.main}
                  shrunklabelposition="aboveNotch"
                />
              ) : formData.subStatus ? (
                <Chip
                  label={formData.subStatus}
                  variant="filled"
                  color="info"
                  sx={{ mt: 1 }}
                />
              ) : null}
            </Box>

            {/* Topics (Multi-select) */}
            <Box sx={rightSideRowStyle}>
              {!isEditing && (
                <Typography
                  fontvariant="merriparagraph"
                  fontcolor="black"
                  text="Topics"
                  sx={{ fontWeight: 'bold', fontSize: '14px' }}
                />
              )}
              {isEditing ? (
                <MultipleSelectChip
                  label="Topics"
                  options={topicOptions}
                  defaultSelected={formData.topics}
                  onChange={values =>
                    setFormData(prev => ({ ...prev, topics: values }))
                  }
                  outlinecolor={black.main}
                  fontcolor={black.main}
                  sx={{ mt: 1 }}
                />
              ) : formData.topics.length > 0 ? (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {formData.topics.map((topic, idx) => (
                    <Chip
                      key={idx}
                      label={topic}
                      variant="filled"
                      color="success"
                    />
                  ))}
                </Box>
              ) : null}
            </Box>

            {/* Knowledgebase Articles (Multi-select) */}
            <Box sx={rightSideRowStyle}>
              {!isEditing && (
                <Typography
                  fontvariant="merriparagraph"
                  fontcolor="black"
                  text="Knowledgebase Articles"
                  sx={{ fontWeight: 'bold', fontSize: '14px' }}
                />
              )}
              {isEditing ? (
                <MultipleSelectChip
                  label="Knowledgebase Articles"
                  options={knowledgebaseArticleOptions}
                  defaultSelected={formData.knowledgebaseArticles}
                  onChange={values =>
                    setFormData(prev => ({
                      ...prev,
                      knowledgebaseArticles: values,
                    }))
                  }
                  outlinecolor={black.main}
                  fontcolor={black.main}
                  sx={{ mt: 1 }}
                />
              ) : formData.knowledgebaseArticles.length > 0 ? (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {formData.knowledgebaseArticles.map((article, idx) => (
                    <Chip
                      key={idx}
                      label={article}
                      variant="filled"
                      color="warning"
                    />
                  ))}
                </Box>
              ) : null}
            </Box>

            {/* Team Member Assigned */}
            <Box sx={rightSideRowStyle}>
              {!isEditing && (
                <Typography
                  fontvariant="merriparagraph"
                  fontcolor="black"
                  text="Team Member Assigned"
                  sx={{ fontWeight: 'bold', fontSize: '14px' }}
                />
              )}
              {isEditing ? (
                <SearchableDropdown
                  label="Team Member Assigned"
                  options={teamMemberOptions.map(opt => ({ value: opt }))}
                  defaultValue={formData.teamMemberAssigned}
                  onChange={newVal =>
                    setFormData(prev => ({
                      ...prev,
                      teamMemberAssigned: newVal?.value || '',
                    }))
                  }
                  outlinecolor={black.main}
                  fontcolor={black.main}
                  shrunklabelposition="aboveNotch"
                />
              ) : formData.teamMemberAssigned ? (
                <Chip
                  label={formData.teamMemberAssigned}
                  variant="filled"
                  sx={{
                    backgroundColor: woad.main,
                    color: white.main,
                    mt: 1,
                  }}
                />
              ) : null}
            </Box>

            {/* Next Action Date */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {!isEditing && (
                <Typography
                  fontvariant="merriparagraph"
                  fontcolor="black"
                  text="Next Action Date"
                  sx={{ fontWeight: 'bold', fontSize: '14px' }}
                />
              )}
              {isEditing ? (
                <Box sx={{ mt: 1, width: '100%' }}>
                  <DateField
                    label="Next Action Date"
                    value={safeParseDate(formData.nextActionDate)}
                    onChange={date => {
                      if (date) {
                        const mm = String(date.getMonth() + 1).padStart(2, '0')
                        const dd = String(date.getDate()).padStart(2, '0')
                        const yyyy = date.getFullYear()
                        setFormData(prev => ({
                          ...prev,
                          nextActionDate: `${mm}/${dd}/${yyyy}`,
                        }))
                      } else {
                        setFormData(prev => ({
                          ...prev,
                          nextActionDate: '',
                        }))
                      }
                    }}
                  />
                </Box>
              ) : formData.nextActionDate ? (
                <Typography
                  fontvariant="merriparagraph"
                  fontcolor="black"
                  text={formData.nextActionDate}
                  sx={{ fontSize: '14px', mt: 1 }}
                />
              ) : null}
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ShowTask
