'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [8087],
    {
      './src/components/Checkbox/checkbox.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            Checked: () => Checked,
            Disabled: () => Disabled,
            Indeterminate: () => Indeterminate,
            OnClickVsOnChange: () => OnClickVsOnChange,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/components/Checkbox/index.tsx'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/Checkbox',
            component: _index__WEBPACK_IMPORTED_MODULE_1__.A,
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Storybook metadata' } },
            },
          },
          Basic = {
            args: {
              checked: !1,
              indeterminate: !1,
              onChange: e => console.log('Basic onChange =>', e.target.checked),
              onClick: e => console.log('Basic onClick =>', e.type),
            },
            play: async ({ canvasElement }) => {
              const checkbox = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByRole('checkbox')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                checkbox
              ).not.toBeChecked(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  checkbox
                )
            },
          },
          Checked = {
            args: {
              checked: !0,
              onChange: e => console.log('Checked story =>', e.target.checked),
            },
            play: async ({ canvasElement }) => {
              const checkbox = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByRole('checkbox')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                checkbox
              ).toBeChecked(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  checkbox
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  checkbox
                ).not.toBeChecked()
            },
          },
          Indeterminate = {
            args: {
              checked: !1,
              indeterminate: !0,
              onChange: () => console.log('Indeterminate changed'),
            },
            play: async ({ canvasElement }) => {
              const checkbox = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByRole('checkbox')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                checkbox
              ).toHaveAttribute('aria-checked', 'mixed'),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  checkbox
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  checkbox
                ).toBeChecked()
            },
          },
          Disabled = {
            args: {
              checked: !0,
              disabled: !0,
              onChange: () => console.log('Disabled => onChange called'),
            },
            play: async ({ canvasElement }) => {
              const checkbox = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByRole('checkbox')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                checkbox
              ).toBeChecked(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  checkbox
                ).toBeDisabled(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  checkbox
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  checkbox
                ).toBeChecked()
            },
          },
          OnClickVsOnChange = {
            args: {
              checked: !1,
              onClick: e => console.log('onClick => event:', e.type),
              onChange: e =>
                console.log('onChange => event:', e.target.checked),
            },
            play: async ({ canvasElement }) => {
              const checkbox = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByRole('checkbox')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                checkbox
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  checkbox
                ).toBeChecked(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  checkbox
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  checkbox
                ).not.toBeChecked()
            },
          },
          __namedExportsOrder = [
            'Basic',
            'Checked',
            'Indeterminate',
            'Disabled',
            'OnClickVsOnChange',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    checked: false,\n    indeterminate: false,\n    onChange: e => console.log('Basic onChange =>', e.target.checked),\n    onClick: e => console.log('Basic onClick =>', e.type)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // The checkbox is unchecked initially\n    const checkbox = canvas.getByRole('checkbox');\n    expect(checkbox).not.toBeChecked();\n\n    // We can click it\n    await userEvent.click(checkbox);\n    // The console logs \"Basic onChange => true\" and \"Basic onClick => click\"\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story: '1) Basic usage (unchecked by default)',
              ...Basic.parameters?.docs?.description,
            },
          },
        }),
          (Checked.parameters = {
            ...Checked.parameters,
            docs: {
              ...Checked.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    checked: true,\n    onChange: e => console.log('Checked story =>', e.target.checked)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // The checkbox is initially checked\n    const checkbox = canvas.getByRole('checkbox');\n    expect(checkbox).toBeChecked();\n\n    // Clicking unchecks it\n    await userEvent.click(checkbox);\n    expect(checkbox).not.toBeChecked();\n  }\n}",
                ...Checked.parameters?.docs?.source,
              },
              description: {
                story: '2) Pre-checked scenario',
                ...Checked.parameters?.docs?.description,
              },
            },
          }),
          (Indeterminate.parameters = {
            ...Indeterminate.parameters,
            docs: {
              ...Indeterminate.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    checked: false,\n    indeterminate: true,\n    onChange: () => console.log('Indeterminate changed')\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const checkbox = canvas.getByRole('checkbox');\n    // There's no built-in \"toBeIndeterminate()\" in Testing Library,\n    // but we can confirm it has \"aria-checked\" = \"mixed\".\n    expect(checkbox).toHaveAttribute('aria-checked', 'mixed');\n\n    // Clicking it will check it\n    await userEvent.click(checkbox);\n    // Now it's checked\n    expect(checkbox).toBeChecked();\n  }\n}",
                ...Indeterminate.parameters?.docs?.source,
              },
              description: {
                story: '3) Indeterminate scenario',
                ...Indeterminate.parameters?.docs?.description,
              },
            },
          }),
          (Disabled.parameters = {
            ...Disabled.parameters,
            docs: {
              ...Disabled.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    checked: true,\n    disabled: true,\n    onChange: () => console.log('Disabled => onChange called')\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const checkbox = canvas.getByRole('checkbox');\n    // It's checked but disabled\n    expect(checkbox).toBeChecked();\n    expect(checkbox).toBeDisabled();\n\n    // Clicking won't change it\n    await userEvent.click(checkbox);\n    expect(checkbox).toBeChecked();\n  }\n}",
                ...Disabled.parameters?.docs?.source,
              },
              description: {
                story: '4) Disabled scenario',
                ...Disabled.parameters?.docs?.description,
              },
            },
          }),
          (OnClickVsOnChange.parameters = {
            ...OnClickVsOnChange.parameters,
            docs: {
              ...OnClickVsOnChange.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    checked: false,\n    onClick: e => console.log('onClick => event:', e.type),\n    onChange: e => console.log('onChange => event:', e.target.checked)\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const checkbox = canvas.getByRole('checkbox');\n\n    // Step 1: click it\n    await userEvent.click(checkbox);\n    // The logs show the order: onClick, then onChange\n    expect(checkbox).toBeChecked();\n\n    // Step 2: click again to uncheck\n    await userEvent.click(checkbox);\n    expect(checkbox).not.toBeChecked();\n  }\n}",
                ...OnClickVsOnChange.parameters?.docs?.source,
              },
              description: {
                story:
                  '5) OnClick vs OnChange\r\n   This scenario prints logs so we can see which fires first.',
                ...OnClickVsOnChange.parameters?.docs?.description,
              },
            },
          })
      },
      './src/components/Checkbox/index.tsx': (
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
          _barrel_optimize_names_Checkbox_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/material/Checkbox/Checkbox.js'
            ),
          _styles_palette__WEBPACK_IMPORTED_MODULE_2__ =
            (__webpack_require__(
              './node_modules/next/dist/compiled/react/index.js'
            ),
            __webpack_require__('./src/styles/palette.ts')),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        function DataGridCheckbox({
          onClick,
          checked,
          indeterminate,
          onChange,
          disabled,
          ...props
        }) {
          console.log('DataGridCheckbox render:', {
            checked,
            indeterminate,
            disabled,
          })
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _barrel_optimize_names_Checkbox_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
            {
              sx: {
                color: _styles_palette__WEBPACK_IMPORTED_MODULE_2__.B3.main,
                '&.Mui-checked': {
                  color: _styles_palette__WEBPACK_IMPORTED_MODULE_2__.B3.main,
                },
                '&.Mui-indeterminate': {
                  color: _styles_palette__WEBPACK_IMPORTED_MODULE_2__.B3.main,
                },
                '&.Mui-disabled': {
                  color: _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Oh.main,
                },
                '&:hover': {
                  backgroundColor:
                    _styles_palette__WEBPACK_IMPORTED_MODULE_2__.B3.light,
                  opacity: 0.1,
                },
              },
              checked,
              indeterminate,
              onClick: event => {
                console.log('Checkbox clicked:', {
                  checked,
                  indeterminate,
                  eventTarget: event.target,
                }),
                  onClick && onClick(event)
              },
              onChange: event => {
                event.stopPropagation(),
                  console.log('Checkbox changed:', {
                    newChecked: event.target.checked,
                    previousChecked: checked,
                    indeterminate,
                  }),
                  onChange && onChange(event)
              },
              disabled,
              ...props,
            }
          )
        }
        const __WEBPACK_DEFAULT_EXPORT__ = DataGridCheckbox
        DataGridCheckbox.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'DataGridCheckbox',
          props: {
            onClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(event: React.MouseEvent) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'ReactMouseEvent',
                        raw: 'React.MouseEvent',
                      },
                      name: 'event',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            checked: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            indeterminate: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            onChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(event: React.ChangeEvent<HTMLInputElement>) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'ReactChangeEvent',
                        raw: 'React.ChangeEvent<HTMLInputElement>',
                        elements: [{ name: 'HTMLInputElement' }],
                      },
                      name: 'event',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            disabled: {
              required: !1,
              tsType: { name: 'boolean' },
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
