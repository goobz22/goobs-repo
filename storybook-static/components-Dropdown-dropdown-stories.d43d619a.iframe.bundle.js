'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [9839],
    {
      './src/components/Dropdown/dropdown.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            ComplexOptions: () => ComplexOptions,
            ComplexOptionsSelected: () => ComplexOptionsSelected,
            CustomizedColors: () => CustomizedColors,
            Default: () => Default,
            NoOptions: () => NoOptions,
            RequiredDropdown: () => RequiredDropdown,
            ShrunkLabelAboveNotch: () => ShrunkLabelAboveNotch,
            ShrunkLabelOnNotch: () => ShrunkLabelOnNotch,
            WithDefaultValue: () => WithDefaultValue,
            WithError: () => WithError,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@storybook/test/dist/index.mjs'
        )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/Dropdown',
            component: __webpack_require__(
              './src/components/Dropdown/index.tsx'
            ).A,
            argTypes: {
              backgroundcolor: { control: 'color' },
              outlinecolor: { control: 'color' },
              fontcolor: { control: 'color' },
              shrunkfontcolor: { control: 'color' },
              unshrunkfontcolor: { control: 'color' },
              shrunklabelposition: {
                control: 'select',
                options: ['onNotch', 'aboveNotch'],
              },
            },
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Setup story metadata' } },
            },
          },
          sampleOptions = [
            { value: 'option_1' },
            { value: 'option_2', attribute1: 'Detail for #2' },
            {
              value: 'option_3',
              attribute1: 'Detail for #3',
              attribute2: 'Secondary',
            },
          ],
          Default = {
            args: { label: 'Default Dropdown', options: sampleOptions },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                canvas.getByRole('button')
              ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByText('Option 2')
                ),
                await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByRole('button')
                ).toHaveTextContent('Option 2')
            },
          },
          WithDefaultValue = {
            args: {
              label: 'Dropdown (defaultValue="option_3")',
              defaultValue: 'option_3',
              options: sampleOptions,
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByRole('button')
              ).toHaveTextContent('Option 3')
            },
          },
          WithError = {
            args: {
              label: 'Dropdown in Error State',
              error: !0,
              helperText: 'Oops! Something went wrong.',
              options: sampleOptions,
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Oops! Something went wrong.')
              ).toBeInTheDocument()
            },
          },
          RequiredDropdown = {
            args: {
              label: 'Dropdown (required)',
              required: !0,
              options: sampleOptions,
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Dropdown (required)')
              ).toBeInTheDocument()
            },
          },
          CustomizedColors = {
            args: {
              label: 'Custom Colors',
              options: sampleOptions,
              fontcolor: '#ffffff',
              backgroundcolor: '#4a90e2',
              outlinecolor: '#f56217',
              shrunkfontcolor: '#E91E63',
              unshrunkfontcolor: '#9C27B0',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                canvas.getByRole('button')
              ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByText('Option 1')
                ),
                await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByRole('button')
                ).toHaveTextContent('Option 1')
            },
          },
          ComplexOptions = {
            args: {
              label: 'Complex Options',
              options: [
                { value: 'Basic Option' },
                {
                  value: 'Fancy Option',
                  attribute1: 'Extra data',
                  attribute2: 'More details',
                },
                { value: 'Simple', attribute1: 'Single attribute' },
              ],
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                canvas.getByRole('button')
              ),
                await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Fancy Option')
                ).toBeInTheDocument(),
                await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText(/Extra data \| More details/i)
                ).toBeInTheDocument()
            },
          },
          ShrunkLabelAboveNotch = {
            args: {
              label: 'Above Notch Label',
              shrunklabelposition: 'aboveNotch',
              options: sampleOptions,
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                canvas.getByRole('button')
              ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByText('Option 2')
                ),
                await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByRole('button')
                ).toHaveTextContent('Option 2')
            },
          },
          ShrunkLabelOnNotch = {
            args: {
              label: 'On Notch Label',
              shrunklabelposition: 'onNotch',
              options: sampleOptions,
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                canvas.getByRole('button')
              ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByText('Option 3')
                ),
                await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByRole('button')
                ).toHaveTextContent('Option 3')
            },
          },
          NoOptions = {
            args: {
              label: 'No Options Provided',
              options: [],
              helperText: 'This dropdown has no items available.',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                canvas.getByRole('button')
              ),
                await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.queryByText('Option 1')
                ).not.toBeInTheDocument()
            },
          },
          ComplexOptionsSelected = {
            args: {
              label: 'Complex Options',
              defaultValue: 'Fancy Option',
              options: [
                { value: 'Basic Option' },
                {
                  value: 'Fancy Option',
                  attribute1: 'Extra data',
                  attribute2: 'More details',
                },
                { value: 'Simple', attribute1: 'Single attribute' },
              ],
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByRole('button')
              ).toHaveTextContent('Fancy Option'),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByRole('button')
                ),
                await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Fancy Option')
                ).toBeInTheDocument(),
                await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText(/Extra data \| More details/i)
                ).toBeInTheDocument(),
                await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Simple')
                ).toBeInTheDocument(),
                await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Single attribute')
                ).toBeInTheDocument(),
                await (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Basic Option')
                ).toBeInTheDocument()
            },
          },
          __namedExportsOrder = [
            'Default',
            'WithDefaultValue',
            'WithError',
            'RequiredDropdown',
            'CustomizedColors',
            'ComplexOptions',
            'ShrunkLabelAboveNotch',
            'ShrunkLabelOnNotch',
            'NoOptions',
            'ComplexOptionsSelected',
          ]
        ;(Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: 'Default Dropdown',\n    options: sampleOptions\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    // We can test the default scenario: open the dropdown & select an item\n    const canvas = within(canvasElement);\n\n    // 1. Click the dropdown to open menu\n    await userEvent.click(canvas.getByRole('button'));\n\n    // 2. Click on the second option\n    await userEvent.click(canvas.getByText('Option 2'));\n\n    // 3. Assert that the button now shows \"Option 2\"\n    await expect(canvas.getByRole('button')).toHaveTextContent('Option 2');\n  }\n}",
              ...Default.parameters?.docs?.source,
            },
            description: {
              story: '1) Basic scenario: default usage',
              ...Default.parameters?.docs?.description,
            },
          },
        }),
          (WithDefaultValue.parameters = {
            ...WithDefaultValue.parameters,
            docs: {
              ...WithDefaultValue.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Dropdown (defaultValue=\"option_3\")',\n    defaultValue: 'option_3',\n    options: sampleOptions\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // The initial label should be \"Option 3\"\n    await expect(canvas.getByRole('button')).toHaveTextContent('Option 3');\n  }\n}",
                ...WithDefaultValue.parameters?.docs?.source,
              },
              description: {
                story: '2) Dropdown with a default value',
                ...WithDefaultValue.parameters?.docs?.description,
              },
            },
          }),
          (WithError.parameters = {
            ...WithError.parameters,
            docs: {
              ...WithError.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Dropdown in Error State',\n    error: true,\n    helperText: 'Oops! Something went wrong.',\n    options: sampleOptions\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Check for the error text in the helper area\n    await expect(canvas.getByText('Oops! Something went wrong.')).toBeInTheDocument();\n  }\n}",
                ...WithError.parameters?.docs?.source,
              },
              description: {
                story: '3) Dropdown with an error state & helperText',
                ...WithError.parameters?.docs?.description,
              },
            },
          }),
          (RequiredDropdown.parameters = {
            ...RequiredDropdown.parameters,
            docs: {
              ...RequiredDropdown.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Dropdown (required)',\n    required: true,\n    options: sampleOptions\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Make sure the label indicates required in some manner\n    // (This depends on how your <Dropdown /> implements required labels)\n    await expect(canvas.getByText('Dropdown (required)')).toBeInTheDocument();\n  }\n}",
                ...RequiredDropdown.parameters?.docs?.source,
              },
              description: {
                story: '4) Dropdown marked as required',
                ...RequiredDropdown.parameters?.docs?.description,
              },
            },
          }),
          (CustomizedColors.parameters = {
            ...CustomizedColors.parameters,
            docs: {
              ...CustomizedColors.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Custom Colors',\n    options: sampleOptions,\n    fontcolor: '#ffffff',\n    backgroundcolor: '#4a90e2',\n    outlinecolor: '#f56217',\n    shrunkfontcolor: '#E91E63',\n    unshrunkfontcolor: '#9C27B0'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    // We won't do a heavy color check, but we can do a quick interaction test\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByRole('button'));\n    await userEvent.click(canvas.getByText('Option 1'));\n    await expect(canvas.getByRole('button')).toHaveTextContent('Option 1');\n  }\n}",
                ...CustomizedColors.parameters?.docs?.source,
              },
              description: {
                story: '5) Customized colors',
                ...CustomizedColors.parameters?.docs?.description,
              },
            },
          }),
          (ComplexOptions.parameters = {
            ...ComplexOptions.parameters,
            docs: {
              ...ComplexOptions.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Complex Options',\n    options: [{\n      value: 'Basic Option'\n    }, {\n      value: 'Fancy Option',\n      attribute1: 'Extra data',\n      attribute2: 'More details'\n    }, {\n      value: 'Simple',\n      attribute1: 'Single attribute'\n    }]\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Open\n    await userEvent.click(canvas.getByRole('button'));\n    // Find fancy option text\n    await expect(canvas.getByText('Fancy Option')).toBeInTheDocument();\n    await expect(canvas.getByText(/Extra data \\| More details/i)).toBeInTheDocument();\n  }\n}",
                ...ComplexOptions.parameters?.docs?.source,
              },
              description: {
                story: '6) Complex options (show attribute1 and attribute2)',
                ...ComplexOptions.parameters?.docs?.description,
              },
            },
          }),
          (ShrunkLabelAboveNotch.parameters = {
            ...ShrunkLabelAboveNotch.parameters,
            docs: {
              ...ShrunkLabelAboveNotch.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Above Notch Label',\n    shrunklabelposition: 'aboveNotch',\n    options: sampleOptions\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Basic interaction\n    await userEvent.click(canvas.getByRole('button'));\n    await userEvent.click(canvas.getByText('Option 2'));\n    await expect(canvas.getByRole('button')).toHaveTextContent('Option 2');\n  }\n}",
                ...ShrunkLabelAboveNotch.parameters?.docs?.source,
              },
              description: {
                story:
                  '7) Shrunk label above the notch\r\n   We set shrunklabelposition="aboveNotch" to confirm it doesn\'t draw the notch space',
                ...ShrunkLabelAboveNotch.parameters?.docs?.description,
              },
            },
          }),
          (ShrunkLabelOnNotch.parameters = {
            ...ShrunkLabelOnNotch.parameters,
            docs: {
              ...ShrunkLabelOnNotch.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'On Notch Label',\n    shrunklabelposition: 'onNotch',\n    options: sampleOptions\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Basic interaction\n    await userEvent.click(canvas.getByRole('button'));\n    await userEvent.click(canvas.getByText('Option 3'));\n    await expect(canvas.getByRole('button')).toHaveTextContent('Option 3');\n  }\n}",
                ...ShrunkLabelOnNotch.parameters?.docs?.source,
              },
              description: {
                story: '8) Shrunk label on top of the notch (the default)',
                ...ShrunkLabelOnNotch.parameters?.docs?.description,
              },
            },
          }),
          (NoOptions.parameters = {
            ...NoOptions.parameters,
            docs: {
              ...NoOptions.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'No Options Provided',\n    options: [],\n    helperText: 'This dropdown has no items available.'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Attempt to open\n    await userEvent.click(canvas.getByRole('button'));\n    // No items exist\n    // Might see a \"No options\" or an empty menu\n    // This assertion can change based on how you handle no items\n    await expect(canvas.queryByText('Option 1')).not.toBeInTheDocument();\n  }\n}",
                ...NoOptions.parameters?.docs?.source,
              },
              description: {
                story: '9) Empty options scenario',
                ...NoOptions.parameters?.docs?.description,
              },
            },
          }),
          (ComplexOptionsSelected.parameters = {
            ...ComplexOptionsSelected.parameters,
            docs: {
              ...ComplexOptionsSelected.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Complex Options',\n    defaultValue: 'Fancy Option',\n    options: [{\n      value: 'Basic Option'\n    }, {\n      value: 'Fancy Option',\n      attribute1: 'Extra data',\n      attribute2: 'More details'\n    }, {\n      value: 'Simple',\n      attribute1: 'Single attribute'\n    }]\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Verify initial selected value\n    await expect(canvas.getByRole('button')).toHaveTextContent('Fancy Option');\n\n    // Open the dropdown\n    await userEvent.click(canvas.getByRole('button'));\n\n    // Verify all complex option details are visible\n    await expect(canvas.getByText('Fancy Option')).toBeInTheDocument();\n    await expect(canvas.getByText(/Extra data \\| More details/i)).toBeInTheDocument();\n    await expect(canvas.getByText('Simple')).toBeInTheDocument();\n    await expect(canvas.getByText('Single attribute')).toBeInTheDocument();\n\n    // Verify basic option is also visible\n    await expect(canvas.getByText('Basic Option')).toBeInTheDocument();\n  }\n}",
                ...ComplexOptionsSelected.parameters?.docs?.source,
              },
              description: {
                story: '10) Complex Options with Option Selected and Menu Open',
                ...ComplexOptionsSelected.parameters?.docs?.description,
              },
            },
          })
      },
    },
  ]
)
