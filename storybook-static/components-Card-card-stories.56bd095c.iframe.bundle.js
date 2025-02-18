'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [5457],
    {
      './src/components/Card/card.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            DefaultBasic: () => DefaultBasic,
            DefaultWithImageLeftFavBreadcrumb: () =>
              DefaultWithImageLeftFavBreadcrumb,
            DefaultWithImageTop: () => DefaultWithImageTop,
            DefaultWithStepper: () => DefaultWithStepper,
            DetailedPricingSummaryVariant: () => DetailedPricingSummaryVariant,
            InventoryVariant: () => InventoryVariant,
            ProductSummaryVariant: () => ProductSummaryVariant,
            ProductVariant: () => ProductVariant,
            SimplePricingSummaryVariant: () => SimplePricingSummaryVariant,
            TaskVariant: () => TaskVariant,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => __WEBPACK_DEFAULT_EXPORT__,
          })
        var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            './src/components/Card/index.tsx'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const __WEBPACK_DEFAULT_EXPORT__ = {
            title: 'Components/Card',
            component: _index__WEBPACK_IMPORTED_MODULE_1__.A,
            parameters: { a11y: { disable: !1 } },
            argTypes: {
              variant: {
                control: { type: 'select' },
                options: [
                  'default',
                  'inventory',
                  'pricingsummary',
                  'detailedpricingsummary',
                  'product',
                  'productsummary',
                  'task',
                ],
              },
            },
          },
          sampleImage =
            'https://via.placeholder.com/300x200.png?text=Sample+Image',
          DefaultBasic = {
            name: 'Default (Basic)',
            args: {
              variant: 'default',
              title: 'Basic Default Card',
              body: 'This is a basic default card with only title and body.',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Basic Default Card')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText(
                    'This is a basic default card with only title and body.'
                  )
                ).toBeInTheDocument()
            },
          },
          DefaultWithImageTop = {
            name: 'Default (Image on Top)',
            args: {
              variant: 'default',
              title: 'Card with Top Image',
              body: 'This card has an image at the top position.',
              image: sampleImage,
              imagePosition: 'top',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Card with Top Image')
              ).toBeInTheDocument()
            },
          },
          DefaultWithImageLeftFavBreadcrumb = {
            name: 'Default (Image Left + Favorite + Breadcrumb)',
            args: {
              variant: 'default',
              title: 'Card with Image Left',
              body: 'Image is on the left, plus favorite icon and breadcrumb links.',
              image: sampleImage,
              imagePosition: 'left',
              favoriteEnabled: !0,
              breadcrumbEnabled: !0,
              linkEnabled: !0,
              parentText: 'Dashboard',
              parentLink: '/dashboard',
              childText: 'Section',
              childLink: '/dashboard/section',
              grandchildLink: '/dashboard/section/item',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Card with Image Left')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Dashboard')
                ).toBeInTheDocument()
            },
          },
          DefaultWithStepper = {
            name: 'Default (with Stepper)',
            args: {
              variant: 'default',
              title: 'Card with Stepper',
              body: 'A stepper is displayed below the body.',
              stepperEnabled: !0,
              stepperActiveStep: 1,
              stepperSteps: [
                {
                  stepNumber: 1,
                  label: 'Step One',
                  stepLink: '#step1',
                  status: 'completed',
                },
                {
                  stepNumber: 2,
                  label: 'Step Two',
                  stepLink: '#step2',
                  status: 'active',
                },
                {
                  stepNumber: 3,
                  label: 'Step Three',
                  stepLink: '#step3',
                  status: 'inactive',
                },
              ],
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Card with Stepper')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Step One')
                ).toBeInTheDocument()
            },
          },
          InventoryVariant = {
            args: {
              variant: 'inventory',
              title: 'Inventory Card Title',
              image: sampleImage,
              inventoryProps: {
                license: 'Single-Use',
                developmentUse: 'Yes',
                productionUse: 'Yes',
                updates: '3 months',
                support: 'Email only',
                price: '$100.00',
                quantity: 2,
              },
              width: '600px',
              height: '240px',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText(/License: Single-Use/i)
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText(/2 x \$100.00/)
                ).toBeInTheDocument()
            },
          },
          SimplePricingSummaryVariant = {
            args: {
              variant: 'pricingsummary',
              pricingSummaryProps: {
                subtotal: 'USD 200.00',
                total: 'USD 250.00',
                proceedText: 'Proceed',
                taxText: 'Tax might apply.',
                discountText: 'Coupons can be applied next step.',
                onProceed: () => {
                  alert('Proceed clicked!')
                },
              },
              width: '400px',
              height: 'auto',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('USD 200.00')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('USD 250.00')
                ).toBeInTheDocument()
              const proceedButton = canvas.getByRole('button', {
                name: 'Proceed',
              })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                proceedButton
              )
            },
          },
          DetailedPricingSummaryVariant = {
            args: {
              variant: 'detailedpricingsummary',
              detailedPricingSummaryProps: {
                product: 'Sample Product × 2',
                vendor: 'Example Vendor LLC',
                vendorPrice: '$180.00',
                subtotal: '$180.00',
                vat: '$0.00',
                total: '$180.00',
                proceedText: 'Confirm Purchase',
                onProceed: () => {
                  alert('Confirm Purchase clicked!')
                },
              },
              width: '400px',
              height: 'auto',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Sample Product × 2')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Example Vendor LLC')
                ).toBeInTheDocument()
              const confirmBtn = canvas.getByRole('button', {
                name: /confirm purchase/i,
              })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                confirmBtn
              )
            },
          },
          ProductVariant = {
            args: {
              variant: 'product',
              productProps: {
                title: 'Awesome Product',
                featuredescriptions: [
                  'Feature #1: Speed',
                  'Feature #2: Reliability',
                  'Feature #3: Scalability',
                ],
                releaseDate: '2023-01-01',
                createdBy: 'MyCompany',
                onBuy: () => alert('Buy now clicked'),
                onLivePreview: () => alert('Live preview clicked'),
                onContact: () => alert('Contact clicked'),
              },
              width: '500px',
              height: 'auto',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('✓ Feature #1: Speed')
              ).toBeInTheDocument()
              const buyBtn = canvas.getByRole('button', { name: 'Buy now' })
              await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                buyBtn
              )
            },
          },
          ProductSummaryVariant = {
            args: {
              variant: 'productsummary',
              title: 'Amazing SaaS Product',
              body: 'Choose between monthly or annual billing.',
              productSummaryProps: {
                annualPrice: '99.99',
                monthlyPrice: '9.99',
                button1Props: {
                  text: 'Get Started',
                  backgroundcolor: 'black',
                  fontcolor: 'white',
                  onClick: () => alert('Get Started clicked!'),
                },
                button2Props: {
                  text: 'More Info',
                  backgroundcolor: '#0066cc',
                  fontcolor: 'white',
                  onClick: () => alert('More Info clicked!'),
                },
              },
              width: '450px',
              height: 'auto',
            },
            play: async ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('Amazing SaaS Product')
              ).toBeInTheDocument()
              const toggleSwitch = canvas.getByRole('checkbox')
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                toggleSwitch
              ).toBeChecked(),
                await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(
                  toggleSwitch
                ),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  toggleSwitch
                ).not.toBeChecked()
            },
          },
          TaskVariant = {
            args: {
              variant: 'task',
              taskProps: {
                title: 'My Task',
                description: 'Complete the documentation.',
                checked: !1,
                onCheck: e => {
                  alert(`Checkbox changed! Now: ${e.target.checked}`)
                },
                draggable: !0,
                onDragStart: () => console.log('Drag start'),
                onDragOver: () => console.log('Drag over'),
                onDrop: () => console.log('Drop'),
              },
              width: '400px',
              height: 'auto',
            },
            play: ({ canvasElement }) => {
              const canvas = (0,
              _storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement)
              ;(0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                canvas.getByText('My Task')
              ).toBeInTheDocument(),
                (0, _storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(
                  canvas.getByText('Complete the documentation.')
                ).toBeInTheDocument()
            },
          },
          __namedExportsOrder = [
            'DefaultBasic',
            'DefaultWithImageTop',
            'DefaultWithImageLeftFavBreadcrumb',
            'DefaultWithStepper',
            'InventoryVariant',
            'SimplePricingSummaryVariant',
            'DetailedPricingSummaryVariant',
            'ProductVariant',
            'ProductSummaryVariant',
            'TaskVariant',
          ]
        ;(DefaultBasic.parameters = {
          ...DefaultBasic.parameters,
          docs: {
            ...DefaultBasic.parameters?.docs,
            source: {
              originalSource:
                "{\n  name: 'Default (Basic)',\n  args: {\n    variant: 'default',\n    title: 'Basic Default Card',\n    body: 'This is a basic default card with only title and body.'\n  } as CardProps,\n  // No user actions => remove 'async'\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Title should be visible\n    expect(canvas.getByText('Basic Default Card')).toBeInTheDocument();\n    // Body should be visible\n    expect(canvas.getByText('This is a basic default card with only title and body.')).toBeInTheDocument();\n  }\n}",
              ...DefaultBasic.parameters?.docs?.source,
            },
            description: {
              story: '1) Default Card - Basic',
              ...DefaultBasic.parameters?.docs?.description,
            },
          },
        }),
          (DefaultWithImageTop.parameters = {
            ...DefaultWithImageTop.parameters,
            docs: {
              ...DefaultWithImageTop.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'Default (Image on Top)',\n  args: {\n    variant: 'default',\n    title: 'Card with Top Image',\n    body: 'This card has an image at the top position.',\n    image: sampleImage,\n    imagePosition: 'top'\n  } as CardProps,\n  // No user actions => remove 'async'\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Title should be visible\n    expect(canvas.getByText('Card with Top Image')).toBeInTheDocument();\n  }\n}",
                ...DefaultWithImageTop.parameters?.docs?.source,
              },
              description: {
                story: '2) Default with an image (top)',
                ...DefaultWithImageTop.parameters?.docs?.description,
              },
            },
          }),
          (DefaultWithImageLeftFavBreadcrumb.parameters = {
            ...DefaultWithImageLeftFavBreadcrumb.parameters,
            docs: {
              ...DefaultWithImageLeftFavBreadcrumb.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'Default (Image Left + Favorite + Breadcrumb)',\n  args: {\n    variant: 'default',\n    title: 'Card with Image Left',\n    body: 'Image is on the left, plus favorite icon and breadcrumb links.',\n    image: sampleImage,\n    imagePosition: 'left',\n    favoriteEnabled: true,\n    breadcrumbEnabled: true,\n    linkEnabled: true,\n    parentText: 'Dashboard',\n    parentLink: '/dashboard',\n    childText: 'Section',\n    childLink: '/dashboard/section',\n    grandchildLink: '/dashboard/section/item'\n  } as CardProps,\n  // No user actions => remove 'async'\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Title and body\n    expect(canvas.getByText('Card with Image Left')).toBeInTheDocument();\n    // We see \"Dashboard\" breadcrumb\n    expect(canvas.getByText('Dashboard')).toBeInTheDocument();\n    // Check favorite icon presence if needed\n  }\n}",
                ...DefaultWithImageLeftFavBreadcrumb.parameters?.docs?.source,
              },
              description: {
                story:
                  '3) Default with an image (left) + favorite + breadcrumb',
                ...DefaultWithImageLeftFavBreadcrumb.parameters?.docs
                  ?.description,
              },
            },
          }),
          (DefaultWithStepper.parameters = {
            ...DefaultWithStepper.parameters,
            docs: {
              ...DefaultWithStepper.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'Default (with Stepper)',\n  args: {\n    variant: 'default',\n    title: 'Card with Stepper',\n    body: 'A stepper is displayed below the body.',\n    stepperEnabled: true,\n    stepperActiveStep: 1,\n    stepperSteps: [{\n      stepNumber: 1,\n      label: 'Step One',\n      stepLink: '#step1',\n      status: 'completed'\n    }, {\n      stepNumber: 2,\n      label: 'Step Two',\n      stepLink: '#step2',\n      status: 'active'\n    }, {\n      stepNumber: 3,\n      label: 'Step Three',\n      stepLink: '#step3',\n      status: 'inactive'\n    }]\n  } as CardProps,\n  // No user actions => remove 'async'\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Title\n    expect(canvas.getByText('Card with Stepper')).toBeInTheDocument();\n    // Step One label\n    expect(canvas.getByText('Step One')).toBeInTheDocument();\n  }\n}",
                ...DefaultWithStepper.parameters?.docs?.source,
              },
              description: {
                story:
                  '4) Default with Stepper\r\n   We must provide stepNumber, label, stepLink, status for each step',
                ...DefaultWithStepper.parameters?.docs?.description,
              },
            },
          }),
          (InventoryVariant.parameters = {
            ...InventoryVariant.parameters,
            docs: {
              ...InventoryVariant.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    variant: 'inventory',\n    title: 'Inventory Card Title',\n    image: sampleImage,\n    inventoryProps: {\n      license: 'Single-Use',\n      developmentUse: 'Yes',\n      productionUse: 'Yes',\n      updates: '3 months',\n      support: 'Email only',\n      price: '$100.00',\n      quantity: 2\n    },\n    width: '600px',\n    height: '240px'\n  } as CardProps,\n  // No user actions => remove 'async'\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Check for license text\n    expect(canvas.getByText(/License: Single-Use/i)).toBeInTheDocument();\n    // Price & quantity\n    expect(canvas.getByText(/2 x \\$100.00/)).toBeInTheDocument();\n  }\n}",
                ...InventoryVariant.parameters?.docs?.source,
              },
              description: {
                story: '5) Inventory variant',
                ...InventoryVariant.parameters?.docs?.description,
              },
            },
          }),
          (SimplePricingSummaryVariant.parameters = {
            ...SimplePricingSummaryVariant.parameters,
            docs: {
              ...SimplePricingSummaryVariant.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    variant: 'pricingsummary',\n    pricingSummaryProps: {\n      subtotal: 'USD 200.00',\n      total: 'USD 250.00',\n      proceedText: 'Proceed',\n      taxText: 'Tax might apply.',\n      discountText: 'Coupons can be applied next step.',\n      onProceed: () => {\n        alert('Proceed clicked!');\n      }\n    },\n    width: '400px',\n    height: 'auto'\n  } as CardProps,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Subtotal check\n    expect(canvas.getByText('USD 200.00')).toBeInTheDocument();\n    // Total check\n    expect(canvas.getByText('USD 250.00')).toBeInTheDocument();\n\n    // Click \"Proceed\"\n    const proceedButton = canvas.getByRole('button', {\n      name: 'Proceed'\n    });\n    await userEvent.click(proceedButton);\n  }\n}",
                ...SimplePricingSummaryVariant.parameters?.docs?.source,
              },
              description: {
                story:
                  "6) Pricing Summary variant (SimplePricingSummary)\r\n   We DO use userEvent, so keep 'async' and use 'await'.",
                ...SimplePricingSummaryVariant.parameters?.docs?.description,
              },
            },
          }),
          (DetailedPricingSummaryVariant.parameters = {
            ...DetailedPricingSummaryVariant.parameters,
            docs: {
              ...DetailedPricingSummaryVariant.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    variant: 'detailedpricingsummary',\n    detailedPricingSummaryProps: {\n      product: 'Sample Product × 2',\n      vendor: 'Example Vendor LLC',\n      vendorPrice: '$180.00',\n      subtotal: '$180.00',\n      vat: '$0.00',\n      total: '$180.00',\n      proceedText: 'Confirm Purchase',\n      onProceed: () => {\n        alert('Confirm Purchase clicked!');\n      }\n    },\n    width: '400px',\n    height: 'auto'\n  } as CardProps,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Product check\n    expect(canvas.getByText('Sample Product × 2')).toBeInTheDocument();\n    // Vendor check\n    expect(canvas.getByText('Example Vendor LLC')).toBeInTheDocument();\n\n    // Try button\n    const confirmBtn = canvas.getByRole('button', {\n      name: /confirm purchase/i\n    });\n    await userEvent.click(confirmBtn);\n  }\n}",
                ...DetailedPricingSummaryVariant.parameters?.docs?.source,
              },
              description: {
                story:
                  "7) Detailed Pricing Summary variant\r\n   We use userEvent, so keep 'async' and 'await'.",
                ...DetailedPricingSummaryVariant.parameters?.docs?.description,
              },
            },
          }),
          (ProductVariant.parameters = {
            ...ProductVariant.parameters,
            docs: {
              ...ProductVariant.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    variant: 'product',\n    productProps: {\n      title: 'Awesome Product',\n      featuredescriptions: ['Feature #1: Speed', 'Feature #2: Reliability', 'Feature #3: Scalability'],\n      releaseDate: '2023-01-01',\n      createdBy: 'MyCompany',\n      onBuy: () => alert('Buy now clicked'),\n      onLivePreview: () => alert('Live preview clicked'),\n      onContact: () => alert('Contact clicked')\n    },\n    width: '500px',\n    height: 'auto'\n  } as CardProps,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Confirm features\n    expect(canvas.getByText('✓ Feature #1: Speed')).toBeInTheDocument();\n    // Try Buy Now\n    const buyBtn = canvas.getByRole('button', {\n      name: 'Buy now'\n    });\n    await userEvent.click(buyBtn);\n  }\n}",
                ...ProductVariant.parameters?.docs?.source,
              },
              description: {
                story:
                  "8) Product variant\r\n   We use userEvent, so keep 'async' and 'await'.",
                ...ProductVariant.parameters?.docs?.description,
              },
            },
          }),
          (ProductSummaryVariant.parameters = {
            ...ProductSummaryVariant.parameters,
            docs: {
              ...ProductSummaryVariant.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    variant: 'productsummary',\n    title: 'Amazing SaaS Product',\n    body: 'Choose between monthly or annual billing.',\n    productSummaryProps: {\n      annualPrice: '99.99',\n      monthlyPrice: '9.99',\n      button1Props: {\n        text: 'Get Started',\n        backgroundcolor: 'black',\n        fontcolor: 'white',\n        onClick: () => alert('Get Started clicked!')\n      },\n      button2Props: {\n        text: 'More Info',\n        backgroundcolor: '#0066cc',\n        fontcolor: 'white',\n        onClick: () => alert('More Info clicked!')\n      }\n    },\n    width: '450px',\n    height: 'auto'\n  } as CardProps,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Check for monthly vs annual text\n    expect(canvas.getByText('Amazing SaaS Product')).toBeInTheDocument();\n\n    // The toggle Switch is displayed with role='checkbox'\n    const toggleSwitch = canvas.getByRole('checkbox');\n    // Initially \"annual\" is selected => Switch is checked\n    expect(toggleSwitch).toBeChecked();\n\n    // Switch to monthly\n    await userEvent.click(toggleSwitch);\n    // Now it should be unchecked\n    expect(toggleSwitch).not.toBeChecked();\n  }\n}",
                ...ProductSummaryVariant.parameters?.docs?.source,
              },
              description: {
                story:
                  "9) Product Summary variant\r\n   We use userEvent to toggle monthly/annual, so keep 'async' and 'await'.",
                ...ProductSummaryVariant.parameters?.docs?.description,
              },
            },
          }),
          (TaskVariant.parameters = {
            ...TaskVariant.parameters,
            docs: {
              ...TaskVariant.parameters?.docs,
              source: {
                originalSource:
                  "{\n  args: {\n    variant: 'task',\n    taskProps: {\n      title: 'My Task',\n      description: 'Complete the documentation.',\n      checked: false,\n      onCheck: e => {\n        alert(`Checkbox changed! Now: ${e.target.checked}`);\n      },\n      draggable: true,\n      onDragStart: () => console.log('Drag start'),\n      onDragOver: () => console.log('Drag over'),\n      onDrop: () => console.log('Drop')\n    },\n    width: '400px',\n    height: 'auto'\n  } as CardProps,\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    // Check for text\n    expect(canvas.getByText('My Task')).toBeInTheDocument();\n    expect(canvas.getByText('Complete the documentation.')).toBeInTheDocument();\n\n    // If your TaskCard has a checkbox we want to test, we could do:\n    // const checkbox = canvas.getByRole('checkbox')\n    // userEvent.click(checkbox) // No async needed if we don't await\n    // expect(checkbox).toBeChecked()\n  }\n}",
                ...TaskVariant.parameters?.docs?.source,
              },
              description: {
                story:
                  "10) Task variant\r\n    No user events => remove 'async'",
                ...TaskVariant.parameters?.docs?.description,
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
