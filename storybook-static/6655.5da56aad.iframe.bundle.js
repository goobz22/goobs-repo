'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [6655],
    {
      './node_modules/@mui/material/Tooltip/Tooltip.js': (
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
          clsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
            './node_modules/clsx/dist/clsx.mjs'
          ),
          _mui_utils_useTimeout__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/useTimeout/useTimeout.js'
            ),
          _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/composeClasses/composeClasses.js'
            ),
          _mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              './node_modules/@mui/system/esm/colorManipulator/colorManipulator.js'
            ),
          _mui_system_RtlProvider__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              './node_modules/@mui/system/esm/RtlProvider/index.js'
            ),
          _mui_utils_isFocusVisible__WEBPACK_IMPORTED_MODULE_16__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js'
            ),
          _mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_18__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js'
            ),
          _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/material/styles/styled.js'
            ),
          _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              './node_modules/@mui/material/styles/useTheme.js'
            ),
          _utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/material/utils/memoTheme.js'
            ),
          _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              './node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js'
            ),
          _utils_capitalize_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@mui/material/utils/capitalize.js'
            ),
          _Grow_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
            './node_modules/@mui/material/Grow/Grow.js'
          ),
          _Popper_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            './node_modules/@mui/material/Popper/Popper.js'
          ),
          _utils_useEventCallback_js__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(
              './node_modules/@mui/material/utils/useEventCallback.js'
            ),
          _utils_useForkRef_js__WEBPACK_IMPORTED_MODULE_17__ =
            __webpack_require__(
              './node_modules/@mui/material/utils/useForkRef.js'
            ),
          _utils_useId_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
            './node_modules/@mui/material/utils/useId.js'
          ),
          _utils_useControlled_js__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(
              './node_modules/@mui/material/utils/useControlled.js'
            ),
          _utils_useSlot_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
            './node_modules/@mui/material/utils/useSlot.js'
          ),
          _tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            './node_modules/@mui/material/Tooltip/tooltipClasses.js'
          ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        const TooltipPopper = (0,
          _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__.Ay)(
            _Popper_index_js__WEBPACK_IMPORTED_MODULE_6__.A,
            {
              name: 'MuiTooltip',
              slot: 'Popper',
              overridesResolver: (props, styles) => {
                const { ownerState } = props
                return [
                  styles.popper,
                  !ownerState.disableInteractive && styles.popperInteractive,
                  ownerState.arrow && styles.popperArrow,
                  !ownerState.open && styles.popperClose,
                ]
              },
            }
          )(
            (0, _utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_7__.A)(
              ({ theme }) => ({
                zIndex: (theme.vars || theme).zIndex.tooltip,
                pointerEvents: 'none',
                variants: [
                  {
                    props: ({ ownerState }) => !ownerState.disableInteractive,
                    style: { pointerEvents: 'auto' },
                  },
                  {
                    props: ({ open }) => !open,
                    style: { pointerEvents: 'none' },
                  },
                  {
                    props: ({ ownerState }) => ownerState.arrow,
                    style: {
                      [`&[data-popper-placement*="bottom"] .${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.arrow}`]:
                        {
                          top: 0,
                          marginTop: '-0.71em',
                          '&::before': { transformOrigin: '0 100%' },
                        },
                      [`&[data-popper-placement*="top"] .${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.arrow}`]:
                        {
                          bottom: 0,
                          marginBottom: '-0.71em',
                          '&::before': { transformOrigin: '100% 0' },
                        },
                      [`&[data-popper-placement*="right"] .${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.arrow}`]:
                        {
                          height: '1em',
                          width: '0.71em',
                          '&::before': { transformOrigin: '100% 100%' },
                        },
                      [`&[data-popper-placement*="left"] .${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.arrow}`]:
                        {
                          height: '1em',
                          width: '0.71em',
                          '&::before': { transformOrigin: '0 0' },
                        },
                    },
                  },
                  {
                    props: ({ ownerState }) =>
                      ownerState.arrow && !ownerState.isRtl,
                    style: {
                      [`&[data-popper-placement*="right"] .${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.arrow}`]:
                        { left: 0, marginLeft: '-0.71em' },
                    },
                  },
                  {
                    props: ({ ownerState }) =>
                      ownerState.arrow && !!ownerState.isRtl,
                    style: {
                      [`&[data-popper-placement*="right"] .${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.arrow}`]:
                        { right: 0, marginRight: '-0.71em' },
                    },
                  },
                  {
                    props: ({ ownerState }) =>
                      ownerState.arrow && !ownerState.isRtl,
                    style: {
                      [`&[data-popper-placement*="left"] .${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.arrow}`]:
                        { right: 0, marginRight: '-0.71em' },
                    },
                  },
                  {
                    props: ({ ownerState }) =>
                      ownerState.arrow && !!ownerState.isRtl,
                    style: {
                      [`&[data-popper-placement*="left"] .${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.arrow}`]:
                        { left: 0, marginLeft: '-0.71em' },
                    },
                  },
                ],
              })
            )
          ),
          TooltipTooltip = (0,
          _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__.Ay)('div', {
            name: 'MuiTooltip',
            slot: 'Tooltip',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.tooltip,
                ownerState.touch && styles.touch,
                ownerState.arrow && styles.tooltipArrow,
                styles[
                  `tooltipPlacement${(0, _utils_capitalize_js__WEBPACK_IMPORTED_MODULE_2__.A)(ownerState.placement.split('-')[0])}`
                ],
              ]
            },
          })(
            (0, _utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_7__.A)(
              ({ theme }) => {
                return {
                  backgroundColor: theme.vars
                    ? theme.vars.palette.Tooltip.bg
                    : (0,
                      _mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_8__.X4)(
                        theme.palette.grey[700],
                        0.92
                      ),
                  borderRadius: (theme.vars || theme).shape.borderRadius,
                  color: (theme.vars || theme).palette.common.white,
                  fontFamily: theme.typography.fontFamily,
                  padding: '4px 8px',
                  fontSize: theme.typography.pxToRem(11),
                  maxWidth: 300,
                  margin: 2,
                  wordWrap: 'break-word',
                  fontWeight: theme.typography.fontWeightMedium,
                  [`.${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.popper}[data-popper-placement*="left"] &`]:
                    { transformOrigin: 'right center' },
                  [`.${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.popper}[data-popper-placement*="right"] &`]:
                    { transformOrigin: 'left center' },
                  [`.${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.popper}[data-popper-placement*="top"] &`]:
                    { transformOrigin: 'center bottom', marginBottom: '14px' },
                  [`.${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.popper}[data-popper-placement*="bottom"] &`]:
                    { transformOrigin: 'center top', marginTop: '14px' },
                  variants: [
                    {
                      props: ({ ownerState }) => ownerState.arrow,
                      style: { position: 'relative', margin: 0 },
                    },
                    {
                      props: ({ ownerState }) => ownerState.touch,
                      style: {
                        padding: '8px 16px',
                        fontSize: theme.typography.pxToRem(14),
                        lineHeight:
                          ((value = 16 / 14), Math.round(1e5 * value) / 1e5) +
                          'em',
                        fontWeight: theme.typography.fontWeightRegular,
                      },
                    },
                    {
                      props: ({ ownerState }) => !ownerState.isRtl,
                      style: {
                        [`.${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.popper}[data-popper-placement*="left"] &`]:
                          { marginRight: '14px' },
                        [`.${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.popper}[data-popper-placement*="right"] &`]:
                          { marginLeft: '14px' },
                      },
                    },
                    {
                      props: ({ ownerState }) =>
                        !ownerState.isRtl && ownerState.touch,
                      style: {
                        [`.${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.popper}[data-popper-placement*="left"] &`]:
                          { marginRight: '24px' },
                        [`.${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.popper}[data-popper-placement*="right"] &`]:
                          { marginLeft: '24px' },
                      },
                    },
                    {
                      props: ({ ownerState }) => !!ownerState.isRtl,
                      style: {
                        [`.${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.popper}[data-popper-placement*="left"] &`]:
                          { marginLeft: '14px' },
                        [`.${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.popper}[data-popper-placement*="right"] &`]:
                          { marginRight: '14px' },
                      },
                    },
                    {
                      props: ({ ownerState }) =>
                        !!ownerState.isRtl && ownerState.touch,
                      style: {
                        [`.${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.popper}[data-popper-placement*="left"] &`]:
                          { marginLeft: '24px' },
                        [`.${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.popper}[data-popper-placement*="right"] &`]:
                          { marginRight: '24px' },
                      },
                    },
                    {
                      props: ({ ownerState }) => ownerState.touch,
                      style: {
                        [`.${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.popper}[data-popper-placement*="top"] &`]:
                          { marginBottom: '24px' },
                      },
                    },
                    {
                      props: ({ ownerState }) => ownerState.touch,
                      style: {
                        [`.${_tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.A.popper}[data-popper-placement*="bottom"] &`]:
                          { marginTop: '24px' },
                      },
                    },
                  ],
                }
                var value
              }
            )
          ),
          TooltipArrow = (0,
          _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_5__.Ay)('span', {
            name: 'MuiTooltip',
            slot: 'Arrow',
            overridesResolver: (props, styles) => styles.arrow,
          })(
            (0, _utils_memoTheme_js__WEBPACK_IMPORTED_MODULE_7__.A)(
              ({ theme }) => ({
                overflow: 'hidden',
                position: 'absolute',
                width: '1em',
                height: '0.71em',
                boxSizing: 'border-box',
                color: theme.vars
                  ? theme.vars.palette.Tooltip.bg
                  : (0,
                    _mui_system_colorManipulator__WEBPACK_IMPORTED_MODULE_8__.X4)(
                      theme.palette.grey[700],
                      0.9
                    ),
                '&::before': {
                  content: '""',
                  margin: 'auto',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'currentColor',
                  transform: 'rotate(45deg)',
                },
              })
            )
          )
        let hystersisOpen = !1
        const hystersisTimer =
          new _mui_utils_useTimeout__WEBPACK_IMPORTED_MODULE_9__.E()
        let cursorPosition = { x: 0, y: 0 }
        function composeEventHandler(handler, eventHandler) {
          return (event, ...params) => {
            eventHandler && eventHandler(event, ...params),
              handler(event, ...params)
          }
        }
        const __WEBPACK_DEFAULT_EXPORT__ =
          react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            function Tooltip(inProps, ref) {
              const props = (0,
                _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_10__.b)(
                  { props: inProps, name: 'MuiTooltip' }
                ),
                {
                  arrow = !1,
                  children: childrenProp,
                  classes: classesProp,
                  components = {},
                  componentsProps = {},
                  describeChild = !1,
                  disableFocusListener = !1,
                  disableHoverListener = !1,
                  disableInteractive: disableInteractiveProp = !1,
                  disableTouchListener = !1,
                  enterDelay = 100,
                  enterNextDelay = 0,
                  enterTouchDelay = 700,
                  followCursor = !1,
                  id: idProp,
                  leaveDelay = 0,
                  leaveTouchDelay = 1500,
                  onClose,
                  onOpen,
                  open: openProp,
                  placement = 'bottom',
                  PopperComponent: PopperComponentProp,
                  PopperProps = {},
                  slotProps = {},
                  slots = {},
                  title,
                  TransitionComponent: TransitionComponentProp,
                  TransitionProps,
                  ...other
                } = props,
                children = react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(
                  childrenProp
                )
                  ? childrenProp
                  : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      'span',
                      { children: childrenProp }
                    ),
                theme = (0,
                _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_11__.A)(),
                isRtl = (0,
                _mui_system_RtlProvider__WEBPACK_IMPORTED_MODULE_12__.I)(),
                [childNode, setChildNode] =
                  react__WEBPACK_IMPORTED_MODULE_0__.useState(),
                [arrowRef, setArrowRef] =
                  react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
                ignoreNonTouchEvents =
                  react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),
                disableInteractive = disableInteractiveProp || followCursor,
                closeTimer = (0,
                _mui_utils_useTimeout__WEBPACK_IMPORTED_MODULE_9__.A)(),
                enterTimer = (0,
                _mui_utils_useTimeout__WEBPACK_IMPORTED_MODULE_9__.A)(),
                leaveTimer = (0,
                _mui_utils_useTimeout__WEBPACK_IMPORTED_MODULE_9__.A)(),
                touchTimer = (0,
                _mui_utils_useTimeout__WEBPACK_IMPORTED_MODULE_9__.A)(),
                [openState, setOpenState] = (0,
                _utils_useControlled_js__WEBPACK_IMPORTED_MODULE_13__.A)({
                  controlled: openProp,
                  default: !1,
                  name: 'Tooltip',
                  state: 'open',
                })
              let open = openState
              const id = (0, _utils_useId_js__WEBPACK_IMPORTED_MODULE_14__.A)(
                  idProp
                ),
                prevUserSelect = react__WEBPACK_IMPORTED_MODULE_0__.useRef(),
                stopTouchInteraction = (0,
                _utils_useEventCallback_js__WEBPACK_IMPORTED_MODULE_15__.A)(
                  () => {
                    void 0 !== prevUserSelect.current &&
                      ((document.body.style.WebkitUserSelect =
                        prevUserSelect.current),
                      (prevUserSelect.current = void 0)),
                      touchTimer.clear()
                  }
                )
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(
                () => stopTouchInteraction,
                [stopTouchInteraction]
              )
              const handleOpen = event => {
                  hystersisTimer.clear(),
                    (hystersisOpen = !0),
                    setOpenState(!0),
                    onOpen && !open && onOpen(event)
                },
                handleClose = (0,
                _utils_useEventCallback_js__WEBPACK_IMPORTED_MODULE_15__.A)(
                  event => {
                    hystersisTimer.start(800 + leaveDelay, () => {
                      hystersisOpen = !1
                    }),
                      setOpenState(!1),
                      onClose && open && onClose(event),
                      closeTimer.start(
                        theme.transitions.duration.shortest,
                        () => {
                          ignoreNonTouchEvents.current = !1
                        }
                      )
                  }
                ),
                handleMouseOver = event => {
                  ;(ignoreNonTouchEvents.current &&
                    'touchstart' !== event.type) ||
                    (childNode && childNode.removeAttribute('title'),
                    enterTimer.clear(),
                    leaveTimer.clear(),
                    enterDelay || (hystersisOpen && enterNextDelay)
                      ? enterTimer.start(
                          hystersisOpen ? enterNextDelay : enterDelay,
                          () => {
                            handleOpen(event)
                          }
                        )
                      : handleOpen(event))
                },
                handleMouseLeave = event => {
                  enterTimer.clear(),
                    leaveTimer.start(leaveDelay, () => {
                      handleClose(event)
                    })
                },
                [, setChildIsFocusVisible] =
                  react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),
                handleBlur = event => {
                  ;(0,
                  _mui_utils_isFocusVisible__WEBPACK_IMPORTED_MODULE_16__.A)(
                    event.target
                  ) || (setChildIsFocusVisible(!1), handleMouseLeave(event))
                },
                handleFocus = event => {
                  childNode || setChildNode(event.currentTarget),
                    (0,
                    _mui_utils_isFocusVisible__WEBPACK_IMPORTED_MODULE_16__.A)(
                      event.target
                    ) && (setChildIsFocusVisible(!0), handleMouseOver(event))
                },
                detectTouchStart = event => {
                  ignoreNonTouchEvents.current = !0
                  const childrenProps = children.props
                  childrenProps.onTouchStart &&
                    childrenProps.onTouchStart(event)
                },
                handleTouchStart = event => {
                  detectTouchStart(event),
                    leaveTimer.clear(),
                    closeTimer.clear(),
                    stopTouchInteraction(),
                    (prevUserSelect.current =
                      document.body.style.WebkitUserSelect),
                    (document.body.style.WebkitUserSelect = 'none'),
                    touchTimer.start(enterTouchDelay, () => {
                      ;(document.body.style.WebkitUserSelect =
                        prevUserSelect.current),
                        handleMouseOver(event)
                    })
                },
                handleTouchEnd = event => {
                  children.props.onTouchEnd && children.props.onTouchEnd(event),
                    stopTouchInteraction(),
                    leaveTimer.start(leaveTouchDelay, () => {
                      handleClose(event)
                    })
                }
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                if (open)
                  return (
                    document.addEventListener('keydown', handleKeyDown),
                    () => {
                      document.removeEventListener('keydown', handleKeyDown)
                    }
                  )
                function handleKeyDown(nativeEvent) {
                  'Escape' === nativeEvent.key && handleClose(nativeEvent)
                }
              }, [handleClose, open])
              const handleRef = (0,
              _utils_useForkRef_js__WEBPACK_IMPORTED_MODULE_17__.A)(
                (0,
                _mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_18__.A)(
                  children
                ),
                setChildNode,
                ref
              )
              title || 0 === title || (open = !1)
              const popperRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(),
                nameOrDescProps = {},
                titleIsString = 'string' == typeof title
              describeChild
                ? ((nameOrDescProps.title =
                    open || !titleIsString || disableHoverListener
                      ? null
                      : title),
                  (nameOrDescProps['aria-describedby'] = open ? id : null))
                : ((nameOrDescProps['aria-label'] = titleIsString
                    ? title
                    : null),
                  (nameOrDescProps['aria-labelledby'] =
                    open && !titleIsString ? id : null))
              const childrenProps = {
                ...nameOrDescProps,
                ...other,
                ...children.props,
                className: (0, clsx__WEBPACK_IMPORTED_MODULE_19__.A)(
                  other.className,
                  children.props.className
                ),
                onTouchStart: detectTouchStart,
                ref: handleRef,
                ...(followCursor
                  ? {
                      onMouseMove: event => {
                        const childrenProps = children.props
                        childrenProps.onMouseMove &&
                          childrenProps.onMouseMove(event),
                          (cursorPosition = {
                            x: event.clientX,
                            y: event.clientY,
                          }),
                          popperRef.current && popperRef.current.update()
                      },
                    }
                  : {}),
              }
              const interactiveWrapperListeners = {}
              disableTouchListener ||
                ((childrenProps.onTouchStart = handleTouchStart),
                (childrenProps.onTouchEnd = handleTouchEnd)),
                disableHoverListener ||
                  ((childrenProps.onMouseOver = composeEventHandler(
                    handleMouseOver,
                    childrenProps.onMouseOver
                  )),
                  (childrenProps.onMouseLeave = composeEventHandler(
                    handleMouseLeave,
                    childrenProps.onMouseLeave
                  )),
                  disableInteractive ||
                    ((interactiveWrapperListeners.onMouseOver =
                      handleMouseOver),
                    (interactiveWrapperListeners.onMouseLeave =
                      handleMouseLeave))),
                disableFocusListener ||
                  ((childrenProps.onFocus = composeEventHandler(
                    handleFocus,
                    childrenProps.onFocus
                  )),
                  (childrenProps.onBlur = composeEventHandler(
                    handleBlur,
                    childrenProps.onBlur
                  )),
                  disableInteractive ||
                    ((interactiveWrapperListeners.onFocus = handleFocus),
                    (interactiveWrapperListeners.onBlur = handleBlur)))
              const ownerState = {
                  ...props,
                  isRtl,
                  arrow,
                  disableInteractive,
                  placement,
                  PopperComponentProp,
                  touch: ignoreNonTouchEvents.current,
                },
                resolvedPopperProps =
                  'function' == typeof slotProps.popper
                    ? slotProps.popper(ownerState)
                    : slotProps.popper,
                popperOptions =
                  react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
                    let tooltipModifiers = [
                      {
                        name: 'arrow',
                        enabled: Boolean(arrowRef),
                        options: { element: arrowRef, padding: 4 },
                      },
                    ]
                    return (
                      PopperProps.popperOptions?.modifiers &&
                        (tooltipModifiers = tooltipModifiers.concat(
                          PopperProps.popperOptions.modifiers
                        )),
                      resolvedPopperProps?.popperOptions?.modifiers &&
                        (tooltipModifiers = tooltipModifiers.concat(
                          resolvedPopperProps.popperOptions.modifiers
                        )),
                      {
                        ...PopperProps.popperOptions,
                        ...resolvedPopperProps?.popperOptions,
                        modifiers: tooltipModifiers,
                      }
                    )
                  }, [
                    arrowRef,
                    PopperProps.popperOptions,
                    resolvedPopperProps?.popperOptions,
                  ]),
                classes = (ownerState => {
                  const {
                      classes,
                      disableInteractive,
                      arrow,
                      touch,
                      placement,
                    } = ownerState,
                    slots = {
                      popper: [
                        'popper',
                        !disableInteractive && 'popperInteractive',
                        arrow && 'popperArrow',
                      ],
                      tooltip: [
                        'tooltip',
                        arrow && 'tooltipArrow',
                        touch && 'touch',
                        `tooltipPlacement${(0, _utils_capitalize_js__WEBPACK_IMPORTED_MODULE_2__.A)(placement.split('-')[0])}`,
                      ],
                      arrow: ['arrow'],
                    }
                  return (0,
                  _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_3__.A)(
                    slots,
                    _tooltipClasses_js__WEBPACK_IMPORTED_MODULE_4__.E,
                    classes
                  )
                })(ownerState),
                resolvedTransitionProps =
                  'function' == typeof slotProps.transition
                    ? slotProps.transition(ownerState)
                    : slotProps.transition,
                externalForwardedProps = {
                  slots: {
                    popper: components.Popper,
                    transition:
                      components.Transition ?? TransitionComponentProp,
                    tooltip: components.Tooltip,
                    arrow: components.Arrow,
                    ...slots,
                  },
                  slotProps: {
                    arrow: slotProps.arrow ?? componentsProps.arrow,
                    popper: {
                      ...PopperProps,
                      ...(resolvedPopperProps ?? componentsProps.popper),
                    },
                    tooltip: slotProps.tooltip ?? componentsProps.tooltip,
                    transition: {
                      ...TransitionProps,
                      ...(resolvedTransitionProps ??
                        componentsProps.transition),
                    },
                  },
                },
                [PopperSlot, popperSlotProps] = (0,
                _utils_useSlot_js__WEBPACK_IMPORTED_MODULE_20__.A)('popper', {
                  elementType: TooltipPopper,
                  externalForwardedProps,
                  ownerState,
                  className: (0, clsx__WEBPACK_IMPORTED_MODULE_19__.A)(
                    classes.popper,
                    PopperProps?.className
                  ),
                }),
                [TransitionSlot, transitionSlotProps] = (0,
                _utils_useSlot_js__WEBPACK_IMPORTED_MODULE_20__.A)(
                  'transition',
                  {
                    elementType: _Grow_index_js__WEBPACK_IMPORTED_MODULE_21__.A,
                    externalForwardedProps,
                    ownerState,
                  }
                ),
                [TooltipSlot, tooltipSlotProps] = (0,
                _utils_useSlot_js__WEBPACK_IMPORTED_MODULE_20__.A)('tooltip', {
                  elementType: TooltipTooltip,
                  className: classes.tooltip,
                  externalForwardedProps,
                  ownerState,
                }),
                [ArrowSlot, arrowSlotProps] = (0,
                _utils_useSlot_js__WEBPACK_IMPORTED_MODULE_20__.A)('arrow', {
                  elementType: TooltipArrow,
                  className: classes.arrow,
                  externalForwardedProps,
                  ownerState,
                  ref: setArrowRef,
                })
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                {
                  children: [
                    react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(
                      children,
                      childrenProps
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      PopperSlot,
                      {
                        as:
                          PopperComponentProp ??
                          _Popper_index_js__WEBPACK_IMPORTED_MODULE_6__.A,
                        placement,
                        anchorEl: followCursor
                          ? {
                              getBoundingClientRect: () => ({
                                top: cursorPosition.y,
                                left: cursorPosition.x,
                                right: cursorPosition.x,
                                bottom: cursorPosition.y,
                                width: 0,
                                height: 0,
                              }),
                            }
                          : childNode,
                        popperRef,
                        open: !!childNode && open,
                        id,
                        transition: !0,
                        ...interactiveWrapperListeners,
                        ...popperSlotProps,
                        popperOptions,
                        children: ({ TransitionProps: TransitionPropsInner }) =>
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                            TransitionSlot,
                            {
                              timeout: theme.transitions.duration.shorter,
                              ...TransitionPropsInner,
                              ...transitionSlotProps,
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                                TooltipSlot,
                                {
                                  ...tooltipSlotProps,
                                  children: [
                                    title,
                                    arrow
                                      ? (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                          ArrowSlot,
                                          { ...arrowSlotProps }
                                        )
                                      : null,
                                  ],
                                }
                              ),
                            }
                          ),
                      }
                    ),
                  ],
                }
              )
            }
          )
      },
      './node_modules/@mui/material/Tooltip/tooltipClasses.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
          E: () => getTooltipUtilityClass,
        })
        var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
            ),
          _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
            )
        function getTooltipUtilityClass(slot) {
          return (0,
          _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Ay)(
            'MuiTooltip',
            slot
          )
        }
        const __WEBPACK_DEFAULT_EXPORT__ = (0,
        _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.A)(
          'MuiTooltip',
          [
            'popper',
            'popperInteractive',
            'popperArrow',
            'popperClose',
            'tooltip',
            'tooltipArrow',
            'touch',
            'tooltipPlacementLeft',
            'tooltipPlacementRight',
            'tooltipPlacementTop',
            'tooltipPlacementBottom',
            'arrow',
          ]
        )
      },
    },
  ]
)
