// src\components\ProjectBoard\ShowTask\client.tsx

'use client'

import React, { useState } from 'react'
import { Box, Dialog, DialogContent, IconButton, Chip } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
// NEW: import the edit icon
import EditIcon from '@mui/icons-material/Edit'

// Import your custom components
import Typography from '../../../Typography'
import CustomButton from '../../../Button'
import ComplexTextEditor from '../../../ComplexTextEditor'
import SearchableDropdown from '../../../SearchableDropdown'
import MultipleSelectChip from '../../../MultiSelect'
import DateField from '../../../DateField'

// Import colors from your palette
import { gunpowder, woad, red, white, black } from '../../../../styles/palette'

// Example comment type. You can adapt it to your real data.
export interface ShowTaskComment {
  _id: string
  authorName: string
  text: string
}

/**
 * Props for ShowTask. It expects simple string arrays for `topics` and
 * `knowledgebaseArticles`.
 */
export interface ShowTaskProps {
  open: boolean
  onClose: () => void

  // Optional props for data
  taskTitle?: string
  createdBy?: string
  description?: string
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
  nextActionDate?: string // We'll keep it as a string. We'll parse internally if needed.

  // Called when user clicks "Close Task" or "Comment"
  onCloseTask?: () => void
  onComment?: (commentText: string) => void

