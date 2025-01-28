'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [1835],
    {
      './src/components/NumberField/numberfield.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            CustomStyles: () => CustomStyles,
            ManualTyping: () => ManualTyping,
            WithInitialValue: () => WithInitialValue,
            WithMinMax: () => WithMinMax,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@storybook/test/dist/index.mjs'
        )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/NumberField',
            component: __webpack_require__(
              './src/components/NumberField/index.tsx'
            ).A,
            parameters: {
              a11y: { disable: !1 },
              docs: {
                description: { component: 'Configure Storybook metadata' },
              },
            },
          },
          Basic = {
            args: { label: 'Enter a Number', initialValue: '' },
            play: ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Enter a Number')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input
              ).toHaveValue('')
            },
          },
          WithInitialValue = {
            args: { label: 'Number With Initial Value', initialValue: '123' },
            play: ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Number With Initial Value')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input
              ).toHaveValue('123')
            },
          },
          WithMinMax = {
            args: {
              label: 'Number With Min=10 & Max=20',
              initialValue: '15',
              min: 10,
              max: 20,
            },
            play: async ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Number With Min=10 & Max=20')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input
              ).toHaveValue('15'),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.clear(
                  input
                ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                  input,
                  '5'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('10'),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.clear(
                  input
                ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                  input,
                  '25'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('20')
            },
          },
          CustomStyles = {
            args: {
              label: 'Custom Styled NumberField',
              initialValue: '42',
              backgroundcolor: '#fff8e1',
              outlinecolor: '#ff5722',
              fontcolor: '#3f51b5',
            },
            play: async ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Custom Styled NumberField')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input
              ).toHaveValue('42'),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.clear(
                  input
                ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                  input,
                  '123'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('123')
            },
          },
          ManualTyping = {
            args: {
              label: 'Manual Typing',
              initialValue: '',
              min: 0,
              max: 999,
            },
            play: async ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Manual Typing')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                input,
                '567'
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('567'),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                  input,
                  'abc'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('567')
            },
          },
          __namedExportsOrder = [
            'Basic',
            'WithInitialValue',
            'WithMinMax',
            'CustomStyles',
            'ManualTyping',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: 'Enter a Number',\n    initialValue: ''\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm the label\n    const input = canvas.getByLabelText('Enter a Number');\n    expect(input).toHaveValue('');\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story:
                '1) Basic usage (empty by default)\r\n   - No user interactions => remove `async`.',
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
                  "{\n  args: {\n    label: 'Number With Initial Value',\n    initialValue: '123'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm initial value\n    const input = canvas.getByLabelText('Number With Initial Value');\n    expect(input).toHaveValue('123');\n  }\n}",
                ...WithInitialValue.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) With Initial Value\r\n   - No user interactions => remove `async`.',
                ...WithInitialValue.parameters?.docs?.description,
              },
            },
          }),
          (WithMinMax.parameters = {
            ...WithMinMax.parameters,
            docs: {
              ...WithMinMax.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Number With Min=10 & Max=20',\n    initialValue: '15',\n    min: 10,\n    max: 20\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Number With Min=10 & Max=20');\n\n    // Confirm initial value \"15\"\n    expect(input).toHaveValue('15');\n\n    // Type a smaller value \"5\"\n    await userEvent.clear(input);\n    await userEvent.type(input, '5');\n    // The component should set it to \"10\" since min=10\n    expect(input).toHaveValue('10');\n\n    // Type a larger value \"25\"\n    await userEvent.clear(input);\n    await userEvent.type(input, '25');\n    // The component should set it to \"20\" since max=20\n    expect(input).toHaveValue('20');\n  }\n}",
                ...WithMinMax.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Min/Max Constraints\r\n   - Uses `await userEvent...` => keep `async`.',
                ...WithMinMax.parameters?.docs?.description,
              },
            },
          }),
          (CustomStyles.parameters = {
            ...CustomStyles.parameters,
            docs: {
              ...CustomStyles.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Custom Styled NumberField',\n    initialValue: '42',\n    backgroundcolor: '#fff8e1',\n    // Light yellow\n    outlinecolor: '#ff5722',\n    // Orange\n    fontcolor: '#3f51b5' // Indigo\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Verify initial\n    const input = canvas.getByLabelText('Custom Styled NumberField');\n    expect(input).toHaveValue('42');\n\n    // Type \"123\"\n    await userEvent.clear(input);\n    await userEvent.type(input, '123');\n    expect(input).toHaveValue('123');\n  }\n}",
                ...CustomStyles.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) Custom Styles\r\n   - Uses `await userEvent...` => keep `async`.',
                ...CustomStyles.parameters?.docs?.description,
              },
            },
          }),
          (ManualTyping.parameters = {
            ...ManualTyping.parameters,
            docs: {
              ...ManualTyping.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Manual Typing',\n    initialValue: '',\n    min: 0,\n    max: 999\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Manual Typing');\n\n    // Type \"567\"\n    await userEvent.type(input, '567');\n    expect(input).toHaveValue('567');\n\n    // Now type some non-digits like \"abc\", which should be ignored\n    await userEvent.type(input, 'abc');\n    expect(input).toHaveValue('567');\n  }\n}",
                ...ManualTyping.parameters?.docs?.source,
              },
              description: {
                story:
                  '5) Manual Typing Interaction\r\n   - Uses `await userEvent...` => keep `async`.',
                ...ManualTyping.parameters?.docs?.description,
              },
            },
          })
      },
      './src/components/NumberField/index.tsx': (
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
          _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/TextField/index.tsx'
          )
        const NumberField = ({
            initialValue = '',
            onChange,
            label,
            min,
            max,
            ...rest
          }) => {
            const [value, setValue] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue),
              handleChange = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                event => {
                  const newValue = event.target.value.replace(/[^0-9]/g, '')
                  if ((null == onChange || onChange(event), '' === newValue))
                    return void setValue('')
                  const numValue = parseInt(newValue, 10)
                  setValue(
                    void 0 !== min && numValue < min
                      ? String(min)
                      : void 0 !== max && numValue > max
                        ? String(max)
                        : newValue
                  )
                },
                [onChange, min, max]
              )
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _TextField__WEBPACK_IMPORTED_MODULE_2__.A,
              {
                value,
                onChange: handleChange,
                label,
                type: 'text',
                inputMode: 'numeric',
                variant: 'outlined',
                ...rest,
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = NumberField
        NumberField.__docgenInfo = {
          description:
            'A controlled numeric field that only allows digits\nand optionally enforces min/max constraints.',
          methods: [],
          displayName: 'NumberField',
          props: {
            initialValue: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "''", computed: !1 },
            },
            onChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(event: React.ChangeEvent<HTMLInputElement>) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'ReactChangeEvent',
                        raw: 'React.ChangeEvent<HTMLInputElement>',
                        elements: [{ name: 'HTMLInputElement' }],
                      },
                      name: 'event',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description:
                'A standard ChangeEvent<HTMLInputElement> so parent can do\ne.g. (event) => parseInt(event.target.value) ...',
            },
            label: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            min: { required: !1, tsType: { name: 'number' }, description: '' },
            max: { required: !1, tsType: { name: 'number' }, description: '' },
          },
          composes: ['Omit'],
        }
      },
      './src/components/TextField/index.tsx': (
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
          _barrel_optimize_names_Box_InputAdornment_TextField_styled_mui_material__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@mui/material/styles/styled.js'
            ),
          _barrel_optimize_names_Box_InputAdornment_TextField_styled_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/material/TextField/TextField.js'
            ),
          _barrel_optimize_names_Box_InputAdornment_TextField_styled_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/InputAdornment/InputAdornment.js'
            ),
          _barrel_optimize_names_Box_InputAdornment_TextField_styled_mui_material__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js')
        const StyledMuiTextField = (0,
          _barrel_optimize_names_Box_InputAdornment_TextField_styled_mui_material__WEBPACK_IMPORTED_MODULE_2__.Ay)(
            _barrel_optimize_names_Box_InputAdornment_TextField_styled_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
            {
              shouldForwardProp: prop =>
                ![
                  'hasvalue',
                  'textalign',
                  'paddingleft',
                  'paddingtop',
                  'backgroundcolor',
                  'outlinecolor',
                  'fontcolor',
                  'inputfontcolor',
                  'shrunkfontcolor',
                  'unshrunkfontcolor',
                  'placeholdercolor',
                  'shrunklabelposition',
                ].includes(prop),
            }
          )(
            ({
              hasvalue,
              textalign = 'left',
              backgroundcolor,
              outlinecolor,
              fontcolor,
              inputfontcolor,
              shrunkfontcolor,
              unshrunkfontcolor,
              placeholdercolor,
              shrunklabelposition,
            }) => ({
              '& .MuiOutlinedInput-root': {
                minHeight: '40px',
                height: 'auto',
                backgroundColor: backgroundcolor || 'inherit',
                color: fontcolor || 'black',
                '& .MuiSelect-icon': { color: 'black !important' },
                '& fieldset': {
                  borderColor:
                    outlinecolor ||
                    ('true' === hasvalue ? 'black' : 'rgba(0, 0, 0, 0.23)'),
                  ...('aboveNotch' === shrunklabelposition && {
                    legend: { width: '0px !important' },
                  }),
                },
                '&:hover fieldset': {
                  borderColor:
                    outlinecolor ||
                    ('true' === hasvalue ? 'black' : 'rgba(0, 0, 0, 0.23)'),
                },
                '&.Mui-focused fieldset': {
                  borderColor:
                    outlinecolor ||
                    ('true' === hasvalue ? 'black' : 'rgba(0, 0, 0, 0.23)'),
                },
                '& input': {
                  color: inputfontcolor || fontcolor || 'black',
                  '&::placeholder': {
                    color: placeholdercolor || 'rgba(0, 0, 0, 0.54)',
                    opacity: 1,
                  },
                },
              },
              '& .MuiInputLabel-root': {
                color: unshrunkfontcolor || 'black',
                '&.Mui-focused': { color: shrunkfontcolor || 'black' },
                '&.MuiInputLabel-shrink': {
                  color: shrunkfontcolor || 'black',
                  ...('aboveNotch' === shrunklabelposition && {
                    transform: 'translate(0px, -17px) scale(0.75)',
                  }),
                  ...('onNotch' === shrunklabelposition && {
                    transform: 'translate(13px, -4px) scale(0.75)',
                  }),
                },
              },
              '& .MuiOutlinedInput-input': {
                padding: '8px 14px',
                textAlign: textalign,
              },
            })
          ),
          TextField = react__WEBPACK_IMPORTED_MODULE_1__.memo(props => {
            const {
                name,
                label,
                placeholder,
                onChange,
                onFocus,
                onBlur,
                value,
                error,
                sx,
                endAdornment,
                textAlign = 'left',
                slotProps: customSlotProps = {},
                backgroundcolor,
                outlinecolor,
                fontcolor,
                inputfontcolor,
                shrunkfontcolor,
                unshrunkfontcolor,
                placeholdercolor,
                shrunklabelposition,
                ...restProps
              } = props,
              inputStyle = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
                () => ({
                  backgroundColor: backgroundcolor || 'inherit',
                  width: '100%',
                  cursor: 'text',
                  boxSizing: 'border-box',
                  borderRadius: 5,
                }),
                [backgroundcolor]
              ),
              handleChange = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                e => {
                  onChange && onChange(e)
                },
                [onChange]
              ),
              handleFocus = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                e => {
                  onFocus && onFocus(e)
                },
                [onFocus]
              ),
              handleBlur = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                e => {
                  onBlur && onBlur(e)
                },
                [onBlur]
              ),
              handleClick = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                e => {
                  e.preventDefault()
                },
                []
              ),
              mergedSlotProps = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
                const defaultSlotProps = {
                  input: {
                    style: inputStyle,
                    endAdornment: endAdornment
                      ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _barrel_optimize_names_Box_InputAdornment_TextField_styled_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                          {
                            position: 'end',
                            sx: {
                              color: '#000000 !important',
                              '& svg': {
                                color: '#000000 !important',
                                fill: '#000000 !important',
                                stroke: '#000000 !important',
                              },
                            },
                            children: endAdornment,
                          }
                        )
                      : void 0,
                  },
                  inputLabel: {
                    sx: {
                      '&.MuiInputLabel-shrink': { top: '0px', left: '0px' },
                      '&:not(.MuiInputLabel-shrink)': {
                        transform: 'scale(1)',
                        transformOrigin: 'top left',
                        top: '9px',
                        left: '12px',
                      },
                    },
                  },
                }
                return {
                  ...defaultSlotProps,
                  input: {
                    ...defaultSlotProps.input,
                    ...(customSlotProps.input || {}),
                  },
                  inputLabel: {
                    ...defaultSlotProps.inputLabel,
                    ...(customSlotProps.inputLabel || {}),
                  },
                }
              }, [inputStyle, endAdornment, customSlotProps]),
              hasValue = Boolean(
                null == value ? void 0 : value.toString().length
              ).toString()
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _barrel_optimize_names_Box_InputAdornment_TextField_styled_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,
              {
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  width: '100%',
                  marginTop: '15px',
                  height: 'auto',
                  overflow: 'visible',
                  ...sx,
                },
                onClick: handleClick,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  StyledMuiTextField,
                  {
                    name,
                    label,
                    placeholder,
                    onChange: handleChange,
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                    value,
                    error,
                    slotProps: mergedSlotProps,
                    fullWidth: !0,
                    variant: 'outlined',
                    hasvalue: hasValue,
                    textalign: textAlign,
                    backgroundcolor,
                    outlinecolor,
                    fontcolor,
                    inputfontcolor,
                    shrunkfontcolor,
                    unshrunkfontcolor,
                    placeholdercolor,
                    shrunklabelposition,
                    ...restProps,
                  }
                ),
              }
            )
          })
        TextField.displayName = 'TextField'
        const __WEBPACK_DEFAULT_EXPORT__ = TextField
        TextField.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TextField',
        }
      },
    },
  ]
)
