'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [5027],
    {
      './node_modules/@mui/material/Grow/Grow.js': (
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
          _mui_utils_useTimeout__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/useTimeout/useTimeout.js'
            ),
          _mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js'
            ),
          react_transition_group__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/react-transition-group/esm/Transition.js'
            ),
          _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/styles/useTheme.js'
            ),
          _transitions_utils_js__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/material/transitions/utils.js'
            ),
          _utils_useForkRef_js__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/material/utils/useForkRef.js'
            ),
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        function getScale(value) {
          return `scale(${value}, ${value ** 2})`
        }
        const styles = {
            entering: { opacity: 1, transform: getScale(1) },
            entered: { opacity: 1, transform: 'none' },
          },
          isWebKit154 =
            'undefined' != typeof navigator &&
            /^((?!chrome|android).)*(safari|mobile)/i.test(
              navigator.userAgent
            ) &&
            /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
          Grow = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            function Grow(props, ref) {
              const {
                  addEndListener,
                  appear = !0,
                  children,
                  easing,
                  in: inProp,
                  onEnter,
                  onEntered,
                  onEntering,
                  onExit,
                  onExited,
                  onExiting,
                  style,
                  timeout = 'auto',
                  TransitionComponent = react_transition_group__WEBPACK_IMPORTED_MODULE_2__.Ay,
                  ...other
                } = props,
                timer = (0,
                _mui_utils_useTimeout__WEBPACK_IMPORTED_MODULE_3__.A)(),
                autoTimeout = react__WEBPACK_IMPORTED_MODULE_0__.useRef(),
                theme = (0,
                _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__.A)(),
                nodeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),
                handleRef = (0,
                _utils_useForkRef_js__WEBPACK_IMPORTED_MODULE_5__.A)(
                  nodeRef,
                  (0,
                  _mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_6__.A)(
                    children
                  ),
                  ref
                ),
                normalizedTransitionCallback = callback => maybeIsAppearing => {
                  if (callback) {
                    const node = nodeRef.current
                    void 0 === maybeIsAppearing
                      ? callback(node)
                      : callback(node, maybeIsAppearing)
                  }
                },
                handleEntering = normalizedTransitionCallback(onEntering),
                handleEnter = normalizedTransitionCallback(
                  (node, isAppearing) => {
                    ;(0, _transitions_utils_js__WEBPACK_IMPORTED_MODULE_7__.q)(
                      node
                    )
                    const {
                      duration: transitionDuration,
                      delay,
                      easing: transitionTimingFunction,
                    } = (0,
                    _transitions_utils_js__WEBPACK_IMPORTED_MODULE_7__.c)(
                      { style, timeout, easing },
                      { mode: 'enter' }
                    )
                    let duration
                    'auto' === timeout
                      ? ((duration = theme.transitions.getAutoHeightDuration(
                          node.clientHeight
                        )),
                        (autoTimeout.current = duration))
                      : (duration = transitionDuration),
                      (node.style.transition = [
                        theme.transitions.create('opacity', {
                          duration,
                          delay,
                        }),
                        theme.transitions.create('transform', {
                          duration: isWebKit154 ? duration : 0.666 * duration,
                          delay,
                          easing: transitionTimingFunction,
                        }),
                      ].join(',')),
                      onEnter && onEnter(node, isAppearing)
                  }
                ),
                handleEntered = normalizedTransitionCallback(onEntered),
                handleExiting = normalizedTransitionCallback(onExiting),
                handleExit = normalizedTransitionCallback(node => {
                  const {
                    duration: transitionDuration,
                    delay,
                    easing: transitionTimingFunction,
                  } = (0, _transitions_utils_js__WEBPACK_IMPORTED_MODULE_7__.c)(
                    { style, timeout, easing },
                    { mode: 'exit' }
                  )
                  let duration
                  'auto' === timeout
                    ? ((duration = theme.transitions.getAutoHeightDuration(
                        node.clientHeight
                      )),
                      (autoTimeout.current = duration))
                    : (duration = transitionDuration),
                    (node.style.transition = [
                      theme.transitions.create('opacity', { duration, delay }),
                      theme.transitions.create('transform', {
                        duration: isWebKit154 ? duration : 0.666 * duration,
                        delay: isWebKit154 ? delay : delay || 0.333 * duration,
                        easing: transitionTimingFunction,
                      }),
                    ].join(',')),
                    (node.style.opacity = 0),
                    (node.style.transform = getScale(0.75)),
                    onExit && onExit(node)
                }),
                handleExited = normalizedTransitionCallback(onExited)
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                TransitionComponent,
                {
                  appear,
                  in: inProp,
                  nodeRef,
                  onEnter: handleEnter,
                  onEntered: handleEntered,
                  onEntering: handleEntering,
                  onExit: handleExit,
                  onExited: handleExited,
                  onExiting: handleExiting,
                  addEndListener: next => {
                    'auto' === timeout &&
                      timer.start(autoTimeout.current || 0, next),
                      addEndListener && addEndListener(nodeRef.current, next)
                  },
                  timeout: 'auto' === timeout ? null : timeout,
                  ...other,
                  children: (state, { ownerState, ...restChildProps }) =>
                    react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
                      style: {
                        opacity: 0,
                        transform: getScale(0.75),
                        visibility:
                          'exited' !== state || inProp ? void 0 : 'hidden',
                        ...styles[state],
                        ...style,
                        ...children.props.style,
                      },
                      ref: handleRef,
                      ...restChildProps,
                    }),
                }
              )
            }
          )
        Grow && (Grow.muiSupportAuto = !0)
        const __WEBPACK_DEFAULT_EXPORT__ = Grow
      },
      './node_modules/@mui/material/Portal/Portal.js': (
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
          react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/next/dist/compiled/react-dom/index.js'
          ),
          _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/@mui/utils/esm/useForkRef/useForkRef.js'
          ),
          _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js'
          ),
          _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            './node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js'
          ),
          _mui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            './node_modules/@mui/utils/esm/setRef/setRef.js'
          )
        const __WEBPACK_DEFAULT_EXPORT__ =
          react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
            function Portal(props, forwardedRef) {
              const { children, container, disablePortal = !1 } = props,
                [mountNode, setMountNode] =
                  react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
                handleRef = (0, _mui_utils__WEBPACK_IMPORTED_MODULE_2__.A)(
                  react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)
                    ? (0, _mui_utils__WEBPACK_IMPORTED_MODULE_3__.A)(children)
                    : null,
                  forwardedRef
                )
              if (
                ((0, _mui_utils__WEBPACK_IMPORTED_MODULE_4__.A)(() => {
                  disablePortal ||
                    setMountNode(
                      (function getContainer(container) {
                        return 'function' == typeof container
                          ? container()
                          : container
                      })(container) || document.body
                    )
                }, [container, disablePortal]),
                (0, _mui_utils__WEBPACK_IMPORTED_MODULE_4__.A)(() => {
                  if (mountNode && !disablePortal)
                    return (
                      (0, _mui_utils__WEBPACK_IMPORTED_MODULE_5__.A)(
                        forwardedRef,
                        mountNode
                      ),
                      () => {
                        ;(0, _mui_utils__WEBPACK_IMPORTED_MODULE_5__.A)(
                          forwardedRef,
                          null
                        )
                      }
                    )
                }, [forwardedRef, mountNode, disablePortal]),
                disablePortal)
              ) {
                if (
                  react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)
                ) {
                  const newProps = { ref: handleRef }
                  return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(
                    children,
                    newProps
                  )
                }
                return children
              }
              return mountNode
                ? react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(
                    children,
                    mountNode
                  )
                : mountNode
            }
          )
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
      './node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js':
        (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.d(__webpack_exports__, {
            A: () => getReactElementRef,
          })
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          )
          function getReactElementRef(element) {
            return parseInt(react__WEBPACK_IMPORTED_MODULE_0__.version, 10) >=
              19
              ? element?.props?.ref || null
              : element?.ref || null
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
      './node_modules/@mui/utils/esm/useId/useId.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache
        __webpack_require__.d(__webpack_exports__, { A: () => useId })
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        )
        let globalId = 0
        const maybeReactUseId = {
          ...(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache ||
            (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache =
              __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2))),
        }.useId
        function useId(idOverride) {
          if (void 0 !== maybeReactUseId) {
            const reactId = maybeReactUseId()
            return idOverride ?? reactId
          }
          return (function useGlobalId(idOverride) {
            const [defaultId, setDefaultId] =
                react__WEBPACK_IMPORTED_MODULE_0__.useState(idOverride),
              id = idOverride || defaultId
            return (
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                null == defaultId &&
                  ((globalId += 1), setDefaultId(`mui-${globalId}`))
              }, [defaultId]),
              id
            )
          })(idOverride)
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
      './src/components/Tooltip/tooltip.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            LargeOffset: () => LargeOffset,
            MultipleTooltips: () => MultipleTooltips,
            NoArrowBottom: () => NoArrowBottom,
            RedColorOffset: () => RedColorOffset,
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
            './src/components/Tooltip/index.tsx'
          ),
          _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/Button/Button.js'
            ),
          _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js')
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/Tooltip',
            component: _index__WEBPACK_IMPORTED_MODULE_3__.A,
            argTypes: {
              tooltipcolor: { control: 'color' },
              tooltipplacement: {
                control: 'select',
                options: ['top', 'right', 'bottom', 'left'],
              },
            },
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Define Storybook metadata' } },
            },
          },
          Basic = {
            args: {
              title: 'Basic Tooltip Text',
              tooltipcolor: '#000000',
              tooltipplacement: 'top',
              offsetX: 0,
              offsetY: 0,
              arrow: !0,
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                { variant: 'contained', children: 'Hover me' }
              ),
            },
            play: async ({ canvasElement }) => {
              const button = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByRole('button', { name: /hover me/i })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.hover(
                button
              )
            },
          },
          RedColorOffset = {
            args: {
              title: 'Red Tooltip with offset',
              tooltipcolor: '#ff0000',
              tooltipplacement: 'right',
              offsetX: 10,
              offsetY: 20,
              arrow: !0,
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                { variant: 'contained', children: 'Hover for Red Tooltip' }
              ),
            },
            play: async ({ canvasElement }) => {
              const button = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByRole('button', { name: /Hover for Red Tooltip/i })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.hover(
                button
              )
            },
          },
          MultipleTooltips = {
            render: () =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,
                {
                  display: 'flex',
                  gap: 2,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.A,
                      {
                        title: 'First tooltip',
                        tooltipcolor: '#3f51b5',
                        tooltipplacement: 'bottom',
                        offsetX: 0,
                        offsetY: 0,
                        arrow: !0,
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                          { variant: 'contained', children: 'First' }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.A,
                      {
                        title: 'Second tooltip',
                        tooltipcolor: '#009688',
                        tooltipplacement: 'top',
                        offsetX: 10,
                        offsetY: 10,
                        arrow: !0,
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                          { variant: 'contained', children: 'Second' }
                        ),
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _index__WEBPACK_IMPORTED_MODULE_3__.A,
                      {
                        title: 'Third tooltip',
                        tooltipcolor: '#f44336',
                        tooltipplacement: 'left',
                        offsetX: -10,
                        offsetY: 0,
                        arrow: !0,
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                          { variant: 'contained', children: 'Third' }
                        ),
                      }
                    ),
                  ],
                }
              ),
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                canvas.getByRole('button', { name: /first/i })
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByRole('button', { name: /second/i })
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  canvas.getByRole('button', { name: /third/i })
                ).toBeInTheDocument()
            },
          },
          NoArrowBottom = {
            args: {
              title: 'No arrow tooltip',
              tooltipcolor: '#000000',
              tooltipplacement: 'bottom',
              offsetX: 0,
              offsetY: 0,
              arrow: !1,
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                { variant: 'contained', children: 'No Arrow' }
              ),
            },
            play: async ({ canvasElement }) => {
              const button = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByRole('button', { name: /no arrow/i })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.hover(
                button
              )
            },
          },
          LargeOffset = {
            args: {
              title: 'Large offset example',
              tooltipcolor: '#424242',
              tooltipplacement: 'right',
              offsetX: 50,
              offsetY: 50,
              arrow: !0,
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_Box_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                { variant: 'contained', children: 'Huge Offset' }
              ),
            },
            play: async ({ canvasElement }) => {
              const button = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByRole('button', { name: /huge offset/i })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.hover(
                button
              )
            },
          },
          __namedExportsOrder = [
            'Basic',
            'RedColorOffset',
            'MultipleTooltips',
            'NoArrowBottom',
            'LargeOffset',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    title: 'Basic Tooltip Text',\n    tooltipcolor: '#000000',\n    tooltipplacement: 'top',\n    offsetX: 0,\n    offsetY: 0,\n    arrow: true,\n    children: <Button variant=\"contained\">Hover me</Button>\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // We hover over the button\n    const button = canvas.getByRole('button', {\n      name: /hover me/i\n    });\n    await userEvent.hover(button);\n\n    // Check that the tooltip appears\n    // Note: In a real environment, we might confirm the tooltip text.\n    // But the Testing Library does not always handle floating elements easily.\n    // We'll just ensure no error is thrown.\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story: '1) Basic usage',
              ...Basic.parameters?.docs?.description,
            },
          },
        }),
          (RedColorOffset.parameters = {
            ...RedColorOffset.parameters,
            docs: {
              ...RedColorOffset.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    title: 'Red Tooltip with offset',\n    tooltipcolor: '#ff0000',\n    // Red\n    tooltipplacement: 'right',\n    offsetX: 10,\n    offsetY: 20,\n    arrow: true,\n    children: <Button variant=\"contained\">Hover for Red Tooltip</Button>\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button', {\n      name: /Hover for Red Tooltip/i\n    });\n    await userEvent.hover(button);\n    // No direct assertion for color, but we ensure it doesn't crash.\n  }\n}",
                ...RedColorOffset.parameters?.docs?.source,
              },
              description: {
                story: '2) Different color (Red) and offset',
                ...RedColorOffset.parameters?.docs?.description,
              },
            },
          }),
          (MultipleTooltips.parameters = {
            ...MultipleTooltips.parameters,
            docs: {
              ...MultipleTooltips.parameters?.docs,
              source: {
                originalSource:
                  '{\n  render: () => <Box display="flex" gap={2}>\r\n      <StyledTooltip title="First tooltip" tooltipcolor="#3f51b5" tooltipplacement="bottom" offsetX={0} offsetY={0} arrow>\r\n        <Button variant="contained">First</Button>\r\n      </StyledTooltip>\r\n\r\n      <StyledTooltip title="Second tooltip" tooltipcolor="#009688" tooltipplacement="top" offsetX={10} offsetY={10} arrow>\r\n        <Button variant="contained">Second</Button>\r\n      </StyledTooltip>\r\n\r\n      <StyledTooltip title="Third tooltip" tooltipcolor="#f44336" tooltipplacement="left" offsetX={-10} offsetY={0} arrow>\r\n        <Button variant="contained">Third</Button>\r\n      </StyledTooltip>\r\n    </Box>,\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // We can test the presence of the buttons\n    expect(canvas.getByRole(\'button\', {\n      name: /first/i\n    })).toBeInTheDocument();\n    expect(canvas.getByRole(\'button\', {\n      name: /second/i\n    })).toBeInTheDocument();\n    expect(canvas.getByRole(\'button\', {\n      name: /third/i\n    })).toBeInTheDocument();\n  }\n}',
                ...MultipleTooltips.parameters?.docs?.source,
              },
              description: {
                story: '3) Multiple Tooltips in one story',
                ...MultipleTooltips.parameters?.docs?.description,
              },
            },
          }),
          (NoArrowBottom.parameters = {
            ...NoArrowBottom.parameters,
            docs: {
              ...NoArrowBottom.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    title: 'No arrow tooltip',\n    tooltipcolor: '#000000',\n    tooltipplacement: 'bottom',\n    offsetX: 0,\n    offsetY: 0,\n    arrow: false,\n    children: <Button variant=\"contained\">No Arrow</Button>\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button', {\n      name: /no arrow/i\n    });\n    await userEvent.hover(button);\n  }\n}",
                ...NoArrowBottom.parameters?.docs?.source,
              },
              description: {
                story: '4) No Arrow, different placement',
                ...NoArrowBottom.parameters?.docs?.description,
              },
            },
          }),
          (LargeOffset.parameters = {
            ...LargeOffset.parameters,
            docs: {
              ...LargeOffset.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    title: 'Large offset example',\n    tooltipcolor: '#424242',\n    tooltipplacement: 'right',\n    offsetX: 50,\n    offsetY: 50,\n    arrow: true,\n    children: <Button variant=\"contained\">Huge Offset</Button>\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button', {\n      name: /huge offset/i\n    });\n    await userEvent.hover(button);\n    // The tooltip should appear far away from the button.\n  }\n}",
                ...LargeOffset.parameters?.docs?.source,
              },
              description: {
                story: '5) Large offset scenario',
                ...LargeOffset.parameters?.docs?.description,
              },
            },
          })
      },
      './src/components/Tooltip/index.tsx': (
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
          _barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/material/Tooltip/Tooltip.js'
            ),
          _barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/Tooltip/tooltipClasses.js'
            ),
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__('./node_modules/@mui/material/styles/styled.js')
        __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
        const __WEBPACK_DEFAULT_EXPORT__ = (0,
        _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.Ay)(
          ({ className, tooltipplacement, offsetX, offsetY, ...props }) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
              {
                ...props,
                classes: { popper: className },
                placement: tooltipplacement,
                PopperProps: {
                  popperOptions: {
                    modifiers: [
                      {
                        name: 'offset',
                        options: { offset: [offsetX, offsetY] },
                      },
                    ],
                  },
                },
              }
            )
        )(({ tooltipcolor }) => ({
          [`& .${_barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_4__.A.tooltip}`]:
            {
              backgroundColor: tooltipcolor,
              fontSize: '16px',
              fontFamily: 'Merriweather',
              fontWeight: 400,
              padding: '5px 8px',
            },
          [`& .${_barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_4__.A.arrow}`]:
            { color: tooltipcolor },
        }))
      },
    },
  ]
)
