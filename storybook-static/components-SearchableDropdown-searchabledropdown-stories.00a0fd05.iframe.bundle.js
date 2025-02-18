'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [5743],
    {
      './src/components/SearchableDropdown/searchabledropdown.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            ComplexAttributes: () => ComplexAttributes,
            CustomColors: () => CustomColors,
            ErrorState: () => ErrorState,
            NoOptions: () => NoOptions,
            RequiredField: () => RequiredField,
            SearchAndSelect: () => SearchAndSelect,
            WithDefaultValue: () => WithDefaultValue,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@storybook/test/dist/index.mjs'
        )
        const sampleOptions = [
            { value: 'apple', attribute1: 'Fruit', attribute2: 'Green or Red' },
            { value: 'banana', attribute1: 'Fruit', attribute2: 'Yellow' },
            { value: 'carrot', attribute1: 'Vegetable', attribute2: 'Orange' },
            { value: 'potato', attribute1: 'Vegetable', attribute2: 'Brown' },
            { value: 'avocado', attribute1: 'Fruit', attribute2: 'Green' },
            { value: 'broccoli', attribute1: 'Vegetable', attribute2: 'Green' },
          ],
          __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/SearchableDropdown',
            component: __webpack_require__(
              './src/components/SearchableDropdown/index.tsx'
            ).A,
            argTypes: {
              backgroundcolor: { control: 'color' },
              outlinecolor: { control: 'color' },
              fontcolor: { control: 'color' },
              inputfontcolor: { control: 'color' },
              shrunkfontcolor: { control: 'color' },
              unshrunkfontcolor: { control: 'color' },
              placeholdercolor: { control: 'color' },
              shrunklabelposition: {
                control: 'select',
                options: ['onNotch', 'aboveNotch'],
              },
            },
            parameters: {
              docs: { description: { component: 'Storybook metadata' } },
            },
          },
          Basic = {
            args: {
              label: 'Basic SearchableDropdown',
              options: sampleOptions,
              placeholder: 'Start typing...',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Basic SearchableDropdown')
              ).toBeInTheDocument()
              const input = canvas.getByRole('combobox')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                input
              ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                  input,
                  'car'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('carrot')
                ).toBeInTheDocument()
            },
          },
          WithDefaultValue = {
            args: {
              label: 'Dropdown with Default Value',
              options: sampleOptions,
              defaultValue: 'banana',
            },
            play: ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByRole('combobox')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                input
              ).toHaveValue('banana')
            },
          },
          ComplexAttributes = {
            args: {
              label: 'Complex Attributes',
              options: [
                {
                  value: 'item1',
                  attribute1: 'Extra data #1',
                  attribute2: 'More info #1',
                },
                {
                  value: 'item2',
                  attribute1: 'Extra data #2',
                  attribute2: 'More info #2',
                },
                {
                  value: 'item3',
                  attribute1: 'Extra data #3',
                  attribute2: 'More info #3',
                },
              ],
              placeholder: 'Search items...',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
                _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement),
                input = canvas.getByRole('combobox')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                input
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('item1')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('item3')
                ).toBeInTheDocument()
            },
          },
          ErrorState = {
            args: {
              label: 'Error Dropdown',
              options: sampleOptions,
              error: !0,
              helperText: 'Something went wrong!',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Something went wrong!')
              ).toBeInTheDocument()
            },
          },
          RequiredField = {
            args: {
              label: 'Required Dropdown',
              options: sampleOptions,
              required: !0,
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Required Dropdown')
              ).toBeInTheDocument()
            },
          },
          CustomColors = {
            args: {
              label: 'Custom Colors',
              options: sampleOptions,
              backgroundcolor: '#f0f8ff',
              outlinecolor: '#ff5722',
              fontcolor: '#4caf50',
              inputfontcolor: '#e91e63',
              shrunkfontcolor: '#673ab7',
              unshrunkfontcolor: '#9c27b0',
              shrunklabelposition: 'onNotch',
              placeholdercolor: '#42a5f5',
              placeholder: 'Enter something...',
            },
            play: async ({ canvasElement }) => {
              const input = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByRole('combobox')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                input
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toBeInTheDocument()
            },
          },
          SearchAndSelect = {
            args: {
              label: 'Search & Select',
              options: sampleOptions,
              placeholder: 'Find an item...',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
                _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement),
                input = canvas.getByRole('combobox')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                input
              ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                  input,
                  'avo'
                )
              const avocadoOption = canvas.getByText('avocado')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                avocadoOption
              ).toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  avocadoOption
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  input
                ).toHaveValue('avocado')
            },
          },
          NoOptions = {
            args: {
              label: 'Empty Dropdown',
              options: [],
              placeholder: 'No items available...',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
                _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement),
                input = canvas.getByRole('combobox')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                input
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.queryByText('apple')
                ).not.toBeInTheDocument()
            },
          },
          __namedExportsOrder = [
            'Basic',
            'WithDefaultValue',
            'ComplexAttributes',
            'ErrorState',
            'RequiredField',
            'CustomColors',
            'SearchAndSelect',
            'NoOptions',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    label: 'Basic SearchableDropdown',\n    options: sampleOptions,\n    placeholder: 'Start typing...'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Check for the label\n    expect(canvas.getByText('Basic SearchableDropdown')).toBeInTheDocument();\n\n    // Click into the input\n    const input = canvas.getByRole('combobox');\n    await userEvent.click(input);\n\n    // Type a partial match\n    await userEvent.type(input, 'car');\n    // 'carrot' should appear\n    expect(canvas.getByText('carrot')).toBeInTheDocument();\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story: '1) Basic usage\r\n   Uses userEvent => keep `async`.',
              ...Basic.parameters?.docs?.description,
            },
          },
        }),
          (WithDefaultValue.parameters = {
            ...WithDefaultValue.parameters,
            docs: {
              ...WithDefaultValue.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Dropdown with Default Value',\n    options: sampleOptions,\n    defaultValue: 'banana'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Expect the combobox to show the default item\n    const input = canvas.getByRole('combobox');\n    expect(input).toHaveValue('banana');\n  }\n}",
                ...WithDefaultValue.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) With defaultValue\r\n   No user interactions => remove `async`.',
                ...WithDefaultValue.parameters?.docs?.description,
              },
            },
          }),
          (ComplexAttributes.parameters = {
            ...ComplexAttributes.parameters,
            docs: {
              ...ComplexAttributes.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Complex Attributes',\n    options: [{\n      value: 'item1',\n      attribute1: 'Extra data #1',\n      attribute2: 'More info #1'\n    }, {\n      value: 'item2',\n      attribute1: 'Extra data #2',\n      attribute2: 'More info #2'\n    }, {\n      value: 'item3',\n      attribute1: 'Extra data #3',\n      attribute2: 'More info #3'\n    }],\n    placeholder: 'Search items...'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Open the dropdown\n    const input = canvas.getByRole('combobox');\n    await userEvent.click(input);\n    // item1, item2, item3 should be visible\n    expect(canvas.getByText('item1')).toBeInTheDocument();\n    expect(canvas.getByText('item3')).toBeInTheDocument();\n  }\n}",
                ...ComplexAttributes.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Options with Complex Attributes\r\n   Uses userEvent => keep `async`.',
                ...ComplexAttributes.parameters?.docs?.description,
              },
            },
          }),
          (ErrorState.parameters = {
            ...ErrorState.parameters,
            docs: {
              ...ErrorState.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Error Dropdown',\n    options: sampleOptions,\n    error: true,\n    helperText: 'Something went wrong!'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm the helper text\n    expect(canvas.getByText('Something went wrong!')).toBeInTheDocument();\n  }\n}",
                ...ErrorState.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) Error State\r\n   No user interactions => remove `async`.',
                ...ErrorState.parameters?.docs?.description,
              },
            },
          }),
          (RequiredField.parameters = {
            ...RequiredField.parameters,
            docs: {
              ...RequiredField.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Required Dropdown',\n    options: sampleOptions,\n    required: true\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Check that label is present\n    expect(canvas.getByText('Required Dropdown')).toBeInTheDocument();\n  }\n}",
                ...RequiredField.parameters?.docs?.source,
              },
              description: {
                story:
                  '5) Required Dropdown\r\n   No user interactions => remove `async`.',
                ...RequiredField.parameters?.docs?.description,
              },
            },
          }),
          (CustomColors.parameters = {
            ...CustomColors.parameters,
            docs: {
              ...CustomColors.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Custom Colors',\n    options: sampleOptions,\n    backgroundcolor: '#f0f8ff',\n    outlinecolor: '#ff5722',\n    fontcolor: '#4caf50',\n    inputfontcolor: '#e91e63',\n    shrunkfontcolor: '#673ab7',\n    unshrunkfontcolor: '#9c27b0',\n    shrunklabelposition: 'onNotch',\n    placeholdercolor: '#42a5f5',\n    placeholder: 'Enter something...'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Interact just to ensure no errors\n    const input = canvas.getByRole('combobox');\n    await userEvent.click(input);\n    expect(input).toBeInTheDocument();\n  }\n}",
                ...CustomColors.parameters?.docs?.source,
              },
              description: {
                story: '6) Custom Colors\r\n   Uses userEvent => keep `async`.',
                ...CustomColors.parameters?.docs?.description,
              },
            },
          }),
          (SearchAndSelect.parameters = {
            ...SearchAndSelect.parameters,
            docs: {
              ...SearchAndSelect.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Search & Select',\n    options: sampleOptions,\n    placeholder: 'Find an item...'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Focus and type a partial search\n    const input = canvas.getByRole('combobox');\n    await userEvent.click(input);\n    await userEvent.type(input, 'avo');\n\n    // 'avocado' should appear\n    const avocadoOption = canvas.getByText('avocado');\n    expect(avocadoOption).toBeInTheDocument();\n\n    // Click the option\n    await userEvent.click(avocadoOption);\n\n    // Now the combobox value should be \"avocado\"\n    expect(input).toHaveValue('avocado');\n  }\n}",
                ...SearchAndSelect.parameters?.docs?.source,
              },
              description: {
                story:
                  '7) Searching & Selecting\r\n   Uses userEvent => keep `async`.',
                ...SearchAndSelect.parameters?.docs?.description,
              },
            },
          }),
          (NoOptions.parameters = {
            ...NoOptions.parameters,
            docs: {
              ...NoOptions.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Empty Dropdown',\n    options: [],\n    placeholder: 'No items available...'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Open the dropdown\n    const input = canvas.getByRole('combobox');\n    await userEvent.click(input);\n    // No items should appear\n    expect(canvas.queryByText('apple')).not.toBeInTheDocument();\n  }\n}",
                ...NoOptions.parameters?.docs?.source,
              },
              description: {
                story:
                  '8) No Options scenario\r\n   Uses userEvent => keep `async`.',
                ...NoOptions.parameters?.docs?.description,
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
