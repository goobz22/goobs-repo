'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [7861],
    {
      './node_modules/@mui/icons-material/esm/CheckCircle.js': (
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
            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z',
          }),
          'CheckCircle'
        )
      },
      './node_modules/@mui/icons-material/esm/Info.js': (
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
            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z',
          }),
          'Info'
        )
      },
      './node_modules/@mui/material/FormHelperText/FormHelperText.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => FormHelperText_FormHelperText,
        })
        var react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
          composeClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/composeClasses/composeClasses.js'
          ),
          formControlState = __webpack_require__(
            './node_modules/@mui/material/FormControl/formControlState.js'
          ),
          useFormControl = __webpack_require__(
            './node_modules/@mui/material/FormControl/useFormControl.js'
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
          generateUtilityClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          generateUtilityClass = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
          )
        function getFormHelperTextUtilityClasses(slot) {
          return (0, generateUtilityClass.Ay)('MuiFormHelperText', slot)
        }
        const FormHelperText_formHelperTextClasses = (0,
        generateUtilityClasses.A)('MuiFormHelperText', [
          'root',
          'error',
          'disabled',
          'sizeSmall',
          'sizeMedium',
          'contained',
          'focused',
          'filled',
          'required',
        ])
        var _span,
          jsx_runtime = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        const FormHelperTextRoot = (0, styled.Ay)('p', {
            name: 'MuiFormHelperText',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.root,
                ownerState.size &&
                  styles[`size${(0, capitalize.A)(ownerState.size)}`],
                ownerState.contained && styles.contained,
                ownerState.filled && styles.filled,
              ]
            },
          })(
            (0, memoTheme.A)(({ theme }) => ({
              color: (theme.vars || theme).palette.text.secondary,
              ...theme.typography.caption,
              textAlign: 'left',
              marginTop: 3,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
              [`&.${FormHelperText_formHelperTextClasses.disabled}`]: {
                color: (theme.vars || theme).palette.text.disabled,
              },
              [`&.${FormHelperText_formHelperTextClasses.error}`]: {
                color: (theme.vars || theme).palette.error.main,
              },
              variants: [
                { props: { size: 'small' }, style: { marginTop: 4 } },
                {
                  props: ({ ownerState }) => ownerState.contained,
                  style: { marginLeft: 14, marginRight: 14 },
                },
              ],
            }))
          ),
          FormHelperText_FormHelperText = react.forwardRef(
            function FormHelperText(inProps, ref) {
              const props = (0, DefaultPropsProvider.b)({
                  props: inProps,
                  name: 'MuiFormHelperText',
                }),
                {
                  children,
                  className,
                  component = 'p',
                  disabled,
                  error,
                  filled,
                  focused,
                  margin,
                  required,
                  variant,
                  ...other
                } = props,
                muiFormControl = (0, useFormControl.A)(),
                fcs = (0, formControlState.A)({
                  props,
                  muiFormControl,
                  states: [
                    'variant',
                    'size',
                    'disabled',
                    'error',
                    'filled',
                    'focused',
                    'required',
                  ],
                }),
                ownerState = {
                  ...props,
                  component,
                  contained:
                    'filled' === fcs.variant || 'outlined' === fcs.variant,
                  variant: fcs.variant,
                  size: fcs.size,
                  disabled: fcs.disabled,
                  error: fcs.error,
                  filled: fcs.filled,
                  focused: fcs.focused,
                  required: fcs.required,
                }
              delete ownerState.ownerState
              const classes = (ownerState => {
                const {
                    classes,
                    contained,
                    size,
                    disabled,
                    error,
                    filled,
                    focused,
                    required,
                  } = ownerState,
                  slots = {
                    root: [
                      'root',
                      disabled && 'disabled',
                      error && 'error',
                      size && `size${(0, capitalize.A)(size)}`,
                      contained && 'contained',
                      focused && 'focused',
                      filled && 'filled',
                      required && 'required',
                    ],
                  }
                return (0, composeClasses.A)(
                  slots,
                  getFormHelperTextUtilityClasses,
                  classes
                )
              })(ownerState)
              return (0, jsx_runtime.jsx)(FormHelperTextRoot, {
                as: component,
                className: (0, clsx.A)(classes.root, className),
                ref,
                ...other,
                ownerState,
                children:
                  ' ' === children
                    ? _span ||
                      (_span = (0, jsx_runtime.jsx)('span', {
                        className: 'notranslate',
                        'aria-hidden': !0,
                        children: '​',
                      }))
                    : children,
              })
            }
          )
      },
      './src/components/PricingTable/pricingtable.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            CustomTitle: () => CustomTitle,
            Default: () => Default,
            NoFeatures: () => NoFeatures,
            SwitchPackages: () => SwitchPackages,
            TwoPackages: () => TwoPackages,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _defaultConfig_tabletitle,
          _defaultConfig_packagecolumns,
          _defaultConfig_monthlyprice,
          _defaultConfig_annualprice,
          _defaultConfig_buttoncolumns,
          _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/components/PricingTable/index.tsx'
          ),
          _defaultconfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/PricingTable/defaultconfig.tsx'
          )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/PricingTable',
            component: _index__WEBPACK_IMPORTED_MODULE_1__.A,
            parameters: {
              a11y: { disable: !1 },
              docs: {
                description: { component: 'Setup the Storybook metadata' },
              },
            },
          },
          Default = {
            args: { ..._defaultconfig__WEBPACK_IMPORTED_MODULE_2__.A },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Frontend Components')
              ).toBeInTheDocument()
              const dropdownButton = canvas.getByRole('button', {
                name: /Packages/i,
              })
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                dropdownButton
              ).toBeInTheDocument()
            },
          },
          SwitchPackages = {
            args: { ..._defaultconfig__WEBPACK_IMPORTED_MODULE_2__.A },
            name: 'Interact: Switch Packages',
            play: async ({ canvasElement }) => {
              const canvas = (0,
                _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement),
                dropdownButton = canvas.getByRole('button', {
                  name: /Packages/i,
                })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                dropdownButton
              )
              const proOption = canvas.getByText('ThothOS Pro')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                proOption
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  await canvas.findByText('Monthly Pricing - $20')
                ).toBeInTheDocument()
            },
          },
          CustomTitle = {
            args: {
              ..._defaultconfig__WEBPACK_IMPORTED_MODULE_2__.A,
              tabletitle: {
                text: 'My Custom Pricing Table',
                columnconfig:
                  null ===
                    (_defaultConfig_tabletitle =
                      _defaultconfig__WEBPACK_IMPORTED_MODULE_2__.A
                        .tabletitle) || void 0 === _defaultConfig_tabletitle
                    ? void 0
                    : _defaultConfig_tabletitle.columnconfig,
              },
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('My Custom Pricing Table')
              ).toBeInTheDocument()
            },
          },
          NoFeatures = {
            args: {
              ..._defaultconfig__WEBPACK_IMPORTED_MODULE_2__.A,
              features: [],
            },
            name: 'Empty Features',
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.queryByText('Frontend Components')
              ).not.toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Monthly Pricing - $10')
                ).toBeInTheDocument()
            },
          },
          TwoPackages = {
            args: {
              ..._defaultconfig__WEBPACK_IMPORTED_MODULE_2__.A,
              packagecolumns: {
                packagenames: ['Basic', 'Advanced'],
                columnconfig:
                  null ===
                    (_defaultConfig_packagecolumns =
                      _defaultconfig__WEBPACK_IMPORTED_MODULE_2__.A
                        .packagecolumns) ||
                  void 0 === _defaultConfig_packagecolumns
                    ? void 0
                    : _defaultConfig_packagecolumns.columnconfig,
              },
              monthlyprice: {
                prices: ['Monthly - $5', 'Monthly - $15'],
                columnconfig:
                  null ===
                    (_defaultConfig_monthlyprice =
                      _defaultconfig__WEBPACK_IMPORTED_MODULE_2__.A
                        .monthlyprice) || void 0 === _defaultConfig_monthlyprice
                    ? void 0
                    : _defaultConfig_monthlyprice.columnconfig,
              },
              annualprice: {
                annualprices: ['Annually - $50', 'Annually - $150'],
                columnconfig:
                  null ===
                    (_defaultConfig_annualprice =
                      _defaultconfig__WEBPACK_IMPORTED_MODULE_2__.A
                        .annualprice) || void 0 === _defaultConfig_annualprice
                    ? void 0
                    : _defaultConfig_annualprice.columnconfig,
              },
              buttoncolumns: {
                buttontexts: ['Get Basic', 'Get Advanced'],
                buttonlinks: ['#basic', '#advanced'],
                columnconfig:
                  null ===
                    (_defaultConfig_buttoncolumns =
                      _defaultconfig__WEBPACK_IMPORTED_MODULE_2__.A
                        .buttoncolumns) ||
                  void 0 === _defaultConfig_buttoncolumns
                    ? void 0
                    : _defaultConfig_buttoncolumns.columnconfig,
              },
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
                _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement),
                dropdownButton = canvas.getByRole('button', {
                  name: /Packages/i,
                })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                dropdownButton
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Basic')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Advanced')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.queryByText('ThothOS')
                ).not.toBeInTheDocument()
            },
          },
          __namedExportsOrder = [
            'Default',
            'SwitchPackages',
            'CustomTitle',
            'NoFeatures',
            'TwoPackages',
          ]
        ;(Default.parameters = {
          ...Default.parameters,
          docs: {
            ...Default.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    ...defaultConfig\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm that a main feature like "Frontend Components" is visible\n    expect(canvas.getByText(\'Frontend Components\')).toBeInTheDocument();\n\n    // Confirm the "Packages" dropdown is present\n    const dropdownButton = canvas.getByRole(\'button\', {\n      name: /Packages/i\n    });\n    expect(dropdownButton).toBeInTheDocument();\n  }\n}',
              ...Default.parameters?.docs?.source,
            },
            description: {
              story:
                '1) Default usage with the provided defaultConfig\r\n   No `await` usage => remove `async`.',
              ...Default.parameters?.docs?.description,
            },
          },
        }),
          (SwitchPackages.parameters = {
            ...SwitchPackages.parameters,
            docs: {
              ...SwitchPackages.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    ...defaultConfig\n  },\n  name: 'Interact: Switch Packages',\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Step 1: Open the packages dropdown\n    const dropdownButton = canvas.getByRole('button', {\n      name: /Packages/i\n    });\n    await userEvent.click(dropdownButton);\n\n    // Step 2: Choose a different package (e.g., \"ThothOS Pro\")\n    const proOption = canvas.getByText('ThothOS Pro');\n    await userEvent.click(proOption);\n\n    // Step 3: Confirm that the monthly price text changes accordingly\n    // In defaultConfig, monthly is \"Monthly Pricing - $20\" for \"ThothOS Pro\"\n    expect(await canvas.findByText('Monthly Pricing - $20')).toBeInTheDocument();\n  }\n}",
                ...SwitchPackages.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) Switch packages in the dropdown\r\n   Uses `await userEvent...`, so keep `async`.',
                ...SwitchPackages.parameters?.docs?.description,
              },
            },
          }),
          (CustomTitle.parameters = {
            ...CustomTitle.parameters,
            docs: {
              ...CustomTitle.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    ...defaultConfig,\n    tabletitle: {\n      text: 'My Custom Pricing Table',\n      columnconfig: defaultConfig.tabletitle?.columnconfig\n    }\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Check for the new custom table title\n    expect(canvas.getByText('My Custom Pricing Table')).toBeInTheDocument();\n  }\n}",
                ...CustomTitle.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Custom Title & More Features\r\n   No `await` usage => remove `async`.',
                ...CustomTitle.parameters?.docs?.description,
              },
            },
          }),
          (NoFeatures.parameters = {
            ...NoFeatures.parameters,
            docs: {
              ...NoFeatures.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    ...defaultConfig,\n    features: []\n  },\n  name: 'Empty Features',\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // \"Frontend Components\" won't exist because features is empty\n    expect(canvas.queryByText('Frontend Components')).not.toBeInTheDocument();\n\n    // The rest of the layout still shows\n    expect(canvas.getByText('Monthly Pricing - $10')).toBeInTheDocument();\n  }\n}",
                ...NoFeatures.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) Minimal scenario (no features)\r\n   No `await` usage => remove `async`.',
                ...NoFeatures.parameters?.docs?.description,
              },
            },
          }),
          (TwoPackages.parameters = {
            ...TwoPackages.parameters,
            docs: {
              ...TwoPackages.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    ...defaultConfig,\n    packagecolumns: {\n      packagenames: ['Basic', 'Advanced'],\n      columnconfig: defaultConfig.packagecolumns?.columnconfig\n    },\n    monthlyprice: {\n      prices: ['Monthly - $5', 'Monthly - $15'],\n      columnconfig: defaultConfig.monthlyprice?.columnconfig\n    },\n    annualprice: {\n      annualprices: ['Annually - $50', 'Annually - $150'],\n      columnconfig: defaultConfig.annualprice?.columnconfig\n    },\n    buttoncolumns: {\n      buttontexts: ['Get Basic', 'Get Advanced'],\n      buttonlinks: ['#basic', '#advanced'],\n      columnconfig: defaultConfig.buttoncolumns?.columnconfig\n    }\n  } as PricingProps,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Check that only two packages are present in the dropdown\n    const dropdownButton = canvas.getByRole('button', {\n      name: /Packages/i\n    });\n    await userEvent.click(dropdownButton);\n    expect(canvas.getByText('Basic')).toBeInTheDocument();\n    expect(canvas.getByText('Advanced')).toBeInTheDocument();\n    expect(canvas.queryByText('ThothOS')).not.toBeInTheDocument();\n  }\n}",
                ...TwoPackages.parameters?.docs?.source,
              },
              description: {
                story:
                  '5) Only 2 packages scenario\r\n   We do have an `await userEvent.click`, so keep `async`.',
                ...TwoPackages.parameters?.docs?.description,
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
      './src/components/Grid/index.tsx': (
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
          _mui_material_Grid2__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__('./node_modules/@mui/material/Grid2/Grid2.js'),
          _barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@mui/material/useMediaQuery/index.js'
            )
        function getResponsiveValue(value, breakpoint) {
          if (void 0 !== value)
            return (function isResponsiveObject(value) {
              return (
                'object' == typeof value &&
                null !== value &&
                !Array.isArray(value)
              )
            })(value)
              ? value[breakpoint]
              : value
        }
        function CustomGrid({ gridconfig, columnconfig, cellconfig, ...rest }) {
          const isMobile = (0,
            _barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__.A)(
              '(max-width:600px)'
            ),
            isSmallTablet = (0,
            _barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__.A)(
              '(min-width:601px) and (max-width:900px)'
            ),
            isMediumSmall = (0,
            _barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__.A)(
              '(min-width:901px) and (max-width:960px)'
            ),
            isMediumLarge = (0,
            _barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__.A)(
              '(min-width:961px) and (max-width:1024px)'
            ),
            isLarge = (0,
            _barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__.A)(
              '(min-width:1025px) and (max-width:1170px)'
            ),
            isExtraLarge = (0,
            _barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__.A)(
              '(min-width:1537px)'
            ),
            currentBreakpoint = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
              () =>
                isMobile
                  ? 'xs'
                  : isSmallTablet
                    ? 'sm'
                    : isMediumSmall
                      ? 'md'
                      : isMediumLarge
                        ? 'ms'
                        : isLarge
                          ? 'ml'
                          : isExtraLarge
                            ? 'xl'
                            : 'lg',
              [
                isMobile,
                isSmallTablet,
                isMediumSmall,
                isMediumLarge,
                isLarge,
                isExtraLarge,
              ]
            ),
            singleGridConfig = Array.isArray(gridconfig)
              ? gridconfig[0]
              : gridconfig,
            {
              defaultColumnWidth = '150px',
              alignment,
              margintop,
              marginbottom,
              marginleft,
              marginright,
              paddingtop,
              paddingbottom,
              paddingleft,
              paddingright,
              gridwidth,
            } = singleGridConfig || {},
            gridJustifyContent =
              'left' === alignment
                ? 'flex-start'
                : 'right' === alignment
                  ? 'flex-end'
                  : 'center',
            gridMarginTop = getResponsiveValue(margintop, currentBreakpoint),
            gridMarginBottom = getResponsiveValue(
              marginbottom,
              currentBreakpoint
            ),
            gridMarginLeft = getResponsiveValue(marginleft, currentBreakpoint),
            gridMarginRight = getResponsiveValue(
              marginright,
              currentBreakpoint
            ),
            gridPaddingTop = getResponsiveValue(paddingtop, currentBreakpoint),
            gridPaddingBottom = getResponsiveValue(
              paddingbottom,
              currentBreakpoint
            ),
            gridPaddingLeft = getResponsiveValue(
              paddingleft,
              currentBreakpoint
            ),
            gridPaddingRight = getResponsiveValue(
              paddingright,
              currentBreakpoint
            ),
            rows = Math.max(...(columnconfig || []).map(c => c.row || 1), 1)
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _mui_material_Grid2__WEBPACK_IMPORTED_MODULE_3__.A,
            {
              container: !0,
              width: gridwidth || '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: gridJustifyContent,
              minWidth: '300px',
              sx: {
                padding: 0,
                margin: 0,
                gap: 0,
                marginTop: gridMarginTop ? 8 * gridMarginTop + 'px' : 0,
                marginBottom: gridMarginBottom
                  ? 8 * gridMarginBottom + 'px'
                  : 0,
                marginLeft: gridMarginLeft ? 8 * gridMarginLeft + 'px' : 0,
                marginRight: gridMarginRight ? 8 * gridMarginRight + 'px' : 0,
                paddingTop: gridPaddingTop ? 8 * gridPaddingTop + 'px' : 0,
                paddingBottom: gridPaddingBottom
                  ? 8 * gridPaddingBottom + 'px'
                  : 0,
                paddingLeft: gridPaddingLeft ? 8 * gridPaddingLeft + 'px' : 0,
                paddingRight: gridPaddingRight
                  ? 8 * gridPaddingRight + 'px'
                  : 0,
                '& > *:not(.grid-column)': {
                  border: 'none !important',
                  padding: 0,
                  margin: 0,
                },
              },
              ...rest,
              children: Array.from({ length: rows }).map((_, rowIndex) => {
                const columnsInRow = (columnconfig || []).filter(
                    c => c.row === rowIndex + 1
                  ),
                  maxColumns = Math.max(
                    ...columnsInRow.map(c => c.column || 1),
                    1
                  )
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _mui_material_Grid2__WEBPACK_IMPORTED_MODULE_3__.A,
                  {
                    container: !0,
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    spacing: 0,
                    sx: {
                      width: '100%',
                      gap: 0,
                      padding: 0,
                      margin: 0,
                      height: 'fit-content',
                      minHeight: 'min-content',
                      border: 'none',
                      '& > *': { border: 'none !important', padding: 0 },
                    },
                    children: Array.from({ length: maxColumns }).map(
                      (_, columnIndex) => {
                        const currentColumnConfig = (columnconfig || []).find(
                            c =>
                              c.row === rowIndex + 1 &&
                              c.column === columnIndex + 1
                          ),
                          currentCellConfig =
                            (null == currentColumnConfig
                              ? void 0
                              : currentColumnConfig.cellconfig) || cellconfig,
                          hasFixedWidth = Boolean(
                            null == currentCellConfig
                              ? void 0
                              : currentCellConfig.width
                          )
                        let computedWidth = ''
                        computedWidth = (
                          null == currentCellConfig
                            ? void 0
                            : currentCellConfig.width
                        )
                          ? currentCellConfig.width
                          : isMobile
                            ? (null == currentColumnConfig
                                ? void 0
                                : currentColumnConfig.mobilewidth) ||
                              (null == currentColumnConfig
                                ? void 0
                                : currentColumnConfig.columnwidth) ||
                              defaultColumnWidth
                            : isSmallTablet
                              ? (null == currentColumnConfig
                                  ? void 0
                                  : currentColumnConfig.tabletwidth) ||
                                (null == currentColumnConfig
                                  ? void 0
                                  : currentColumnConfig.columnwidth) ||
                                defaultColumnWidth
                              : (null == currentColumnConfig
                                  ? void 0
                                  : currentColumnConfig.computerwidth) ||
                                (null == currentColumnConfig
                                  ? void 0
                                  : currentColumnConfig.columnwidth) ||
                                defaultColumnWidth
                        const justifyContent =
                            'left' ===
                            (null == currentColumnConfig
                              ? void 0
                              : currentColumnConfig.alignment)
                              ? 'flex-start'
                              : 'right' ===
                                  (null == currentColumnConfig
                                    ? void 0
                                    : currentColumnConfig.alignment)
                                ? 'flex-end'
                                : 'center',
                          marginTopVal = getResponsiveValue(
                            null == currentColumnConfig
                              ? void 0
                              : currentColumnConfig.margintop,
                            currentBreakpoint
                          ),
                          marginBottomVal = getResponsiveValue(
                            null == currentColumnConfig
                              ? void 0
                              : currentColumnConfig.marginbottom,
                            currentBreakpoint
                          ),
                          marginLeftVal = getResponsiveValue(
                            null == currentColumnConfig
                              ? void 0
                              : currentColumnConfig.marginleft,
                            currentBreakpoint
                          ),
                          marginRightVal = getResponsiveValue(
                            null == currentColumnConfig
                              ? void 0
                              : currentColumnConfig.marginright,
                            currentBreakpoint
                          ),
                          paddingTopVal = getResponsiveValue(
                            null == currentColumnConfig
                              ? void 0
                              : currentColumnConfig.paddingtop,
                            currentBreakpoint
                          ),
                          paddingBottomVal = getResponsiveValue(
                            null == currentColumnConfig
                              ? void 0
                              : currentColumnConfig.paddingbottom,
                            currentBreakpoint
                          ),
                          paddingLeftVal = getResponsiveValue(
                            null == currentColumnConfig
                              ? void 0
                              : currentColumnConfig.paddingleft,
                            currentBreakpoint
                          ),
                          paddingRightVal = getResponsiveValue(
                            null == currentColumnConfig
                              ? void 0
                              : currentColumnConfig.paddingright,
                            currentBreakpoint
                          ),
                          shouldWrap =
                            'nowrap' !==
                            (null == currentCellConfig
                              ? void 0
                              : currentCellConfig.wrap)
                        return (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _mui_material_Grid2__WEBPACK_IMPORTED_MODULE_3__.A,
                          {
                            className: 'grid-column',
                            sx: {
                              display: 'flex',
                              justifyContent,
                              alignItems: 'center',
                              width: computedWidth,
                              position: 'relative',
                              flexGrow: hasFixedWidth ? 0 : 1,
                              flexShrink: hasFixedWidth ? 0 : 1,
                              flexBasis: hasFixedWidth ? computedWidth : 'auto',
                              height: 'fit-content',
                              marginLeft: marginLeftVal
                                ? 8 * marginLeftVal + 'px !important'
                                : '0 !important',
                              marginRight: marginRightVal
                                ? 8 * marginRightVal + 'px !important'
                                : '0 !important',
                              marginTop: marginTopVal
                                ? 8 * marginTopVal + 'px !important'
                                : '0 !important',
                              marginBottom: marginBottomVal
                                ? 8 * marginBottomVal + 'px !important'
                                : '0 !important',
                              paddingLeft: paddingLeftVal
                                ? 8 * paddingLeftVal + 'px !important'
                                : '0 !important',
                              paddingRight: paddingRightVal
                                ? 8 * paddingRightVal + 'px !important'
                                : '0 !important',
                              paddingTop: paddingTopVal
                                ? 8 * paddingTopVal + 'px !important'
                                : '0 !important',
                              paddingBottom: paddingBottomVal
                                ? 8 * paddingBottomVal + 'px !important'
                                : '0 !important',
                              border: 'none',
                              backgroundColor:
                                null == currentCellConfig
                                  ? void 0
                                  : currentCellConfig.backgroundColor,
                              minHeight: 'min-content',
                              overflow: 'hidden',
                              whiteSpace: shouldWrap ? 'normal' : 'nowrap',
                              textOverflow: shouldWrap ? 'clip' : 'ellipsis',
                              '& > *': {
                                border: 'none !important',
                                padding: 0,
                                margin: 0,
                              },
                            },
                            onClick:
                              null == currentCellConfig
                                ? void 0
                                : currentCellConfig.onClick,
                            children:
                              null == currentColumnConfig
                                ? void 0
                                : currentColumnConfig.component,
                          },
                          `column-${columnIndex}`
                        )
                      }
                    ),
                  },
                  `row-${rowIndex}`
                )
              }),
            }
          )
        }
        CustomGrid.displayName = 'CustomGrid'
        const __WEBPACK_DEFAULT_EXPORT__ = CustomGrid
        CustomGrid.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CustomGrid',
          props: {
            gridconfig: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'gridconfig | gridconfig[]',
                elements: [
                  { name: 'gridconfig' },
                  {
                    name: 'Array',
                    elements: [{ name: 'gridconfig' }],
                    raw: 'gridconfig[]',
                  },
                ],
              },
              description: '',
            },
            columnconfig: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'columnconfig' }],
                raw: 'columnconfig[]',
              },
              description: '',
            },
            cellconfig: {
              required: !1,
              tsType: { name: 'cellconfig' },
              description: '',
            },
          },
          composes: ['Omit'],
        }
      },
      './src/components/PricingTable/defaultconfig.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        const __WEBPACK_DEFAULT_EXPORT__ = {
          headerGridConfig: {
            gridname: 'pricingtableheader',
            alignment: 'center',
            gridwidth: '100%',
          },
          tabletitle: {
            text: 'Features',
            columnconfig: {
              row: 3,
              column: 1,
              gridname: 'pricingtableheader',
              alignment: 'left',
              paddingleft: { xs: 2, sm: 2, md: 2, ms: 2, ml: 2, lg: 2, xl: 2 },
              paddingtop: { xs: 1, sm: 1, md: 1, ms: 1, ml: 1, lg: 1, xl: 1 },
              mobilewidth: '100%',
              tabletwidth: '100%',
              computerwidth: '50%',
            },
          },
          packagecolumns: {
            packagenames: ['ThothOS', 'ThothOS Pro', 'ThothOS Enterprise'],
            columnconfig: {
              row: 1,
              column: 1,
              gridname: 'pricingtableheader',
              alignment: 'center',
              paddingleft: { xs: 2, sm: 2, md: 2, ms: 2, ml: 2, lg: 2, xl: 2 },
              paddingright: { xs: 2, sm: 2, md: 2, ms: 2, ml: 2, lg: 2, xl: 2 },
              paddingtop: {
                xs: 2.5,
                sm: 2.5,
                md: 2.5,
                ms: 2.5,
                ml: 2.5,
                lg: 2.5,
                xl: 2.5,
              },
              paddingbottom: {
                xs: 1,
                sm: 2,
                md: 2,
                ms: 2,
                ml: 2,
                lg: 2,
                xl: 2,
              },
              mobilewidth: '100%',
              tabletwidth: '48%',
              computerwidth: '48%',
            },
          },
          monthlyprice: {
            prices: [
              'Monthly Pricing - $10',
              'Monthly Pricing - $20',
              'Monthly Pricing - $30',
            ],
            columnconfig: {
              row: 2,
              column: 1,
              mobilewidth: '100%',
              tabletwidth: '48%',
              computerwidth: '48%',
              gridname: 'pricingtableheader',
              alignment: 'center',
            },
          },
          annualprice: {
            annualprices: [
              'Annual Pricing - $100',
              'Annual Pricing - $200',
              'Annual Pricing - $300',
            ],
            columnconfig: {
              row: 2,
              column: 2,
              mobilewidth: '100%',
              tabletwidth: '48%',
              computerwidth: '48%',
              gridname: 'pricingtableheader',
              alignment: 'center',
            },
          },
          featureGridConfig: {
            gridname: 'pricingtablefeatures',
            alignment: 'center',
            gridwidth: '100%',
          },
          features: [
            {
              title: 'Frontend Components',
              infopopuptext: 'How do I choose the right plan?',
              titlelink: '',
              columnconfig: {
                row: 1,
                column: 1,
                mobilewidth: '80%',
                tabletwidth: '48%',
                computerwidth: '48%',
                gridname: 'pricingtablefeatures',
                alignment: 'left',
              },
              tiedtopackage: {
                tiedtopackages: ['true', 'true', 'true'],
                columnconfig: {
                  row: 1,
                  column: 2,
                  mobilewidth: '20%',
                  tabletwidth: '48%',
                  computerwidth: '48%',
                  gridname: 'pricingtablefeatures',
                  alignment: 'center',
                },
              },
              subfeatures: [
                {
                  title: 'Pricing Table',
                  infopopuptext: 'Pricing table subfeature info',
                  columnconfig: {
                    row: 2,
                    column: 1,
                    mobilewidth: '80%',
                    tabletwidth: '48%',
                    computerwidth: '48%',
                    gridname: 'pricingtablefeatures',
                    alignment: 'left',
                  },
                  tiedtopackage: {
                    tiedtopackages: ['true', 'true', 'true'],
                    columnconfig: {
                      row: 2,
                      column: 2,
                      mobilewidth: '20%',
                      tabletwidth: '48%',
                      computerwidth: '48%',
                      gridname: 'pricingtablefeatures',
                      alignment: 'center',
                    },
                  },
                },
                {
                  title: 'Feature Grid',
                  titlelink: '',
                  infopopuptext: 'Feature grid subfeature info',
                  columnconfig: {
                    row: 3,
                    column: 1,
                    mobilewidth: '80%',
                    tabletwidth: '48%',
                    computerwidth: '48%',
                    gridname: 'pricingtablefeatures',
                    alignment: 'left',
                  },
                  tiedtopackage: {
                    tiedtopackages: ['true', 'true', 'true'],
                    columnconfig: {
                      row: 3,
                      column: 2,
                      mobilewidth: '20%',
                      tabletwidth: '48%',
                      computerwidth: '48%',
                      gridname: 'pricingtablefeatures',
                      alignment: 'center',
                    },
                  },
                },
              ],
            },
            {
              title: 'Backend Capabilities',
              infopopuptext: 'What is the difference between the plans?',
              columnconfig: {
                row: 4,
                column: 1,
                mobilewidth: '80%',
                tabletwidth: '48%',
                computerwidth: '48%',
                gridname: 'pricingtablefeatures',
                alignment: 'left',
              },
              tiedtopackage: {
                tiedtopackages: ['true', 'true', 'true'],
                columnconfig: {
                  row: 4,
                  column: 2,
                  mobilewidth: '20%',
                  tabletwidth: '48%',
                  computerwidth: '48%',
                  gridname: 'pricingtablefeatures',
                  alignment: 'center',
                },
              },
              subfeatures: [
                {
                  title: 'API Integration',
                  titlelink: '',
                  infopopuptext: 'API integration subfeature info',
                  columnconfig: {
                    row: 5,
                    column: 1,
                    mobilewidth: '80%',
                    tabletwidth: '50%',
                    computerwidth: '48%',
                    gridname: 'pricingtablefeatures',
                    alignment: 'left',
                  },
                  tiedtopackage: {
                    tiedtopackages: ['true', 'true', 'true'],
                    columnconfig: {
                      row: 5,
                      column: 2,
                      mobilewidth: '20%',
                      tabletwidth: '48%',
                      computerwidth: '48%',
                      gridname: 'pricingtablefeatures',
                      alignment: 'center',
                    },
                  },
                },
                {
                  title: 'Database Support',
                  titlelink: '',
                  infopopuptext: 'Database support subfeature info',
                  columnconfig: {
                    row: 6,
                    column: 1,
                    mobilewidth: '80%',
                    tabletwidth: '48%',
                    computerwidth: '48%',
                    gridname: 'pricingtablefeatures',
                    alignment: 'left',
                  },
                  tiedtopackage: {
                    tiedtopackages: ['true', 'true', 'true'],
                    columnconfig: {
                      row: 6,
                      column: 2,
                      mobilewidth: '20%',
                      tabletwidth: '48%',
                      computerwidth: '48%',
                      gridname: 'pricingtablefeatures',
                      alignment: 'center',
                    },
                  },
                },
              ],
            },
          ],
          buttoncolumns: {
            buttontexts: ['Learn More', 'Learn More', 'Learn More'],
            buttonlinks: [
              '#goobs-frontend-unlimited',
              '#goobs-frontend-unlimited',
              '#goobs-frontend-unlimited',
            ],
            columnconfig: {
              row: 7,
              column: 1,
              mobilewidth: '100%',
              margintop: { xs: 2, sm: 2, md: 2, ms: 2, ml: 2, lg: 2, xl: 2 },
              marginbottom: { xs: 1, sm: 1, md: 1, ms: 1, ml: 1, lg: 1, xl: 1 },
              marginright: { xs: 1, sm: 1, md: 1, ms: 1, ml: 1, lg: 1, xl: 1 },
              marginleft: { xs: 1, sm: 1, md: 1, ms: 1, ml: 1, lg: 1, xl: 1 },
              tabletwidth: '100%',
              computerwidth: '48%',
              gridname: 'pricingtablefeatures',
              alignment: 'center',
            },
          },
        }
      },
      './src/components/PricingTable/index.tsx': (
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
          _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              './node_modules/@mui/material/CircularProgress/CircularProgress.js'
            ),
          _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__('./node_modules/@mui/material/Paper/Paper.js'),
          _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/Info.js'
            ),
          _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/CheckCircle.js'
            ),
          _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Typography/index.tsx'
          ),
          _Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './src/components/Tooltip/index.tsx'
          ),
          _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            './src/components/Button/index.tsx'
          ),
          _Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            './src/components/Dropdown/index.tsx'
          ),
          _components_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            './src/components/Grid/index.tsx'
          ),
          _defaultconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            './src/components/PricingTable/defaultconfig.tsx'
          ),
          _styles_palette__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            './src/styles/palette.ts'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const PricingTable = props => {
            var _config_packagecolumns, _config_packagecolumns1
            const { router } = props,
              [selectedPackageIndex, setSelectedPackageIndex] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
              [selectedPackage, setSelectedPackage] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
              [isLoading, setIsLoading] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),
              config = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
                () => ({
                  ..._defaultconfig__WEBPACK_IMPORTED_MODULE_7__.A,
                  ...props,
                }),
                [props]
              )
            ;(0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              const timer = setTimeout(() => {
                setIsLoading(!1)
              }, 100)
              return () => clearTimeout(timer)
            }, []),
              (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
                var _config_packagecolumns
                ;(null === (_config_packagecolumns = config.packagecolumns) ||
                void 0 === _config_packagecolumns
                  ? void 0
                  : _config_packagecolumns.packagenames) &&
                  config.packagecolumns.packagenames.length > 0 &&
                  setSelectedPackage(config.packagecolumns.packagenames[0])
              }, [
                null === (_config_packagecolumns = config.packagecolumns) ||
                void 0 === _config_packagecolumns
                  ? void 0
                  : _config_packagecolumns.packagenames,
              ])
            const handlePackageChange = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                event => {
                  var _config_packagecolumns_packagenames,
                    _config_packagecolumns
                  const newValue = event.target.value
                  var _config_packagecolumns_packagenames_indexOf
                  const newIndex =
                    null !==
                      (_config_packagecolumns_packagenames_indexOf =
                        null ===
                          (_config_packagecolumns = config.packagecolumns) ||
                        void 0 === _config_packagecolumns ||
                        null ===
                          (_config_packagecolumns_packagenames =
                            _config_packagecolumns.packagenames) ||
                        void 0 === _config_packagecolumns_packagenames
                          ? void 0
                          : _config_packagecolumns_packagenames.indexOf(
                              newValue
                            )) &&
                    void 0 !== _config_packagecolumns_packagenames_indexOf
                      ? _config_packagecolumns_packagenames_indexOf
                      : 0
                  setSelectedPackageIndex(newIndex),
                    setSelectedPackage(newValue),
                    console.log('Package selection changed to:', newValue)
                },
                [
                  null === (_config_packagecolumns1 = config.packagecolumns) ||
                  void 0 === _config_packagecolumns1
                    ? void 0
                    : _config_packagecolumns1.packagenames,
                ]
              ),
              renderColumnConfigs = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
                var _config_features
                const headerColumnConfigs = [],
                  featureColumnConfigs = []
                var _config_monthlyprice_prices,
                  _config_annualprice_annualprices
                ;(config.tabletitle &&
                  config.tabletitle.columnconfig &&
                  headerColumnConfigs.push({
                    ...config.tabletitle.columnconfig,
                    component: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Typography__WEBPACK_IMPORTED_MODULE_2__.o,
                      {
                        text: config.tabletitle.text || '',
                        fontcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.Ql.main,
                        fontvariant: 'merrih4',
                        noWrap: !0,
                      }
                    ),
                  }),
                config.packagecolumns &&
                  config.packagecolumns.columnconfig &&
                  headerColumnConfigs.push({
                    ...config.packagecolumns.columnconfig,
                    margintop: 1,
                    marginright: 0.625,
                    component: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Dropdown__WEBPACK_IMPORTED_MODULE_5__.A,
                      {
                        label: 'Packages',
                        options: (config.packagecolumns.packagenames || []).map(
                          name => ({ value: name, label: name })
                        ),
                        defaultValue: selectedPackage,
                        backgroundcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.o_.main,
                        shrunklabelposition: 'aboveNotch',
                        outlinecolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.Ql.main,
                        fontcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.Ql.main,
                        shrunkfontcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.Ql.main,
                        onChange: handlePackageChange,
                      }
                    ),
                  }),
                config.monthlyprice && config.monthlyprice.columnconfig) &&
                  headerColumnConfigs.push({
                    ...config.monthlyprice.columnconfig,
                    component: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Typography__WEBPACK_IMPORTED_MODULE_2__.o,
                      {
                        text:
                          (null ===
                            (_config_monthlyprice_prices =
                              config.monthlyprice.prices) ||
                          void 0 === _config_monthlyprice_prices
                            ? void 0
                            : _config_monthlyprice_prices[
                                selectedPackageIndex
                              ]) || '',
                        fontcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.Ql.main,
                        fontvariant: 'merrih5',
                      }
                    ),
                  })
                config.annualprice &&
                  config.annualprice.columnconfig &&
                  headerColumnConfigs.push({
                    ...config.annualprice.columnconfig,
                    component: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Typography__WEBPACK_IMPORTED_MODULE_2__.o,
                      {
                        text:
                          (null ===
                            (_config_annualprice_annualprices =
                              config.annualprice.annualprices) ||
                          void 0 === _config_annualprice_annualprices
                            ? void 0
                            : _config_annualprice_annualprices[
                                selectedPackageIndex
                              ]) || '',
                        fontcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.Ql.main,
                        fontvariant: 'merrih5',
                      }
                    ),
                  })
                if (
                  (null === (_config_features = config.features) ||
                    void 0 === _config_features ||
                    _config_features.forEach(feature => {
                      if (
                        (feature.columnconfig &&
                          featureColumnConfigs.push({
                            ...feature.columnconfig,
                            margintop: 1,
                            paddingleft: 2,
                            component: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                              {
                                display: 'flex',
                                alignItems: 'center',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _Typography__WEBPACK_IMPORTED_MODULE_2__.o,
                                    {
                                      text: feature.title,
                                      fontcolor:
                                        _styles_palette__WEBPACK_IMPORTED_MODULE_8__
                                          .Ql.main,
                                      fontvariant: 'merrih5',
                                      noWrap: !0,
                                    }
                                  ),
                                  feature.infopopuptext &&
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                                      {
                                        ml: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        children: (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          _Tooltip__WEBPACK_IMPORTED_MODULE_3__.A,
                                          {
                                            arrow: !0,
                                            tooltipcolor:
                                              _styles_palette__WEBPACK_IMPORTED_MODULE_8__
                                                .wy.dark,
                                            tooltipplacement: 'right',
                                            title: feature.infopopuptext,
                                            offsetX: 0,
                                            offsetY: 0,
                                            children: (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_10__.A,
                                              { fontSize: 'small' }
                                            ),
                                          }
                                        ),
                                      }
                                    ),
                                ],
                              }
                            ),
                          }),
                        feature.tiedtopackage &&
                          feature.tiedtopackage.columnconfig)
                      ) {
                        var _feature_tiedtopackage_tiedtopackages
                        const tiedConfig = {
                          ...feature.tiedtopackage.columnconfig,
                          margintop: 1,
                          cellconfig: { minHeight: '40px' },
                          component: (
                            null ===
                              (_feature_tiedtopackage_tiedtopackages =
                                feature.tiedtopackage.tiedtopackages) ||
                            void 0 === _feature_tiedtopackage_tiedtopackages
                              ? void 0
                              : _feature_tiedtopackage_tiedtopackages[
                                  selectedPackageIndex
                                ]
                          )
                            ? (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_11__.A,
                                {}
                              )
                            : (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                                { sx: { width: '24px', height: '24px' } }
                              ),
                        }
                        featureColumnConfigs.push(tiedConfig)
                      }
                      feature.subfeatures.forEach(subFeature => {
                        if (
                          (subFeature.columnconfig &&
                            featureColumnConfigs.push({
                              ...subFeature.columnconfig,
                              margintop: 1,
                              paddingleft: 3,
                              component: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                                {
                                  display: 'flex',
                                  alignItems: 'center',
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _Typography__WEBPACK_IMPORTED_MODULE_2__.o,
                                      {
                                        text: subFeature.title,
                                        fontcolor:
                                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__
                                            .Ql.main,
                                        fontvariant: 'merriparagraph',
                                        noWrap: !0,
                                      }
                                    ),
                                    subFeature.infopopuptext &&
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                                        {
                                          ml: 1,
                                          display: 'flex',
                                          alignItems: 'center',
                                          children: (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            _Tooltip__WEBPACK_IMPORTED_MODULE_3__.A,
                                            {
                                              arrow: !0,
                                              tooltipcolor:
                                                _styles_palette__WEBPACK_IMPORTED_MODULE_8__
                                                  .wy.dark,
                                              tooltipplacement: 'right',
                                              title: subFeature.infopopuptext,
                                              offsetX: 0,
                                              offsetY: 0,
                                              children: (0,
                                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_10__.A,
                                                { fontSize: 'small' }
                                              ),
                                            }
                                          ),
                                        }
                                      ),
                                  ],
                                }
                              ),
                            }),
                          subFeature.tiedtopackage &&
                            subFeature.tiedtopackage.columnconfig)
                        ) {
                          var _subFeature_tiedtopackage_tiedtopackages
                          const tiedConfig = {
                            ...subFeature.tiedtopackage.columnconfig,
                            margintop: 1,
                            cellconfig: { minHeight: '40px' },
                            component: (
                              null ===
                                (_subFeature_tiedtopackage_tiedtopackages =
                                  subFeature.tiedtopackage.tiedtopackages) ||
                              void 0 ===
                                _subFeature_tiedtopackage_tiedtopackages
                                ? void 0
                                : _subFeature_tiedtopackage_tiedtopackages[
                                    selectedPackageIndex
                                  ]
                            )
                              ? (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_11__.A,
                                  {}
                                )
                              : (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                                  { sx: { width: '24px', height: '24px' } }
                                ),
                          }
                          featureColumnConfigs.push(tiedConfig)
                        }
                      })
                    }),
                  config.buttoncolumns && config.buttoncolumns.columnconfig)
                ) {
                  var _config_buttoncolumns_buttonlinks,
                    _config_buttoncolumns_buttontexts
                  const buttonLink =
                    (null ===
                      (_config_buttoncolumns_buttonlinks =
                        config.buttoncolumns.buttonlinks) ||
                    void 0 === _config_buttoncolumns_buttonlinks
                      ? void 0
                      : _config_buttoncolumns_buttonlinks[
                          selectedPackageIndex
                        ]) || '#'
                  featureColumnConfigs.push({
                    ...config.buttoncolumns.columnconfig,
                    margintop: 1,
                    component: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_4__.A,
                      {
                        variant: 'contained',
                        fontcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.ON.main,
                        backgroundcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.Ql.main,
                        href: buttonLink,
                        width: '100%',
                        onClick: () => {
                          router
                            ? router.push(buttonLink)
                            : console.warn(
                                'No router provided; skipping navigation.'
                              )
                        },
                        text:
                          (null ===
                            (_config_buttoncolumns_buttontexts =
                              config.buttoncolumns.buttontexts) ||
                          void 0 === _config_buttoncolumns_buttontexts
                            ? void 0
                            : _config_buttoncolumns_buttontexts[
                                selectedPackageIndex
                              ]) || '',
                      }
                    ),
                  })
                }
                return { headerColumnConfigs, featureColumnConfigs }
              }, [
                config,
                selectedPackageIndex,
                selectedPackage,
                router,
                handlePackageChange,
              ]),
              { headerColumnConfigs, featureColumnConfigs } =
                renderColumnConfigs()
            return isLoading
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_6__.A,
                  {
                    gridconfig: { gridwidth: '100%', alignment: 'center' },
                    columnconfig: [
                      {
                        row: 1,
                        column: 1,
                        alignment: 'center',
                        component: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                          {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '350px',
                            width: '100%',
                            overflow: 'auto',
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,
                              { size: 240, thickness: 2 }
                            ),
                          }
                        ),
                      },
                    ],
                  }
                )
              : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_13__.A,
                  {
                    elevation: 1,
                    sx: {
                      borderRadius: '6px',
                      borderTop: `12px solid ${_styles_palette__WEBPACK_IMPORTED_MODULE_8__.hu.main}`,
                      display: 'flex',
                      width: '100%',
                      flexDirection: 'column',
                      height: '100%',
                    },
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_6__.A,
                        {
                          gridconfig: config.headerGridConfig,
                          columnconfig: headerColumnConfigs,
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_6__.A,
                        {
                          gridconfig: config.featureGridConfig,
                          columnconfig: featureColumnConfigs,
                        }
                      ),
                    ],
                  }
                )
          },
          __WEBPACK_DEFAULT_EXPORT__ = PricingTable
        PricingTable.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'PricingTable',
          props: {
            headerGridConfig: {
              required: !1,
              tsType: { name: 'gridconfig' },
              description: '',
            },
            tabletitle: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  text?: string\n  columnconfig?: columnconfig\n}',
                signature: {
                  properties: [
                    { key: 'text', value: { name: 'string', required: !1 } },
                    {
                      key: 'columnconfig',
                      value: { name: 'columnconfig', required: !1 },
                    },
                  ],
                },
              },
              description: '',
            },
            packagecolumns: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  columnheaders?: string\n  packagenames?: string[]\n  columnconfig?: columnconfig\n}',
                signature: {
                  properties: [
                    {
                      key: 'columnheaders',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'packagenames',
                      value: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                        required: !1,
                      },
                    },
                    {
                      key: 'columnconfig',
                      value: { name: 'columnconfig', required: !1 },
                    },
                  ],
                },
              },
              description: '',
            },
            monthlyprice: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  prices?: string[]\n  columnconfig?: columnconfig\n}',
                signature: {
                  properties: [
                    {
                      key: 'prices',
                      value: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                        required: !1,
                      },
                    },
                    {
                      key: 'columnconfig',
                      value: { name: 'columnconfig', required: !1 },
                    },
                  ],
                },
              },
              description: '',
            },
            annualprice: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  annualprices?: string[]\n  columnconfig?: columnconfig\n}',
                signature: {
                  properties: [
                    {
                      key: 'annualprices',
                      value: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                        required: !1,
                      },
                    },
                    {
                      key: 'columnconfig',
                      value: { name: 'columnconfig', required: !1 },
                    },
                  ],
                },
              },
              description: '',
            },
            featureGridConfig: {
              required: !1,
              tsType: { name: 'gridconfig' },
              description: '',
            },
            features: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'Feature' }],
                raw: 'Feature[]',
              },
              description: '',
            },
            buttoncolumns: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  buttontexts?: string[]\n  buttonlinks?: string[]\n  columnconfig?: columnconfig\n}',
                signature: {
                  properties: [
                    {
                      key: 'buttontexts',
                      value: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                        required: !1,
                      },
                    },
                    {
                      key: 'buttonlinks',
                      value: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                        required: !1,
                      },
                    },
                    {
                      key: 'columnconfig',
                      value: { name: 'columnconfig', required: !1 },
                    },
                  ],
                },
              },
              description: '',
            },
            router: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  push(url: string): void\n}',
                signature: {
                  properties: [
                    { key: 'push', value: { name: 'void', required: !0 } },
                  ],
                },
              },
              description:
                'The router object with a `.push()` method.\nIn Next.js, this would typically come from `useRouter()` in the parent.',
            },
          },
        }
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
