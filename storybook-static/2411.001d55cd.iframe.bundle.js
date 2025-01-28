'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [2411],
    {
      './src/components/SearchableDropdown/index.tsx': (
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
          _barrel_optimize_names_Autocomplete_mui_material__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/material/Autocomplete/Autocomplete.js'
            ),
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/material/styles/styled.js'
            ),
          _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/styles/palette.ts'
          ),
          _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './src/components/Typography/index.tsx'
          ),
          _TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            './src/components/TextField/index.tsx'
          ),
          _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/ArrowDropDown.js'
            )
        const StyledAutocomplete = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.Ay)(
            _barrel_optimize_names_Autocomplete_mui_material__WEBPACK_IMPORTED_MODULE_6__.A
          )(props => {
            const {
              outlinecolor,
              fontcolor,
              inputfontcolor,
              shrunkfontcolor,
              unshrunkfontcolor,
              shrunklabelposition,
            } = props
            return {
              '& .MuiOutlinedInput-root': {
                overflow: 'visible',
                minHeight: '45px',
                height: '45px !important',
                '& fieldset': {
                  borderColor:
                    outlinecolor ||
                    _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
                },
                '&:hover fieldset': {
                  borderColor:
                    outlinecolor ||
                    _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
                },
                '&.Mui-focused fieldset': {
                  borderColor:
                    outlinecolor ||
                    _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
                },
              },
              '& .MuiAutocomplete-input': {
                color:
                  inputfontcolor ||
                  fontcolor ||
                  _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
                paddingTop: '0px',
                paddingBottom: '0px',
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
                    transform: 'translate(13px, -5px) scale(0.75)',
                  }),
                },
              },
            }
          }),
          SearchableDropdown = ({
            label,
            options,
            defaultValue,
            backgroundcolor,
            outlinecolor,
            fontcolor = _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
            inputfontcolor = _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql
              .main,
            shrunkfontcolor = _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql
              .main,
            unshrunkfontcolor = _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql
              .main,
            placeholdercolor = _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql
              .main,
            shrunklabelposition = 'onNotch',
            onChange,
            error = !1,
            helperText,
            name,
            required = !1,
            placeholder,
          }) => {
            const [value, setValue] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
              [inputValue, setInputValue] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
              [isFocused, setIsFocused] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1)
            ;(0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              const defaultOption = options.find(
                option => option.value === defaultValue
              )
              if (defaultOption) {
                const displayText =
                  defaultOption.value
                    .replace(/_/g, ' ')
                    .charAt(0)
                    .toUpperCase() +
                  defaultOption.value.replace(/_/g, ' ').slice(1)
                setValue(defaultOption), setInputValue(displayText)
              }
            }, [defaultValue, options])
            const handleFocus = () => {
                setIsFocused(!0)
              },
              handleBlur = () => {
                value || inputValue || setIsFocused(!1)
              }
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              StyledAutocomplete,
              {
                id: name,
                options,
                freeSolo: !0,
                value,
                onChange: (event, newValue) => {
                  if ('string' == typeof newValue)
                    setValue(newValue),
                      setInputValue(newValue),
                      null == onChange || onChange(null)
                  else if ((setValue(newValue), newValue)) {
                    const displayText =
                      newValue.value
                        .replace(/_/g, ' ')
                        .charAt(0)
                        .toUpperCase() +
                      newValue.value.replace(/_/g, ' ').slice(1)
                    setInputValue(displayText),
                      null == onChange || onChange(newValue)
                  } else setInputValue(''), null == onChange || onChange(null)
                },
                inputValue,
                onInputChange: (_e, newInputValue) => {
                  setInputValue(newInputValue)
                },
                onFocus: handleFocus,
                onBlur: handleBlur,
                forcePopupIcon: !0,
                popupIcon: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_7__.A,
                  {
                    sx: {
                      color:
                        _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
                    },
                  }
                ),
                disablePortal: !1,
                backgroundcolor,
                outlinecolor,
                fontcolor,
                inputfontcolor,
                filterOptions: (opts, state) => {
                  const input = state.inputValue.toLowerCase()
                  return opts.filter(o => o.value.toLowerCase().includes(input))
                },
                getOptionLabel: option =>
                  'string' == typeof option
                    ? option
                    : option.value.replace(/_/g, ' ').charAt(0).toUpperCase() +
                      option.value.replace(/_/g, ' ').slice(1),
                renderOption: (liProps, option) => {
                  const { key, ...restLiProps } = liProps
                  return (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'li',
                    {
                      ...restLiProps,
                      style: {
                        color:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
                      },
                      children: [
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _Typography__WEBPACK_IMPORTED_MODULE_3__.A,
                          {
                            fontvariant: 'merriparagraph',
                            text: option.value.replace(/_/g, ' '),
                            fontcolor:
                              _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql
                                .main,
                          }
                        ),
                        option.attribute1 &&
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _Typography__WEBPACK_IMPORTED_MODULE_3__.A,
                            {
                              fontvariant: 'merriparagraph',
                              text: `${option.attribute1}${option.attribute2 ? ` | ${option.attribute2}` : ''}`,
                              fontcolor:
                                _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql
                                  .main,
                            }
                          ),
                      ],
                    },
                    key
                  )
                },
                renderInput: params =>
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _TextField__WEBPACK_IMPORTED_MODULE_4__.A,
                    {
                      ...params,
                      required,
                      error,
                      helperText,
                      label,
                      placeholder,
                      onFocus: handleFocus,
                      shrunkfontcolor,
                      onBlur: handleBlur,
                      backgroundcolor,
                      shrunklabelposition,
                      slotProps: {
                        inputLabel: {
                          shrink: isFocused || !!value || !!inputValue,
                          sx: {
                            color: isFocused
                              ? shrunkfontcolor
                              : unshrunkfontcolor,
                            pointerEvents: 'none',
                            zIndex: 1,
                            overflow: 'visible',
                            '&.MuiInputLabel-shrink': {
                              color: shrunkfontcolor,
                              ...('aboveNotch' === shrunklabelposition && {
                                transform: 'translate(0px, -17px) scale(0.75)',
                              }),
                              ...('onNotch' === shrunklabelposition && {
                                transform: 'translate(15px, -15px) scale(0.75)',
                              }),
                            },
                            '&:not(.MuiInputLabel-shrink)': {
                              transform: 'none',
                              top: '10px',
                              left: '14px',
                            },
                          },
                        },
                        input: {
                          ...params.InputProps,
                          notched:
                            'onNotch' === shrunklabelposition &&
                            (isFocused || !!value || !!inputValue),
                        },
                      },
                      sx: {
                        overflow: 'visible',
                        '& .MuiOutlinedInput-root': {
                          backgroundColor:
                            backgroundcolor ||
                            _styles_palette__WEBPACK_IMPORTED_MODULE_2__.ON
                              .main,
                          color: fontcolor,
                          minHeight: '40px',
                          height: '40px !important',
                          overflow: 'visible',
                          '& fieldset': {
                            borderColor:
                              outlinecolor ||
                              _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql
                                .main,
                            overflow: 'visible',
                          },
                          '&:hover fieldset': {
                            borderColor:
                              outlinecolor ||
                              _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql
                                .main,
                          },
                          '&.Mui-focused fieldset': {
                            borderColor:
                              outlinecolor ||
                              _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql
                                .main,
                          },
                          '& input': {
                            backgroundColor:
                              backgroundcolor ||
                              _styles_palette__WEBPACK_IMPORTED_MODULE_2__.ON
                                .main,
                            color: inputfontcolor,
                            paddingTop: '0px',
                            paddingBottom: '0px',
                            '&::placeholder': {
                              color: placeholdercolor,
                              opacity: 1,
                            },
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: unshrunkfontcolor,
                          overflow: 'visible',
                          zIndex: 1,
                        },
                        '& .MuiAutocomplete-clearIndicator': {
                          display: 'none',
                        },
                      },
                    }
                  ),
                sx: {
                  '& .MuiAutocomplete-option': {
                    color: _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
                  },
                  '& .MuiAutocomplete-option[aria-selected="true"]': {
                    backgroundColor: `${_styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main}08`,
                  },
                },
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = SearchableDropdown
        SearchableDropdown.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SearchableDropdown',
          props: {
            label: {
              required: !0,
              tsType: { name: 'string' },
              description: '',
            },
            options: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'DropdownOption' }],
                raw: 'DropdownOption[]',
              },
              description: '',
            },
            defaultValue: {
              required: !1,
              tsType: { name: 'string' },
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
              defaultValue: { value: "'#000000'", computed: !1 },
            },
            inputfontcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'#000000'", computed: !1 },
            },
            shrunkfontcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'#000000'", computed: !1 },
            },
            unshrunkfontcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'#000000'", computed: !1 },
            },
            placeholdercolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'#000000'", computed: !1 },
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
              defaultValue: { value: "'onNotch'", computed: !1 },
            },
            onChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(value: DropdownOption | null) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'union',
                        raw: 'DropdownOption | null',
                        elements: [
                          { name: 'DropdownOption' },
                          { name: 'null' },
                        ],
                      },
                      name: 'value',
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
              defaultValue: { value: 'false', computed: !1 },
            },
            helperText: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            name: { required: !1, tsType: { name: 'string' }, description: '' },
            required: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
            placeholder: {
              required: !1,
              tsType: { name: 'string' },
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
