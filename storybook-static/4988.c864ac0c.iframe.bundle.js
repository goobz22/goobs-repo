'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [4988],
    {
      './src/components/ComplexTextEditor/index.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => components_ComplexTextEditor,
        })
        var jsx_runtime = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          Box = __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          TextField = __webpack_require__(
            './node_modules/@mui/material/TextField/TextField.js'
          )
        const SimpleEditor = ({
            value,
            setValue,
            minRows = 5,
            label,
            error,
            helperText,
            required,
          }) =>
            (0, jsx_runtime.jsx)(Box.A, {
              sx: { width: '100%', display: 'flex', flexDirection: 'column' },
              children: (0, jsx_runtime.jsx)(TextField.A, {
                fullWidth: !0,
                multiline: !0,
                variant: 'outlined',
                minRows,
                label,
                value,
                error,
                helperText,
                required,
                onChange: event => {
                  setValue(event.target.value)
                },
                sx: {
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '& fieldset': { borderColor: 'black' },
                    '&:hover fieldset': { borderColor: 'black' },
                    '&.Mui-focused fieldset': { borderColor: 'black' },
                    '& .MuiInputBase-input': { transform: 'translateY(-8px)' },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'black',
                    '&.Mui-focused': { color: 'black' },
                  },
                },
              }),
            }),
          ComplexTextEditor_SimpleEditor = SimpleEditor
        SimpleEditor.__docgenInfo = {
          description: 'A simple multiline text editor.',
          methods: [],
          displayName: 'SimpleEditor',
          props: {
            value: {
              required: !0,
              tsType: { name: 'string' },
              description: '',
            },
            setValue: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(value: string) => void',
                signature: {
                  arguments: [{ type: { name: 'string' }, name: 'value' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            minRows: {
              required: !1,
              tsType: { name: 'number' },
              description: '',
              defaultValue: { value: '5', computed: !1 },
            },
            label: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            error: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            helperText: {
              required: !1,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            required: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
          },
        }
        var index_es = __webpack_require__(
            './node_modules/slate/dist/index.es.js'
          ),
          dist_index_es = __webpack_require__(
            './node_modules/slate-react/dist/index.es.js'
          ),
          slate_history_dist_index_es = __webpack_require__(
            './node_modules/slate-history/dist/index.es.js'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const RichTextEditorConfig_Block = {
            Paragraph: 'paragraph',
            ListItem: 'list-item',
            BulletedList: 'bulleted-list',
            NumberedList: 'numbered-list',
            Link: 'link',
          },
          RichTextEditorConfig_Alignment = 'left'
        function isCustomElement(node) {
          return index_es.Hg.isElement(node) && 'type' in node
        }
        __webpack_require__('./node_modules/console-browserify/index.js')
        const replaceSelectedText = (
          newValue,
          markdown,
          selectedText,
          setMarkdown
        ) => {
          if (selectedText) {
            setMarkdown(markdown.replace(selectedText, newValue))
          }
        }
        var IconButton = __webpack_require__(
          './node_modules/@mui/material/IconButton/IconButton.js'
        )
        const ToolbarButton = ({
            format,
            children,
            editor,
            buttonAction,
            markdownMode,
            setMarkdown,
            activeFontColor = 'rgb(110 110 110)',
            activeBackgroundColor = 'rgba(0, 0, 0, 0.10)',
            ...props
          }) => {
            const { toggleMark, toggleBlock, isMarkActive, isBlockActive } = ((
                initialValue,
                onChange
              ) => {
                const editor = (0, react.useMemo)(
                    () =>
                      (0, slate_history_dist_index_es.$k)(
                        (0, dist_index_es.o$)((0, index_es.ie)())
                      ),
                    []
                  ),
                  [markdownMode, setMarkdownMode] = (0, react.useState)(!1),
                  [markdown, setMarkdown] = (0, react.useState)(''),
                  [slateValue, setSlateValue] = (0, react.useState)([]),
                  [internalValue, setInternalValue] = (0, react.useState)(
                    initialValue
                  )
                ;(0, react.useEffect)(() => {
                  console.log('RichTextEditor: markdownMode = ', markdownMode)
                }, [markdownMode])
                const handleChange = (0, react.useCallback)(
                    newValue => {
                      setInternalValue(newValue),
                        setSlateValue(newValue),
                        onChange && onChange(newValue)
                    },
                    [onChange]
                  ),
                  toggleMark = format => {
                    isMarkActive(format)
                      ? index_es.KE.removeMark(editor, format)
                      : index_es.KE.addMark(editor, format, !0)
                  },
                  isBlockActive = (format, property = 'type') => {
                    const [match] = Array.from(
                      index_es.KE.nodes(editor, {
                        match: n =>
                          isCustomElement(n) &&
                          property in n &&
                          n[property] === format,
                      })
                    )
                    return !!match
                  },
                  toggleBlock = format => {
                    const isActive = isBlockActive(
                        format,
                        Object.values(RichTextEditorConfig_Alignment).includes(
                          format
                        )
                          ? 'align'
                          : 'type'
                      ),
                      isList =
                        'bulleted-list' === format || 'numbered-list' === format
                    let newProperties
                    if (
                      (index_es.gB.unwrapNodes(editor, {
                        match: n =>
                          isCustomElement(n) &&
                          ('bulleted-list' === n.type ||
                            'numbered-list' === n.type) &&
                          !Object.values(
                            RichTextEditorConfig_Alignment
                          ).includes(format),
                        split: !0,
                      }),
                      (newProperties = Object.values(
                        RichTextEditorConfig_Alignment
                      ).includes(format)
                        ? { align: isActive ? void 0 : format }
                        : {
                            type: isActive
                              ? RichTextEditorConfig_Block.Paragraph
                              : isList
                                ? RichTextEditorConfig_Block.ListItem
                                : format,
                          }),
                      index_es.gB.setNodes(editor, newProperties),
                      !isActive && isList)
                    ) {
                      const block = { type: format, children: [] }
                      index_es.gB.wrapNodes(editor, block)
                    }
                  },
                  isMarkActive = format => {
                    const marks = index_es.KE.marks(editor)
                    return !!marks && !0 === marks[format]
                  },
                  toggleAlignment = alignment => {
                    const [match] = Array.from(
                        index_es.KE.nodes(editor, {
                          match: n =>
                            isCustomElement(n) && n.align === alignment,
                          mode: 'all',
                        })
                      ),
                      isActive = !!match
                    index_es.gB.setNodes(
                      editor,
                      { align: isActive ? void 0 : alignment },
                      {
                        match: n =>
                          index_es.Hg.isElement(n) &&
                          index_es.KE.isBlock(editor, n),
                      }
                    )
                  }
                return {
                  editor,
                  markdownMode,
                  setMarkdownMode,
                  markdown,
                  setMarkdown,
                  slateValue,
                  setSlateValue,
                  internalValue,
                  handleChange,
                  handleBoldClick: () => {
                    toggleMark('bold')
                  },
                  handleItalicClick: () => {
                    toggleMark('italic')
                  },
                  insertLink: () => {
                    let url = window.prompt('Enter the URL of the link:')
                    if (!url) return
                    const { selection } = editor
                    if (!selection) return
                    const nodes = Array.from(
                      index_es.KE.nodes(editor, {
                        at: selection,
                        match: n =>
                          isCustomElement(n) &&
                          n.type === RichTextEditorConfig_Block.Link,
                      })
                    )
                    if (nodes.length > 0) {
                      const [node] = nodes,
                        link = node[0]
                      if (
                        ((url = window.prompt(
                          'Edit the URL of the link:',
                          link.url
                        )),
                        !url)
                      )
                        return
                      index_es.gB.setNodes(
                        editor,
                        { url },
                        { at: dist_index_es.rL.findPath(editor, link) }
                      )
                    } else {
                      const link = {
                        type: RichTextEditorConfig_Block.Link,
                        url,
                        children: [
                          { text: index_es.KE.string(editor, selection) },
                        ],
                      }
                      index_es.gB.wrapNodes(editor, link, { split: !0 }),
                        index_es.gB.collapse(editor, { edge: 'end' })
                    }
                  },
                  onKeyDown: event => {
                    if (event.ctrlKey)
                      switch ((event.preventDefault(), event.key)) {
                        case 'b':
                          toggleMark('bold')
                          break
                        case 'i':
                          toggleMark('italic')
                          break
                        case 'u':
                          toggleMark('underline')
                          break
                        case 'z':
                          editor.undo()
                          break
                        case 'y':
                          editor.redo()
                          break
                        case 's':
                          toggleMark('strikethrough')
                          break
                        case 'c':
                          toggleMark('code')
                          break
                        case '1':
                          toggleBlock('bulleted-list')
                          break
                        case '2':
                          toggleBlock('numbered-list')
                          break
                        case 'l':
                          toggleAlignment('left')
                          break
                        case 'e':
                          toggleAlignment('center')
                          break
                        case 'r':
                          toggleAlignment('right')
                          break
                        case 'j':
                          toggleAlignment('justify')
                          break
                        default:
                          return
                      }
                  },
                  toggleMark,
                  toggleBlock,
                  isMarkActive,
                  isBlockActive,
                  toggleAlignment,
                }
              })([], () => {}),
              isActive =
                editor &&
                format &&
                (isMarkActive(format) || isBlockActive(format))
            return (0, jsx_runtime.jsx)(IconButton.A, {
              onMouseDown: () => {
                if (markdownMode && setMarkdown) {
                  const selection = window.getSelection()
                  if (selection) {
                    const selectedText = selection.toString()
                    switch (format) {
                      case 'bold':
                        ;((selectedText, markdown, setMarkdown) => {
                          selectedText &&
                            replaceSelectedText(
                              '**' + selectedText + '**',
                              markdown,
                              selectedText,
                              setMarkdown
                            )
                        })(selectedText, selectedText, setMarkdown)
                        break
                      case 'italic':
                        ;((selectedText, markdown, setMarkdown) => {
                          selectedText &&
                            replaceSelectedText(
                              '_' + selectedText + '_',
                              markdown,
                              selectedText,
                              setMarkdown
                            )
                        })(selectedText, selectedText, setMarkdown)
                        break
                      case 'code':
                        setMarkdown('`' + selectedText + '`')
                        break
                      case 'link': {
                        const url = prompt('Enter the URL')
                        url &&
                          setMarkdown('[' + selectedText + '](' + url + ')')
                        break
                      }
                    }
                  }
                } else
                  editor &&
                    (buttonAction
                      ? 'undo' === buttonAction
                        ? editor.undo()
                        : 'redo' === buttonAction && editor.redo()
                      : format &&
                        ('bulleted-list' === format ||
                        'numbered-list' === format ||
                        ['left', 'center', 'right', 'justify'].includes(format)
                          ? toggleBlock(format)
                          : toggleMark(format)))
              },
              sx: {
                borderRadius: '9%',
                color: 'black',
                ...(isActive && {
                  color: activeFontColor,
                  backgroundColor: activeBackgroundColor,
                }),
                '& .MuiTouchRipple-root .MuiTouchRipple-child': {
                  borderRadius: '9%',
                },
              },
              ...props,
              children,
            })
          },
          ComplexTextEditor_ToolbarButton = ToolbarButton
        ToolbarButton.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ToolbarButton',
          props: {
            format: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'InlineFormat | BlockFormat | AlignmentFormat',
                elements: [
                  {
                    name: "RichTextEditorTypes['Inline'][unknown]",
                    raw: "RichTextEditorTypes['Inline'][keyof RichTextEditorTypes['Inline']]",
                  },
                  {
                    name: "RichTextEditorTypes['Block'][unknown]",
                    raw: "RichTextEditorTypes['Block'][keyof RichTextEditorTypes['Block']]",
                  },
                  {
                    name: "RichTextEditorTypes['Alignment']",
                    raw: "RichTextEditorTypes['Alignment']",
                  },
                ],
              },
              description: '',
            },
            children: {
              required: !0,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            editor: {
              required: !1,
              tsType: {
                name: 'intersection',
                raw: 'BaseEditor & ReactEditor & HistoryEditor',
                elements: [
                  { name: 'BaseEditor' },
                  { name: 'ReactEditor' },
                  { name: 'HistoryEditor' },
                ],
              },
              description: '',
            },
            buttonAction: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'undo' | 'redo'",
                elements: [
                  { name: 'literal', value: "'undo'" },
                  { name: 'literal', value: "'redo'" },
                ],
              },
              description: '',
            },
            markdownMode: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            setMarkdown: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(value: string) => void',
                signature: {
                  arguments: [{ type: { name: 'string' }, name: 'value' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            handleMouseDown: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            activeFontColor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'rgb(110 110 110)'", computed: !1 },
            },
            activeBackgroundColor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'rgba(0, 0, 0, 0.10)'", computed: !1 },
            },
          },
          composes: ['IconButtonProps'],
        }
        var styled = __webpack_require__(
            './node_modules/@mui/material/styles/styled.js'
          ),
          MenuItem = __webpack_require__(
            './node_modules/@mui/material/MenuItem/MenuItem.js'
          ),
          Stack = __webpack_require__(
            './node_modules/@mui/material/Stack/Stack.js'
          ),
          Select = __webpack_require__(
            './node_modules/@mui/material/Select/Select.js'
          ),
          Typography = __webpack_require__(
            './node_modules/@mui/material/Typography/Typography.js'
          ),
          Undo = __webpack_require__(
            './node_modules/@mui/icons-material/esm/Undo.js'
          ),
          Redo = __webpack_require__(
            './node_modules/@mui/icons-material/esm/Redo.js'
          ),
          FormatAlignLeft = __webpack_require__(
            './node_modules/@mui/icons-material/esm/FormatAlignLeft.js'
          ),
          FormatAlignCenter = __webpack_require__(
            './node_modules/@mui/icons-material/esm/FormatAlignCenter.js'
          ),
          FormatAlignRight = __webpack_require__(
            './node_modules/@mui/icons-material/esm/FormatAlignRight.js'
          ),
          FormatBold = __webpack_require__(
            './node_modules/@mui/icons-material/esm/FormatBold.js'
          ),
          FormatItalic = __webpack_require__(
            './node_modules/@mui/icons-material/esm/FormatItalic.js'
          ),
          FormatUnderlined = __webpack_require__(
            './node_modules/@mui/icons-material/esm/FormatUnderlined.js'
          ),
          StrikethroughS = __webpack_require__(
            './node_modules/@mui/icons-material/esm/StrikethroughS.js'
          ),
          Code = __webpack_require__(
            './node_modules/@mui/icons-material/esm/Code.js'
          ),
          Link = __webpack_require__(
            './node_modules/@mui/icons-material/esm/Link.js'
          ),
          FormatListNumbered = __webpack_require__(
            './node_modules/@mui/icons-material/esm/FormatListNumbered.js'
          ),
          FormatListBulleted = __webpack_require__(
            './node_modules/@mui/icons-material/esm/FormatListBulleted.js'
          )
        const AlignmentMenuItem = (0, styled.Ay)(MenuItem.A)({
            '& .Mui-selected': {},
            backgroundColor: 'transparent !important',
            padding: 0,
            margin: 0,
          }),
          TextTypeMenuItem = (0, styled.Ay)(MenuItem.A)({
            '& .Mui-selected': { backgroundColor: '#E7F5FF' },
            ':hover': { backgroundColor: '#E7F5FF' },
          }),
          Toolbar = ({
            editor,
            markdownMode,
            setMarkdown,
            handleBoldClick,
            handleItalicClick,
            handleLinkClick,
          }) => {
            const [alignValue, setAlignValue] = (0, react.useState)('left'),
              [textType, setTextType] = (0, react.useState)('p')
            return (0, jsx_runtime.jsx)(Box.A, {
              sx: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              },
              children:
                editor &&
                (0, jsx_runtime.jsxs)(Stack.A, {
                  direction: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  spacing: 1,
                  children: [
                    (0, jsx_runtime.jsxs)(Box.A, {
                      children: [
                        (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                          buttonAction: 'undo',
                          editor,
                          children: (0, jsx_runtime.jsx)(Undo.A, {
                            fontSize: 'small',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                          buttonAction: 'redo',
                          editor,
                          children: (0, jsx_runtime.jsx)(Redo.A, {
                            fontSize: 'small',
                          }),
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(Select.A, {
                      value: textType,
                      onChange: event => {
                        setTextType(event.target.value)
                      },
                      variant: 'outlined',
                      sx: {
                        p: '8px',
                        width: '150px',
                        ':hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                        ':active': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                        '& .MuiSelect-select': { padding: 0 },
                        height: '34px',
                        '.MuiOutlinedInput-notchedOutline': {
                          border: '1px solid black',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          border: '1px solid black',
                        },
                      },
                      MenuProps: {
                        PaperProps: {
                          style: {
                            boxSizing: 'border-box',
                            width: '150px',
                            border: '1px solid black',
                            minWidth: 0,
                          },
                        },
                      },
                      renderValue: value =>
                        'p' === value
                          ? (0, jsx_runtime.jsx)(Box.A, {
                              display: 'flex',
                              children: (0, jsx_runtime.jsx)(Typography.A, {
                                fontSize: '14px',
                                children: 'Paragraph Text',
                              }),
                            })
                          : 'h1' === value
                            ? (0, jsx_runtime.jsx)(Box.A, {
                                display: 'flex',
                                children: (0, jsx_runtime.jsx)(Typography.A, {
                                  fontSize: '14px',
                                  children: 'Heading 1',
                                }),
                              })
                            : 'h2' === value
                              ? (0, jsx_runtime.jsx)(Box.A, {
                                  display: 'flex',
                                  children: (0, jsx_runtime.jsx)(Typography.A, {
                                    fontSize: '14px',
                                    children: 'Heading 2',
                                  }),
                                })
                              : 'h3' === value
                                ? (0, jsx_runtime.jsx)(Box.A, {
                                    display: 'flex',
                                    children: (0, jsx_runtime.jsx)(
                                      Typography.A,
                                      {
                                        fontSize: '14px',
                                        children: 'Heading 3',
                                      }
                                    ),
                                  })
                                : (0, jsx_runtime.jsx)(
                                    jsx_runtime.Fragment,
                                    {}
                                  ),
                      children: [
                        (0, jsx_runtime.jsx)(TextTypeMenuItem, {
                          value: 'p',
                          children: (0, jsx_runtime.jsx)(Typography.A, {
                            fontSize: '14px',
                            children: 'Paragraph Text',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(TextTypeMenuItem, {
                          value: 'h1',
                          children: (0, jsx_runtime.jsx)(Typography.A, {
                            fontSize: '24px',
                            children: 'Heading 1',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(TextTypeMenuItem, {
                          value: 'h2',
                          children: (0, jsx_runtime.jsx)(Typography.A, {
                            fontSize: '20px',
                            children: 'Heading 2',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(TextTypeMenuItem, {
                          value: 'h3',
                          children: (0, jsx_runtime.jsx)(Typography.A, {
                            fontSize: '16px',
                            children: 'Heading 3',
                          }),
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(Select.A, {
                      value: alignValue,
                      onChange: event => {
                        setAlignValue(event.target.value)
                      },
                      variant: 'outlined',
                      sx: {
                        p: '8px',
                        ':hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                        ':active': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                        '& .MuiSelect-select': { padding: 0 },
                        '.MuiOutlinedInput-notchedOutline': { border: 0 },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          border: 'none !important',
                        },
                      },
                      MenuProps: { PaperProps: { style: { minWidth: 0 } } },
                      renderValue: value =>
                        'left' === value
                          ? (0, jsx_runtime.jsx)(Box.A, {
                              display: 'flex',
                              children: (0, jsx_runtime.jsx)(
                                FormatAlignLeft.A,
                                { fontSize: 'small' }
                              ),
                            })
                          : 'center' === value
                            ? (0, jsx_runtime.jsx)(Box.A, {
                                display: 'flex',
                                children: (0, jsx_runtime.jsx)(
                                  FormatAlignCenter.A,
                                  { fontSize: 'small' }
                                ),
                              })
                            : 'right' === value
                              ? (0, jsx_runtime.jsx)(Box.A, {
                                  display: 'flex',
                                  children: (0, jsx_runtime.jsx)(
                                    FormatAlignRight.A,
                                    { fontSize: 'small' }
                                  ),
                                })
                              : (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                      children: [
                        (0, jsx_runtime.jsx)(AlignmentMenuItem, {
                          value: 'left',
                          children: (0, jsx_runtime.jsxs)(
                            ComplexTextEditor_ToolbarButton,
                            {
                              format: 'left',
                              editor,
                              sx: {
                                width: '100%',
                                borderRadius: 0,
                                justifyContent: 'flex-start',
                                ':hover': { backgroundColor: '#E7F5FF' },
                              },
                              children: [
                                (0, jsx_runtime.jsx)(FormatAlignLeft.A, {
                                  fontSize: 'small',
                                }),
                                (0, jsx_runtime.jsx)(Typography.A, {
                                  fontSize: '14px',
                                  mx: 1,
                                  children: 'left',
                                }),
                              ],
                            }
                          ),
                        }),
                        (0, jsx_runtime.jsx)(AlignmentMenuItem, {
                          value: 'center',
                          children: (0, jsx_runtime.jsxs)(
                            ComplexTextEditor_ToolbarButton,
                            {
                              format: 'center',
                              editor,
                              sx: {
                                width: '100%',
                                borderRadius: 0,
                                justifyContent: 'flex-start',
                                ':hover': { backgroundColor: '#E7F5FF' },
                              },
                              children: [
                                (0, jsx_runtime.jsx)(FormatAlignCenter.A, {
                                  fontSize: 'small',
                                }),
                                (0, jsx_runtime.jsx)(Typography.A, {
                                  fontSize: '14px',
                                  mx: 1,
                                  children: 'center',
                                }),
                              ],
                            }
                          ),
                        }),
                        (0, jsx_runtime.jsx)(AlignmentMenuItem, {
                          value: 'right',
                          children: (0, jsx_runtime.jsxs)(
                            ComplexTextEditor_ToolbarButton,
                            {
                              format: 'right',
                              editor,
                              sx: {
                                width: '100%',
                                borderRadius: 0,
                                justifyContent: 'flex-start',
                                ':hover': { backgroundColor: '#E7F5FF' },
                              },
                              children: [
                                (0, jsx_runtime.jsx)(FormatAlignRight.A, {
                                  fontSize: 'small',
                                }),
                                (0, jsx_runtime.jsx)(Typography.A, {
                                  fontSize: '14px',
                                  mx: 1,
                                  children: 'right',
                                }),
                              ],
                            }
                          ),
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(Box.A, {
                      children: [
                        (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                          format: 'bold',
                          editor,
                          handleMouseDown: handleBoldClick,
                          markdownMode,
                          setMarkdown,
                          children: (0, jsx_runtime.jsx)(FormatBold.A, {
                            fontSize: 'small',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                          format: 'italic',
                          editor,
                          handleMouseDown: handleItalicClick,
                          markdownMode,
                          setMarkdown,
                          children: (0, jsx_runtime.jsx)(FormatItalic.A, {
                            fontSize: 'small',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                          format: 'underline',
                          editor,
                          markdownMode,
                          setMarkdown,
                          children: (0, jsx_runtime.jsx)(FormatUnderlined.A, {
                            fontSize: 'small',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                          format: 'strikethrough',
                          editor,
                          markdownMode,
                          setMarkdown,
                          children: (0, jsx_runtime.jsx)(StrikethroughS.A, {
                            fontSize: 'small',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                          format: 'code',
                          editor,
                          markdownMode,
                          setMarkdown,
                          children: (0, jsx_runtime.jsx)(Code.A, {
                            fontSize: 'small',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                          format: 'link',
                          editor,
                          handleMouseDown: handleLinkClick,
                          markdownMode,
                          setMarkdown,
                          children: (0, jsx_runtime.jsx)(Link.A, {
                            fontSize: 'small',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                          format: 'numbered-list',
                          editor,
                          markdownMode,
                          setMarkdown,
                          children: (0, jsx_runtime.jsx)(FormatListNumbered.A, {
                            fontSize: 'small',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                          format: 'bulleted-list',
                          editor,
                          markdownMode,
                          setMarkdown,
                          children: (0, jsx_runtime.jsx)(FormatListBulleted.A, {
                            fontSize: 'small',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            })
          },
          Rich = Toolbar
        Toolbar.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Toolbar',
          props: {
            editor: {
              required: !1,
              tsType: {
                name: 'intersection',
                raw: 'BaseEditor & ReactEditor & HistoryEditor',
                elements: [
                  { name: 'BaseEditor' },
                  { name: 'ReactEditor' },
                  { name: 'HistoryEditor' },
                ],
              },
              description: '',
            },
            markdownMode: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            setMarkdown: {
              required: !0,
              tsType: {
                name: 'ReactDispatch',
                raw: 'React.Dispatch<React.SetStateAction<string>>',
                elements: [
                  {
                    name: 'ReactSetStateAction',
                    raw: 'React.SetStateAction<string>',
                    elements: [{ name: 'string' }],
                  },
                ],
              },
              description: '',
            },
            handleBoldClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            handleItalicClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            handleLinkClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
          },
        }
        const ToolbarMarkdown = ({
            editor,
            handleBoldClick,
            handleItalicClick,
            markdownMode,
            setMarkdown,
            switchModeLabel,
            onSwitchMode,
          }) => {
            const [alignValue, setAlignValue] = (0, react.useState)('left'),
              [textType, setTextType] = (0, react.useState)('p')
            return (0, jsx_runtime.jsx)(Box.A, {
              children: (0, jsx_runtime.jsxs)(Stack.A, {
                direction: 'row',
                spacing: 1,
                children: [
                  (0, jsx_runtime.jsxs)(Box.A, {
                    children: [
                      (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                        buttonAction: 'undo',
                        editor,
                        children: (0, jsx_runtime.jsx)(Undo.A, {
                          fontSize: 'small',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                        buttonAction: 'redo',
                        editor,
                        children: (0, jsx_runtime.jsx)(Redo.A, {
                          fontSize: 'small',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                        onClick: onSwitchMode,
                        markdownMode,
                        setMarkdown,
                        children: switchModeLabel,
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsxs)(Select.A, {
                    value: textType,
                    onChange: event => {
                      setTextType(event.target.value)
                    },
                    variant: 'outlined',
                    children: [
                      (0, jsx_runtime.jsx)(MenuItem.A, {
                        value: 'p',
                        children: (0, jsx_runtime.jsx)(Typography.A, {
                          children: 'Paragraph Text',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(MenuItem.A, {
                        value: 'h1',
                        children: (0, jsx_runtime.jsx)(Typography.A, {
                          children: 'Heading 1',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(MenuItem.A, {
                        value: 'h2',
                        children: (0, jsx_runtime.jsx)(Typography.A, {
                          children: 'Heading 2',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(MenuItem.A, {
                        value: 'h3',
                        children: (0, jsx_runtime.jsx)(Typography.A, {
                          children: 'Heading 3',
                        }),
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsxs)(Select.A, {
                    value: alignValue,
                    onChange: event => {
                      setAlignValue(event.target.value)
                    },
                    variant: 'outlined',
                    children: [
                      (0, jsx_runtime.jsx)(MenuItem.A, {
                        value: 'left',
                        children: (0, jsx_runtime.jsxs)(
                          ComplexTextEditor_ToolbarButton,
                          {
                            format: 'left',
                            children: [
                              (0, jsx_runtime.jsx)(FormatAlignLeft.A, {
                                fontSize: 'small',
                              }),
                              (0, jsx_runtime.jsx)(Typography.A, {
                                children: 'left',
                              }),
                            ],
                          }
                        ),
                      }),
                      (0, jsx_runtime.jsx)(MenuItem.A, {
                        value: 'center',
                        children: (0, jsx_runtime.jsxs)(
                          ComplexTextEditor_ToolbarButton,
                          {
                            format: 'center',
                            children: [
                              (0, jsx_runtime.jsx)(FormatAlignCenter.A, {
                                fontSize: 'small',
                              }),
                              (0, jsx_runtime.jsx)(Typography.A, {
                                children: 'center',
                              }),
                            ],
                          }
                        ),
                      }),
                      (0, jsx_runtime.jsx)(MenuItem.A, {
                        value: 'right',
                        children: (0, jsx_runtime.jsxs)(
                          ComplexTextEditor_ToolbarButton,
                          {
                            format: 'right',
                            children: [
                              (0, jsx_runtime.jsx)(FormatAlignRight.A, {
                                fontSize: 'small',
                              }),
                              (0, jsx_runtime.jsx)(Typography.A, {
                                children: 'right',
                              }),
                            ],
                          }
                        ),
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsxs)(Box.A, {
                    children: [
                      (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                        format: 'bold',
                        handleMouseDown: handleBoldClick,
                        editor,
                        markdownMode,
                        setMarkdown,
                        children: (0, jsx_runtime.jsx)(FormatBold.A, {
                          fontSize: 'small',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                        format: 'italic',
                        handleMouseDown: handleItalicClick,
                        editor,
                        markdownMode,
                        setMarkdown,
                        children: (0, jsx_runtime.jsx)(FormatItalic.A, {
                          fontSize: 'small',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                        format: 'underline',
                        editor,
                        markdownMode,
                        setMarkdown,
                        children: (0, jsx_runtime.jsx)(FormatUnderlined.A, {
                          fontSize: 'small',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                        format: 'strikethrough',
                        editor,
                        markdownMode,
                        setMarkdown,
                        children: (0, jsx_runtime.jsx)(StrikethroughS.A, {
                          fontSize: 'small',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                        format: 'code',
                        editor,
                        markdownMode,
                        setMarkdown,
                        children: (0, jsx_runtime.jsx)(Code.A, {
                          fontSize: 'small',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                        format: 'link',
                        editor,
                        markdownMode,
                        setMarkdown,
                        children: (0, jsx_runtime.jsx)(Link.A, {
                          fontSize: 'small',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                        format: 'numbered-list',
                        editor,
                        markdownMode,
                        setMarkdown,
                        children: (0, jsx_runtime.jsx)(FormatListNumbered.A, {
                          fontSize: 'small',
                        }),
                      }),
                      (0, jsx_runtime.jsx)(ComplexTextEditor_ToolbarButton, {
                        format: 'bulleted-list',
                        editor,
                        markdownMode,
                        setMarkdown,
                        children: (0, jsx_runtime.jsx)(FormatListBulleted.A, {
                          fontSize: 'small',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          },
          Markdown = ToolbarMarkdown
        ToolbarMarkdown.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ToolbarMarkdown',
          props: {
            editor: {
              required: !1,
              tsType: {
                name: 'intersection',
                raw: 'BaseEditor & ReactEditor & HistoryEditor',
                elements: [
                  { name: 'BaseEditor' },
                  { name: 'ReactEditor' },
                  { name: 'HistoryEditor' },
                ],
              },
              description: '',
            },
            handleBoldClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            handleItalicClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            markdownMode: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            setMarkdownMode: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(value: boolean) => void',
                signature: {
                  arguments: [{ type: { name: 'boolean' }, name: 'value' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            setMarkdown: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(value: string) => void',
                signature: {
                  arguments: [{ type: { name: 'string' }, name: 'value' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            switchModeLabel: {
              required: !0,
              tsType: { name: 'string' },
              description: '',
            },
            onSwitchMode: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
          },
        }
        var ToggleButtonGroup = __webpack_require__(
            './node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js'
          ),
          ToggleButton = __webpack_require__(
            './node_modules/@mui/material/ToggleButton/ToggleButton.js'
          )
        const ComplexToolbar = ({
            mode,
            setMode,
            markdownMode,
            setMarkdownMode,
            setMarkdown,
            handleBoldClick,
            handleItalicClick,
            handleLinkClick,
          }) =>
            (0, jsx_runtime.jsxs)(Box.A, {
              sx: {
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                width: '100%',
              },
              children: [
                (0, jsx_runtime.jsx)(Box.A, {
                  sx: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: '8px',
                  },
                  children: (0, jsx_runtime.jsxs)(ToggleButtonGroup.A, {
                    value: mode,
                    exclusive: !0,
                    onChange: (_event, newMode) => {
                      null !== newMode && setMode(newMode)
                    },
                    size: 'small',
                    children: [
                      (0, jsx_runtime.jsx)(ToggleButton.A, {
                        value: 'simple',
                        sx: {
                          '&.Mui-selected': {
                            backgroundColor: '#E7F5FF',
                            color: 'black',
                          },
                          '&.Mui-selected:hover': {
                            backgroundColor: '#E7F5FF',
                          },
                        },
                        children: 'Simple',
                      }),
                      (0, jsx_runtime.jsx)(ToggleButton.A, {
                        value: 'rich',
                        sx: {
                          '&.Mui-selected': {
                            backgroundColor: '#E7F5FF',
                            color: 'black',
                          },
                          '&.Mui-selected:hover': {
                            backgroundColor: '#E7F5FF',
                          },
                        },
                        children: 'Rich Text',
                      }),
                      (0, jsx_runtime.jsx)(ToggleButton.A, {
                        value: 'markdown',
                        sx: {
                          '&.Mui-selected': {
                            backgroundColor: '#E7F5FF',
                            color: 'black',
                          },
                          '&.Mui-selected:hover': {
                            backgroundColor: '#E7F5FF',
                          },
                        },
                        children: 'Markdown',
                      }),
                    ],
                  }),
                }),
                'rich' === mode &&
                  (0, jsx_runtime.jsx)(Rich, {
                    markdownMode,
                    setMarkdown,
                    handleBoldClick,
                    handleItalicClick,
                    handleLinkClick,
                  }),
                'markdown' === mode &&
                  (0, jsx_runtime.jsx)(Markdown, {
                    markdownMode,
                    setMarkdownMode,
                    setMarkdown,
                    handleBoldClick,
                    handleItalicClick,
                    switchModeLabel: 'Rich Text Mode',
                    onSwitchMode: () => setMode('rich'),
                  }),
              ],
            }),
          Complex = ComplexToolbar
        ComplexToolbar.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ComplexToolbar',
          props: {
            mode: {
              required: !0,
              tsType: {
                name: 'union',
                raw: "'rich' | 'markdown' | 'simple'",
                elements: [
                  { name: 'literal', value: "'rich'" },
                  { name: 'literal', value: "'markdown'" },
                  { name: 'literal', value: "'simple'" },
                ],
              },
              description: '',
            },
            setMode: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(mode: EditorMode) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'union',
                        raw: "'rich' | 'markdown' | 'simple'",
                        elements: [
                          { name: 'literal', value: "'rich'" },
                          { name: 'literal', value: "'markdown'" },
                          { name: 'literal', value: "'simple'" },
                        ],
                      },
                      name: 'mode',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            markdownMode: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            setMarkdownMode: {
              required: !0,
              tsType: {
                name: 'ReactDispatch',
                raw: 'React.Dispatch<React.SetStateAction<boolean>>',
                elements: [
                  {
                    name: 'ReactSetStateAction',
                    raw: 'React.SetStateAction<boolean>',
                    elements: [{ name: 'boolean' }],
                  },
                ],
              },
              description: '',
            },
            setMarkdown: {
              required: !0,
              tsType: {
                name: 'ReactDispatch',
                raw: 'React.Dispatch<React.SetStateAction<string>>',
                elements: [
                  {
                    name: 'ReactSetStateAction',
                    raw: 'React.SetStateAction<string>',
                    elements: [{ name: 'string' }],
                  },
                ],
              },
              description: '',
            },
            handleBoldClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            handleItalicClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            handleLinkClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
          },
        }
        const ComplexTextEditor = ({
            value,
            onChange,
            label,
            minRows = 5,
            editorType = 'complex',
            error,
            helperText,
            required,
          }) => {
            const [mode, setMode] = (0, react.useState)(
                'complex' === editorType ? 'simple' : editorType
              ),
              [simpleText, setSimpleText] = (0, react.useState)(value)
            ;(0, react.useEffect)(() => {
              setSimpleText(value)
            }, [value])
            const handleSimpleTextChange = newVal => {
              setSimpleText(newVal), onChange && onChange(newVal)
            }
            return (0, jsx_runtime.jsxs)(Box.A, {
              sx: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 1,
                gap: 2,
              },
              children: [
                'complex' === editorType &&
                  (0, jsx_runtime.jsx)(Complex, {
                    mode,
                    setMode,
                    markdownMode: !1,
                    setMarkdownMode: () => {},
                    setMarkdown: () => {},
                  }),
                (0, jsx_runtime.jsx)(ComplexTextEditor_SimpleEditor, {
                  value: simpleText,
                  setValue: handleSimpleTextChange,
                  minRows,
                  label,
                  error,
                  helperText,
                  required,
                }),
              ],
            })
          },
          components_ComplexTextEditor = ComplexTextEditor
        ComplexTextEditor.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ComplexTextEditor',
          props: {
            value: {
              required: !0,
              tsType: { name: 'string' },
              description: '',
            },
            onChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(val: string) => void',
                signature: {
                  arguments: [{ type: { name: 'string' }, name: 'val' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            label: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            minRows: {
              required: !1,
              tsType: { name: 'number' },
              description: '',
              defaultValue: { value: '5', computed: !1 },
            },
            accordion: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            editorType: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'simple' | 'markdown' | 'rich' | 'complex'",
                elements: [
                  { name: 'literal', value: "'simple'" },
                  { name: 'literal', value: "'markdown'" },
                  { name: 'literal', value: "'rich'" },
                  { name: 'literal', value: "'complex'" },
                ],
              },
              description: '',
              defaultValue: { value: "'complex'", computed: !1 },
            },
            error: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            helperText: {
              required: !1,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            required: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
          },
        }
      },
    },
  ]
)
