'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [5111],
    {
      './src/components/Searchbar/searchbar.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            CustomColors: () => CustomColors,
            NoOutline: () => NoOutline,
            Prefilled: () => Prefilled,
            WithLabel: () => WithLabel,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/components/Searchbar/index.tsx'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/Searchbar',
            component: _index__WEBPACK_IMPORTED_MODULE_1__.A,
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Setup Storybook metadata' } },
            },
          },
          Basic = {
            args: {
              placeholder: 'Search...',
              value: '',
              onChange: e => {
                console.log('Basic search input =>', e.target.value)
              },
            },
            play: async ({ canvasElement }) => {
              const inputEl = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByPlaceholderText('Search...')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                inputEl.value
              ).toBe(''),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                  inputEl,
                  'Hello'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  inputEl.value
                ).toBe('Hello')
            },
          },
          WithLabel = {
            args: {
              label: 'Search Label',
              placeholder: 'Search items',
              value: '',
              onChange: e => {
                console.log('WithLabel input =>', e.target.value)
              },
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Search Label')
              ).toBeInTheDocument()
              const inputEl = canvas.getByLabelText('Search Label')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                inputEl,
                'Apple'
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  inputEl.value
                ).toBe('Apple')
            },
          },
          CustomColors = {
            args: {
              label: 'Colored Search',
              placeholder: 'Look here...',
              value: '',
              backgroundcolor: '#e3f2fd',
              iconcolor: '#0d47a1',
              outlinecolor: '#64b5f6',
              fontcolor: '#1a237e',
              onChange: e => {
                console.log('CustomColors input =>', e.target.value)
              },
            },
            play: async ({ canvasElement }) => {
              const inputEl = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Colored Search')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                inputEl,
                'Colored'
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  inputEl.value
                ).toBe('Colored')
            },
          },
          NoOutline = {
            args: {
              label: 'No Border',
              placeholder: 'Try typing...',
              value: '',
              outlinecolor: 'none',
              onChange: e => {
                console.log('NoOutline input =>', e.target.value)
              },
            },
            play: async ({ canvasElement }) => {
              const inputEl = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('No Border')
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                inputEl,
                'Borderless'
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  inputEl.value
                ).toBe('Borderless')
            },
          },
          Prefilled = {
            args: {
              label: 'Prefilled Search',
              placeholder: 'Modify me...',
              value: 'Initial text',
              onChange: e => {
                console.log('Prefilled input =>', e.target.value)
              },
            },
            play: async ({ canvasElement }) => {
              const inputEl = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(
                canvasElement
              ).getByLabelText('Prefilled Search')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                inputEl.value
              ).toBe('Initial text'),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.clear(
                  inputEl
                ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.type(
                  inputEl,
                  'New content'
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  inputEl.value
                ).toBe('New content')
            },
          },
          __namedExportsOrder = [
            'Basic',
            'WithLabel',
            'CustomColors',
            'NoOutline',
            'Prefilled',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    placeholder: 'Search...',\n    value: '',\n    onChange: e => {\n      console.log('Basic search input =>', e.target.value);\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // The input might have \"Search...\" as the placeholder\n    const inputEl = canvas.getByPlaceholderText('Search...'); // returns HTMLElement\n\n    // Initially empty\n    expect((inputEl as HTMLInputElement).value).toBe('');\n\n    // Type something\n    await userEvent.type(inputEl, 'Hello');\n    expect((inputEl as HTMLInputElement).value).toBe('Hello');\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story: '1) Basic usage (no label, no special colors)',
              ...Basic.parameters?.docs?.description,
            },
          },
        }),
          (WithLabel.parameters = {
            ...WithLabel.parameters,
            docs: {
              ...WithLabel.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Search Label',\n    placeholder: 'Search items',\n    value: '',\n    onChange: e => {\n      console.log('WithLabel input =>', e.target.value);\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // The label is visible\n    expect(canvas.getByText('Search Label')).toBeInTheDocument();\n\n    // Type some text\n    const inputEl = canvas.getByLabelText('Search Label'); // returns HTMLElement\n    await userEvent.type(inputEl, 'Apple');\n    expect((inputEl as HTMLInputElement).value).toBe('Apple');\n  }\n}",
                ...WithLabel.parameters?.docs?.source,
              },
              description: {
                story: '2) With Label',
                ...WithLabel.parameters?.docs?.description,
              },
            },
          }),
          (CustomColors.parameters = {
            ...CustomColors.parameters,
            docs: {
              ...CustomColors.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Colored Search',\n    placeholder: 'Look here...',\n    value: '',\n    backgroundcolor: '#e3f2fd',\n    // Light blue\n    iconcolor: '#0d47a1',\n    // Darker blue\n    outlinecolor: '#64b5f6',\n    // Another shade of blue\n    fontcolor: '#1a237e',\n    // Deep purple for text\n    onChange: e => {\n      console.log('CustomColors input =>', e.target.value);\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const inputEl = canvas.getByLabelText('Colored Search');\n    // Type \"Colored\"\n    await userEvent.type(inputEl, 'Colored');\n    expect((inputEl as HTMLInputElement).value).toBe('Colored');\n  }\n}",
                ...CustomColors.parameters?.docs?.source,
              },
              description: {
                story: '3) Custom Colors',
                ...CustomColors.parameters?.docs?.description,
              },
            },
          }),
          (NoOutline.parameters = {
            ...NoOutline.parameters,
            docs: {
              ...NoOutline.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'No Border',\n    placeholder: 'Try typing...',\n    value: '',\n    outlinecolor: 'none',\n    onChange: e => {\n      console.log('NoOutline input =>', e.target.value);\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const inputEl = canvas.getByLabelText('No Border');\n\n    // Type \"Borderless\"\n    await userEvent.type(inputEl, 'Borderless');\n    expect((inputEl as HTMLInputElement).value).toBe('Borderless');\n  }\n}",
                ...NoOutline.parameters?.docs?.source,
              },
              description: {
                story: '4) Outline None',
                ...NoOutline.parameters?.docs?.description,
              },
            },
          }),
          (Prefilled.parameters = {
            ...Prefilled.parameters,
            docs: {
              ...Prefilled.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Prefilled Search',\n    placeholder: 'Modify me...',\n    value: 'Initial text',\n    onChange: e => {\n      console.log('Prefilled input =>', e.target.value);\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm initial value\n    const inputEl = canvas.getByLabelText('Prefilled Search');\n    expect((inputEl as HTMLInputElement).value).toBe('Initial text');\n\n    // Clear it and type new text\n    await userEvent.clear(inputEl);\n    await userEvent.type(inputEl, 'New content');\n    expect((inputEl as HTMLInputElement).value).toBe('New content');\n  }\n}",
                ...Prefilled.parameters?.docs?.source,
              },
              description: {
                story: '5) Pre-filled Value',
                ...Prefilled.parameters?.docs?.description,
              },
            },
          })
      },
      './src/components/Searchbar/index.tsx': (
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
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/material/styles/styled.js'
            ),
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/FormControl/FormControl.js'
            ),
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/material/OutlinedInput/OutlinedInput.js'
            ),
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/material/InputLabel/InputLabel.js'
            ),
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/material/InputAdornment/InputAdornment.js'
            ),
          _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/Search.js'
            ),
          _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/styles/palette.ts'
          )
        const StyledFormControl = (0,
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_4__.A
          )({
            width: '100%',
            position: 'relative',
            height: '50px',
            display: 'flex',
            justifyContent: 'flex-end',
          }),
          StyledOutlinedInput = (0,
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_5__.A
          )(({ backgroundcolor, outlinecolor, fontcolor }) => ({
            height: '40px',
            backgroundColor:
              backgroundcolor ||
              _styles_palette__WEBPACK_IMPORTED_MODULE_2__.ON.main,
            '& .MuiOutlinedInput-notchedOutline': {
              border:
                'none' === outlinecolor
                  ? 'none'
                  : `1px solid ${outlinecolor || _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main}`,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border:
                'none' === outlinecolor
                  ? 'none'
                  : `1px solid ${outlinecolor || _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main}`,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border:
                'none' === outlinecolor
                  ? 'none'
                  : `1px solid ${outlinecolor || _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main}`,
              borderWidth: 'none' === outlinecolor ? '0' : '1px',
            },
            '& input': {
              color:
                fontcolor ||
                _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
              padding: '0 12px',
              paddingLeft: '0px',
              height: '100%',
              '&::placeholder': {
                color:
                  fontcolor ||
                  _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
                opacity: 0.7,
              },
            },
          })),
          StyledInputLabel = (0,
          _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_6__.A
          )(
            ({
              fontcolor,
              shrunkfontcolor,
              unshrunkfontcolor,
              shrunklabelposition,
            }) => ({
              color:
                unshrunkfontcolor ||
                fontcolor ||
                _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
              position: 'absolute',
              top: '-5px',
              overflow: 'visible',
              zIndex: 1,
              '&.Mui-focused': {
                color:
                  shrunkfontcolor ||
                  fontcolor ||
                  _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
              },
              '&.MuiInputLabel-shrink': {
                color:
                  shrunkfontcolor ||
                  fontcolor ||
                  _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
                ...('aboveNotch' === shrunklabelposition && {
                  transform: 'translate(0px, 0px) scale(0.75)',
                }),
                ...('onNotch' === shrunklabelposition && {
                  transform: 'translate(15px, 7px) scale(0.75)',
                }),
              },
              '&:not(.MuiInputLabel-shrink)': {
                transform: 'none',
                top: '18px',
                left: '44px',
              },
            })
          ),
          Searchbar = ({
            label,
            backgroundcolor,
            iconcolor,
            outlinecolor,
            fontcolor,
            shrunkfontcolor,
            unshrunkfontcolor,
            placeholder,
            value,
            shrunklabelposition = 'onNotch',
            onChange,
          }) => {
            const [focused, setFocused] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
              isLabelShrunken = focused || Boolean(value)
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              StyledFormControl,
              {
                variant: 'outlined',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    StyledInputLabel,
                    {
                      variant: 'outlined',
                      htmlFor: 'search-input',
                      shrink: isLabelShrunken,
                      fontcolor,
                      shrunkfontcolor,
                      unshrunkfontcolor,
                      shrunklabelposition,
                      children: label,
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    StyledOutlinedInput,
                    {
                      id: 'search-input',
                      label,
                      notched:
                        'onNotch' === shrunklabelposition && isLabelShrunken,
                      placeholder: isLabelShrunken ? placeholder : '',
                      value,
                      onChange,
                      onFocus: () => setFocused(!0),
                      onBlur: () => setFocused(!1),
                      backgroundcolor,
                      outlinecolor,
                      fontcolor,
                      startAdornment: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _barrel_optimize_names_FormControl_InputAdornment_InputLabel_OutlinedInput_styled_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,
                        {
                          position: 'start',
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8__.A,
                            {
                              sx: {
                                color:
                                  iconcolor ||
                                  _styles_palette__WEBPACK_IMPORTED_MODULE_2__
                                    .Ql.main,
                              },
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
          __WEBPACK_DEFAULT_EXPORT__ = Searchbar
        Searchbar.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Searchbar',
          props: {
            label: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            backgroundcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            iconcolor: {
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
            shrunkfontcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            unshrunkfontcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            placeholder: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            value: {
              required: !0,
              tsType: { name: 'string' },
              description: '',
            },
            shrunklabelposition: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'onNotch' | 'aboveNotch'",
                elements: [
                  { name: 'literal', value: "'onNotch'" },
                  { name: 'literal', value: "'aboveNotch'" },
                ],
              },
              description: '',
              defaultValue: { value: "'onNotch'", computed: !1 },
            },
            onChange: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(e: React.ChangeEvent<HTMLInputElement>) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'ReactChangeEvent',
                        raw: 'React.ChangeEvent<HTMLInputElement>',
                        elements: [{ name: 'HTMLInputElement' }],
                      },
                      name: 'e',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
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
