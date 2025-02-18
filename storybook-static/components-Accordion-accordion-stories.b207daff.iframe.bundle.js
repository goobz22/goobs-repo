'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [1251],
    {
      './src/components/Accordion/accordion.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            ControlledAccordion: () => ControlledAccordion,
            CustomStyles: () => CustomStyles,
            DefaultExpanded: () => DefaultExpanded,
            DisabledAccordion: () => DisabledAccordion,
            LargeContent: () => LargeContent,
            MultipleAccordions: () => MultipleAccordions,
            NestedAccordion: () => NestedAccordion,
            SingleAccordion: () => SingleAccordion,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/next/dist/compiled/react/jsx-runtime.js'
            ),
          react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          _storybook_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './src/components/Accordion/index.tsx'
          ),
          _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            './src/components/Typography/index.tsx'
          )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/Accordion',
            component: _index__WEBPACK_IMPORTED_MODULE_3__.nD,
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Setup story metadata' } },
            },
            argTypes: {},
          },
          sampleContent = (0,
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
            {
              fontvariant: 'merriparagraph',
              text: 'This is the accordion content.',
            }
          ),
          SingleAccordion = {
            name: 'Single Accordion (collapsed by default)',
            render: args =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _index__WEBPACK_IMPORTED_MODULE_3__.nD,
                {
                  ...args,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.Xo,
                      { children: 'Single Accordion' }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.Zi,
                      { children: sampleContent }
                    ),
                  ],
                }
              ),
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                canvas.queryByText('This is the accordion content.')
              ).not.toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                  canvas.getByText('Single Accordion')
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('This is the accordion content.')
                ).toBeInTheDocument()
            },
          },
          DefaultExpanded = {
            name: 'Single Accordion (defaultExpanded)',
            render: args =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _index__WEBPACK_IMPORTED_MODULE_3__.nD,
                {
                  defaultExpanded: !0,
                  ...args,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.Xo,
                      { children: 'Default Expanded' }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.Zi,
                      { children: sampleContent }
                    ),
                  ],
                }
              ),
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(canvasElement)
              return (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                canvas.getByText('This is the accordion content.')
              ).toBeInTheDocument()
            },
          },
          MultipleAccordions = {
            name: 'Multiple Accordions',
            render: args =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.nD,
                      {
                        ...args,
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _index__WEBPACK_IMPORTED_MODULE_3__.Xo,
                            { children: 'First Item' }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _index__WEBPACK_IMPORTED_MODULE_3__.Zi,
                            {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                                {
                                  fontvariant: 'merriparagraph',
                                  text: 'Details for first item.',
                                }
                              ),
                            }
                          ),
                        ],
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.nD,
                      {
                        ...args,
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _index__WEBPACK_IMPORTED_MODULE_3__.Xo,
                            { children: 'Second Item' }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _index__WEBPACK_IMPORTED_MODULE_3__.Zi,
                            {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                                {
                                  fontvariant: 'merriparagraph',
                                  text: 'Details for second item.',
                                }
                              ),
                            }
                          ),
                        ],
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.nD,
                      {
                        ...args,
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _index__WEBPACK_IMPORTED_MODULE_3__.Xo,
                            { children: 'Third Item' }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _index__WEBPACK_IMPORTED_MODULE_3__.Zi,
                            {
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                                {
                                  fontvariant: 'merriparagraph',
                                  text: 'Details for third item.',
                                }
                              ),
                            }
                          ),
                        ],
                      }
                    ),
                  ],
                }
              ),
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                canvas.queryByText('Details for first item.')
              ).not.toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.queryByText('Details for second item.')
                ).not.toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.queryByText('Details for third item.')
                ).not.toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                  canvas.getByText('Second Item')
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Details for second item.')
                ).toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                  canvas.getByText('First Item')
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Details for first item.')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Details for second item.')
                ).toBeInTheDocument()
            },
          },
          NestedAccordion = {
            name: 'Nested Accordion',
            render: args =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _index__WEBPACK_IMPORTED_MODULE_3__.nD,
                {
                  ...args,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.Xo,
                      { children: 'Parent Accordion' }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.Zi,
                      {
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                            {
                              fontvariant: 'merriparagraph',
                              text: 'Top-level content',
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            _index__WEBPACK_IMPORTED_MODULE_3__.nD,
                            {
                              ...args,
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _index__WEBPACK_IMPORTED_MODULE_3__.Xo,
                                  { children: 'Nested Accordion' }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _index__WEBPACK_IMPORTED_MODULE_3__.Zi,
                                  { children: sampleContent }
                                ),
                              ],
                            }
                          ),
                        ],
                      }
                    ),
                  ],
                }
              ),
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                canvas.queryByText('This is the accordion content.')
              ).not.toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                  canvas.getByText('Parent Accordion')
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Top-level content')
                ).toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                  canvas.getByText('Nested Accordion')
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('This is the accordion content.')
                ).toBeInTheDocument()
            },
          },
          CustomStyles = {
            name: 'Custom Styled Accordion',
            render: args =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _index__WEBPACK_IMPORTED_MODULE_3__.nD,
                {
                  sx: {
                    border: '2px solid #4caf50',
                    borderRadius: '8px',
                    marginTop: '10px',
                  },
                  ...args,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.Xo,
                      { children: 'Custom Styles' }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.Zi,
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                          {
                            fontvariant: 'merriparagraph',
                            text: 'Look at this fancy border!',
                          }
                        ),
                      }
                    ),
                  ],
                }
              ),
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(canvasElement)
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                canvas.getByText('Custom Styles')
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Look at this fancy border!')
                ).toBeInTheDocument()
            },
          },
          LargeContent = {
            name: 'Accordion With Large Content',
            render: args =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _index__WEBPACK_IMPORTED_MODULE_3__.nD,
                {
                  ...args,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.Xo,
                      { children: 'Lots of Text' }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.Zi,
                      {
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'div',
                          {
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                                {
                                  fontvariant: 'merriparagraph',
                                  text: 'Line 1',
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                                {
                                  fontvariant: 'merriparagraph',
                                  text: 'Line 2',
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                                {
                                  fontvariant: 'merriparagraph',
                                  text: 'Line 3',
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                                {
                                  fontvariant: 'merriparagraph',
                                  text: 'Line 4',
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                                {
                                  fontvariant: 'merriparagraph',
                                  text: 'Line 5',
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                                {
                                  fontvariant: 'merriparagraph',
                                  text: 'Line 6',
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                                {
                                  fontvariant: 'merriparagraph',
                                  text: 'Line 7',
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                                {
                                  fontvariant: 'merriparagraph',
                                  text: 'Line 8',
                                }
                              ),
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                                {
                                  fontvariant: 'merriparagraph',
                                  text: 'Line 9',
                                }
                              ),
                            ],
                          }
                        ),
                      }
                    ),
                  ],
                }
              ),
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(canvasElement)
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                canvas.getByText('Lots of Text')
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Line 1')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Line 9')
                ).toBeInTheDocument()
            },
          },
          DisabledAccordion = {
            name: 'Disabled Accordion',
            render: args =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _index__WEBPACK_IMPORTED_MODULE_3__.nD,
                {
                  disabled: !0,
                  ...args,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.Xo,
                      { children: 'Cannot Expand' }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.Zi,
                      { children: sampleContent }
                    ),
                  ],
                }
              ),
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(canvasElement)
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                canvas.getByText('Cannot Expand')
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.queryByText('This is the accordion content.')
                ).not.toBeInTheDocument()
            },
          },
          ControlledAccordionExample = () => {
            const [isExpanded, setIsExpanded] =
              react__WEBPACK_IMPORTED_MODULE_1__.useState(!1)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    'button',
                    {
                      onClick: () => setIsExpanded(!isExpanded),
                      children: 'Toggle Accordion',
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    _index__WEBPACK_IMPORTED_MODULE_3__.nD,
                    {
                      expanded: isExpanded,
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _index__WEBPACK_IMPORTED_MODULE_3__.Xo,
                          { children: 'Controlled Accordion' }
                        ),
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _index__WEBPACK_IMPORTED_MODULE_3__.Zi,
                          {
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _Typography__WEBPACK_IMPORTED_MODULE_4__.A,
                              {
                                fontvariant: 'merriparagraph',
                                text: 'This is controlled externally.',
                              }
                            ),
                          }
                        ),
                      ],
                    }
                  ),
                ],
              }
            )
          },
          ControlledAccordion = {
            name: 'Controlled Accordion (toggle via props)',
            render: () =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                ControlledAccordionExample,
                {}
              ),
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                canvas.queryByText('This is controlled externally.')
              ).not.toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                  canvas.getByRole('button', { name: 'Toggle Accordion' })
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('This is controlled externally.')
                ).toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                  canvas.getByRole('button', { name: 'Toggle Accordion' })
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.queryByText('This is controlled externally.')
                ).not.toBeInTheDocument()
            },
          },
          __namedExportsOrder = [
            'SingleAccordion',
            'DefaultExpanded',
            'MultipleAccordions',
            'NestedAccordion',
            'CustomStyles',
            'LargeContent',
            'DisabledAccordion',
            'ControlledAccordion',
          ]
        ;(SingleAccordion.parameters = {
          ...SingleAccordion.parameters,
          docs: {
            ...SingleAccordion.parameters?.docs,
            source: {
              originalSource:
                "{\n  name: 'Single Accordion (collapsed by default)',\n  render: args => <Accordion {...args}>\r\n      <AccordionSummary>Single Accordion</AccordionSummary>\r\n      <AccordionDetails>{sampleContent}</AccordionDetails>\r\n    </Accordion>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // 1. Verify that the accordion content is not visible initially\n    expect(canvas.queryByText('This is the accordion content.')).not.toBeInTheDocument();\n\n    // 2. Click on the summary to expand\n    await userEvent.click(canvas.getByText('Single Accordion'));\n\n    // 3. Verify that the content is now visible\n    expect(canvas.getByText('This is the accordion content.')).toBeInTheDocument();\n  }\n}",
              ...SingleAccordion.parameters?.docs?.source,
            },
            description: {
              story: '1) Basic single Accordion',
              ...SingleAccordion.parameters?.docs?.description,
            },
          },
        }),
          (DefaultExpanded.parameters = {
            ...DefaultExpanded.parameters,
            docs: {
              ...DefaultExpanded.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'Single Accordion (defaultExpanded)',\n  render: args => <Accordion defaultExpanded {...args}>\r\n      <AccordionSummary>Default Expanded</AccordionSummary>\r\n      <AccordionDetails>{sampleContent}</AccordionDetails>\r\n    </Accordion>,\n  // Add async and return the assertion\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Return the assertion to properly handle the promise\n    return expect(canvas.getByText('This is the accordion content.')).toBeInTheDocument();\n  }\n}",
                ...DefaultExpanded.parameters?.docs?.source,
              },
              description: {
                story: '2) Basic single Accordion (defaultExpanded)',
                ...DefaultExpanded.parameters?.docs?.description,
              },
            },
          }),
          (MultipleAccordions.parameters = {
            ...MultipleAccordions.parameters,
            docs: {
              ...MultipleAccordions.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'Multiple Accordions',\n  render: args => <>\r\n      <Accordion {...args}>\r\n        <AccordionSummary>First Item</AccordionSummary>\r\n        <AccordionDetails>\r\n          <Typography fontvariant=\"merriparagraph\" text=\"Details for first item.\" />\r\n        </AccordionDetails>\r\n      </Accordion>\r\n      <Accordion {...args}>\r\n        <AccordionSummary>Second Item</AccordionSummary>\r\n        <AccordionDetails>\r\n          <Typography fontvariant=\"merriparagraph\" text=\"Details for second item.\" />\r\n        </AccordionDetails>\r\n      </Accordion>\r\n      <Accordion {...args}>\r\n        <AccordionSummary>Third Item</AccordionSummary>\r\n        <AccordionDetails>\r\n          <Typography fontvariant=\"merriparagraph\" text=\"Details for third item.\" />\r\n        </AccordionDetails>\r\n      </Accordion>\r\n    </>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Initially, no details are visible\n    expect(canvas.queryByText('Details for first item.')).not.toBeInTheDocument();\n    expect(canvas.queryByText('Details for second item.')).not.toBeInTheDocument();\n    expect(canvas.queryByText('Details for third item.')).not.toBeInTheDocument();\n\n    // Expand the second item\n    await userEvent.click(canvas.getByText('Second Item'));\n    expect(canvas.getByText('Details for second item.')).toBeInTheDocument();\n\n    // Expand the first item\n    await userEvent.click(canvas.getByText('First Item'));\n    expect(canvas.getByText('Details for first item.')).toBeInTheDocument();\n\n    // The second item should remain expanded unless the `Accordion` is configured otherwise\n    expect(canvas.getByText('Details for second item.')).toBeInTheDocument();\n  }\n}",
                ...MultipleAccordions.parameters?.docs?.source,
              },
              description: {
                story: '3) Multiple Accordions',
                ...MultipleAccordions.parameters?.docs?.description,
              },
            },
          }),
          (NestedAccordion.parameters = {
            ...NestedAccordion.parameters,
            docs: {
              ...NestedAccordion.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'Nested Accordion',\n  render: args => <Accordion {...args}>\r\n      <AccordionSummary>Parent Accordion</AccordionSummary>\r\n      <AccordionDetails>\r\n        <Typography fontvariant=\"merriparagraph\" text=\"Top-level content\" />\r\n        <Accordion {...args}>\r\n          <AccordionSummary>Nested Accordion</AccordionSummary>\r\n          <AccordionDetails>{sampleContent}</AccordionDetails>\r\n        </Accordion>\r\n      </AccordionDetails>\r\n    </Accordion>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // The nested content is not initially visible\n    expect(canvas.queryByText('This is the accordion content.')).not.toBeInTheDocument();\n\n    // Expand the parent\n    await userEvent.click(canvas.getByText('Parent Accordion'));\n    expect(canvas.getByText('Top-level content')).toBeInTheDocument();\n\n    // Now expand the nested accordion\n    await userEvent.click(canvas.getByText('Nested Accordion'));\n    expect(canvas.getByText('This is the accordion content.')).toBeInTheDocument();\n  }\n}",
                ...NestedAccordion.parameters?.docs?.source,
              },
              description: {
                story: '4) Nested Accordion',
                ...NestedAccordion.parameters?.docs?.description,
              },
            },
          }),
          (CustomStyles.parameters = {
            ...CustomStyles.parameters,
            docs: {
              ...CustomStyles.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'Custom Styled Accordion',\n  render: args => <Accordion sx={{\n    border: '2px solid #4caf50',\n    borderRadius: '8px',\n    marginTop: '10px'\n  }} {...args}>\r\n      <AccordionSummary>Custom Styles</AccordionSummary>\r\n      <AccordionDetails>\r\n        <Typography fontvariant=\"merriparagraph\" text=\"Look at this fancy border!\" />\r\n      </AccordionDetails>\r\n    </Accordion>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Expand and verify\n    await userEvent.click(canvas.getByText('Custom Styles'));\n    expect(canvas.getByText('Look at this fancy border!')).toBeInTheDocument();\n  }\n}",
                ...CustomStyles.parameters?.docs?.source,
              },
              description: {
                story: '5) Custom styles',
                ...CustomStyles.parameters?.docs?.description,
              },
            },
          }),
          (LargeContent.parameters = {
            ...LargeContent.parameters,
            docs: {
              ...LargeContent.parameters?.docs,
              source: {
                originalSource:
                  '{\n  name: \'Accordion With Large Content\',\n  render: args => <Accordion {...args}>\r\n      <AccordionSummary>Lots of Text</AccordionSummary>\r\n      <AccordionDetails>\r\n        <div>\r\n          <Typography fontvariant="merriparagraph" text="Line 1" />\r\n          <Typography fontvariant="merriparagraph" text="Line 2" />\r\n          <Typography fontvariant="merriparagraph" text="Line 3" />\r\n          <Typography fontvariant="merriparagraph" text="Line 4" />\r\n          <Typography fontvariant="merriparagraph" text="Line 5" />\r\n          <Typography fontvariant="merriparagraph" text="Line 6" />\r\n          <Typography fontvariant="merriparagraph" text="Line 7" />\r\n          <Typography fontvariant="merriparagraph" text="Line 8" />\r\n          <Typography fontvariant="merriparagraph" text="Line 9" />\r\n        </div>\r\n      </AccordionDetails>\r\n    </Accordion>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Expand\n    await userEvent.click(canvas.getByText(\'Lots of Text\'));\n    // Confirm a few lines\n    expect(canvas.getByText(\'Line 1\')).toBeInTheDocument();\n    expect(canvas.getByText(\'Line 9\')).toBeInTheDocument();\n  }\n}',
                ...LargeContent.parameters?.docs?.source,
              },
              description: {
                story: '6) Accordion with many lines of content',
                ...LargeContent.parameters?.docs?.description,
              },
            },
          }),
          (DisabledAccordion.parameters = {
            ...DisabledAccordion.parameters,
            docs: {
              ...DisabledAccordion.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'Disabled Accordion',\n  render: args => <Accordion disabled {...args}>\r\n      <AccordionSummary>Cannot Expand</AccordionSummary>\r\n      <AccordionDetails>{sampleContent}</AccordionDetails>\r\n    </Accordion>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Try to expand\n    await userEvent.click(canvas.getByText('Cannot Expand'));\n    // Content should remain hidden\n    expect(canvas.queryByText('This is the accordion content.')).not.toBeInTheDocument();\n  }\n}",
                ...DisabledAccordion.parameters?.docs?.source,
              },
              description: {
                story: '7) Disabled Accordion',
                ...DisabledAccordion.parameters?.docs?.description,
              },
            },
          }),
          (ControlledAccordion.parameters = {
            ...ControlledAccordion.parameters,
            docs: {
              ...ControlledAccordion.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'Controlled Accordion (toggle via props)',\n  render: () => <ControlledAccordionExample />,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Initially hidden\n    expect(canvas.queryByText('This is controlled externally.')).not.toBeInTheDocument();\n\n    // Click the external toggle button\n    await userEvent.click(canvas.getByRole('button', {\n      name: 'Toggle Accordion'\n    }));\n    // Now the content should appear\n    expect(canvas.getByText('This is controlled externally.')).toBeInTheDocument();\n\n    // Click again to hide\n    await userEvent.click(canvas.getByRole('button', {\n      name: 'Toggle Accordion'\n    }));\n    expect(canvas.queryByText('This is controlled externally.')).not.toBeInTheDocument();\n  }\n}",
                ...ControlledAccordion.parameters?.docs?.source,
              },
            },
          })
      },
      './src/components/Accordion/index.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          Xo: () => AccordionSummary,
          Zi: () => AccordionDetails,
          nD: () => Accordion,
        })
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/next/dist/compiled/react/jsx-runtime.js'
            ),
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ =
            (__webpack_require__(
              './node_modules/next/dist/compiled/react/index.js'
            ),
            __webpack_require__(
              './node_modules/@mui/material/styles/styled.js'
            )),
          _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/Accordion/Accordion.js'
            ),
          _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/material/AccordionSummary/AccordionSummary.js'
            ),
          _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/material/AccordionDetails/AccordionDetails.js'
            ),
          _barrel_optimize_names_ExpandMore_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/ExpandMore.js'
            ),
          _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/styles/palette.ts'
          )
        const StyledAccordion = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_4__.A
          )({ '&.MuiAccordion-root': { '&:before': { display: 'none' } } }),
          StyledAccordionSummary = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_5__.A
          )({ fontSize: '20px', fontFamily: 'merriweather', fontWeight: 500 }),
          StyledAccordionDetails = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__.A
          )(({ theme }) => ({ padding: theme.spacing(2) }))
        function Accordion({ children, ...props }) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            StyledAccordion,
            { disableGutters: !0, ...props, children }
          )
        }
        function AccordionSummary({ children, ...props }) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            StyledAccordionSummary,
            {
              expandIcon: (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_ExpandMore_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__.A,
                {
                  sx: {
                    color: _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
                  },
                }
              ),
              ...props,
              children,
            }
          )
        }
        function AccordionDetails({ children, ...props }) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            StyledAccordionDetails,
            { ...props, children }
          )
        }
        ;(Accordion.displayName = 'Accordion'),
          (AccordionSummary.displayName = 'AccordionSummary'),
          (AccordionDetails.displayName = 'AccordionDetails'),
          (Accordion.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'Accordion',
            props: {
              children: {
                required: !0,
                tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
                description: '',
              },
            },
          }),
          (AccordionSummary.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'AccordionSummary',
            props: {
              children: {
                required: !0,
                tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
                description: '',
              },
            },
          }),
          (AccordionDetails.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'AccordionDetails',
            props: {
              children: {
                required: !0,
                tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
                description: '',
              },
            },
          })
      },
      './src/components/Typography/index.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
          o: () => Typography,
        })
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/next/dist/compiled/react/jsx-runtime.js'
            ),
          _barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@mui/material/Typography/Typography.js'
            )
        __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
        const arapeyStyles = {
            h1: {
              fontFamily: 'Arapey, serif',
              fontSize: '3rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            h2: {
              fontFamily: 'Arapey, serif',
              fontSize: '2.5rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            h3: {
              fontFamily: 'Arapey, serif',
              fontSize: '2rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            h4: {
              fontFamily: 'Arapey, serif',
              fontSize: '1.5rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            h5: {
              fontFamily: 'Arapey, serif',
              fontSize: '1.25rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            h6: {
              fontFamily: 'Arapey, serif',
              fontSize: '1.1rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            paragraph: {
              fontFamily: 'Arapey, serif',
              fontSize: '1rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            helperheader: {
              fontFamily: 'Arapey, serif',
              fontSize: '0.875rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            helperfooter: {
              fontFamily: 'Arapey, serif',
              fontSize: '0.75rem',
              fontWeight: 400,
              textTransform: 'none',
            },
          },
          interStyles = {
            h1: {
              fontFamily: 'Inter, sans-serif',
              fontSize: '3rem',
              fontWeight: 700,
              textTransform: 'none',
            },
            h2: {
              fontFamily: 'Inter, sans-serif',
              fontSize: '2.5rem',
              fontWeight: 700,
              textTransform: 'none',
            },
            h3: {
              fontFamily: 'Inter, sans-serif',
              fontSize: '2rem',
              fontWeight: 600,
              textTransform: 'none',
            },
            h4: {
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 600,
              textTransform: 'none',
            },
            h5: {
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.25rem',
              fontWeight: 500,
              textTransform: 'none',
            },
            h6: {
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.1rem',
              fontWeight: 500,
              textTransform: 'none',
            },
            paragraph: {
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            helperheader: {
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            helperfooter: {
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 400,
              textTransform: 'none',
            },
          },
          merriStyles = {
            h1: {
              fontFamily: 'Merriweather, serif',
              fontSize: '3rem',
              fontWeight: 700,
              textTransform: 'none',
            },
            h2: {
              fontFamily: 'Merriweather, serif',
              fontSize: '2.5rem',
              fontWeight: 700,
              textTransform: 'none',
            },
            h3: {
              fontFamily: 'Merriweather, serif',
              fontSize: '2rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            h4: {
              fontFamily: 'Merriweather, serif',
              fontSize: '1.5rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            h5: {
              fontFamily: 'Merriweather, serif',
              fontSize: '1.25rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            h6: {
              fontFamily: 'Merriweather, serif',
              fontSize: '1.1rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            paragraph: {
              fontFamily: 'Merriweather, serif',
              fontSize: '1rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            helperheader: {
              fontFamily: 'Merriweather, serif',
              fontSize: '0.875rem',
              fontWeight: 400,
              textTransform: 'none',
            },
            helperfooter: {
              fontFamily: 'Merriweather, serif',
              fontSize: '0.75rem',
              fontWeight: 400,
              textTransform: 'none',
            },
          },
          Typography = ({
            text,
            fontcolor,
            fontvariant,
            variant,
            children,
            ...rest
          }) => {
            let variantStyle = {}
            const actualVariant = fontvariant || variant
            if ('string' == typeof actualVariant) {
              const fontFamily = actualVariant.startsWith('arapey')
                ? 'arapey'
                : actualVariant.startsWith('inter')
                  ? 'inter'
                  : actualVariant.startsWith('merri')
                    ? 'merri'
                    : null
              if (fontFamily) {
                const variantPart = actualVariant.slice(fontFamily.length)
                switch (fontFamily) {
                  case 'arapey':
                    variantStyle = arapeyStyles[variantPart] || {}
                    break
                  case 'inter':
                    variantStyle = interStyles[variantPart] || {}
                    break
                  case 'merri':
                    variantStyle = merriStyles[variantPart] || {}
                }
              }
            }
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _barrel_optimize_names_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.A,
              {
                component: 'span',
                style: { color: fontcolor, ...variantStyle },
                variant: actualVariant,
                ...rest,
                children: text || children,
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = Typography
        Typography.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Typography',
          props: {
            text: { required: !1, tsType: { name: 'string' }, description: '' },
            fontvariant: {
              required: !1,
              tsType: {
                name: 'literal',
                value: '`${FontFamily}${TypographyVariant}`',
              },
              description: '',
            },
            fontcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            variant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "CustomTypographyVariant | MuiTypographyProps['variant']",
                elements: [
                  {
                    name: 'literal',
                    value: '`${FontFamily}${TypographyVariant}`',
                  },
                  {
                    name: "MuiTypographyProps['variant']",
                    raw: "MuiTypographyProps['variant']",
                  },
                ],
              },
              description: '',
            },
            children: {
              required: !1,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
          },
          composes: ['Omit'],
        }
      },
      './src/styles/palette.ts': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          B3: () => marine,
          ON: () => white,
          Oh: () => grey,
          Om: () => gunpowder,
          Ql: () => black,
          Yb: () => semiTransparentWhite,
          hu: () => aqua,
          o_: () => semiTransparentBlack,
          wL: () => green,
          wv: () => red,
          wy: () => stainlessSteel,
          yR: () => woad,
          zx: () => ocean,
        })
        const aqua = { main: '#9CE4F8', light: '#C5F0FB', dark: '#6AB6D1' },
          woad = { main: '#63B3DD', light: '#8ECAE6', dark: '#3E7DA3' },
          marine = { main: '#013E89', light: '#3367B2', dark: '#002756' },
          stainlessSteel = {
            main: '#150D22',
            light: '#423753',
            dark: '#08060E',
          },
          ocean = { main: '#0E3065', light: '#355088', dark: '#081E40' },
          gunpowder = { main: '#210352', light: '#4D337D', dark: '#11022A' },
          black = { main: '#000000', light: '#333333', dark: '#000000' },
          white = { main: '#ffffff', light: '#ffffff', dark: '#eeeeee' },
          semiTransparentWhite = {
            main: 'rgba(255, 255, 255, 0.09)',
            light: 'rgba(255, 255, 255, 0.15)',
            dark: 'rgba(255, 255, 255, 0.05)',
          },
          semiTransparentBlack = {
            main: 'rgba(0, 0, 0, 0.09)',
            light: 'rgba(0, 0, 0, 0.15)',
            dark: 'rgba(0, 0, 0, 0.05)',
          },
          red = { main: '#FF0000', light: '#FF4C4C', dark: '#B30000' },
          green = { main: '#00FF00', light: '#4CFF4C', dark: '#00B300' },
          grey = { main: '#E8E8E8', light: '#F5F5F5', dark: '#BDBDBD' }
      },
    },
  ]
)