  // Called when user clicks Edit (now also Save), Delete, or Duplicate.
  onEdit?: (updatedData: {
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

  // Called when a single comment is edited. Must provide commentId and new text.
  onEditComment?: (commentId: string, newText: string) => void
}

const safeParseDate = (dateStr: string): Date | null => {
  if (!dateStr) return null
  const d = new Date(dateStr)
  return Number.isNaN(d.getTime()) ? null : d
}

const ShowTask: React.FC<ShowTaskProps> = ({
  open,
  onClose,

  // Use placeholder text if no props are passed
  taskTitle = 'Sample Task Title',
  createdBy = 'John Doe',
  description = 'Lorem ipsum dolor sit amet...',
  comments = [
    {
      _id: 'example-1',
      authorName: 'Alice',
      text: 'First comment here!',
    },
    {
      _id: 'example-2',
      authorName: 'Bob',
      text: 'Another comment!',
    },
  ],

  // Right side placeholders
  customerAssigned = 'Bobbie Sue',
  severity = 'High',
  schedulingQueue = 'Tier 1 Support',
  status = 'Open',
  subStatus = 'Pending Info',
  topics = ['Frontend', 'Backend'],
  knowledgebaseArticles = ['Setup Guide', 'Troubleshooting FAQ'],
  teamMemberAssigned = 'Jane Smith',
  nextActionDate = '',

  onCloseTask,
  onComment,
  onEdit,
  onDelete,
  onDuplicate,
  onEditComment,
}) => {
  // Track new comment text (for the big "Comment" box at the bottom of left column)
  const [newComment, setNewComment] = useState('')

  // Track whether we're in editing mode for the right-side fields
  const [isEditing, setIsEditing] = useState(false)

  // Form fields for right side data
  const [formData, setFormData] = useState({
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

  // For editing an individual comment
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null)
  const [editingCommentText, setEditingCommentText] = useState('')

  // ------------------ MAIN COMMENT ("Add Comment") HANDLERS ------------------
  const handleComment = () => {
    if (onComment && newComment.trim() !== '') {
      onComment(newComment.trim())
      setNewComment('')
    }
  }

  // ------------------ EDIT/ SAVE RIGHT-SIDE FIELDS ------------------
  const handleEditToggle = () => {
    if (isEditing) {
      // Currently editing -> "Save"
      onEdit?.({
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
      // Currently not editing -> "Edit"
      setIsEditing(true)
    }
  }

  // ------------------ EDIT INDIVIDUAL COMMENT HANDLERS ------------------
  const startEditingComment = (commentId: string, currentText: string) => {
    setEditingCommentId(commentId)
    setEditingCommentText(currentText)
  }

  const saveEditingComment = (commentId: string) => {
    onEditComment?.(commentId, editingCommentText)
    // End comment edit mode
    setEditingCommentId(null)
    setEditingCommentText('')
  }

  const cancelEditingComment = () => {
    setEditingCommentId(null)
    setEditingCommentText('')
  }

  // Reusable style for each row on the right (negative margin so horizontal rules go edge-to-edge)
  const rightSideRowStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    pb: 2,
    borderBottom: '1px solid black',
    mx: -2,
    px: 2,
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
        {/* Top row: Title + "created by" on its own line + Edit/Delete/Duplicate/Close */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2,
            borderBottom: '2px solid black',
          }}
        >
          {/* Left side: Title and "created by" on separate lines */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              fontvariant="merrih4"
              fontcolor="black"
              text={taskTitle}
              sx={{ fontSize: '18px', fontWeight: 'bold' }}
            />
            <Typography
              fontvariant="merrih5"
              fontcolor="gray"
              text={`created by ${createdBy}`}
              sx={{ fontSize: '14px', mt: 0.5 }}
            />
          </Box>

          {/* Right side: Edit/Delete/Duplicate + Close Icon */}
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

        {/* Main content area: description/comments in left column, detail chips (or dropdowns) in right column */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 0 }}>
          {/* LEFT COLUMN */}
          <Box sx={{ p: 2 }}>
            {/* Description */}
            <Box
              sx={{
                pb: 2,
                mb: 2,
                borderBottom: '1px solid black',
                mx: -2,
                px: 2,
              }}
            >
              <Typography
                fontvariant="merrih6"
                fontcolor="black"
                text={description}
                sx={{ fontSize: '14px', whiteSpace: 'pre-wrap' }}
              />
            </Box>

            {/* Existing Comments */}
            {comments.map(comment => (
              <Box
                key={comment._id}
                sx={{
                  pb: 2,
                  mb: 2,
                  borderBottom: '1px solid black',
                  mx: -2,
                  px: 2,
                }}
              >
                {editingCommentId === comment._id ? (
                  // Editing this particular comment
                  <>
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
                  </>
                ) : (
                  // Just displaying this comment
                  <>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography
                        fontvariant="merrih5"
                        fontcolor="black"
                        text={comment.authorName}
                        sx={{ fontWeight: 'bold' }}
                      />
                      {onEditComment && (
                        <IconButton
                          size="small"
                          onClick={() =>
                            startEditingComment(comment._id, comment.text)
                          }
                          sx={{ ml: 1 }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      )}
                    </Box>

                    <Typography
                      fontvariant="merriparagraph"
                      fontcolor="black"
                      text={comment.text}
                      sx={{ fontSize: '14px', mt: 0.5 }}
                    />
                  </>
                )}
              </Box>
            ))}

            {/* New Comment Editor + Buttons */}
            <Box
              sx={{
                pb: 2,
                mb: 2,
                borderBottom: '1px solid black',
                mx: -2,
                px: 2,
              }}
            >
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
                  options={[
                    { value: 'Bobbie Sue' },
                    { value: 'Alice' },
                    { value: 'Another Customer' },
                  ]}
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
                <Chip
                  label={formData.customerAssigned}
                  variant="filled"
                  sx={{
                    backgroundColor: woad.main,
                    color: white.main,
                    mt: 1,
                  }}
                />
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
                  options={[
                    { value: 'Low' },
                    { value: 'Medium' },
                    { value: 'High' },
                  ]}
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
              ) : (
                <Chip
                  label={formData.severity}
                  variant="filled"
                  sx={{
                    backgroundColor: red.main,
                    color: white.main,
                    mt: 1,
                  }}
                />
              )}
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
                  options={[
                    { value: 'Tier 1 Support' },
                    { value: 'Tier 2 Support' },
                    { value: 'Engineering' },
                  ]}
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
              ) : (
                <Chip
                  label={formData.schedulingQueue}
                  variant="filled"
                  sx={{
                    backgroundColor: '#C48EA6',
                    color: white.main,
                    mt: 1,
                  }}
                />
              )}
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
                  options={[
                    { value: 'Open' },
                    { value: 'Closed' },
                    { value: 'Pending' },
                  ]}
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
              ) : (
                <Chip
                  label={formData.status}
                  variant="filled"
                  sx={{
                    backgroundColor: black.main,
                    color: white.main,
                    mt: 1,
                  }}
                />
              )}
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
                  options={[
                    { value: 'Pending Info' },
                    { value: 'In Progress' },
                    { value: 'Waiting for Customer' },
                  ]}
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
              ) : (
                <Chip
                  label={formData.subStatus}
                  variant="filled"
                  color="info"
                  sx={{ mt: 1 }}
                />
              )}
            </Box>

            {/* Topics */}
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
                  options={['Frontend', 'Backend', 'DevOps', 'QA']}
                  defaultSelected={formData.topics}
                  onChange={values =>
                    setFormData(prev => ({ ...prev, topics: values }))
                  }
                  outlinecolor={black.main}
                  fontcolor={black.main}
                  sx={{ mt: 1 }}
                />
              ) : (
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
              )}
            </Box>

            {/* Knowledgebase Articles */}
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
                  options={['Setup Guide', 'Troubleshooting FAQ', 'How-To Doc']}
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
              ) : (
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
              )}
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
                  options={[
                    { value: 'Jane Smith' },
                    { value: 'John Doe' },
                    { value: 'Alice' },
                  ]}
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
              ) : (
                <Chip
                  label={formData.teamMemberAssigned}
                  variant="filled"
                  sx={{
                    backgroundColor: woad.main,
                    color: white.main,
                    mt: 1,
                  }}
                />
              )}
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
              ) : (
                <Typography
                  fontvariant="merriparagraph"
                  fontcolor="black"
                  text={formData.nextActionDate}
                  sx={{ fontSize: '14px', mt: 1 }}
                />
              )}
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ShowTask
