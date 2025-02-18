'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [3010],
    {
      './src/components/ConfirmationCodeInput/codeinput.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            ArrowAndBackspace: () => ArrowAndBackspace,
            Basic: () => Basic,
            ManualTyping: () => ManualTyping,
            PrefilledValue: () => PrefilledValue,
            ValidCode: () => ValidCode,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@storybook/test/dist/index.mjs'
        )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/ConfirmationCodeInputs',
            component: __webpack_require__(
              './src/components/ConfirmationCodeInput/index.tsx'
            ).A,
            parameters: {
              a11y: { disable: !1 },
              docs: {
                description: { component: 'Configure Storybook metadata' },
              },
            },
          },
          Basic = {
            args: {
              codeLength: 6,
              isValid: !1,
              'aria-label': 'Basic Confirmation Code',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              for (let i = 1; i <= 6; i++)
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByLabelText(`Code Digit ${i}`)
                ).toBeInTheDocument()
            },
          },
          PrefilledValue = {
            name: 'With Prefilled Value',
            args: {
              codeLength: 4,
              isValid: !1,
              value: '1234',
              'aria-label': 'Prefilled Confirmation Code',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              for (let i = 1; i <= 4; i++) {
                const input = canvas.getByLabelText(`Code Digit ${i}`, {
                  selector: 'input',
                })
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue(String(i))
              }
            },
          },
          ValidCode = {
            args: {
              codeLength: 6,
              value: '123456',
              isValid: !0,
              'aria-label': 'Valid Confirmation Code',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              for (let i = 1; i <= 6; i++) {
                const input = canvas.getByLabelText(`Code Digit ${i}`, {
                  selector: 'input',
                })
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue(String(i))
              }
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByLabelText('Code is valid')
              ).toBeInTheDocument()
            },
          },
          ManualTyping = {
            args: {
              codeLength: 4,
              isValid: !1,
              'aria-label': 'Manual Code Entry',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              for (let i = 1; i <= 4; i++) {
                const input = canvas.getByLabelText(`Code Digit ${i}`, {
                  selector: 'input',
                })
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                  input,
                  String(9 - i)
                )
              }
              const expectedDigits = ['9', '8', '7', '6']
              for (let i = 1; i <= 4; i++) {
                const input = canvas.getByLabelText(`Code Digit ${i}`, {
                  selector: 'input',
                })
                ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue(expectedDigits[i - 1])
              }
            },
          },
          ArrowAndBackspace = {
            args: {
              codeLength: 4,
              isValid: !1,
              value: '',
              'aria-label': 'Arrow Navigation Code',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
                _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement),
                input1 = canvas.getByLabelText('Code Digit 1', {
                  selector: 'input',
                })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                input1
              ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard(
                  '1'
                )
              const input2 = canvas.getByLabelText('Code Digit 2', {
                selector: 'input',
              })
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input2
              ).toHaveFocus(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard(
                  '2'
                ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard(
                  '{arrowleft}'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input1
                ).toHaveFocus(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard(
                  '{backspace}'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input1
                ).toHaveValue(''),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input1
                ).toHaveFocus(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard(
                  '9'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input1
                ).toHaveValue('9'),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard(
                  '{arrowright}'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input2
                ).toHaveFocus(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input2
                ).toHaveValue('2')
            },
          },
          __namedExportsOrder = [
            'Basic',
            'PrefilledValue',
            'ValidCode',
            'ManualTyping',
            'ArrowAndBackspace',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    codeLength: 6,\n    isValid: false,\n    'aria-label': 'Basic Confirmation Code'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm that each input is present\n    for (let i = 1; i <= 6; i++) {\n      expect(canvas.getByLabelText(`Code Digit ${i}`)).toBeInTheDocument();\n    }\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story:
                '1) Basic Usage (no initial value)\r\n   - No userEvent => remove async',
              ...Basic.parameters?.docs?.description,
            },
          },
        }),
          (PrefilledValue.parameters = {
            ...PrefilledValue.parameters,
            docs: {
              ...PrefilledValue.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'With Prefilled Value',\n  args: {\n    codeLength: 4,\n    isValid: false,\n    value: '1234',\n    'aria-label': 'Prefilled Confirmation Code'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // The inputs should be \"1\", \"2\", \"3\", and \"4\"\n    for (let i = 1; i <= 4; i++) {\n      const input = canvas.getByLabelText(`Code Digit ${i}`, {\n        selector: 'input'\n      });\n      expect(input).toHaveValue(String(i));\n    }\n  }\n}",
                ...PrefilledValue.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) Prefilled Value\r\n   - No userEvent => remove async',
                ...PrefilledValue.parameters?.docs?.description,
              },
            },
          }),
          (ValidCode.parameters = {
            ...ValidCode.parameters,
            docs: {
              ...ValidCode.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    codeLength: 6,\n    value: '123456',\n    isValid: true,\n    // This should make the circle green\n    'aria-label': 'Valid Confirmation Code'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Check that each digit is in place\n    for (let i = 1; i <= 6; i++) {\n      const input = canvas.getByLabelText(`Code Digit ${i}`, {\n        selector: 'input'\n      });\n      expect(input).toHaveValue(String(i));\n    }\n\n    // Confirm the circle is labeled \"Code is valid\"\n    expect(canvas.getByLabelText('Code is valid')).toBeInTheDocument();\n  }\n}",
                ...ValidCode.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Code is valid (green indicator)\r\n   - No userEvent => remove async',
                ...ValidCode.parameters?.docs?.description,
              },
            },
          }),
          (ManualTyping.parameters = {
            ...ManualTyping.parameters,
            docs: {
              ...ManualTyping.parameters?.docs,
              source: {
                originalSource:
                  '{\n  args: {\n    codeLength: 4,\n    isValid: false,\n    \'aria-label\': \'Manual Code Entry\'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Type "9876" across the 4 inputs\n    for (let i = 1; i <= 4; i++) {\n      const input = canvas.getByLabelText(`Code Digit ${i}`, {\n        selector: \'input\'\n      });\n      await userEvent.type(input, String(9 - i)); // "9", "8", "7", "6"\n    }\n\n    // Verify each input is now "9", "8", "7", "6"\n    const expectedDigits = [\'9\', \'8\', \'7\', \'6\'];\n    for (let i = 1; i <= 4; i++) {\n      const input = canvas.getByLabelText(`Code Digit ${i}`, {\n        selector: \'input\'\n      });\n      expect(input).toHaveValue(expectedDigits[i - 1]);\n    }\n  }\n}',
                ...ManualTyping.parameters?.docs?.source,
              },
              description: {
                story: '4) Manual Typing\r\n   - Uses await => keep async',
                ...ManualTyping.parameters?.docs?.description,
              },
            },
          }),
          (ArrowAndBackspace.parameters = {
            ...ArrowAndBackspace.parameters,
            docs: {
              ...ArrowAndBackspace.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    codeLength: 4,\n    isValid: false,\n    value: '',\n    // start empty\n    'aria-label': 'Arrow Navigation Code'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Start with the first digit\n    const input1 = canvas.getByLabelText(`Code Digit 1`, {\n      selector: 'input'\n    });\n    await userEvent.click(input1);\n    // Type \"1\"\n    await userEvent.keyboard('1');\n    // Should auto-focus the second digit\n    const input2 = canvas.getByLabelText(`Code Digit 2`, {\n      selector: 'input'\n    });\n    expect(input2).toHaveFocus();\n    // Type \"2\"\n    await userEvent.keyboard('2');\n\n    // Arrow left to go back to first digit\n    await userEvent.keyboard('{arrowleft}');\n    expect(input1).toHaveFocus();\n\n    // Press backspace to clear first digit\n    await userEvent.keyboard('{backspace}');\n    expect(input1).toHaveValue('');\n    // Should remain on first input\n    expect(input1).toHaveFocus();\n\n    // Type \"9\"\n    await userEvent.keyboard('9');\n    expect(input1).toHaveValue('9');\n\n    // Move to second input, confirm \"2\" is still there\n    await userEvent.keyboard('{arrowright}');\n    expect(input2).toHaveFocus();\n    expect(input2).toHaveValue('2');\n  }\n}",
                ...ArrowAndBackspace.parameters?.docs?.source,
              },
              description: {
                story:
                  '5) Arrow/Backspace Navigation\r\n   - Uses await => keep async',
                ...ArrowAndBackspace.parameters?.docs?.description,
              },
            },
          })
      },
      './src/components/ConfirmationCodeInput/index.tsx': (
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
          _barrel_optimize_names_Box_Input_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _barrel_optimize_names_Box_Input_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__('./node_modules/@mui/material/Input/Input.js'),
          _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/styles/palette.ts'
          )
        const ConfirmationCodeInputs = ({
            codeLength = 6,
            isValid,
            onChange,
            value,
            'aria-label': ariaLabel,
            'aria-required': ariaRequired,
            'aria-invalid': ariaInvalid,
            ...props
          }) => {
            const { handleCodeChange, handleKeyDown } = (({
                codeLength,
                onChange,
              }) => {
                const [code, setCode] = (0,
                react__WEBPACK_IMPORTED_MODULE_1__.useState)(
                  Object.fromEntries(
                    Array.from({ length: codeLength }, (_, i) => [
                      `code${i + 1}`,
                      '',
                    ])
                  )
                )
                return {
                  handleCodeChange: (0,
                  react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                    (event, index) => {
                      const value = event.target.value.replace(/\D/g, '')
                      value.length <= 1 &&
                        setCode(prevCode => {
                          const newCode = {
                              ...prevCode,
                              [`code${index + 1}`]: value,
                            },
                            combinedValue = Object.values(newCode).join('')
                          return (
                            null == onChange || onChange(combinedValue), newCode
                          )
                        })
                    },
                    [onChange]
                  ),
                  handleKeyDown: (0,
                  react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                    (event, index) => {
                      if (
                        [
                          'Backspace',
                          'ArrowLeft',
                          'ArrowRight',
                          'Tab',
                          'Delete',
                          'Home',
                          'End',
                        ].includes(event.key) ||
                        /^\d$/.test(event.key)
                      ) {
                        if (
                          'Backspace' === event.key &&
                          !code[`code${index + 1}`] &&
                          index > 0
                        ) {
                          setCode(prevCode => {
                            const newCode = {
                                ...prevCode,
                                [`code${index}`]: '',
                              },
                              combinedValue = Object.values(newCode).join('')
                            return (
                              null == onChange || onChange(combinedValue),
                              newCode
                            )
                          })
                          const prevInput = document.querySelector(
                            `input[name=code${index}]`
                          )
                          prevInput && prevInput.focus()
                        } else if ('ArrowLeft' === event.key && index > 0) {
                          const prevInput = document.querySelector(
                            `input[name=code${index}]`
                          )
                          prevInput && prevInput.focus()
                        } else if (
                          'ArrowRight' === event.key &&
                          index < codeLength - 1
                        ) {
                          const nextInput = document.querySelector(
                            `input[name=code${index + 2}]`
                          )
                          nextInput && nextInput.focus()
                        }
                      } else event.preventDefault()
                    },
                    [code, codeLength, onChange]
                  ),
                }
              })({ codeLength, onChange }),
              digits = value
                ? value.split('')
                : Array.from({ length: codeLength }, () => '')
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _barrel_optimize_names_Box_Input_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
              {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                role: 'group',
                'aria-label': ariaLabel || 'Confirmation Code',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_Box_Input_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
                    {
                      display: 'flex',
                      gap: 1,
                      children: Array.from({ length: codeLength }, (_, index) =>
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _barrel_optimize_names_Box_Input_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                          {
                            name: `code${index + 1}`,
                            value: digits[index] || '',
                            inputProps: {
                              maxLength: 1,
                              pattern: '[0-9]*',
                              inputMode: 'numeric',
                              'aria-label': `Code Digit ${index + 1}`,
                              'aria-required': ariaRequired,
                              'aria-invalid': ariaInvalid,
                            },
                            sx: {
                              border: '1px solid',
                              borderColor: 'black',
                              borderRadius: 1,
                              width: 50,
                              height: 50,
                              input: { textAlign: 'center', color: 'black' },
                            },
                            onChange: event =>
                              ((event, index) => {
                                const inputValue = event.target.value.replace(
                                  /\D/g,
                                  ''
                                )
                                if (
                                  inputValue.length <= 1 &&
                                  (handleCodeChange(event, index), inputValue)
                                ) {
                                  const nextInput = document.querySelector(
                                    `input[name=code${index + 2}]`
                                  )
                                  nextInput && nextInput.focus()
                                }
                              })(event, index),
                            onKeyDown: event =>
                              ((event, index) => {
                                handleKeyDown(event, index)
                              })(event, index),
                            ...props,
                          },
                          index
                        )
                      ),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_Box_Input_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
                    {
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      bgcolor: isValid
                        ? _styles_palette__WEBPACK_IMPORTED_MODULE_2__.wL.main
                        : _styles_palette__WEBPACK_IMPORTED_MODULE_2__.wv.main,
                      ml: 2,
                      role: 'status',
                      'aria-label': isValid
                        ? 'Code is valid'
                        : 'Code is invalid',
                    }
                  ),
                ],
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = ConfirmationCodeInputs
        ConfirmationCodeInputs.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ConfirmationCodeInputs',
          props: {
            identifier: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            columnconfig: {
              required: !1,
              tsType: { name: 'columnconfig' },
              description: '',
            },
            isValid: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            codeLength: {
              required: !1,
              tsType: { name: 'number' },
              description: '',
              defaultValue: { value: '6', computed: !1 },
            },
            'aria-label': {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            'aria-required': {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            'aria-invalid': {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            onChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(value: string) => void',
                signature: {
                  arguments: [{ type: { name: 'string' }, name: 'value' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            value: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }
      },
      './src/styles/palette.ts': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          B3: () => marine,
          ON: () => white,
          Oh: () => grey,
          Om: () => gunpowder,
          Ql: () => black,
          Yb: () => semiTransparentWhite,
          hu: () => aqua,
          o_: () => semiTransparentBlack,
          wL: () => green,
          wv: () => red,
          wy: () => stainlessSteel,
          yR: () => woad,
          zx: () => ocean,
        })
        const aqua = { main: '#9CE4F8', light: '#C5F0FB', dark: '#6AB6D1' },
          woad = { main: '#63B3DD', light: '#8ECAE6', dark: '#3E7DA3' },
          marine = { main: '#013E89', light: '#3367B2', dark: '#002756' },
          stainlessSteel = {
            main: '#150D22',
            light: '#423753',
            dark: '#08060E',
          },
          ocean = { main: '#0E3065', light: '#355088', dark: '#081E40' },
          gunpowder = { main: '#210352', light: '#4D337D', dark: '#11022A' },
          black = { main: '#000000', light: '#333333', dark: '#000000' },
          white = { main: '#ffffff', light: '#ffffff', dark: '#eeeeee' },
          semiTransparentWhite = {
            main: 'rgba(255, 255, 255, 0.09)',
            light: 'rgba(255, 255, 255, 0.15)',
            dark: 'rgba(255, 255, 255, 0.05)',
          },
          semiTransparentBlack = {
            main: 'rgba(0, 0, 0, 0.09)',
            light: 'rgba(0, 0, 0, 0.15)',
            dark: 'rgba(0, 0, 0, 0.05)',
          },
          red = { main: '#FF0000', light: '#FF4C4C', dark: '#B30000' },
          green = { main: '#00FF00', light: '#4CFF4C', dark: '#00B300' },
          grey = { main: '#E8E8E8', light: '#F5F5F5', dark: '#BDBDBD' }
      },
    },
  ]
)
