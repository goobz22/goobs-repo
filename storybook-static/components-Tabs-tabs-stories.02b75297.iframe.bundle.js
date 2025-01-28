'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [9993],
    {
      './src/components/Tabs/tabs.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            Basic: () => Basic,
            CenterAlignment: () => CenterAlignment,
            MixedTriggers: () => MixedTriggers,
            SwitchRouteInteraction: () => SwitchRouteInteraction,
            TabsWithBorders: () => TabsWithBorders,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => tabs_stories,
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
          AppBar = __webpack_require__(
            './node_modules/@mui/material/AppBar/AppBar.js'
          ),
          Tabs = __webpack_require__(
            './node_modules/@mui/material/Tabs/Tabs.js'
          ),
          Tab = __webpack_require__('./node_modules/@mui/material/Tab/Tab.js'),
          navigation = __webpack_require__(
            './node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.mjs'
          ),
          palette = __webpack_require__('./src/styles/palette.ts')
        function Tabs_Tabs({
          items,
          height = '48px',
          alignment = 'left',
          navname = '',
        }) {
          var _activeTabValues_navname
          const [activeTabValues, setActiveTabValues] = (0, react.useState)({}),
            pathname = (0, navigation.usePathname)()
          ;(0, react.useEffect)(() => {
            const currentTab = items.find(item => item.route === pathname)
            setActiveTabValues(prev => ({
              ...prev,
              [navname]: {
                tabId: (null == currentTab ? void 0 : currentTab.title) || !1,
              },
            }))
          }, [items, navname, pathname])
          return (0, jsx_runtime.jsx)(AppBar.A, {
            position: 'sticky',
            elevation: 0,
            sx: {
              backgroundColor: palette.Ql.main,
              color: '#fff',
              overflow: 'hidden',
              height,
              minHeight: height,
              display: 'flex',
              justifyContent: 'center',
              boxShadow: 'none',
            },
            children: (0, jsx_runtime.jsx)(Tabs.A, {
              value:
                (null ===
                  (_activeTabValues_navname = activeTabValues[navname]) ||
                void 0 === _activeTabValues_navname
                  ? void 0
                  : _activeTabValues_navname.tabId) || !1,
              onChange: (event, newValue) => {
                setActiveTabValues(prev => ({
                  ...prev,
                  [navname]: { tabId: newValue },
                }))
              },
              variant: 'fullWidth',
              'aria-label': 'nav tabs',
              sx: {
                backgroundColor: palette.Ql.main,
                height: '100%',
                '& .MuiTabs-flexContainer': {
                  height: '100%',
                  display: 'flex',
                  justifyContent:
                    'left' === alignment ? 'flex-start' : alignment,
                  backgroundColor: palette.Ql.main,
                },
                '& .MuiTab-root': {
                  height: '100%',
                  minHeight: 'unset',
                  display: 'flex',
                  alignItems: 'center',
                  textTransform: 'none',
                  boxSizing: 'border-box',
                  backgroundColor: palette.Ql.main,
                  color: '#fff',
                  fontWeight: 500,
                  fontFamily: 'Merriweather',
                  fontSize: 16,
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                },
              },
              children: items.map(item =>
                (0, jsx_runtime.jsx)(
                  Tab.A,
                  {
                    value: item.title || '',
                    label: item.title || '',
                    onClick: () => {
                      var tab
                      'route' === (tab = item).trigger && tab.route
                        ? (window.location.href = tab.route)
                        : 'onClick' === tab.trigger &&
                          tab.onClick &&
                          tab.onClick()
                    },
                    sx: {
                      ...('true' === item.hasleftborder && {
                        borderLeft: '1px solid white',
                      }),
                      ...('true' === item.hasrightborder && {
                        borderRight: '1px solid white',
                      }),
                    },
                  },
                  item.title
                )
              ),
            }),
          })
        }
        const components_Tabs = Tabs_Tabs
        Tabs_Tabs.__docgenInfo = {
          description:
            'A horizontal navigation component, built with MUI Tabs.',
          methods: [],
          displayName: 'Tabs',
          props: {
            items: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'TabsItem' }],
                raw: 'TabsItem[]',
              },
              description: '',
            },
            height: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'48px'", computed: !1 },
            },
            alignment: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'left' | 'center' | 'right' | 'inherit' | 'justify'",
                elements: [
                  { name: 'literal', value: "'left'" },
                  { name: 'literal', value: "'center'" },
                  { name: 'literal', value: "'right'" },
                  { name: 'literal', value: "'inherit'" },
                  { name: 'literal', value: "'justify'" },
                ],
              },
              description: '',
              defaultValue: { value: "'left'", computed: !1 },
            },
            navname: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "''", computed: !1 },
            },
          },
        }
        const mockCurrentPathname = route => {
            window.history.pushState({}, '', route)
          },
          basicTabs = [
            { title: 'Home', route: '/home', trigger: 'route' },
            { title: 'About', route: '/about', trigger: 'route' },
            { title: 'Contact', route: '/contact', trigger: 'route' },
          ],
          tabs_stories = {
            title: 'Components/Tabs',
            component: components_Tabs,
            parameters: {
              a11y: { disable: !1 },
              docs: { description: { component: 'Storybook metadata' } },
            },
          },
          Basic = {
            args: {
              items: basicTabs,
              alignment: 'left',
              height: '48px',
              navname: 'basicNav',
            },
            play: ({ canvasElement }) => {
              mockCurrentPathname('/home')
              const canvas = (0, dist.ux)(canvasElement)
              ;(0, dist.E3)(canvas.getByText('Home')).toBeInTheDocument(),
                (0, dist.E3)(canvas.getByText('About')).toBeInTheDocument(),
                (0, dist.E3)(canvas.getByText('Contact')).toBeInTheDocument()
              const homeTab = canvas.getByRole('tab', { name: 'Home' })
              ;(0, dist.E3)(homeTab).toHaveAttribute('aria-selected', 'true')
            },
          },
          CenterAlignment = {
            args: {
              items: basicTabs,
              alignment: 'center',
              height: '50px',
              navname: 'centerNav',
            },
            play: ({ canvasElement }) => {
              mockCurrentPathname('/about')
              const aboutTab = (0, dist.ux)(canvasElement).getByRole('tab', {
                name: 'About',
              })
              ;(0, dist.E3)(aboutTab).toHaveAttribute('aria-selected', 'true')
            },
          },
          TabsWithBorders = {
            args: {
              items: [
                {
                  title: 'Tab One',
                  route: '/one',
                  trigger: 'route',
                  hasrightborder: 'true',
                },
                {
                  title: 'Tab Two',
                  route: '/two',
                  trigger: 'route',
                  hasleftborder: 'true',
                  hasrightborder: 'true',
                },
                { title: 'Tab Three', route: '/three', trigger: 'route' },
              ],
              alignment: 'center',
              navname: 'borderNav',
            },
            play: ({ canvasElement }) => {
              mockCurrentPathname('/two')
              const tabTwo = (0, dist.ux)(canvasElement).getByRole('tab', {
                name: 'Tab Two',
              })
              ;(0, dist.E3)(tabTwo).toHaveAttribute('aria-selected', 'true')
            },
          },
          MixedTriggers = {
            args: {
              items: [
                { title: 'Profile', route: '/profile', trigger: 'route' },
                {
                  title: 'Settings',
                  onClick: () => alert('Settings clicked!'),
                  trigger: 'onClick',
                },
                {
                  title: 'Logout',
                  onClick: () => alert('Logging out!'),
                  trigger: 'onClick',
                },
              ],
              alignment: 'right',
              navname: 'mixedNav',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              mockCurrentPathname('/profile')
              const profileTab = canvas.getByRole('tab', { name: 'Profile' })
              ;(0, dist.E3)(profileTab).toHaveAttribute('aria-selected', 'true')
              const settingsTab = canvas.getByRole('tab', { name: 'Settings' })
              await dist.Q4.click(settingsTab)
            },
          },
          SwitchRouteInteraction = {
            args: { items: basicTabs, alignment: 'left', navname: 'switchNav' },
            play: async ({ canvasElement }) => {
              mockCurrentPathname('/home')
              const canvas = (0, dist.ux)(canvasElement),
                homeTab = canvas.getByRole('tab', { name: 'Home' }),
                aboutTab = canvas.getByRole('tab', { name: 'About' })
              ;(0, dist.E3)(homeTab).toHaveAttribute('aria-selected', 'true'),
                await dist.Q4.click(aboutTab),
                (0, dist.E3)(aboutTab).toHaveAttribute('aria-selected', 'true')
            },
          },
          __namedExportsOrder = [
            'Basic',
            'CenterAlignment',
            'TabsWithBorders',
            'MixedTriggers',
            'SwitchRouteInteraction',
          ]
        ;(Basic.parameters = {
          ...Basic.parameters,
          docs: {
            ...Basic.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    items: basicTabs,\n    alignment: 'left',\n    height: '48px',\n    navname: 'basicNav'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    mockCurrentPathname('/home');\n    const canvas = within(canvasElement);\n    // We confirm we see \"Home\", \"About\", \"Contact\"\n    expect(canvas.getByText('Home')).toBeInTheDocument();\n    expect(canvas.getByText('About')).toBeInTheDocument();\n    expect(canvas.getByText('Contact')).toBeInTheDocument();\n\n    // \"Home\" should be selected if the route is \"/home\"\n    const homeTab = canvas.getByRole('tab', {\n      name: 'Home'\n    });\n    expect(homeTab).toHaveAttribute('aria-selected', 'true');\n  }\n}",
              ...Basic.parameters?.docs?.source,
            },
            description: {
              story: '1) Basic usage\r\n   No userEvent => remove `async`.',
              ...Basic.parameters?.docs?.description,
            },
          },
        }),
          (CenterAlignment.parameters = {
            ...CenterAlignment.parameters,
            docs: {
              ...CenterAlignment.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    items: basicTabs,\n    alignment: 'center',\n    height: '50px',\n    navname: 'centerNav'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    mockCurrentPathname('/about');\n    const canvas = within(canvasElement);\n    // \"About\" should be selected\n    const aboutTab = canvas.getByRole('tab', {\n      name: 'About'\n    });\n    expect(aboutTab).toHaveAttribute('aria-selected', 'true');\n  }\n}",
                ...CenterAlignment.parameters?.docs?.source,
              },
              description: {
                story:
                  '2) Center alignment\r\n   No userEvent => remove `async`.',
                ...CenterAlignment.parameters?.docs?.description,
              },
            },
          }),
          (TabsWithBorders.parameters = {
            ...TabsWithBorders.parameters,
            docs: {
              ...TabsWithBorders.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    items: withBordersTabs,\n    alignment: 'center',\n    navname: 'borderNav'\n  },\n  play: ({\n    canvasElement\n  }) => {\n    mockCurrentPathname('/two');\n    const canvas = within(canvasElement);\n    // \"Tab Two\" is selected\n    const tabTwo = canvas.getByRole('tab', {\n      name: 'Tab Two'\n    });\n    expect(tabTwo).toHaveAttribute('aria-selected', 'true');\n  }\n}",
                ...TabsWithBorders.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Tabs with left/right borders on certain items\r\n   No userEvent => remove `async`.',
                ...TabsWithBorders.parameters?.docs?.description,
              },
            },
          }),
          (MixedTriggers.parameters = {
            ...MixedTriggers.parameters,
            docs: {
              ...MixedTriggers.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    items: mixedTriggerTabs,\n    alignment: 'right',\n    navname: 'mixedNav'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    // We'll not set a route, so none is initially selected\n    const canvas = within(canvasElement);\n\n    // \"Profile\" is route => if we set mock pathname to /profile, it becomes selected\n    mockCurrentPathname('/profile');\n\n    // \"Profile\" should be selected\n    const profileTab = canvas.getByRole('tab', {\n      name: 'Profile'\n    });\n    expect(profileTab).toHaveAttribute('aria-selected', 'true');\n\n    // \"Settings\" has onClick => let's test it\n    const settingsTab = canvas.getByRole('tab', {\n      name: 'Settings'\n    });\n    await userEvent.click(settingsTab);\n    // We can't confirm the alert in the test runner, but at least no error thrown\n  }\n}",
                ...MixedTriggers.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) Mixed triggers: some route-based, some onClick\r\n   Uses userEvent => keep `async`.',
                ...MixedTriggers.parameters?.docs?.description,
              },
            },
          }),
          (SwitchRouteInteraction.parameters = {
            ...SwitchRouteInteraction.parameters,
            docs: {
              ...SwitchRouteInteraction.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    items: basicTabs,\n    alignment: 'left',\n    navname: 'switchNav'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    // Start with \"/home\"\n    mockCurrentPathname('/home');\n    const canvas = within(canvasElement);\n    const homeTab = canvas.getByRole('tab', {\n      name: 'Home'\n    });\n    const aboutTab = canvas.getByRole('tab', {\n      name: 'About'\n    });\n\n    // \"Home\" is selected\n    expect(homeTab).toHaveAttribute('aria-selected', 'true');\n\n    // Click \"About\"\n    await userEvent.click(aboutTab);\n    // Now window.location.href changes to \"/about\"\n\n    // Re-check \"About\" is \"aria-selected\"\n    expect(aboutTab).toHaveAttribute('aria-selected', 'true');\n  }\n}",
                ...SwitchRouteInteraction.parameters?.docs?.source,
              },
              description: {
                story:
                  '5) Interaction: switching routes\r\n   Uses userEvent => keep `async`.',
                ...SwitchRouteInteraction.parameters?.docs?.description,
              },
            },
          })
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
