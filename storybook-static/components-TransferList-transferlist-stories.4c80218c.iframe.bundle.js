'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [5575],
    {
      './src/components/TransferList/transferlist.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            BasicSingle: () => BasicSingle,
            LargeScenario: () => LargeScenario,
            MultipleWithDropdown: () => MultipleWithDropdown,
            SinglePrefilled: () => SinglePrefilled,
            WithItemLabelMap: () => WithItemLabelMap,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/components/TransferList/index.tsx'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/TransferList',
            component: _index__WEBPACK_IMPORTED_MODULE_1__.A,
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Shared story metadata' } },
            },
          },
          BasicSingle = {
            args: {
              variant: 'singleSelection',
              leftItems: ['Alpha', 'Beta', 'Gamma'],
              rightItems: [],
              leftTitle: 'Available Items',
              rightTitle: 'Chosen Items',
              onChange: (left, right) => {
                console.log('Updated single => left:', left, 'right:', right)
              },
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Alpha')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Beta')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Gamma')
                ).toBeInTheDocument()
            },
          },
          SinglePrefilled = {
            args: {
              variant: 'singleSelection',
              leftItems: ['Item A', 'Item B', 'Item C'],
              rightItems: ['Item X', 'Item Y'],
              leftTitle: 'Left Column',
              rightTitle: 'Right Column',
              onChange: (left, right) => {
                console.log('Pre-filled single => left:', left, 'right:', right)
              },
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Item A')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Item B')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Item C')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Item X')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Item Y')
                ).toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByText('Item A')
                )
              const moveRightBtn = canvas.getByRole('button', {
                name: 'move selected right',
              })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                moveRightBtn
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.queryByText('Item A')
                ).not.toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Item A')
                ).toBeInTheDocument()
            },
          },
          MultipleWithDropdown = {
            args: {
              variant: 'multipleSelection',
              dropdownLabel: 'Select Category',
              dropdownOptions: [
                { value: 'knowledgebase', label: 'Knowledgebase' },
                { value: 'topics', label: 'Topics' },
              ],
              dropdownDataMap: {
                knowledgebase: {
                  leftItems: ['Article 1', 'Article 2'],
                  rightItems: ['Article 3'],
                },
                topics: {
                  leftItems: ['React', 'TypeScript'],
                  rightItems: ['Storybook'],
                },
              },
              onChange: (left, right, dropdownValue) => {
                console.log('Updated multiple =>', {
                  left,
                  right,
                  dropdownValue,
                })
              },
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Select Category')
              ).toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByRole('button')
                ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByText('Knowledgebase')
                ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByText('Article 1')
                )
              const moveRightBtn = canvas.getByRole('button', {
                name: 'move selected right',
              })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                moveRightBtn
              ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.queryByText('Article 1')
                ).not.toBeInTheDocument()
            },
          },
          WithItemLabelMap = {
            args: {
              variant: 'singleSelection',
              leftItems: ['HIGH', 'MEDIUM'],
              rightItems: ['LOW'],
              itemLabelMap: {
                HIGH: 'High Priority',
                MEDIUM: 'Medium Priority',
                LOW: 'Low Priority',
              },
              onChange: (left, right) => {
                console.log('Label mapped => left:', left, 'right:', right)
              },
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('High Priority')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Medium Priority')
                ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Low Priority')
                ).toBeInTheDocument()
            },
          },
          LargeScenario = {
            args: {
              variant: 'multipleSelection',
              dropdownLabel: 'Select Type',
              dropdownOptions: [{ value: 'fruits' }, { value: 'vegetables' }],
              dropdownDataMap: {
                fruits: {
                  leftItems: [
                    'Apple',
                    'Banana',
                    'Cherry',
                    'Date',
                    'Fig',
                    'Grape',
                  ],
                  rightItems: ['Orange'],
                },
                vegetables: {
                  leftItems: ['Carrot', 'Broccoli', 'Lettuce'],
                  rightItems: [],
                },
              },
              onChange: (left, right, dropdownValue) => {
                console.log('Large scenario =>', { left, right, dropdownValue })
              },
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Select Type')
              ).toBeInTheDocument()
            },
          },
          __namedExportsOrder = [
            'BasicSingle',
            'SinglePrefilled',
            'MultipleWithDropdown',
            'WithItemLabelMap',
            'LargeScenario',
          ]
        ;(BasicSingle.parameters = {
          ...BasicSingle.parameters,
          docs: {
            ...BasicSingle.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    variant: 'singleSelection',\n    leftItems: ['Alpha', 'Beta', 'Gamma'],\n    rightItems: [],\n    leftTitle: 'Available Items',\n    rightTitle: 'Chosen Items',\n    onChange: (left, right) => {\n      console.log('Updated single => left:', left, 'right:', right);\n    }\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm the presence of \"Alpha\", \"Beta\", \"Gamma\" on the left\n    expect(canvas.getByText('Alpha')).toBeInTheDocument();\n    expect(canvas.getByText('Beta')).toBeInTheDocument();\n    expect(canvas.getByText('Gamma')).toBeInTheDocument();\n    // Check that the right side is empty\n  }\n}",
              ...BasicSingle.parameters?.docs?.source,
            },
            description: {
              story:
                '1) Basic Single-Selection (Empty Right)\r\n   No user actions => remove `async`.',
              ...BasicSingle.parameters?.docs?.description,
            },
          },
        }),
          (SinglePrefilled.parameters = {
            ...SinglePrefilled.parameters,
            docs: {
              ...SinglePrefilled.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    variant: 'singleSelection',\n    leftItems: singleLeftItems,\n    rightItems: singleRightItems,\n    leftTitle: 'Left Column',\n    rightTitle: 'Right Column',\n    onChange: (left, right) => {\n      console.log('Pre-filled single => left:', left, 'right:', right);\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Confirm \"Item A, B, C\" in the left list\n    expect(canvas.getByText('Item A')).toBeInTheDocument();\n    expect(canvas.getByText('Item B')).toBeInTheDocument();\n    expect(canvas.getByText('Item C')).toBeInTheDocument();\n\n    // Confirm \"Item X, Y\" in the right list\n    expect(canvas.getByText('Item X')).toBeInTheDocument();\n    expect(canvas.getByText('Item Y')).toBeInTheDocument();\n\n    // Example of moving \"Item A\" to the right\n    // 1) Check \"Item A\"\n    await userEvent.click(canvas.getByText('Item A'));\n    // 2) Click the \">\" button to move selected to the right\n    const moveRightBtn = canvas.getByRole('button', {\n      name: 'move selected right'\n    });\n    await userEvent.click(moveRightBtn);\n\n    // Now \"Item A\" should be removed from left, appear in right\n    expect(canvas.queryByText('Item A')).not.toBeInTheDocument();\n    expect(canvas.getByText('Item A')).toBeInTheDocument(); // On the right side\n  }\n}",
                ...SinglePrefilled.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) Single-Selection with Pre-Filled Right Items\r\n   We do user interactions => keep `async`.',
                ...SinglePrefilled.parameters?.docs?.description,
              },
            },
          }),
          (MultipleWithDropdown.parameters = {
            ...MultipleWithDropdown.parameters,
            docs: {
              ...MultipleWithDropdown.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    variant: 'multipleSelection',\n    dropdownLabel: 'Select Category',\n    dropdownOptions: sampleDropdownOptions,\n    dropdownDataMap: sampleDropdownDataMap,\n    onChange: (left, right, dropdownValue) => {\n      console.log('Updated multiple =>', {\n        left,\n        right,\n        dropdownValue\n      });\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // The dropdown label \"Select Category\" should appear\n    expect(canvas.getByText('Select Category')).toBeInTheDocument();\n\n    // 1) Click on the dropdown\n    await userEvent.click(canvas.getByRole('button'));\n    // 2) Click \"Knowledgebase\"\n    await userEvent.click(canvas.getByText('Knowledgebase'));\n\n    // Now left items = \"Article 1\", \"Article 2\", right items = \"Article 3\"\n    // Move \"Article 1\" => right\n    await userEvent.click(canvas.getByText('Article 1')); // check item\n    const moveRightBtn = canvas.getByRole('button', {\n      name: 'move selected right'\n    });\n    await userEvent.click(moveRightBtn);\n    // \"Article 1\" should move to the right\n    expect(canvas.queryByText('Article 1')).not.toBeInTheDocument();\n  }\n}",
                ...MultipleWithDropdown.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Multiple-Selection variant, with a dropdown\r\n   We do user interactions => keep `async`.',
                ...MultipleWithDropdown.parameters?.docs?.description,
              },
            },
          }),
          (WithItemLabelMap.parameters = {
            ...WithItemLabelMap.parameters,
            docs: {
              ...WithItemLabelMap.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    variant: 'singleSelection',\n    leftItems: ['HIGH', 'MEDIUM'],\n    rightItems: ['LOW'],\n    itemLabelMap: {\n      HIGH: 'High Priority',\n      MEDIUM: 'Medium Priority',\n      LOW: 'Low Priority'\n    },\n    onChange: (left, right) => {\n      console.log('Label mapped => left:', left, 'right:', right);\n    }\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // We see \"High Priority\" & \"Medium Priority\" on the left, \"Low Priority\" on the right\n    expect(canvas.getByText('High Priority')).toBeInTheDocument();\n    expect(canvas.getByText('Medium Priority')).toBeInTheDocument();\n    expect(canvas.getByText('Low Priority')).toBeInTheDocument();\n  }\n}",
                ...WithItemLabelMap.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) With itemLabelMap\r\n   No user interactions => remove `async`.',
                ...WithItemLabelMap.parameters?.docs?.description,
              },
            },
          }),
          (LargeScenario.parameters = {
            ...LargeScenario.parameters,
            docs: {
              ...LargeScenario.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    variant: 'multipleSelection',\n    dropdownLabel: 'Select Type',\n    dropdownOptions: [{\n      value: 'fruits'\n    }, {\n      value: 'vegetables'\n    }],\n    dropdownDataMap: {\n      fruits: {\n        leftItems: ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'],\n        rightItems: ['Orange']\n      },\n      vegetables: {\n        leftItems: ['Carrot', 'Broccoli', 'Lettuce'],\n        rightItems: []\n      }\n    },\n    onChange: (left, right, dropdownValue) => {\n      console.log('Large scenario =>', {\n        left,\n        right,\n        dropdownValue\n      });\n    }\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Basic existence test\n    expect(canvas.getByText('Select Type')).toBeInTheDocument();\n  }\n}",
                ...LargeScenario.parameters?.docs?.source,
              },
              description: {
                story:
                  '5) Large scenario: multipleSelection with big lists\r\n   No user interactions => remove `async`.',
                ...LargeScenario.parameters?.docs?.description,
              },
            },
          })
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
      './src/components/TransferList/index.tsx': (
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
          _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Grid/index.tsx'
          ),
          _mui_material_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            './node_modules/@mui/material/List/List.js'
          ),
          _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/material/ListItemButton/ListItemButton.js'
            ),
          _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/material/ListItemIcon/ListItemIcon.js'
            ),
          _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              './node_modules/@mui/material/ListItemText/ListItemText.js'
            ),
          _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              './node_modules/@mui/material/Checkbox/Checkbox.js'
            ),
          _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              './node_modules/@mui/material/Button/Button.js'
            ),
          _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__('./node_modules/@mui/material/Paper/Paper.js'),
          _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              './node_modules/@mui/material/Typography/Typography.js'
            ),
          _Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './src/components/Dropdown/index.tsx'
          )
        function not(a, b) {
          return a.filter(value => -1 === b.indexOf(value))
        }
        function intersection(a, b) {
          return a.filter(value => -1 !== b.indexOf(value))
        }
        const TransferList = ({
            variant = 'singleSelection',
            leftItems = [],
            rightItems = [],
            dropdownLabel,
            dropdownOptions = [],
            dropdownDataMap = {},
            itemLabelMap,
            onChange,
            leftTitle = 'Unassigned',
            rightTitle = 'Assigned',
          }) => {
            const [selectedDropdownValue, setSelectedDropdownValue] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
              [left, setLeft] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
              [right, setRight] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
              [checked, setChecked] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)([])
            ;(0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              if ('singleSelection' === variant) {
                let changed = !1
                ;(leftItems.length === left.length &&
                  leftItems.every((val, idx) => left[idx] === val)) ||
                  (setLeft(leftItems), (changed = !0)),
                  (rightItems.length === right.length &&
                    rightItems.every((val, idx) => right[idx] === val)) ||
                    (setRight(rightItems), (changed = !0)),
                  changed && setChecked([])
              }
            }, [variant, leftItems, rightItems, left, right]),
              (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
                if ('multipleSelection' === variant) {
                  if (!selectedDropdownValue) return
                  const dataForValue = dropdownDataMap[selectedDropdownValue]
                  dataForValue
                    ? (setLeft(dataForValue.leftItems),
                      setRight(dataForValue.rightItems))
                    : (setLeft([]), setRight([])),
                    setChecked([])
                }
              }, [variant, selectedDropdownValue, dropdownDataMap])
            const leftChecked = intersection(checked, left),
              rightChecked = intersection(checked, right),
              handleToggle = value => () => {
                const currentIndex = checked.indexOf(value),
                  newChecked = [...checked]
                ;-1 === currentIndex
                  ? newChecked.push(value)
                  : newChecked.splice(currentIndex, 1),
                  setChecked(newChecked)
              },
              renderList = items =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__.A,
                  {
                    sx: { width: '100%', height: 230, overflow: 'auto', mt: 1 },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _mui_material_List__WEBPACK_IMPORTED_MODULE_5__.A,
                      {
                        dense: !0,
                        component: 'div',
                        role: 'list',
                        children: items.map(value => {
                          const labelId = `transfer-list-item-${value}-label`,
                            isChecked = -1 !== checked.indexOf(value),
                            displayedLabel =
                              itemLabelMap && itemLabelMap[value]
                                ? itemLabelMap[value]
                                : value
                          return (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_6__.A,
                            {
                              role: 'listitem',
                              onClick: handleToggle(value),
                              children: [
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_7__.A,
                                  {
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_8__.A,
                                      {
                                        checked: isChecked,
                                        tabIndex: -1,
                                        disableRipple: !0,
                                        inputProps: {
                                          'aria-labelledby': labelId,
                                        },
                                      }
                                    ),
                                  }
                                ),
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_9__.A,
                                  { id: labelId, primary: displayedLabel }
                                ),
                              ],
                            },
                            value
                          )
                        }),
                      }
                    ),
                  }
                )
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _Grid__WEBPACK_IMPORTED_MODULE_2__.A,
              {
                container: !0,
                spacing: 2,
                alignItems: 'flex-start',
                columnconfig: [
                  {
                    row: 1,
                    column: 1,
                    component: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__.A,
                      {
                        sx: { width: '100%' },
                        children:
                          'singleSelection' === variant
                            ? (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__.A,
                                {
                                  sx: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                  },
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__.A,
                                      {
                                        variant: 'subtitle1',
                                        sx: { mb: 1 },
                                        children: leftTitle,
                                      }
                                    ),
                                    renderList(left),
                                  ],
                                }
                              )
                            : (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__.A,
                                {
                                  sx: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                  },
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _Dropdown__WEBPACK_IMPORTED_MODULE_3__.A,
                                      {
                                        label: dropdownLabel || '',
                                        name: 'transferListDropdown',
                                        options: dropdownOptions,
                                        value: selectedDropdownValue,
                                        onChange: e => {
                                          const newValue = e.target.value
                                          setSelectedDropdownValue(newValue)
                                        },
                                      }
                                    ),
                                    renderList(left),
                                  ],
                                }
                              ),
                      }
                    ),
                  },
                  {
                    row: 1,
                    column: 2,
                    component: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__.A,
                      {
                        sx: {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          mt: { xs: 2, sm: 4 },
                          gap: '4px',
                        },
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__.A,
                            {
                              variant: 'outlined',
                              size: 'small',
                              onClick: () => {
                                const newRight = [...right, ...left]
                                setRight(newRight),
                                  setLeft([]),
                                  setChecked([]),
                                  onChange(
                                    [],
                                    newRight,
                                    'multipleSelection' === variant
                                      ? selectedDropdownValue
                                      : void 0
                                  )
                              },
                              disabled: 0 === left.length,
                              'aria-label': 'move all right',
                              children: '≫',
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__.A,
                            {
                              variant: 'outlined',
                              size: 'small',
                              onClick: () => {
                                const newRight = [...right, ...leftChecked],
                                  newLeft = not(left, leftChecked)
                                setRight(newRight),
                                  setLeft(newLeft),
                                  setChecked(not(checked, leftChecked)),
                                  onChange(
                                    newLeft,
                                    newRight,
                                    'multipleSelection' === variant
                                      ? selectedDropdownValue
                                      : void 0
                                  )
                              },
                              disabled: 0 === leftChecked.length,
                              'aria-label': 'move selected right',
                              children: '>',
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__.A,
                            {
                              variant: 'outlined',
                              size: 'small',
                              onClick: () => {
                                const newLeft = [...left, ...rightChecked],
                                  newRight = not(right, rightChecked)
                                setLeft(newLeft),
                                  setRight(newRight),
                                  setChecked(not(checked, rightChecked)),
                                  onChange(
                                    newLeft,
                                    newRight,
                                    'multipleSelection' === variant
                                      ? selectedDropdownValue
                                      : void 0
                                  )
                              },
                              disabled: 0 === rightChecked.length,
                              'aria-label': 'move selected left',
                              children: '<',
                            }
                          ),
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__.A,
                            {
                              variant: 'outlined',
                              size: 'small',
                              onClick: () => {
                                const newLeft = [...left, ...right]
                                setLeft(newLeft),
                                  setRight([]),
                                  setChecked([]),
                                  onChange(
                                    newLeft,
                                    [],
                                    'multipleSelection' === variant
                                      ? selectedDropdownValue
                                      : void 0
                                  )
                              },
                              disabled: 0 === right.length,
                              'aria-label': 'move all left',
                              children: '≪',
                            }
                          ),
                        ],
                      }
                    ),
                  },
                  {
                    row: 1,
                    column: 3,
                    component: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__.A,
                      {
                        sx: { width: '100%' },
                        children: [
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__.A,
                            {
                              variant: 'subtitle1',
                              sx: { mb: 1 },
                              children: rightTitle,
                            }
                          ),
                          renderList(right),
                        ],
                      }
                    ),
                  },
                ],
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = TransferList
        TransferList.__docgenInfo = {
          description:
            'A TransferList with two columns:\n- Left side: either static lists (singleSelection) or\n  a dropdown + dynamic lists (multipleSelection).\n- Middle: 4 buttons (≫, >, <, ≪) to move items.\n- Right side: assigned items.',
          methods: [],
          displayName: 'TransferList',
          props: {
            variant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'singleSelection' | 'multipleSelection'",
                elements: [
                  { name: 'literal', value: "'singleSelection'" },
                  { name: 'literal', value: "'multipleSelection'" },
                ],
              },
              description:
                'If `variant="singleSelection"`, we use `leftItems` & `rightItems` directly.\nIf `variant="multipleSelection"`, you must provide dropdown props.',
              defaultValue: { value: "'singleSelection'", computed: !1 },
            },
            leftItems: {
              required: !1,
              tsType: { name: 'unknown' },
              description: 'Used ONLY if variant="singleSelection".',
              defaultValue: { value: '[]', computed: !1 },
            },
            rightItems: {
              required: !1,
              tsType: { name: 'unknown' },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            dropdownLabel: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Used ONLY if variant="multipleSelection".',
            },
            dropdownOptions: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'union',
                    raw: 'SimpleDropdownOption | ComplexDropdownOption',
                    elements: [
                      { name: 'SimpleDropdownOption' },
                      { name: 'ComplexDropdownOption' },
                    ],
                  },
                ],
                raw: 'DropdownOption[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            dropdownDataMap: {
              required: !1,
              tsType: { name: 'TransferListDropdownDataMap' },
              description: '',
              defaultValue: { value: '{}', computed: !1 },
            },
            itemLabelMap: {
              required: !1,
              tsType: {
                name: 'Record',
                elements: [{ name: 'string' }, { name: 'string' }],
                raw: 'Record<string, string>',
              },
              description:
                'A map from item-value to label.\ne.g. { "HIGH": "High Priority", "LOW": "Low Priority" }.\nIf provided, we\'ll display `itemLabelMap[value]` in the list\nrather than the raw `value`.',
            },
            onChange: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(\n  leftItems: string[],\n  rightItems: string[],\n  dropdownValue?: string\n) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                      },
                      name: 'leftItems',
                    },
                    {
                      type: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                      },
                      name: 'rightItems',
                    },
                    { type: { name: 'string' }, name: 'dropdownValue' },
                  ],
                  return: { name: 'void' },
                },
              },
              description:
                'Fired whenever left/right arrays change (user clicks the arrows).\n@param leftItems  Updated array for the "left" column\n@param rightItems Updated array for the "right" column\n@param dropdownValue For multipleSelection mode',
            },
            leftTitle: {
              required: !1,
              tsType: { name: 'string' },
              description:
                'The title shown above the left column. Defaults to "Unassigned".',
              defaultValue: { value: "'Unassigned'", computed: !1 },
            },
            rightTitle: {
              required: !1,
              tsType: { name: 'string' },
              description:
                'The title shown above the right column. Defaults to "Assigned".',
              defaultValue: { value: "'Assigned'", computed: !1 },
            },
          },
        }
      },
    },
  ]
)
