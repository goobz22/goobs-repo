'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [5486],
    {
      './node_modules/@mui/icons-material/esm/ExpandMore.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/@mui/material/utils/createSvgIcon.js'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        const __WEBPACK_DEFAULT_EXPORT__ = (0,
        _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__.A)(
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('path', {
            d: 'M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z',
          }),
          'ExpandMore'
        )
      },
      './node_modules/@mui/material/AccordionDetails/AccordionDetails.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => AccordionDetails_AccordionDetails,
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
          generateUtilityClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          generateUtilityClass = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
          )
        function getAccordionDetailsUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiAccordionDetails', slot)
        }
        ;(0, generateUtilityClasses.A)('MuiAccordionDetails', ['root'])
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const AccordionDetailsRoot = (0, styled.Ay)('div', {
            name: 'MuiAccordionDetails',
            slot: 'Root',
            overridesResolver: (props, styles) => styles.root,
          })(
            (0, memoTheme.A)(({ theme }) => ({
              padding: theme.spacing(1, 2, 2),
            }))
          ),
          AccordionDetails_AccordionDetails = react.forwardRef(
            function AccordionDetails(inProps, ref) {
              const props = (0, DefaultPropsProvider.b)({
                  props: inProps,
                  name: 'MuiAccordionDetails',
                }),
                { className, ...other } = props,
                ownerState = props,
                classes = (ownerState => {
                  const { classes } = ownerState
                  return (0, composeClasses.A)(
                    { root: ['root'] },
                    getAccordionDetailsUtilityClass,
                    classes
                  )
                })(ownerState)
              return (0, jsx_runtime.jsx)(AccordionDetailsRoot, {
                className: (0, clsx.A)(classes.root, className),
                ref,
                ownerState,
                ...other,
              })
            }
          )
      },
      './node_modules/@mui/material/AccordionSummary/AccordionSummary.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => AccordionSummary_AccordionSummary,
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
          ButtonBase = __webpack_require__(
            './node_modules/@mui/material/ButtonBase/ButtonBase.js'
          ),
          AccordionContext = __webpack_require__(
            './node_modules/@mui/material/Accordion/AccordionContext.js'
          ),
          generateUtilityClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          generateUtilityClass = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
          )
        function getAccordionSummaryUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiAccordionSummary', slot)
        }
        const AccordionSummary_accordionSummaryClasses = (0,
        generateUtilityClasses.A)('MuiAccordionSummary', [
          'root',
          'expanded',
          'focusVisible',
          'disabled',
          'gutters',
          'contentGutters',
          'content',
          'expandIconWrapper',
        ])
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const AccordionSummaryRoot = (0, styled.Ay)(ButtonBase.A, {
            name: 'MuiAccordionSummary',
            slot: 'Root',
            overridesResolver: (props, styles) => styles.root,
          })(
            (0, memoTheme.A)(({ theme }) => {
              const transition = {
                duration: theme.transitions.duration.shortest,
              }
              return {
                display: 'flex',
                width: '100%',
                minHeight: 48,
                padding: theme.spacing(0, 2),
                transition: theme.transitions.create(
                  ['min-height', 'background-color'],
                  transition
                ),
                [`&.${AccordionSummary_accordionSummaryClasses.focusVisible}`]:
                  {
                    backgroundColor: (theme.vars || theme).palette.action.focus,
                  },
                [`&.${AccordionSummary_accordionSummaryClasses.disabled}`]: {
                  opacity: (theme.vars || theme).palette.action.disabledOpacity,
                },
                [`&:hover:not(.${AccordionSummary_accordionSummaryClasses.disabled})`]:
                  { cursor: 'pointer' },
                variants: [
                  {
                    props: props => !props.disableGutters,
                    style: {
                      [`&.${AccordionSummary_accordionSummaryClasses.expanded}`]:
                        { minHeight: 64 },
                    },
                  },
                ],
              }
            })
          ),
          AccordionSummaryContent = (0, styled.Ay)('span', {
            name: 'MuiAccordionSummary',
            slot: 'Content',
            overridesResolver: (props, styles) => styles.content,
          })(
            (0, memoTheme.A)(({ theme }) => ({
              display: 'flex',
              textAlign: 'start',
              flexGrow: 1,
              margin: '12px 0',
              variants: [
                {
                  props: props => !props.disableGutters,
                  style: {
                    transition: theme.transitions.create(['margin'], {
                      duration: theme.transitions.duration.shortest,
                    }),
                    [`&.${AccordionSummary_accordionSummaryClasses.expanded}`]:
                      { margin: '20px 0' },
                  },
                },
              ],
            }))
          ),
          AccordionSummaryExpandIconWrapper = (0, styled.Ay)('span', {
            name: 'MuiAccordionSummary',
            slot: 'ExpandIconWrapper',
            overridesResolver: (props, styles) => styles.expandIconWrapper,
          })(
            (0, memoTheme.A)(({ theme }) => ({
              display: 'flex',
              color: (theme.vars || theme).palette.action.active,
              transform: 'rotate(0deg)',
              transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
              }),
              [`&.${AccordionSummary_accordionSummaryClasses.expanded}`]: {
                transform: 'rotate(180deg)',
              },
            }))
          ),
          AccordionSummary_AccordionSummary = react.forwardRef(
            function AccordionSummary(inProps, ref) {
              const props = (0, DefaultPropsProvider.b)({
                  props: inProps,
                  name: 'MuiAccordionSummary',
                }),
                {
                  children,
                  className,
                  expandIcon,
                  focusVisibleClassName,
                  onClick,
                  ...other
                } = props,
                {
                  disabled = !1,
                  disableGutters,
                  expanded,
                  toggle,
                } = react.useContext(AccordionContext.A),
                ownerState = { ...props, expanded, disabled, disableGutters },
                classes = (ownerState => {
                  const { classes, expanded, disabled, disableGutters } =
                      ownerState,
                    slots = {
                      root: [
                        'root',
                        expanded && 'expanded',
                        disabled && 'disabled',
                        !disableGutters && 'gutters',
                      ],
                      focusVisible: ['focusVisible'],
                      content: [
                        'content',
                        expanded && 'expanded',
                        !disableGutters && 'contentGutters',
                      ],
                      expandIconWrapper: [
                        'expandIconWrapper',
                        expanded && 'expanded',
                      ],
                    }
                  return (0, composeClasses.A)(
                    slots,
                    getAccordionSummaryUtilityClass,
                    classes
                  )
                })(ownerState)
              return (0, jsx_runtime.jsxs)(AccordionSummaryRoot, {
                focusRipple: !1,
                disableRipple: !0,
                disabled,
                'aria-expanded': expanded,
                className: (0, clsx.A)(classes.root, className),
                focusVisibleClassName: (0, clsx.A)(
                  classes.focusVisible,
                  focusVisibleClassName
                ),
                onClick: event => {
                  toggle && toggle(event), onClick && onClick(event)
                },
                ref,
                ownerState,
                ...other,
                children: [
                  (0, jsx_runtime.jsx)(AccordionSummaryContent, {
                    className: classes.content,
                    ownerState,
                    children,
                  }),
                  expandIcon &&
                    (0, jsx_runtime.jsx)(AccordionSummaryExpandIconWrapper, {
                      className: classes.expandIconWrapper,
                      ownerState,
                      children: expandIcon,
                    }),
                ],
              })
            }
          )
      },
      './node_modules/@mui/material/Accordion/Accordion.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => Accordion_Accordion,
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
          Transition = __webpack_require__(
            './node_modules/react-transition-group/esm/Transition.js'
          ),
          useTimeout = __webpack_require__(
            './node_modules/@mui/utils/esm/useTimeout/useTimeout.js'
          ),
          useTheme = __webpack_require__(
            './node_modules/@mui/material/styles/useTheme.js'
          ),
          createTransitions = __webpack_require__(
            './node_modules/@mui/material/styles/createTransitions.js'
          ),
          utils = __webpack_require__(
            './node_modules/@mui/material/transitions/utils.js'
          ),
          useForkRef = __webpack_require__(
            './node_modules/@mui/material/utils/useForkRef.js'
          ),
          generateUtilityClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          generateUtilityClass = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
          )
        function getCollapseUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiCollapse', slot)
        }
        ;(0, generateUtilityClasses.A)('MuiCollapse', [
          'root',
          'horizontal',
          'vertical',
          'entered',
          'hidden',
          'wrapper',
          'wrapperInner',
        ])
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const CollapseRoot = (0, styled.Ay)('div', {
            name: 'MuiCollapse',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.root,
                styles[ownerState.orientation],
                'entered' === ownerState.state && styles.entered,
                'exited' === ownerState.state &&
                  !ownerState.in &&
                  '0px' === ownerState.collapsedSize &&
                  styles.hidden,
              ]
            },
          })(
            (0, memoTheme.A)(({ theme }) => ({
              height: 0,
              overflow: 'hidden',
              transition: theme.transitions.create('height'),
              variants: [
                {
                  props: { orientation: 'horizontal' },
                  style: {
                    height: 'auto',
                    width: 0,
                    transition: theme.transitions.create('width'),
                  },
                },
                {
                  props: { state: 'entered' },
                  style: { height: 'auto', overflow: 'visible' },
                },
                {
                  props: { state: 'entered', orientation: 'horizontal' },
                  style: { width: 'auto' },
                },
                {
                  props: ({ ownerState }) =>
                    'exited' === ownerState.state &&
                    !ownerState.in &&
                    '0px' === ownerState.collapsedSize,
                  style: { visibility: 'hidden' },
                },
              ],
            }))
          ),
          CollapseWrapper = (0, styled.Ay)('div', {
            name: 'MuiCollapse',
            slot: 'Wrapper',
            overridesResolver: (props, styles) => styles.wrapper,
          })({
            display: 'flex',
            width: '100%',
            variants: [
              {
                props: { orientation: 'horizontal' },
                style: { width: 'auto', height: '100%' },
              },
            ],
          }),
          CollapseWrapperInner = (0, styled.Ay)('div', {
            name: 'MuiCollapse',
            slot: 'WrapperInner',
            overridesResolver: (props, styles) => styles.wrapperInner,
          })({
            width: '100%',
            variants: [
              {
                props: { orientation: 'horizontal' },
                style: { width: 'auto', height: '100%' },
              },
            ],
          }),
          Collapse = react.forwardRef(function Collapse(inProps, ref) {
            const props = (0, DefaultPropsProvider.b)({
                props: inProps,
                name: 'MuiCollapse',
              }),
              {
                addEndListener,
                children,
                className,
                collapsedSize: collapsedSizeProp = '0px',
                component,
                easing,
                in: inProp,
                onEnter,
                onEntered,
                onEntering,
                onExit,
                onExited,
                onExiting,
                orientation = 'vertical',
                style,
                timeout = createTransitions.p0.standard,
                TransitionComponent = Transition.Ay,
                ...other
              } = props,
              ownerState = {
                ...props,
                orientation,
                collapsedSize: collapsedSizeProp,
              },
              classes = (ownerState => {
                const { orientation, classes } = ownerState,
                  slots = {
                    root: ['root', `${orientation}`],
                    entered: ['entered'],
                    hidden: ['hidden'],
                    wrapper: ['wrapper', `${orientation}`],
                    wrapperInner: ['wrapperInner', `${orientation}`],
                  }
                return (0, composeClasses.A)(
                  slots,
                  getCollapseUtilityClass,
                  classes
                )
              })(ownerState),
              theme = (0, useTheme.A)(),
              timer = (0, useTimeout.A)(),
              wrapperRef = react.useRef(null),
              autoTransitionDuration = react.useRef(),
              collapsedSize =
                'number' == typeof collapsedSizeProp
                  ? `${collapsedSizeProp}px`
                  : collapsedSizeProp,
              isHorizontal = 'horizontal' === orientation,
              size = isHorizontal ? 'width' : 'height',
              nodeRef = react.useRef(null),
              handleRef = (0, useForkRef.A)(ref, nodeRef),
              normalizedTransitionCallback = callback => maybeIsAppearing => {
                if (callback) {
                  const node = nodeRef.current
                  void 0 === maybeIsAppearing
                    ? callback(node)
                    : callback(node, maybeIsAppearing)
                }
              },
              getWrapperSize = () =>
                wrapperRef.current
                  ? wrapperRef.current[
                      isHorizontal ? 'clientWidth' : 'clientHeight'
                    ]
                  : 0,
              handleEnter = normalizedTransitionCallback(
                (node, isAppearing) => {
                  wrapperRef.current &&
                    isHorizontal &&
                    (wrapperRef.current.style.position = 'absolute'),
                    (node.style[size] = collapsedSize),
                    onEnter && onEnter(node, isAppearing)
                }
              ),
              handleEntering = normalizedTransitionCallback(
                (node, isAppearing) => {
                  const wrapperSize = getWrapperSize()
                  wrapperRef.current &&
                    isHorizontal &&
                    (wrapperRef.current.style.position = '')
                  const {
                    duration: transitionDuration,
                    easing: transitionTimingFunction,
                  } = (0, utils.c)(
                    { style, timeout, easing },
                    { mode: 'enter' }
                  )
                  if ('auto' === timeout) {
                    const duration2 =
                      theme.transitions.getAutoHeightDuration(wrapperSize)
                    ;(node.style.transitionDuration = `${duration2}ms`),
                      (autoTransitionDuration.current = duration2)
                  } else
                    node.style.transitionDuration =
                      'string' == typeof transitionDuration
                        ? transitionDuration
                        : `${transitionDuration}ms`
                  ;(node.style[size] = `${wrapperSize}px`),
                    (node.style.transitionTimingFunction =
                      transitionTimingFunction),
                    onEntering && onEntering(node, isAppearing)
                }
              ),
              handleEntered = normalizedTransitionCallback(
                (node, isAppearing) => {
                  ;(node.style[size] = 'auto'),
                    onEntered && onEntered(node, isAppearing)
                }
              ),
              handleExit = normalizedTransitionCallback(node => {
                ;(node.style[size] = `${getWrapperSize()}px`),
                  onExit && onExit(node)
              }),
              handleExited = normalizedTransitionCallback(onExited),
              handleExiting = normalizedTransitionCallback(node => {
                const wrapperSize = getWrapperSize(),
                  {
                    duration: transitionDuration,
                    easing: transitionTimingFunction,
                  } = (0, utils.c)({ style, timeout, easing }, { mode: 'exit' })
                if ('auto' === timeout) {
                  const duration2 =
                    theme.transitions.getAutoHeightDuration(wrapperSize)
                  ;(node.style.transitionDuration = `${duration2}ms`),
                    (autoTransitionDuration.current = duration2)
                } else
                  node.style.transitionDuration =
                    'string' == typeof transitionDuration
                      ? transitionDuration
                      : `${transitionDuration}ms`
                ;(node.style[size] = collapsedSize),
                  (node.style.transitionTimingFunction =
                    transitionTimingFunction),
                  onExiting && onExiting(node)
              })
            return (0, jsx_runtime.jsx)(TransitionComponent, {
              in: inProp,
              onEnter: handleEnter,
              onEntered: handleEntered,
              onEntering: handleEntering,
              onExit: handleExit,
              onExited: handleExited,
              onExiting: handleExiting,
              addEndListener: next => {
                'auto' === timeout &&
                  timer.start(autoTransitionDuration.current || 0, next),
                  addEndListener && addEndListener(nodeRef.current, next)
              },
              nodeRef,
              timeout: 'auto' === timeout ? null : timeout,
              ...other,
              children: (
                state,
                { ownerState: incomingOwnerState, ...restChildProps }
              ) =>
                (0, jsx_runtime.jsx)(CollapseRoot, {
                  as: component,
                  className: (0, clsx.A)(
                    classes.root,
                    className,
                    {
                      entered: classes.entered,
                      exited:
                        !inProp && '0px' === collapsedSize && classes.hidden,
                    }[state]
                  ),
                  style: {
                    [isHorizontal ? 'minWidth' : 'minHeight']: collapsedSize,
                    ...style,
                  },
                  ref: handleRef,
                  ownerState: { ...ownerState, state },
                  ...restChildProps,
                  children: (0, jsx_runtime.jsx)(CollapseWrapper, {
                    ownerState: { ...ownerState, state },
                    className: classes.wrapper,
                    ref: wrapperRef,
                    children: (0, jsx_runtime.jsx)(CollapseWrapperInner, {
                      ownerState: { ...ownerState, state },
                      className: classes.wrapperInner,
                      children,
                    }),
                  }),
                }),
            })
          })
        Collapse && (Collapse.muiSupportAuto = !0)
        const Collapse_Collapse = Collapse
        var Paper = __webpack_require__(
            './node_modules/@mui/material/Paper/Paper.js'
          ),
          AccordionContext = __webpack_require__(
            './node_modules/@mui/material/Accordion/AccordionContext.js'
          ),
          useControlled = __webpack_require__(
            './node_modules/@mui/material/utils/useControlled.js'
          ),
          useSlot = __webpack_require__(
            './node_modules/@mui/material/utils/useSlot.js'
          )
        function getAccordionUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiAccordion', slot)
        }
        const Accordion_accordionClasses = (0, generateUtilityClasses.A)(
            'MuiAccordion',
            [
              'root',
              'heading',
              'rounded',
              'expanded',
              'disabled',
              'gutters',
              'region',
            ]
          ),
          AccordionRoot = (0, styled.Ay)(Paper.A, {
            name: 'MuiAccordion',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                { [`& .${Accordion_accordionClasses.region}`]: styles.region },
                styles.root,
                !ownerState.square && styles.rounded,
                !ownerState.disableGutters && styles.gutters,
              ]
            },
          })(
            (0, memoTheme.A)(({ theme }) => {
              const transition = {
                duration: theme.transitions.duration.shortest,
              }
              return {
                position: 'relative',
                transition: theme.transitions.create(['margin'], transition),
                overflowAnchor: 'none',
                '&::before': {
                  position: 'absolute',
                  left: 0,
                  top: -1,
                  right: 0,
                  height: 1,
                  content: '""',
                  opacity: 1,
                  backgroundColor: (theme.vars || theme).palette.divider,
                  transition: theme.transitions.create(
                    ['opacity', 'background-color'],
                    transition
                  ),
                },
                '&:first-of-type': { '&::before': { display: 'none' } },
                [`&.${Accordion_accordionClasses.expanded}`]: {
                  '&::before': { opacity: 0 },
                  '&:first-of-type': { marginTop: 0 },
                  '&:last-of-type': { marginBottom: 0 },
                  '& + &': { '&::before': { display: 'none' } },
                },
                [`&.${Accordion_accordionClasses.disabled}`]: {
                  backgroundColor: (theme.vars || theme).palette.action
                    .disabledBackground,
                },
              }
            }),
            (0, memoTheme.A)(({ theme }) => ({
              variants: [
                {
                  props: props => !props.square,
                  style: {
                    borderRadius: 0,
                    '&:first-of-type': {
                      borderTopLeftRadius: (theme.vars || theme).shape
                        .borderRadius,
                      borderTopRightRadius: (theme.vars || theme).shape
                        .borderRadius,
                    },
                    '&:last-of-type': {
                      borderBottomLeftRadius: (theme.vars || theme).shape
                        .borderRadius,
                      borderBottomRightRadius: (theme.vars || theme).shape
                        .borderRadius,
                      '@supports (-ms-ime-align: auto)': {
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                      },
                    },
                  },
                },
                {
                  props: props => !props.disableGutters,
                  style: {
                    [`&.${Accordion_accordionClasses.expanded}`]: {
                      margin: '16px 0',
                    },
                  },
                },
              ],
            }))
          ),
          AccordionHeading = (0, styled.Ay)('h3', {
            name: 'MuiAccordion',
            slot: 'Heading',
            overridesResolver: (props, styles) => styles.heading,
          })({ all: 'unset' }),
          Accordion_Accordion = react.forwardRef(
            function Accordion(inProps, ref) {
              const props = (0, DefaultPropsProvider.b)({
                  props: inProps,
                  name: 'MuiAccordion',
                }),
                {
                  children: childrenProp,
                  className,
                  defaultExpanded = !1,
                  disabled = !1,
                  disableGutters = !1,
                  expanded: expandedProp,
                  onChange,
                  square = !1,
                  slots = {},
                  slotProps = {},
                  TransitionComponent: TransitionComponentProp,
                  TransitionProps: TransitionPropsProp,
                  ...other
                } = props,
                [expanded, setExpandedState] = (0, useControlled.A)({
                  controlled: expandedProp,
                  default: defaultExpanded,
                  name: 'Accordion',
                  state: 'expanded',
                }),
                handleChange = react.useCallback(
                  event => {
                    setExpandedState(!expanded),
                      onChange && onChange(event, !expanded)
                  },
                  [expanded, onChange, setExpandedState]
                ),
                [summary, ...children] = react.Children.toArray(childrenProp),
                contextValue = react.useMemo(
                  () => ({
                    expanded,
                    disabled,
                    disableGutters,
                    toggle: handleChange,
                  }),
                  [expanded, disabled, disableGutters, handleChange]
                ),
                ownerState = {
                  ...props,
                  square,
                  disabled,
                  disableGutters,
                  expanded,
                },
                classes = (ownerState => {
                  const {
                      classes,
                      square,
                      expanded,
                      disabled,
                      disableGutters,
                    } = ownerState,
                    slots = {
                      root: [
                        'root',
                        !square && 'rounded',
                        expanded && 'expanded',
                        disabled && 'disabled',
                        !disableGutters && 'gutters',
                      ],
                      heading: ['heading'],
                      region: ['region'],
                    }
                  return (0, composeClasses.A)(
                    slots,
                    getAccordionUtilityClass,
                    classes
                  )
                })(ownerState),
                externalForwardedProps = {
                  slots: { transition: TransitionComponentProp, ...slots },
                  slotProps: { transition: TransitionPropsProp, ...slotProps },
                },
                [AccordionHeadingSlot, accordionProps] = (0, useSlot.A)(
                  'heading',
                  {
                    elementType: AccordionHeading,
                    externalForwardedProps,
                    className: classes.heading,
                    ownerState,
                  }
                ),
                [TransitionSlot, transitionProps] = (0, useSlot.A)(
                  'transition',
                  {
                    elementType: Collapse_Collapse,
                    externalForwardedProps,
                    ownerState,
                  }
                )
              return (0, jsx_runtime.jsxs)(AccordionRoot, {
                className: (0, clsx.A)(classes.root, className),
                ref,
                ownerState,
                square,
                ...other,
                children: [
                  (0, jsx_runtime.jsx)(AccordionHeadingSlot, {
                    ...accordionProps,
                    children: (0, jsx_runtime.jsx)(
                      AccordionContext.A.Provider,
                      { value: contextValue, children: summary }
                    ),
                  }),
                  (0, jsx_runtime.jsx)(TransitionSlot, {
                    in: expanded,
                    timeout: 'auto',
                    ...transitionProps,
                    children: (0, jsx_runtime.jsx)('div', {
                      'aria-labelledby': summary.props.id,
                      id: summary.props['aria-controls'],
                      role: 'region',
                      className: classes.region,
                      children,
                    }),
                  }),
                ],
              })
            }
          )
      },
      './node_modules/@mui/material/Accordion/AccordionContext.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        const __WEBPACK_DEFAULT_EXPORT__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ).createContext({})
      },
    },
  ]
)
