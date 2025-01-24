// src\components\ProjectBoard\ShowTask\client.tsx

'use client'

import React, { useState } from 'react'
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Chip,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

// Import your custom components
import Typography from '../../Typography'
import TextField from '../../TextField'
import CustomButton from '../../Button'

// Import colors from your palette
import { gunpowder, woad, red, white, black } from '../../../styles/palette' // adjust import path if needed

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
  nextActionDate?: string

  // Called when user clicks "Close Task" or "Comment"
  onCloseTask?: () => void
  onComment?: (commentText: string) => void

  // Called when user clicks Edit, Delete, or Duplicate.
  // If they exist, we display the respective buttons.
  onEdit?: () => void
  onDelete?: () => void
  onDuplicate?: () => void
}

const ShowTask: React.FC<ShowTaskProps> = ({
  open,
  onClose,

  // Use placeholder text if no props are passed
  taskTitle = 'Task Title',
  createdBy = '{firstname and lastname}',
  description = 'This is the description of the task and can be edited by hitting the edit button otherwise it is a noneditable page.',
  comments = [
    {
      _id: 'example-comment',
      authorName: '{firstname and lastname}',
      text: 'This is a comment on the task and can be made by any user.',
    },
  ],

  // Right side placeholders (Figma example)
  customerAssigned = 'Bobbie Sue',
  severity = 'Critical',
  schedulingQueue = 'Technologies Unlimited',
  status = 'Open',
  subStatus = 'In Progress',
  topics = ['Technical Support'],
  knowledgebaseArticles = ['How to Troubleshoot Stuff'],
  teamMemberAssigned = 'Matthew Goluba',
  nextActionDate = '09/15/2023 - 8:30AM CST',

  onCloseTask,
  onComment,
  onEdit,
  onDelete,
  onDuplicate,
}) => {
  // Track new comment text
  const [newComment, setNewComment] = useState('')

  // Handler for adding a comment
  const handleComment = () => {
    if (onComment && newComment.trim() !== '') {
      onComment(newComment.trim())
      setNewComment('')
    }
  }

  // Reusable style for each label+Chip row on the right
  const rightSideRowStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 0.5,
    pb: 1,
    borderBottom: '1px solid black',
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      {/* Title row, with an "X" and action buttons on the right */}
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {/* Task Title (bold) */}
          <Typography
            fontvariant="merriparagraph"
            fontcolor="black"
            text={taskTitle}
            sx={{ fontSize: '18px', fontWeight: 'bold' }}
          />
          {/* Subtitle: "created by [name]" */}
          <Typography
            fontvariant="merriparagraph"
            fontcolor="gray"
            text={`created by ${createdBy}`}
            sx={{ fontSize: '14px' }}
          />
        </Box>

        {/* Right-side top actions: Edit / Delete / Duplicate + an "X" */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
            {onEdit && (
              <CustomButton
                text="Edit"
                fontcolor="black"
                backgroundcolor="none"
                onClick={onEdit}
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
          </Box>

          <IconButton onClick={onClose} sx={{ alignSelf: 'flex-start' }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 2 }}>
          {/* Left side: description, existing comments, new comment */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Task Description block */}
            <Box
              sx={{
                border: '1px solid #ccc',
                padding: '8px',
                borderRadius: '4px',
              }}
            >
              <Typography
                fontvariant="merriparagraph"
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
                  border: '1px solid #ccc',
                  padding: '8px',
                  borderRadius: '4px',
                }}
              >
                <Typography
                  fontvariant="merriparagraph"
                  fontcolor="black"
                  text={comment.authorName}
                  sx={{ fontWeight: 'bold' }}
                />
                <Typography
                  fontvariant="merriparagraph"
                  fontcolor="black"
                  text={comment.text}
                  sx={{ fontSize: '14px', mt: 0.5 }}
                />
              </Box>
            ))}

            {/* New Comment Box */}
            <Box
              sx={{
                border: '1px solid #ccc',
                padding: '8px',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <TextField
                label="Comment"
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                multiline
                minRows={3}
              />
              <Box sx={{ display: 'flex', gap: 1 }}>
                {/* "Close Task" and "Comment" buttons */}
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

          {/* Right side: black box around labeled fields+chips */}
          <Box
            sx={{
              border: '2px solid black',
              borderRadius: '8px',
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {/* Customer Assigned */}
            <Box sx={rightSideRowStyle}>
              <Typography
                fontvariant="merriparagraph"
                fontcolor="black"
                text="Customer Assigned"
                sx={{ fontWeight: 'bold', fontSize: '14px' }}
              />
              <Chip
                label={customerAssigned}
                variant="filled"
                sx={{
                  backgroundColor: woad.main,
                  color: white.main,
                }}
              />
            </Box>

            {/* Severity */}
            <Box sx={rightSideRowStyle}>
              <Typography
                fontvariant="merriparagraph"
                fontcolor="black"
                text="Severity"
                sx={{ fontWeight: 'bold', fontSize: '14px' }}
              />
              <Chip
                label={severity}
                variant="filled"
                sx={{
                  backgroundColor: red.main,
                  color: white.main,
                }}
              />
            </Box>

            {/* Scheduling Queue */}
            <Box sx={rightSideRowStyle}>
              <Typography
                fontvariant="merriparagraph"
                fontcolor="black"
                text="Scheduling Queue"
                sx={{ fontWeight: 'bold', fontSize: '14px' }}
              />
              <Chip
                label={schedulingQueue}
                variant="filled"
                sx={{
                  // Example pinkish color
                  backgroundColor: '#C48EA6',
                  color: white.main,
                }}
              />
            </Box>

            {/* Status */}
            <Box sx={rightSideRowStyle}>
              <Typography
                fontvariant="merriparagraph"
                fontcolor="black"
                text="Status"
                sx={{ fontWeight: 'bold', fontSize: '14px' }}
              />
              <Chip
                label={status}
                variant="filled"
                sx={{
                  backgroundColor: black.main,
                  color: white.main,
                }}
              />
            </Box>

            {/* Sub Status */}
            <Box sx={rightSideRowStyle}>
              <Typography
                fontvariant="merriparagraph"
                fontcolor="black"
                text="Sub Status"
                sx={{ fontWeight: 'bold', fontSize: '14px' }}
              />
              <Chip label={subStatus} variant="filled" color="info" />
            </Box>

            {/* Topics */}
            <Box sx={rightSideRowStyle}>
              <Typography
                fontvariant="merriparagraph"
                fontcolor="black"
                text="Topics"
                sx={{ fontWeight: 'bold', fontSize: '14px' }}
              />
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                {topics.map((topic, idx) => (
                  <Chip
                    key={idx}
                    label={topic}
                    variant="filled"
                    color="success"
                  />
                ))}
              </Box>
            </Box>

            {/* Knowledgebase Articles */}
            <Box sx={rightSideRowStyle}>
              <Typography
                fontvariant="merriparagraph"
                fontcolor="black"
                text="Knowledgebase Articles"
                sx={{ fontWeight: 'bold', fontSize: '14px' }}
              />
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                {knowledgebaseArticles.map((article, idx) => (
                  <Chip
                    key={idx}
                    label={article}
                    variant="filled"
                    color="warning"
                  />
                ))}
              </Box>
            </Box>

            {/* Team Member Assigned */}
            <Box sx={rightSideRowStyle}>
              <Typography
                fontvariant="merriparagraph"
                fontcolor="black"
                text="Team Member Assigned"
                sx={{ fontWeight: 'bold', fontSize: '14px' }}
              />
              <Chip
                label={teamMemberAssigned}
                variant="filled"
                sx={{
                  backgroundColor: woad.main,
                  color: white.main,
                }}
              />
            </Box>

            {/* Next Action Date */}
            <Box sx={rightSideRowStyle}>
              <Typography
                fontvariant="merriparagraph"
                fontcolor="black"
                text="Next Action Date"
                sx={{ fontWeight: 'bold', fontSize: '14px' }}
              />
              <Typography
                fontvariant="merriparagraph"
                fontcolor="black"
                text={nextActionDate}
                sx={{ fontSize: '14px' }}
              />
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ShowTask
