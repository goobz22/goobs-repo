// src/components/ComplexTextEditor/index.tsx

import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import SimpleEditor from './SimpleEditor'
import ComplexToolbar, { EditorMode } from './Toolbars/Complex'

export type EditorType = 'simple' | 'markdown' | 'rich' | 'complex'

/**
 * We extend ComplexTextEditorProps to allow the same
 * text field behavior (error, helperText, required)
 * that we introduced in SimpleEditor.
 */
export interface ComplexTextEditorProps {
  value: string
  onChange?: (val: string) => void
  label?: string
  minRows?: number
  accordion?: boolean
  editorType?: EditorType
  error?: boolean
  helperText?: React.ReactNode
  required?: boolean
}

const ComplexTextEditor: React.FC<ComplexTextEditorProps> = ({
  value,
  onChange,
  label,
  minRows = 5,
  editorType = 'complex',
  error,
  helperText,
  required,
}) => {
  const [mode, setMode] = useState<EditorMode>(
    editorType === 'complex' ? 'simple' : editorType
  )
  const [simpleText, setSimpleText] = useState(value)

  useEffect(() => {
    setSimpleText(value)
  }, [value])

  const handleSimpleTextChange = (newVal: string) => {
    setSimpleText(newVal)
    if (onChange) {
      onChange(newVal)
    }
  }

  const renderEditor = () => {
    // Currently, we only support "simple" mode directly (and the "else" path).
    // If you implement "rich"/"markdown", you'd handle it similarly.
    if (mode === 'simple') {
      return (
        <SimpleEditor
          value={simpleText}
          setValue={handleSimpleTextChange}
          minRows={minRows}
          label={label}
          error={error}
          helperText={helperText}
          required={required}
        />
      )
    }

    // Default to "simple" if mode is something else unhandled
    return (
      <SimpleEditor
        value={simpleText}
        setValue={handleSimpleTextChange}
        minRows={minRows}
        label={label}
        error={error}
        helperText={helperText}
        required={required}
      />
    )
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 1,
        gap: 2,
      }}
    >
      {editorType === 'complex' && (
        <ComplexToolbar
          mode={mode}
          setMode={setMode}
          markdownMode={false}
          setMarkdownMode={() => {}}
          setMarkdown={() => {}}
        />
      )}

      {renderEditor()}
    </Box>
  )
}

export default ComplexTextEditor
