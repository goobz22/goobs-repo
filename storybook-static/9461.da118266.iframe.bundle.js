'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [9461],
    {
      './node_modules/@mui/material/Paper/Paper.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Paper_Paper })
        var react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
          composeClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/composeClasses/composeClasses.js'
          ),
          colorManipulator = __webpack_require__(
            './node_modules/@mui/system/esm/colorManipulator/colorManipulator.js'
          ),
          styled = __webpack_require__(
            './node_modules/@mui/material/styles/styled.js'
          ),
          useTheme = __webpack_require__(
            './node_modules/@mui/material/styles/useTheme.js'
          ),
          memoTheme = __webpack_require__(
            './node_modules/@mui/material/utils/memoTheme.js'
          ),
          DefaultPropsProvider = __webpack_require__(
            './node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'
          ),
          getOverlayAlpha = __webpack_require__(
            './node_modules/@mui/material/styles/getOverlayAlpha.js'
          ),
          generateUtilityClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          generateUtilityClass = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
          )
        function getPaperUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiPaper', slot)
        }
        ;(0, generateUtilityClasses.A)('MuiPaper', [
          'root',
          'rounded',
          'outlined',
          'elevation',
          'elevation0',
          'elevation1',
          'elevation2',
          'elevation3',
          'elevation4',
          'elevation5',
          'elevation6',
          'elevation7',
          'elevation8',
          'elevation9',
          'elevation10',
          'elevation11',
          'elevation12',
          'elevation13',
          'elevation14',
          'elevation15',
          'elevation16',
          'elevation17',
          'elevation18',
          'elevation19',
          'elevation20',
          'elevation21',
          'elevation22',
          'elevation23',
          'elevation24',
        ])
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const PaperRoot = (0, styled.Ay)('div', {
            name: 'MuiPaper',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.root,
                styles[ownerState.variant],
                !ownerState.square && styles.rounded,
                'elevation' === ownerState.variant &&
                  styles[`elevation${ownerState.elevation}`],
              ]
            },
          })(
            (0, memoTheme.A)(({ theme }) => ({
              backgroundColor: (theme.vars || theme).palette.background.paper,
              color: (theme.vars || theme).palette.text.primary,
              transition: theme.transitions.create('box-shadow'),
              variants: [
                {
                  props: ({ ownerState }) => !ownerState.square,
                  style: { borderRadius: theme.shape.borderRadius },
                },
                {
                  props: { variant: 'outlined' },
                  style: {
                    border: `1px solid ${(theme.vars || theme).palette.divider}`,
                  },
                },
                {
                  props: { variant: 'elevation' },
                  style: {
                    boxShadow: 'var(--Paper-shadow)',
                    backgroundImage: 'var(--Paper-overlay)',
                  },
                },
              ],
            }))
          ),
          Paper_Paper = react.forwardRef(function Paper(inProps, ref) {
            const props = (0, DefaultPropsProvider.b)({
                props: inProps,
                name: 'MuiPaper',
              }),
              theme = (0, useTheme.A)(),
              {
                className,
                component = 'div',
                elevation = 1,
                square = !1,
                variant = 'elevation',
                ...other
              } = props,
              ownerState = { ...props, component, elevation, square, variant },
              classes = (ownerState => {
                const { square, elevation, variant, classes } = ownerState,
                  slots = {
                    root: [
                      'root',
                      variant,
                      !square && 'rounded',
                      'elevation' === variant && `elevation${elevation}`,
                    ],
                  }
                return (0, composeClasses.A)(
                  slots,
                  getPaperUtilityClass,
                  classes
                )
              })(ownerState)
            return (0, jsx_runtime.jsx)(PaperRoot, {
              as: component,
              ownerState,
              className: (0, clsx.A)(classes.root, className),
              ref,
              ...other,
              style: {
                ...('elevation' === variant && {
                  '--Paper-shadow': (theme.vars || theme).shadows[elevation],
                  ...(theme.vars && {
                    '--Paper-overlay': theme.vars.overlays?.[elevation],
                  }),
                  ...(!theme.vars &&
                    'dark' === theme.palette.mode && {
                      '--Paper-overlay': `linear-gradient(${(0, colorManipulator.X4)('#fff', (0, getOverlayAlpha.A)(elevation))}, ${(0, colorManipulator.X4)('#fff', (0, getOverlayAlpha.A)(elevation))})`,
                    }),
                }),
                ...other.style,
              },
            })
          })
      },
      './node_modules/@mui/material/SvgIcon/SvgIcon.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => SvgIcon_SvgIcon })
        var react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
          composeClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/composeClasses/composeClasses.js'
          ),
          capitalize = __webpack_require__(
            './node_modules/@mui/material/utils/capitalize.js'
          ),
          styled = __webpack_require__(
            './node_modules/@mui/material/styles/styled.js'
          ),
          memoTheme = __webpack_require__(
            './node_modules/@mui/material/utils/memoTheme.js'
          ),
          DefaultPropsProvider = __webpack_require__(
            './node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'
          ),
          generateUtilityClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          generateUtilityClass = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
          )
        function getSvgIconUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiSvgIcon', slot)
        }
        ;(0, generateUtilityClasses.A)('MuiSvgIcon', [
          'root',
          'colorPrimary',
          'colorSecondary',
          'colorAction',
          'colorError',
          'colorDisabled',
          'fontSizeInherit',
          'fontSizeSmall',
          'fontSizeMedium',
          'fontSizeLarge',
        ])
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const SvgIconRoot = (0, styled.Ay)('svg', {
            name: 'MuiSvgIcon',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.root,
                'inherit' !== ownerState.color &&
                  styles[`color${(0, capitalize.A)(ownerState.color)}`],
                styles[`fontSize${(0, capitalize.A)(ownerState.fontSize)}`],
              ]
            },
          })(
            (0, memoTheme.A)(({ theme }) => ({
              userSelect: 'none',
              width: '1em',
              height: '1em',
              display: 'inline-block',
              flexShrink: 0,
              transition: theme.transitions?.create?.('fill', {
                duration: (theme.vars ?? theme).transitions?.duration?.shorter,
              }),
              variants: [
                {
                  props: props => !props.hasSvgAsChild,
                  style: { fill: 'currentColor' },
                },
                {
                  props: { fontSize: 'inherit' },
                  style: { fontSize: 'inherit' },
                },
                {
                  props: { fontSize: 'small' },
                  style: {
                    fontSize: theme.typography?.pxToRem?.(20) || '1.25rem',
                  },
                },
                {
                  props: { fontSize: 'medium' },
                  style: {
                    fontSize: theme.typography?.pxToRem?.(24) || '1.5rem',
                  },
                },
                {
                  props: { fontSize: 'large' },
                  style: {
                    fontSize: theme.typography?.pxToRem?.(35) || '2.1875rem',
                  },
                },
                ...Object.entries((theme.vars ?? theme).palette)
                  .filter(([, value]) => value && value.main)
                  .map(([color]) => ({
                    props: { color },
                    style: {
                      color: (theme.vars ?? theme).palette?.[color]?.main,
                    },
                  })),
                {
                  props: { color: 'action' },
                  style: {
                    color: (theme.vars ?? theme).palette?.action?.active,
                  },
                },
                {
                  props: { color: 'disabled' },
                  style: {
                    color: (theme.vars ?? theme).palette?.action?.disabled,
                  },
                },
                { props: { color: 'inherit' }, style: { color: void 0 } },
              ],
            }))
          ),
          SvgIcon = react.forwardRef(function SvgIcon(inProps, ref) {
            const props = (0, DefaultPropsProvider.b)({
                props: inProps,
                name: 'MuiSvgIcon',
              }),
              {
                children,
                className,
                color = 'inherit',
                component = 'svg',
                fontSize = 'medium',
                htmlColor,
                inheritViewBox = !1,
                titleAccess,
                viewBox = '0 0 24 24',
                ...other
              } = props,
              hasSvgAsChild =
                react.isValidElement(children) && 'svg' === children.type,
              ownerState = {
                ...props,
                color,
                component,
                fontSize,
                instanceFontSize: inProps.fontSize,
                inheritViewBox,
                viewBox,
                hasSvgAsChild,
              },
              more = {}
            inheritViewBox || (more.viewBox = viewBox)
            const classes = (ownerState => {
              const { color, fontSize, classes } = ownerState,
                slots = {
                  root: [
                    'root',
                    'inherit' !== color && `color${(0, capitalize.A)(color)}`,
                    `fontSize${(0, capitalize.A)(fontSize)}`,
                  ],
                }
              return (0, composeClasses.A)(
                slots,
                getSvgIconUtilityClass,
                classes
              )
            })(ownerState)
            return (0, jsx_runtime.jsxs)(SvgIconRoot, {
              as: component,
              className: (0, clsx.A)(classes.root, className),
              focusable: 'false',
              color: htmlColor,
              'aria-hidden': !titleAccess || void 0,
              role: titleAccess ? 'img' : void 0,
              ref,
              ...more,
              ...other,
              ...(hasSvgAsChild && children.props),
              ownerState,
              children: [
                hasSvgAsChild ? children.props.children : children,
                titleAccess
                  ? (0, jsx_runtime.jsx)('title', { children: titleAccess })
                  : null,
              ],
            })
          })
        SvgIcon.muiName = 'SvgIcon'
        const SvgIcon_SvgIcon = SvgIcon
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
      './node_modules/@mui/material/utils/createSvgIcon.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => createSvgIcon })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          _SvgIcon_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/@mui/material/SvgIcon/SvgIcon.js'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        function createSvgIcon(path, displayName) {
          function Component(props, ref) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
              _SvgIcon_index_js__WEBPACK_IMPORTED_MODULE_2__.A,
              {
                'data-testid': `${displayName}Icon`,
                ref,
                ...props,
                children: path,
              }
            )
          }
          return (
            (Component.muiName =
              _SvgIcon_index_js__WEBPACK_IMPORTED_MODULE_2__.A.muiName),
            react__WEBPACK_IMPORTED_MODULE_0__.memo(
              react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Component)
            )
          )
        }
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
    },
  ]
)
