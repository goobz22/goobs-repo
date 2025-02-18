'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [6254],
    {
      './src/components/Button/index.tsx': (
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
          _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/Button/Button.js'
            ),
          _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Typography/index.tsx'
          )
        function CustomButton({
          text,
          variant = 'contained',
          fontvariant = 'merriparagraph',
          onClick,
          fontcolor,
          backgroundcolor,
          width,
          height,
          disableButton,
          icon,
          iconcolor,
          iconsize,
          iconlocation = 'left',
          fontlocation = 'center',
          disabled,
          ...restProps
        }) {
          const isReallyDisabled = disabled || 'true' === disableButton,
            IconComponent = icon
              ? react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(icon, {
                  sx: {
                    color: iconcolor || 'inherit',
                    fontSize: iconsize || '20px',
                    minWidth: iconsize || '20px',
                    minHeight: iconsize || '20px',
                    margin: 0,
                  },
                })
              : null,
            buttonStyle = {
              minWidth: 'fit-content',
              width: 'auto',
              height: '40px',
              padding: '8px 16px',
              display: 'inline-flex',
              flexShrink: 0,
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap',
              flexDirection: 'above' === iconlocation ? 'column' : 'row',
              alignItems: 'center',
              justifyContent:
                'left' === fontlocation
                  ? 'flex-start'
                  : 'right' === fontlocation
                    ? 'flex-end'
                    : 'center',
              gap: '8px',
            }
          isReallyDisabled
            ? ((buttonStyle.backgroundColor = '#cccccc'),
              (buttonStyle.opacity = 1),
              (buttonStyle.cursor = 'not-allowed'))
            : backgroundcolor && 'none' !== backgroundcolor
              ? (buttonStyle.backgroundColor = backgroundcolor)
              : 'none' === backgroundcolor &&
                (buttonStyle.backgroundColor = 'transparent')
          const containerStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: width || 'auto',
            height: height || '40px',
            minWidth: 'fit-content',
          }
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
            {
              style: containerStyle,
              children: (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                {
                  ...restProps,
                  variant,
                  onClick: event => {
                    event.preventDefault(), null == onClick || onClick(event)
                  },
                  disabled: isReallyDisabled,
                  disableElevation: !0,
                  disableRipple: !0,
                  style: buttonStyle,
                  children: [
                    'above' === iconlocation && IconComponent,
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
                      {
                        style: {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent:
                            'left' === fontlocation
                              ? 'flex-start'
                              : 'right' === fontlocation
                                ? 'flex-end'
                                : 'center',
                          width: '100%',
                          height: '100%',
                          gap: '8px',
                        },
                        children: [
                          'left' === iconlocation && IconComponent,
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _Typography__WEBPACK_IMPORTED_MODULE_2__.A,
                            {
                              fontvariant,
                              fontcolor: isReallyDisabled
                                ? 'grey'
                                : fontcolor || 'white',
                              text: text || '',
                            }
                          ),
                          'right' === iconlocation && IconComponent,
                        ],
                      }
                    ),
                  ],
                }
              ),
            }
          )
        }
        const __WEBPACK_DEFAULT_EXPORT__ = CustomButton
        CustomButton.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CustomButton',
          props: {
            text: { required: !1, tsType: { name: 'string' }, description: '' },
            backgroundcolor: {
              required: !1,
              tsType: { name: 'string' },
              description:
                'The background color for the button when not disabled.\nIf `backgroundcolor` is "none", it behaves like a text button.',
            },
            fontcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: 'The text color. Defaults to white unless disabled.',
            },
            fontvariant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'merriparagraph' | 'merrihelperfooter'",
                elements: [
                  { name: 'literal', value: "'merriparagraph'" },
                  { name: 'literal', value: "'merrihelperfooter'" },
                ],
              },
              description: '',
              defaultValue: { value: "'merriparagraph'", computed: !1 },
            },
            width: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            height: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            disableButton: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'true' | 'false'",
                elements: [
                  { name: 'literal', value: "'true'" },
                  { name: 'literal', value: "'false'" },
                ],
              },
              description:
                "If you want to disable the button in a custom way (string),\nwe unify this with MUI's `disabled` boolean.",
            },
            icon: {
              required: !1,
              tsType: {
                name: 'ReactReactElement',
                raw: 'React.ReactElement<SvgIconProps>',
                elements: [{ name: 'SvgIconProps' }],
              },
              description: 'Optional icon to display.',
            },
            iconcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            iconsize: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            iconlocation: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'left' | 'right' | 'above'",
                elements: [
                  { name: 'literal', value: "'left'" },
                  { name: 'literal', value: "'right'" },
                  { name: 'literal', value: "'above'" },
                ],
              },
              description: '',
              defaultValue: { value: "'left'", computed: !1 },
            },
            fontlocation: {
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
              defaultValue: { value: "'center'", computed: !1 },
            },
            variant: {
              defaultValue: { value: "'contained'", computed: !1 },
              required: !1,
            },
          },
          composes: ['ButtonProps'],
        }
      },
      './src/components/Searchbar/index.tsx': (
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
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/material/styles/styled.js'
            ),
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/FormControl/FormControl.js'
            ),
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/material/OutlinedInput/OutlinedInput.js'
            ),
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/material/InputLabel/InputLabel.js'
            ),
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/material/InputAdornment/InputAdornment.js'
            ),
          _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/Search.js'
            ),
          _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/styles/palette.ts'
          )
        const StyledFormControl = (0,
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_4__.A
          )({
            width: '100%',
            position: 'relative',
            height: '50px',
            display: 'flex',
            justifyContent: 'flex-end',
          }),
          StyledOutlinedInput = (0,
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_5__.A
          )(({ backgroundcolor, outlinecolor, fontcolor }) => ({
            height: '40px',
            backgroundColor:
              backgroundcolor ||
              _styles_palette__WEBPACK_IMPORTED_MODULE_2__.ON.main,
            '& .MuiOutlinedInput-notchedOutline': {
              border:
                'none' === outlinecolor
                  ? 'none'
                  : `1px solid ${outlinecolor || _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main}`,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border:
                'none' === outlinecolor
                  ? 'none'
                  : `1px solid ${outlinecolor || _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main}`,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border:
                'none' === outlinecolor
                  ? 'none'
                  : `1px solid ${outlinecolor || _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main}`,
              borderWidth: 'none' === outlinecolor ? '0' : '1px',
            },
            '& input': {
              color:
                fontcolor ||
                _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
              padding: '0 12px',
              paddingLeft: '0px',
              height: '100%',
              '&::placeholder': {
                color:
                  fontcolor ||
                  _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
                opacity: 0.7,
              },
            },
          })),
          StyledInputLabel = (0,
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_6__.A
          )(
            ({
              fontcolor,
              shrunkfontcolor,
              unshrunkfontcolor,
              shrunklabelposition,
            }) => ({
              color:
                unshrunkfontcolor ||
                fontcolor ||
                _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
              position: 'absolute',
              top: '-5px',
              overflow: 'visible',
              zIndex: 1,
              '&.Mui-focused': {
                color:
                  shrunkfontcolor ||
                  fontcolor ||
                  _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
              },
              '&.MuiInputLabel-shrink': {
                color:
                  shrunkfontcolor ||
                  fontcolor ||
                  _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
                ...('aboveNotch' === shrunklabelposition && {
                  transform: 'translate(0px, 0px) scale(0.75)',
                }),
                ...('onNotch' === shrunklabelposition && {
                  transform: 'translate(15px, 7px) scale(0.75)',
                }),
              },
              '&:not(.MuiInputLabel-shrink)': {
                transform: 'none',
                top: '18px',
                left: '44px',
              },
            })
          ),
          Searchbar = ({
            label,
            backgroundcolor,
            iconcolor,
            outlinecolor,
            fontcolor,
            shrunkfontcolor,
            unshrunkfontcolor,
            placeholder,
            value,
            shrunklabelposition = 'onNotch',
            onChange,
          }) => {
            const [focused, setFocused] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
              isLabelShrunken = focused || Boolean(value)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              StyledFormControl,
              {
                variant: 'outlined',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    StyledInputLabel,
                    {
                      variant: 'outlined',
                      htmlFor: 'search-input',
                      shrink: isLabelShrunken,
                      fontcolor,
                      shrunkfontcolor,
                      unshrunkfontcolor,
                      shrunklabelposition,
                      children: label,
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    StyledOutlinedInput,
                    {
                      id: 'search-input',
                      label,
                      notched:
                        'onNotch' === shrunklabelposition && isLabelShrunken,
                      placeholder: isLabelShrunken ? placeholder : '',
                      value,
                      onChange,
                      onFocus: () => setFocused(!0),
                      onBlur: () => setFocused(!1),
                      backgroundcolor,
                      outlinecolor,
                      fontcolor,
                      startAdornment: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,
                        {
                          position: 'start',
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8__.A,
                            {
                              sx: {
                                color:
                                  iconcolor ||
                                  _styles_palette__WEBPACK_IMPORTED_MODULE_2__
                                    .Ql.main,
                              },
                            }
                          ),
                        }
                      ),
                    }
                  ),
                ],
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = Searchbar
        Searchbar.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Searchbar',
          props: {
            label: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            backgroundcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            iconcolor: {
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
            placeholder: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            value: {
              required: !0,
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
              defaultValue: { value: "'onNotch'", computed: !1 },
            },
            onChange: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(e: React.ChangeEvent<HTMLInputElement>) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'ReactChangeEvent',
                        raw: 'React.ChangeEvent<HTMLInputElement>',
                        elements: [{ name: 'HTMLInputElement' }],
                      },
                      name: 'e',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
          },
        }
      },
      './src/components/Toolbar/index.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Toolbar })
        var jsx_runtime = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          useMediaQuery =
            (__webpack_require__(
              './node_modules/next/dist/compiled/react/index.js'
            ),
            __webpack_require__(
              './node_modules/@mui/material/useMediaQuery/index.js'
            )),
          Box = __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          styled = __webpack_require__(
            './node_modules/@mui/material/styles/styled.js'
          ),
          Button = __webpack_require__('./src/components/Button/index.tsx'),
          palette = __webpack_require__('./src/styles/palette.ts')
        const VerticalDivider = (0, styled.Ay)(Box.A)({
            borderLeft: '2px solid black',
            height: '20px',
          }),
          Left = ({ buttons }) =>
            (0, jsx_runtime.jsxs)(Box.A, {
              sx: { display: 'flex', alignItems: 'center' },
              children: [
                (0, jsx_runtime.jsx)(Box.A, {
                  sx: {
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 15px',
                  },
                  children: (0, jsx_runtime.jsx)(VerticalDivider, {}),
                }),
                (0, jsx_runtime.jsx)(Box.A, {
                  sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '0 15px',
                  },
                  children:
                    null == buttons
                      ? void 0
                      : buttons.map((btn, i) => {
                          const isDisabled = !!btn.disabled
                          return (0, jsx_runtime.jsx)(
                            Button.A,
                            {
                              text: btn.text,
                              onClick: btn.onClick,
                              disabled: isDisabled,
                              disableButton: isDisabled ? 'true' : 'false',
                              fontcolor: palette.ON.main,
                              backgroundcolor: isDisabled
                                ? palette.Oh.main
                                : palette.Ql.main,
                              fontvariant: 'merriparagraph',
                              variant: 'contained',
                              height: '45px',
                            },
                            i
                          )
                        }),
                }),
              ],
            }),
          left = Left
        Left.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Left',
          props: {
            buttons: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'CustomButtonProps' }],
                raw: 'CustomButtonProps[]',
              },
              description: 'Array of button configs to render on the left side',
            },
          },
        }
        var Searchbar = __webpack_require__(
          './src/components/Searchbar/index.tsx'
        )
        const LeftCenter = props => {
            const {
              shrunklabelposition,
              shrunkfontcolor,
              unshrunkfontcolor,
              label,
              backgroundcolor,
              iconcolor,
              outlinecolor,
              fontcolor,
              placeholder,
              value = '',
              onChange = () => {},
            } = props
            return (0, jsx_runtime.jsx)(Box.A, {
              sx: {
                display: 'flex',
                alignItems: 'flex-end',
                width: '400px',
                height: '55px',
              },
              children: (0, jsx_runtime.jsx)(Box.A, {
                sx: { marginBottom: '10px' },
                children: (0, jsx_runtime.jsx)(Searchbar.A, {
                  shrunklabelposition,
                  shrunkfontcolor,
                  unshrunkfontcolor,
                  label,
                  backgroundcolor,
                  iconcolor,
                  outlinecolor,
                  fontcolor,
                  placeholder,
                  value,
                  onChange,
                }),
              }),
            })
          },
          leftCenter = LeftCenter
        LeftCenter.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'LeftCenter',
        }
        var Dropdown = __webpack_require__(
            './src/components/Dropdown/index.tsx'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        function Right({ dropdown }) {
          return (0, jsx_runtime.jsx)(Box.A, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
              height: '100%',
              padding: '0 15px',
              gap: '10px',
              width: '200px',
            },
            children: (0, jsx_runtime.jsx)(Dropdown.A, {
              outlinecolor: palette.Ql.main,
              fontcolor: palette.Ql.main,
              shrunkfontcolor: palette.Ql.main,
              onChange: () => console.log('Dropdown changed'),
              ...dropdown,
            }),
          })
        }
        const right = Right
        Right.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Right',
          props: {
            dropdown: {
              required: !0,
              tsType: { name: 'DropdownProps' },
              description:
                "A single dropdown to render. (We'll render multiple <Right> if needed.)",
            },
          },
        }
        var Paper = __webpack_require__(
            './node_modules/@mui/material/Paper/Paper.js'
          ),
          Stack = __webpack_require__(
            './node_modules/@mui/material/Stack/Stack.js'
          ),
          Typography = __webpack_require__(
            './src/components/Typography/index.tsx'
          ),
          FileCopy = __webpack_require__(
            './node_modules/@mui/icons-material/esm/FileCopy.js'
          ),
          Delete = __webpack_require__(
            './node_modules/@mui/icons-material/esm/Delete.js'
          ),
          Download = __webpack_require__(
            './node_modules/@mui/icons-material/esm/Download.js'
          ),
          Edit = __webpack_require__(
            './node_modules/@mui/icons-material/esm/Edit.js'
          ),
          Visibility = __webpack_require__(
            './node_modules/@mui/icons-material/esm/Visibility.js'
          )
        function ManageRow({
          handleClose = () => {},
          selectedRows = [],
          rows = [],
          onDuplicate,
          onDelete,
          onManage,
          onShow,
          onExport,
        }) {
          const isMobile = (0, useMediaQuery.A)('(max-width:600px)'),
            handleActionSelection = type => {
              switch (type) {
                case 'duplicate':
                  null == onDuplicate || onDuplicate(), handleClose()
                  break
                case 'delete':
                  null == onDelete || onDelete(), handleClose()
                  break
                case 'export':
                  onExport ? onExport() : handleExport(), handleClose()
                  break
                case 'manage':
                  if (1 === selectedRows.length && onManage)
                    return void onManage()
                  break
                case 'show':
                  null == onShow || onShow(), handleClose()
              }
            },
            handleExport = () => {
              const csvContent = rows
                  .filter(row => {
                    var _row_id
                    return selectedRows.includes(
                      null !== (_row_id = row.id) && void 0 !== _row_id
                        ? _row_id
                        : row._id
                    )
                  })
                  .map(row => Object.values(row).join(','))
                  .join('\n'),
                blob = new Blob([csvContent], {
                  type: 'text/csv;charset=utf-8;',
                }),
                link = document.createElement('a')
              if (void 0 !== link.download) {
                const url = URL.createObjectURL(blob)
                link.setAttribute('href', url),
                  link.setAttribute('download', 'exported_data.csv'),
                  (link.style.visibility = 'hidden'),
                  document.body.appendChild(link),
                  link.click(),
                  document.body.removeChild(link)
              }
            }
          return 0 === selectedRows.length
            ? null
            : (0, jsx_runtime.jsx)(Paper.A, {
                elevation: 3,
                sx: {
                  zIndex: 1300,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '60px',
                  minWidth: isMobile ? 'auto' : '560px',
                  padding: isMobile ? '0 5px' : '0 10px',
                  userSelect: 'none',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                },
                children: (0, jsx_runtime.jsxs)(Box.A, {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  sx: { width: '100%' },
                  children: [
                    (0, jsx_runtime.jsx)(Box.A, {
                      flexGrow: 1,
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      children: (0, jsx_runtime.jsx)(Typography.A, {
                        fontvariant: 'merriparagraph',
                        text: `${selectedRows.length} ${1 === selectedRows.length ? 'item' : 'items'} selected`,
                      }),
                    }),
                    (0, jsx_runtime.jsxs)(Stack.A, {
                      component: 'div',
                      spacing: 0,
                      direction: 'row',
                      justifyContent: 'center',
                      sx: {
                        '& > div:not(:last-child)': { marginRight: '2px' },
                      },
                      children: [
                        1 === selectedRows.length &&
                          (0, jsx_runtime.jsxs)(Box.A, {
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            sx: {
                              borderRight: '1px solid #e0e0e0',
                              paddingRight: '8px',
                              marginRight: '8px',
                            },
                            children: [
                              onManage &&
                                (0, jsx_runtime.jsx)(Box.A, {
                                  onClick: e => {
                                    e.stopPropagation(),
                                      handleActionSelection('manage')
                                  },
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  sx: {
                                    padding: '8px',
                                    cursor: 'pointer',
                                    '&:hover': {
                                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                    borderRadius: '4px',
                                    transition: 'background-color 0.2s',
                                    userSelect: 'none',
                                  },
                                  children: (0, jsx_runtime.jsxs)(Box.A, {
                                    sx: {
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      color: 'black',
                                    },
                                    children: [
                                      (0, jsx_runtime.jsx)(Edit.A, {}),
                                      (0, jsx_runtime.jsx)(Typography.A, {
                                        fontvariant: 'merriparagraph',
                                        text: 'Manage',
                                      }),
                                    ],
                                  }),
                                }),
                              onShow &&
                                (0, jsx_runtime.jsx)(Box.A, {
                                  onClick: e => {
                                    e.stopPropagation(),
                                      handleActionSelection('show')
                                  },
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  sx: {
                                    padding: '8px',
                                    cursor: 'pointer',
                                    '&:hover': {
                                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                    borderRadius: '4px',
                                    transition: 'background-color 0.2s',
                                    userSelect: 'none',
                                  },
                                  children: (0, jsx_runtime.jsxs)(Box.A, {
                                    sx: {
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      color: 'black',
                                    },
                                    children: [
                                      (0, jsx_runtime.jsx)(Visibility.A, {}),
                                      (0, jsx_runtime.jsx)(Typography.A, {
                                        fontvariant: 'merriparagraph',
                                        text: 'Show',
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                        selectedRows.length > 0 &&
                          (0, jsx_runtime.jsxs)(Box.A, {
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            children: [
                              onDuplicate &&
                                !isMobile &&
                                (0, jsx_runtime.jsx)(Box.A, {
                                  onClick: e => {
                                    e.stopPropagation(),
                                      handleActionSelection('duplicate')
                                  },
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  sx: {
                                    padding: '8px',
                                    cursor: 'pointer',
                                    '&:hover': {
                                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                    borderRadius: '4px',
                                    transition: 'background-color 0.2s',
                                    userSelect: 'none',
                                  },
                                  children: (0, jsx_runtime.jsxs)(Box.A, {
                                    sx: {
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      color: 'black',
                                    },
                                    children: [
                                      (0, jsx_runtime.jsx)(FileCopy.A, {}),
                                      (0, jsx_runtime.jsx)(Typography.A, {
                                        fontvariant: 'merriparagraph',
                                        text: 'Duplicate',
                                      }),
                                    ],
                                  }),
                                }),
                              onDelete &&
                                (0, jsx_runtime.jsx)(Box.A, {
                                  onClick: e => {
                                    e.stopPropagation(),
                                      handleActionSelection('delete')
                                  },
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  sx: {
                                    padding: '8px',
                                    cursor: 'pointer',
                                    '&:hover': {
                                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                    borderRadius: '4px',
                                    transition: 'background-color 0.2s',
                                    userSelect: 'none',
                                  },
                                  children: (0, jsx_runtime.jsxs)(Box.A, {
                                    sx: {
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      color: 'black',
                                    },
                                    children: [
                                      (0, jsx_runtime.jsx)(Delete.A, {}),
                                      (0, jsx_runtime.jsx)(Typography.A, {
                                        fontvariant: 'merriparagraph',
                                        text: 'Delete',
                                      }),
                                    ],
                                  }),
                                }),
                              (!isMobile || onExport) &&
                                (0, jsx_runtime.jsx)(Box.A, {
                                  onClick: e => {
                                    e.stopPropagation(),
                                      handleActionSelection('export')
                                  },
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  sx: {
                                    padding: '8px',
                                    cursor: 'pointer',
                                    '&:hover': {
                                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                    borderRadius: '4px',
                                    transition: 'background-color 0.2s',
                                    userSelect: 'none',
                                  },
                                  children: (0, jsx_runtime.jsxs)(Box.A, {
                                    sx: {
                                      display: 'flex',
                                      flexDirection: 'column',
                                      alignItems: 'center',
                                      color: 'black',
                                    },
                                    children: [
                                      (0, jsx_runtime.jsx)(Download.A, {}),
                                      (0, jsx_runtime.jsx)(Typography.A, {
                                        fontvariant: 'merriparagraph',
                                        text: 'Export',
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              })
        }
        const DataGrid_ManageRow = ManageRow
        function RightCenter({
          selectedRows = [],
          rows = [],
          onDuplicate,
          onDelete,
          onManage,
          onShow,
          onExport,
          handleClose,
        }) {
          const isTabletOrBelow = (0, useMediaQuery.A)('(max-width:1024px)')
          return (0, jsx_runtime.jsx)(Box.A, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
              mt: isTabletOrBelow ? '5px' : 0,
              height: isTabletOrBelow ? 'auto' : '100%',
              padding: isTabletOrBelow ? '0 5px' : '0 15px',
            },
            children: (0, jsx_runtime.jsx)(DataGrid_ManageRow, {
              selectedRows,
              rows,
              onDuplicate,
              onDelete,
              onManage,
              onShow,
              onExport,
              handleClose,
            }),
          })
        }
        ManageRow.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ManageRow',
          props: {
            handleClose: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
              defaultValue: { value: '() => {}', computed: !1 },
            },
            selectedRows: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            rows: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{ [key: string]: unknown }',
                    signature: {
                      properties: [
                        {
                          key: { name: 'string' },
                          value: { name: 'unknown', required: !0 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'Array<{ [key: string]: unknown }>',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            onDuplicate: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onDelete: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onManage: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onShow: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onExport: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
          },
        }
        const rightCenter = RightCenter
        RightCenter.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'RightCenter',
          props: {
            selectedRows: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            rows: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{ [key: string]: unknown }',
                    signature: {
                      properties: [
                        {
                          key: { name: 'string' },
                          value: { name: 'unknown', required: !0 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'Array<{ [key: string]: unknown }>',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            onDuplicate: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onDelete: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onManage: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onShow: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onExport: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            handleClose: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
          },
        }
        const CustomToolbar = ({
            buttons,
            searchbarProps,
            rightCenterProps,
            dropdowns,
          }) => {
            const isMobile = (0, useMediaQuery.A)('(max-width:600px)')
            return (0, useMediaQuery.A)('(max-width:1024px)')
              ? isMobile
                ? (0, jsx_runtime.jsxs)(Box.A, {
                    sx: {
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      mb: 2,
                    },
                    children: [
                      (0, jsx_runtime.jsx)(Box.A, {
                        sx: { display: 'flex', alignItems: 'center', gap: 2 },
                        children: (0, jsx_runtime.jsx)(left, { buttons }),
                      }),
                      rightCenterProps &&
                        (0, jsx_runtime.jsx)(Box.A, {
                          sx: { mt: 2 },
                          children: (0, jsx_runtime.jsx)(rightCenter, {
                            ...rightCenterProps,
                          }),
                        }),
                      null == dropdowns
                        ? void 0
                        : dropdowns.map((dd, index) =>
                            (0, jsx_runtime.jsx)(
                              Box.A,
                              {
                                sx: { mt: 2 },
                                children: (0, jsx_runtime.jsx)(right, {
                                  dropdown: dd,
                                }),
                              },
                              index
                            )
                          ),
                    ],
                  })
                : (0, jsx_runtime.jsxs)(Box.A, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 2,
                      width: '100%',
                      mb: 2,
                    },
                    children: [
                      (0, jsx_runtime.jsx)(Box.A, {
                        sx: {
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          flexWrap: 'wrap',
                        },
                        children: (0, jsx_runtime.jsx)(left, { buttons }),
                      }),
                      (0, jsx_runtime.jsxs)(Box.A, {
                        sx: {
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          flexWrap: 'wrap',
                        },
                        children: [
                          rightCenterProps &&
                            (0, jsx_runtime.jsx)(rightCenter, {
                              ...rightCenterProps,
                            }),
                          null == dropdowns
                            ? void 0
                            : dropdowns.map((dd, index) =>
                                (0, jsx_runtime.jsx)(
                                  right,
                                  { dropdown: dd },
                                  index
                                )
                              ),
                        ],
                      }),
                    ],
                  })
              : (0, jsx_runtime.jsxs)(Box.A, {
                  sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                    width: '100%',
                    mb: 2,
                  },
                  children: [
                    (0, jsx_runtime.jsxs)(Box.A, {
                      sx: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        flexWrap: 'wrap',
                      },
                      children: [
                        (0, jsx_runtime.jsx)(left, { buttons }),
                        searchbarProps &&
                          (0, jsx_runtime.jsx)(leftCenter, {
                            ...searchbarProps,
                          }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(Box.A, {
                      sx: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        flexWrap: 'wrap',
                      },
                      children: [
                        rightCenterProps &&
                          (0, jsx_runtime.jsx)(rightCenter, {
                            ...rightCenterProps,
                          }),
                        null == dropdowns
                          ? void 0
                          : dropdowns.map((dd, index) =>
                              (0, jsx_runtime.jsx)(
                                right,
                                { dropdown: dd },
                                index
                              )
                            ),
                      ],
                    }),
                  ],
                })
          },
          Toolbar = CustomToolbar
        CustomToolbar.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CustomToolbar',
          props: {
            buttons: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'CustomButtonProps' }],
                raw: 'CustomButtonProps[]',
              },
              description: '',
            },
            searchbarProps: {
              required: !1,
              tsType: { name: 'SearchbarProps' },
              description: '',
            },
            rightCenterProps: {
              required: !1,
              tsType: { name: 'RightCenterProps' },
              description: '',
            },
            dropdowns: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'DropdownProps' }],
                raw: 'DropdownProps[]',
              },
              description: '',
            },
          },
        }
      },
    },
  ]
)
