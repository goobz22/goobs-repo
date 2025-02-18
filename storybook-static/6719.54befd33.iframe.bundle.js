'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [6719],
    {
      './node_modules/@mui/material/AppBar/AppBar.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => AppBar_AppBar })
        var react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
          composeClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/composeClasses/composeClasses.js'
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
          capitalize = __webpack_require__(
            './node_modules/@mui/material/utils/capitalize.js'
          ),
          createSimplePaletteValueFilter = __webpack_require__(
            './node_modules/@mui/material/utils/createSimplePaletteValueFilter.js'
          ),
          Paper = __webpack_require__(
            './node_modules/@mui/material/Paper/Paper.js'
          ),
          generateUtilityClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          generateUtilityClass = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
          )
        function getAppBarUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiAppBar', slot)
        }
        ;(0, generateUtilityClasses.A)('MuiAppBar', [
          'root',
          'positionFixed',
          'positionAbsolute',
          'positionSticky',
          'positionStatic',
          'positionRelative',
          'colorDefault',
          'colorPrimary',
          'colorSecondary',
          'colorInherit',
          'colorTransparent',
          'colorError',
          'colorInfo',
          'colorSuccess',
          'colorWarning',
        ])
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const joinVars = (var1, var2) =>
            var1 ? `${var1?.replace(')', '')}, ${var2})` : var2,
          AppBarRoot = (0, styled.Ay)(Paper.A, {
            name: 'MuiAppBar',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.root,
                styles[`position${(0, capitalize.A)(ownerState.position)}`],
                styles[`color${(0, capitalize.A)(ownerState.color)}`],
              ]
            },
          })(
            (0, memoTheme.A)(({ theme }) => ({
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              boxSizing: 'border-box',
              flexShrink: 0,
              variants: [
                {
                  props: { position: 'fixed' },
                  style: {
                    position: 'fixed',
                    zIndex: (theme.vars || theme).zIndex.appBar,
                    top: 0,
                    left: 'auto',
                    right: 0,
                    '@media print': { position: 'absolute' },
                  },
                },
                {
                  props: { position: 'absolute' },
                  style: {
                    position: 'absolute',
                    zIndex: (theme.vars || theme).zIndex.appBar,
                    top: 0,
                    left: 'auto',
                    right: 0,
                  },
                },
                {
                  props: { position: 'sticky' },
                  style: {
                    position: 'sticky',
                    zIndex: (theme.vars || theme).zIndex.appBar,
                    top: 0,
                    left: 'auto',
                    right: 0,
                  },
                },
                {
                  props: { position: 'static' },
                  style: { position: 'static' },
                },
                {
                  props: { position: 'relative' },
                  style: { position: 'relative' },
                },
                {
                  props: { color: 'inherit' },
                  style: { '--AppBar-color': 'inherit' },
                },
                {
                  props: { color: 'default' },
                  style: {
                    '--AppBar-background': theme.vars
                      ? theme.vars.palette.AppBar.defaultBg
                      : theme.palette.grey[100],
                    '--AppBar-color': theme.vars
                      ? theme.vars.palette.text.primary
                      : theme.palette.getContrastText(theme.palette.grey[100]),
                    ...theme.applyStyles('dark', {
                      '--AppBar-background': theme.vars
                        ? theme.vars.palette.AppBar.defaultBg
                        : theme.palette.grey[900],
                      '--AppBar-color': theme.vars
                        ? theme.vars.palette.text.primary
                        : theme.palette.getContrastText(
                            theme.palette.grey[900]
                          ),
                    }),
                  },
                },
                ...Object.entries(theme.palette)
                  .filter(
                    (0, createSimplePaletteValueFilter.A)(['contrastText'])
                  )
                  .map(([color]) => ({
                    props: { color },
                    style: {
                      '--AppBar-background': (theme.vars ?? theme).palette[
                        color
                      ].main,
                      '--AppBar-color': (theme.vars ?? theme).palette[color]
                        .contrastText,
                    },
                  })),
                {
                  props: props =>
                    !0 === props.enableColorOnDark &&
                    !['inherit', 'transparent'].includes(props.color),
                  style: {
                    backgroundColor: 'var(--AppBar-background)',
                    color: 'var(--AppBar-color)',
                  },
                },
                {
                  props: props =>
                    !1 === props.enableColorOnDark &&
                    !['inherit', 'transparent'].includes(props.color),
                  style: {
                    backgroundColor: 'var(--AppBar-background)',
                    color: 'var(--AppBar-color)',
                    ...theme.applyStyles('dark', {
                      backgroundColor: theme.vars
                        ? joinVars(
                            theme.vars.palette.AppBar.darkBg,
                            'var(--AppBar-background)'
                          )
                        : null,
                      color: theme.vars
                        ? joinVars(
                            theme.vars.palette.AppBar.darkColor,
                            'var(--AppBar-color)'
                          )
                        : null,
                    }),
                  },
                },
                {
                  props: { color: 'transparent' },
                  style: {
                    '--AppBar-background': 'transparent',
                    '--AppBar-color': 'inherit',
                    backgroundColor: 'var(--AppBar-background)',
                    color: 'var(--AppBar-color)',
                    ...theme.applyStyles('dark', { backgroundImage: 'none' }),
                  },
                },
              ],
            }))
          ),
          AppBar_AppBar = react.forwardRef(function AppBar(inProps, ref) {
            const props = (0, DefaultPropsProvider.b)({
                props: inProps,
                name: 'MuiAppBar',
              }),
              {
                className,
                color = 'primary',
                enableColorOnDark = !1,
                position = 'fixed',
                ...other
              } = props,
              ownerState = { ...props, color, position, enableColorOnDark },
              classes = (ownerState => {
                const { color, position, classes } = ownerState,
                  slots = {
                    root: [
                      'root',
                      `color${(0, capitalize.A)(color)}`,
                      `position${(0, capitalize.A)(position)}`,
                    ],
                  }
                return (0, composeClasses.A)(
                  slots,
                  getAppBarUtilityClass,
                  classes
                )
              })(ownerState)
            return (0, jsx_runtime.jsx)(AppBarRoot, {
              square: !0,
              component: 'header',
              ownerState,
              elevation: 4,
              className: (0, clsx.A)(
                classes.root,
                className,
                'fixed' === position && 'mui-fixed'
              ),
              ref,
              ...other,
            })
          })
      },
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
      './node_modules/@mui/material/Tab/Tab.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Tab_Tab })
        var react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
          composeClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/composeClasses/composeClasses.js'
          ),
          ButtonBase = __webpack_require__(
            './node_modules/@mui/material/ButtonBase/ButtonBase.js'
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
        function getTabUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiTab', slot)
        }
        const Tab_tabClasses = (0, generateUtilityClasses.A)('MuiTab', [
          'root',
          'labelIcon',
          'textColorInherit',
          'textColorPrimary',
          'textColorSecondary',
          'selected',
          'disabled',
          'fullWidth',
          'wrapped',
          'iconWrapper',
          'icon',
        ])
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const TabRoot = (0, styled.Ay)(ButtonBase.A, {
            name: 'MuiTab',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.root,
                ownerState.label && ownerState.icon && styles.labelIcon,
                styles[`textColor${(0, capitalize.A)(ownerState.textColor)}`],
                ownerState.fullWidth && styles.fullWidth,
                ownerState.wrapped && styles.wrapped,
                { [`& .${Tab_tabClasses.iconWrapper}`]: styles.iconWrapper },
                { [`& .${Tab_tabClasses.icon}`]: styles.icon },
              ]
            },
          })(
            (0, memoTheme.A)(({ theme }) => ({
              ...theme.typography.button,
              maxWidth: 360,
              minWidth: 90,
              position: 'relative',
              minHeight: 48,
              flexShrink: 0,
              padding: '12px 16px',
              overflow: 'hidden',
              whiteSpace: 'normal',
              textAlign: 'center',
              lineHeight: 1.25,
              variants: [
                {
                  props: ({ ownerState }) =>
                    ownerState.label &&
                    ('top' === ownerState.iconPosition ||
                      'bottom' === ownerState.iconPosition),
                  style: { flexDirection: 'column' },
                },
                {
                  props: ({ ownerState }) =>
                    ownerState.label &&
                    'top' !== ownerState.iconPosition &&
                    'bottom' !== ownerState.iconPosition,
                  style: { flexDirection: 'row' },
                },
                {
                  props: ({ ownerState }) =>
                    ownerState.icon && ownerState.label,
                  style: { minHeight: 72, paddingTop: 9, paddingBottom: 9 },
                },
                {
                  props: ({ ownerState, iconPosition }) =>
                    ownerState.icon &&
                    ownerState.label &&
                    'top' === iconPosition,
                  style: {
                    [`& > .${Tab_tabClasses.icon}`]: { marginBottom: 6 },
                  },
                },
                {
                  props: ({ ownerState, iconPosition }) =>
                    ownerState.icon &&
                    ownerState.label &&
                    'bottom' === iconPosition,
                  style: { [`& > .${Tab_tabClasses.icon}`]: { marginTop: 6 } },
                },
                {
                  props: ({ ownerState, iconPosition }) =>
                    ownerState.icon &&
                    ownerState.label &&
                    'start' === iconPosition,
                  style: {
                    [`& > .${Tab_tabClasses.icon}`]: {
                      marginRight: theme.spacing(1),
                    },
                  },
                },
                {
                  props: ({ ownerState, iconPosition }) =>
                    ownerState.icon &&
                    ownerState.label &&
                    'end' === iconPosition,
                  style: {
                    [`& > .${Tab_tabClasses.icon}`]: {
                      marginLeft: theme.spacing(1),
                    },
                  },
                },
                {
                  props: { textColor: 'inherit' },
                  style: {
                    color: 'inherit',
                    opacity: 0.6,
                    [`&.${Tab_tabClasses.selected}`]: { opacity: 1 },
                    [`&.${Tab_tabClasses.disabled}`]: {
                      opacity: (theme.vars || theme).palette.action
                        .disabledOpacity,
                    },
                  },
                },
                {
                  props: { textColor: 'primary' },
                  style: {
                    color: (theme.vars || theme).palette.text.secondary,
                    [`&.${Tab_tabClasses.selected}`]: {
                      color: (theme.vars || theme).palette.primary.main,
                    },
                    [`&.${Tab_tabClasses.disabled}`]: {
                      color: (theme.vars || theme).palette.text.disabled,
                    },
                  },
                },
                {
                  props: { textColor: 'secondary' },
                  style: {
                    color: (theme.vars || theme).palette.text.secondary,
                    [`&.${Tab_tabClasses.selected}`]: {
                      color: (theme.vars || theme).palette.secondary.main,
                    },
                    [`&.${Tab_tabClasses.disabled}`]: {
                      color: (theme.vars || theme).palette.text.disabled,
                    },
                  },
                },
                {
                  props: ({ ownerState }) => ownerState.fullWidth,
                  style: {
                    flexShrink: 1,
                    flexGrow: 1,
                    flexBasis: 0,
                    maxWidth: 'none',
                  },
                },
                {
                  props: ({ ownerState }) => ownerState.wrapped,
                  style: { fontSize: theme.typography.pxToRem(12) },
                },
              ],
            }))
          ),
          Tab_Tab = react.forwardRef(function Tab(inProps, ref) {
            const props = (0, DefaultPropsProvider.b)({
                props: inProps,
                name: 'MuiTab',
              }),
              {
                className,
                disabled = !1,
                disableFocusRipple = !1,
                fullWidth,
                icon: iconProp,
                iconPosition = 'top',
                indicator,
                label,
                onChange,
                onClick,
                onFocus,
                selected,
                selectionFollowsFocus,
                textColor = 'inherit',
                value,
                wrapped = !1,
                ...other
              } = props,
              ownerState = {
                ...props,
                disabled,
                disableFocusRipple,
                selected,
                icon: !!iconProp,
                iconPosition,
                label: !!label,
                fullWidth,
                textColor,
                wrapped,
              },
              classes = (ownerState => {
                const {
                    classes,
                    textColor,
                    fullWidth,
                    wrapped,
                    icon,
                    label,
                    selected,
                    disabled,
                  } = ownerState,
                  slots = {
                    root: [
                      'root',
                      icon && label && 'labelIcon',
                      `textColor${(0, capitalize.A)(textColor)}`,
                      fullWidth && 'fullWidth',
                      wrapped && 'wrapped',
                      selected && 'selected',
                      disabled && 'disabled',
                    ],
                    icon: ['iconWrapper', 'icon'],
                  }
                return (0, composeClasses.A)(slots, getTabUtilityClass, classes)
              })(ownerState),
              icon =
                iconProp && label && react.isValidElement(iconProp)
                  ? react.cloneElement(iconProp, {
                      className: (0, clsx.A)(
                        classes.icon,
                        iconProp.props.className
                      ),
                    })
                  : iconProp
            return (0, jsx_runtime.jsxs)(TabRoot, {
              focusRipple: !disableFocusRipple,
              className: (0, clsx.A)(classes.root, className),
              ref,
              role: 'tab',
              'aria-selected': selected,
              disabled,
              onClick: event => {
                !selected && onChange && onChange(event, value),
                  onClick && onClick(event)
              },
              onFocus: event => {
                selectionFollowsFocus &&
                  !selected &&
                  onChange &&
                  onChange(event, value),
                  onFocus && onFocus(event)
              },
              ownerState,
              tabIndex: selected ? 0 : -1,
              ...other,
              children: [
                'top' === iconPosition || 'start' === iconPosition
                  ? (0, jsx_runtime.jsxs)(react.Fragment, {
                      children: [icon, label],
                    })
                  : (0, jsx_runtime.jsxs)(react.Fragment, {
                      children: [label, icon],
                    }),
                indicator,
              ],
            })
          })
      },
      './node_modules/@mui/material/Tabs/Tabs.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Tabs_Tabs })
        var react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
          composeClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/composeClasses/composeClasses.js'
          ),
          RtlProvider = __webpack_require__(
            './node_modules/@mui/system/esm/RtlProvider/index.js'
          ),
          useSlotProps = __webpack_require__(
            './node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js'
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
          debounce = __webpack_require__(
            './node_modules/@mui/material/utils/debounce.js'
          )
        function easeInOutSin(time) {
          return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2
        }
        var useEnhancedEffect = __webpack_require__(
            './node_modules/@mui/material/utils/useEnhancedEffect.js'
          ),
          ownerWindow = __webpack_require__(
            './node_modules/@mui/material/utils/ownerWindow.js'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        const styles = {
          width: 99,
          height: 99,
          position: 'absolute',
          top: -9999,
          overflow: 'scroll',
        }
        var KeyboardArrowLeft = __webpack_require__(
            './node_modules/@mui/material/internal/svg-icons/KeyboardArrowLeft.js'
          ),
          KeyboardArrowRight = __webpack_require__(
            './node_modules/@mui/material/internal/svg-icons/KeyboardArrowRight.js'
          ),
          ButtonBase = __webpack_require__(
            './node_modules/@mui/material/ButtonBase/ButtonBase.js'
          ),
          generateUtilityClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          generateUtilityClass = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
          )
        function getTabScrollButtonUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiTabScrollButton', slot)
        }
        const TabScrollButton_tabScrollButtonClasses = (0,
          generateUtilityClasses.A)('MuiTabScrollButton', [
            'root',
            'vertical',
            'horizontal',
            'disabled',
          ]),
          TabScrollButtonRoot = (0, styled.Ay)(ButtonBase.A, {
            name: 'MuiTabScrollButton',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.root,
                ownerState.orientation && styles[ownerState.orientation],
              ]
            },
          })({
            width: 40,
            flexShrink: 0,
            opacity: 0.8,
            [`&.${TabScrollButton_tabScrollButtonClasses.disabled}`]: {
              opacity: 0,
            },
            variants: [
              {
                props: { orientation: 'vertical' },
                style: {
                  width: '100%',
                  height: 40,
                  '& svg': { transform: 'var(--TabScrollButton-svgRotate)' },
                },
              },
            ],
          }),
          TabScrollButton_TabScrollButton = react.forwardRef(
            function TabScrollButton(inProps, ref) {
              const props = (0, DefaultPropsProvider.b)({
                  props: inProps,
                  name: 'MuiTabScrollButton',
                }),
                {
                  className,
                  slots = {},
                  slotProps = {},
                  direction,
                  orientation,
                  disabled,
                  ...other
                } = props,
                isRtl = (0, RtlProvider.I)(),
                ownerState = { isRtl, ...props },
                classes = (ownerState => {
                  const { classes, orientation, disabled } = ownerState,
                    slots = {
                      root: ['root', orientation, disabled && 'disabled'],
                    }
                  return (0, composeClasses.A)(
                    slots,
                    getTabScrollButtonUtilityClass,
                    classes
                  )
                })(ownerState),
                StartButtonIcon =
                  slots.StartScrollButtonIcon ?? KeyboardArrowLeft.A,
                EndButtonIcon =
                  slots.EndScrollButtonIcon ?? KeyboardArrowRight.A,
                startButtonIconProps = (0, useSlotProps.A)({
                  elementType: StartButtonIcon,
                  externalSlotProps: slotProps.startScrollButtonIcon,
                  additionalProps: { fontSize: 'small' },
                  ownerState,
                }),
                endButtonIconProps = (0, useSlotProps.A)({
                  elementType: EndButtonIcon,
                  externalSlotProps: slotProps.endScrollButtonIcon,
                  additionalProps: { fontSize: 'small' },
                  ownerState,
                })
              return (0, jsx_runtime.jsx)(TabScrollButtonRoot, {
                component: 'div',
                className: (0, clsx.A)(classes.root, className),
                ref,
                role: null,
                ownerState,
                tabIndex: null,
                ...other,
                style: {
                  ...other.style,
                  ...('vertical' === orientation && {
                    '--TabScrollButton-svgRotate': `rotate(${isRtl ? -90 : 90}deg)`,
                  }),
                },
                children:
                  'left' === direction
                    ? (0, jsx_runtime.jsx)(StartButtonIcon, {
                        ...startButtonIconProps,
                      })
                    : (0, jsx_runtime.jsx)(EndButtonIcon, {
                        ...endButtonIconProps,
                      }),
              })
            }
          )
        var useEventCallback = __webpack_require__(
          './node_modules/@mui/material/utils/useEventCallback.js'
        )
        function getTabsUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiTabs', slot)
        }
        const Tabs_tabsClasses = (0, generateUtilityClasses.A)('MuiTabs', [
          'root',
          'vertical',
          'flexContainer',
          'flexContainerVertical',
          'centered',
          'scroller',
          'fixed',
          'scrollableX',
          'scrollableY',
          'hideScrollbar',
          'scrollButtons',
          'scrollButtonsHideMobile',
          'indicator',
        ])
        var ownerDocument = __webpack_require__(
          './node_modules/@mui/material/utils/ownerDocument.js'
        )
        const nextItem = (list, item) =>
            list === item
              ? list.firstChild
              : item && item.nextElementSibling
                ? item.nextElementSibling
                : list.firstChild,
          previousItem = (list, item) =>
            list === item
              ? list.lastChild
              : item && item.previousElementSibling
                ? item.previousElementSibling
                : list.lastChild,
          moveFocus = (list, currentFocus, traversalFunction) => {
            let wrappedOnce = !1,
              nextFocus = traversalFunction(list, currentFocus)
            for (; nextFocus; ) {
              if (nextFocus === list.firstChild) {
                if (wrappedOnce) return
                wrappedOnce = !0
              }
              const nextFocusDisabled =
                nextFocus.disabled ||
                'true' === nextFocus.getAttribute('aria-disabled')
              if (nextFocus.hasAttribute('tabindex') && !nextFocusDisabled)
                return void nextFocus.focus()
              nextFocus = traversalFunction(list, nextFocus)
            }
          },
          TabsRoot = (0, styled.Ay)('div', {
            name: 'MuiTabs',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                {
                  [`& .${Tabs_tabsClasses.scrollButtons}`]:
                    styles.scrollButtons,
                },
                {
                  [`& .${Tabs_tabsClasses.scrollButtons}`]:
                    ownerState.scrollButtonsHideMobile &&
                    styles.scrollButtonsHideMobile,
                },
                styles.root,
                ownerState.vertical && styles.vertical,
              ]
            },
          })(
            (0, memoTheme.A)(({ theme }) => ({
              overflow: 'hidden',
              minHeight: 48,
              WebkitOverflowScrolling: 'touch',
              display: 'flex',
              variants: [
                {
                  props: ({ ownerState }) => ownerState.vertical,
                  style: { flexDirection: 'column' },
                },
                {
                  props: ({ ownerState }) => ownerState.scrollButtonsHideMobile,
                  style: {
                    [`& .${Tabs_tabsClasses.scrollButtons}`]: {
                      [theme.breakpoints.down('sm')]: { display: 'none' },
                    },
                  },
                },
              ],
            }))
          ),
          TabsScroller = (0, styled.Ay)('div', {
            name: 'MuiTabs',
            slot: 'Scroller',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.scroller,
                ownerState.fixed && styles.fixed,
                ownerState.hideScrollbar && styles.hideScrollbar,
                ownerState.scrollableX && styles.scrollableX,
                ownerState.scrollableY && styles.scrollableY,
              ]
            },
          })({
            position: 'relative',
            display: 'inline-block',
            flex: '1 1 auto',
            whiteSpace: 'nowrap',
            variants: [
              {
                props: ({ ownerState }) => ownerState.fixed,
                style: { overflowX: 'hidden', width: '100%' },
              },
              {
                props: ({ ownerState }) => ownerState.hideScrollbar,
                style: {
                  scrollbarWidth: 'none',
                  '&::-webkit-scrollbar': { display: 'none' },
                },
              },
              {
                props: ({ ownerState }) => ownerState.scrollableX,
                style: { overflowX: 'auto', overflowY: 'hidden' },
              },
              {
                props: ({ ownerState }) => ownerState.scrollableY,
                style: { overflowY: 'auto', overflowX: 'hidden' },
              },
            ],
          }),
          FlexContainer = (0, styled.Ay)('div', {
            name: 'MuiTabs',
            slot: 'FlexContainer',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.flexContainer,
                ownerState.vertical && styles.flexContainerVertical,
                ownerState.centered && styles.centered,
              ]
            },
          })({
            display: 'flex',
            variants: [
              {
                props: ({ ownerState }) => ownerState.vertical,
                style: { flexDirection: 'column' },
              },
              {
                props: ({ ownerState }) => ownerState.centered,
                style: { justifyContent: 'center' },
              },
            ],
          }),
          TabsIndicator = (0, styled.Ay)('span', {
            name: 'MuiTabs',
            slot: 'Indicator',
            overridesResolver: (props, styles) => styles.indicator,
          })(
            (0, memoTheme.A)(({ theme }) => ({
              position: 'absolute',
              height: 2,
              bottom: 0,
              width: '100%',
              transition: theme.transitions.create(),
              variants: [
                {
                  props: { indicatorColor: 'primary' },
                  style: {
                    backgroundColor: (theme.vars || theme).palette.primary.main,
                  },
                },
                {
                  props: { indicatorColor: 'secondary' },
                  style: {
                    backgroundColor: (theme.vars || theme).palette.secondary
                      .main,
                  },
                },
                {
                  props: ({ ownerState }) => ownerState.vertical,
                  style: { height: '100%', width: 2, right: 0 },
                },
              ],
            }))
          ),
          TabsScrollbarSize = (0, styled.Ay)(function ScrollbarSize(props) {
            const { onChange, ...other } = props,
              scrollbarHeight = react.useRef(),
              nodeRef = react.useRef(null),
              setMeasurements = () => {
                scrollbarHeight.current =
                  nodeRef.current.offsetHeight - nodeRef.current.clientHeight
              }
            return (
              (0, useEnhancedEffect.A)(() => {
                const handleResize = (0, debounce.A)(() => {
                    const prevHeight = scrollbarHeight.current
                    setMeasurements(),
                      prevHeight !== scrollbarHeight.current &&
                        onChange(scrollbarHeight.current)
                  }),
                  containerWindow = (0, ownerWindow.A)(nodeRef.current)
                return (
                  containerWindow.addEventListener('resize', handleResize),
                  () => {
                    handleResize.clear(),
                      containerWindow.removeEventListener(
                        'resize',
                        handleResize
                      )
                  }
                )
              }, [onChange]),
              react.useEffect(() => {
                setMeasurements(), onChange(scrollbarHeight.current)
              }, [onChange]),
              (0, jsx_runtime.jsx)('div', {
                style: styles,
                ...other,
                ref: nodeRef,
              })
            )
          })({
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }),
          defaultIndicatorStyle = {}
        const Tabs_Tabs = react.forwardRef(function Tabs(inProps, ref) {
          const props = (0, DefaultPropsProvider.b)({
              props: inProps,
              name: 'MuiTabs',
            }),
            theme = (0, useTheme.A)(),
            isRtl = (0, RtlProvider.I)(),
            {
              'aria-label': ariaLabel,
              'aria-labelledby': ariaLabelledBy,
              action,
              centered = !1,
              children: childrenProp,
              className,
              component = 'div',
              allowScrollButtonsMobile = !1,
              indicatorColor = 'primary',
              onChange,
              orientation = 'horizontal',
              ScrollButtonComponent = TabScrollButton_TabScrollButton,
              scrollButtons = 'auto',
              selectionFollowsFocus,
              slots = {},
              slotProps = {},
              TabIndicatorProps = {},
              TabScrollButtonProps = {},
              textColor = 'primary',
              value,
              variant = 'standard',
              visibleScrollbar = !1,
              ...other
            } = props,
            scrollable = 'scrollable' === variant,
            vertical = 'vertical' === orientation,
            scrollStart = vertical ? 'scrollTop' : 'scrollLeft',
            start = vertical ? 'top' : 'left',
            end = vertical ? 'bottom' : 'right',
            clientSize = vertical ? 'clientHeight' : 'clientWidth',
            size = vertical ? 'height' : 'width',
            ownerState = {
              ...props,
              component,
              allowScrollButtonsMobile,
              indicatorColor,
              orientation,
              vertical,
              scrollButtons,
              textColor,
              variant,
              visibleScrollbar,
              fixed: !scrollable,
              hideScrollbar: scrollable && !visibleScrollbar,
              scrollableX: scrollable && !vertical,
              scrollableY: scrollable && vertical,
              centered: centered && !scrollable,
              scrollButtonsHideMobile: !allowScrollButtonsMobile,
            },
            classes = (ownerState => {
              const {
                  vertical,
                  fixed,
                  hideScrollbar,
                  scrollableX,
                  scrollableY,
                  centered,
                  scrollButtonsHideMobile,
                  classes,
                } = ownerState,
                slots = {
                  root: ['root', vertical && 'vertical'],
                  scroller: [
                    'scroller',
                    fixed && 'fixed',
                    hideScrollbar && 'hideScrollbar',
                    scrollableX && 'scrollableX',
                    scrollableY && 'scrollableY',
                  ],
                  flexContainer: [
                    'flexContainer',
                    vertical && 'flexContainerVertical',
                    centered && 'centered',
                  ],
                  indicator: ['indicator'],
                  scrollButtons: [
                    'scrollButtons',
                    scrollButtonsHideMobile && 'scrollButtonsHideMobile',
                  ],
                  scrollableX: [scrollableX && 'scrollableX'],
                  hideScrollbar: [hideScrollbar && 'hideScrollbar'],
                }
              return (0, composeClasses.A)(slots, getTabsUtilityClass, classes)
            })(ownerState),
            startScrollButtonIconProps = (0, useSlotProps.A)({
              elementType: slots.StartScrollButtonIcon,
              externalSlotProps: slotProps.startScrollButtonIcon,
              ownerState,
            }),
            endScrollButtonIconProps = (0, useSlotProps.A)({
              elementType: slots.EndScrollButtonIcon,
              externalSlotProps: slotProps.endScrollButtonIcon,
              ownerState,
            })
          const [mounted, setMounted] = react.useState(!1),
            [indicatorStyle, setIndicatorStyle] = react.useState(
              defaultIndicatorStyle
            ),
            [displayStartScroll, setDisplayStartScroll] = react.useState(!1),
            [displayEndScroll, setDisplayEndScroll] = react.useState(!1),
            [updateScrollObserver, setUpdateScrollObserver] =
              react.useState(!1),
            [scrollerStyle, setScrollerStyle] = react.useState({
              overflow: 'hidden',
              scrollbarWidth: 0,
            }),
            valueToIndex = new Map(),
            tabsRef = react.useRef(null),
            tabListRef = react.useRef(null),
            getTabsMeta = () => {
              const tabsNode = tabsRef.current
              let tabsMeta, tabMeta
              if (tabsNode) {
                const rect = tabsNode.getBoundingClientRect()
                tabsMeta = {
                  clientWidth: tabsNode.clientWidth,
                  scrollLeft: tabsNode.scrollLeft,
                  scrollTop: tabsNode.scrollTop,
                  scrollWidth: tabsNode.scrollWidth,
                  top: rect.top,
                  bottom: rect.bottom,
                  left: rect.left,
                  right: rect.right,
                }
              }
              if (tabsNode && !1 !== value) {
                const children = tabListRef.current.children
                if (children.length > 0) {
                  const tab = children[valueToIndex.get(value)]
                  0, (tabMeta = tab ? tab.getBoundingClientRect() : null)
                }
              }
              return { tabsMeta, tabMeta }
            },
            updateIndicatorState = (0, useEventCallback.A)(() => {
              const { tabsMeta, tabMeta } = getTabsMeta()
              let startIndicator,
                startValue = 0
              vertical
                ? ((startIndicator = 'top'),
                  tabMeta &&
                    tabsMeta &&
                    (startValue =
                      tabMeta.top - tabsMeta.top + tabsMeta.scrollTop))
                : ((startIndicator = isRtl ? 'right' : 'left'),
                  tabMeta &&
                    tabsMeta &&
                    (startValue =
                      (isRtl ? -1 : 1) *
                      (tabMeta[startIndicator] -
                        tabsMeta[startIndicator] +
                        tabsMeta.scrollLeft)))
              const newIndicatorStyle = {
                [startIndicator]: startValue,
                [size]: tabMeta ? tabMeta[size] : 0,
              }
              if (
                'number' != typeof indicatorStyle[startIndicator] ||
                'number' != typeof indicatorStyle[size]
              )
                setIndicatorStyle(newIndicatorStyle)
              else {
                const dStart = Math.abs(
                    indicatorStyle[startIndicator] -
                      newIndicatorStyle[startIndicator]
                  ),
                  dSize = Math.abs(
                    indicatorStyle[size] - newIndicatorStyle[size]
                  )
                ;(dStart >= 1 || dSize >= 1) &&
                  setIndicatorStyle(newIndicatorStyle)
              }
            }),
            scroll = (scrollValue, { animation = !0 } = {}) => {
              animation
                ? (function animate(
                    property,
                    element,
                    to,
                    options = {},
                    cb = () => {}
                  ) {
                    const { ease = easeInOutSin, duration = 300 } = options
                    let start = null
                    const from = element[property]
                    let cancelled = !1
                    const cancel = () => {
                        cancelled = !0
                      },
                      step = timestamp => {
                        if (cancelled)
                          return void cb(new Error('Animation cancelled'))
                        null === start && (start = timestamp)
                        const time = Math.min(1, (timestamp - start) / duration)
                        ;(element[property] = ease(time) * (to - from) + from),
                          time >= 1
                            ? requestAnimationFrame(() => {
                                cb(null)
                              })
                            : requestAnimationFrame(step)
                      }
                    return from === to
                      ? (cb(new Error('Element already at target position')),
                        cancel)
                      : (requestAnimationFrame(step), cancel)
                  })(scrollStart, tabsRef.current, scrollValue, {
                    duration: theme.transitions.duration.standard,
                  })
                : (tabsRef.current[scrollStart] = scrollValue)
            },
            moveTabsScroll = delta => {
              let scrollValue = tabsRef.current[scrollStart]
              ;(scrollValue += vertical ? delta : delta * (isRtl ? -1 : 1)),
                scroll(scrollValue)
            },
            getScrollSize = () => {
              const containerSize = tabsRef.current[clientSize]
              let totalSize = 0
              const children = Array.from(tabListRef.current.children)
              for (let i = 0; i < children.length; i += 1) {
                const tab = children[i]
                if (totalSize + tab[clientSize] > containerSize) {
                  0 === i && (totalSize = containerSize)
                  break
                }
                totalSize += tab[clientSize]
              }
              return totalSize
            },
            handleStartScrollClick = () => {
              moveTabsScroll(-1 * getScrollSize())
            },
            handleEndScrollClick = () => {
              moveTabsScroll(getScrollSize())
            },
            handleScrollbarSizeChange = react.useCallback(scrollbarWidth => {
              setScrollerStyle({ overflow: null, scrollbarWidth })
            }, []),
            scrollSelectedIntoView = (0, useEventCallback.A)(animation => {
              const { tabsMeta, tabMeta } = getTabsMeta()
              if (tabMeta && tabsMeta)
                if (tabMeta[start] < tabsMeta[start]) {
                  const nextScrollStart =
                    tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start])
                  scroll(nextScrollStart, { animation })
                } else if (tabMeta[end] > tabsMeta[end]) {
                  const nextScrollStart =
                    tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end])
                  scroll(nextScrollStart, { animation })
                }
            }),
            updateScrollButtonState = (0, useEventCallback.A)(() => {
              scrollable &&
                !1 !== scrollButtons &&
                setUpdateScrollObserver(!updateScrollObserver)
            })
          react.useEffect(() => {
            const handleResize = (0, debounce.A)(() => {
              tabsRef.current && updateIndicatorState()
            })
            let resizeObserver
            const handleMutation = records => {
                records.forEach(record => {
                  record.removedNodes.forEach(item => {
                    resizeObserver?.unobserve(item)
                  }),
                    record.addedNodes.forEach(item => {
                      resizeObserver?.observe(item)
                    })
                }),
                  handleResize(),
                  updateScrollButtonState()
              },
              win = (0, ownerWindow.A)(tabsRef.current)
            let mutationObserver
            return (
              win.addEventListener('resize', handleResize),
              'undefined' != typeof ResizeObserver &&
                ((resizeObserver = new ResizeObserver(handleResize)),
                Array.from(tabListRef.current.children).forEach(child => {
                  resizeObserver.observe(child)
                })),
              'undefined' != typeof MutationObserver &&
                ((mutationObserver = new MutationObserver(handleMutation)),
                mutationObserver.observe(tabListRef.current, {
                  childList: !0,
                })),
              () => {
                handleResize.clear(),
                  win.removeEventListener('resize', handleResize),
                  mutationObserver?.disconnect(),
                  resizeObserver?.disconnect()
              }
            )
          }, [updateIndicatorState, updateScrollButtonState]),
            react.useEffect(() => {
              const tabListChildren = Array.from(tabListRef.current.children),
                length = tabListChildren.length
              if (
                'undefined' != typeof IntersectionObserver &&
                length > 0 &&
                scrollable &&
                !1 !== scrollButtons
              ) {
                const firstTab = tabListChildren[0],
                  lastTab = tabListChildren[length - 1],
                  observerOptions = { root: tabsRef.current, threshold: 0.99 },
                  firstObserver = new IntersectionObserver(entries => {
                    setDisplayStartScroll(!entries[0].isIntersecting)
                  }, observerOptions)
                firstObserver.observe(firstTab)
                const lastObserver = new IntersectionObserver(entries => {
                  setDisplayEndScroll(!entries[0].isIntersecting)
                }, observerOptions)
                return (
                  lastObserver.observe(lastTab),
                  () => {
                    firstObserver.disconnect(), lastObserver.disconnect()
                  }
                )
              }
            }, [
              scrollable,
              scrollButtons,
              updateScrollObserver,
              childrenProp?.length,
            ]),
            react.useEffect(() => {
              setMounted(!0)
            }, []),
            react.useEffect(() => {
              updateIndicatorState()
            }),
            react.useEffect(() => {
              scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle)
            }, [scrollSelectedIntoView, indicatorStyle]),
            react.useImperativeHandle(
              action,
              () => ({
                updateIndicator: updateIndicatorState,
                updateScrollButtons: updateScrollButtonState,
              }),
              [updateIndicatorState, updateScrollButtonState]
            )
          const indicator = (0, jsx_runtime.jsx)(TabsIndicator, {
            ...TabIndicatorProps,
            className: (0, clsx.A)(
              classes.indicator,
              TabIndicatorProps.className
            ),
            ownerState,
            style: { ...indicatorStyle, ...TabIndicatorProps.style },
          })
          let childIndex = 0
          const children = react.Children.map(childrenProp, child => {
              if (!react.isValidElement(child)) return null
              const childValue =
                void 0 === child.props.value ? childIndex : child.props.value
              valueToIndex.set(childValue, childIndex)
              const selected = childValue === value
              return (
                (childIndex += 1),
                react.cloneElement(child, {
                  fullWidth: 'fullWidth' === variant,
                  indicator: selected && !mounted && indicator,
                  selected,
                  selectionFollowsFocus,
                  onChange,
                  textColor,
                  value: childValue,
                  ...(1 !== childIndex || !1 !== value || child.props.tabIndex
                    ? {}
                    : { tabIndex: 0 }),
                })
              )
            }),
            conditionalElements = (() => {
              const conditionalElements = {}
              conditionalElements.scrollbarSizeListener = scrollable
                ? (0, jsx_runtime.jsx)(TabsScrollbarSize, {
                    onChange: handleScrollbarSizeChange,
                    className: (0, clsx.A)(
                      classes.scrollableX,
                      classes.hideScrollbar
                    ),
                  })
                : null
              const showScrollButtons =
                scrollable &&
                (('auto' === scrollButtons &&
                  (displayStartScroll || displayEndScroll)) ||
                  !0 === scrollButtons)
              return (
                (conditionalElements.scrollButtonStart = showScrollButtons
                  ? (0, jsx_runtime.jsx)(ScrollButtonComponent, {
                      slots: {
                        StartScrollButtonIcon: slots.StartScrollButtonIcon,
                      },
                      slotProps: {
                        startScrollButtonIcon: startScrollButtonIconProps,
                      },
                      orientation,
                      direction: isRtl ? 'right' : 'left',
                      onClick: handleStartScrollClick,
                      disabled: !displayStartScroll,
                      ...TabScrollButtonProps,
                      className: (0, clsx.A)(
                        classes.scrollButtons,
                        TabScrollButtonProps.className
                      ),
                    })
                  : null),
                (conditionalElements.scrollButtonEnd = showScrollButtons
                  ? (0, jsx_runtime.jsx)(ScrollButtonComponent, {
                      slots: { EndScrollButtonIcon: slots.EndScrollButtonIcon },
                      slotProps: {
                        endScrollButtonIcon: endScrollButtonIconProps,
                      },
                      orientation,
                      direction: isRtl ? 'left' : 'right',
                      onClick: handleEndScrollClick,
                      disabled: !displayEndScroll,
                      ...TabScrollButtonProps,
                      className: (0, clsx.A)(
                        classes.scrollButtons,
                        TabScrollButtonProps.className
                      ),
                    })
                  : null),
                conditionalElements
              )
            })()
          return (0, jsx_runtime.jsxs)(TabsRoot, {
            className: (0, clsx.A)(classes.root, className),
            ownerState,
            ref,
            as: component,
            ...other,
            children: [
              conditionalElements.scrollButtonStart,
              conditionalElements.scrollbarSizeListener,
              (0, jsx_runtime.jsxs)(TabsScroller, {
                className: classes.scroller,
                ownerState,
                style: {
                  overflow: scrollerStyle.overflow,
                  [vertical
                    ? 'margin' + (isRtl ? 'Left' : 'Right')
                    : 'marginBottom']: visibleScrollbar
                    ? void 0
                    : -scrollerStyle.scrollbarWidth,
                },
                ref: tabsRef,
                children: [
                  (0, jsx_runtime.jsx)(FlexContainer, {
                    'aria-label': ariaLabel,
                    'aria-labelledby': ariaLabelledBy,
                    'aria-orientation':
                      'vertical' === orientation ? 'vertical' : null,
                    className: classes.flexContainer,
                    ownerState,
                    onKeyDown: event => {
                      const list = tabListRef.current,
                        currentFocus = (0, ownerDocument.A)(list).activeElement
                      if ('tab' !== currentFocus.getAttribute('role')) return
                      let previousItemKey =
                          'horizontal' === orientation
                            ? 'ArrowLeft'
                            : 'ArrowUp',
                        nextItemKey =
                          'horizontal' === orientation
                            ? 'ArrowRight'
                            : 'ArrowDown'
                      switch (
                        ('horizontal' === orientation &&
                          isRtl &&
                          ((previousItemKey = 'ArrowRight'),
                          (nextItemKey = 'ArrowLeft')),
                        event.key)
                      ) {
                        case previousItemKey:
                          event.preventDefault(),
                            moveFocus(list, currentFocus, previousItem)
                          break
                        case nextItemKey:
                          event.preventDefault(),
                            moveFocus(list, currentFocus, nextItem)
                          break
                        case 'Home':
                          event.preventDefault(),
                            moveFocus(list, null, nextItem)
                          break
                        case 'End':
                          event.preventDefault(),
                            moveFocus(list, null, previousItem)
                      }
                    },
                    ref: tabListRef,
                    role: 'tablist',
                    children,
                  }),
                  mounted && indicator,
                ],
              }),
              conditionalElements.scrollButtonEnd,
            ],
          })
        })
      },
      './node_modules/@mui/material/internal/svg-icons/KeyboardArrowLeft.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
        var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@mui/material/utils/createSvgIcon.js'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        const __WEBPACK_DEFAULT_EXPORT__ = (0,
        _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_2__.A)(
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('path', {
            d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z',
          }),
          'KeyboardArrowLeft'
        )
      },
      './node_modules/@mui/material/internal/svg-icons/KeyboardArrowRight.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
        var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@mui/material/utils/createSvgIcon.js'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        const __WEBPACK_DEFAULT_EXPORT__ = (0,
        _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_2__.A)(
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('path', {
            d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z',
          }),
          'KeyboardArrowRight'
        )
      },
      './node_modules/@mui/material/styles/useTheme.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => useTheme })
        __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
        var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/@mui/system/esm/useTheme/useTheme.js'
          ),
          _defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/@mui/material/styles/defaultTheme.js'
          ),
          _identifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './node_modules/@mui/material/styles/identifier.js'
          )
        function useTheme() {
          const theme = (0, _mui_system__WEBPACK_IMPORTED_MODULE_1__.A)(
            _defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__.A
          )
          return theme[_identifier_js__WEBPACK_IMPORTED_MODULE_3__.A] || theme
        }
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
      './node_modules/@mui/material/utils/debounce.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        const __WEBPACK_DEFAULT_EXPORT__ = __webpack_require__(
          './node_modules/@mui/utils/esm/debounce/debounce.js'
        ).A
      },
      './node_modules/@mui/material/utils/ownerDocument.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        const __WEBPACK_DEFAULT_EXPORT__ = __webpack_require__(
          './node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js'
        ).A
      },
      './node_modules/@mui/material/utils/ownerWindow.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        const __WEBPACK_DEFAULT_EXPORT__ = __webpack_require__(
          './node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js'
        ).A
      },
      './node_modules/@mui/material/utils/useEnhancedEffect.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        const __WEBPACK_DEFAULT_EXPORT__ = __webpack_require__(
          './node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js'
        ).A
      },
      './node_modules/@mui/system/esm/RtlProvider/index.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { I: () => useRtl })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
        __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const RtlContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext()
        const useRtl = () =>
          react__WEBPACK_IMPORTED_MODULE_0__.useContext(RtlContext) ?? !1
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
      './node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => appendOwnerState_appendOwnerState,
        })
        const isHostComponent_isHostComponent = function isHostComponent(
          element
        ) {
          return 'string' == typeof element
        }
        const appendOwnerState_appendOwnerState = function appendOwnerState(
          elementType,
          otherProps,
          ownerState
        ) {
          return void 0 === elementType ||
            isHostComponent_isHostComponent(elementType)
            ? otherProps
            : {
                ...otherProps,
                ownerState: { ...otherProps.ownerState, ...ownerState },
              }
        }
      },
      './node_modules/@mui/utils/esm/debounce/debounce.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        function debounce(func, wait = 166) {
          let timeout
          function debounced(...args) {
            clearTimeout(timeout),
              (timeout = setTimeout(() => {
                func.apply(this, args)
              }, wait))
          }
          return (
            (debounced.clear = () => {
              clearTimeout(timeout)
            }),
            debounced
          )
        }
        __webpack_require__.d(__webpack_exports__, { A: () => debounce })
      },
      './node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js':
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.d(__webpack_exports__, {
            A: () => __WEBPACK_DEFAULT_EXPORT__,
          })
          const __WEBPACK_DEFAULT_EXPORT__ = function extractEventHandlers(
            object,
            excludeKeys = []
          ) {
            if (void 0 === object) return {}
            const result = {}
            return (
              Object.keys(object)
                .filter(
                  prop =>
                    prop.match(/^on[A-Z]/) &&
                    'function' == typeof object[prop] &&
                    !excludeKeys.includes(prop)
                )
                .forEach(prop => {
                  result[prop] = object[prop]
                }),
              result
            )
          }
        },
      './node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => mergeSlotProps_mergeSlotProps,
        })
        var clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
          extractEventHandlers = __webpack_require__(
            './node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js'
          )
        const omitEventHandlers_omitEventHandlers = function omitEventHandlers(
          object
        ) {
          if (void 0 === object) return {}
          const result = {}
          return (
            Object.keys(object)
              .filter(
                prop =>
                  !(prop.match(/^on[A-Z]/) && 'function' == typeof object[prop])
              )
              .forEach(prop => {
                result[prop] = object[prop]
              }),
            result
          )
        }
        const mergeSlotProps_mergeSlotProps = function mergeSlotProps(
          parameters
        ) {
          const {
            getSlotProps,
            additionalProps,
            externalSlotProps,
            externalForwardedProps,
            className,
          } = parameters
          if (!getSlotProps) {
            const joinedClasses = (0, clsx.A)(
                additionalProps?.className,
                className,
                externalForwardedProps?.className,
                externalSlotProps?.className
              ),
              mergedStyle = {
                ...additionalProps?.style,
                ...externalForwardedProps?.style,
                ...externalSlotProps?.style,
              },
              props = {
                ...additionalProps,
                ...externalForwardedProps,
                ...externalSlotProps,
              }
            return (
              joinedClasses.length > 0 && (props.className = joinedClasses),
              Object.keys(mergedStyle).length > 0 &&
                (props.style = mergedStyle),
              { props, internalRef: void 0 }
            )
          }
          const eventHandlers = (0, extractEventHandlers.A)({
              ...externalForwardedProps,
              ...externalSlotProps,
            }),
            componentsPropsWithoutEventHandlers =
              omitEventHandlers_omitEventHandlers(externalSlotProps),
            otherPropsWithoutEventHandlers =
              omitEventHandlers_omitEventHandlers(externalForwardedProps),
            internalSlotProps = getSlotProps(eventHandlers),
            joinedClasses = (0, clsx.A)(
              internalSlotProps?.className,
              additionalProps?.className,
              className,
              externalForwardedProps?.className,
              externalSlotProps?.className
            ),
            mergedStyle = {
              ...internalSlotProps?.style,
              ...additionalProps?.style,
              ...externalForwardedProps?.style,
              ...externalSlotProps?.style,
            },
            props = {
              ...internalSlotProps,
              ...additionalProps,
              ...otherPropsWithoutEventHandlers,
              ...componentsPropsWithoutEventHandlers,
            }
          return (
            joinedClasses.length > 0 && (props.className = joinedClasses),
            Object.keys(mergedStyle).length > 0 && (props.style = mergedStyle),
            { props, internalRef: internalSlotProps.ref }
          )
        }
      },
      './node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        function ownerDocument(node) {
          return (node && node.ownerDocument) || document
        }
        __webpack_require__.d(__webpack_exports__, { A: () => ownerDocument })
      },
      './node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => ownerWindow })
        var _ownerDocument_index_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            './node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js'
          )
        function ownerWindow(node) {
          return (
            (0, _ownerDocument_index_js__WEBPACK_IMPORTED_MODULE_0__.A)(node)
              .defaultView || window
          )
        }
      },
      './node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js':
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.d(__webpack_exports__, {
            A: () => __WEBPACK_DEFAULT_EXPORT__,
          })
          const __WEBPACK_DEFAULT_EXPORT__ = function resolveComponentProps(
            componentProps,
            ownerState,
            slotState
          ) {
            return 'function' == typeof componentProps
              ? componentProps(ownerState, slotState)
              : componentProps
          }
        },
      './node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _useForkRef_index_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/useForkRef/useForkRef.js'
            ),
          _appendOwnerState_index_js__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js'
            ),
          _mergeSlotProps_index_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js'
            ),
          _resolveComponentProps_index_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js'
            )
        const __WEBPACK_DEFAULT_EXPORT__ = function useSlotProps(parameters) {
          const {
              elementType,
              externalSlotProps,
              ownerState,
              skipResolvingSlotProps = !1,
              ...other
            } = parameters,
            resolvedComponentsProps = skipResolvingSlotProps
              ? {}
              : (0,
                _resolveComponentProps_index_js__WEBPACK_IMPORTED_MODULE_0__.A)(
                  externalSlotProps,
                  ownerState
                ),
            { props: mergedProps, internalRef } = (0,
            _mergeSlotProps_index_js__WEBPACK_IMPORTED_MODULE_1__.A)({
              ...other,
              externalSlotProps: resolvedComponentsProps,
            }),
            ref = (0, _useForkRef_index_js__WEBPACK_IMPORTED_MODULE_2__.A)(
              internalRef,
              resolvedComponentsProps?.ref,
              parameters.additionalProps?.ref
            )
          return (0, _appendOwnerState_index_js__WEBPACK_IMPORTED_MODULE_3__.A)(
            elementType,
            { ...mergedProps, ref },
            ownerState
          )
        }
      },
    },
  ]
)
