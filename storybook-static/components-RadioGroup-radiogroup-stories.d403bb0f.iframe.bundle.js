'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [7029],
    {
      './src/components/RadioGroup/radiogroup.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            CustomLabelStyles: () => CustomLabelStyles,
            SelectingOption: () => SelectingOption,
            TopLevelLabelStyling: () => TopLevelLabelStyling,
            WithDefaultValue: () => WithDefaultValue,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@storybook/test/dist/index.mjs'
        )
        const sampleOptions = [
            { label: 'Option A' },
            { label: 'Option B' },
            { label: 'Option C' },
          ],
          __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/RadioGroup',
            component: __webpack_require__(
              './src/components/RadioGroup/index.tsx'
            ).A,
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Setup Storybook metadata' } },
            },
          },
          Basic = {
            args: {
              name: 'basicExample',
              labelText: 'Choose an Option',
              options: sampleOptions,
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Choose an Option')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Option A')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Option B')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Option C')
                ).toBeInTheDocument()
            },
          },
          WithDefaultValue = {
            args: {
              name: 'defaultExample',
              labelText: 'Select your favorite',
              defaultValue: 'Option B',
              options: sampleOptions,
            },
            play: ({ canvasElement }) => {
              const optionB = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Option B')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                optionB
              ).toBeChecked()
            },
          },
          CustomLabelStyles = {
            args: {
              name: 'customStyles',
              labelText: 'Which flavor do you prefer?',
              options: [
                {
                  label: 'Vanilla',
                  fontColor: '#3f51b5',
                  fontVariant: 'merriparagraph',
                },
                {
                  label: 'Chocolate',
                  fontColor: '#f44336',
                  fontVariant: 'merriparagraph',
                },
                {
                  label: 'Strawberry',
                  fontColor: '#009688',
                  fontVariant: 'merriparagraph',
                },
              ],
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Which flavor do you prefer?')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Vanilla')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Chocolate')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Strawberry')
                ).toBeInTheDocument()
            },
          },
          TopLevelLabelStyling = {
            args: {
              name: 'topLevelStyling',
              labelText: 'Survey Question',
              labelFontColor: '#673ab7',
              options: sampleOptions,
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Survey Question')
              ).toBeInTheDocument()
            },
          },
          SelectingOption = {
            args: {
              name: 'interactionExample',
              labelText: 'Pick a letter',
              options: sampleOptions,
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
                _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement),
                optionA = canvas.getByLabelText('Option A'),
                optionB = canvas.getByLabelText('Option B'),
                optionC = canvas.getByLabelText('Option C')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                optionA
              ).not.toBeChecked(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  optionB
                ).not.toBeChecked(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  optionC
                ).not.toBeChecked(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  optionC
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  optionC
                ).toBeChecked(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  optionA
                ).not.toBeChecked(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  optionB
                ).not.toBeChecked()
            },
          },
          __namedExportsOrder = [
            'Basic',
            'WithDefaultValue',
            'CustomLabelStyles',
            'TopLevelLabelStyling',
            'SelectingOption',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    name: 'basicExample',\n    labelText: 'Choose an Option',\n    options: sampleOptions\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Verify label text\n    expect(canvas.getByText('Choose an Option')).toBeInTheDocument();\n\n    // The group has three radio options: Option A, B, C\n    expect(canvas.getByText('Option A')).toBeInTheDocument();\n    expect(canvas.getByText('Option B')).toBeInTheDocument();\n    expect(canvas.getByText('Option C')).toBeInTheDocument();\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story:
                '1) Basic usage\r\n   No user interactions => remove `async`.',
              ...Basic.parameters?.docs?.description,
            },
          },
        }),
          (WithDefaultValue.parameters = {
            ...WithDefaultValue.parameters,
            docs: {
              ...WithDefaultValue.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    name: 'defaultExample',\n    labelText: 'Select your favorite',\n    defaultValue: 'Option B',\n    options: sampleOptions\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm \"Option B\" is selected by default\n    const optionB = canvas.getByLabelText('Option B');\n    expect(optionB).toBeChecked();\n  }\n}",
                ...WithDefaultValue.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) With a default selected value\r\n   No user interactions => remove `async`.',
                ...WithDefaultValue.parameters?.docs?.description,
              },
            },
          }),
          (CustomLabelStyles.parameters = {
            ...CustomLabelStyles.parameters,
            docs: {
              ...CustomLabelStyles.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    name: 'customStyles',\n    labelText: 'Which flavor do you prefer?',\n    options: [{\n      label: 'Vanilla',\n      fontColor: '#3f51b5',\n      fontVariant: 'merriparagraph'\n    }, {\n      label: 'Chocolate',\n      fontColor: '#f44336',\n      fontVariant: 'merriparagraph'\n    }, {\n      label: 'Strawberry',\n      fontColor: '#009688',\n      fontVariant: 'merriparagraph'\n    }]\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // The label text should be visible\n    expect(canvas.getByText('Which flavor do you prefer?')).toBeInTheDocument();\n\n    // Check presence of each custom-labeled item\n    expect(canvas.getByText('Vanilla')).toBeInTheDocument();\n    expect(canvas.getByText('Chocolate')).toBeInTheDocument();\n    expect(canvas.getByText('Strawberry')).toBeInTheDocument();\n  }\n}",
                ...CustomLabelStyles.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Custom Label Styles\r\n   No user interactions => remove `async`.',
                ...CustomLabelStyles.parameters?.docs?.description,
              },
            },
          }),
          (TopLevelLabelStyling.parameters = {
            ...TopLevelLabelStyling.parameters,
            docs: {
              ...TopLevelLabelStyling.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    name: 'topLevelStyling',\n    labelText: 'Survey Question',\n    labelFontColor: '#673ab7',\n    // Deep Purple\n    options: sampleOptions\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm the top-level label text\n    expect(canvas.getByText('Survey Question')).toBeInTheDocument();\n  }\n}",
                ...TopLevelLabelStyling.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) Label variant & color from the top-level props\r\n   No user interactions => remove `async`.',
                ...TopLevelLabelStyling.parameters?.docs?.description,
              },
            },
          }),
          (SelectingOption.parameters = {
            ...SelectingOption.parameters,
            docs: {
              ...SelectingOption.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    name: 'interactionExample',\n    labelText: 'Pick a letter',\n    options: sampleOptions\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Initially none are selected\n    const optionA = canvas.getByLabelText('Option A');\n    const optionB = canvas.getByLabelText('Option B');\n    const optionC = canvas.getByLabelText('Option C');\n    expect(optionA).not.toBeChecked();\n    expect(optionB).not.toBeChecked();\n    expect(optionC).not.toBeChecked();\n\n    // Click on Option C\n    await userEvent.click(optionC);\n    expect(optionC).toBeChecked();\n\n    // Option A & B remain unchecked\n    expect(optionA).not.toBeChecked();\n    expect(optionB).not.toBeChecked();\n  }\n}",
                ...SelectingOption.parameters?.docs?.source,
              },
              description: {
                story:
                  '5) Interaction: Selecting an Option\r\n   Uses userEvent => keep `async`.',
                ...SelectingOption.parameters?.docs?.description,
              },
            },
          })
      },
      './src/components/RadioGroup/index.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/next/dist/compiled/react/jsx-runtime.js'
            ),
          _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            (__webpack_require__(
              './node_modules/next/dist/compiled/react/index.js'
            ),
            __webpack_require__(
              './node_modules/@mui/material/FormControl/FormControl.js'
            )),
          _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/FormLabel/FormLabel.js'
            ),
          _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/material/RadioGroup/RadioGroup.js'
            ),
          _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/material/FormControlLabel/FormControlLabel.js'
            ),
          _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__('./node_modules/@mui/material/Radio/Radio.js'),
          _components_Typography__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__('./src/components/Typography/index.tsx')
        const RadioGroup = ({
            label,
            options,
            defaultValue,
            name,
            labelFontVariant,
            labelFontColor,
            labelText,
          }) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                    {
                      id: `${name}-label`,
                      sx: { marginBottom: '8px' },
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_Typography__WEBPACK_IMPORTED_MODULE_2__.o,
                        {
                          text: labelText || label,
                          fontcolor: labelFontColor,
                          fontvariant: labelFontVariant,
                        }
                      ),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,
                    {
                      'aria-labelledby': `${name}-label`,
                      defaultValue,
                      name,
                      children: options.map((option, index) =>
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,
                          {
                            control: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,
                              {}
                            ),
                            label: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_Typography__WEBPACK_IMPORTED_MODULE_2__.o,
                              {
                                text: option.label,
                                fontcolor: option.fontColor,
                                fontvariant: option.fontVariant,
                              }
                            ),
                          },
                          index
                        )
                      ),
                    }
                  ),
                ],
              }
            ),
          __WEBPACK_DEFAULT_EXPORT__ = RadioGroup
        RadioGroup.__docgenInfo = {
          description:
            'RadioGroup component renders a group of radio buttons with customizable options.\nIt allows selecting a single value from a list of options.\n@param props The props for the RadioGroup component.\n@returns The rendered RadioGroup component.',
          methods: [],
          displayName: 'RadioGroup',
          props: {
            label: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            options: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'RadioOption' }],
                raw: 'RadioOption[]',
              },
              description: '',
            },
            defaultValue: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            name: { required: !0, tsType: { name: 'string' }, description: '' },
            labelFontVariant: {
              required: !1,
              tsType: { name: 'TypographyPropsVariantOverrides' },
              description: '',
            },
            labelFontColor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            labelText: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }
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
    },
  ]
)
