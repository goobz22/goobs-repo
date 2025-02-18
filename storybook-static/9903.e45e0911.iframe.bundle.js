'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [9903],
    {
      './src/components/Dropdown/index.tsx': (
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
          _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/styles/styled.js'
            ),
          _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/material/MenuItem/MenuItem.js'
            ),
          _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/material/FormControl/FormControl.js'
            ),
          _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              './node_modules/@mui/material/OutlinedInput/OutlinedInput.js'
            ),
          _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              './node_modules/@mui/material/InputLabel/InputLabel.js'
            ),
          _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              './node_modules/@mui/material/Select/Select.js'
            ),
          _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              './node_modules/@mui/material/FormHelperText/FormHelperText.js'
            ),
          _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Typography/index.tsx'
          ),
          _styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './src/styles/palette.ts'
          )
        const StyledBox = (0,
          _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_4__.Ay)(
            _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_5__.A
          )(() => ({ width: '100%', marginTop: '10px' })),
          StyledMenuItem = (0,
          _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_4__.Ay)(
            _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_6__.A
          )(() => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor:
              _styles_palette__WEBPACK_IMPORTED_MODULE_3__.ON.main,
          })),
          StyledFormControl = (0,
          _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_4__.Ay)(
            _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,
            {
              shouldForwardProp: prop =>
                ![
                  '$hasValue',
                  '$focused',
                  '$backgroundcolor',
                  '$outlinecolor',
                  '$fontcolor',
                  '$shrunkfontcolor',
                  '$unshrunkfontcolor',
                  '$shrunklabelposition',
                  '$error',
                ].includes(prop),
            }
          )(
            ({
              $hasValue,
              $backgroundcolor,
              $outlinecolor,
              $fontcolor,
              $shrunkfontcolor,
              $unshrunkfontcolor,
              $shrunklabelposition,
              $error,
            }) => ({
              minHeight: '55px',
              '& .MuiInputLabel-root': {
                '&:not(.MuiInputLabel-shrink)': {
                  transform: 'translate(14px, 9px) scale(1)',
                },
                color: $unshrunkfontcolor || 'black',
                '&.Mui-focused': { color: $shrunkfontcolor || 'black' },
                '&.MuiInputLabel-shrink': {
                  color: $shrunkfontcolor || 'black',
                  ...(('aboveNotch' === $shrunklabelposition && {
                    transform: 'translate(0px, -17px) scale(0.75)',
                  }) ||
                    ('onNotch' === $shrunklabelposition && {
                      transform: 'translate(14px, -9px) scale(0.75)',
                    })),
                },
              },
              '& .MuiOutlinedInput-root': {
                minHeight: '40px',
                height: '40px',
                backgroundColor: $backgroundcolor || 'inherit',
                color: $fontcolor || 'black',
                '& .MuiSelect-icon': { color: $fontcolor || 'black' },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor:
                    $outlinecolor ||
                    ($error ? '' : $hasValue ? 'black' : 'rgba(0, 0, 0, 0.23)'),
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor:
                    $outlinecolor ||
                    ($error ? '' : $hasValue ? 'black' : 'rgba(0, 0, 0, 0.23)'),
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor:
                    $outlinecolor ||
                    ($error ? '' : $hasValue ? 'black' : 'rgba(0, 0, 0, 0.23)'),
                },
                '& .MuiOutlinedInput-input': {
                  padding: '8px 14px',
                  color: $fontcolor || 'black',
                },
              },
            })
          ),
          StyledOutlinedInput = (0,
          _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_4__.Ay)(
            _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_8__.A,
            {
              shouldForwardProp: prop =>
                ![
                  '$backgroundcolor',
                  '$fontcolor',
                  '$hasValue',
                  '$focused',
                  '$outlinecolor',
                  '$error',
                ].includes(prop),
            }
          )(() => ({})),
          Dropdown = ({
            label,
            options,
            defaultValue,
            backgroundcolor,
            outlinecolor,
            fontcolor,
            shrunkfontcolor,
            unshrunkfontcolor,
            shrunklabelposition = 'onNotch',
            onChange,
            error = !1,
            helperText,
            name,
            required = !1,
            onBlur,
            onFocus,
            value: externalValue,
          }) => {
            let initialSelected = ''
            if (void 0 !== externalValue && '' !== externalValue)
              initialSelected = externalValue
            else if (defaultValue) {
              const defaultOption = options.find(
                opt => opt.value === defaultValue
              )
              defaultOption && (initialSelected = defaultOption.value)
            }
            const [selectedValue, setSelectedValue] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialSelected),
              [focused, setFocused] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1)
            ;(0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              void 0 !== externalValue && setSelectedValue(externalValue)
            }, [externalValue])
            const handleChange = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                event => {
                  const newValue = event.target.value
                  setSelectedValue(newValue), onChange && onChange(event)
                },
                [onChange]
              ),
              handleBlur = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                e => {
                  setFocused(!1), null == onBlur || onBlur(e)
                },
                [onBlur]
              ),
              handleFocus = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                e => {
                  setFocused(!0), null == onFocus || onFocus(e)
                },
                [onFocus]
              ),
              hasValue = Boolean(selectedValue && selectedValue.length),
              shouldNotch =
                'onNotch' === shrunklabelposition && (hasValue || focused),
              inputLabelForOutlined = shouldNotch ? label : ''
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              StyledBox,
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  StyledFormControl,
                  {
                    fullWidth: !0,
                    variant: 'outlined',
                    required,
                    error,
                    $hasValue: hasValue,
                    $focused: focused,
                    $backgroundcolor: backgroundcolor,
                    $outlinecolor: outlinecolor,
                    $fontcolor: fontcolor,
                    $shrunkfontcolor: shrunkfontcolor,
                    $unshrunkfontcolor: unshrunkfontcolor,
                    $shrunklabelposition: shrunklabelposition,
                    $error: error,
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                        { htmlFor: name, children: label }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_10__.A,
                        {
                          label: inputLabelForOutlined,
                          value: selectedValue,
                          onChange: handleChange,
                          onBlur: handleBlur,
                          onFocus: handleFocus,
                          input: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            StyledOutlinedInput,
                            {
                              label: inputLabelForOutlined,
                              notched: shouldNotch,
                            }
                          ),
                          inputProps: { name },
                          children: options.map(option => {
                            const itemLabel =
                              (str = option.value.replace(/_/g, ' '))
                                .charAt(0)
                                .toUpperCase() + str.slice(1)
                            var str
                            return 'attribute1' in option
                              ? (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  StyledMenuItem,
                                  {
                                    value: option.value,
                                    children: [
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _Typography__WEBPACK_IMPORTED_MODULE_2__.A,
                                        {
                                          fontvariant: 'merriparagraph',
                                          text: itemLabel,
                                        }
                                      ),
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _Typography__WEBPACK_IMPORTED_MODULE_2__.A,
                                        {
                                          fontvariant: 'merriparagraph',
                                          text: `${option.attribute1}${option.attribute2 ? ` | ${option.attribute2}` : ''}`,
                                          fontcolor: 'textSecondary',
                                        }
                                      ),
                                    ],
                                  },
                                  option.value
                                )
                              : (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,
                                  {
                                    value: option.value,
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _Typography__WEBPACK_IMPORTED_MODULE_2__.A,
                                      {
                                        fontvariant: 'merriparagraph',
                                        text: itemLabel,
                                      }
                                    ),
                                  },
                                  option.value
                                )
                          }),
                        }
                      ),
                      helperText &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _barrel_optimize_names_Box_FormControl_FormHelperText_InputLabel_MenuItem_OutlinedInput_Select_styled_mui_material__WEBPACK_IMPORTED_MODULE_11__.A,
                          { children: helperText }
                        ),
                    ],
                  }
                ),
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = Dropdown
        Dropdown.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Dropdown',
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
                elements: [
                  {
                    name: 'union',
                    raw: 'SimpleDropdownOption | ComplexDropdownOption',
                    elements: [
                      { name: 'SimpleDropdownOption' },
                      { name: 'ComplexDropdownOption' },
                    ],
                  },
                ],
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
              description:
                'Positions the label text when shrunk.\n- `onNotch` = label sits on top of the outlined notch.\n- `aboveNotch` = label moves above the notch.',
              defaultValue: { value: "'onNotch'", computed: !1 },
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
            onBlur: {
              required: !1,
              tsType: {
                name: 'FocusEventHandler',
                elements: [{ name: 'HTMLInputElement' }],
                raw: 'FocusEventHandler<HTMLInputElement>',
              },
              description: '',
            },
            onFocus: {
              required: !1,
              tsType: {
                name: 'FocusEventHandler',
                elements: [{ name: 'HTMLInputElement' }],
                raw: 'FocusEventHandler<HTMLInputElement>',
              },
              description: '',
            },
            value: {
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
