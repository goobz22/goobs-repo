'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [7703],
    {
      './src/components/DateField/datefield.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            ArrowKeyAdjustments: () => ArrowKeyAdjustments,
            Basic: () => Basic,
            ManualTyping: () => ManualTyping,
            SelectFromCalendar: () => SelectFromCalendar,
            WithInitialValue: () => WithInitialValue,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/components/DateField/index.tsx'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/DateField',
            component: _index__WEBPACK_IMPORTED_MODULE_1__.A,
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Storybook metadata' } },
            },
          },
          Basic = {
            args: {
              label: 'Select Date',
              onChange: date => console.log('Selected date =>', date),
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByLabelText('Select Date')
              ).toBeInTheDocument()
            },
          },
          WithInitialValue = {
            args: {
              label: 'Initial Value',
              value: new Date('2025-01-01'),
              onChange: date => console.log('Selected date =>', date),
            },
            play: ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Initial Value')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input.value
              ).toMatch(/01\/01\/2025/)
            },
          },
          SelectFromCalendar = {
            args: {
              label: 'Click Calendar Icon',
              onChange: date => console.log('Date chosen =>', date),
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
                _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement),
                icon = canvas.getByRole('img', { name: /calendar/i })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(icon)
              const dayButton = canvas.getByRole('button', { name: /^1$/ })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                dayButton
              )
              const input = canvas.getByLabelText('Click Calendar Icon')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input.value
              ).toMatch(/\/01\//)
            },
          },
          ManualTyping = {
            args: { label: 'Type a Date (MM/DD/YYYY)' },
            play: async ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Type a Date (MM/DD/YYYY)')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                input
              ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                  input,
                  '02/14/2025'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input.value
                ).toBe('02/14/2025')
            },
          },
          ArrowKeyAdjustments = {
            args: { label: 'Use Arrow Keys', value: new Date('2025-03-15') },
            play: async ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Use Arrow Keys')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input.value
              ).toBe('03/15/2025'),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  input
                ),
                input.setSelectionRange(0, 2),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard(
                  '{arrowup}'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input.value
                ).toBe('04/15/2025'),
                input.setSelectionRange(3, 5),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard(
                  '{arrowdown}'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input.value
                ).toBe('04/14/2025'),
                input.setSelectionRange(6, 10),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard(
                  '{arrowup}'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input.value
                ).toBe('04/14/2026')
            },
          },
          __namedExportsOrder = [
            'Basic',
            'WithInitialValue',
            'SelectFromCalendar',
            'ManualTyping',
            'ArrowKeyAdjustments',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: 'Select Date',\n    onChange: date => console.log('Selected date =>', date)\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // We confirm the label is present\n    expect(canvas.getByLabelText('Select Date')).toBeInTheDocument();\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story:
                '1) Basic usage (no initial date)\r\n   - No actual `await` usage, so remove `async`.',
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
                  "{\n  args: {\n    label: 'Initial Value',\n    value: new Date('2025-01-01'),\n    onChange: date => console.log('Selected date =>', date)\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Should show \"01/01/2025\" in the input\n    const input = canvas.getByLabelText<HTMLInputElement>('Initial Value');\n    expect(input.value).toMatch(/01\\/01\\/2025/);\n  }\n}",
                ...WithInitialValue.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) With Initial Value\r\n   - No actual `await` usage, so remove `async`.\r\n   - Use the generic parameter instead of `as HTMLInputElement`.',
                ...WithInitialValue.parameters?.docs?.description,
              },
            },
          }),
          (SelectFromCalendar.parameters = {
            ...SelectFromCalendar.parameters,
            docs: {
              ...SelectFromCalendar.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Click Calendar Icon',\n    onChange: date => console.log('Date chosen =>', date)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Open the calendar by clicking the calendar icon\n    const icon = canvas.getByRole('img', {\n      name: /calendar/i\n    });\n    await userEvent.click(icon);\n\n    // Now pick a date from the displayed calendar:\n    const dayButton = canvas.getByRole('button', {\n      name: /^1$/\n    });\n    await userEvent.click(dayButton);\n\n    // Confirm the input changed to something containing \"/01/\"\n    const input = canvas.getByLabelText<HTMLInputElement>('Click Calendar Icon');\n    expect(input.value).toMatch(/\\/01\\//);\n  }\n}",
                ...SelectFromCalendar.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Select from Calendar\r\n   - Uses `await userEvent.click`, so keep it `async`.\r\n   - Use the generic parameter instead of `as HTMLInputElement`.',
                ...SelectFromCalendar.parameters?.docs?.description,
              },
            },
          }),
          (ManualTyping.parameters = {
            ...ManualTyping.parameters,
            docs: {
              ...ManualTyping.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Type a Date (MM/DD/YYYY)'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText<HTMLInputElement>('Type a Date (MM/DD/YYYY)');\n\n    // Focus input and type \"02/14/2025\" character by character\n    await userEvent.click(input);\n    await userEvent.type(input, '02/14/2025');\n\n    // Confirm the final value is \"02/14/2025\"\n    expect(input.value).toBe('02/14/2025');\n  }\n}",
                ...ManualTyping.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) Manual Typing\r\n   - Uses `await userEvent.type`, so keep `async`.\r\n   - Use the generic parameter instead of `as HTMLInputElement`.',
                ...ManualTyping.parameters?.docs?.description,
              },
            },
          }),
          (ArrowKeyAdjustments.parameters = {
            ...ArrowKeyAdjustments.parameters,
            docs: {
              ...ArrowKeyAdjustments.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Use Arrow Keys',\n    value: new Date('2025-03-15')\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText<HTMLInputElement>('Use Arrow Keys');\n\n    // Confirm initial value \"03/15/2025\"\n    expect(input.value).toBe('03/15/2025');\n\n    // Click to focus inside \"month\" part\n    await userEvent.click(input);\n    input.setSelectionRange(0, 2);\n\n    // Press ArrowUp to go from \"03\" => \"04\"\n    await userEvent.keyboard('{arrowup}');\n    expect(input.value).toBe('04/15/2025');\n\n    // Move cursor to \"day\" part\n    input.setSelectionRange(3, 5);\n    await userEvent.keyboard('{arrowdown}');\n    expect(input.value).toBe('04/14/2025');\n\n    // Move cursor to \"year\" part\n    input.setSelectionRange(6, 10);\n    await userEvent.keyboard('{arrowup}');\n    expect(input.value).toBe('04/14/2026');\n  }\n}",
                ...ArrowKeyAdjustments.parameters?.docs?.source,
              },
              description: {
                story:
                  '5) Arrow Keys (Month/Day/Year)\r\n   - Uses `await userEvent.keyboard`, so keep `async`.\r\n   - Use the generic parameter instead of `as HTMLInputElement`.',
                ...ArrowKeyAdjustments.parameters?.docs?.description,
              },
            },
          })
      },
      './src/components/DateField/index.tsx': (
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
          react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            './node_modules/react-datepicker/dist/react-datepicker.min.js'
          ),
          react_datepicker__WEBPACK_IMPORTED_MODULE_5___default =
            __webpack_require__.n(
              react_datepicker__WEBPACK_IMPORTED_MODULE_5__
            ),
          _mui_icons_material_CalendarToday__WEBPACK_IMPORTED_MODULE_4__ =
            (__webpack_require__(
              './node_modules/react-datepicker/dist/react-datepicker.css'
            ),
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/CalendarToday.js'
            )),
          _TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './src/components/TextField/index.tsx'
          )
        const CustomInput = (0, react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
          ({ value, onClick, style }, ref) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('input', {
              ref,
              value,
              onClick,
              style: { display: 'none', ...style },
              readOnly: !0,
            })
        )
        CustomInput.displayName = 'CustomInput'
        const DateField = ({
            onChange,
            label = 'Select Date',
            value,
            ...rest
          }) => {
            const formatDate = date => {
                if (date) {
                  const month = date.getMonth() + 1,
                    day = date.getDate(),
                    year = date.getFullYear()
                  return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`
                }
                return ''
              },
              [selectedDate, setSelectedDate] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(value || new Date()),
              [isOpen, setIsOpen] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
              [inputValue, setInputValue] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(
                formatDate(selectedDate)
              ),
              calendarIcon = (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _mui_icons_material_CalendarToday__WEBPACK_IMPORTED_MODULE_4__.A,
                {
                  onClick: e => {
                    e.stopPropagation(), setIsOpen(!0)
                  },
                  sx: {
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 },
                    fontSize: '20px',
                    color: 'black',
                  },
                }
              )
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _TextField__WEBPACK_IMPORTED_MODULE_3__.A,
                    {
                      label,
                      value: inputValue,
                      onChange: e => {
                        const input = e.target,
                          newValue = e.target.value,
                          selectionStart = input.selectionStart || 0
                        setInputValue(newValue)
                        const parts = newValue.split('/')
                        if (3 === parts.length) {
                          const month = parseInt(parts[0], 10),
                            day = parseInt(parts[1], 10),
                            year = parseInt(parts[2], 10)
                          if (!isNaN(month) && !isNaN(day) && !isNaN(year)) {
                            const newDate = new Date(year, month - 1, day)
                            newDate.getMonth() === month - 1 &&
                              newDate.getDate() === day &&
                              newDate.getFullYear() === year &&
                              (setSelectedDate(newDate),
                              onChange && onChange(newDate))
                          }
                        }
                        setTimeout(() => {
                          input.setSelectionRange(
                            selectionStart,
                            selectionStart
                          )
                        }, 0)
                      },
                      endAdornment: calendarIcon,
                      slotProps: {
                        input: {
                          readOnly: !1,
                          style: { cursor: 'text', height: '40px' },
                          onKeyDown: e => {
                            const input = e.currentTarget,
                              selectionStart = input.selectionStart || 0
                            let selectedPart
                            if (
                              ((selectedPart =
                                selectionStart <= 2
                                  ? 'month'
                                  : selectionStart <= 5
                                    ? 'day'
                                    : 'year'),
                              'ArrowUp' === e.key || 'ArrowDown' === e.key)
                            ) {
                              e.preventDefault()
                              const newDate = new Date(selectedDate),
                                increment = 'ArrowUp' === e.key ? 1 : -1
                              switch (selectedPart) {
                                case 'month':
                                  newDate.setMonth(
                                    newDate.getMonth() + increment
                                  )
                                  break
                                case 'day':
                                  newDate.setDate(newDate.getDate() + increment)
                                  break
                                case 'year':
                                  newDate.setFullYear(
                                    newDate.getFullYear() + increment
                                  )
                              }
                              setSelectedDate(newDate),
                                setInputValue(formatDate(newDate)),
                                onChange && onChange(newDate),
                                setTimeout(() => {
                                  switch (selectedPart) {
                                    case 'month':
                                      input.setSelectionRange(0, 2)
                                      break
                                    case 'day':
                                      input.setSelectionRange(3, 5)
                                      break
                                    case 'year':
                                      input.setSelectionRange(6, 10)
                                  }
                                }, 0)
                            }
                          },
                          onClick: e => {
                            const input = e.currentTarget,
                              clickPosition = input.selectionStart || 0
                            clickPosition <= 2
                              ? input.setSelectionRange(0, 2)
                              : clickPosition <= 5
                                ? input.setSelectionRange(3, 5)
                                : input.setSelectionRange(6, 10)
                          },
                        },
                      },
                      ...rest,
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    react_datepicker__WEBPACK_IMPORTED_MODULE_5___default(),
                    {
                      selected: selectedDate,
                      onChange: date => {
                        date &&
                          (setSelectedDate(date),
                          setInputValue(formatDate(date)),
                          setIsOpen(!1),
                          onChange && onChange(date))
                      },
                      dateFormat: 'MM/dd/yyyy',
                      customInput: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        CustomInput,
                        {}
                      ),
                      open: isOpen,
                      onClickOutside: () => setIsOpen(!1),
                      shouldCloseOnSelect: !0,
                    }
                  ),
                ],
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = DateField
        DateField.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'DateField',
          props: {
            onChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(date: Date | null) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'union',
                        raw: 'Date | null',
                        elements: [{ name: 'Date' }, { name: 'null' }],
                      },
                      name: 'date',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            value: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'Date | null',
                elements: [{ name: 'Date' }, { name: 'null' }],
              },
              description: '',
            },
            label: {
              defaultValue: { value: "'Select Date'", computed: !1 },
              required: !1,
            },
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
