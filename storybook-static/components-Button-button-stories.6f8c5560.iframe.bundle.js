'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [1161],
    {
      './src/components/Button/button.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            CustomColorsAndSize: () => CustomColorsAndSize,
            DefaultButton: () => DefaultButton,
            DisabledButton: () => DisabledButton,
            TextButton: () => TextButton,
            WithIconAbove: () => WithIconAbove,
            WithIconLeft: () => WithIconLeft,
            WithIconRight: () => WithIconRight,
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
            './src/components/Button/index.tsx'
          ),
          _barrel_optimize_names_Send_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/Send.js'
            )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/Button',
            component: _index__WEBPACK_IMPORTED_MODULE_3__.A,
            argTypes: {
              backgroundcolor: { control: 'color' },
              fontcolor: { control: 'color' },
              iconcolor: { control: 'color' },
              iconsize: { control: 'text' },
            },
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Storybook metadata' } },
            },
          },
          DefaultButton = {
            args: { text: 'Click Me' },
            play: async ({ canvasElement }) => {
              const buttonEl = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByRole('button', { name: /click me/i })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                buttonEl
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  buttonEl
                ).not.toBeDisabled()
            },
          },
          DisabledButton = {
            args: { text: 'I am disabled', disableButton: 'true' },
            play: async ({ canvasElement }) => {
              const buttonEl = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByRole('button', { name: /i am disabled/i })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                buttonEl
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  buttonEl
                ).toBeDisabled()
            },
          },
          TextButton = {
            args: {
              text: 'I am text only',
              backgroundcolor: 'none',
              fontcolor: '#1976d2',
            },
            play: async ({ canvasElement }) => {
              const buttonEl = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByRole('button', { name: /i am text only/i })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                buttonEl
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  buttonEl
                ).not.toBeDisabled()
            },
          },
          WithIconLeft = {
            args: {
              text: 'Send',
              icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_Send_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.A,
                {}
              ),
              iconlocation: 'left',
            },
            play: async ({ canvasElement }) => {
              const buttonEl = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByRole('button', { name: /send/i })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                buttonEl
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  buttonEl
                ).toBeInTheDocument()
            },
          },
          WithIconRight = {
            args: {
              text: 'Send',
              icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_Send_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.A,
                {}
              ),
              iconlocation: 'right',
            },
          },
          WithIconAbove = {
            args: {
              text: 'Send',
              icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_Send_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__.A,
                {}
              ),
              iconlocation: 'above',
              fontlocation: 'center',
            },
          },
          CustomColorsAndSize = {
            args: {
              text: 'Custom Colors',
              backgroundcolor: '#4caf50',
              fontcolor: '#ffffff',
              width: '120px',
              height: '50px',
            },
            play: async ({ canvasElement }) => {
              const buttonEl = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_2__.ux)(
                canvasElement
              ).getByRole('button', { name: /custom colors/i })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_2__.Q4.click(
                buttonEl
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_2__.E3)(
                  buttonEl
                ).not.toBeDisabled()
            },
          },
          __namedExportsOrder = [
            'DefaultButton',
            'DisabledButton',
            'TextButton',
            'WithIconLeft',
            'WithIconRight',
            'WithIconAbove',
            'CustomColorsAndSize',
          ]
        ;(DefaultButton.parameters = {
          ...DefaultButton.parameters,
          docs: {
            ...DefaultButton.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    text: 'Click Me'\n  },\n  // Optional test using Storybook \"play\" function\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Grab the button\n    const buttonEl = canvas.getByRole('button', {\n      name: /click me/i\n    });\n\n    // Simulate a user click\n    await userEvent.click(buttonEl);\n\n    // Verify some condition - for now, just ensure it's not disabled\n    expect(buttonEl).not.toBeDisabled();\n  }\n}",
              ...DefaultButton.parameters?.docs?.source,
            },
            description: {
              story: '1) Default Button',
              ...DefaultButton.parameters?.docs?.description,
            },
          },
        }),
          (DisabledButton.parameters = {
            ...DisabledButton.parameters,
            docs: {
              ...DisabledButton.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    text: 'I am disabled',\n    disableButton: 'true'\n  },\n  // Add an 'await' call or remove `async`\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const buttonEl = canvas.getByRole('button', {\n      name: /i am disabled/i\n    });\n\n    // Attempt a click just to satisfy 'await'\n    await userEvent.click(buttonEl);\n\n    // This button should be disabled\n    expect(buttonEl).toBeDisabled();\n  }\n}",
                ...DisabledButton.parameters?.docs?.source,
              },
              description: {
                story: '2) Disabled Button',
                ...DisabledButton.parameters?.docs?.description,
              },
            },
          }),
          (TextButton.parameters = {
            ...TextButton.parameters,
            docs: {
              ...TextButton.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    text: 'I am text only',\n    backgroundcolor: 'none',\n    // Transparent\n    fontcolor: '#1976d2' // Typical link-blue color\n  },\n  // Add an 'await' call or remove `async`\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const buttonEl = canvas.getByRole('button', {\n      name: /i am text only/i\n    });\n\n    // Confirm it is not disabled by clicking\n    await userEvent.click(buttonEl);\n    expect(buttonEl).not.toBeDisabled();\n  }\n}",
                ...TextButton.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Text (Transparent) Button\r\n   (backgroundcolor="none" => "text" style)',
                ...TextButton.parameters?.docs?.description,
              },
            },
          }),
          (WithIconLeft.parameters = {
            ...WithIconLeft.parameters,
            docs: {
              ...WithIconLeft.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    text: 'Send',\n    icon: <Send />,\n    // MUI icon\n    iconlocation: 'left' // Icon on the left\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const buttonEl = canvas.getByRole('button', {\n      name: /send/i\n    });\n    await userEvent.click(buttonEl);\n    // We can assert it's still present\n    expect(buttonEl).toBeInTheDocument();\n  }\n}",
                ...WithIconLeft.parameters?.docs?.source,
              },
              description: {
                story: '4) Button with Icon on the Left',
                ...WithIconLeft.parameters?.docs?.description,
              },
            },
          }),
          (WithIconRight.parameters = {
            ...WithIconRight.parameters,
            docs: {
              ...WithIconRight.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    text: 'Send',\n    icon: <Send />,\n    iconlocation: 'right'\n  }\n  // No \"play\" test here, but you can add one if you like\n}",
                ...WithIconRight.parameters?.docs?.source,
              },
              description: {
                story: '5) Button with Icon on the Right',
                ...WithIconRight.parameters?.docs?.description,
              },
            },
          }),
          (WithIconAbove.parameters = {
            ...WithIconAbove.parameters,
            docs: {
              ...WithIconAbove.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    text: 'Send',\n    icon: <Send />,\n    iconlocation: 'above',\n    // Icon stacked on top\n    fontlocation: 'center' // Center text\n  }\n}",
                ...WithIconAbove.parameters?.docs?.source,
              },
              description: {
                story: '6) Button with Icon Above the Text',
                ...WithIconAbove.parameters?.docs?.description,
              },
            },
          }),
          (CustomColorsAndSize.parameters = {
            ...CustomColorsAndSize.parameters,
            docs: {
              ...CustomColorsAndSize.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    text: 'Custom Colors',\n    backgroundcolor: '#4caf50',\n    fontcolor: '#ffffff',\n    width: '120px',\n    height: '50px'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const buttonEl = canvas.getByRole('button', {\n      name: /custom colors/i\n    });\n    await userEvent.click(buttonEl);\n    expect(buttonEl).not.toBeDisabled();\n  }\n}",
                ...CustomColorsAndSize.parameters?.docs?.source,
              },
              description: {
                story: '7) Custom Colors & Sizing',
                ...CustomColorsAndSize.parameters?.docs?.description,
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
