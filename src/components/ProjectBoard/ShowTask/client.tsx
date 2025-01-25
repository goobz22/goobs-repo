// src\components\ProjectBoard\ShowTask\client.tsx

'use client'

import React, { useState } from 'react'
import { Box, Dialog, DialogContent, IconButton, Chip } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

// Import your custom components
import Typography from '../../Typography'
import CustomButton from '../../Button'
import ComplexTextEditor from '../../ComplexTextEditor'

// Import colors from your palette
import { gunpowder, woad, red, white, black } from '../../../styles/palette'

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
    pb: 2,
    borderBottom: '1px solid black',
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      /* This ensures the black outline follows the dialog corners */
      PaperProps={{
        sx: {
          border: '2px solid black',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: 'none', // remove default elevation shadow
        },
      }}
    >
      {/* Remove border from DialogContent, so we rely on the Paper's outline */}
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

            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Main content area: description/comments in left column, detail chips in right column */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 2 }}>
          {/* LEFT COLUMN */}
          <Box sx={{ p: 2 }}>
            {/* Description */}
            <Box
              sx={{
                pb: 2,
                mb: 2,
                borderBottom: '1px solid black',
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
                }}
              >
                {/* Author Name (bold) */}
                <Typography
                  fontvariant="merrih5"
                  fontcolor="black"
                  text={comment.authorName}
                  sx={{ display: 'block', fontWeight: 'bold', mb: 0.5 }}
                />
                {/* Comment Text on its own line below author */}
                <Typography
                  fontvariant="merriparagraph"
                  fontcolor="black"
                  text={comment.text}
                  sx={{ display: 'block', fontSize: '14px', mt: 0.5 }}
                />
              </Box>
            ))}

            {/* New Comment Editor + Buttons */}
            <Box
              sx={{
                pb: 2,
                mb: 2,
                borderBottom: '1px solid black',
              }}
            >
              <ComplexTextEditor
                value={newComment}
                onChange={val => setNewComment(val)}
                label="Comment"
                minRows={3}
                editorType="simple" // or "complex" if you prefer a full toolbar
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
                  mt: 1,
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
                  mt: 1,
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
                  backgroundColor: '#C48EA6',
                  color: white.main,
                  mt: 1,
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
                  mt: 1,
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
              <Chip
                label={subStatus}
                variant="filled"
                color="info"
                sx={{ mt: 1 }}
              />
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
                  mt: 1,
                }}
              />
            </Box>

            {/* Next Action Date */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                sx={{ fontSize: '14px', mt: 1 }}
              />
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ShowTask
