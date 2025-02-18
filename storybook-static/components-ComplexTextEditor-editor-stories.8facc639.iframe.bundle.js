'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [8648],
    {
      './src/components/ComplexTextEditor/editor.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            BasicSimple: () => BasicSimple,
            ComplexMode: () => ComplexMode,
            LabeledSimple: () => LabeledSimple,
            LargeText: () => LargeText,
            MarkdownMode: () => MarkdownMode,
            WithAccordion: () => WithAccordion,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/components/ComplexTextEditor/index.tsx'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const noOpOnChange = val => {
            console.log('TextEditor onChange =>', val)
          },
          __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/ComplexTextEditor',
            component: _index__WEBPACK_IMPORTED_MODULE_1__.A,
            parameters: {
              a11y: { disable: !1 },
              docs: {
                description: { component: 'Default metadata for Storybook' },
              },
            },
          },
          BasicSimple = {
            name: 'Basic (Simple)',
            args: {
              value: 'Hello world!',
              editorType: 'simple',
              onChange: noOpOnChange,
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByDisplayValue('Hello world!')
              ).toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                  canvas.getByDisplayValue('Hello world!'),
                  ' - edited'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByDisplayValue('Hello world! - edited')
                ).toBeInTheDocument()
            },
          },
          LabeledSimple = {
            args: {
              label: 'Simple Editor Label',
              value: 'Some text here',
              editorType: 'simple',
              onChange: noOpOnChange,
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Simple Editor Label')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByDisplayValue('Some text here')
                ).toBeInTheDocument()
            },
          },
          ComplexMode = {
            args: {
              value:
                'Start with complex but show toolbar toggles (simple vs rich vs markdown).',
              editorType: 'complex',
              onChange: noOpOnChange,
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByDisplayValue(
                  'Start with complex but show toolbar toggles (simple vs rich vs markdown).'
                )
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByRole('button', { name: /simple/i })
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByRole('button', { name: /rich text/i })
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByRole('button', { name: /markdown/i })
                ).toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByRole('button', { name: /markdown/i })
                )
            },
          },
          WithAccordion = {
            args: {
              label: 'Accordion Editor Label',
              value: 'Some initial text in an accordion panel',
              editorType: 'complex',
              accordion: !0,
              onChange: noOpOnChange,
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Accordion Editor Label')
              ).toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByText('Accordion Editor Label')
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByDisplayValue(
                    'Some initial text in an accordion panel'
                  )
                ).toBeInTheDocument()
            },
          },
          MarkdownMode = {
            args: {
              value: '**Bold** text, *italic* text',
              editorType: 'markdown',
              onChange: noOpOnChange,
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByDisplayValue('**Bold** text, *italic* text')
              ).toBeInTheDocument()
            },
          },
          LargeText = {
            args: {
              label: 'Large Text Editor',
              value:
                'Lots of text\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6\nLine 7\nLine 8\nLine 9\nLine 10',
              editorType: 'simple',
              minRows: 10,
              onChange: noOpOnChange,
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByDisplayValue(/Lots of text/)
              ).toBeInTheDocument()
            },
          },
          __namedExportsOrder = [
            'BasicSimple',
            'LabeledSimple',
            'ComplexMode',
            'WithAccordion',
            'MarkdownMode',
            'LargeText',
          ]
        ;(BasicSimple.parameters = {
          ...BasicSimple.parameters,
          docs: {
            ...BasicSimple.parameters?.docs,
            source: {
              originalSource:
                "{\n  name: 'Basic (Simple)',\n  args: {\n    value: 'Hello world!',\n    editorType: 'simple',\n    onChange: noOpOnChange\n  },\n  // Kept async because we use await userEvent.type\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm the text \"Hello world!\"\n    expect(canvas.getByDisplayValue('Hello world!')).toBeInTheDocument();\n\n    // Type \" - edited\"\n    await userEvent.type(canvas.getByDisplayValue('Hello world!'), ' - edited');\n    expect(canvas.getByDisplayValue('Hello world! - edited')).toBeInTheDocument();\n  }\n}",
              ...BasicSimple.parameters?.docs?.source,
            },
            description: {
              story: '1) Minimal usage: simple mode, no label',
              ...BasicSimple.parameters?.docs?.description,
            },
          },
        }),
          (LabeledSimple.parameters = {
            ...LabeledSimple.parameters,
            docs: {
              ...LabeledSimple.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Simple Editor Label',\n    value: 'Some text here',\n    editorType: 'simple',\n    onChange: noOpOnChange\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // The label \"Simple Editor Label\" should be rendered as well\n    expect(canvas.getByText('Simple Editor Label')).toBeInTheDocument();\n\n    // Check the text\n    expect(canvas.getByDisplayValue('Some text here')).toBeInTheDocument();\n  }\n}",
                ...LabeledSimple.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) With label and accordion = false\r\n   Still "simple" editor\r\n   - No userEvent calls => remove async',
                ...LabeledSimple.parameters?.docs?.description,
              },
            },
          }),
          (ComplexMode.parameters = {
            ...ComplexMode.parameters,
            docs: {
              ...ComplexMode.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    value: 'Start with complex but show toolbar toggles (simple vs rich vs markdown).',\n    editorType: 'complex',\n    onChange: noOpOnChange\n  },\n  // Kept async because we use await userEvent.click\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // The text is in the \"simple\" sub-mode initially\n    expect(canvas.getByDisplayValue('Start with complex but show toolbar toggles (simple vs rich vs markdown).')).toBeInTheDocument();\n\n    // The top toolbar has toggle buttons: \"Simple\", \"Rich Text\", \"Markdown\"\n    expect(canvas.getByRole('button', {\n      name: /simple/i\n    })).toBeInTheDocument();\n    expect(canvas.getByRole('button', {\n      name: /rich text/i\n    })).toBeInTheDocument();\n    expect(canvas.getByRole('button', {\n      name: /markdown/i\n    })).toBeInTheDocument();\n\n    // Switch to \"Markdown\" mode (for demonstration)\n    await userEvent.click(canvas.getByRole('button', {\n      name: /markdown/i\n    }));\n    // The editor re-renders in \"markdown\" sub-mode\n    // No direct assertion, but no crash indicates success\n  }\n}",
                ...ComplexMode.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Complex mode (starting with "simple" internally, but toolbar toggles are visible).',
                ...ComplexMode.parameters?.docs?.description,
              },
            },
          }),
          (WithAccordion.parameters = {
            ...WithAccordion.parameters,
            docs: {
              ...WithAccordion.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Accordion Editor Label',\n    value: 'Some initial text in an accordion panel',\n    editorType: 'complex',\n    accordion: true,\n    onChange: noOpOnChange\n  },\n  // Kept async because we use await userEvent.click\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // The label is the accordion summary\n    expect(canvas.getByText('Accordion Editor Label')).toBeInTheDocument();\n\n    // The content is initially collapsed. Expand by clicking\n    await userEvent.click(canvas.getByText('Accordion Editor Label'));\n\n    // Now \"Some initial text in an accordion panel\" is visible in the editor\n    expect(canvas.getByDisplayValue('Some initial text in an accordion panel')).toBeInTheDocument();\n  }\n}",
                ...WithAccordion.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) Accordion usage\r\n   If accordion is true, the editor is inside an expandable panel',
                ...WithAccordion.parameters?.docs?.description,
              },
            },
          }),
          (MarkdownMode.parameters = {
            ...MarkdownMode.parameters,
            docs: {
              ...MarkdownMode.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    value: '**Bold** text, *italic* text',\n    editorType: 'markdown',\n    onChange: noOpOnChange\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // If \"markdown\" is truly separate, we might see a <textarea> or something\n    // If your code defaults to \"simple\", we see the text in a <TextField>\n    expect(canvas.getByDisplayValue('**Bold** text, *italic* text')).toBeInTheDocument();\n  }\n}",
                ...MarkdownMode.parameters?.docs?.source,
              },
              description: {
                story:
                  '5) Basic markdown scenario\r\n   - No userEvent calls => remove async',
                ...MarkdownMode.parameters?.docs?.description,
              },
            },
          }),
          (LargeText.parameters = {
            ...LargeText.parameters,
            docs: {
              ...LargeText.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Large Text Editor',\n    value: 'Lots of text\\nLine 2\\nLine 3\\nLine 4\\nLine 5\\nLine 6\\nLine 7\\nLine 8\\nLine 9\\nLine 10',\n    editorType: 'simple',\n    minRows: 10,\n    onChange: noOpOnChange\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirms the multi-line text is present\n    expect(canvas.getByDisplayValue(/Lots of text/)).toBeInTheDocument();\n    // We won't do a robust check for each line, but we ensure no error occurs\n  }\n}",
                ...LargeText.parameters?.docs?.source,
              },
              description: {
                story:
                  '6) Large text scenario with 10 rows\r\n   - No userEvent calls => remove async',
                ...LargeText.parameters?.docs?.description,
              },
            },
          })
      },
    },
  ]
)
