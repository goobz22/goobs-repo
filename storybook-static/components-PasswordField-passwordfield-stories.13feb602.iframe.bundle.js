'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [5827],
    {
      './src/components/PasswordField/passwordfield.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            ControlledExternalState: () => ControlledExternalState,
            CustomColors: () => CustomColors,
            DisabledField: () => DisabledField,
            WithPlaceholder: () => WithPlaceholder,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/components/PasswordField/index.tsx'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/PasswordField',
            component: _index__WEBPACK_IMPORTED_MODULE_1__.A,
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Storybook metadata' } },
            },
          },
          Basic = {
            args: { label: 'Password' },
            play: async ({ canvasElement }) => {
              const canvas = (0,
                _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement),
                input = canvas.getByLabelText('Password')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input
              ).toHaveAttribute('type', 'password')
              const eyeIcon = canvas.getByRole('img', {
                name: /toggle password/i,
              })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                eyeIcon
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveAttribute('type', 'text')
            },
          },
          WithPlaceholder = {
            args: { label: 'Enter your password', placeholder: '********' },
            play: ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Enter your password')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input
              ).toHaveAttribute('placeholder', '********')
            },
          },
          CustomColors = {
            args: {
              label: 'Custom Colors',
              backgroundcolor: '#f3e5f5',
              outlinecolor: '#ab47bc',
              fontcolor: '#4a148c',
            },
            play: async ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Custom Colors')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                input,
                'mySecret123'
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('mySecret123')
            },
          },
          DisabledField = {
            args: { label: 'Disabled Password', disabled: !0 },
            play: ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Disabled Password')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input
              ).toBeDisabled()
            },
          },
          ControlledExternalState = {
            args: {
              label: 'Controlled Password',
              onChange: e => {
                console.log('Password changed =>', e.target.value)
              },
            },
            play: async ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Controlled Password')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                input,
                'External123'
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('External123')
            },
          },
          __namedExportsOrder = [
            'Basic',
            'WithPlaceholder',
            'CustomColors',
            'DisabledField',
            'ControlledExternalState',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: 'Password'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Grab the input by label\n    const input = canvas.getByLabelText('Password');\n\n    // Initially, the type should be \"password\"\n    expect(input).toHaveAttribute('type', 'password');\n\n    // Click the eye icon to toggle visibility\n    const eyeIcon = canvas.getByRole('img', {\n      name: /toggle password/i\n    });\n    await userEvent.click(eyeIcon);\n    // Now the type should be \"text\"\n    expect(input).toHaveAttribute('type', 'text');\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story:
                '1) Basic usage\r\n   - Uses `await` with `userEvent.click(...)`, so we keep `async`.',
              ...Basic.parameters?.docs?.description,
            },
          },
        }),
          (WithPlaceholder.parameters = {
            ...WithPlaceholder.parameters,
            docs: {
              ...WithPlaceholder.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Enter your password',\n    placeholder: '********'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Enter your password');\n    // Confirm the placeholder is \"********\"\n    expect(input).toHaveAttribute('placeholder', '********');\n  }\n}",
                ...WithPlaceholder.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) With Placeholder\r\n   - No await calls => remove `async`.',
                ...WithPlaceholder.parameters?.docs?.description,
              },
            },
          }),
          (CustomColors.parameters = {
            ...CustomColors.parameters,
            docs: {
              ...CustomColors.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Custom Colors',\n    backgroundcolor: '#f3e5f5',\n    // a light purple\n    outlinecolor: '#ab47bc',\n    // a deeper purple\n    fontcolor: '#4a148c' // an even darker purple\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Custom Colors');\n    // Type in some password\n    await userEvent.type(input, 'mySecret123');\n    expect(input).toHaveValue('mySecret123');\n  }\n}",
                ...CustomColors.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Custom Colors\r\n   - Uses `await` with `userEvent.type(...)`, so keep `async`.',
                ...CustomColors.parameters?.docs?.description,
              },
            },
          }),
          (DisabledField.parameters = {
            ...DisabledField.parameters,
            docs: {
              ...DisabledField.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Disabled Password',\n    disabled: true\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Disabled Password');\n    // Ensure it's disabled\n    expect(input).toBeDisabled();\n  }\n}",
                ...DisabledField.parameters?.docs?.source,
              },
              description: {
                story: '4) Disabled\r\n   - No await calls => remove `async`.',
                ...DisabledField.parameters?.docs?.description,
              },
            },
          }),
          (ControlledExternalState.parameters = {
            ...ControlledExternalState.parameters,
            docs: {
              ...ControlledExternalState.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Controlled Password',\n    onChange: e => {\n      console.log('Password changed =>', e.target.value);\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const input = canvas.getByLabelText('Controlled Password');\n\n    // Type a password\n    await userEvent.type(input, 'External123');\n    expect(input).toHaveValue('External123');\n  }\n}",
                ...ControlledExternalState.parameters?.docs?.source,
              },
              description: {
                story:
                  '5) Controlled by external state (example)\r\n   - Uses `await` with `userEvent.type(...)`, so keep `async`.',
                ...ControlledExternalState.parameters?.docs?.description,
              },
            },
          })
      },
      './src/components/Icons/ShowHideEye.tsx': (
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
          _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_2__ =
            (__webpack_require__(
              './node_modules/next/dist/compiled/react/index.js'
            ),
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/Visibility.js'
            )),
          _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/VisibilityOff.js'
            )
        const ShowHideEyeIcon = ({ visible = !1 }) => {
            const iconStyle = { color: 'black' }
            return visible
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_2__.A,
                  { style: iconStyle }
                )
              : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_3__.A,
                  { style: iconStyle }
                )
          },
          __WEBPACK_DEFAULT_EXPORT__ = ShowHideEyeIcon
        ShowHideEyeIcon.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ShowHideEyeIcon',
          props: {
            visible: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
          },
        }
      },
      './src/components/PasswordField/index.tsx': (
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
          _barrel_optimize_names_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/TextField/TextField.js'
            ),
          _barrel_optimize_names_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/material/InputAdornment/InputAdornment.js'
            ),
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/material/styles/styled.js'
            ),
          _Icons_ShowHideEye__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Icons/ShowHideEye.tsx'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const StyledTextField = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            _barrel_optimize_names_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.A
          )(({ theme, backgroundcolor, outlinecolor, fontcolor }) => ({
            '& .MuiOutlinedInput-root': {
              backgroundColor:
                backgroundcolor || theme.palette.background.paper,
              '& fieldset': {
                borderColor: outlinecolor || theme.palette.primary.main,
              },
              '&:hover fieldset': {
                borderColor: outlinecolor || theme.palette.primary.main,
              },
              '&.Mui-focused fieldset': {
                borderColor: outlinecolor || theme.palette.primary.main,
              },
            },
            '& .MuiInputLabel-root': {
              color: fontcolor || theme.palette.text.primary,
              '&.Mui-focused': {
                color: fontcolor || theme.palette.primary.main,
              },
            },
            '& .MuiInputBase-input': {
              color: fontcolor || theme.palette.text.primary,
            },
          })),
          EndAdornment = ({
            componentvariant,
            passwordVisible,
            togglePasswordVisibility,
          }) =>
            'password' === componentvariant
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _barrel_optimize_names_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,
                  {
                    position: 'end',
                    onClick: togglePasswordVisibility,
                    style: { cursor: 'pointer' },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Icons_ShowHideEye__WEBPACK_IMPORTED_MODULE_2__.A,
                      { visible: passwordVisible }
                    ),
                  }
                )
              : null,
          PasswordField = ({
            backgroundcolor,
            outlinecolor,
            fontcolor,
            label = 'Password',
            ...rest
          }) => {
            const [passwordVisible, setPasswordVisible] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
              togglePasswordVisibility = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
                setPasswordVisible(
                  prev => (
                    console.log('togglePasswordVisibility', {
                      passwordVisible: !prev,
                    }),
                    !prev
                  )
                )
              }, [])
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              StyledTextField,
              {
                type: passwordVisible ? 'text' : 'password',
                label,
                backgroundcolor,
                outlinecolor,
                fontcolor,
                fullWidth: !0,
                InputProps: {
                  endAdornment: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    EndAdornment,
                    {
                      componentvariant: 'password',
                      passwordVisible,
                      togglePasswordVisibility,
                    }
                  ),
                },
                ...rest,
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = PasswordField
        PasswordField.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'PasswordField',
          props: {
            backgroundcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            outlinecolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            fontcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            label: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'Password'", computed: !1 },
            },
          },
          composes: ['Omit'],
        }
      },
    },
  ]
)
