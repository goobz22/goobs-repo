'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [8297],
    {
      './src/components/IncrementNumberField/incrementnumberfield.stories.tsx':
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__),
            __webpack_require__.d(__webpack_exports__, {
              Basic: () => Basic,
              CustomStyles: () => CustomStyles,
              ManualTyping: () => ManualTyping,
              MultipleIncrements: () => MultipleIncrements,
              WithInitialValue: () => WithInitialValue,
              __namedExportsOrder: () => __namedExportsOrder,
              default: () => __WEBPACK_DEFAULT_EXPORT__,
            })
          var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__('./node_modules/@storybook/test/dist/index.mjs')
          const __WEBPACK_DEFAULT_EXPORT__ = {
              title: 'Components/IncrementNumberField',
              component: __webpack_require__(
                './src/components/IncrementNumberField/index.tsx'
              ).A,
              parameters: {
                a11y: { disable: !1 },
                docs: {
                  description: { component: 'Setup Storybook metadata' },
                },
              },
            },
            Basic = {
              name: 'Basic (Default)',
              args: { label: 'Increment Number', initialValue: '0' },
              play: async ({ canvasElement }) => {
                const canvas = (0,
                _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByLabelText('Increment Number')
                ).toBeInTheDocument()
                const decrementBtn = canvas.getByRole('button', { name: '-' }),
                  incrementBtn = canvas.getByRole('button', { name: '+' }),
                  input = canvas.getByLabelText('Increment Number')
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('0'),
                  await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                    incrementBtn
                  ),
                  (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                    input
                  ).toHaveValue('1'),
                  await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                    decrementBtn
                  ),
                  (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                    input
                  ).toHaveValue('0'),
                  await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                    decrementBtn
                  ),
                  (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                    input
                  ).toHaveValue('0')
              },
            },
            WithInitialValue = {
              args: { label: 'With Initial Value', initialValue: '5' },
              play: ({ canvasElement }) => {
                const input = (0,
                _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                  canvasElement
                ).getByLabelText('With Initial Value')
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('5')
              },
            },
            ManualTyping = {
              args: { label: 'Manual Typing', initialValue: '10' },
              play: async ({ canvasElement }) => {
                const input = (0,
                _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                  canvasElement
                ).getByLabelText('Manual Typing')
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('10'),
                  await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                    input
                  ),
                  await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard(
                    '[Backspace][Backspace]'
                  ),
                  await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard(
                    '25'
                  ),
                  (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                    input
                  ).toHaveValue('25')
              },
            },
            CustomStyles = {
              args: {
                label: 'Custom Colors',
                initialValue: '3',
                backgroundcolor: '#e3f2fd',
                outlinecolor: '#0d47a1',
                fontcolor: '#d32f2f',
              },
              play: async ({ canvasElement }) => {
                const canvas = (0,
                  _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                    canvasElement
                  ),
                  input = canvas.getByLabelText('Custom Colors')
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('3')
                const incrementBtn = canvas.getByRole('button', { name: '+' })
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  incrementBtn
                ),
                  (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                    input
                  ).toHaveValue('4')
              },
            },
            MultipleIncrements = {
              args: { label: 'Increments', initialValue: '0' },
              play: async ({ canvasElement }) => {
                const canvas = (0,
                  _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                    canvasElement
                  ),
                  input = canvas.getByLabelText('Increments'),
                  incrementBtn = canvas.getByRole('button', { name: '+' })
                for (let i = 0; i < 5; i++)
                  await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                    incrementBtn
                  )
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('5')
              },
            },
            __namedExportsOrder = [
              'Basic',
              'WithInitialValue',
              'ManualTyping',
              'CustomStyles',
              'MultipleIncrements',
            ]
          ;(Basic.parameters = {
            ...Basic.parameters,
            docs: {
              ...Basic.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'Basic (Default)',\n  args: {\n    label: 'Increment Number',\n    initialValue: '0'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Check that the label is present\n    expect(canvas.getByLabelText('Increment Number')).toBeInTheDocument();\n\n    // Grab the textfield and buttons\n    const decrementBtn = canvas.getByRole('button', {\n      name: '-'\n    });\n    const incrementBtn = canvas.getByRole('button', {\n      name: '+'\n    });\n    const input = canvas.getByLabelText('Increment Number');\n\n    // Initial should be \"0\"\n    expect(input).toHaveValue('0');\n\n    // Click + once\n    await userEvent.click(incrementBtn);\n    expect(input).toHaveValue('1');\n\n    // Click - twice; it won't go below 0\n    await userEvent.click(decrementBtn);\n    expect(input).toHaveValue('0');\n    await userEvent.click(decrementBtn);\n    // still \"0\"\n    expect(input).toHaveValue('0');\n  }\n}",
                ...Basic.parameters?.docs?.source,
              },
              description: {
                story:
                  '1) Basic usage\r\n   - We call `await userEvent.click(...)`, so keep `async`.',
                ...Basic.parameters?.docs?.description,
              },
            },
          }),
            (WithInitialValue.parameters = {
              ...WithInitialValue.parameters,
              docs: {
                ...WithInitialValue.parameters?.docs,
                source: {
                  originalSource:
                    "{\n  args: {\n    label: 'With Initial Value',\n    initialValue: '5'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('With Initial Value');\n    // Confirm initial\n    expect(input).toHaveValue('5');\n  }\n}",
                  ...WithInitialValue.parameters?.docs?.source,
                },
                description: {
                  story:
                    '2) With Initial Value\r\n   - No `await` usage => remove `async`.',
                  ...WithInitialValue.parameters?.docs?.description,
                },
              },
            }),
            (ManualTyping.parameters = {
              ...ManualTyping.parameters,
              docs: {
                ...ManualTyping.parameters?.docs,
                source: {
                  originalSource:
                    "{\n  args: {\n    label: 'Manual Typing',\n    initialValue: '10'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Manual Typing');\n\n    // Should start at \"10\"\n    expect(input).toHaveValue('10');\n\n    // Click into input and type \"25\"\n    await userEvent.click(input);\n    // We'll select all and type new value. Or we can backspace:\n    await userEvent.keyboard('[Backspace][Backspace]');\n    await userEvent.keyboard('25');\n\n    // Now \"25\"\n    expect(input).toHaveValue('25');\n  }\n}",
                  ...ManualTyping.parameters?.docs?.source,
                },
                description: {
                  story:
                    '3) Manual Typing\r\n   - We do user interactions => keep `async`.',
                  ...ManualTyping.parameters?.docs?.description,
                },
              },
            }),
            (CustomStyles.parameters = {
              ...CustomStyles.parameters,
              docs: {
                ...CustomStyles.parameters?.docs,
                source: {
                  originalSource:
                    "{\n  args: {\n    label: 'Custom Colors',\n    initialValue: '3',\n    backgroundcolor: '#e3f2fd',\n    // light blue\n    outlinecolor: '#0d47a1',\n    // dark blue\n    fontcolor: '#d32f2f' // red\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Custom Colors');\n\n    // Verify initial value\n    expect(input).toHaveValue('3');\n\n    // Increment\n    const incrementBtn = canvas.getByRole('button', {\n      name: '+'\n    });\n    await userEvent.click(incrementBtn);\n    expect(input).toHaveValue('4');\n  }\n}",
                  ...CustomStyles.parameters?.docs?.source,
                },
                description: {
                  story:
                    '4) Custom Styles\r\n   - We do user interactions => keep `async`.',
                  ...CustomStyles.parameters?.docs?.description,
                },
              },
            }),
            (MultipleIncrements.parameters = {
              ...MultipleIncrements.parameters,
              docs: {
                ...MultipleIncrements.parameters?.docs,
                source: {
                  originalSource:
                    "{\n  args: {\n    label: 'Increments',\n    initialValue: '0'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Increments');\n    const incrementBtn = canvas.getByRole('button', {\n      name: '+'\n    });\n\n    // Press + five times\n    for (let i = 0; i < 5; i++) {\n      await userEvent.click(incrementBtn);\n    }\n    // Expect \"5\"\n    expect(input).toHaveValue('5');\n  }\n}",
                  ...MultipleIncrements.parameters?.docs?.source,
                },
                description: {
                  story:
                    '5) Multiple Increments\r\n   - We do user interactions => keep `async`.',
                  ...MultipleIncrements.parameters?.docs?.description,
                },
              },
            })
        },
      './src/components/IncrementNumberField/index.tsx': (
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
          react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/material/TextField/TextField.js'
            ),
          _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/Button/Button.js'
            ),
          _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__('./node_modules/@mui/material/styles/styled.js')
        const StyledTextField = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.Ay)(
            _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__.A
          )(({ theme, backgroundcolor, outlinecolor, fontcolor }) => ({
            '& .MuiOutlinedInput-root': {
              backgroundColor:
                backgroundcolor || theme.palette.background.paper,
              '& fieldset': {
                borderColor: outlinecolor || theme.palette.primary.main,
              },
              '&:hover fieldset': {
                borderColor: outlinecolor || theme.palette.primary.main,
              },
              '&.Mui-focused fieldset': {
                borderColor: outlinecolor || theme.palette.primary.main,
              },
            },
            '& .MuiInputLabel-root': {
              color: fontcolor || theme.palette.text.primary,
              '&.Mui-focused': {
                color: fontcolor || theme.palette.primary.main,
              },
            },
            '& .MuiInputBase-input': {
              color: fontcolor || theme.palette.text.primary,
              textAlign: 'center',
              padding: '8px 0',
            },
          })),
          StyledButton = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.Ay)(
            _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.A
          )(({ theme }) => ({
            minWidth: '36px',
            padding: 0,
            height: '100%',
            borderRadius: '4px',
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.text.primary,
            '&:hover': { backgroundColor: theme.palette.grey[400] },
          })),
          IncrementNumberField = ({
            initialValue = '0',
            onChange,
            backgroundcolor,
            outlinecolor,
            fontcolor,
            label,
            ...rest
          }) => {
            const [value, setValue] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue),
              handleIncrement = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
                setValue(prev => {
                  const num = parseInt(prev)
                  if (isNaN(num)) return '0'
                  const newValue = (num + 1).toString()
                  return null == onChange || onChange(), newValue
                })
              }, [onChange]),
              handleDecrement = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
                setValue(prev => {
                  const num = parseInt(prev)
                  if (isNaN(num)) return '0'
                  const newValue = Math.max(0, num - 1).toString()
                  return null == onChange || onChange(), newValue
                })
              }, [onChange]),
              handleChange = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                event => {
                  const numValue = event.target.value.replace(/[^0-9]/g, '')
                  setValue('' === numValue ? '0' : numValue),
                    null == onChange || onChange()
                },
                [onChange]
              )
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,
              {
                display: 'flex',
                alignItems: 'center',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    StyledButton,
                    { onClick: handleDecrement, children: '-' }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    StyledTextField,
                    {
                      value,
                      onChange: handleChange,
                      backgroundcolor,
                      outlinecolor,
                      fontcolor,
                      label,
                      variant: 'outlined',
                      size: 'small',
                      inputProps: { style: { width: '40px' } },
                      ...rest,
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    StyledButton,
                    { onClick: handleIncrement, children: '+' }
                  ),
                ],
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = IncrementNumberField
        IncrementNumberField.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'IncrementNumberField',
          props: {
            initialValue: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'0'", computed: !1 },
            },
            onChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            backgroundcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            outlinecolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            fontcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            label: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
          composes: ['Omit'],
        }
      },
    },
  ]
)
