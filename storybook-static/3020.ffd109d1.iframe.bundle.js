'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [3020],
    {
      './node_modules/@mui/material/Alert/Alert.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Alert_Alert })
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
          memoTheme = __webpack_require__(
            './node_modules/@mui/material/utils/memoTheme.js'
          ),
          DefaultPropsProvider = __webpack_require__(
            './node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'
          ),
          useSlot = __webpack_require__(
            './node_modules/@mui/material/utils/useSlot.js'
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
        function getAlertUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiAlert', slot)
        }
        const Alert_alertClasses = (0, generateUtilityClasses.A)('MuiAlert', [
          'root',
          'action',
          'icon',
          'message',
          'filled',
          'colorSuccess',
          'colorInfo',
          'colorWarning',
          'colorError',
          'filledSuccess',
          'filledInfo',
          'filledWarning',
          'filledError',
          'outlined',
          'outlinedSuccess',
          'outlinedInfo',
          'outlinedWarning',
          'outlinedError',
          'standard',
          'standardSuccess',
          'standardInfo',
          'standardWarning',
          'standardError',
        ])
        var IconButton = __webpack_require__(
            './node_modules/@mui/material/IconButton/IconButton.js'
          ),
          createSvgIcon = __webpack_require__(
            './node_modules/@mui/material/utils/createSvgIcon.js'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        const SuccessOutlined = (0, createSvgIcon.A)(
            (0, jsx_runtime.jsx)('path', {
              d: 'M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
            }),
            'SuccessOutlined'
          ),
          ReportProblemOutlined = (0, createSvgIcon.A)(
            (0, jsx_runtime.jsx)('path', {
              d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
            }),
            'ReportProblemOutlined'
          ),
          ErrorOutline = (0, createSvgIcon.A)(
            (0, jsx_runtime.jsx)('path', {
              d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
            }),
            'ErrorOutline'
          ),
          InfoOutlined = (0, createSvgIcon.A)(
            (0, jsx_runtime.jsx)('path', {
              d: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z',
            }),
            'InfoOutlined'
          )
        var Close = __webpack_require__(
          './node_modules/@mui/material/internal/svg-icons/Close.js'
        )
        const AlertRoot = (0, styled.Ay)(Paper.A, {
            name: 'MuiAlert',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.root,
                styles[ownerState.variant],
                styles[
                  `${ownerState.variant}${(0, capitalize.A)(ownerState.color || ownerState.severity)}`
                ],
              ]
            },
          })(
            (0, memoTheme.A)(({ theme }) => {
              const getColor =
                  'light' === theme.palette.mode
                    ? colorManipulator.e$
                    : colorManipulator.a,
                getBackgroundColor =
                  'light' === theme.palette.mode
                    ? colorManipulator.a
                    : colorManipulator.e$
              return {
                ...theme.typography.body2,
                backgroundColor: 'transparent',
                display: 'flex',
                padding: '6px 16px',
                variants: [
                  ...Object.entries(theme.palette)
                    .filter((0, createSimplePaletteValueFilter.A)(['light']))
                    .map(([color]) => ({
                      props: { colorSeverity: color, variant: 'standard' },
                      style: {
                        color: theme.vars
                          ? theme.vars.palette.Alert[`${color}Color`]
                          : getColor(theme.palette[color].light, 0.6),
                        backgroundColor: theme.vars
                          ? theme.vars.palette.Alert[`${color}StandardBg`]
                          : getBackgroundColor(theme.palette[color].light, 0.9),
                        [`& .${Alert_alertClasses.icon}`]: theme.vars
                          ? {
                              color:
                                theme.vars.palette.Alert[`${color}IconColor`],
                            }
                          : { color: theme.palette[color].main },
                      },
                    })),
                  ...Object.entries(theme.palette)
                    .filter((0, createSimplePaletteValueFilter.A)(['light']))
                    .map(([color]) => ({
                      props: { colorSeverity: color, variant: 'outlined' },
                      style: {
                        color: theme.vars
                          ? theme.vars.palette.Alert[`${color}Color`]
                          : getColor(theme.palette[color].light, 0.6),
                        border: `1px solid ${(theme.vars || theme).palette[color].light}`,
                        [`& .${Alert_alertClasses.icon}`]: theme.vars
                          ? {
                              color:
                                theme.vars.palette.Alert[`${color}IconColor`],
                            }
                          : { color: theme.palette[color].main },
                      },
                    })),
                  ...Object.entries(theme.palette)
                    .filter((0, createSimplePaletteValueFilter.A)(['dark']))
                    .map(([color]) => ({
                      props: { colorSeverity: color, variant: 'filled' },
                      style: {
                        fontWeight: theme.typography.fontWeightMedium,
                        ...(theme.vars
                          ? {
                              color:
                                theme.vars.palette.Alert[`${color}FilledColor`],
                              backgroundColor:
                                theme.vars.palette.Alert[`${color}FilledBg`],
                            }
                          : {
                              backgroundColor:
                                'dark' === theme.palette.mode
                                  ? theme.palette[color].dark
                                  : theme.palette[color].main,
                              color: theme.palette.getContrastText(
                                theme.palette[color].main
                              ),
                            }),
                      },
                    })),
                ],
              }
            })
          ),
          AlertIcon = (0, styled.Ay)('div', {
            name: 'MuiAlert',
            slot: 'Icon',
            overridesResolver: (props, styles) => styles.icon,
          })({
            marginRight: 12,
            padding: '7px 0',
            display: 'flex',
            fontSize: 22,
            opacity: 0.9,
          }),
          AlertMessage = (0, styled.Ay)('div', {
            name: 'MuiAlert',
            slot: 'Message',
            overridesResolver: (props, styles) => styles.message,
          })({ padding: '8px 0', minWidth: 0, overflow: 'auto' }),
          AlertAction = (0, styled.Ay)('div', {
            name: 'MuiAlert',
            slot: 'Action',
            overridesResolver: (props, styles) => styles.action,
          })({
            display: 'flex',
            alignItems: 'flex-start',
            padding: '4px 0 0 16px',
            marginLeft: 'auto',
            marginRight: -8,
          }),
          defaultIconMapping = {
            success: (0, jsx_runtime.jsx)(SuccessOutlined, {
              fontSize: 'inherit',
            }),
            warning: (0, jsx_runtime.jsx)(ReportProblemOutlined, {
              fontSize: 'inherit',
            }),
            error: (0, jsx_runtime.jsx)(ErrorOutline, { fontSize: 'inherit' }),
            info: (0, jsx_runtime.jsx)(InfoOutlined, { fontSize: 'inherit' }),
          },
          Alert_Alert = react.forwardRef(function Alert(inProps, ref) {
            const props = (0, DefaultPropsProvider.b)({
                props: inProps,
                name: 'MuiAlert',
              }),
              {
                action,
                children,
                className,
                closeText = 'Close',
                color,
                components = {},
                componentsProps = {},
                icon,
                iconMapping = defaultIconMapping,
                onClose,
                role = 'alert',
                severity = 'success',
                slotProps = {},
                slots = {},
                variant = 'standard',
                ...other
              } = props,
              ownerState = {
                ...props,
                color,
                severity,
                variant,
                colorSeverity: color || severity,
              },
              classes = (ownerState => {
                const { variant, color, severity, classes } = ownerState,
                  slots = {
                    root: [
                      'root',
                      `color${(0, capitalize.A)(color || severity)}`,
                      `${variant}${(0, capitalize.A)(color || severity)}`,
                      `${variant}`,
                    ],
                    icon: ['icon'],
                    message: ['message'],
                    action: ['action'],
                  }
                return (0, composeClasses.A)(
                  slots,
                  getAlertUtilityClass,
                  classes
                )
              })(ownerState),
              externalForwardedProps = {
                slots: {
                  closeButton: components.CloseButton,
                  closeIcon: components.CloseIcon,
                  ...slots,
                },
                slotProps: { ...componentsProps, ...slotProps },
              },
              [RootSlot, rootSlotProps] = (0, useSlot.A)('root', {
                ref,
                shouldForwardComponentProp: !0,
                className: (0, clsx.A)(classes.root, className),
                elementType: AlertRoot,
                externalForwardedProps: { ...externalForwardedProps, ...other },
                ownerState,
                additionalProps: { role, elevation: 0 },
              }),
              [IconSlot, iconSlotProps] = (0, useSlot.A)('icon', {
                className: classes.icon,
                elementType: AlertIcon,
                externalForwardedProps,
                ownerState,
              }),
              [MessageSlot, messageSlotProps] = (0, useSlot.A)('message', {
                className: classes.message,
                elementType: AlertMessage,
                externalForwardedProps,
                ownerState,
              }),
              [ActionSlot, actionSlotProps] = (0, useSlot.A)('action', {
                className: classes.action,
                elementType: AlertAction,
                externalForwardedProps,
                ownerState,
              }),
              [CloseButtonSlot, closeButtonProps] = (0, useSlot.A)(
                'closeButton',
                {
                  elementType: IconButton.A,
                  externalForwardedProps,
                  ownerState,
                }
              ),
              [CloseIconSlot, closeIconProps] = (0, useSlot.A)('closeIcon', {
                elementType: Close.A,
                externalForwardedProps,
                ownerState,
              })
            return (0, jsx_runtime.jsxs)(RootSlot, {
              ...rootSlotProps,
              children: [
                !1 !== icon
                  ? (0, jsx_runtime.jsx)(IconSlot, {
                      ...iconSlotProps,
                      children:
                        icon ||
                        iconMapping[severity] ||
                        defaultIconMapping[severity],
                    })
                  : null,
                (0, jsx_runtime.jsx)(MessageSlot, {
                  ...messageSlotProps,
                  children,
                }),
                null != action
                  ? (0, jsx_runtime.jsx)(ActionSlot, {
                      ...actionSlotProps,
                      children: action,
                    })
                  : null,
                null == action && onClose
                  ? (0, jsx_runtime.jsx)(ActionSlot, {
                      ...actionSlotProps,
                      children: (0, jsx_runtime.jsx)(CloseButtonSlot, {
                        size: 'small',
                        'aria-label': closeText,
                        title: closeText,
                        color: 'inherit',
                        onClick: onClose,
                        ...closeButtonProps,
                        children: (0, jsx_runtime.jsx)(CloseIconSlot, {
                          fontSize: 'small',
                          ...closeIconProps,
                        }),
                      }),
                    })
                  : null,
              ],
            })
          })
      },
      './node_modules/@mui/material/Stack/Stack.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Stack_Stack })
        var react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
          deepmerge = __webpack_require__(
            './node_modules/@mui/utils/esm/deepmerge/deepmerge.js'
          ),
          generateUtilityClass = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
          ),
          composeClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/composeClasses/composeClasses.js'
          ),
          styled = __webpack_require__(
            './node_modules/@mui/system/esm/styled/styled.js'
          ),
          useThemeProps = __webpack_require__(
            './node_modules/@mui/system/esm/useThemeProps/useThemeProps.js'
          ),
          extendSxProp = __webpack_require__(
            './node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js'
          ),
          createTheme = __webpack_require__(
            './node_modules/@mui/system/esm/createTheme/createTheme.js'
          ),
          breakpoints = __webpack_require__(
            './node_modules/@mui/system/esm/breakpoints/breakpoints.js'
          ),
          spacing = __webpack_require__(
            './node_modules/@mui/system/esm/spacing/spacing.js'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        const defaultTheme = (0, createTheme.A)(),
          defaultCreateStyledComponent = (0, styled.A)('div', {
            name: 'MuiStack',
            slot: 'Root',
            overridesResolver: (props, styles) => styles.root,
          })
        function useThemePropsDefault(props) {
          return (0, useThemeProps.A)({ props, name: 'MuiStack', defaultTheme })
        }
        function joinChildren(children, separator) {
          const childrenArray = react.Children.toArray(children).filter(Boolean)
          return childrenArray.reduce(
            (output, child, index) => (
              output.push(child),
              index < childrenArray.length - 1 &&
                output.push(
                  react.cloneElement(separator, { key: `separator-${index}` })
                ),
              output
            ),
            []
          )
        }
        const style = ({ ownerState, theme }) => {
          let styles = {
            display: 'flex',
            flexDirection: 'column',
            ...(0, breakpoints.NI)(
              { theme },
              (0, breakpoints.kW)({
                values: ownerState.direction,
                breakpoints: theme.breakpoints.values,
              }),
              propValue => ({ flexDirection: propValue })
            ),
          }
          if (ownerState.spacing) {
            const transformer = (0, spacing.LX)(theme),
              base = Object.keys(theme.breakpoints.values).reduce(
                (acc, breakpoint) => (
                  (('object' == typeof ownerState.spacing &&
                    null != ownerState.spacing[breakpoint]) ||
                    ('object' == typeof ownerState.direction &&
                      null != ownerState.direction[breakpoint])) &&
                    (acc[breakpoint] = !0),
                  acc
                ),
                {}
              ),
              directionValues = (0, breakpoints.kW)({
                values: ownerState.direction,
                base,
              }),
              spacingValues = (0, breakpoints.kW)({
                values: ownerState.spacing,
                base,
              })
            'object' == typeof directionValues &&
              Object.keys(directionValues).forEach(
                (breakpoint, index, breakpoints) => {
                  if (!directionValues[breakpoint]) {
                    const previousDirectionValue =
                      index > 0
                        ? directionValues[breakpoints[index - 1]]
                        : 'column'
                    directionValues[breakpoint] = previousDirectionValue
                  }
                }
              )
            const styleFromPropValue = (propValue, breakpoint) => {
              return ownerState.useFlexGap
                ? { gap: (0, spacing._W)(transformer, propValue) }
                : {
                    '& > :not(style):not(style)': { margin: 0 },
                    '& > :not(style) ~ :not(style)': {
                      [`margin${((direction = breakpoint ? directionValues[breakpoint] : ownerState.direction), { row: 'Left', 'row-reverse': 'Right', column: 'Top', 'column-reverse': 'Bottom' }[direction])}`]:
                        (0, spacing._W)(transformer, propValue),
                    },
                  }
              var direction
            }
            styles = (0, deepmerge.A)(
              styles,
              (0, breakpoints.NI)({ theme }, spacingValues, styleFromPropValue)
            )
          }
          return (
            (styles = (0, breakpoints.iZ)(theme.breakpoints, styles)), styles
          )
        }
        var styles_styled = __webpack_require__(
            './node_modules/@mui/material/styles/styled.js'
          ),
          DefaultPropsProvider = __webpack_require__(
            './node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'
          )
        const Stack = (function createStack(options = {}) {
            const {
                createStyledComponent = defaultCreateStyledComponent,
                useThemeProps = useThemePropsDefault,
                componentName = 'MuiStack',
              } = options,
              StackRoot = createStyledComponent(style),
              Stack = react.forwardRef(function Grid(inProps, ref) {
                const themeProps = useThemeProps(inProps),
                  props = (0, extendSxProp.A)(themeProps),
                  {
                    component = 'div',
                    direction = 'column',
                    spacing = 0,
                    divider,
                    children,
                    className,
                    useFlexGap = !1,
                    ...other
                  } = props,
                  ownerState = { direction, spacing, useFlexGap },
                  classes = (0, composeClasses.A)(
                    { root: ['root'] },
                    slot => (0, generateUtilityClass.Ay)(componentName, slot),
                    {}
                  )
                return (0, jsx_runtime.jsx)(StackRoot, {
                  as: component,
                  ownerState,
                  ref,
                  className: (0, clsx.A)(classes.root, className),
                  ...other,
                  children: divider
                    ? joinChildren(children, divider)
                    : children,
                })
              })
            return Stack
          })({
            createStyledComponent: (0, styles_styled.Ay)('div', {
              name: 'MuiStack',
              slot: 'Root',
              overridesResolver: (props, styles) => styles.root,
            }),
            useThemeProps: inProps =>
              (0, DefaultPropsProvider.b)({ props: inProps, name: 'MuiStack' }),
          }),
          Stack_Stack = Stack
      },
      './node_modules/@mui/material/TableBody/TableBody.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => TableBody_TableBody,
        })
        var react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
          composeClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/composeClasses/composeClasses.js'
          ),
          Tablelvl2Context = __webpack_require__(
            './node_modules/@mui/material/Table/Tablelvl2Context.js'
          ),
          styled = __webpack_require__(
            './node_modules/@mui/material/styles/styled.js'
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
        function getTableBodyUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiTableBody', slot)
        }
        ;(0, generateUtilityClasses.A)('MuiTableBody', ['root'])
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const TableBodyRoot = (0, styled.Ay)('tbody', {
            name: 'MuiTableBody',
            slot: 'Root',
            overridesResolver: (props, styles) => styles.root,
          })({ display: 'table-row-group' }),
          tablelvl2 = { variant: 'body' },
          defaultComponent = 'tbody',
          TableBody_TableBody = react.forwardRef(
            function TableBody(inProps, ref) {
              const props = (0, DefaultPropsProvider.b)({
                  props: inProps,
                  name: 'MuiTableBody',
                }),
                { className, component = defaultComponent, ...other } = props,
                ownerState = { ...props, component },
                classes = (ownerState => {
                  const { classes } = ownerState
                  return (0, composeClasses.A)(
                    { root: ['root'] },
                    getTableBodyUtilityClass,
                    classes
                  )
                })(ownerState)
              return (0, jsx_runtime.jsx)(Tablelvl2Context.A.Provider, {
                value: tablelvl2,
                children: (0, jsx_runtime.jsx)(TableBodyRoot, {
                  className: (0, clsx.A)(classes.root, className),
                  as: component,
                  ref,
                  role: component === defaultComponent ? null : 'rowgroup',
                  ownerState,
                  ...other,
                }),
              })
            }
          )
      },
      './node_modules/@mui/material/TableCell/TableCell.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => TableCell_TableCell,
        })
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
          capitalize = __webpack_require__(
            './node_modules/@mui/material/utils/capitalize.js'
          ),
          TableContext = __webpack_require__(
            './node_modules/@mui/material/Table/TableContext.js'
          ),
          Tablelvl2Context = __webpack_require__(
            './node_modules/@mui/material/Table/Tablelvl2Context.js'
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
        function getTableCellUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiTableCell', slot)
        }
        const TableCell_tableCellClasses = (0, generateUtilityClasses.A)(
          'MuiTableCell',
          [
            'root',
            'head',
            'body',
            'footer',
            'sizeSmall',
            'sizeMedium',
            'paddingCheckbox',
            'paddingNone',
            'alignLeft',
            'alignCenter',
            'alignRight',
            'alignJustify',
            'stickyHeader',
          ]
        )
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const TableCellRoot = (0, styled.Ay)('td', {
            name: 'MuiTableCell',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.root,
                styles[ownerState.variant],
                styles[`size${(0, capitalize.A)(ownerState.size)}`],
                'normal' !== ownerState.padding &&
                  styles[`padding${(0, capitalize.A)(ownerState.padding)}`],
                'inherit' !== ownerState.align &&
                  styles[`align${(0, capitalize.A)(ownerState.align)}`],
                ownerState.stickyHeader && styles.stickyHeader,
              ]
            },
          })(
            (0, memoTheme.A)(({ theme }) => ({
              ...theme.typography.body2,
              display: 'table-cell',
              verticalAlign: 'inherit',
              borderBottom: theme.vars
                ? `1px solid ${theme.vars.palette.TableCell.border}`
                : `1px solid\n    ${'light' === theme.palette.mode ? (0, colorManipulator.a)((0, colorManipulator.X4)(theme.palette.divider, 1), 0.88) : (0, colorManipulator.e$)((0, colorManipulator.X4)(theme.palette.divider, 1), 0.68)}`,
              textAlign: 'left',
              padding: 16,
              variants: [
                {
                  props: { variant: 'head' },
                  style: {
                    color: (theme.vars || theme).palette.text.primary,
                    lineHeight: theme.typography.pxToRem(24),
                    fontWeight: theme.typography.fontWeightMedium,
                  },
                },
                {
                  props: { variant: 'body' },
                  style: { color: (theme.vars || theme).palette.text.primary },
                },
                {
                  props: { variant: 'footer' },
                  style: {
                    color: (theme.vars || theme).palette.text.secondary,
                    lineHeight: theme.typography.pxToRem(21),
                    fontSize: theme.typography.pxToRem(12),
                  },
                },
                {
                  props: { size: 'small' },
                  style: {
                    padding: '6px 16px',
                    [`&.${TableCell_tableCellClasses.paddingCheckbox}`]: {
                      width: 24,
                      padding: '0 12px 0 16px',
                      '& > *': { padding: 0 },
                    },
                  },
                },
                {
                  props: { padding: 'checkbox' },
                  style: { width: 48, padding: '0 0 0 4px' },
                },
                { props: { padding: 'none' }, style: { padding: 0 } },
                { props: { align: 'left' }, style: { textAlign: 'left' } },
                { props: { align: 'center' }, style: { textAlign: 'center' } },
                {
                  props: { align: 'right' },
                  style: { textAlign: 'right', flexDirection: 'row-reverse' },
                },
                {
                  props: { align: 'justify' },
                  style: { textAlign: 'justify' },
                },
                {
                  props: ({ ownerState }) => ownerState.stickyHeader,
                  style: {
                    position: 'sticky',
                    top: 0,
                    zIndex: 2,
                    backgroundColor: (theme.vars || theme).palette.background
                      .default,
                  },
                },
              ],
            }))
          ),
          TableCell_TableCell = react.forwardRef(
            function TableCell(inProps, ref) {
              const props = (0, DefaultPropsProvider.b)({
                  props: inProps,
                  name: 'MuiTableCell',
                }),
                {
                  align = 'inherit',
                  className,
                  component: componentProp,
                  padding: paddingProp,
                  scope: scopeProp,
                  size: sizeProp,
                  sortDirection,
                  variant: variantProp,
                  ...other
                } = props,
                table = react.useContext(TableContext.A),
                tablelvl2 = react.useContext(Tablelvl2Context.A),
                isHeadCell = tablelvl2 && 'head' === tablelvl2.variant
              let component
              component = componentProp || (isHeadCell ? 'th' : 'td')
              let scope = scopeProp
              'td' === component
                ? (scope = void 0)
                : !scope && isHeadCell && (scope = 'col')
              const variant = variantProp || (tablelvl2 && tablelvl2.variant),
                ownerState = {
                  ...props,
                  align,
                  component,
                  padding:
                    paddingProp ||
                    (table && table.padding ? table.padding : 'normal'),
                  size:
                    sizeProp || (table && table.size ? table.size : 'medium'),
                  sortDirection,
                  stickyHeader:
                    'head' === variant && table && table.stickyHeader,
                  variant,
                },
                classes = (ownerState => {
                  const {
                      classes,
                      variant,
                      align,
                      padding,
                      size,
                      stickyHeader,
                    } = ownerState,
                    slots = {
                      root: [
                        'root',
                        variant,
                        stickyHeader && 'stickyHeader',
                        'inherit' !== align &&
                          `align${(0, capitalize.A)(align)}`,
                        'normal' !== padding &&
                          `padding${(0, capitalize.A)(padding)}`,
                        `size${(0, capitalize.A)(size)}`,
                      ],
                    }
                  return (0, composeClasses.A)(
                    slots,
                    getTableCellUtilityClass,
                    classes
                  )
                })(ownerState)
              let ariaSort = null
              return (
                sortDirection &&
                  (ariaSort =
                    'asc' === sortDirection ? 'ascending' : 'descending'),
                (0, jsx_runtime.jsx)(TableCellRoot, {
                  as: component,
                  ref,
                  className: (0, clsx.A)(classes.root, className),
                  'aria-sort': ariaSort,
                  scope,
                  ownerState,
                  ...other,
                })
              )
            }
          )
      },
      './node_modules/@mui/material/TableContainer/TableContainer.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => TableContainer_TableContainer,
        })
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
          DefaultPropsProvider = __webpack_require__(
            './node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'
          ),
          generateUtilityClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          generateUtilityClass = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
          )
        function getTableContainerUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiTableContainer', slot)
        }
        ;(0, generateUtilityClasses.A)('MuiTableContainer', ['root'])
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const TableContainerRoot = (0, styled.Ay)('div', {
            name: 'MuiTableContainer',
            slot: 'Root',
            overridesResolver: (props, styles) => styles.root,
          })({ width: '100%', overflowX: 'auto' }),
          TableContainer_TableContainer = react.forwardRef(
            function TableContainer(inProps, ref) {
              const props = (0, DefaultPropsProvider.b)({
                  props: inProps,
                  name: 'MuiTableContainer',
                }),
                { className, component = 'div', ...other } = props,
                ownerState = { ...props, component },
                classes = (ownerState => {
                  const { classes } = ownerState
                  return (0, composeClasses.A)(
                    { root: ['root'] },
                    getTableContainerUtilityClass,
                    classes
                  )
                })(ownerState)
              return (0, jsx_runtime.jsx)(TableContainerRoot, {
                ref,
                as: component,
                className: (0, clsx.A)(classes.root, className),
                ownerState,
                ...other,
              })
            }
          )
      },
      './node_modules/@mui/material/TableHead/TableHead.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => TableHead_TableHead,
        })
        var react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
          composeClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/composeClasses/composeClasses.js'
          ),
          Tablelvl2Context = __webpack_require__(
            './node_modules/@mui/material/Table/Tablelvl2Context.js'
          ),
          styled = __webpack_require__(
            './node_modules/@mui/material/styles/styled.js'
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
        function getTableHeadUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiTableHead', slot)
        }
        ;(0, generateUtilityClasses.A)('MuiTableHead', ['root'])
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const TableHeadRoot = (0, styled.Ay)('thead', {
            name: 'MuiTableHead',
            slot: 'Root',
            overridesResolver: (props, styles) => styles.root,
          })({ display: 'table-header-group' }),
          tablelvl2 = { variant: 'head' },
          defaultComponent = 'thead',
          TableHead_TableHead = react.forwardRef(
            function TableHead(inProps, ref) {
              const props = (0, DefaultPropsProvider.b)({
                  props: inProps,
                  name: 'MuiTableHead',
                }),
                { className, component = defaultComponent, ...other } = props,
                ownerState = { ...props, component },
                classes = (ownerState => {
                  const { classes } = ownerState
                  return (0, composeClasses.A)(
                    { root: ['root'] },
                    getTableHeadUtilityClass,
                    classes
                  )
                })(ownerState)
              return (0, jsx_runtime.jsx)(Tablelvl2Context.A.Provider, {
                value: tablelvl2,
                children: (0, jsx_runtime.jsx)(TableHeadRoot, {
                  as: component,
                  className: (0, clsx.A)(classes.root, className),
                  ref,
                  role: component === defaultComponent ? null : 'rowgroup',
                  ownerState,
                  ...other,
                }),
              })
            }
          )
      },
      './node_modules/@mui/material/TablePagination/TablePagination.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => TablePagination_TablePagination,
        })
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
          InputBase = __webpack_require__(
            './node_modules/@mui/material/InputBase/InputBase.js'
          ),
          MenuItem = __webpack_require__(
            './node_modules/@mui/material/MenuItem/MenuItem.js'
          ),
          Select = __webpack_require__(
            './node_modules/@mui/material/Select/Select.js'
          ),
          TableCell = __webpack_require__(
            './node_modules/@mui/material/TableCell/TableCell.js'
          ),
          generateUtilityClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          generateUtilityClass = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
          )
        function getToolbarUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiToolbar', slot)
        }
        ;(0, generateUtilityClasses.A)('MuiToolbar', [
          'root',
          'gutters',
          'regular',
          'dense',
        ])
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const ToolbarRoot = (0, styled.Ay)('div', {
            name: 'MuiToolbar',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.root,
                !ownerState.disableGutters && styles.gutters,
                styles[ownerState.variant],
              ]
            },
          })(
            (0, memoTheme.A)(({ theme }) => ({
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              variants: [
                {
                  props: ({ ownerState }) => !ownerState.disableGutters,
                  style: {
                    paddingLeft: theme.spacing(2),
                    paddingRight: theme.spacing(2),
                    [theme.breakpoints.up('sm')]: {
                      paddingLeft: theme.spacing(3),
                      paddingRight: theme.spacing(3),
                    },
                  },
                },
                { props: { variant: 'dense' }, style: { minHeight: 48 } },
                { props: { variant: 'regular' }, style: theme.mixins.toolbar },
              ],
            }))
          ),
          Toolbar_Toolbar = react.forwardRef(function Toolbar(inProps, ref) {
            const props = (0, DefaultPropsProvider.b)({
                props: inProps,
                name: 'MuiToolbar',
              }),
              {
                className,
                component = 'div',
                disableGutters = !1,
                variant = 'regular',
                ...other
              } = props,
              ownerState = { ...props, component, disableGutters, variant },
              classes = (ownerState => {
                const { classes, disableGutters, variant } = ownerState,
                  slots = {
                    root: ['root', !disableGutters && 'gutters', variant],
                  }
                return (0, composeClasses.A)(
                  slots,
                  getToolbarUtilityClass,
                  classes
                )
              })(ownerState)
            return (0, jsx_runtime.jsx)(ToolbarRoot, {
              as: component,
              className: (0, clsx.A)(classes.root, className),
              ref,
              ownerState,
              ...other,
            })
          })
        var RtlProvider = __webpack_require__(
            './node_modules/@mui/system/esm/RtlProvider/index.js'
          ),
          KeyboardArrowLeft = __webpack_require__(
            './node_modules/@mui/material/internal/svg-icons/KeyboardArrowLeft.js'
          ),
          KeyboardArrowRight = __webpack_require__(
            './node_modules/@mui/material/internal/svg-icons/KeyboardArrowRight.js'
          ),
          IconButton = __webpack_require__(
            './node_modules/@mui/material/IconButton/IconButton.js'
          ),
          createSvgIcon = __webpack_require__(
            './node_modules/@mui/material/utils/createSvgIcon.js'
          )
        const LastPage = (0, createSvgIcon.A)(
            (0, jsx_runtime.jsx)('path', {
              d: 'M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z',
            }),
            'LastPage'
          ),
          FirstPage = (0, createSvgIcon.A)(
            (0, jsx_runtime.jsx)('path', {
              d: 'M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z',
            }),
            'FirstPage'
          ),
          TablePagination_TablePaginationActions = react.forwardRef(
            function TablePaginationActions(props, ref) {
              const {
                  backIconButtonProps,
                  count,
                  disabled = !1,
                  getItemAriaLabel,
                  nextIconButtonProps,
                  onPageChange,
                  page,
                  rowsPerPage,
                  showFirstButton,
                  showLastButton,
                  slots = {},
                  slotProps = {},
                  ...other
                } = props,
                isRtl = (0, RtlProvider.I)(),
                FirstButton = slots.firstButton ?? IconButton.A,
                LastButton = slots.lastButton ?? IconButton.A,
                NextButton = slots.nextButton ?? IconButton.A,
                PreviousButton = slots.previousButton ?? IconButton.A,
                FirstButtonIcon = slots.firstButtonIcon ?? FirstPage,
                LastButtonIcon = slots.lastButtonIcon ?? LastPage,
                NextButtonIcon = slots.nextButtonIcon ?? KeyboardArrowRight.A,
                PreviousButtonIcon =
                  slots.previousButtonIcon ?? KeyboardArrowLeft.A,
                FirstButtonSlot = isRtl ? LastButton : FirstButton,
                PreviousButtonSlot = isRtl ? NextButton : PreviousButton,
                NextButtonSlot = isRtl ? PreviousButton : NextButton,
                LastButtonSlot = isRtl ? FirstButton : LastButton,
                firstButtonSlotProps = isRtl
                  ? slotProps.lastButton
                  : slotProps.firstButton,
                previousButtonSlotProps = isRtl
                  ? slotProps.nextButton
                  : slotProps.previousButton,
                nextButtonSlotProps = isRtl
                  ? slotProps.previousButton
                  : slotProps.nextButton,
                lastButtonSlotProps = isRtl
                  ? slotProps.firstButton
                  : slotProps.lastButton
              return (0, jsx_runtime.jsxs)('div', {
                ref,
                ...other,
                children: [
                  showFirstButton &&
                    (0, jsx_runtime.jsx)(FirstButtonSlot, {
                      onClick: event => {
                        onPageChange(event, 0)
                      },
                      disabled: disabled || 0 === page,
                      'aria-label': getItemAriaLabel('first', page),
                      title: getItemAriaLabel('first', page),
                      ...firstButtonSlotProps,
                      children: isRtl
                        ? (0, jsx_runtime.jsx)(LastButtonIcon, {
                            ...slotProps.lastButtonIcon,
                          })
                        : (0, jsx_runtime.jsx)(FirstButtonIcon, {
                            ...slotProps.firstButtonIcon,
                          }),
                    }),
                  (0, jsx_runtime.jsx)(PreviousButtonSlot, {
                    onClick: event => {
                      onPageChange(event, page - 1)
                    },
                    disabled: disabled || 0 === page,
                    color: 'inherit',
                    'aria-label': getItemAriaLabel('previous', page),
                    title: getItemAriaLabel('previous', page),
                    ...(previousButtonSlotProps ?? backIconButtonProps),
                    children: isRtl
                      ? (0, jsx_runtime.jsx)(NextButtonIcon, {
                          ...slotProps.nextButtonIcon,
                        })
                      : (0, jsx_runtime.jsx)(PreviousButtonIcon, {
                          ...slotProps.previousButtonIcon,
                        }),
                  }),
                  (0, jsx_runtime.jsx)(NextButtonSlot, {
                    onClick: event => {
                      onPageChange(event, page + 1)
                    },
                    disabled:
                      disabled ||
                      (-1 !== count &&
                        page >= Math.ceil(count / rowsPerPage) - 1),
                    color: 'inherit',
                    'aria-label': getItemAriaLabel('next', page),
                    title: getItemAriaLabel('next', page),
                    ...(nextButtonSlotProps ?? nextIconButtonProps),
                    children: isRtl
                      ? (0, jsx_runtime.jsx)(PreviousButtonIcon, {
                          ...slotProps.previousButtonIcon,
                        })
                      : (0, jsx_runtime.jsx)(NextButtonIcon, {
                          ...slotProps.nextButtonIcon,
                        }),
                  }),
                  showLastButton &&
                    (0, jsx_runtime.jsx)(LastButtonSlot, {
                      onClick: event => {
                        onPageChange(
                          event,
                          Math.max(0, Math.ceil(count / rowsPerPage) - 1)
                        )
                      },
                      disabled:
                        disabled || page >= Math.ceil(count / rowsPerPage) - 1,
                      'aria-label': getItemAriaLabel('last', page),
                      title: getItemAriaLabel('last', page),
                      ...lastButtonSlotProps,
                      children: isRtl
                        ? (0, jsx_runtime.jsx)(FirstButtonIcon, {
                            ...slotProps.firstButtonIcon,
                          })
                        : (0, jsx_runtime.jsx)(LastButtonIcon, {
                            ...slotProps.lastButtonIcon,
                          }),
                    }),
                ],
              })
            }
          )
        var useId = __webpack_require__(
          './node_modules/@mui/material/utils/useId.js'
        )
        function getTablePaginationUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiTablePagination', slot)
        }
        const TablePagination_tablePaginationClasses = (0,
        generateUtilityClasses.A)('MuiTablePagination', [
          'root',
          'toolbar',
          'spacer',
          'selectLabel',
          'selectRoot',
          'select',
          'selectIcon',
          'input',
          'menuItem',
          'displayedRows',
          'actions',
        ])
        var _InputBase,
          useSlot = __webpack_require__(
            './node_modules/@mui/material/utils/useSlot.js'
          )
        const TablePaginationRoot = (0, styled.Ay)(TableCell.A, {
            name: 'MuiTablePagination',
            slot: 'Root',
            overridesResolver: (props, styles) => styles.root,
          })(
            (0, memoTheme.A)(({ theme }) => ({
              overflow: 'auto',
              color: (theme.vars || theme).palette.text.primary,
              fontSize: theme.typography.pxToRem(14),
              '&:last-child': { padding: 0 },
            }))
          ),
          TablePaginationToolbar = (0, styled.Ay)(Toolbar_Toolbar, {
            name: 'MuiTablePagination',
            slot: 'Toolbar',
            overridesResolver: (props, styles) => ({
              [`& .${TablePagination_tablePaginationClasses.actions}`]:
                styles.actions,
              ...styles.toolbar,
            }),
          })(
            (0, memoTheme.A)(({ theme }) => ({
              minHeight: 52,
              paddingRight: 2,
              [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
                minHeight: 52,
              },
              [theme.breakpoints.up('sm')]: { minHeight: 52, paddingRight: 2 },
              [`& .${TablePagination_tablePaginationClasses.actions}`]: {
                flexShrink: 0,
                marginLeft: 20,
              },
            }))
          ),
          TablePaginationSpacer = (0, styled.Ay)('div', {
            name: 'MuiTablePagination',
            slot: 'Spacer',
            overridesResolver: (props, styles) => styles.spacer,
          })({ flex: '1 1 100%' }),
          TablePaginationSelectLabel = (0, styled.Ay)('p', {
            name: 'MuiTablePagination',
            slot: 'SelectLabel',
            overridesResolver: (props, styles) => styles.selectLabel,
          })(
            (0, memoTheme.A)(({ theme }) => ({
              ...theme.typography.body2,
              flexShrink: 0,
            }))
          ),
          TablePaginationSelect = (0, styled.Ay)(Select.A, {
            name: 'MuiTablePagination',
            slot: 'Select',
            overridesResolver: (props, styles) => ({
              [`& .${TablePagination_tablePaginationClasses.selectIcon}`]:
                styles.selectIcon,
              [`& .${TablePagination_tablePaginationClasses.select}`]:
                styles.select,
              ...styles.input,
              ...styles.selectRoot,
            }),
          })({
            color: 'inherit',
            fontSize: 'inherit',
            flexShrink: 0,
            marginRight: 32,
            marginLeft: 8,
            [`& .${TablePagination_tablePaginationClasses.select}`]: {
              paddingLeft: 8,
              paddingRight: 24,
              textAlign: 'right',
              textAlignLast: 'right',
            },
          }),
          TablePaginationMenuItem = (0, styled.Ay)(MenuItem.A, {
            name: 'MuiTablePagination',
            slot: 'MenuItem',
            overridesResolver: (props, styles) => styles.menuItem,
          })({}),
          TablePaginationDisplayedRows = (0, styled.Ay)('p', {
            name: 'MuiTablePagination',
            slot: 'DisplayedRows',
            overridesResolver: (props, styles) => styles.displayedRows,
          })(
            (0, memoTheme.A)(({ theme }) => ({
              ...theme.typography.body2,
              flexShrink: 0,
            }))
          )
        function defaultLabelDisplayedRows({ from, to, count }) {
          return `${from}–${to} of ${-1 !== count ? count : `more than ${to}`}`
        }
        function defaultGetAriaLabel(type) {
          return `Go to ${type} page`
        }
        const TablePagination_TablePagination = react.forwardRef(
          function TablePagination(inProps, ref) {
            const props = (0, DefaultPropsProvider.b)({
                props: inProps,
                name: 'MuiTablePagination',
              }),
              {
                ActionsComponent = TablePagination_TablePaginationActions,
                backIconButtonProps,
                colSpan: colSpanProp,
                component = TableCell.A,
                count,
                disabled = !1,
                getItemAriaLabel = defaultGetAriaLabel,
                labelDisplayedRows = defaultLabelDisplayedRows,
                labelRowsPerPage = 'Rows per page:',
                nextIconButtonProps,
                onPageChange,
                onRowsPerPageChange,
                page,
                rowsPerPage,
                rowsPerPageOptions = [10, 25, 50, 100],
                SelectProps = {},
                showFirstButton = !1,
                showLastButton = !1,
                slotProps = {},
                slots = {},
                ...other
              } = props,
              ownerState = props,
              classes = (ownerState => {
                const { classes } = ownerState
                return (0, composeClasses.A)(
                  {
                    root: ['root'],
                    toolbar: ['toolbar'],
                    spacer: ['spacer'],
                    selectLabel: ['selectLabel'],
                    select: ['select'],
                    input: ['input'],
                    selectIcon: ['selectIcon'],
                    menuItem: ['menuItem'],
                    displayedRows: ['displayedRows'],
                    actions: ['actions'],
                  },
                  getTablePaginationUtilityClass,
                  classes
                )
              })(ownerState),
              selectProps = slotProps?.select ?? SelectProps,
              MenuItemComponent = selectProps.native
                ? 'option'
                : TablePaginationMenuItem
            let colSpan
            ;(component !== TableCell.A && 'td' !== component) ||
              (colSpan = colSpanProp || 1e3)
            const selectId = (0, useId.A)(selectProps.id),
              labelId = (0, useId.A)(selectProps.labelId),
              externalForwardedProps = { slots, slotProps },
              [RootSlot, rootSlotProps] = (0, useSlot.A)('root', {
                ref,
                className: classes.root,
                elementType: TablePaginationRoot,
                externalForwardedProps: {
                  ...externalForwardedProps,
                  component,
                  ...other,
                },
                ownerState,
                additionalProps: { colSpan },
              }),
              [ToolbarSlot, toolbarSlotProps] = (0, useSlot.A)('toolbar', {
                className: classes.toolbar,
                elementType: TablePaginationToolbar,
                externalForwardedProps,
                ownerState,
              }),
              [SpacerSlot, spacerSlotProps] = (0, useSlot.A)('spacer', {
                className: classes.spacer,
                elementType: TablePaginationSpacer,
                externalForwardedProps,
                ownerState,
              }),
              [SelectLabelSlot, selectLabelSlotProps] = (0, useSlot.A)(
                'selectLabel',
                {
                  className: classes.selectLabel,
                  elementType: TablePaginationSelectLabel,
                  externalForwardedProps,
                  ownerState,
                  additionalProps: { id: labelId },
                }
              ),
              [SelectSlot, selectSlotProps] = (0, useSlot.A)('select', {
                className: classes.select,
                elementType: TablePaginationSelect,
                externalForwardedProps,
                ownerState,
              }),
              [MenuItemSlot, menuItemSlotProps] = (0, useSlot.A)('menuItem', {
                className: classes.menuItem,
                elementType: MenuItemComponent,
                externalForwardedProps,
                ownerState,
              }),
              [DisplayedRows, displayedRowsProps] = (0, useSlot.A)(
                'displayedRows',
                {
                  className: classes.displayedRows,
                  elementType: TablePaginationDisplayedRows,
                  externalForwardedProps,
                  ownerState,
                }
              )
            return (0, jsx_runtime.jsx)(RootSlot, {
              ...rootSlotProps,
              children: (0, jsx_runtime.jsxs)(ToolbarSlot, {
                ...toolbarSlotProps,
                children: [
                  (0, jsx_runtime.jsx)(SpacerSlot, { ...spacerSlotProps }),
                  rowsPerPageOptions.length > 1 &&
                    (0, jsx_runtime.jsx)(SelectLabelSlot, {
                      ...selectLabelSlotProps,
                      children: labelRowsPerPage,
                    }),
                  rowsPerPageOptions.length > 1 &&
                    (0, jsx_runtime.jsx)(SelectSlot, {
                      variant: 'standard',
                      ...(!selectProps.variant && {
                        input:
                          _InputBase ||
                          (_InputBase = (0, jsx_runtime.jsx)(InputBase.Ay, {})),
                      }),
                      value: rowsPerPage,
                      onChange: onRowsPerPageChange,
                      id: selectId,
                      labelId,
                      ...selectProps,
                      classes: {
                        ...selectProps.classes,
                        root: (0, clsx.A)(
                          classes.input,
                          classes.selectRoot,
                          (selectProps.classes || {}).root
                        ),
                        select: (0, clsx.A)(
                          classes.select,
                          (selectProps.classes || {}).select
                        ),
                        icon: (0, clsx.A)(
                          classes.selectIcon,
                          (selectProps.classes || {}).icon
                        ),
                      },
                      disabled,
                      ...selectSlotProps,
                      children: rowsPerPageOptions.map(rowsPerPageOption =>
                        (0, react.createElement)(
                          MenuItemSlot,
                          {
                            ...menuItemSlotProps,
                            key: rowsPerPageOption.label
                              ? rowsPerPageOption.label
                              : rowsPerPageOption,
                            value: rowsPerPageOption.value
                              ? rowsPerPageOption.value
                              : rowsPerPageOption,
                          },
                          rowsPerPageOption.label
                            ? rowsPerPageOption.label
                            : rowsPerPageOption
                        )
                      ),
                    }),
                  (0, jsx_runtime.jsx)(DisplayedRows, {
                    ...displayedRowsProps,
                    children: labelDisplayedRows({
                      from: 0 === count ? 0 : page * rowsPerPage + 1,
                      to:
                        -1 === count
                          ? (page + 1) * rowsPerPage
                          : -1 === rowsPerPage
                            ? count
                            : Math.min(count, (page + 1) * rowsPerPage),
                      count: -1 === count ? -1 : count,
                      page,
                    }),
                  }),
                  (0, jsx_runtime.jsx)(ActionsComponent, {
                    className: classes.actions,
                    backIconButtonProps,
                    count,
                    nextIconButtonProps,
                    onPageChange,
                    page,
                    rowsPerPage,
                    showFirstButton,
                    showLastButton,
                    slotProps: slotProps.actions,
                    slots: slots.actions,
                    getItemAriaLabel,
                    disabled,
                  }),
                ],
              }),
            })
          }
        )
      },
      './node_modules/@mui/material/TableRow/TableRow.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => TableRow_TableRow,
        })
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
          Tablelvl2Context = __webpack_require__(
            './node_modules/@mui/material/Table/Tablelvl2Context.js'
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
        function getTableRowUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiTableRow', slot)
        }
        const TableRow_tableRowClasses = (0, generateUtilityClasses.A)(
          'MuiTableRow',
          ['root', 'selected', 'hover', 'head', 'footer']
        )
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const TableRowRoot = (0, styled.Ay)('tr', {
            name: 'MuiTableRow',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.root,
                ownerState.head && styles.head,
                ownerState.footer && styles.footer,
              ]
            },
          })(
            (0, memoTheme.A)(({ theme }) => ({
              color: 'inherit',
              display: 'table-row',
              verticalAlign: 'middle',
              outline: 0,
              [`&.${TableRow_tableRowClasses.hover}:hover`]: {
                backgroundColor: (theme.vars || theme).palette.action.hover,
              },
              [`&.${TableRow_tableRowClasses.selected}`]: {
                backgroundColor: theme.vars
                  ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`
                  : (0, colorManipulator.X4)(
                      theme.palette.primary.main,
                      theme.palette.action.selectedOpacity
                    ),
                '&:hover': {
                  backgroundColor: theme.vars
                    ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))`
                    : (0, colorManipulator.X4)(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity +
                          theme.palette.action.hoverOpacity
                      ),
                },
              },
            }))
          ),
          defaultComponent = 'tr',
          TableRow_TableRow = react.forwardRef(function TableRow(inProps, ref) {
            const props = (0, DefaultPropsProvider.b)({
                props: inProps,
                name: 'MuiTableRow',
              }),
              {
                className,
                component = defaultComponent,
                hover = !1,
                selected = !1,
                ...other
              } = props,
              tablelvl2 = react.useContext(Tablelvl2Context.A),
              ownerState = {
                ...props,
                component,
                hover,
                selected,
                head: tablelvl2 && 'head' === tablelvl2.variant,
                footer: tablelvl2 && 'footer' === tablelvl2.variant,
              },
              classes = (ownerState => {
                const { classes, selected, hover, head, footer } = ownerState,
                  slots = {
                    root: [
                      'root',
                      selected && 'selected',
                      hover && 'hover',
                      head && 'head',
                      footer && 'footer',
                    ],
                  }
                return (0, composeClasses.A)(
                  slots,
                  getTableRowUtilityClass,
                  classes
                )
              })(ownerState)
            return (0, jsx_runtime.jsx)(TableRowRoot, {
              as: component,
              ref,
              className: (0, clsx.A)(classes.root, className),
              role: component === defaultComponent ? null : 'row',
              ownerState,
              ...other,
            })
          })
      },
      './node_modules/@mui/material/Table/Table.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Table_Table })
        var react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
          composeClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/composeClasses/composeClasses.js'
          ),
          TableContext = __webpack_require__(
            './node_modules/@mui/material/Table/TableContext.js'
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
        function getTableUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiTable', slot)
        }
        ;(0, generateUtilityClasses.A)('MuiTable', ['root', 'stickyHeader'])
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const TableRoot = (0, styled.Ay)('table', {
            name: 'MuiTable',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.root,
                ownerState.stickyHeader && styles.stickyHeader,
              ]
            },
          })(
            (0, memoTheme.A)(({ theme }) => ({
              display: 'table',
              width: '100%',
              borderCollapse: 'collapse',
              borderSpacing: 0,
              '& caption': {
                ...theme.typography.body2,
                padding: theme.spacing(2),
                color: (theme.vars || theme).palette.text.secondary,
                textAlign: 'left',
                captionSide: 'bottom',
              },
              variants: [
                {
                  props: ({ ownerState }) => ownerState.stickyHeader,
                  style: { borderCollapse: 'separate' },
                },
              ],
            }))
          ),
          defaultComponent = 'table',
          Table_Table = react.forwardRef(function Table(inProps, ref) {
            const props = (0, DefaultPropsProvider.b)({
                props: inProps,
                name: 'MuiTable',
              }),
              {
                className,
                component = defaultComponent,
                padding = 'normal',
                size = 'medium',
                stickyHeader = !1,
                ...other
              } = props,
              ownerState = { ...props, component, padding, size, stickyHeader },
              classes = (ownerState => {
                const { classes, stickyHeader } = ownerState,
                  slots = { root: ['root', stickyHeader && 'stickyHeader'] }
                return (0, composeClasses.A)(
                  slots,
                  getTableUtilityClass,
                  classes
                )
              })(ownerState),
              table = react.useMemo(
                () => ({ padding, size, stickyHeader }),
                [padding, size, stickyHeader]
              )
            return (0, jsx_runtime.jsx)(TableContext.A.Provider, {
              value: table,
              children: (0, jsx_runtime.jsx)(TableRoot, {
                as: component,
                role: component === defaultComponent ? null : 'table',
                ref,
                className: (0, clsx.A)(classes.root, className),
                ownerState,
                ...other,
              }),
            })
          })
      },
      './node_modules/@mui/material/Table/TableContext.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        const __WEBPACK_DEFAULT_EXPORT__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ).createContext()
      },
      './node_modules/@mui/material/Table/Tablelvl2Context.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        const __WEBPACK_DEFAULT_EXPORT__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ).createContext()
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
      './node_modules/@mui/material/useMediaQuery/index.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => material_useMediaQuery,
        })
        var react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          react_namespaceObject = __webpack_require__.t(react, 2),
          useEnhancedEffect = __webpack_require__(
            './node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js'
          ),
          getThemeProps = __webpack_require__(
            './node_modules/@mui/system/esm/useThemeProps/getThemeProps.js'
          ),
          useThemeWithoutDefault = __webpack_require__(
            './node_modules/@mui/system/esm/useThemeWithoutDefault/useThemeWithoutDefault.js'
          )
        function useMediaQueryOld(
          query,
          defaultMatches,
          matchMedia,
          ssrMatchMedia,
          noSsr
        ) {
          const [match, setMatch] = react.useState(() =>
            noSsr && matchMedia
              ? matchMedia(query).matches
              : ssrMatchMedia
                ? ssrMatchMedia(query).matches
                : defaultMatches
          )
          return (
            (0, useEnhancedEffect.A)(() => {
              if (!matchMedia) return
              const queryList = matchMedia(query),
                updateMatch = () => {
                  setMatch(queryList.matches)
                }
              return (
                updateMatch(),
                queryList.addEventListener('change', updateMatch),
                () => {
                  queryList.removeEventListener('change', updateMatch)
                }
              )
            }, [query, matchMedia]),
            match
          )
        }
        const maybeReactUseSyncExternalStore = { ...react_namespaceObject }
          .useSyncExternalStore
        function useMediaQueryNew(
          query,
          defaultMatches,
          matchMedia,
          ssrMatchMedia,
          noSsr
        ) {
          const getDefaultSnapshot = react.useCallback(
              () => defaultMatches,
              [defaultMatches]
            ),
            getServerSnapshot = react.useMemo(() => {
              if (noSsr && matchMedia) return () => matchMedia(query).matches
              if (null !== ssrMatchMedia) {
                const { matches } = ssrMatchMedia(query)
                return () => matches
              }
              return getDefaultSnapshot
            }, [getDefaultSnapshot, query, ssrMatchMedia, noSsr, matchMedia]),
            [getSnapshot, subscribe] = react.useMemo(() => {
              if (null === matchMedia)
                return [getDefaultSnapshot, () => () => {}]
              const mediaQueryList = matchMedia(query)
              return [
                () => mediaQueryList.matches,
                notify => (
                  mediaQueryList.addEventListener('change', notify),
                  () => {
                    mediaQueryList.removeEventListener('change', notify)
                  }
                ),
              ]
            }, [getDefaultSnapshot, matchMedia, query])
          return maybeReactUseSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          )
        }
        function unstable_createUseMediaQuery(params = {}) {
          const { themeId } = params
          return function useMediaQuery(queryInput, options = {}) {
            let theme = (0, useThemeWithoutDefault.A)()
            theme && themeId && (theme = theme[themeId] || theme)
            const supportMatchMedia =
                'undefined' != typeof window && void 0 !== window.matchMedia,
              {
                defaultMatches = !1,
                matchMedia = supportMatchMedia ? window.matchMedia : null,
                ssrMatchMedia = null,
                noSsr = !1,
              } = (0, getThemeProps.A)({
                name: 'MuiUseMediaQuery',
                props: options,
                theme,
              })
            let query =
              'function' == typeof queryInput ? queryInput(theme) : queryInput
            query = query.replace(/^@media( ?)/m, '')
            return (
              void 0 !== maybeReactUseSyncExternalStore
                ? useMediaQueryNew
                : useMediaQueryOld
            )(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr)
          }
        }
        unstable_createUseMediaQuery()
        const material_useMediaQuery = unstable_createUseMediaQuery({
          themeId: __webpack_require__(
            './node_modules/@mui/material/styles/identifier.js'
          ).A,
        })
      },
      './node_modules/jotai/esm/vanilla/utils.mjs': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          tG: () => atomWithStorage,
        })
        var jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/jotai/esm/vanilla.mjs'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const RESET = Symbol('RESET')
        const isPromiseLike = x =>
          'function' == typeof (null == x ? void 0 : x.then)
        const defaultStorage = (function createJSONStorage(
          getStringStorage = () => {
            try {
              return window.localStorage
            } catch (e) {
              return void ('undefined' != typeof window && console.warn(e))
            }
          },
          options
        ) {
          var _a
          let lastStr, lastValue
          const storage = {
            getItem: (key, initialValue) => {
              var _a2, _b
              const parse = str2 => {
                  if (lastStr !== (str2 = str2 || '')) {
                    try {
                      lastValue = JSON.parse(
                        str2,
                        null == options ? void 0 : options.reviver
                      )
                    } catch (e) {
                      return initialValue
                    }
                    lastStr = str2
                  }
                  return lastValue
                },
                str =
                  null !=
                  (_b =
                    null == (_a2 = getStringStorage())
                      ? void 0
                      : _a2.getItem(key))
                    ? _b
                    : null
              return isPromiseLike(str) ? str.then(parse) : parse(str)
            },
            setItem: (key, newValue) => {
              var _a2
              return null == (_a2 = getStringStorage())
                ? void 0
                : _a2.setItem(
                    key,
                    JSON.stringify(
                      newValue,
                      null == options ? void 0 : options.replacer
                    )
                  )
            },
            removeItem: key => {
              var _a2
              return null == (_a2 = getStringStorage())
                ? void 0
                : _a2.removeItem(key)
            },
          }
          let subscriber
          try {
            subscriber =
              null == (_a = getStringStorage()) ? void 0 : _a.subscribe
          } catch (e) {}
          var subscriber2
          return (
            !subscriber &&
              'undefined' != typeof window &&
              'function' == typeof window.addEventListener &&
              window.Storage &&
              (subscriber = (key, callback) => {
                if (!(getStringStorage() instanceof window.Storage))
                  return () => {}
                const storageEventCallback = e => {
                  e.storageArea === getStringStorage() &&
                    e.key === key &&
                    callback(e.newValue)
                }
                return (
                  window.addEventListener('storage', storageEventCallback),
                  () => {
                    window.removeEventListener('storage', storageEventCallback)
                  }
                )
              }),
            subscriber &&
              (storage.subscribe =
                ((subscriber2 = subscriber),
                (key, callback, initialValue) =>
                  subscriber2(key, v => {
                    let newValue
                    try {
                      newValue = JSON.parse(v || '')
                    } catch (e) {
                      newValue = initialValue
                    }
                    callback(newValue)
                  }))),
            storage
          )
        })()
        function atomWithStorage(
          key,
          initialValue,
          storage = defaultStorage,
          options
        ) {
          const getOnInit = null == options ? void 0 : options.getOnInit,
            baseAtom = (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
              getOnInit ? storage.getItem(key, initialValue) : initialValue
            )
          ;(baseAtom.debugPrivate = !0),
            (baseAtom.onMount = setAtom => {
              let unsub
              return (
                setAtom(storage.getItem(key, initialValue)),
                storage.subscribe &&
                  (unsub = storage.subscribe(key, setAtom, initialValue)),
                unsub
              )
            })
          return (0, jotai_vanilla__WEBPACK_IMPORTED_MODULE_0__.eU)(
            get => get(baseAtom),
            (get, set, update) => {
              const nextValue =
                'function' == typeof update ? update(get(baseAtom)) : update
              return nextValue === RESET
                ? (set(baseAtom, initialValue), storage.removeItem(key))
                : nextValue instanceof Promise
                  ? nextValue.then(
                      resolvedValue => (
                        set(baseAtom, resolvedValue),
                        storage.setItem(key, resolvedValue)
                      )
                    )
                  : (set(baseAtom, nextValue), storage.setItem(key, nextValue))
            }
          )
        }
      },
    },
  ]
)
