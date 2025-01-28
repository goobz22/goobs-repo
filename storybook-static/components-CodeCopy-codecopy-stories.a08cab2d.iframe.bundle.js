'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [3341],
    {
      './src/components/CodeCopy/codecopy.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            BasicCode: () => BasicCode,
            JSONExample: () => JSONExample,
            LargeCodeBlock: () => LargeCodeBlock,
            TypeScriptExample: () => TypeScriptExample,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@storybook/test/dist/index.mjs'
        )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/CodeCopy',
            component: __webpack_require__(
              './src/components/CodeCopy/index.tsx'
            ).A,
            argTypes: {
              language: {
                control: { type: 'select' },
                options: ['javascript', 'typescript', 'css', 'html', 'json'],
              },
            },
            parameters: {
              docs: {
                description: {
                  component:
                    "Rename the default export to avoid 'meta' naming conflicts",
                },
              },
            },
          },
          BasicCode = {
            args: {
              code: 'function greet() {\n  console.log("Hello, world!");\n}',
              language: 'javascript',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText(/function greet/)
              ).toBeInTheDocument()
              const copyButton = canvas.getByRole('button', {
                name: /copy code/i,
              })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                copyButton
              )
            },
          },
          TypeScriptExample = {
            args: {
              code: 'interface Person {\n  name: string;\n  age: number;\n}\nconst user: Person = { name: "Alice", age: 25 };',
              language: 'typescript',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText(/interface Person/)
              ).toBeInTheDocument()
            },
          },
          JSONExample = {
            args: {
              code: '{\n  "name": "example",\n  "version": "1.0.0",\n  "dependencies": {}\n}',
              language: 'json',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText(/"name": "example"/)
              ).toBeInTheDocument()
            },
          },
          LargeCodeBlock = {
            args: {
              code: '// A large sample of code\nfunction example() {\n  // This is a multi-line sample\n  const items = [1, 2, 3, 4, 5];\n  items.forEach(item => {\n    console.log(item);\n  });\n}\n// Some more lines\nclass Test {\n  constructor() {\n    this.value = 42;\n  }\n  getValue() {\n    return this.value;\n  }\n}',
              language: 'javascript',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText(/A large sample of code/)
              ).toBeInTheDocument()
            },
          },
          __namedExportsOrder = [
            'BasicCode',
            'TypeScriptExample',
            'JSONExample',
            'LargeCodeBlock',
          ]
        ;(BasicCode.parameters = {
          ...BasicCode.parameters,
          docs: {
            ...BasicCode.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    code: `function greet() {\n  console.log("Hello, world!");\n}`,\n    language: \'javascript\'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Check that the code text appears\n    expect(canvas.getByText(/function greet/)).toBeInTheDocument();\n\n    // Try copying\n    const copyButton = canvas.getByRole(\'button\', {\n      name: /copy code/i\n    });\n    await userEvent.click(copyButton);\n    // (Optional) Confirm "Code copied" message or other side effects\n  }\n}',
              ...BasicCode.parameters?.docs?.source,
            },
            description: {
              story:
                '1) Basic example with JavaScript code\r\n   - We do `await userEvent.click()`, so keep `async`.',
              ...BasicCode.parameters?.docs?.description,
            },
          },
        }),
          (TypeScriptExample.parameters = {
            ...TypeScriptExample.parameters,
            docs: {
              ...TypeScriptExample.parameters?.docs,
              source: {
                originalSource:
                  '{\n  args: {\n    code: `interface Person {\n  name: string;\n  age: number;\n}\nconst user: Person = { name: "Alice", age: 25 };`,\n    language: \'typescript\'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Check that the interface text appears\n    expect(canvas.getByText(/interface Person/)).toBeInTheDocument();\n  }\n}',
                ...TypeScriptExample.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) TypeScript code sample\r\n   - No `await`, so remove `async`.',
                ...TypeScriptExample.parameters?.docs?.description,
              },
            },
          }),
          (JSONExample.parameters = {
            ...JSONExample.parameters,
            docs: {
              ...JSONExample.parameters?.docs,
              source: {
                originalSource:
                  '{\n  args: {\n    code: `{\n  "name": "example",\n  "version": "1.0.0",\n  "dependencies": {}\n}`,\n    language: \'json\'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm we see the JSON content\n    expect(canvas.getByText(/"name": "example"/)).toBeInTheDocument();\n  }\n}',
                ...JSONExample.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) JSON code sample\r\n   - No `await`, so remove `async`.',
                ...JSONExample.parameters?.docs?.description,
              },
            },
          }),
          (LargeCodeBlock.parameters = {
            ...LargeCodeBlock.parameters,
            docs: {
              ...LargeCodeBlock.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    code: `// A large sample of code\nfunction example() {\n  // This is a multi-line sample\n  const items = [1, 2, 3, 4, 5];\n  items.forEach(item => {\n    console.log(item);\n  });\n}\n// Some more lines\nclass Test {\n  constructor() {\n    this.value = 42;\n  }\n  getValue() {\n    return this.value;\n  }\n}`,\n    language: 'javascript'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Just check for a piece of text\n    expect(canvas.getByText(/A large sample of code/)).toBeInTheDocument();\n  }\n}",
                ...LargeCodeBlock.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) Large Code Block\r\n   - No `await`, so remove `async`.',
                ...LargeCodeBlock.parameters?.docs?.description,
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
      './src/components/CodeCopy/index.tsx': (
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
          _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Button/index.tsx'
          ),
          _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/ContentCopy.js'
            ),
          highlight_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './node_modules/highlight.js/es/index.js'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const CodeCopy = ({ code, language }) => {
            const codeRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null)
            ;(0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              codeRef.current &&
                highlight_js__WEBPACK_IMPORTED_MODULE_3__.A.highlightElement(
                  codeRef.current
                )
            }, [code, language])
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
              {
                sx: {
                  position: 'relative',
                  borderRadius: 1,
                  backgroundColor: 'black',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                },
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                    {
                      sx: {
                        height: '40px',
                        width: '100%',
                        backgroundColor: 'grey.300',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        paddingRight: 2,
                        borderTopLeftRadius: 'inherit',
                        borderTopRightRadius: 'inherit',
                      },
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                        {
                          sx: { marginLeft: 'auto' },
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _components_Button__WEBPACK_IMPORTED_MODULE_2__.A,
                            {
                              text: 'Copy Code',
                              variant: 'text',
                              icon: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_5__.A,
                                {}
                              ),
                              iconlocation: 'left',
                              fontcolor: 'black',
                              iconcolor: 'black',
                              onClick: () => {
                                const codeElement = codeRef.current
                                if (codeElement) {
                                  const textArea =
                                    document.createElement('textarea')
                                  ;(textArea.value = codeElement.innerText),
                                    document.body.appendChild(textArea),
                                    textArea.select(),
                                    document.execCommand('copy'),
                                    textArea.remove(),
                                    console.log('Code copied to clipboard')
                                }
                              },
                            }
                          ),
                        }
                      ),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                    {
                      sx: {
                        backgroundColor: 'black',
                        color: 'white',
                        flexGrow: 1,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      },
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'pre',
                        {
                          style: {
                            backgroundColor: 'black',
                            color: 'white',
                            margin: 0,
                            flexGrow: 1,
                            paddingTop: 0,
                            paddingBottom: 16,
                          },
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            'code',
                            {
                              ref: codeRef,
                              className: `language-${language}`,
                              children: code,
                            }
                          ),
                        }
                      ),
                    }
                  ),
                ],
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = CodeCopy
        CodeCopy.__docgenInfo = {
          description:
            'CodeCopy component renders a code block with syntax highlighting and a copy button.\nIt uses highlight.js for syntax highlighting and provides a mechanism to copy the code to clipboard.',
          methods: [],
          displayName: 'CodeCopy',
          props: {
            code: {
              required: !0,
              tsType: { name: 'string' },
              description: 'The code to be displayed and copied',
            },
            language: {
              required: !0,
              tsType: { name: 'string' },
              description:
                'The programming language of the code (for syntax highlighting)',
            },
          },
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
