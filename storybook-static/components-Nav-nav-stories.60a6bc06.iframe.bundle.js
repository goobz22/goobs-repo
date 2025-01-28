'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [5295],
    {
      './src/components/Nav/nav.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            BasicPermanent: () => BasicPermanent,
            Complex: () => Complex,
            TemporaryDrawer: () => TemporaryDrawer,
            WithSearch: () => WithSearch,
            WithSubNav: () => WithSubNav,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => nav_stories,
          })
        var dist = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          jsx_runtime = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          Box = __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          Stack = __webpack_require__(
            './node_modules/@mui/material/Stack/Stack.js'
          ),
          Divider = __webpack_require__(
            './node_modules/@mui/material/Divider/Divider.js'
          ),
          Drawer = __webpack_require__(
            './node_modules/@mui/material/Drawer/Drawer.js'
          ),
          next_link = __webpack_require__('./node_modules/next/link.js'),
          link_default = __webpack_require__.n(next_link),
          Typography = __webpack_require__(
            './src/components/Typography/index.tsx'
          ),
          SearchableDropdown = __webpack_require__(
            './src/components/SearchableDropdown/index.tsx'
          ),
          palette = __webpack_require__('./src/styles/palette.ts'),
          Accordion = __webpack_require__(
            './node_modules/@mui/material/Accordion/Accordion.js'
          ),
          AccordionSummary = __webpack_require__(
            './node_modules/@mui/material/AccordionSummary/AccordionSummary.js'
          ),
          AccordionDetails = __webpack_require__(
            './node_modules/@mui/material/AccordionDetails/AccordionDetails.js'
          ),
          List = __webpack_require__(
            './node_modules/@mui/material/List/List.js'
          ),
          ExpandMore = __webpack_require__(
            './node_modules/@mui/icons-material/esm/ExpandMore.js'
          )
        const ExpandingNav = ({
            title,
            expandedNavs,
            setExpandedNavs,
            onClick,
            children,
          }) => {
            const isExpanded = expandedNavs.includes(null != title ? title : '')
            return (0, jsx_runtime.jsxs)(Accordion.A, {
              disableGutters: !0,
              elevation: 0,
              square: !0,
              expanded: isExpanded,
              onChange: () => {
                setExpandedNavs(
                  isExpanded
                    ? expandedNavs.filter(t => t !== title)
                    : [...expandedNavs, null != title ? title : '']
                )
              },
              sx: {
                pl: 0,
                backgroundColor: 'transparent',
                '.MuiAccordionSummary-root': { pl: 0, whiteSpace: 'nowrap' },
                '&:before': { display: 'none' },
              },
              children: [
                (0, jsx_runtime.jsx)(AccordionSummary.A, {
                  expandIcon: (0, jsx_runtime.jsx)(ExpandMore.A, {
                    sx: { color: 'transparent' },
                  }),
                  'aria-controls': 'accordion-content',
                  id: 'accordion-header',
                  sx: {
                    boxSizing: 'border-box',
                    border: 'none',
                    py: '6px',
                    mt: 2,
                    ml: 1,
                    minHeight: 0,
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    '& .MuiAccordionSummary-expandIconWrapper': {
                      order: -1,
                      marginRight: '8px',
                    },
                    '& .MuiAccordionSummary-content': {
                      m: 0,
                      whiteSpace: 'nowrap',
                    },
                    '&:hover': {
                      '& .MuiSvgIcon-root': { color: palette.ON.main },
                    },
                    '&.Mui-expanded': {
                      '& .MuiSvgIcon-root': { color: palette.ON.main },
                    },
                  },
                  onClick: () => {
                    onClick && onClick()
                  },
                  children: (0, jsx_runtime.jsx)(Typography.o, {
                    fontvariant: 'merrih5',
                    fontcolor: palette.ON.main,
                    text: null != title ? title : '',
                    sx: { whiteSpace: 'nowrap' },
                  }),
                }),
                (0, jsx_runtime.jsx)(AccordionDetails.A, {
                  sx: { border: 'none', p: 0, whiteSpace: 'nowrap' },
                  children: (0, jsx_runtime.jsx)(List.A, {
                    sx: { py: 0, whiteSpace: 'nowrap' },
                    children,
                  }),
                }),
              ],
            })
          },
          expanding = ExpandingNav
        ExpandingNav.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ExpandingNav',
          props: {
            title: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            expandedNavs: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description:
                'The titles that are currently expanded (top-level).',
            },
            setExpandedNavs: {
              required: !0,
              tsType: {
                name: 'ReactDispatch',
                raw: 'React.Dispatch<React.SetStateAction<string[]>>',
                elements: [
                  {
                    name: 'ReactSetStateAction',
                    raw: 'React.SetStateAction<string[]>',
                    elements: [
                      {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                      },
                    ],
                  },
                ],
              },
              description: 'Setter for `expandedNavs`.',
            },
            onClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: 'Click handler for route or other actions',
            },
            level: {
              required: !0,
              tsType: { name: 'number' },
              description: 'The nesting level for indentation.',
            },
            children: {
              required: !1,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: 'Child nodes (subNav) to show if expanded.',
            },
          },
        }
        const ListNav = ({ title, onClick }) =>
            (0, jsx_runtime.jsx)(Box.A, {
              sx: {
                display: 'flex',
                alignItems: 'center',
                height: '32px',
                cursor: onClick ? 'pointer' : 'default',
                ml: 5,
                mt: 2,
                '&:hover': { color: palette.ON.main },
              },
              onClick: () => {
                onClick && onClick()
              },
              children: (0, jsx_runtime.jsx)(Typography.o, {
                fontvariant: 'merrih5',
                fontcolor: palette.ON.main,
                text: null != title ? title : '',
                sx: { whiteSpace: 'nowrap' },
              }),
            }),
          list = ListNav
        ListNav.__docgenInfo = {
          description:
            "For a main nav item that has NO children and doesn't need expansion.",
          methods: [],
          displayName: 'ListNav',
          props: {
            title: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            onClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: 'Click handler for route or onClick triggers.',
            },
            level: {
              required: !0,
              tsType: { name: 'number' },
              description: 'Indentation level for the item.',
            },
          },
        }
        const ExpandingSubNav = ({
            title,
            expandedSubnavs,
            setExpandedSubnavs,
            children,
          }) => {
            const isExpanded = expandedSubnavs.includes(
              null != title ? title : ''
            )
            return (0, jsx_runtime.jsxs)(
              Accordion.A,
              {
                disableGutters: !0,
                elevation: 0,
                square: !0,
                expanded: isExpanded,
                onChange: () => {
                  setExpandedSubnavs(
                    isExpanded
                      ? expandedSubnavs.filter(t => t !== title)
                      : [...expandedSubnavs, null != title ? title : '']
                  )
                },
                sx: {
                  pl: 0,
                  backgroundColor: 'transparent',
                  '.MuiAccordionSummary-root': { pl: 0, whiteSpace: 'nowrap' },
                  '&:before': { display: 'none' },
                },
                children: [
                  (0, jsx_runtime.jsx)(AccordionSummary.A, {
                    expandIcon: (0, jsx_runtime.jsx)(ExpandMore.A, {
                      sx: { color: 'transparent' },
                    }),
                    'aria-controls': 'accordion-content',
                    id: 'accordion-header',
                    sx: {
                      boxSizing: 'border-box',
                      border: 'none',
                      py: '6px',
                      mt: 0,
                      minHeight: 0,
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      marginLeft: '27px',
                      '& .MuiAccordionSummary-expandIconWrapper': {
                        order: -1,
                        marginRight: '4px',
                      },
                      '& .MuiAccordionSummary-content': {
                        m: 0,
                        whiteSpace: 'nowrap',
                      },
                      '&:hover': {
                        '& .MuiSvgIcon-root': { color: palette.ON.main },
                      },
                      '&.Mui-expanded': {
                        '& .MuiSvgIcon-root': { color: palette.ON.main },
                      },
                    },
                    children: (0, jsx_runtime.jsx)(Typography.o, {
                      fontvariant: 'merrih6',
                      fontcolor: palette.ON.main,
                      text: null != title ? title : '',
                      sx: { whiteSpace: 'nowrap', marginLeft: 0 },
                    }),
                  }),
                  (0, jsx_runtime.jsx)(AccordionDetails.A, {
                    sx: { border: 'none', p: 0, whiteSpace: 'nowrap' },
                    children: (0, jsx_runtime.jsx)(List.A, {
                      sx: { py: 0, whiteSpace: 'nowrap' },
                      children,
                    }),
                  }),
                ],
              },
              title
            )
          },
          subNav_expanding = ExpandingSubNav
        ExpandingSubNav.__docgenInfo = {
          description: 'SubNav item that expands if it has children.',
          methods: [],
          displayName: 'ExpandingSubNav',
          props: {
            title: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            expandedSubnavs: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
            },
            setExpandedSubnavs: {
              required: !0,
              tsType: {
                name: 'ReactDispatch',
                raw: 'React.Dispatch<React.SetStateAction<string[]>>',
                elements: [
                  {
                    name: 'ReactSetStateAction',
                    raw: 'React.SetStateAction<string[]>',
                    elements: [
                      {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                      },
                    ],
                  },
                ],
              },
              description: '',
            },
            onClose: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            children: {
              required: !1,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
          },
        }
        var MenuItem = __webpack_require__(
          './node_modules/@mui/material/MenuItem/MenuItem.js'
        )
        const ListSubNav = ({
            title,
            route,
            trigger,
            activeAndHoverColor,
            onClose,
            variant,
          }) =>
            (0, jsx_runtime.jsx)(
              link_default(),
              {
                style: { textDecoration: 'none', color: 'white' },
                href: null != route ? route : '',
                children: (0, jsx_runtime.jsx)(MenuItem.A, {
                  sx: {
                    color: palette.ON.main,
                    ml: '40px',
                    '&:hover': { backgroundColor: activeAndHoverColor },
                    '&:active': { backgroundColor: activeAndHoverColor },
                    whiteSpace: 'nowrap',
                  },
                  onClick: () => {
                    'route' === trigger &&
                      'temporary' === variant &&
                      onClose &&
                      onClose()
                  },
                  children: (0, jsx_runtime.jsx)(Typography.o, {
                    fontvariant: 'merrih6',
                    text: null != title ? title : '',
                    fontcolor: palette.ON.main,
                  }),
                }),
              },
              title
            ),
          subNav_list = ListSubNav
        ListSubNav.__docgenInfo = {
          description:
            'SubNav item that is a single route link (no children / no expand).',
          methods: [],
          displayName: 'ListSubNav',
          props: {
            title: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            route: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            trigger: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'route' | 'onClick'",
                elements: [
                  { name: 'literal', value: "'route'" },
                  { name: 'literal', value: "'onClick'" },
                ],
              },
              description: '',
            },
            activeAndHoverColor: {
              required: !0,
              tsType: { name: 'string' },
              description: '',
            },
            onClose: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            variant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'temporary' | 'permanent'",
                elements: [
                  { name: 'literal', value: "'temporary'" },
                  { name: 'literal', value: "'permanent'" },
                ],
              },
              description: '',
            },
          },
        }
        const ViewNav = ({
            title,
            route,
            trigger,
            onClick,
            activeAndHoverColor = palette.Yb.main,
            onClose,
            variant,
          }) =>
            (0, jsx_runtime.jsx)(
              link_default(),
              {
                href: null != route ? route : '',
                style: {
                  textDecoration: 'none',
                  color: 'white',
                  whiteSpace: 'nowrap',
                },
                onClick: () => {
                  'route' === trigger && 'temporary' === variant && onClose
                    ? onClose()
                    : 'onClick' === trigger &&
                      onClick &&
                      (onClick(),
                      'temporary' === variant && onClose && onClose())
                },
                children: (0, jsx_runtime.jsx)(MenuItem.A, {
                  sx: {
                    color: palette.ON.main,
                    marginLeft: '50px',
                    whiteSpace: 'nowrap',
                    '&:hover': { backgroundColor: activeAndHoverColor },
                    '&:active': { backgroundColor: activeAndHoverColor },
                  },
                  children: (0, jsx_runtime.jsx)(Typography.o, {
                    fontvariant: 'merriparagraph',
                    text: null != title ? title : '',
                    fontcolor: palette.ON.main,
                    sx: { whiteSpace: 'nowrap' },
                  }),
                }),
              },
              title
            ),
          viewNav = ViewNav
        function Nav({
          items = [],
          showSearchableNav = !0,
          showTitle = !0,
          showLine = !0,
          verticalNavTitle = 'Navigation',
          searchableNavLabel = 'Search or select a nav',
          anchor = 'left',
          shrunkfontcolor = 'white',
          backgroundcolor,
          titleUrl,
          mobileOpen = !1,
          onClose,
          variant = 'permanent',
          spacingfromtopofscreen,
          marginabovetitle = '0px',
          marginbelowtitle = '5px',
          router,
        }) {
          const [expandedNavs, setExpandedNavs] = (0, react.useState)([]),
            [expandedSubnavs, setExpandedSubnavs] = (0, react.useState)([]),
            [verticalNavWidth] = (0, react.useState)('250px'),
            [selectedNav, setSelectedNav] = (0, react.useState)(null),
            navOptions = items
              .filter(item => 'mainNav' === item.navType)
              .map(item => ({ value: item.title }))
          function handleNavClick(item) {
            'route' === item.trigger && item.route && router
              ? (router.push(item.route),
                'temporary' === variant && onClose && onClose())
              : 'onClick' === item.trigger &&
                item.onClick &&
                (item.onClick(),
                'temporary' === variant && onClose && onClose())
          }
          function renderItem(
            item,
            level,
            activeAndHoverColor = palette.Yb.main
          ) {
            switch (item.navType) {
              case 'mainNav':
                var _item_subnavs
                var _item_subnavs1
                return !!(null === (_item_subnavs = item.subnavs) ||
                void 0 === _item_subnavs
                  ? void 0
                  : _item_subnavs.length)
                  ? (0, jsx_runtime.jsx)(
                      expanding,
                      {
                        title: item.title,
                        expandedNavs,
                        setExpandedNavs,
                        onClick: () => handleNavClick(item),
                        level,
                        children:
                          null === (_item_subnavs1 = item.subnavs) ||
                          void 0 === _item_subnavs1
                            ? void 0
                            : _item_subnavs1.map(subItem =>
                                renderItem(
                                  subItem,
                                  level + 1,
                                  activeAndHoverColor
                                )
                              ),
                      },
                      item.title
                    )
                  : (0, jsx_runtime.jsx)(
                      list,
                      {
                        title: item.title,
                        onClick: () => handleNavClick(item),
                        level,
                      },
                      item.title
                    )
              case 'subNav':
                var _item_views
                var _item_views1
                return !!(null === (_item_views = item.views) ||
                void 0 === _item_views
                  ? void 0
                  : _item_views.length)
                  ? (0, jsx_runtime.jsx)(
                      subNav_expanding,
                      {
                        title: item.title,
                        expandedSubnavs,
                        setExpandedSubnavs,
                        children:
                          null === (_item_views1 = item.views) ||
                          void 0 === _item_views1
                            ? void 0
                            : _item_views1.map(view =>
                                renderItem(view, level + 2, activeAndHoverColor)
                              ),
                      },
                      item.title
                    )
                  : (0, jsx_runtime.jsx)(
                      subNav_list,
                      {
                        title: item.title,
                        route: item.route,
                        trigger: item.trigger,
                        activeAndHoverColor,
                        onClose,
                        variant,
                      },
                      item.title
                    )
              case 'viewNav':
                return (0, jsx_runtime.jsx)(
                  viewNav,
                  {
                    title: item.title,
                    route: item.route,
                    trigger: item.trigger,
                    onClick: item.onClick,
                    level,
                    activeAndHoverColor,
                    onClose,
                    variant,
                  },
                  item.title
                )
              default:
                return null
            }
          }
          const drawerContent = (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsxs)(Box.A, {
                px: '15px',
                sx: { whiteSpace: 'nowrap' },
                children: [
                  showTitle &&
                    (0, jsx_runtime.jsx)(Box.A, {
                      mt: marginabovetitle,
                      mb: marginbelowtitle,
                      children: (0, jsx_runtime.jsx)(link_default(), {
                        href: titleUrl || '/',
                        passHref: !0,
                        style: { textDecoration: 'none' },
                        onClick: 'temporary' === variant ? onClose : void 0,
                        children: (0, jsx_runtime.jsx)(Typography.o, {
                          fontvariant: 'merrih4',
                          fontcolor: palette.ON.main,
                          text: verticalNavTitle,
                        }),
                      }),
                    }),
                  showSearchableNav &&
                    (0, jsx_runtime.jsx)(Stack.A, {
                      mt: { lg: 0 },
                      spacing: 0,
                      children: (0, jsx_runtime.jsx)(Box.A, {
                        sx: {
                          position: 'relative',
                          zIndex: theme => theme.zIndex.drawer + 1,
                          width: '100%',
                          minHeight: '40px',
                          whiteSpace: 'nowrap',
                        },
                        children: (0, jsx_runtime.jsx)(SearchableDropdown.A, {
                          label: searchableNavLabel,
                          options: navOptions,
                          backgroundcolor: backgroundcolor || palette.Yb.main,
                          outlinecolor: 'none',
                          shrunkfontcolor,
                          shrunklabelposition: 'aboveNotch',
                          onChange: option => {
                            setSelectedNav(option ? option.value : null)
                          },
                        }),
                      }),
                    }),
                ],
              }),
              showLine &&
                (0, jsx_runtime.jsx)(Divider.A, {
                  sx: {
                    width: '100%',
                    backgroundColor: palette.ON.main,
                    mt: 2.5,
                  },
                }),
              selectedNav
                ? items
                    .filter(i => i.title === selectedNav)
                    .map(i => renderItem(i, 0))
                : items.map(i => renderItem(i, 0)),
            ],
          })
          return (0, jsx_runtime.jsx)(Drawer.Ay, {
            variant,
            anchor,
            open: 'temporary' !== variant || mobileOpen,
            onClose,
            elevation: 0,
            sx: {
              width: 'auto',
              height: '100%',
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                minWidth: verticalNavWidth,
                width: '280px',
                whiteSpace: 'nowrap',
                overflowX: 'hidden',
                overflowY: 'auto',
                border: 0,
                zIndex: theme =>
                  'temporary' === variant
                    ? theme.zIndex.drawer + 2
                    : theme.zIndex.drawer - 1,
                backgroundColor: palette.zx.main,
                pt: '17px',
                boxSizing: 'border-box',
                marginTop: spacingfromtopofscreen,
              },
            },
            children: drawerContent,
          })
        }
        ViewNav.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ViewNav',
          props: {
            title: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            route: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            trigger: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'route' | 'onClick'",
                elements: [
                  { name: 'literal', value: "'route'" },
                  { name: 'literal', value: "'onClick'" },
                ],
              },
              description: '',
            },
            onClick: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            level: {
              required: !0,
              tsType: { name: 'number' },
              description: '',
            },
            activeAndHoverColor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: {
                value: "'rgba(255, 255, 255, 0.09)'",
                computed: !1,
              },
            },
            onClose: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            variant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'temporary' | 'permanent'",
                elements: [
                  { name: 'literal', value: "'temporary'" },
                  { name: 'literal', value: "'permanent'" },
                ],
              },
              description: '',
            },
          },
        }
        const components_Nav = Nav
        Nav.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Nav',
          props: {
            items: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'NavItem' }],
                raw: 'NavItem[]',
              },
              description:
                'The entire nav data array (mainNav, subNav, viewNav items).',
              defaultValue: { value: '[]', computed: !1 },
            },
            showSearchableNav: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show the search box.',
              defaultValue: { value: 'true', computed: !1 },
            },
            showTitle: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show the nav title.',
              defaultValue: { value: 'true', computed: !1 },
            },
            showLine: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show a horizontal divider line.',
              defaultValue: { value: 'true', computed: !1 },
            },
            verticalNavTitle: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Title text for the nav.',
              defaultValue: { value: "'Navigation'", computed: !1 },
            },
            searchableNavLabel: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Label for the search box.',
              defaultValue: { value: "'Search or select a nav'", computed: !1 },
            },
            anchor: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'left' | 'right'",
                elements: [
                  { name: 'literal', value: "'left'" },
                  { name: 'literal', value: "'right'" },
                ],
              },
              description: 'Side on which the Drawer anchors.',
              defaultValue: { value: "'left'", computed: !1 },
            },
            backgroundcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Background color (drawer or items).',
            },
            shrunkfontcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Label color when shrunk (search box).',
              defaultValue: { value: "'white'", computed: !1 },
            },
            unshrunkfontcolor: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Label color when not shrunk (search box).',
            },
            titleUrl: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Destination route if user clicks the nav title.',
            },
            mobileOpen: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Controls mobile drawer open state.',
              defaultValue: { value: 'false', computed: !1 },
            },
            onClose: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: 'Handler for closing the mobile drawer.',
            },
            variant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'temporary' | 'permanent'",
                elements: [
                  { name: 'literal', value: "'temporary'" },
                  { name: 'literal', value: "'permanent'" },
                ],
              },
              description: "MUI Drawer variant: 'temporary' or 'permanent'.",
              defaultValue: { value: "'permanent'", computed: !1 },
            },
            spacingfromtopofscreen: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Spacing from the top of the screen.',
            },
            marginabovetitle: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Margin above the nav title.',
              defaultValue: { value: "'0px'", computed: !1 },
            },
            marginbelowtitle: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Margin below the nav title.',
              defaultValue: { value: "'5px'", computed: !1 },
            },
            router: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  push: (route: string) => void\n}',
                signature: {
                  properties: [
                    {
                      key: 'push',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '(route: string) => void',
                        signature: {
                          arguments: [
                            { type: { name: 'string' }, name: 'route' },
                          ],
                          return: { name: 'void' },
                        },
                        required: !0,
                      },
                    },
                  ],
                },
              },
              description:
                "Optional router object for route navigation (instead of `useRouter`).\nIf omitted and an item has `trigger === 'route'`, no action will occur.",
            },
          },
        }
        const basicMainNav = [
            {
              navType: 'mainNav',
              title: 'Dashboard',
              route: '/dashboard',
              trigger: 'route',
            },
            {
              navType: 'mainNav',
              title: 'Profile',
              route: '/profile',
              trigger: 'route',
            },
          ],
          subnavItems = [
            {
              navType: 'mainNav',
              title: 'Admin Section',
              route: '/admin',
              trigger: 'route',
              subnavs: [
                {
                  navType: 'subNav',
                  title: 'User Management',
                  route: '/admin/users',
                  trigger: 'route',
                  views: [
                    {
                      navType: 'viewNav',
                      title: 'View All Users',
                      route: '/admin/users/all',
                      trigger: 'route',
                    },
                    {
                      navType: 'viewNav',
                      title: 'Create User',
                      route: '/admin/users/new',
                      trigger: 'route',
                    },
                  ],
                },
                {
                  navType: 'subNav',
                  title: 'System Logs',
                  route: '/admin/logs',
                  trigger: 'route',
                },
              ],
            },
            {
              navType: 'mainNav',
              title: 'Help & Support',
              route: '/help',
              trigger: 'route',
            },
          ],
          nav_stories = {
            title: 'Components/Nav',
            component: components_Nav,
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Storybook Setup' } },
            },
          },
          BasicPermanent = {
            name: 'Basic (Permanent)',
            args: {
              items: basicMainNav,
              showSearchableNav: !1,
              showTitle: !0,
              verticalNavTitle: 'Basic Nav',
              variant: 'permanent',
            },
            play: ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              ;(0, dist.E3)(canvas.getByText('Basic Nav')).toBeInTheDocument(),
                (0, dist.E3)(canvas.getByText('Dashboard')).toBeInTheDocument(),
                (0, dist.E3)(canvas.getByText('Profile')).toBeInTheDocument()
            },
          },
          WithSubNav = {
            args: {
              items: subnavItems,
              showSearchableNav: !1,
              showTitle: !0,
              verticalNavTitle: 'Admin Nav',
              variant: 'permanent',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              ;(0, dist.E3)(
                canvas.getByText('Admin Section')
              ).toBeInTheDocument(),
                (0, dist.E3)(
                  canvas.getByText('Help & Support')
                ).toBeInTheDocument(),
                await dist.Q4.click(canvas.getByText('Admin Section')),
                (0, dist.E3)(
                  canvas.getByText('User Management')
                ).toBeInTheDocument(),
                (0, dist.E3)(
                  canvas.getByText('System Logs')
                ).toBeInTheDocument(),
                await dist.Q4.click(canvas.getByText('User Management')),
                (0, dist.E3)(
                  canvas.getByText('View All Users')
                ).toBeInTheDocument(),
                (0, dist.E3)(
                  canvas.getByText('Create User')
                ).toBeInTheDocument()
            },
          },
          WithSearch = {
            args: {
              items: basicMainNav,
              showSearchableNav: !0,
              showTitle: !0,
              verticalNavTitle: 'Searchable Nav',
              variant: 'permanent',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              ;(0, dist.E3)(
                canvas.getByLabelText('Search or select a nav')
              ).toBeInTheDocument(),
                await dist.Q4.type(
                  canvas.getByRole('combobox', {
                    name: /search or select a nav/i,
                  }),
                  'Dash'
                )
            },
          },
          TemporaryDrawer = {
            name: 'Temporary (Mobile) Drawer',
            args: {
              items: subnavItems,
              showTitle: !0,
              verticalNavTitle: 'Mobile Nav',
              variant: 'temporary',
              mobileOpen: !0,
            },
            play: ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              ;(0, dist.E3)(canvas.getByText('Mobile Nav')).toBeInTheDocument(),
                (0, dist.E3)(
                  canvas.getByText('Admin Section')
                ).toBeInTheDocument()
            },
          },
          Complex = {
            name: 'Complex (With Subnav & Views + Search)',
            args: {
              items: [
                {
                  navType: 'mainNav',
                  title: 'Dashboard',
                  route: '/dashboard',
                  trigger: 'route',
                },
                {
                  navType: 'mainNav',
                  title: 'Projects',
                  route: '/projects',
                  trigger: 'route',
                  subnavs: [
                    {
                      navType: 'subNav',
                      title: 'Current',
                      route: '/projects/current',
                      trigger: 'route',
                      views: [
                        {
                          navType: 'viewNav',
                          title: 'QA Testing',
                          route: '/projects/current/testing',
                          trigger: 'route',
                        },
                        {
                          navType: 'viewNav',
                          title: 'Deployment',
                          route: '/projects/current/deploy',
                          trigger: 'route',
                        },
                      ],
                    },
                    {
                      navType: 'subNav',
                      title: 'Archived',
                      route: '/projects/archived',
                      trigger: 'route',
                    },
                  ],
                },
                {
                  navType: 'mainNav',
                  title: 'Settings',
                  route: '/settings',
                  trigger: 'route',
                },
              ],
              showSearchableNav: !0,
              showTitle: !0,
              verticalNavTitle: 'Complex Nav',
              variant: 'permanent',
              showLine: !0,
            },
            play: async ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              ;(0, dist.E3)(
                canvas.getByText('Complex Nav')
              ).toBeInTheDocument(),
                (0, dist.E3)(canvas.getByText('Dashboard')).toBeInTheDocument(),
                (0, dist.E3)(canvas.getByText('Projects')).toBeInTheDocument(),
                (0, dist.E3)(canvas.getByText('Settings')).toBeInTheDocument(),
                await dist.Q4.click(canvas.getByText('Projects')),
                (0, dist.E3)(canvas.getByText('Current')).toBeInTheDocument(),
                (0, dist.E3)(canvas.getByText('Archived')).toBeInTheDocument(),
                await dist.Q4.click(canvas.getByText('Current')),
                (0, dist.E3)(
                  canvas.getByText('QA Testing')
                ).toBeInTheDocument(),
                (0, dist.E3)(
                  canvas.getByText('Deployment')
                ).toBeInTheDocument(),
                (0, dist.E3)(
                  canvas.getByLabelText('Search or select a nav')
                ).toBeInTheDocument()
            },
          },
          __namedExportsOrder = [
            'BasicPermanent',
            'WithSubNav',
            'WithSearch',
            'TemporaryDrawer',
            'Complex',
          ]
        ;(BasicPermanent.parameters = {
          ...BasicPermanent.parameters,
          docs: {
            ...BasicPermanent.parameters?.docs,
            source: {
              originalSource:
                "{\n  name: 'Basic (Permanent)',\n  args: {\n    items: basicMainNav,\n    showSearchableNav: false,\n    showTitle: true,\n    verticalNavTitle: 'Basic Nav',\n    variant: 'permanent'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // The title should appear\n    expect(canvas.getByText('Basic Nav')).toBeInTheDocument();\n\n    // The main nav items: \"Dashboard\", \"Profile\"\n    expect(canvas.getByText('Dashboard')).toBeInTheDocument();\n    expect(canvas.getByText('Profile')).toBeInTheDocument();\n  }\n}",
              ...BasicPermanent.parameters?.docs?.source,
            },
            description: {
              story:
                '1) Basic permanent Nav\r\n   - No userEvent => remove `async`.',
              ...BasicPermanent.parameters?.docs?.description,
            },
          },
        }),
          (WithSubNav.parameters = {
            ...WithSubNav.parameters,
            docs: {
              ...WithSubNav.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    items: subnavItems,\n    showSearchableNav: false,\n    showTitle: true,\n    verticalNavTitle: 'Admin Nav',\n    variant: 'permanent'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm top-level \"Admin Section\" & \"Help & Support\"\n    expect(canvas.getByText('Admin Section')).toBeInTheDocument();\n    expect(canvas.getByText('Help & Support')).toBeInTheDocument();\n\n    // Expand \"Admin Section\"\n    await userEvent.click(canvas.getByText('Admin Section'));\n    // \"User Management\" and \"System Logs\" subNav should appear\n    expect(canvas.getByText('User Management')).toBeInTheDocument();\n    expect(canvas.getByText('System Logs')).toBeInTheDocument();\n\n    // Expand \"User Management\"\n    await userEvent.click(canvas.getByText('User Management'));\n    // \"View All Users\" and \"Create User\" should appear\n    expect(canvas.getByText('View All Users')).toBeInTheDocument();\n    expect(canvas.getByText('Create User')).toBeInTheDocument();\n  }\n}",
                ...WithSubNav.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) Subnav Example\r\n   - Uses `await userEvent.click(...)`, so keep `async`.',
                ...WithSubNav.parameters?.docs?.description,
              },
            },
          }),
          (WithSearch.parameters = {
            ...WithSearch.parameters,
            docs: {
              ...WithSearch.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    items: basicMainNav,\n    showSearchableNav: true,\n    showTitle: true,\n    verticalNavTitle: 'Searchable Nav',\n    variant: 'permanent'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm the label text for search\n    expect(canvas.getByLabelText('Search or select a nav')).toBeInTheDocument();\n\n    // Type partial text in the search (like \"Dash\")\n    await userEvent.type(canvas.getByRole('combobox', {\n      name: /search or select a nav/i\n    }), 'Dash');\n    // \"Dashboard\" might appear as an option\n    // The story doesn't have a real pop-up or \"option\" DOM for the fake search,\n    // but you might test it if the dropdown renders items.\n  }\n}",
                ...WithSearch.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Searchable Nav\r\n   - Uses `await userEvent.type(...)`, so keep `async`.',
                ...WithSearch.parameters?.docs?.description,
              },
            },
          }),
          (TemporaryDrawer.parameters = {
            ...TemporaryDrawer.parameters,
            docs: {
              ...TemporaryDrawer.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'Temporary (Mobile) Drawer',\n  args: {\n    items: subnavItems,\n    showTitle: true,\n    verticalNavTitle: 'Mobile Nav',\n    variant: 'temporary',\n    mobileOpen: true\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Check the title\n    expect(canvas.getByText('Mobile Nav')).toBeInTheDocument();\n    // The drawer is open, so we see \"Admin Section\" etc.\n    expect(canvas.getByText('Admin Section')).toBeInTheDocument();\n  }\n}",
                ...TemporaryDrawer.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) Temporary Drawer (Mobile)\r\n   - No userEvent => remove `async`.',
                ...TemporaryDrawer.parameters?.docs?.description,
              },
            },
          }),
          (Complex.parameters = {
            ...Complex.parameters,
            docs: {
              ...Complex.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'Complex (With Subnav & Views + Search)',\n  args: {\n    items: complexNavItems,\n    showSearchableNav: true,\n    showTitle: true,\n    verticalNavTitle: 'Complex Nav',\n    variant: 'permanent',\n    showLine: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Confirm we see the nav title\n    expect(canvas.getByText('Complex Nav')).toBeInTheDocument();\n\n    // Confirm top-level items\n    expect(canvas.getByText('Dashboard')).toBeInTheDocument();\n    expect(canvas.getByText('Projects')).toBeInTheDocument();\n    expect(canvas.getByText('Settings')).toBeInTheDocument();\n\n    // Expand \"Projects\"\n    await userEvent.click(canvas.getByText('Projects'));\n    // We see \"Current\", \"Archived\"\n    expect(canvas.getByText('Current')).toBeInTheDocument();\n    expect(canvas.getByText('Archived')).toBeInTheDocument();\n\n    // Expand \"Current\"\n    await userEvent.click(canvas.getByText('Current'));\n    // Now we see \"QA Testing\" & \"Deployment\" views\n    expect(canvas.getByText('QA Testing')).toBeInTheDocument();\n    expect(canvas.getByText('Deployment')).toBeInTheDocument();\n\n    // Confirm the search label is there\n    expect(canvas.getByLabelText('Search or select a nav')).toBeInTheDocument();\n  }\n}",
                ...Complex.parameters?.docs?.source,
              },
              description: {
                story:
                  '5) Complex scenario\r\n   - Uses `await userEvent.click(...)`, so keep `async`.',
                ...Complex.parameters?.docs?.description,
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
