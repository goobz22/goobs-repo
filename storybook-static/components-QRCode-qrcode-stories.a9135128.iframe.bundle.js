;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [3909],
    {
      './src/components/QRCode/qrcode.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict'
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            CustomStyles: () => CustomStyles,
            LargeSize: () => LargeSize,
            WithSecretCallback: () => WithSecretCallback,
            WithTitle: () => WithTitle,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/components/QRCode/index.tsx'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/QRCode',
            component: _index__WEBPACK_IMPORTED_MODULE_1__.A,
            parameters: {
              a11y: { disable: !1 },
              docs: {
                description: {
                  component:
                    'Define Storybook metadata for the QRCodeComponent.',
                },
              },
            },
          },
          Basic = {
            name: 'Basic Usage',
            args: { username: 'john.doe', appName: 'MyApplication' },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText(/Secret:/i)
              ).toBeInTheDocument()
            },
          },
          WithTitle = {
            args: {
              username: 'jane.doe',
              appName: 'AwesomeApp',
              title: 'Scan This Code',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText(/scan this code/i)
              ).toBeInTheDocument()
            },
          },
          LargeSize = {
            args: {
              username: 'big.qr',
              appName: 'LargeApp',
              size: 400,
              title: 'Large QR Example',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Large QR Example')
              ).toBeInTheDocument()
            },
          },
          WithSecretCallback = {
            args: {
              username: 'callback.user',
              appName: 'CallbackApp',
              onSecretGenerated: secret => {
                console.log('[QRCode] Secret generated =>', secret)
              },
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText(/Secret:/)
              ).toBeInTheDocument()
            },
          },
          CustomStyles = {
            args: {
              username: 'styled.user',
              appName: 'StyledApp',
              title: 'Custom Styled QR',
              size: 300,
              sx: { backgroundColor: '#f0f4c3', borderRadius: 2, p: 4 },
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Custom Styled QR')
              ).toBeInTheDocument()
            },
          },
          __namedExportsOrder = [
            'Basic',
            'WithTitle',
            'LargeSize',
            'WithSecretCallback',
            'CustomStyles',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  name: 'Basic Usage',\n  args: {\n    username: 'john.doe',\n    appName: 'MyApplication'\n  } as QRCodeProps,\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Check for the \"Secret:\" text in the component\n    expect(canvas.getByText(/Secret:/i)).toBeInTheDocument();\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story:
                '1) Basic usage\r\n   No user interactions => remove `async`.',
              ...Basic.parameters?.docs?.description,
            },
          },
        }),
          (WithTitle.parameters = {
            ...WithTitle.parameters,
            docs: {
              ...WithTitle.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    username: 'jane.doe',\n    appName: 'AwesomeApp',\n    title: 'Scan This Code'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm we see our title text\n    expect(canvas.getByText(/scan this code/i)).toBeInTheDocument();\n  }\n}",
                ...WithTitle.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) With Custom Title\r\n   No user interactions => remove `async`.',
                ...WithTitle.parameters?.docs?.description,
              },
            },
          }),
          (LargeSize.parameters = {
            ...LargeSize.parameters,
            docs: {
              ...LargeSize.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    username: 'big.qr',\n    appName: 'LargeApp',\n    size: 400,\n    title: 'Large QR Example'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // We won't measure pixel size, but we confirm the text\n    expect(canvas.getByText('Large QR Example')).toBeInTheDocument();\n  }\n}",
                ...LargeSize.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Larger Size\r\n   No user interactions => remove `async`.',
                ...LargeSize.parameters?.docs?.description,
              },
            },
          }),
          (WithSecretCallback.parameters = {
            ...WithSecretCallback.parameters,
            docs: {
              ...WithSecretCallback.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    username: 'callback.user',\n    appName: 'CallbackApp',\n    onSecretGenerated: secret => {\n      // This just logs to the console, but you could do something more\n      console.log('[QRCode] Secret generated =>', secret);\n    }\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Secret should appear\n    expect(canvas.getByText(/Secret:/)).toBeInTheDocument();\n    // There's no direct assertion for the console log, but we ensure no crash\n  }\n}",
                ...WithSecretCallback.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) On Secret Generated Callback\r\n   No user interactions => remove `async`.',
                ...WithSecretCallback.parameters?.docs?.description,
              },
            },
          }),
          (CustomStyles.parameters = {
            ...CustomStyles.parameters,
            docs: {
              ...CustomStyles.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    username: 'styled.user',\n    appName: 'StyledApp',\n    title: 'Custom Styled QR',\n    size: 300,\n    sx: {\n      backgroundColor: '#f0f4c3',\n      borderRadius: 2,\n      p: 4\n    }\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm the title is present\n    expect(canvas.getByText('Custom Styled QR')).toBeInTheDocument();\n  }\n}",
                ...CustomStyles.parameters?.docs?.source,
              },
              description: {
                story:
                  '5) Custom Styles\r\n   No user interactions => remove `async`.',
                ...CustomStyles.parameters?.docs?.description,
              },
            },
          })
      },
      './src/components/QRCode/index.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict'
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
          react_qr_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './node_modules/react-qr-code/lib/index.js'
          ),
          _barrel_optimize_names_Box_CircularProgress_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _barrel_optimize_names_Box_CircularProgress_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/material/Typography/Typography.js'
            ),
          _barrel_optimize_names_Box_CircularProgress_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__('./node_modules/@mui/material/Paper/Paper.js'),
          _barrel_optimize_names_Box_CircularProgress_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/material/CircularProgress/CircularProgress.js'
            ),
          otplib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './node_modules/otplib/index.js'
          )
        const QRCodeComponent = react__WEBPACK_IMPORTED_MODULE_1__.memo(
          ({ username, appName, size = 256, title, sx, onSecretGenerated }) => {
            const { secret, otpAuth } = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
                const generatedSecret =
                    otplib__WEBPACK_IMPORTED_MODULE_3__.authenticator.generateSecret(),
                  otpAuthUrl =
                    otplib__WEBPACK_IMPORTED_MODULE_3__.authenticator.keyuri(
                      encodeURIComponent(username),
                      encodeURIComponent(appName),
                      generatedSecret
                    )
                return (
                  onSecretGenerated && onSecretGenerated(generatedSecret),
                  { secret: generatedSecret, otpAuth: otpAuthUrl }
                )
              }, [username, appName, onSecretGenerated]),
              responsiveSize = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
                () => Math.min(size, window.innerWidth - 32),
                [size]
              )
            return otpAuth
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _barrel_optimize_names_Box_CircularProgress_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,
                  {
                    elevation: 3,
                    sx: {
                      ...sx,
                      p: 3,
                      display: 'inline-block',
                      maxWidth: '100%',
                      boxSizing: 'border-box',
                    },
                    children: [
                      title &&
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _barrel_optimize_names_Box_CircularProgress_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,
                          {
                            variant: 'h6',
                            gutterBottom: !0,
                            align: 'center',
                            children: title,
                          }
                        ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _barrel_optimize_names_Box_CircularProgress_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                        {
                          sx: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: responsiveSize,
                            height: responsiveSize,
                            margin: 'auto',
                          },
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            react__WEBPACK_IMPORTED_MODULE_1__.Suspense,
                            {
                              fallback: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _barrel_optimize_names_Box_CircularProgress_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,
                                {
                                  size: responsiveSize / 4,
                                  'aria-label': 'Loading QR Code',
                                }
                              ),
                              children: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                react_qr_code__WEBPACK_IMPORTED_MODULE_2__.Ay,
                                {
                                  value: otpAuth,
                                  size: responsiveSize,
                                  style: {
                                    height: 'auto',
                                    maxWidth: '100%',
                                    width: '100%',
                                  },
                                  'aria-label': `QR Code for ${title || 'MFA Setup'}`,
                                }
                              ),
                            }
                          ),
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        _barrel_optimize_names_Box_CircularProgress_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,
                        {
                          variant: 'body2',
                          align: 'center',
                          sx: { mt: 2 },
                          children: ['Secret: ', secret],
                        }
                      ),
                    ],
                  }
                )
              : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _barrel_optimize_names_Box_CircularProgress_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                  {
                    sx: { ...sx, p: 2 },
                    role: 'alert',
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_Box_CircularProgress_Paper_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,
                      {
                        color: 'error',
                        children: 'Error: Failed to generate QR code',
                      }
                    ),
                  }
                )
          }
        )
        QRCodeComponent.displayName = 'QRCodeComponent'
        const __WEBPACK_DEFAULT_EXPORT__ = QRCodeComponent
        QRCodeComponent.__docgenInfo = {
          description:
            'A component that displays a QR code for MFA setup with Material-UI styling\n@param {QRCodeProps} props - The props for the component\n@returns {React.ReactElement} The rendered QR code component',
          methods: [],
          displayName: 'QRCodeComponent',
          props: {
            username: {
              required: !0,
              tsType: { name: 'string' },
              description: '',
            },
            appName: {
              required: !0,
              tsType: { name: 'string' },
              description: '',
            },
            size: {
              required: !1,
              tsType: { name: 'number' },
              description: '',
              defaultValue: { value: '256', computed: !1 },
            },
            title: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            sx: {
              required: !1,
              tsType: {
                name: 'SxProps',
                elements: [{ name: 'Theme' }],
                raw: 'SxProps<Theme>',
              },
              description: '',
            },
            onSecretGenerated: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(secret: string) => void',
                signature: {
                  arguments: [{ type: { name: 'string' }, name: 'secret' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
          },
        }
      },
      '?8131': () => {},
      '?3fc0': () => {},
      '?f9d4': () => {},
      '?7a28': () => {},
      '?cad2': () => {},
      '?593c': () => {},
    },
  ]
)
