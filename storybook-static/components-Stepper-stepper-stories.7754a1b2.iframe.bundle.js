'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [2663],
    {
      './src/components/Stepper/stepper.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            Complex: () => Complex,
            Descriptions: () => Descriptions,
            Interactive: () => Interactive,
            WithErrorStep: () => WithErrorStep,
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
            './src/components/Stepper/index.tsx'
          ),
          react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          )
        const basicSteps = [
            {
              stepNumber: 1,
              label: 'Step One',
              stepLink: '#step1',
              status: 'completed',
            },
            {
              stepNumber: 2,
              label: 'Step Two',
              stepLink: '#step2',
              status: 'active',
            },
            {
              stepNumber: 3,
              label: 'Step Three',
              stepLink: '#step3',
              status: 'inactive',
            },
          ],
          __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/Stepper',
            component: _index__WEBPACK_IMPORTED_MODULE_2__.H,
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Storybook Config' } },
            },
          },
          Basic = {
            args: {
              steps: basicSteps,
              activeStep: 2,
              nonLinear: !0,
              orientation: 'horizontal',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                canvas.getByText('Step One')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                  canvas.getByText('Step Two')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                  canvas.getByText('Step Three')
                ).toBeInTheDocument()
            },
          },
          WithErrorStep = {
            args: {
              steps: [
                {
                  stepNumber: 1,
                  label: 'First Step',
                  stepLink: '#first',
                  status: 'completed',
                },
                {
                  stepNumber: 2,
                  label: 'Second Step (Error)',
                  stepLink: '#second',
                  status: 'error',
                  description: 'Something went wrong here!',
                },
                {
                  stepNumber: 3,
                  label: 'Final Step',
                  stepLink: '#final',
                  status: 'inactive',
                },
              ],
              activeStep: 2,
              nonLinear: !0,
              orientation: 'horizontal',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                canvas.getByText(/second step \(error\)/i)
              ).toBeInTheDocument()
            },
          },
          Descriptions = {
            args: {
              steps: [
                {
                  stepNumber: 1,
                  label: 'Initial',
                  stepLink: '/initial',
                  status: 'completed',
                  description: 'All good so far.',
                },
                {
                  stepNumber: 2,
                  label: 'Middle',
                  stepLink: '/middle',
                  status: 'active',
                  description: 'Ongoing step with a helpful tooltip.',
                },
                {
                  stepNumber: 3,
                  label: 'Complete',
                  stepLink: '/complete',
                  status: 'inactive',
                  description: 'Locked until the previous step is done.',
                },
              ],
              activeStep: 2,
              orientation: 'vertical',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                canvas.getByText('Middle')
              ).toBeInTheDocument()
            },
          },
          Complex = {
            args: {
              steps: [
                {
                  stepNumber: 1,
                  label: 'Phase 1',
                  stepLink: '#phase1',
                  status: 'completed',
                },
                {
                  stepNumber: 2,
                  label: 'Phase 2',
                  stepLink: '#phase2',
                  status: 'completed',
                  description: 'Successfully done Phase 2.',
                },
                {
                  stepNumber: 3,
                  label: 'Phase 3',
                  stepLink: '#phase3',
                  status: 'active',
                },
                {
                  stepNumber: 4,
                  label: 'Phase 4 (Locked)',
                  stepLink: '#phase4',
                  status: 'inactive',
                  description: 'This is locked until Phase 3 completes.',
                },
                {
                  stepNumber: 5,
                  label: 'Phase 5 (Error)',
                  stepLink: '#phase5',
                  status: 'error',
                  description: 'An error occurred here.',
                },
              ],
              activeStep: 3,
              nonLinear: !1,
              orientation: 'horizontal',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                canvas.getByText('Phase 5 (Error)')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                  canvas.getByText('Phase 3')
                ).toBeInTheDocument()
            },
          }
        function InteractiveExample(props) {
          const [currentStep, setCurrentStep] = (0,
          react__WEBPACK_IMPORTED_MODULE_3__.useState)(1)
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            'div',
            {
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _index__WEBPACK_IMPORTED_MODULE_2__.H,
                  { ...props, activeStep: currentStep }
                ),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  'div',
                  {
                    style: { marginTop: '16px' },
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'button',
                        {
                          onClick: () => {
                            setCurrentStep(prev => Math.max(prev - 1, 1))
                          },
                          disabled: currentStep <= 1,
                          children: 'Previous',
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'button',
                        {
                          onClick: () => {
                            setCurrentStep(prev =>
                              Math.min(prev + 1, props.steps.length)
                            )
                          },
                          disabled: currentStep >= props.steps.length,
                          style: { marginLeft: '8px' },
                          children: 'Next',
                        }
                      ),
                    ],
                  }
                ),
              ],
            }
          )
        }
        const Interactive = {
            render: args =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                InteractiveExample,
                { ...args }
              ),
            args: {
              steps: basicSteps,
              nonLinear: !0,
              orientation: 'horizontal',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_1__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_1__.E3)(
                canvas.getByText('Step One')
              ).toBeInTheDocument()
              const nextBtn = canvas.getByRole('button', { name: 'Next' })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(
                nextBtn
              )
              const prevBtn = canvas.getByRole('button', { name: 'Previous' })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_1__.Q4.click(
                prevBtn
              )
            },
          },
          __namedExportsOrder = [
            'Basic',
            'WithErrorStep',
            'Descriptions',
            'Complex',
            'Interactive',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    steps: basicSteps,\n    activeStep: 2,\n    nonLinear: true,\n    orientation: 'horizontal'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm we see \"Step One\", \"Step Two\", \"Step Three\"\n    expect(canvas.getByText('Step One')).toBeInTheDocument();\n    expect(canvas.getByText('Step Two')).toBeInTheDocument();\n    expect(canvas.getByText('Step Three')).toBeInTheDocument();\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story: '1) Basic usage\r\n   - No userEvent => remove `async`.',
              ...Basic.parameters?.docs?.description,
            },
          },
        }),
          (WithErrorStep.parameters = {
            ...WithErrorStep.parameters,
            docs: {
              ...WithErrorStep.parameters?.docs,
              source: {
                originalSource:
                  '{\n  args: {\n    steps: errorSteps,\n    activeStep: 2,\n    nonLinear: true,\n    orientation: \'horizontal\'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Check for the label "Second Step (Error)"\n    expect(canvas.getByText(/second step \\(error\\)/i)).toBeInTheDocument();\n  }\n}',
                ...WithErrorStep.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) Steps with an error state\r\n   - No userEvent => remove `async`.',
                ...WithErrorStep.parameters?.docs?.description,
              },
            },
          }),
          (Descriptions.parameters = {
            ...Descriptions.parameters,
            docs: {
              ...Descriptions.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    steps: withDescriptions,\n    activeStep: 2,\n    orientation: 'vertical'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // The step label \"Middle\" is in the DOM\n    expect(canvas.getByText('Middle')).toBeInTheDocument();\n  }\n}",
                ...Descriptions.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) With Descriptions (Tooltip icons)\r\n   - No userEvent => remove `async`.',
                ...Descriptions.parameters?.docs?.description,
              },
            },
          }),
          (Complex.parameters = {
            ...Complex.parameters,
            docs: {
              ...Complex.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    steps: complexSteps,\n    activeStep: 3,\n    // Step 3 is active\n    nonLinear: false,\n    orientation: 'horizontal'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm \"Phase 5 (Error)\" is in the DOM\n    expect(canvas.getByText('Phase 5 (Error)')).toBeInTheDocument();\n    // \"Phase 3\" is active\n    expect(canvas.getByText('Phase 3')).toBeInTheDocument();\n  }\n}",
                ...Complex.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) Complex scenario with multiple steps\r\n   - No userEvent => remove `async`.',
                ...Complex.parameters?.docs?.description,
              },
            },
          }),
          (Interactive.parameters = {
            ...Interactive.parameters,
            docs: {
              ...Interactive.parameters?.docs,
              source: {
                originalSource:
                  "{\n  render: args => <InteractiveExample {...args} />,\n  args: {\n    steps: basicSteps,\n    nonLinear: true,\n    orientation: 'horizontal'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Initially, Step #1 is active\n    expect(canvas.getByText('Step One')).toBeInTheDocument();\n\n    // \"Next\" => move to Step #2\n    const nextBtn = canvas.getByRole('button', {\n      name: 'Next'\n    });\n    await userEvent.click(nextBtn);\n\n    // \"Previous\" => go back\n    const prevBtn = canvas.getByRole('button', {\n      name: 'Previous'\n    });\n    await userEvent.click(prevBtn);\n  }\n}",
                ...Interactive.parameters?.docs?.source,
              },
            },
          })
      },
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
      './src/components/Stepper/index.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { H: () => CustomStepper })
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/next/dist/compiled/react/jsx-runtime.js'
            ),
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ =
            (__webpack_require__(
              './node_modules/next/dist/compiled/react/index.js'
            ),
            __webpack_require__(
              './node_modules/@mui/material/styles/styled.js'
            )),
          _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/Stepper/Stepper.js'
            ),
          _mui_material_Step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            './node_modules/@mui/material/Step/Step.js'
          ),
          _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/material/StepLabel/StepLabel.js'
            ),
          _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Button/index.tsx'
          ),
          _mui_material_StepConnector__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              './node_modules/@mui/material/StepConnector/StepConnector.js'
            ),
          _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/Check.js'
            ),
          _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/CircleOutlined.js'
            ),
          _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/LockOutlined.js'
            ),
          _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/InfoOutlined.js'
            ),
          _barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/material/Tooltip/Tooltip.js'
            ),
          _barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              './node_modules/@mui/material/Tooltip/tooltipClasses.js'
            ),
          _barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(
              './node_modules/@mui/material/IconButton/IconButton.js'
            )
        const StyledStepper = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(props =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_4__.A,
              { ...props }
            )
          )({}),
          Step = (0, _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            props =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _mui_material_Step__WEBPACK_IMPORTED_MODULE_5__.A,
                { ...props }
              )
          )({}),
          StepLabel = (0, _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            props => {
              var _props_slots
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_6__.A,
                {
                  ...props,
                  slots: {
                    stepIcon:
                      null === (_props_slots = props.slots) ||
                      void 0 === _props_slots
                        ? void 0
                        : _props_slots.stepIcon,
                  },
                  sx: {
                    '.MuiStepLabel-labelContainer': {
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      '.MuiStepLabel-label': { marginLeft: '15px', flex: 1 },
                    },
                  },
                }
              )
            }
          )({}),
          BlackTooltip = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            ({ className, ...props }) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,
                { ...props, classes: { popper: className } }
              )
          )({
            [`& .${_barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_8__.A.tooltip}`]:
              { backgroundColor: 'black', color: 'white', fontSize: 14 },
            [`& .${_barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_8__.A.arrow}`]:
              { color: 'black' },
          })
        function CustomStepper({ steps, activeStep, ...rest }) {
          const getStepLink = step =>
              step.statusLink ? step.statusLink : step.stepLink,
            isStepClickable = step => 'inactive' !== step.status
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            StyledStepper,
            {
              ...rest,
              connector: (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _mui_material_StepConnector__WEBPACK_IMPORTED_MODULE_12__.A,
                {}
              ),
              children: steps.map(step =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  Step,
                  {
                    active: step.stepNumber === activeStep,
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      StepLabel,
                      {
                        slots: {
                          stepIcon: () =>
                            (status => {
                              switch (status) {
                                case 'completed':
                                  return (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__.A,
                                    { sx: { color: 'black' } }
                                  )
                                case 'error':
                                default:
                                  return (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_10__.A,
                                    { sx: { color: 'black' } }
                                  )
                                case 'inactive':
                                  return (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_11__.A,
                                    { sx: { color: 'black' } }
                                  )
                              }
                            })(step.status),
                        },
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          _barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_13__.A,
                          {
                            sx: {
                              display: 'flex',
                              alignItems: 'center',
                              width: '100%',
                              gap: 1,
                            },
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Button__WEBPACK_IMPORTED_MODULE_2__.A,
                                {
                                  text: step.label,
                                  variant: 'text',
                                  fontcolor: 'black',
                                  fontlocation: 'left',
                                  href: isStepClickable(step)
                                    ? getStepLink(step)
                                    : void 0,
                                  sx: {
                                    padding: 0,
                                    minWidth: 0,
                                    flex: 1,
                                    justifyContent: 'flex-start',
                                    textTransform: 'none',
                                    '&:hover': {
                                      backgroundColor: 'transparent',
                                    },
                                  },
                                }
                              ),
                              step.description &&
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  BlackTooltip,
                                  {
                                    title: step.description,
                                    arrow: !0,
                                    placement: 'right',
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_14__.A,
                                      {
                                        size: 'small',
                                        sx: {
                                          padding: 0,
                                          color: 'black',
                                          '&:hover': {
                                            backgroundColor: 'transparent',
                                          },
                                        },
                                        children: (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_15__.A,
                                          { fontSize: 'small' }
                                        ),
                                      }
                                    ),
                                  }
                                ),
                            ],
                          }
                        ),
                      }
                    ),
                  },
                  step.label
                )
              ),
            }
          )
        }
        ;(CustomStepper.displayName = 'CustomStepper'),
          (CustomStepper.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'CustomStepper',
            props: {
              steps: {
                required: !0,
                tsType: {
                  name: 'Array',
                  elements: [
                    {
                      name: 'signature',
                      type: 'object',
                      raw: "{\n  stepNumber: number\n  label: string\n  stepLink: string\n  status: 'completed' | 'active' | 'error' | 'inactive'\n  statusLink?: string\n  description?: string\n}",
                      signature: {
                        properties: [
                          {
                            key: 'stepNumber',
                            value: { name: 'number', required: !0 },
                          },
                          {
                            key: 'label',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'stepLink',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'status',
                            value: {
                              name: 'union',
                              raw: "'completed' | 'active' | 'error' | 'inactive'",
                              elements: [
                                { name: 'literal', value: "'completed'" },
                                { name: 'literal', value: "'active'" },
                                { name: 'literal', value: "'error'" },
                                { name: 'literal', value: "'inactive'" },
                              ],
                              required: !0,
                            },
                          },
                          {
                            key: 'statusLink',
                            value: { name: 'string', required: !1 },
                          },
                          {
                            key: 'description',
                            value: { name: 'string', required: !1 },
                          },
                        ],
                      },
                    },
                  ],
                  raw: "{\n  stepNumber: number\n  label: string\n  stepLink: string\n  status: 'completed' | 'active' | 'error' | 'inactive'\n  statusLink?: string\n  description?: string\n}[]",
                },
                description: '',
              },
              activeStep: {
                required: !0,
                tsType: { name: 'number' },
                description: '',
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
