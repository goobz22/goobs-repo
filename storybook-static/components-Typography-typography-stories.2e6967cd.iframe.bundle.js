'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [1135],
    {
      './node_modules/@mui/material/Box/Box.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Box_Box })
        var react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
          styled_engine = __webpack_require__(
            './node_modules/@mui/styled-engine/index.js'
          ),
          styleFunctionSx = __webpack_require__(
            './node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js'
          ),
          extendSxProp = __webpack_require__(
            './node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js'
          ),
          useTheme = __webpack_require__(
            './node_modules/@mui/system/esm/useTheme/useTheme.js'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        var ClassNameGenerator = __webpack_require__(
            './node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js'
          ),
          createTheme = __webpack_require__(
            './node_modules/@mui/material/styles/createTheme.js'
          ),
          identifier = __webpack_require__(
            './node_modules/@mui/material/styles/identifier.js'
          )
        const Box_boxClasses = (0,
          __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ).A)('MuiBox', ['root']),
          defaultTheme = (0, createTheme.A)(),
          Box = (function createBox(options = {}) {
            const {
                themeId,
                defaultTheme,
                defaultClassName = 'MuiBox-root',
                generateClassName,
              } = options,
              BoxRoot = (0, styled_engine.Ay)('div', {
                shouldForwardProp: prop =>
                  'theme' !== prop && 'sx' !== prop && 'as' !== prop,
              })(styleFunctionSx.A)
            return react.forwardRef(function Box(inProps, ref) {
              const theme = (0, useTheme.A)(defaultTheme),
                {
                  className,
                  component = 'div',
                  ...other
                } = (0, extendSxProp.A)(inProps)
              return (0, jsx_runtime.jsx)(BoxRoot, {
                as: component,
                ref,
                className: (0, clsx.A)(
                  className,
                  generateClassName
                    ? generateClassName(defaultClassName)
                    : defaultClassName
                ),
                theme: (themeId && theme[themeId]) || theme,
                ...other,
              })
            })
          })({
            themeId: identifier.A,
            defaultTheme,
            defaultClassName: Box_boxClasses.root,
            generateClassName: ClassNameGenerator.A.generate,
          }),
          Box_Box = Box
      },
      './node_modules/@mui/material/Typography/Typography.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
            './node_modules/clsx/dist/clsx.mjs'
          ),
          _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/composeClasses/composeClasses.js'
            ),
          _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@mui/material/zero-styled/index.js'
            ),
          _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/material/styles/styled.js'
            ),
          _utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/material/utils/memoTheme.js'
            ),
          _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              './node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'
            ),
          _utils_capitalize_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/material/utils/capitalize.js'
            ),
          _utils_createSimplePaletteValueFilter_js__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              './node_modules/@mui/material/utils/createSimplePaletteValueFilter.js'
            ),
          _typographyClasses_js__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/material/Typography/typographyClasses.js'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        const v6Colors = {
            primary: !0,
            secondary: !0,
            error: !0,
            info: !0,
            success: !0,
            warning: !0,
            textPrimary: !0,
            textSecondary: !0,
            textDisabled: !0,
          },
          extendSxProp = (0,
          _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__.Dg)(),
          TypographyRoot = (0,
          _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_6__.Ay)('span', {
            name: 'MuiTypography',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.root,
                ownerState.variant && styles[ownerState.variant],
                'inherit' !== ownerState.align &&
                  styles[
                    `align${(0, _utils_capitalize_js__WEBPACK_IMPORTED_MODULE_3__.A)(ownerState.align)}`
                  ],
                ownerState.noWrap && styles.noWrap,
                ownerState.gutterBottom && styles.gutterBottom,
                ownerState.paragraph && styles.paragraph,
              ]
            },
          })(
            (0, _utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_7__.A)(
              ({ theme }) => ({
                margin: 0,
                variants: [
                  {
                    props: { variant: 'inherit' },
                    style: {
                      font: 'inherit',
                      lineHeight: 'inherit',
                      letterSpacing: 'inherit',
                    },
                  },
                  ...Object.entries(theme.typography)
                    .filter(
                      ([variant, value]) =>
                        'inherit' !== variant &&
                        value &&
                        'object' == typeof value
                    )
                    .map(([variant, value]) => ({
                      props: { variant },
                      style: value,
                    })),
                  ...Object.entries(theme.palette)
                    .filter(
                      (0,
                      _utils_createSimplePaletteValueFilter_js__WEBPACK_IMPORTED_MODULE_8__.A)()
                    )
                    .map(([color]) => ({
                      props: { color },
                      style: {
                        color: (theme.vars || theme).palette[color].main,
                      },
                    })),
                  ...Object.entries(theme.palette?.text || {})
                    .filter(([, value]) => 'string' == typeof value)
                    .map(([color]) => ({
                      props: {
                        color: `text${(0, _utils_capitalize_js__WEBPACK_IMPORTED_MODULE_3__.A)(color)}`,
                      },
                      style: {
                        color: (theme.vars || theme).palette.text[color],
                      },
                    })),
                  {
                    props: ({ ownerState }) => 'inherit' !== ownerState.align,
                    style: { textAlign: 'var(--Typography-textAlign)' },
                  },
                  {
                    props: ({ ownerState }) => ownerState.noWrap,
                    style: {
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    },
                  },
                  {
                    props: ({ ownerState }) => ownerState.gutterBottom,
                    style: { marginBottom: '0.35em' },
                  },
                  {
                    props: ({ ownerState }) => ownerState.paragraph,
                    style: { marginBottom: 16 },
                  },
                ],
              })
            )
          ),
          defaultVariantMapping = {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            subtitle1: 'h6',
            subtitle2: 'h6',
            body1: 'p',
            body2: 'p',
            inherit: 'p',
          },
          __WEBPACK_DEFAULT_EXPORT__ =
            react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
              function Typography(inProps, ref) {
                const { color, ...themeProps } = (0,
                  _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_9__.b)(
                    { props: inProps, name: 'MuiTypography' }
                  ),
                  props = extendSxProp({
                    ...themeProps,
                    ...(!v6Colors[color] && { color }),
                  }),
                  {
                    align = 'inherit',
                    className,
                    component,
                    gutterBottom = !1,
                    noWrap = !1,
                    paragraph = !1,
                    variant = 'body1',
                    variantMapping = defaultVariantMapping,
                    ...other
                  } = props,
                  ownerState = {
                    ...props,
                    align,
                    color,
                    className,
                    component,
                    gutterBottom,
                    noWrap,
                    paragraph,
                    variant,
                    variantMapping,
                  },
                  Component =
                    component ||
                    (paragraph
                      ? 'p'
                      : variantMapping[variant] ||
                        defaultVariantMapping[variant]) ||
                    'span',
                  classes = (ownerState => {
                    const {
                        align,
                        gutterBottom,
                        noWrap,
                        paragraph,
                        variant,
                        classes,
                      } = ownerState,
                      slots = {
                        root: [
                          'root',
                          variant,
                          'inherit' !== ownerState.align &&
                            `align${(0, _utils_capitalize_js__WEBPACK_IMPORTED_MODULE_3__.A)(align)}`,
                          gutterBottom && 'gutterBottom',
                          noWrap && 'noWrap',
                          paragraph && 'paragraph',
                        ],
                      }
                    return (0,
                    _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_4__.A)(
                      slots,
                      _typographyClasses_js__WEBPACK_IMPORTED_MODULE_5__.y,
                      classes
                    )
                  })(ownerState)
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  TypographyRoot,
                  {
                    as: Component,
                    ref,
                    className: (0, clsx__WEBPACK_IMPORTED_MODULE_10__.A)(
                      classes.root,
                      className
                    ),
                    ...other,
                    ownerState,
                    style: {
                      ...('inherit' !== align && {
                        '--Typography-textAlign': align,
                      }),
                      ...other.style,
                    },
                  }
                )
              }
            )
      },
      './node_modules/@mui/material/Typography/typographyClasses.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
          y: () => getTypographyUtilityClass,
        })
        var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
            ),
          _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
            )
        function getTypographyUtilityClass(slot) {
          return (0,
          _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Ay)(
            'MuiTypography',
            slot
          )
        }
        const __WEBPACK_DEFAULT_EXPORT__ = (0,
        _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.A)(
          'MuiTypography',
          [
            'root',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'subtitle1',
            'subtitle2',
            'body1',
            'body2',
            'inherit',
            'button',
            'caption',
            'overline',
            'alignLeft',
            'alignRight',
            'alignCenter',
            'alignJustify',
            'noWrap',
            'gutterBottom',
            'paragraph',
          ]
        )
      },
      './node_modules/@mui/material/zero-styled/index.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          Dp: () => globalCss,
          Dg: () => internal_createExtendSxProp,
        })
        __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
        var extendSxProp = __webpack_require__(
            './node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js'
          ),
          emotion_react_browser_esm = __webpack_require__(
            './node_modules/@emotion/react/dist/emotion-react.browser.esm.js'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        function GlobalStyles(props) {
          const { styles, defaultTheme = {} } = props,
            globalStyles =
              'function' == typeof styles
                ? themeInput =>
                    styles(
                      (function isEmpty(obj) {
                        return null == obj || 0 === Object.keys(obj).length
                      })(themeInput)
                        ? defaultTheme
                        : themeInput
                    )
                : styles
          return (0, jsx_runtime.jsx)(emotion_react_browser_esm.mL, {
            styles: globalStyles,
          })
        }
        var useTheme = __webpack_require__(
          './node_modules/@mui/system/esm/useTheme/useTheme.js'
        )
        const esm_GlobalStyles_GlobalStyles =
          function GlobalStyles_GlobalStyles({
            styles,
            themeId,
            defaultTheme = {},
          }) {
            const upperTheme = (0, useTheme.A)(defaultTheme),
              globalStyles =
                'function' == typeof styles
                  ? styles((themeId && upperTheme[themeId]) || upperTheme)
                  : styles
            return (0, jsx_runtime.jsx)(GlobalStyles, { styles: globalStyles })
          }
        var defaultTheme = __webpack_require__(
            './node_modules/@mui/material/styles/defaultTheme.js'
          ),
          identifier = __webpack_require__(
            './node_modules/@mui/material/styles/identifier.js'
          )
        const material_GlobalStyles_GlobalStyles =
          function GlobalStyles_GlobalStyles_GlobalStyles(props) {
            return (0, jsx_runtime.jsx)(esm_GlobalStyles_GlobalStyles, {
              ...props,
              defaultTheme: defaultTheme.A,
              themeId: identifier.A,
            })
          }
        function globalCss(styles) {
          return function GlobalStylesWrapper(props) {
            return (0, jsx_runtime.jsx)(material_GlobalStyles_GlobalStyles, {
              styles:
                'function' == typeof styles
                  ? theme => styles({ theme, ...props })
                  : styles,
            })
          }
        }
        function internal_createExtendSxProp() {
          return extendSxProp.A
        }
      },
      './node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => extendSxProp })
        var _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/deepmerge/deepmerge.js'
            ),
          _defaultSxConfig_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js'
            )
        const splitProps = props => {
          const result = { systemProps: {}, otherProps: {} },
            config =
              props?.theme?.unstable_sxConfig ??
              _defaultSxConfig_js__WEBPACK_IMPORTED_MODULE_0__.A
          return (
            Object.keys(props).forEach(prop => {
              config[prop]
                ? (result.systemProps[prop] = props[prop])
                : (result.otherProps[prop] = props[prop])
            }),
            result
          )
        }
        function extendSxProp(props) {
          const { sx: inSx, ...other } = props,
            { systemProps, otherProps } = splitProps(other)
          let finalSx
          return (
            (finalSx = Array.isArray(inSx)
              ? [systemProps, ...inSx]
              : 'function' == typeof inSx
                ? (...args) => {
                    const result = inSx(...args)
                    return (0,
                    _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_1__.Q)(result)
                      ? { ...systemProps, ...result }
                      : systemProps
                  }
                : { ...systemProps, ...inSx }),
            { ...otherProps, sx: finalSx }
          )
        }
      },
      './node_modules/@mui/system/esm/useThemeWithoutDefault/useThemeWithoutDefault.js':
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.d(__webpack_exports__, {
            A: () => __WEBPACK_DEFAULT_EXPORT__,
          })
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              './node_modules/next/dist/compiled/react/index.js'
            ),
            _mui_styled_engine__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(
                './node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js'
              )
          const __WEBPACK_DEFAULT_EXPORT__ = function useTheme(
            defaultTheme = null
          ) {
            const contextTheme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(
              _mui_styled_engine__WEBPACK_IMPORTED_MODULE_1__.T
            )
            return !contextTheme ||
              (function isObjectEmpty(obj) {
                return 0 === Object.keys(obj).length
              })(contextTheme)
              ? defaultTheme
              : contextTheme
          }
        },
      './node_modules/@mui/system/esm/useTheme/useTheme.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _createTheme_index_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/@mui/system/esm/createTheme/createTheme.js'
            ),
          _useThemeWithoutDefault_index_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/@mui/system/esm/useThemeWithoutDefault/useThemeWithoutDefault.js'
            )
        const systemDefaultTheme = (0,
        _createTheme_index_js__WEBPACK_IMPORTED_MODULE_0__.A)()
        const __WEBPACK_DEFAULT_EXPORT__ = function useTheme(
          defaultTheme = systemDefaultTheme
        ) {
          return (0,
          _useThemeWithoutDefault_index_js__WEBPACK_IMPORTED_MODULE_1__.A)(
            defaultTheme
          )
        }
      },
      './src/components/Typography/typography.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            InterH1CustomColor: () => InterH1CustomColor,
            Interactive: () => Interactive,
            MerriParagraph: () => MerriParagraph,
            SubVariants: () => SubVariants,
            TextAndChildren: () => TextAndChildren,
            UsingMuiVariantFallback: () => UsingMuiVariantFallback,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/next/dist/compiled/react/jsx-runtime.js'
            ),
          _storybook_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Typography/index.tsx'
          ),
          _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js')
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/Typography',
            component: _index__WEBPACK_IMPORTED_MODULE_2__.A,
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Create Storybook metadata' } },
            },
          },
          Basic = {
            args: { text: 'Hello, world!', fontvariant: 'arapeyh3' },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                canvas.getByText('Hello, world!')
              ).toBeInTheDocument()
            },
          },
          InterH1CustomColor = {
            args: {
              text: 'Large heading in Inter',
              fontvariant: 'interh1',
              fontcolor: '#d32f2f',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                canvas.getByText('Large heading in Inter')
              ).toBeInTheDocument()
            },
          },
          MerriParagraph = {
            args: {
              text: 'This is a Merriweather paragraph with normal weight.',
              fontvariant: 'merriparagraph',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                canvas.getByText(
                  'This is a Merriweather paragraph with normal weight.'
                )
              ).toBeInTheDocument()
            },
          },
          SubVariants = {
            render: () =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
                {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_2__.A,
                      {
                        text: 'Arapey Helperheader',
                        fontvariant: 'arapeyhelperheader',
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_2__.A,
                      {
                        text: 'Inter Helperfooter',
                        fontvariant: 'interhelperfooter',
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_2__.A,
                      { text: 'Merri H6', fontvariant: 'merrih6' }
                    ),
                  ],
                }
              ),
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                canvas.getByText('Arapey Helperheader')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                  canvas.getByText('Inter Helperfooter')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                  canvas.getByText('Merri H6')
                ).toBeInTheDocument()
            },
          },
          UsingMuiVariantFallback = {
            args: {
              text: 'Default MUI h4 fallback',
              variant: 'h4',
              fontcolor: '#1976d2',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                canvas.getByText('Default MUI h4 fallback')
              ).toBeInTheDocument()
            },
          },
          TextAndChildren = {
            render: () =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _index__WEBPACK_IMPORTED_MODULE_2__.A,
                {
                  fontvariant: 'merriparagraph',
                  fontcolor: '#9c27b0',
                  children: [
                    'This content is from ',
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      'strong',
                      { children: 'children' }
                    ),
                    ', plus text prop:',
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      'em',
                      {
                        style: { marginLeft: '8px', color: '#000' },
                        children: 'Hello!',
                      }
                    ),
                  ],
                }
              ),
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                canvas.getByText(
                  'This content is from children, plus text prop:Hello!'
                )
              ).toBeInTheDocument()
            },
          },
          Interactive = {
            args: { text: 'Click me!', fontvariant: 'interh5' },
            play: async ({ canvasElement }) => {
              const textEl = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(
                canvasElement
              ).getByText('Click me!')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(
                textEl
              )
            },
          },
          __namedExportsOrder = [
            'Basic',
            'InterH1CustomColor',
            'MerriParagraph',
            'SubVariants',
            'UsingMuiVariantFallback',
            'TextAndChildren',
            'Interactive',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    text: \'Hello, world!\',\n    fontvariant: \'arapeyh3\' // Using "arapey" family with "h3" variant\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // The text "Hello, world!" should appear\n    expect(canvas.getByText(\'Hello, world!\')).toBeInTheDocument();\n  }\n}',
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story:
                '1) Basic usage with default text (no custom color)\r\n   No `await` => remove `async`.',
              ...Basic.parameters?.docs?.description,
            },
          },
        }),
          (InterH1CustomColor.parameters = {
            ...InterH1CustomColor.parameters,
            docs: {
              ...InterH1CustomColor.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    text: 'Large heading in Inter',\n    fontvariant: 'interh1',\n    // \"inter\" + \"h1\"\n    fontcolor: '#d32f2f' // Red\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // The text \"Large heading in Inter\" should appear in red color\n    expect(canvas.getByText('Large heading in Inter')).toBeInTheDocument();\n  }\n}",
                ...InterH1CustomColor.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) Inter h1 with custom color\r\n   No `await` => remove `async`.',
                ...InterH1CustomColor.parameters?.docs?.description,
              },
            },
          }),
          (MerriParagraph.parameters = {
            ...MerriParagraph.parameters,
            docs: {
              ...MerriParagraph.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    text: 'This is a Merriweather paragraph with normal weight.',\n    fontvariant: 'merriparagraph'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByText('This is a Merriweather paragraph with normal weight.')).toBeInTheDocument();\n  }\n}",
                ...MerriParagraph.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Merriweather paragraph\r\n   No `await` => remove `async`.',
                ...MerriParagraph.parameters?.docs?.description,
              },
            },
          }),
          (SubVariants.parameters = {
            ...SubVariants.parameters,
            docs: {
              ...SubVariants.parameters?.docs,
              source: {
                originalSource:
                  '{\n  render: () => <Box display="flex" flexDirection="column" gap={1}>\r\n      <Typography text="Arapey Helperheader" fontvariant="arapeyhelperheader" />\r\n      <Typography text="Inter Helperfooter" fontvariant="interhelperfooter" />\r\n      <Typography text="Merri H6" fontvariant="merrih6" />\r\n    </Box>,\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByText(\'Arapey Helperheader\')).toBeInTheDocument();\n    expect(canvas.getByText(\'Inter Helperfooter\')).toBeInTheDocument();\n    expect(canvas.getByText(\'Merri H6\')).toBeInTheDocument();\n  }\n}',
                ...SubVariants.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) Additional subvariants (helperfooter, helperheader)\r\n   No `await` => remove `async`.',
                ...SubVariants.parameters?.docs?.description,
              },
            },
          }),
          (UsingMuiVariantFallback.parameters = {
            ...UsingMuiVariantFallback.parameters,
            docs: {
              ...UsingMuiVariantFallback.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    text: 'Default MUI h4 fallback',\n    variant: 'h4',\n    // Uses MUI's built-in variant\n    fontcolor: '#1976d2' // Blue\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByText('Default MUI h4 fallback')).toBeInTheDocument();\n  }\n}",
                ...UsingMuiVariantFallback.parameters?.docs?.source,
              },
              description: {
                story:
                  "5) Using 'variant' prop from MUI (fallback)\r\n   No `await` => remove `async`.",
                ...UsingMuiVariantFallback.parameters?.docs?.description,
              },
            },
          }),
          (TextAndChildren.parameters = {
            ...TextAndChildren.parameters,
            docs: {
              ...TextAndChildren.parameters?.docs,
              source: {
                originalSource:
                  '{\n  render: () => <Typography fontvariant="merriparagraph" fontcolor="#9c27b0">\r\n      This content is from <strong>children</strong>, plus text prop:\r\n      <em style={{\n      marginLeft: \'8px\',\n      color: \'#000\'\n    }}>Hello!</em>\r\n    </Typography>,\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // The combined text includes "This content is from children, plus text prop:Hello!"\n    expect(canvas.getByText(\'This content is from children, plus text prop:Hello!\')).toBeInTheDocument();\n  }\n  // No explicit args since we override render\n}',
                ...TextAndChildren.parameters?.docs?.source,
              },
              description: {
                story:
                  '6) Combining text & children\r\n   No `await` => remove `async`.',
                ...TextAndChildren.parameters?.docs?.description,
              },
            },
          }),
          (Interactive.parameters = {
            ...Interactive.parameters,
            docs: {
              ...Interactive.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    text: 'Click me!',\n    fontvariant: 'interh5'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const textEl = canvas.getByText('Click me!');\n    // We'll do a quick user click\n    await userEvent.click(textEl);\n    // No state changes, but ensures no error occurs\n  }\n}",
                ...Interactive.parameters?.docs?.source,
              },
              description: {
                story:
                  '7) Interactive test: clicking or focusing\r\n   We do `await userEvent.click(textEl)`, so keep `async`.',
                ...Interactive.parameters?.docs?.description,
              },
            },
          })
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
