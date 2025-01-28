'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [335],
    {
      './node_modules/@mui/material/Box/Box.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => Box_Box })
        var react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
          styled_engine = __webpack_require__(
            './node_modules/@mui/styled-engine/index.js'
          ),
          styleFunctionSx = __webpack_require__(
            './node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js'
          ),
          extendSxProp = __webpack_require__(
            './node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js'
          ),
          useTheme = __webpack_require__(
            './node_modules/@mui/system/esm/useTheme/useTheme.js'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          )
        var ClassNameGenerator = __webpack_require__(
            './node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js'
          ),
          createTheme = __webpack_require__(
            './node_modules/@mui/material/styles/createTheme.js'
          ),
          identifier = __webpack_require__(
            './node_modules/@mui/material/styles/identifier.js'
          )
        const Box_boxClasses = (0,
          __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ).A)('MuiBox', ['root']),
          defaultTheme = (0, createTheme.A)(),
          Box = (function createBox(options = {}) {
            const {
                themeId,
                defaultTheme,
                defaultClassName = 'MuiBox-root',
                generateClassName,
              } = options,
              BoxRoot = (0, styled_engine.Ay)('div', {
                shouldForwardProp: prop =>
                  'theme' !== prop && 'sx' !== prop && 'as' !== prop,
              })(styleFunctionSx.A)
            return react.forwardRef(function Box(inProps, ref) {
              const theme = (0, useTheme.A)(defaultTheme),
                {
                  className,
                  component = 'div',
                  ...other
                } = (0, extendSxProp.A)(inProps)
              return (0, jsx_runtime.jsx)(BoxRoot, {
                as: component,
                ref,
                className: (0, clsx.A)(
                  className,
                  generateClassName
                    ? generateClassName(defaultClassName)
                    : defaultClassName
                ),
                theme: (themeId && theme[themeId]) || theme,
                ...other,
              })
            })
          })({
            themeId: identifier.A,
            defaultTheme,
            defaultClassName: Box_boxClasses.root,
            generateClassName: ClassNameGenerator.A.generate,
          }),
          Box_Box = Box
      },
      './node_modules/@mui/material/Divider/dividerClasses.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
          K: () => getDividerUtilityClass,
        })
        var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
            ),
          _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
            )
        function getDividerUtilityClass(slot) {
          return (0,
          _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Ay)(
            'MuiDivider',
            slot
          )
        }
        const __WEBPACK_DEFAULT_EXPORT__ = (0,
        _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.A)(
          'MuiDivider',
          [
            'root',
            'absolute',
            'fullWidth',
            'inset',
            'middle',
            'flexItem',
            'light',
            'vertical',
            'withChildren',
            'withChildrenVertical',
            'textAlignRight',
            'textAlignLeft',
            'wrapper',
            'wrapperVertical',
          ]
        )
      },
      './node_modules/@mui/material/ListItemIcon/listItemIconClasses.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
          f: () => getListItemIconUtilityClass,
        })
        var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
            ),
          _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
            )
        function getListItemIconUtilityClass(slot) {
          return (0,
          _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Ay)(
            'MuiListItemIcon',
            slot
          )
        }
        const __WEBPACK_DEFAULT_EXPORT__ = (0,
        _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.A)(
          'MuiListItemIcon',
          ['root', 'alignItemsFlexStart']
        )
      },
      './node_modules/@mui/material/ListItemText/listItemTextClasses.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
          b: () => getListItemTextUtilityClass,
        })
        var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
            ),
          _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
            )
        function getListItemTextUtilityClass(slot) {
          return (0,
          _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Ay)(
            'MuiListItemText',
            slot
          )
        }
        const __WEBPACK_DEFAULT_EXPORT__ = (0,
        _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__.A)(
          'MuiListItemText',
          ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']
        )
      },
      './node_modules/@mui/material/MenuItem/MenuItem.js': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => MenuItem_MenuItem,
        })
        var react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          clsx = __webpack_require__('./node_modules/clsx/dist/clsx.mjs'),
          composeClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/composeClasses/composeClasses.js'
          ),
          colorManipulator = __webpack_require__(
            './node_modules/@mui/system/esm/colorManipulator/colorManipulator.js'
          ),
          rootShouldForwardProp = __webpack_require__(
            './node_modules/@mui/material/styles/rootShouldForwardProp.js'
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
          ListContext = __webpack_require__(
            './node_modules/@mui/material/List/ListContext.js'
          ),
          ButtonBase = __webpack_require__(
            './node_modules/@mui/material/ButtonBase/ButtonBase.js'
          ),
          useEnhancedEffect = __webpack_require__(
            './node_modules/@mui/material/utils/useEnhancedEffect.js'
          ),
          useForkRef = __webpack_require__(
            './node_modules/@mui/material/utils/useForkRef.js'
          ),
          dividerClasses = __webpack_require__(
            './node_modules/@mui/material/Divider/dividerClasses.js'
          ),
          listItemIconClasses = __webpack_require__(
            './node_modules/@mui/material/ListItemIcon/listItemIconClasses.js'
          ),
          listItemTextClasses = __webpack_require__(
            './node_modules/@mui/material/ListItemText/listItemTextClasses.js'
          ),
          generateUtilityClasses = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js'
          ),
          generateUtilityClass = __webpack_require__(
            './node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js'
          )
        function getMenuItemUtilityClass(slot) {
          return (0, generateUtilityClass.Ay)('MuiMenuItem', slot)
        }
        const MenuItem_menuItemClasses = (0, generateUtilityClasses.A)(
          'MuiMenuItem',
          [
            'root',
            'focusVisible',
            'dense',
            'disabled',
            'divider',
            'gutters',
            'selected',
          ]
        )
        var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        )
        const MenuItemRoot = (0, styled.Ay)(ButtonBase.A, {
            shouldForwardProp: prop =>
              (0, rootShouldForwardProp.A)(prop) || 'classes' === prop,
            name: 'MuiMenuItem',
            slot: 'Root',
            overridesResolver: (props, styles) => {
              const { ownerState } = props
              return [
                styles.root,
                ownerState.dense && styles.dense,
                ownerState.divider && styles.divider,
                !ownerState.disableGutters && styles.gutters,
              ]
            },
          })(
            (0, memoTheme.A)(({ theme }) => ({
              ...theme.typography.body1,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              position: 'relative',
              textDecoration: 'none',
              minHeight: 48,
              paddingTop: 6,
              paddingBottom: 6,
              boxSizing: 'border-box',
              whiteSpace: 'nowrap',
              '&:hover': {
                textDecoration: 'none',
                backgroundColor: (theme.vars || theme).palette.action.hover,
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
              [`&.${MenuItem_menuItemClasses.selected}`]: {
                backgroundColor: theme.vars
                  ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`
                  : (0, colorManipulator.X4)(
                      theme.palette.primary.main,
                      theme.palette.action.selectedOpacity
                    ),
                [`&.${MenuItem_menuItemClasses.focusVisible}`]: {
                  backgroundColor: theme.vars
                    ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))`
                    : (0, colorManipulator.X4)(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity +
                          theme.palette.action.focusOpacity
                      ),
                },
              },
              [`&.${MenuItem_menuItemClasses.selected}:hover`]: {
                backgroundColor: theme.vars
                  ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))`
                  : (0, colorManipulator.X4)(
                      theme.palette.primary.main,
                      theme.palette.action.selectedOpacity +
                        theme.palette.action.hoverOpacity
                    ),
                '@media (hover: none)': {
                  backgroundColor: theme.vars
                    ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`
                    : (0, colorManipulator.X4)(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity
                      ),
                },
              },
              [`&.${MenuItem_menuItemClasses.focusVisible}`]: {
                backgroundColor: (theme.vars || theme).palette.action.focus,
              },
              [`&.${MenuItem_menuItemClasses.disabled}`]: {
                opacity: (theme.vars || theme).palette.action.disabledOpacity,
              },
              [`& + .${dividerClasses.A.root}`]: {
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
              },
              [`& + .${dividerClasses.A.inset}`]: { marginLeft: 52 },
              [`& .${listItemTextClasses.A.root}`]: {
                marginTop: 0,
                marginBottom: 0,
              },
              [`& .${listItemTextClasses.A.inset}`]: { paddingLeft: 36 },
              [`& .${listItemIconClasses.A.root}`]: { minWidth: 36 },
              variants: [
                {
                  props: ({ ownerState }) => !ownerState.disableGutters,
                  style: { paddingLeft: 16, paddingRight: 16 },
                },
                {
                  props: ({ ownerState }) => ownerState.divider,
                  style: {
                    borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
                    backgroundClip: 'padding-box',
                  },
                },
                {
                  props: ({ ownerState }) => !ownerState.dense,
                  style: {
                    [theme.breakpoints.up('sm')]: { minHeight: 'auto' },
                  },
                },
                {
                  props: ({ ownerState }) => ownerState.dense,
                  style: {
                    minHeight: 32,
                    paddingTop: 4,
                    paddingBottom: 4,
                    ...theme.typography.body2,
                    [`& .${listItemIconClasses.A.root} svg`]: {
                      fontSize: '1.25rem',
                    },
                  },
                },
              ],
            }))
          ),
          MenuItem_MenuItem = react.forwardRef(function MenuItem(inProps, ref) {
            const props = (0, DefaultPropsProvider.b)({
                props: inProps,
                name: 'MuiMenuItem',
              }),
              {
                autoFocus = !1,
                component = 'li',
                dense = !1,
                divider = !1,
                disableGutters = !1,
                focusVisibleClassName,
                role = 'menuitem',
                tabIndex: tabIndexProp,
                className,
                ...other
              } = props,
              context = react.useContext(ListContext.A),
              childContext = react.useMemo(
                () => ({ dense: dense || context.dense || !1, disableGutters }),
                [context.dense, dense, disableGutters]
              ),
              menuItemRef = react.useRef(null)
            ;(0, useEnhancedEffect.A)(() => {
              autoFocus && menuItemRef.current && menuItemRef.current.focus()
            }, [autoFocus])
            const ownerState = {
                ...props,
                dense: childContext.dense,
                divider,
                disableGutters,
              },
              classes = (ownerState => {
                const {
                    disabled,
                    dense,
                    divider,
                    disableGutters,
                    selected,
                    classes,
                  } = ownerState,
                  slots = {
                    root: [
                      'root',
                      dense && 'dense',
                      disabled && 'disabled',
                      !disableGutters && 'gutters',
                      divider && 'divider',
                      selected && 'selected',
                    ],
                  },
                  composedClasses = (0, composeClasses.A)(
                    slots,
                    getMenuItemUtilityClass,
                    classes
                  )
                return { ...classes, ...composedClasses }
              })(props),
              handleRef = (0, useForkRef.A)(menuItemRef, ref)
            let tabIndex
            return (
              props.disabled ||
                (tabIndex = void 0 !== tabIndexProp ? tabIndexProp : -1),
              (0, jsx_runtime.jsx)(ListContext.A.Provider, {
                value: childContext,
                children: (0, jsx_runtime.jsx)(MenuItemRoot, {
                  ref: handleRef,
                  role,
                  tabIndex,
                  component,
                  focusVisibleClassName: (0, clsx.A)(
                    classes.focusVisible,
                    focusVisibleClassName
                  ),
                  className: (0, clsx.A)(classes.root, className),
                  ...other,
                  ownerState,
                  classes,
                }),
              })
            )
          })
      },
      './src/components/MultiSelect/multiselect.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            CustomStyles: () => CustomStyles,
            MultipleSelections: () => MultipleSelections,
            PreSelected: () => PreSelected,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@storybook/test/dist/index.mjs'
        )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/MultiSelectChip',
            component: __webpack_require__(
              './src/components/MultiSelect/index.tsx'
            ).A,
            parameters: { a11y: { disable: !1 } },
          },
          NAMES = [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
            'Omar Alexander',
            'Carlos Abbott',
            'Miriam Wagner',
            'Bradley Wilkerson',
            'Virginia Andrews',
            'Kelly Snyder',
          ],
          Basic = {
            name: 'Basic (Default)',
            args: {
              label: 'Select a Name',
              options: NAMES,
              defaultSelected: [],
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByLabelText('Select a Name')
              ).toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByLabelText('Select a Name')
                ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByText('Van Henry')
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Van Henry')
                ).toBeInTheDocument()
            },
          },
          PreSelected = {
            args: {
              label: 'PreSelected Names',
              options: NAMES,
              defaultSelected: ['April Tucker', 'Omar Alexander'],
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('April Tucker')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Omar Alexander')
                ).toBeInTheDocument()
            },
          },
          MultipleSelections = {
            args: {
              label: 'Pick Multiple',
              options: NAMES,
              defaultSelected: [],
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                canvas.getByLabelText('Pick Multiple')
              ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByText('Van Henry')
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Van Henry')
                ).toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByLabelText('Pick Multiple')
                ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByText('April Tucker')
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('April Tucker')
                ).toBeInTheDocument()
            },
          },
          CustomStyles = {
            args: {
              label: 'Custom Colors',
              options: NAMES,
              defaultSelected: ['Kelly Snyder'],
              backgroundcolor: '#f3e5f5',
              outlinecolor: '#6a1b9a',
              fontcolor: '#283593',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Kelly Snyder')
              ).toBeInTheDocument(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByLabelText('Custom Colors')
                ),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  canvas.getByText('Kelly Snyder')
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.queryByText('Kelly Snyder')
                ).not.toBeInTheDocument()
            },
          },
          __namedExportsOrder = [
            'Basic',
            'PreSelected',
            'MultipleSelections',
            'CustomStyles',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  name: 'Basic (Default)',\n  args: {\n    label: 'Select a Name',\n    options: NAMES,\n    defaultSelected: []\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // 1. Verify label is visible\n    expect(canvas.getByLabelText('Select a Name')).toBeInTheDocument();\n\n    // 2. Click the Select to open the dropdown\n    await userEvent.click(canvas.getByLabelText('Select a Name'));\n\n    // 3. Choose \"Van Henry\" from the list\n    await userEvent.click(canvas.getByText('Van Henry'));\n\n    // 4. Now \"Van Henry\" should appear as a chip\n    expect(canvas.getByText('Van Henry')).toBeInTheDocument();\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story: '1) Basic usage - No preselected items.',
              ...Basic.parameters?.docs?.description,
            },
          },
        }),
          (PreSelected.parameters = {
            ...PreSelected.parameters,
            docs: {
              ...PreSelected.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'PreSelected Names',\n    options: NAMES,\n    defaultSelected: ['April Tucker', 'Omar Alexander']\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Both pre-selected chips should be shown\n    expect(canvas.getByText('April Tucker')).toBeInTheDocument();\n    expect(canvas.getByText('Omar Alexander')).toBeInTheDocument();\n  }\n}",
                ...PreSelected.parameters?.docs?.source,
              },
              description: {
                story: '2) PreSelected',
                ...PreSelected.parameters?.docs?.description,
              },
            },
          }),
          (MultipleSelections.parameters = {
            ...MultipleSelections.parameters,
            docs: {
              ...MultipleSelections.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Pick Multiple',\n    options: NAMES,\n    defaultSelected: []\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Open the menu\n    await userEvent.click(canvas.getByLabelText('Pick Multiple'));\n    // Select \"Van Henry\"\n    await userEvent.click(canvas.getByText('Van Henry'));\n    expect(canvas.getByText('Van Henry')).toBeInTheDocument();\n\n    // Menu closes after selection, so open again\n    await userEvent.click(canvas.getByLabelText('Pick Multiple'));\n    await userEvent.click(canvas.getByText('April Tucker'));\n    expect(canvas.getByText('April Tucker')).toBeInTheDocument();\n  }\n}",
                ...MultipleSelections.parameters?.docs?.source,
              },
              description: {
                story: '3) Multiple Selections',
                ...MultipleSelections.parameters?.docs?.description,
              },
            },
          }),
          (CustomStyles.parameters = {
            ...CustomStyles.parameters,
            docs: {
              ...CustomStyles.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    label: 'Custom Colors',\n    options: NAMES,\n    defaultSelected: ['Kelly Snyder'],\n    backgroundcolor: '#f3e5f5',\n    // Light purple\n    outlinecolor: '#6a1b9a',\n    // Dark purple\n    fontcolor: '#283593' // Indigo for text\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Confirm that Kelly Snyder is initially selected\n    expect(canvas.getByText('Kelly Snyder')).toBeInTheDocument();\n\n    // Let's open the menu and deselect\n    await userEvent.click(canvas.getByLabelText('Custom Colors'));\n    await userEvent.click(canvas.getByText('Kelly Snyder'));\n    expect(canvas.queryByText('Kelly Snyder')).not.toBeInTheDocument();\n  }\n}",
                ...CustomStyles.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) Custom Styles - Example usage of props like backgroundcolor, outlinecolor, etc.',
                ...CustomStyles.parameters?.docs?.description,
              },
            },
          })
      },
      './src/components/MultiSelect/index.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          A: () => MultipleSelectChip,
        })
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/next/dist/compiled/react/jsx-runtime.js'
            ),
          react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              './node_modules/@mui/material/styles/styled.js'
            ),
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/system/esm/colorManipulator/colorManipulator.js'
            ),
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/material/styles/useTheme.js'
            ),
          _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            './node_modules/@mui/material/Box/Box.js'
          ),
          _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              './node_modules/@mui/material/OutlinedInput/OutlinedInput.js'
            ),
          _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/material/InputLabel/InputLabel.js'
            ),
          _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              './node_modules/@mui/material/MenuItem/MenuItem.js'
            ),
          _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/material/FormControl/FormControl.js'
            ),
          _mui_material_Select__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              './node_modules/@mui/material/Select/Select.js'
            ),
          _mui_material_Chip__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__('./node_modules/@mui/material/Chip/Chip.js')
        const MenuProps = {
          PaperProps: { style: { maxHeight: 188, width: 250 } },
        }
        function getStyles(name, selectedArray, theme) {
          return {
            fontWeight: selectedArray.includes(name)
              ? theme.typography.fontWeightMedium
              : theme.typography.fontWeightRegular,
          }
        }
        const StyledFormControl = (0,
        _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.Ay)(
          _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_3__.A,
          {
            shouldForwardProp: prop =>
              ![
                'backgroundcolor',
                'outlinecolor',
                'fontcolor',
                'inputfontcolor',
                'shrunkfontcolor',
                'unshrunkfontcolor',
                'placeholdercolor',
                'shrunklabelposition',
              ].includes(prop),
          }
        )(
          ({
            backgroundcolor,
            outlinecolor,
            fontcolor,
            inputfontcolor,
            shrunkfontcolor,
            unshrunkfontcolor,
            placeholdercolor,
            shrunklabelposition,
            hasvalue,
          }) => ({
            '& .MuiOutlinedInput-root': {
              minHeight: '40px',
              backgroundColor: backgroundcolor || 'inherit',
              color: fontcolor || 'inherit',
              '& fieldset': {
                borderColor:
                  outlinecolor ||
                  ('true' === hasvalue ? 'black' : 'rgba(0,0,0,0.23)'),
              },
              '&:hover fieldset': {
                borderColor:
                  outlinecolor ||
                  ('true' === hasvalue ? 'black' : 'rgba(0,0,0,0.23)'),
              },
              '&.Mui-focused fieldset': {
                borderColor:
                  outlinecolor ||
                  ('true' === hasvalue ? 'black' : 'rgba(0,0,0,0.23)'),
              },
              '& input': {
                color: inputfontcolor || fontcolor || 'inherit',
                '&::placeholder': {
                  color:
                    placeholdercolor ||
                    (0, _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.X4)(
                      '#000',
                      0.54
                    ),
                },
              },
              '& .MuiSelect-icon': {
                color: inputfontcolor || fontcolor || 'inherit',
              },
            },
            '& .MuiInputLabel-root': {
              color: unshrunkfontcolor || fontcolor || 'inherit',
              '&.Mui-focused': {
                color: shrunkfontcolor || fontcolor || 'inherit',
              },
              '&.MuiInputLabel-shrink': {
                color: shrunkfontcolor || fontcolor || 'inherit',
                ...('aboveNotch' === shrunklabelposition && {
                  transform: 'translate(0px, -17px) scale(0.75)',
                }),
                ...('onNotch' === shrunklabelposition && {
                  transform: 'translate(13px, -4px) scale(0.75)',
                }),
              },
            },
          })
        )
        function MultipleSelectChip(props) {
          const {
              label = 'Chip',
              options = [],
              defaultSelected = [],
              onChange,
              backgroundcolor,
              outlinecolor,
              fontcolor,
              inputfontcolor,
              shrunkfontcolor,
              unshrunkfontcolor,
              placeholdercolor,
              shrunklabelposition,
              sx,
              ...rest
            } = props,
            theme = (0, _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.A)(),
            [selectedValues, setSelectedValues] =
              react__WEBPACK_IMPORTED_MODULE_1__.useState(defaultSelected),
            hasValue = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
              () => (selectedValues.length > 0).toString(),
              [selectedValues]
            )
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.A,
            {
              sx: { display: 'flex', justifyContent: 'center', mt: 2 },
              children: (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                StyledFormControl,
                {
                  sx: { width: 300, ...sx },
                  variant: 'outlined',
                  hasvalue: hasValue,
                  backgroundcolor,
                  outlinecolor,
                  fontcolor,
                  inputfontcolor,
                  shrunkfontcolor,
                  unshrunkfontcolor,
                  placeholdercolor,
                  shrunklabelposition,
                  ...rest,
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_7__.A,
                      { id: 'multi-select-chip-label', children: label }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _mui_material_Select__WEBPACK_IMPORTED_MODULE_8__.A,
                      {
                        labelId: 'multi-select-chip-label',
                        id: 'multi-select-chip',
                        multiple: !0,
                        value: selectedValues,
                        onChange: event => {
                          const { value } = event.target,
                            newValue =
                              'string' == typeof value
                                ? value.split(',')
                                : value
                          setSelectedValues(newValue),
                            onChange && onChange(newValue)
                        },
                        input: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_9__.A,
                          {
                            label,
                            sx: {
                              minHeight: 55,
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: 0.5,
                              alignItems: 'center',
                            },
                            placeholder: placeholdercolor ? label : void 0,
                          }
                        ),
                        renderValue: selected =>
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.A,
                            {
                              sx: {
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 0.5,
                              },
                              children: selected.map(val =>
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _mui_material_Chip__WEBPACK_IMPORTED_MODULE_10__.A,
                                  { label: val },
                                  val
                                )
                              ),
                            }
                          ),
                        MenuProps,
                        children: options.map(name =>
                          (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__.A,
                            {
                              value: name,
                              style: getStyles(name, selectedValues, theme),
                              children: name,
                            },
                            name
                          )
                        ),
                      }
                    ),
                  ],
                }
              ),
            }
          )
        }
        MultipleSelectChip.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'MultipleSelectChip',
          props: {
            label: {
              required: !1,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            options: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
            },
            defaultSelected: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
            },
            onChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(values: string[]) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                      },
                      name: 'values',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
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
            inputfontcolor: {
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
            placeholdercolor: {
              required: !1,
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
            },
            sx: { required: !1, tsType: { name: 'SxProps' }, description: '' },
          },
          composes: ['Omit'],
        }
      },
    },
  ]
)
