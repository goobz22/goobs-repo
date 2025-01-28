'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [7279],
    {
      './src/components/PhoneNumberField/phonenumberfield.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            DisabledField: () => DisabledField,
            ErrorState: () => ErrorState,
            ManualTyping: () => ManualTyping,
            OverflowDigits: () => OverflowDigits,
            WithInitialValue: () => WithInitialValue,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/components/PhoneNumberField/index.tsx'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/PhoneNumberField',
            component: _index__WEBPACK_IMPORTED_MODULE_1__.A,
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Setup Storybook metadata' } },
            },
          },
          Basic = {
            args: { label: 'Phone Number', placeholder: '(555) 555-5555' },
            play: ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Phone Number')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input
              ).toHaveValue('+1')
            },
          },
          WithInitialValue = {
            args: { label: 'Contact Number', value: '1234567890' },
            play: ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Contact Number')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input
              ).toHaveValue('+1 123-456-7890')
            },
          },
          ManualTyping = {
            args: {
              label: 'Manual Input',
              placeholder: '(555) 555-5555',
              onChange: e => console.log('Phone changed =>', e.target.value),
            },
            play: async ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Manual Input')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                input,
                '9876543210'
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('+1 987-654-3210')
            },
          },
          OverflowDigits = {
            args: { label: 'Overflow Check', placeholder: '(555) 555-5555' },
            play: async ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Overflow Check')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                input,
                '123456789012345'
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('+1 123-456-7890')
            },
          },
          ErrorState = {
            args: {
              label: 'Phone (Error)',
              error: !0,
              helperText: 'Invalid phone number!',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Invalid phone number!')
              ).toBeInTheDocument()
            },
          },
          DisabledField = {
            args: {
              label: 'Disabled Phone Number',
              disabled: !0,
              value: '5555555555',
            },
            play: ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Disabled Phone Number')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input
              ).toBeDisabled(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('+1 555-555-5555')
            },
          },
          __namedExportsOrder = [
            'Basic',
            'WithInitialValue',
            'ManualTyping',
            'OverflowDigits',
            'ErrorState',
            'DisabledField',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: 'Phone Number',\n    placeholder: '(555) 555-5555'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm the label is present\n    const input = canvas.getByLabelText('Phone Number');\n    // Usually shows \"+1\" or \"+1 \" initially, depending on your logic\n    expect(input).toHaveValue('+1');\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story:
                '1) Basic usage (empty by default)\r\n   No user interactions => remove `async`.',
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
                  "{\n  args: {\n    label: 'Contact Number',\n    value: '1234567890' // Should format to \"+1 123-456-7890\"\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm it rendered the formatted phone\n    const input = canvas.getByLabelText('Contact Number');\n    expect(input).toHaveValue('+1 123-456-7890');\n  }\n}",
                ...WithInitialValue.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) With Initial Value\r\n   No user interactions => remove `async`.',
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
                  "{\n  args: {\n    label: 'Manual Input',\n    placeholder: '(555) 555-5555',\n    onChange: e => console.log('Phone changed =>', e.target.value)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Manual Input');\n\n    // Type \"9876543210\"\n    await userEvent.type(input, '9876543210');\n    // Final result should be \"+1 987-654-3210\"\n    expect(input).toHaveValue('+1 987-654-3210');\n  }\n}",
                ...ManualTyping.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Manual Typing\r\n   Uses `await userEvent.type(...)`, so keep `async`.',
                ...ManualTyping.parameters?.docs?.description,
              },
            },
          }),
          (OverflowDigits.parameters = {
            ...OverflowDigits.parameters,
            docs: {
              ...OverflowDigits.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Overflow Check',\n    placeholder: '(555) 555-5555'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Overflow Check');\n\n    // Type more than 10 digits: \"123456789012345\"\n    await userEvent.type(input, '123456789012345');\n    // Expect it to stop at \"+1 123-456-7890\"\n    expect(input).toHaveValue('+1 123-456-7890');\n  }\n}",
                ...OverflowDigits.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) Overflow Digits (stops at 10)\r\n   Uses `await userEvent.type(...)`, so keep `async`.',
                ...OverflowDigits.parameters?.docs?.description,
              },
            },
          }),
          (ErrorState.parameters = {
            ...ErrorState.parameters,
            docs: {
              ...ErrorState.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Phone (Error)',\n    error: true,\n    helperText: 'Invalid phone number!'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm helper text\n    expect(canvas.getByText('Invalid phone number!')).toBeInTheDocument();\n  }\n}",
                ...ErrorState.parameters?.docs?.source,
              },
              description: {
                story:
                  '5) Error State\r\n   No user interactions => remove `async`.',
                ...ErrorState.parameters?.docs?.description,
              },
            },
          }),
          (DisabledField.parameters = {
            ...DisabledField.parameters,
            docs: {
              ...DisabledField.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Disabled Phone Number',\n    disabled: true,\n    value: '5555555555' // => +1 555-555-5555\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Disabled Phone Number');\n    // It's disabled, so user can't type\n    expect(input).toBeDisabled();\n    // Confirm initial value is properly formatted\n    expect(input).toHaveValue('+1 555-555-5555');\n  }\n}",
                ...DisabledField.parameters?.docs?.source,
              },
              description: {
                story:
                  '6) Disabled Field\r\n   No user interactions => remove `async`.',
                ...DisabledField.parameters?.docs?.description,
              },
            },
          })
      },
      './src/components/PhoneNumberField/index.tsx': (
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
          _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/TextField/index.tsx'
          )
        const formatPhoneNumber = inputValue => {
            let digits = inputValue.replace(/\D/g, '')
            digits.startsWith('1') && (digits = digits.slice(1))
            const limitedDigits = digits.slice(0, 10)
            let formattedNumber = '+1 '
            return (
              limitedDigits.length > 0 &&
                ((formattedNumber += limitedDigits.slice(0, 3)),
                limitedDigits.length > 3 &&
                  ((formattedNumber += '-' + limitedDigits.slice(3, 6)),
                  limitedDigits.length > 6 &&
                    (formattedNumber += '-' + limitedDigits.slice(6)))),
              formattedNumber.trim()
            )
          },
          PhoneNumberField = react__WEBPACK_IMPORTED_MODULE_1__.memo(props => {
            const {
                name,
                label = 'Phone Number',
                placeholder,
                onChange,
                onFocus,
                onBlur,
                value = '',
                error,
                ...restProps
              } = props,
              [phoneNumber, setPhoneNumber] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(
                formatPhoneNumber(value)
              ),
              handleChange = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                e => {
                  let strippedInput = e.target.value
                    .replace(/^\+1\s?/, '')
                    .replace(/\D/g, '')
                  strippedInput.startsWith('1') &&
                    (strippedInput = strippedInput.slice(1)),
                    (strippedInput = strippedInput.slice(0, 10))
                  const formattedValue =
                    strippedInput.length > 0
                      ? formatPhoneNumber(strippedInput)
                      : '+1 '
                  setPhoneNumber(formattedValue), onChange && onChange(e)
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
              mergedSlotProps = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
                () => ({
                  input: { sx: { height: '40px', padding: '8px 0px' } },
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
                }),
                []
              )
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
              {
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: '100%',
                },
                onClick: handleClick,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _TextField__WEBPACK_IMPORTED_MODULE_2__.A,
                  {
                    name,
                    label,
                    placeholder,
                    onChange: handleChange,
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                    value: phoneNumber,
                    error,
                    fullWidth: !0,
                    variant: 'outlined',
                    slotProps: mergedSlotProps,
                    ...restProps,
                  }
                ),
              }
            )
          })
        PhoneNumberField.displayName = 'PhoneNumberField'
        const __WEBPACK_DEFAULT_EXPORT__ = PhoneNumberField
        PhoneNumberField.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'PhoneNumberField',
          props: {
            endAdornment: {
              required: !1,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            value: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'string | number | readonly string[] | undefined',
                elements: [
                  { name: 'string' },
                  { name: 'number' },
                  { name: 'unknown' },
                  { name: 'undefined' },
                ],
              },
              description: '',
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
              description: '',
            },
            onFocus: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(event: React.FocusEvent<HTMLInputElement>) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'ReactFocusEvent',
                        raw: 'React.FocusEvent<HTMLInputElement>',
                        elements: [{ name: 'HTMLInputElement' }],
                      },
                      name: 'event',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onBlur: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(event: React.FocusEvent<HTMLInputElement>) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'ReactFocusEvent',
                        raw: 'React.FocusEvent<HTMLInputElement>',
                        elements: [{ name: 'HTMLInputElement' }],
                      },
                      name: 'event',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            error: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            name: { required: !1, tsType: { name: 'string' }, description: '' },
            label: {
              required: !1,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            placeholder: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            textAlign: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'left' | 'center' | 'right'",
                elements: [
                  { name: 'literal', value: "'left'" },
                  { name: 'literal', value: "'center'" },
                  { name: 'literal', value: "'right'" },
                ],
              },
              description: '',
            },
            inputPadding: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  top?: number\n  left?: number\n}',
                signature: {
                  properties: [
                    { key: 'top', value: { name: 'number', required: !1 } },
                    { key: 'left', value: { name: 'number', required: !1 } },
                  ],
                },
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
            inputfontcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            shrunkfontcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            unshrunkfontcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            placeholdercolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            shrunklabelposition: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'onNotch' | 'aboveNotch'",
                elements: [
                  { name: 'literal', value: "'onNotch'" },
                  { name: 'literal', value: "'aboveNotch'" },
                ],
              },
              description: '',
            },
            sx: {
              required: !1,
              tsType: {
                name: "MuiTextFieldProps['sx']",
                raw: "MuiTextFieldProps['sx']",
              },
              description: '',
            },
            slotProps: {
              required: !1,
              tsType: {
                name: "MuiTextFieldProps['slotProps']",
                raw: "MuiTextFieldProps['slotProps']",
              },
              description: '',
            },
          },
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
