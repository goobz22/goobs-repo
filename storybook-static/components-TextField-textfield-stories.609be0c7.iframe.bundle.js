'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [8711],
    {
      './src/components/TextField/textfield.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            CustomColors: () => CustomColors,
            DisabledField: () => DisabledField,
            ErrorState: () => ErrorState,
            ManualTyping: () => ManualTyping,
            OutlineNone: () => OutlineNone,
            ShrunkLabelPositions: () => ShrunkLabelPositions,
            WithDefaultValue: () => WithDefaultValue,
            WithEndAdornment: () => WithEndAdornment,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/next/dist/compiled/react/jsx-runtime.js'
            ),
          _storybook_test__WEBPACK_IMPORTED_MODULE_2__ =
            (__webpack_require__(
              './node_modules/next/dist/compiled/react/index.js'
            ),
            __webpack_require__(
              './node_modules/@storybook/test/dist/index.mjs'
            )),
          _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './src/components/TextField/index.tsx'
          ),
          _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/Search.js'
            ),
          _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js')
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/TextField',
            component: _index__WEBPACK_IMPORTED_MODULE_3__.A,
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Storybook metadata' } },
            },
          },
          Basic = {
            args: {
              label: 'Basic TextField',
              placeholder: 'Type something...',
              value: '',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                canvas.getByLabelText('Basic TextField')
              ).toBeInTheDocument()
              const input = canvas.getByLabelText('Basic TextField', {
                selector: 'input',
              })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                input,
                'Hello World'
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  input
                ).toHaveValue('Hello World')
            },
          },
          WithDefaultValue = {
            args: { label: 'Default Value', value: 'Pre-filled text' },
            play: ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByLabelText('Default Value', { selector: 'input' })
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                input
              ).toHaveValue('Pre-filled text')
            },
          },
          WithEndAdornment = {
            args: {
              label: 'Search Field',
              value: '',
              placeholder: 'Search here',
              endAdornment: (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__.A,
                {}
              ),
            },
            play: async ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByLabelText('Search Field', { selector: 'input' })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                input,
                'React'
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  input
                ).toHaveValue('React')
            },
          },
          OutlineNone = {
            args: {
              label: 'No Outline',
              outlinecolor: 'none',
              placeholder: 'Try to type...',
              value: '',
            },
            play: async ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByLabelText('No Outline', { selector: 'input' })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                input,
                'Invisible border'
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  input
                ).toHaveValue('Invisible border')
            },
          },
          CustomColors = {
            args: {
              label: 'Colored TextField',
              placeholder: 'Different colors...',
              backgroundcolor: '#f1f8e9',
              outlinecolor: '#4caf50',
              fontcolor: '#1b5e20',
              inputfontcolor: '#2e7d32',
              value: '',
            },
            play: async ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByLabelText('Colored TextField', { selector: 'input' })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                input,
                'Greenish'
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  input
                ).toHaveValue('Greenish')
            },
          },
          ManualTyping = {
            args: {
              label: 'Manual Typing',
              placeholder: 'Type digits / letters etc.',
              value: '',
            },
            play: async ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByLabelText('Manual Typing', { selector: 'input' })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                input,
                '123abc'
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  input
                ).toHaveValue('123abc')
            },
          },
          ErrorState = {
            args: {
              label: 'Error Input',
              placeholder: 'Something is invalid...',
              value: '',
              error: !0,
              helperText: 'Error: invalid input',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
                _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(canvasElement),
                input = canvas.getByLabelText('Error Input', {
                  selector: 'input',
                })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.type(
                input,
                'Oops...'
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  input
                ).toHaveValue('Oops...'),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByText('Error: invalid input')
                ).toBeInTheDocument()
            },
          },
          DisabledField = {
            args: {
              label: 'Disabled TextField',
              value: 'Cannot edit me',
              disabled: !0,
            },
            play: ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByLabelText('Disabled TextField', { selector: 'input' })
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                input
              ).toBeDisabled(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  input
                ).toHaveValue('Cannot edit me')
            },
          },
          ShrunkLabelPositions = {
            render: () =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,
                {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  width: '300px',
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.A,
                      {
                        label: 'On Notch Label',
                        shrunklabelposition: 'onNotch',
                        placeholder: 'onNotch placeholder',
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.A,
                      {
                        label: 'Above Notch Label',
                        shrunklabelposition: 'aboveNotch',
                        placeholder: 'aboveNotch placeholder',
                      }
                    ),
                  ],
                }
              ),
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                canvas.getByLabelText('On Notch Label')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByLabelText('Above Notch Label')
                ).toBeInTheDocument()
            },
          },
          __namedExportsOrder = [
            'Basic',
            'WithDefaultValue',
            'WithEndAdornment',
            'OutlineNone',
            'CustomColors',
            'ManualTyping',
            'ErrorState',
            'DisabledField',
            'ShrunkLabelPositions',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: 'Basic TextField',\n    placeholder: 'Type something...',\n    value: ''\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm we see the label\n    expect(canvas.getByLabelText('Basic TextField')).toBeInTheDocument();\n\n    // Type something\n    const input = canvas.getByLabelText('Basic TextField', {\n      selector: 'input'\n    });\n    await userEvent.type(input, 'Hello World');\n    expect(input).toHaveValue('Hello World');\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story:
                '1) Basic usage\r\n   We use `await userEvent.type(...)` => keep `async`.',
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
                  "{\n  args: {\n    label: 'Default Value',\n    value: 'Pre-filled text'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // The input should have \"Pre-filled text\"\n    const input = canvas.getByLabelText('Default Value', {\n      selector: 'input'\n    });\n    expect(input).toHaveValue('Pre-filled text');\n  }\n}",
                ...WithDefaultValue.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) Default Value\r\n   No user interaction => remove `async`.',
                ...WithDefaultValue.parameters?.docs?.description,
              },
            },
          }),
          (WithEndAdornment.parameters = {
            ...WithEndAdornment.parameters,
            docs: {
              ...WithEndAdornment.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Search Field',\n    value: '',\n    placeholder: 'Search here',\n    endAdornment: <SearchIcon />\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Search Field', {\n      selector: 'input'\n    });\n\n    // Type in the search field\n    await userEvent.type(input, 'React');\n    expect(input).toHaveValue('React');\n  }\n}",
                ...WithEndAdornment.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) End Adornment (e.g., a search icon)\r\n   Uses userEvent => keep `async`.',
                ...WithEndAdornment.parameters?.docs?.description,
              },
            },
          }),
          (OutlineNone.parameters = {
            ...OutlineNone.parameters,
            docs: {
              ...OutlineNone.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'No Outline',\n    outlinecolor: 'none',\n    placeholder: 'Try to type...',\n    value: ''\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('No Outline', {\n      selector: 'input'\n    });\n\n    // Type something\n    await userEvent.type(input, 'Invisible border');\n    expect(input).toHaveValue('Invisible border');\n  }\n}",
                ...OutlineNone.parameters?.docs?.source,
              },
              description: {
                story: '4) No Outline\r\n   Uses userEvent => keep `async`.',
                ...OutlineNone.parameters?.docs?.description,
              },
            },
          }),
          (CustomColors.parameters = {
            ...CustomColors.parameters,
            docs: {
              ...CustomColors.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Colored TextField',\n    placeholder: 'Different colors...',\n    backgroundcolor: '#f1f8e9',\n    // Light green\n    outlinecolor: '#4caf50',\n    // Green outline\n    fontcolor: '#1b5e20',\n    // Dark green label\n    inputfontcolor: '#2e7d32',\n    // Another green for input text\n    value: ''\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Colored TextField', {\n      selector: 'input'\n    });\n\n    // Type some text\n    await userEvent.type(input, 'Greenish');\n    expect(input).toHaveValue('Greenish');\n  }\n}",
                ...CustomColors.parameters?.docs?.source,
              },
              description: {
                story: '5) Custom Colors\r\n   Uses userEvent => keep `async`.',
                ...CustomColors.parameters?.docs?.description,
              },
            },
          }),
          (ManualTyping.parameters = {
            ...ManualTyping.parameters,
            docs: {
              ...ManualTyping.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Manual Typing',\n    placeholder: 'Type digits / letters etc.',\n    value: ''\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Manual Typing', {\n      selector: 'input'\n    });\n    await userEvent.type(input, '123abc');\n    expect(input).toHaveValue('123abc');\n  }\n}",
                ...ManualTyping.parameters?.docs?.source,
              },
              description: {
                story: '6) Manual Typing\r\n   Uses userEvent => keep `async`.',
                ...ManualTyping.parameters?.docs?.description,
              },
            },
          }),
          (ErrorState.parameters = {
            ...ErrorState.parameters,
            docs: {
              ...ErrorState.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Error Input',\n    placeholder: 'Something is invalid...',\n    value: '',\n    error: true,\n    helperText: 'Error: invalid input'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Type\n    const input = canvas.getByLabelText('Error Input', {\n      selector: 'input'\n    });\n    await userEvent.type(input, 'Oops...');\n    expect(input).toHaveValue('Oops...');\n\n    // Confirm the helper text\n    expect(canvas.getByText('Error: invalid input')).toBeInTheDocument();\n  }\n}",
                ...ErrorState.parameters?.docs?.source,
              },
              description: {
                story: '7) Error State\r\n   Uses userEvent => keep `async`.',
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
                  "{\n  args: {\n    label: 'Disabled TextField',\n    value: 'Cannot edit me',\n    disabled: true\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Disabled TextField', {\n      selector: 'input'\n    });\n\n    // Confirm it's disabled\n    expect(input).toBeDisabled();\n    expect(input).toHaveValue('Cannot edit me');\n  }\n}",
                ...DisabledField.parameters?.docs?.source,
              },
              description: {
                story:
                  '8) Disabled Field\r\n   No user interactions => remove `async`.',
                ...DisabledField.parameters?.docs?.description,
              },
            },
          }),
          (ShrunkLabelPositions.parameters = {
            ...ShrunkLabelPositions.parameters,
            docs: {
              ...ShrunkLabelPositions.parameters?.docs,
              source: {
                originalSource:
                  '{\n  render: () => <Box display="flex" flexDirection="column" gap={2} width="300px">\r\n      <TextField label="On Notch Label" shrunklabelposition="onNotch" placeholder="onNotch placeholder" />\r\n      <TextField label="Above Notch Label" shrunklabelposition="aboveNotch" placeholder="aboveNotch placeholder" />\r\n    </Box>,\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // We have two separate text fields labeled "On Notch Label" and "Above Notch Label".\n    expect(canvas.getByLabelText(\'On Notch Label\')).toBeInTheDocument();\n    expect(canvas.getByLabelText(\'Above Notch Label\')).toBeInTheDocument();\n  }\n}',
                ...ShrunkLabelPositions.parameters?.docs?.source,
              },
              description: {
                story:
                  '9) Shrunk Label Positions\r\n   No user interactions => remove `async`.',
                ...ShrunkLabelPositions.parameters?.docs?.description,
              },
            },
          })
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
