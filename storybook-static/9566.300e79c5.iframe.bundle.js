'use strict'
;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [9566],
    {
      './src/components/Card/index.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { A: () => components_Card })
        var jsx_runtime = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          Box = __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          Paper = __webpack_require__(
            './node_modules/@mui/material/Paper/Paper.js'
          ),
          Typography = __webpack_require__(
            './src/components/Typography/index.tsx'
          ),
          next_link = __webpack_require__('./node_modules/next/link.js'),
          link_default = __webpack_require__.n(next_link)
        const InventoryCard = ({
            title,
            image,
            height,
            license,
            developmentUse,
            productionUse,
            updates,
            support,
            price,
            quantity,
          }) =>
            (0, jsx_runtime.jsxs)(Paper.A, {
              elevation: 1,
              sx: {
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                border: '1px solid #e8e8e8',
                minHeight: height,
              },
              children: [
                (0, jsx_runtime.jsx)(Box.A, {
                  sx: {
                    width: '200px',
                    minHeight: '100%',
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    flexShrink: 0,
                  },
                }),
                (0, jsx_runtime.jsxs)(Box.A, {
                  sx: {
                    padding: '16px',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  },
                  children: [
                    (0, jsx_runtime.jsxs)(Box.A, {
                      sx: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                      },
                      children: [
                        title &&
                          (0, jsx_runtime.jsx)(Typography.A, {
                            text: title,
                            fontcolor: 'black',
                            fontvariant: 'merrih5',
                          }),
                        (0, jsx_runtime.jsx)(Box.A, {
                          sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                          },
                          children: (0, jsx_runtime.jsx)(Typography.A, {
                            text: `${quantity} x ${price}`,
                            fontcolor: 'black',
                            fontvariant: 'merriparagraph',
                          }),
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(Box.A, {
                      sx: { marginTop: 'auto', paddingBottom: '10px' },
                      children: [
                        (0, jsx_runtime.jsx)(Box.A, {
                          sx: { marginTop: '8px' },
                          children: (0, jsx_runtime.jsx)(Typography.A, {
                            text: `License: ${license || ''}`,
                            fontcolor: 'black',
                            fontvariant: 'merriparagraph',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(Box.A, {
                          sx: { marginTop: '4px' },
                          children: (0, jsx_runtime.jsx)(Typography.A, {
                            text: `Development use: ${developmentUse || ''}`,
                            fontcolor: 'black',
                            fontvariant: 'merriparagraph',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(Box.A, {
                          sx: { marginTop: '4px' },
                          children: (0, jsx_runtime.jsx)(Typography.A, {
                            text: `Production use: ${productionUse || ''}`,
                            fontcolor: 'black',
                            fontvariant: 'merriparagraph',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(Box.A, {
                          sx: { marginTop: '4px' },
                          children: (0, jsx_runtime.jsx)(Typography.A, {
                            text: `Updates: ${updates || ''}`,
                            fontcolor: 'black',
                            fontvariant: 'merriparagraph',
                          }),
                        }),
                        (0, jsx_runtime.jsx)(Box.A, {
                          sx: { marginTop: '4px' },
                          children: (0, jsx_runtime.jsx)(Typography.A, {
                            text: `Support: ${support || ''}`,
                            fontcolor: 'black',
                            fontvariant: 'merriparagraph',
                          }),
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(Box.A, {
                      sx: { marginTop: 'auto', alignSelf: 'flex-end' },
                      children: (0, jsx_runtime.jsx)(link_default(), {
                        href: '#',
                        passHref: !0,
                        children: (0, jsx_runtime.jsx)(Typography.A, {
                          text: 'Remove',
                          fontcolor: 'black',
                          fontvariant: 'merriparagraph',
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          inventory = InventoryCard
        InventoryCard.__docgenInfo = {
          description:
            "InventoryCard component renders a card displaying detailed information about an inventory item.\nIt includes an image, title, price, quantity, and various details about the item's usage and support.",
          methods: [],
          displayName: 'InventoryCard',
          props: {
            title: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Title of the inventory item',
            },
            image: {
              required: !1,
              tsType: { name: 'string' },
              description: 'URL or path of the image to display',
            },
            height: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'string | number',
                elements: [{ name: 'string' }, { name: 'number' }],
              },
              description: '',
            },
            license: {
              required: !1,
              tsType: { name: 'string' },
              description: 'License information for the item',
            },
            developmentUse: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Development use information',
            },
            productionUse: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Production use information',
            },
            updates: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Update information for the item',
            },
            support: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Support information for the item',
            },
            price: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Price of the item',
            },
            quantity: {
              required: !1,
              tsType: { name: 'number' },
              description: 'Quantity of the item',
            },
          },
        }
        var Button = __webpack_require__('./src/components/Button/index.tsx')
        const SimplePricingSummary = ({
            height,
            subtotal = 'USD 180.00',
            total = 'USD 180.00',
            proceedText = 'Proceed to checkout',
            taxText = 'Taxes may apply before placing an order.',
            discountText = 'Coupons and discounts will apply on the next step.',
            onProceed,
          }) =>
            (0, jsx_runtime.jsxs)(Paper.A, {
              elevation: 1,
              sx: {
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                border: '1px solid #e8e8e8',
                minHeight: height,
                padding: '16px',
              },
              children: [
                (0, jsx_runtime.jsxs)(Box.A, {
                  sx: { display: 'flex', flexDirection: 'column' },
                  children: [
                    (0, jsx_runtime.jsxs)(Box.A, {
                      sx: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      },
                      children: [
                        (0, jsx_runtime.jsx)(Typography.A, {
                          text: 'Subtotal',
                          fontcolor: 'black',
                          fontvariant: 'merriparagraph',
                        }),
                        (0, jsx_runtime.jsx)(Typography.A, {
                          text: subtotal,
                          fontcolor: 'black',
                          fontvariant: 'merriparagraph',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(Box.A, {
                      sx: {
                        borderTop: '1px solid #e8e8e8',
                        marginTop: '8px',
                        paddingTop: '8px',
                      },
                      children: (0, jsx_runtime.jsxs)(Box.A, {
                        sx: {
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        },
                        children: [
                          (0, jsx_runtime.jsx)(Typography.A, {
                            text: 'TOTAL',
                            fontcolor: 'black',
                            fontvariant: 'merrih5',
                          }),
                          (0, jsx_runtime.jsx)(Typography.A, {
                            text: total,
                            fontcolor: 'black',
                            fontvariant: 'merrih5',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(Box.A, {
                  sx: { marginTop: '16px' },
                  children: (0, jsx_runtime.jsx)(Button.A, {
                    text: proceedText,
                    variant: 'contained',
                    backgroundcolor: 'black',
                    fontcolor: 'white',
                    fontvariant: 'merriparagraph',
                    onClick: onProceed,
                    width: '100%',
                  }),
                }),
                (0, jsx_runtime.jsx)(Typography.A, {
                  text: taxText,
                  fontcolor: 'black',
                  fontvariant: 'merriparagraph',
                  sx: { marginTop: '8px', fontSize: '12px' },
                }),
                (0, jsx_runtime.jsx)(Typography.A, {
                  text: discountText,
                  fontcolor: 'black',
                  fontvariant: 'merriparagraph',
                  sx: { marginTop: '4px', fontSize: '12px' },
                }),
              ],
            }),
          simplepricingsummary = SimplePricingSummary
        SimplePricingSummary.__docgenInfo = {
          description:
            'SimplePricingSummary component renders a card displaying a simple pricing summary,\nincluding subtotal, total, proceed button, and additional information about taxes and discounts.',
          methods: [],
          displayName: 'SimplePricingSummary',
          props: {
            height: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'string | number',
                elements: [{ name: 'string' }, { name: 'number' }],
              },
              description: 'Height of the pricing summary card',
            },
            subtotal: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Subtotal amount',
              defaultValue: { value: "'USD 180.00'", computed: !1 },
            },
            total: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Total amount',
              defaultValue: { value: "'USD 180.00'", computed: !1 },
            },
            proceedText: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Text for the proceed button',
              defaultValue: { value: "'Proceed to checkout'", computed: !1 },
            },
            taxText: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Text explaining tax information',
              defaultValue: {
                value: "'Taxes may apply before placing an order.'",
                computed: !1,
              },
            },
            discountText: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Text explaining discount information',
              defaultValue: {
                value: "'Coupons and discounts will apply on the next step.'",
                computed: !1,
              },
            },
            onProceed: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: 'Callback function for the proceed button',
            },
          },
        }
        const DetailedPricingSummary = ({
            height,
            product = 'Goobs Repo Unlimited × 1',
            vendor = 'Technologies Unlimited',
            vendorPrice = '$180.00',
            subtotal = '$180.00',
            vat = '$0.00',
            total = '$180.00',
            proceedText = 'Proceed to checkout',
            onProceed,
          }) =>
            (0, jsx_runtime.jsxs)(Paper.A, {
              elevation: 1,
              sx: {
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                border: '1px solid #e8e8e8',
                minHeight: height,
                padding: '16px',
              },
              children: [
                (0, jsx_runtime.jsxs)(Box.A, {
                  sx: { display: 'flex', flexDirection: 'column' },
                  children: [
                    (0, jsx_runtime.jsx)(Typography.A, {
                      text: 'Product',
                      fontcolor: 'black',
                      fontvariant: 'merriparagraph',
                    }),
                    (0, jsx_runtime.jsx)(Typography.A, {
                      text: product,
                      fontcolor: 'black',
                      fontvariant: 'merriparagraph',
                      sx: { marginTop: '8px' },
                    }),
                    (0, jsx_runtime.jsxs)(Box.A, {
                      sx: { marginTop: '16px' },
                      children: [
                        (0, jsx_runtime.jsxs)(Box.A, {
                          sx: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          },
                          children: [
                            (0, jsx_runtime.jsx)(Typography.A, {
                              text: 'Vendor:',
                              fontcolor: 'black',
                              fontvariant: 'merriparagraph',
                            }),
                            (0, jsx_runtime.jsx)(Typography.A, {
                              text: vendor,
                              fontcolor: 'black',
                              fontvariant: 'merriparagraph',
                            }),
                          ],
                        }),
                        (0, jsx_runtime.jsx)(Box.A, {
                          sx: {
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                          },
                          children: (0, jsx_runtime.jsx)(Typography.A, {
                            text: vendorPrice,
                            fontcolor: 'black',
                            fontvariant: 'merriparagraph',
                          }),
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(Box.A, {
                      sx: { marginTop: '16px' },
                      children: [
                        (0, jsx_runtime.jsx)(Typography.A, {
                          text: 'Subtotal',
                          fontcolor: 'black',
                          fontvariant: 'merriparagraph',
                        }),
                        (0, jsx_runtime.jsx)(Typography.A, {
                          text: subtotal,
                          fontcolor: 'black',
                          fontvariant: 'merriparagraph',
                          align: 'right',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)(Box.A, {
                      sx: { marginTop: '8px' },
                      children: [
                        (0, jsx_runtime.jsx)(Typography.A, {
                          text: 'VAT',
                          fontcolor: 'black',
                          fontvariant: 'merriparagraph',
                        }),
                        (0, jsx_runtime.jsx)(Typography.A, {
                          text: vat,
                          fontcolor: 'black',
                          fontvariant: 'merriparagraph',
                          align: 'right',
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)(Box.A, {
                      sx: {
                        borderTop: '1px solid #e8e8e8',
                        marginTop: '8px',
                        paddingTop: '8px',
                      },
                      children: (0, jsx_runtime.jsxs)(Box.A, {
                        sx: {
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        },
                        children: [
                          (0, jsx_runtime.jsx)(Typography.A, {
                            text: 'Total',
                            fontcolor: 'black',
                            fontvariant: 'merrih5',
                          }),
                          (0, jsx_runtime.jsx)(Typography.A, {
                            text: total,
                            fontcolor: 'black',
                            fontvariant: 'merrih5',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(Box.A, {
                  sx: { marginTop: '16px' },
                  children: (0, jsx_runtime.jsx)(Button.A, {
                    text: proceedText,
                    variant: 'contained',
                    backgroundcolor: 'black',
                    fontcolor: 'white',
                    fontvariant: 'merriparagraph',
                    onClick: onProceed,
                    width: '100%',
                  }),
                }),
              ],
            }),
          detailedpricingsummary = DetailedPricingSummary
        DetailedPricingSummary.__docgenInfo = {
          description:
            'DetailedPricingSummary component renders a card with detailed pricing information.\nIt displays product details, vendor information, subtotal, VAT, total, and a proceed button.',
          methods: [],
          displayName: 'DetailedPricingSummary',
          props: {
            width: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Width of the pricing summary card',
            },
            height: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'string | number',
                elements: [{ name: 'string' }, { name: 'number' }],
              },
              description: 'Height of the pricing summary card',
            },
            product: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Description of the product',
              defaultValue: {
                value: "'Goobs Repo Unlimited × 1'",
                computed: !1,
              },
            },
            vendor: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Name of the vendor',
              defaultValue: { value: "'Technologies Unlimited'", computed: !1 },
            },
            vendorPrice: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Price from the vendor',
              defaultValue: { value: "'$180.00'", computed: !1 },
            },
            subtotal: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Subtotal of the order',
              defaultValue: { value: "'$180.00'", computed: !1 },
            },
            vat: {
              required: !1,
              tsType: { name: 'string' },
              description: 'VAT amount',
              defaultValue: { value: "'$0.00'", computed: !1 },
            },
            total: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Total price of the order',
              defaultValue: { value: "'$180.00'", computed: !1 },
            },
            proceedText: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Text for the proceed button',
              defaultValue: { value: "'Proceed to checkout'", computed: !1 },
            },
            onProceed: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description:
                'Function to call when the proceed button is clicked',
            },
          },
        }
        var Remove = __webpack_require__(
            './node_modules/@mui/icons-material/esm/Remove.js'
          ),
          Add = __webpack_require__(
            './node_modules/@mui/icons-material/esm/Add.js'
          )
        const ProductCard = ({
            numDevelopers = 1,
            onAddDeveloper,
            onRemoveDeveloper,
            licenses = 1,
            unitPrice = 180,
            onBuy,
            onLivePreview,
            featuredescriptions = [],
            releaseDate,
            onContact,
            createdBy,
            ...rest
          }) => {
            const [numDevelopersInput, setNumDevelopersInput] = (0,
              react.useState)(numDevelopers.toString()),
              [numLicenses, setNumLicenses] = (0, react.useState)(licenses)
            return (0, jsx_runtime.jsxs)(Paper.A, {
              elevation: 1,
              sx: {
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                padding: '16px',
                ...rest.sx,
              },
              children: [
                (0, jsx_runtime.jsxs)(Box.A, {
                  sx: { mb: 2 },
                  children: [
                    (0, jsx_runtime.jsx)(Typography.A, {
                      text: 'Number of developers',
                      fontvariant: 'merriparagraph',
                    }),
                    (0, jsx_runtime.jsxs)(Box.A, {
                      sx: { display: 'flex', alignItems: 'center', mt: 1 },
                      children: [
                        (0, jsx_runtime.jsx)(Box.A, {
                          sx: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer',
                          },
                          onClick: () => {
                            const newNumDevelopers =
                              parseInt(numDevelopersInput, 10) - 1
                            newNumDevelopers >= 1 &&
                              (setNumDevelopersInput(
                                newNumDevelopers.toString()
                              ),
                              setNumLicenses(newNumDevelopers),
                              null == onRemoveDeveloper || onRemoveDeveloper())
                          },
                          children: (0, jsx_runtime.jsx)(Remove.A, {
                            sx: { fontSize: '16px' },
                          }),
                        }),
                        (0, jsx_runtime.jsx)(Box.A, {
                          sx: {
                            mx: 1,
                            display: 'flex',
                            alignItems: 'center',
                            width: '45px',
                          },
                          children: (0, jsx_runtime.jsx)('input', {
                            type: 'text',
                            value: numDevelopersInput,
                            onChange: event => {
                              const value = event.target.value
                              setNumDevelopersInput(value),
                                setNumLicenses(parseInt(value, 10))
                            },
                            style: {
                              width: '100%',
                              border: '1px solid #ccc',
                              borderRadius: '4px',
                              padding: '4px',
                            },
                          }),
                        }),
                        (0, jsx_runtime.jsx)(Box.A, {
                          sx: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer',
                          },
                          onClick: () => {
                            const newNumDevelopers =
                              parseInt(numDevelopersInput, 10) + 1
                            setNumDevelopersInput(newNumDevelopers.toString()),
                              setNumLicenses(newNumDevelopers),
                              null == onAddDeveloper || onAddDeveloper()
                          },
                          children: (0, jsx_runtime.jsx)(Add.A, {
                            sx: { fontSize: '16px' },
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(Box.A, {
                  sx: { mb: 2 },
                  children: [
                    (0, jsx_runtime.jsx)(Box.A, {
                      children: (0, jsx_runtime.jsx)(Typography.A, {
                        text: `Licenses: ${numLicenses}`,
                        fontvariant: 'merriparagraph',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(Box.A, {
                      children: (0, jsx_runtime.jsx)(Typography.A, {
                        text: `Unit price: $ ${unitPrice}`,
                        fontvariant: 'merriparagraph',
                      }),
                    }),
                    (0, jsx_runtime.jsx)(Box.A, {
                      sx: { fontWeight: 'bold' },
                      children: (0, jsx_runtime.jsx)(Typography.A, {
                        text: `Total: $ ${(unitPrice * numLicenses).toFixed(2)}`,
                        fontvariant: 'merriparagraph',
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(Box.A, {
                  sx: { mb: 2, display: 'flex', justifyContent: 'flex-start' },
                  children: [
                    (0, jsx_runtime.jsx)(Box.A, {
                      sx: { mr: '2px' },
                      children: (0, jsx_runtime.jsx)(Button.A, {
                        text: 'Buy now',
                        fontcolor: 'white',
                        backgroundcolor: 'black',
                        onClick: onBuy,
                      }),
                    }),
                    (0, jsx_runtime.jsx)(Box.A, {
                      sx: { ml: '2px' },
                      children: (0, jsx_runtime.jsx)(Button.A, {
                        text: 'Live Preview',
                        fontcolor: 'white',
                        backgroundcolor: 'black',
                        onClick: onLivePreview,
                      }),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(Box.A, {
                  children: featuredescriptions.map((feature, index) =>
                    (0, jsx_runtime.jsx)(
                      Box.A,
                      {
                        children: (0, jsx_runtime.jsx)(Typography.A, {
                          text: `✓ ${feature}`,
                          fontvariant: 'merriparagraph',
                        }),
                      },
                      index
                    )
                  ),
                }),
                (0, jsx_runtime.jsx)(Box.A, {
                  sx: { mt: 2 },
                  children: (0, jsx_runtime.jsx)(Typography.A, {
                    text: `First release: ${releaseDate}`,
                    fontvariant: 'merriparagraph',
                  }),
                }),
                (0, jsx_runtime.jsx)(Box.A, {
                  sx: { mt: 2, cursor: 'pointer' },
                  onClick: onContact,
                  children: (0, jsx_runtime.jsx)(Typography.A, {
                    text: 'Questions? Contact us',
                    fontvariant: 'merriparagraph',
                  }),
                }),
                (0, jsx_runtime.jsx)(Box.A, {
                  sx: { mt: 2 },
                  children: (0, jsx_runtime.jsx)(Typography.A, {
                    text: `Created by ${createdBy}`,
                    fontvariant: 'merriparagraph',
                  }),
                }),
              ],
            })
          },
          product = ProductCard
        ProductCard.__docgenInfo = {
          description:
            'ProductCard component renders a card displaying detailed information about a product.\nIt includes options to adjust the number of developers/licenses, shows pricing information,\nand provides actions like Buy Now and Live Preview.',
          methods: [],
          displayName: 'ProductCard',
          props: {
            title: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Title of the product',
            },
            numDevelopers: {
              required: !1,
              tsType: { name: 'number' },
              description: 'Initial number of developers',
              defaultValue: { value: '1', computed: !1 },
            },
            onAddDeveloper: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: 'Callback function when adding a developer',
            },
            onRemoveDeveloper: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: 'Callback function when removing a developer',
            },
            licenses: {
              required: !1,
              tsType: { name: 'number' },
              description: 'Number of licenses',
              defaultValue: { value: '1', computed: !1 },
            },
            unitPrice: {
              required: !1,
              tsType: { name: 'number' },
              description: 'Unit price of the product',
              defaultValue: { value: '180', computed: !1 },
            },
            total: {
              required: !1,
              tsType: { name: 'number' },
              description: 'Total price (calculated)',
            },
            onBuy: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: 'Callback function for buy action',
            },
            onLivePreview: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: 'Callback function for live preview action',
            },
            featuredescriptions: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: 'Array of feature descriptions',
              defaultValue: { value: '[]', computed: !1 },
            },
            releaseDate: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Release date of the product',
            },
            onContact: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: 'Callback function for contact action',
            },
            createdBy: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Creator of the product',
            },
          },
          composes: ['BoxProps'],
        }
        var Switch = __webpack_require__(
          './node_modules/@mui/material/Switch/Switch.js'
        )
        const ProductSummaryCard = ({
            title,
            body,
            annualPrice,
            monthlyPrice,
            height,
            button1Props,
            button2Props,
            ...rest
          }) => {
            const [isAnnualPricing, setIsAnnualPricing] = (0, react.useState)(
              !0
            )
            return (0, jsx_runtime.jsxs)(Paper.A, {
              elevation: 1,
              sx: {
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                border: '1px solid #e8e8e8',
                height,
                ...rest.sx,
              },
              children: [
                (0, jsx_runtime.jsxs)(Box.A, {
                  sx: {
                    borderBottom: '1px solid #e8e8e8',
                    width: '100%',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    paddingBottom: '10px',
                    paddingTop: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  },
                  children: [
                    (0, jsx_runtime.jsx)(Typography.A, {
                      text: title,
                      fontcolor: 'black',
                      fontvariant: 'merrih5',
                    }),
                    (0, jsx_runtime.jsx)(Typography.A, {
                      text: isAnnualPricing
                        ? `$${annualPrice}`
                        : `$${monthlyPrice}`,
                      fontcolor: 'primary',
                      fontvariant: 'merrih6',
                    }),
                  ],
                }),
                body &&
                  (0, jsx_runtime.jsx)(Box.A, {
                    sx: { padding: '16px 15px' },
                    children: (0, jsx_runtime.jsx)(Typography.A, {
                      text: body,
                      fontcolor: 'black',
                      fontvariant: 'merriparagraph',
                    }),
                  }),
                (0, jsx_runtime.jsxs)(Box.A, {
                  sx: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    paddingBottom: '15px',
                  },
                  children: [
                    button1Props &&
                      (0, jsx_runtime.jsx)(Button.A, { ...button1Props }),
                    (0, jsx_runtime.jsxs)(Box.A, {
                      sx: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                      children: [
                        (0, jsx_runtime.jsx)(Typography.A, {
                          text: 'Monthly',
                          fontvariant: 'merriparagraph',
                          fontcolor: 'black',
                          sx: { marginRight: '8px' },
                        }),
                        (0, jsx_runtime.jsx)(Switch.A, {
                          checked: isAnnualPricing,
                          onChange: () => {
                            setIsAnnualPricing(!isAnnualPricing)
                          },
                          color: 'primary',
                        }),
                        (0, jsx_runtime.jsx)(Typography.A, {
                          text: 'Annual',
                          fontvariant: 'merriparagraph',
                          fontcolor: 'black',
                          sx: { marginLeft: '8px' },
                        }),
                      ],
                    }),
                    button2Props &&
                      (0, jsx_runtime.jsx)(Button.A, { ...button2Props }),
                  ],
                }),
              ],
            })
          },
          productsummary = ProductSummaryCard
        ProductSummaryCard.__docgenInfo = {
          description:
            'ProductSummaryCard component renders a card displaying a summary of a product,\nincluding its title, description, pricing options, and action buttons.',
          methods: [],
          displayName: 'ProductSummaryCard',
          props: {
            title: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Title of the card',
            },
            titleUnderline: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show an underline for the title',
            },
            body: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Body text of the card',
            },
            image: {
              required: !1,
              tsType: { name: 'string' },
              description: 'URL or path of the image to display',
            },
            imagePosition: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'top' | 'left'",
                elements: [
                  { name: 'literal', value: "'top'" },
                  { name: 'literal', value: "'left'" },
                ],
              },
              description: 'Position of the image in the card',
            },
            parentText: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Text for the parent breadcrumb',
            },
            parentLink: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Link for the parent breadcrumb',
            },
            childText: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Text for the child breadcrumb',
            },
            childLink: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Link for the child breadcrumb',
            },
            grandchildLink: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Link for the grandchild breadcrumb',
            },
            favoriteEnabled: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to enable the favorite feature',
            },
            breadcrumbEnabled: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show breadcrumbs',
            },
            linkEnabled: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to enable links',
            },
            width: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "| string\n| number\n| Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string | number>>",
                elements: [
                  { name: 'string' },
                  { name: 'number' },
                  {
                    name: 'Partial',
                    elements: [
                      {
                        name: 'Record',
                        elements: [
                          {
                            name: 'union',
                            raw: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
                            elements: [
                              { name: 'literal', value: "'xs'" },
                              { name: 'literal', value: "'sm'" },
                              { name: 'literal', value: "'md'" },
                              { name: 'literal', value: "'lg'" },
                              { name: 'literal', value: "'xl'" },
                            ],
                          },
                          {
                            name: 'union',
                            raw: 'string | number',
                            elements: [{ name: 'string' }, { name: 'number' }],
                          },
                        ],
                        raw: "Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string | number>",
                      },
                    ],
                    raw: "Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string | number>>",
                  },
                ],
              },
              description:
                'Width of the card. Can be a string/number or MUI responsive object, e.g.:\n  width={{\n    xs: 250,\n    sm: 300,\n    md: 400\n  }}',
            },
            height: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'string | number',
                elements: [{ name: 'string' }, { name: 'number' }],
              },
              description: 'Height of the card',
            },
            stepperEnabled: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show a stepper',
            },
            stepperActiveStep: {
              required: !1,
              tsType: { name: 'number' },
              description: 'Active step in the stepper',
            },
            stepperSteps: {
              required: !1,
              tsType: {
                name: "intersection['steps']",
                raw: "CustomStepperProps['steps']",
              },
              description: 'Steps configuration for the stepper',
            },
            variant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "| 'default'\n| 'inventory'\n| 'pricingsummary'\n| 'detailedpricingsummary'\n| 'product'\n| 'productsummary'\n| 'task'",
                elements: [
                  { name: 'literal', value: "'default'" },
                  { name: 'literal', value: "'inventory'" },
                  { name: 'literal', value: "'pricingsummary'" },
                  { name: 'literal', value: "'detailedpricingsummary'" },
                  { name: 'literal', value: "'product'" },
                  { name: 'literal', value: "'productsummary'" },
                  { name: 'literal', value: "'task'" },
                ],
              },
              description: 'Variant of the card to render',
            },
            pricingSummaryProps: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  subtotal?: string\n  total?: string\n  proceedText?: string\n  taxText?: string\n  discountText?: string\n  onProceed?: () => void\n}',
                signature: {
                  properties: [
                    {
                      key: 'subtotal',
                      value: { name: 'string', required: !1 },
                    },
                    { key: 'total', value: { name: 'string', required: !1 } },
                    {
                      key: 'proceedText',
                      value: { name: 'string', required: !1 },
                    },
                    { key: 'taxText', value: { name: 'string', required: !1 } },
                    {
                      key: 'discountText',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'onProceed',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '() => void',
                        signature: { arguments: [], return: { name: 'void' } },
                        required: !1,
                      },
                    },
                  ],
                },
              },
              description: 'Props for the pricing summary variant',
            },
            detailedPricingSummaryProps: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  product?: string\n  vendor?: string\n  vendorPrice?: string\n  subtotal?: string\n  vat?: string\n  total?: string\n  proceedText?: string\n  onProceed?: () => void\n}',
                signature: {
                  properties: [
                    { key: 'product', value: { name: 'string', required: !1 } },
                    { key: 'vendor', value: { name: 'string', required: !1 } },
                    {
                      key: 'vendorPrice',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'subtotal',
                      value: { name: 'string', required: !1 },
                    },
                    { key: 'vat', value: { name: 'string', required: !1 } },
                    { key: 'total', value: { name: 'string', required: !1 } },
                    {
                      key: 'proceedText',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'onProceed',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '() => void',
                        signature: { arguments: [], return: { name: 'void' } },
                        required: !1,
                      },
                    },
                  ],
                },
              },
              description: 'Props for the detailed pricing summary variant',
            },
            inventoryProps: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  license?: string\n  developmentUse?: string\n  productionUse?: string\n  updates?: string\n  support?: string\n  price?: string\n  quantity?: number\n  onRemove?: () => void\n}',
                signature: {
                  properties: [
                    { key: 'license', value: { name: 'string', required: !1 } },
                    {
                      key: 'developmentUse',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'productionUse',
                      value: { name: 'string', required: !1 },
                    },
                    { key: 'updates', value: { name: 'string', required: !1 } },
                    { key: 'support', value: { name: 'string', required: !1 } },
                    { key: 'price', value: { name: 'string', required: !1 } },
                    {
                      key: 'quantity',
                      value: { name: 'number', required: !1 },
                    },
                    {
                      key: 'onRemove',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '() => void',
                        signature: { arguments: [], return: { name: 'void' } },
                        required: !1,
                      },
                    },
                  ],
                },
              },
              description: 'Props for the inventory variant',
            },
            productProps: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  title?: string\n  description?: string\n  image?: string\n  price?: string\n  onBuy?: () => void\n  favoriteEnabled?: boolean\n  linkEnabled?: boolean\n  grandchildLink?: string\n  numDevelopers?: number\n  onAddDeveloper?: () => void\n  licenses?: number\n  unitPrice?: number\n  total?: number\n  rating?: number\n  numReviews?: number\n  releaseDate?: string\n  category?: string\n  onContact?: () => void\n  createdBy?: string\n  featuredescriptions?: string[]\n}',
                signature: {
                  properties: [
                    { key: 'title', value: { name: 'string', required: !1 } },
                    {
                      key: 'description',
                      value: { name: 'string', required: !1 },
                    },
                    { key: 'image', value: { name: 'string', required: !1 } },
                    { key: 'price', value: { name: 'string', required: !1 } },
                    {
                      key: 'onBuy',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '() => void',
                        signature: { arguments: [], return: { name: 'void' } },
                        required: !1,
                      },
                    },
                    {
                      key: 'favoriteEnabled',
                      value: { name: 'boolean', required: !1 },
                    },
                    {
                      key: 'linkEnabled',
                      value: { name: 'boolean', required: !1 },
                    },
                    {
                      key: 'grandchildLink',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'numDevelopers',
                      value: { name: 'number', required: !1 },
                    },
                    {
                      key: 'onAddDeveloper',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '() => void',
                        signature: { arguments: [], return: { name: 'void' } },
                        required: !1,
                      },
                    },
                    {
                      key: 'licenses',
                      value: { name: 'number', required: !1 },
                    },
                    {
                      key: 'unitPrice',
                      value: { name: 'number', required: !1 },
                    },
                    { key: 'total', value: { name: 'number', required: !1 } },
                    { key: 'rating', value: { name: 'number', required: !1 } },
                    {
                      key: 'numReviews',
                      value: { name: 'number', required: !1 },
                    },
                    {
                      key: 'releaseDate',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'category',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'onContact',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '() => void',
                        signature: { arguments: [], return: { name: 'void' } },
                        required: !1,
                      },
                    },
                    {
                      key: 'createdBy',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'featuredescriptions',
                      value: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                        required: !1,
                      },
                    },
                  ],
                },
              },
              description: 'Props for the product variant',
            },
            productSummaryProps: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  annualPrice?: string\n  monthlyPrice?: string\n  button1Props?: CustomButtonProps\n  button2Props?: CustomButtonProps\n}',
                signature: {
                  properties: [
                    {
                      key: 'annualPrice',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'monthlyPrice',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'button1Props',
                      value: { name: 'CustomButtonProps', required: !1 },
                    },
                    {
                      key: 'button2Props',
                      value: { name: 'CustomButtonProps', required: !1 },
                    },
                  ],
                },
              },
              description: 'Props for the product summary variant',
            },
            taskProps: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  /** Title of the task */\n  title?: string\n  /** Description of the task */\n  description?: string\n  /** Whether the task is completed (checked) */\n  checked?: boolean\n  /** Callback when the checkbox changes */\n  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void\n\n  /** Whether the task card is disabled */\n  disabled?: boolean // NEW\n\n  /**\n   * Optional drag & drop props if you want the card itself\n   * to handle drag events.\n   */\n  draggable?: boolean\n  onDragStart?: React.DragEventHandler<HTMLDivElement>\n  onDragOver?: React.DragEventHandler<HTMLDivElement>\n  onDrop?: React.DragEventHandler<HTMLDivElement>\n}',
                signature: {
                  properties: [
                    {
                      key: 'title',
                      value: { name: 'string', required: !1 },
                      description: 'Title of the task',
                    },
                    {
                      key: 'description',
                      value: { name: 'string', required: !1 },
                      description: 'Description of the task',
                    },
                    {
                      key: 'checked',
                      value: { name: 'boolean', required: !1 },
                      description: 'Whether the task is completed (checked)',
                    },
                    {
                      key: 'onCheck',
                      value: {
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
                        required: !1,
                      },
                      description: 'Callback when the checkbox changes',
                    },
                    {
                      key: 'disabled',
                      value: { name: 'boolean', required: !1 },
                      description: 'Whether the task card is disabled',
                    },
                    {
                      key: 'draggable',
                      value: { name: 'boolean', required: !1 },
                      description:
                        'Optional drag & drop props if you want the card itself\nto handle drag events.',
                    },
                    {
                      key: 'onDragStart',
                      value: {
                        name: 'ReactDragEventHandler',
                        raw: 'React.DragEventHandler<HTMLDivElement>',
                        elements: [{ name: 'HTMLDivElement' }],
                        required: !1,
                      },
                    },
                    {
                      key: 'onDragOver',
                      value: {
                        name: 'ReactDragEventHandler',
                        raw: 'React.DragEventHandler<HTMLDivElement>',
                        elements: [{ name: 'HTMLDivElement' }],
                        required: !1,
                      },
                    },
                    {
                      key: 'onDrop',
                      value: {
                        name: 'ReactDragEventHandler',
                        raw: 'React.DragEventHandler<HTMLDivElement>',
                        elements: [{ name: 'HTMLDivElement' }],
                        required: !1,
                      },
                    },
                  ],
                },
              },
              description: 'Props for the new "task" variant',
            },
            columnconfig: {
              required: !1,
              tsType: { name: 'columnconfig' },
              description: 'Configuration for grid columns',
            },
            annualPrice: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Annual price of the product',
            },
            monthlyPrice: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Monthly price of the product',
            },
            button1Props: {
              required: !1,
              tsType: { name: 'CustomButtonProps' },
              description: 'Props for the first button',
            },
            button2Props: {
              required: !1,
              tsType: { name: 'CustomButtonProps' },
              description: 'Props for the second button',
            },
          },
        }
        var useTheme = __webpack_require__(
            './node_modules/@mui/material/styles/useTheme.js'
          ),
          useMediaQuery = __webpack_require__(
            './node_modules/@mui/material/useMediaQuery/index.js'
          ),
          ArrowForwardIos = __webpack_require__(
            './node_modules/@mui/icons-material/esm/ArrowForwardIos.js'
          ),
          Info = __webpack_require__(
            './node_modules/@mui/icons-material/esm/Info.js'
          ),
          Tooltip = __webpack_require__('./src/components/Tooltip/index.tsx'),
          IconButton = __webpack_require__(
            './node_modules/@mui/material/IconButton/IconButton.js'
          ),
          Favorite = __webpack_require__(
            './node_modules/@mui/icons-material/esm/Favorite.js'
          ),
          FavoriteBorder = __webpack_require__(
            './node_modules/@mui/icons-material/esm/FavoriteBorder.js'
          )
        const FavoriteIconComponent = () => {
            const [isFavorite, setIsFavorite] = (0, react.useState)(!1)
            return (0, jsx_runtime.jsx)(IconButton.A, {
              onClick: () => {
                setIsFavorite(!isFavorite)
              },
              size: 'small',
              children: isFavorite
                ? (0, jsx_runtime.jsx)(Favorite.A, { style: { color: 'red' } })
                : (0, jsx_runtime.jsx)(FavoriteBorder.A, {}),
            })
          },
          FavoriteIcon = FavoriteIconComponent
        FavoriteIconComponent.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'FavoriteIconComponent',
        }
        var Stepper = __webpack_require__('./src/components/Stepper/index.tsx')
        const DefaultCard = ({
            title,
            titleUnderline = !0,
            body,
            image,
            imagePosition = 'top',
            parentText = 'Parent',
            parentLink = '/',
            childText = 'Child',
            childLink = '/',
            grandchildLink = '/',
            favoriteEnabled = !1,
            breadcrumbEnabled = !1,
            linkEnabled = !1,
            width = '100%',
            height,
            stepperEnabled = !1,
            stepperActiveStep = -1,
            stepperSteps = [],
            ...rest
          }) => {
            const theme = (0, useTheme.A)(),
              isMobile = (0, useMediaQuery.A)(theme.breakpoints.down('sm'))
            return (0, jsx_runtime.jsxs)(Paper.A, {
              elevation: 1,
              sx: {
                position: 'relative',
                display: 'flex',
                flexDirection:
                  'left' === imagePosition || isMobile ? 'row' : 'column',
                justifyContent: isMobile ? 'space-between' : 'flex-start',
                alignItems: isMobile ? 'center' : 'stretch',
                border: '1px solid #e8e8e8',
                width,
                height,
                ...rest.sx,
              },
              children: [
                image &&
                  (0, jsx_runtime.jsx)(Box.A, {
                    sx: {
                      width: 'left' === imagePosition ? '200px' : '100%',
                      height: 'left' === imagePosition ? '100%' : '200px',
                      backgroundImage: `url(${image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      flexShrink: 0,
                    },
                  }),
                (0, jsx_runtime.jsxs)(Box.A, {
                  sx: { flexGrow: 1, display: 'flex', flexDirection: 'column' },
                  children: [
                    title &&
                      (0, jsx_runtime.jsxs)(Box.A, {
                        sx: {
                          borderBottom: titleUnderline
                            ? '1px solid #e8e8e8'
                            : 'none',
                          width: '100%',
                          paddingLeft: '15px',
                          paddingRight: '15px',
                          paddingBottom: '10px',
                          paddingTop: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        },
                        children: [
                          (0, jsx_runtime.jsx)(Typography.A, {
                            text: title,
                            fontcolor: 'black',
                            fontvariant: 'merrih5',
                          }),
                          favoriteEnabled &&
                            (0, jsx_runtime.jsx)(FavoriteIcon, {}),
                        ],
                      }),
                    body &&
                      (0, jsx_runtime.jsxs)(Box.A, {
                        sx: { padding: isMobile ? '0 15px' : '16px 15px' },
                        children: [
                          !isMobile &&
                            (0, jsx_runtime.jsx)(Typography.A, {
                              text: body,
                              fontcolor: 'black',
                              fontvariant: 'merriparagraph',
                            }),
                          isMobile &&
                            (0, jsx_runtime.jsx)(Tooltip.A, {
                              title: body,
                              placement: 'right',
                              arrow: !0,
                              tooltipcolor: 'black',
                              tooltipplacement: 'right',
                              offsetX: 0,
                              offsetY: 0,
                              disableHoverListener: !0,
                              children: (0, jsx_runtime.jsx)(Info.A, {
                                style: { color: 'black', cursor: 'pointer' },
                              }),
                            }),
                        ],
                      }),
                    stepperEnabled &&
                      (0, jsx_runtime.jsx)(Box.A, {
                        sx: { padding: '0px 15px' },
                        children: (0, jsx_runtime.jsx)(Stepper.H, {
                          activeStep: stepperActiveStep,
                          nonLinear: !0,
                          orientation: 'vertical',
                          steps: stepperSteps,
                          sx: {
                            '.MuiStepIcon-text': { display: 'none' },
                            '.MuiStepConnector-line': { display: 'none' },
                          },
                        }),
                      }),
                    (0, jsx_runtime.jsxs)(Box.A, {
                      sx: {
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        paddingBottom: '10px',
                        marginTop: 'auto',
                      },
                      children: [
                        (0, jsx_runtime.jsx)(Box.A, {
                          children:
                            breadcrumbEnabled &&
                            (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                              children: [
                                (0, jsx_runtime.jsx)(link_default(), {
                                  href: parentLink,
                                  passHref: !0,
                                  children: (0, jsx_runtime.jsx)(Typography.A, {
                                    text: parentText,
                                    fontcolor: 'black',
                                    fontvariant: 'merriparagraph',
                                  }),
                                }),
                                (0, jsx_runtime.jsx)(Typography.A, {
                                  text: '>',
                                  fontcolor: 'black',
                                  fontvariant: 'merriparagraph',
                                }),
                                (0, jsx_runtime.jsx)(link_default(), {
                                  href: childLink,
                                  passHref: !0,
                                  children: (0, jsx_runtime.jsx)(Typography.A, {
                                    text: childText,
                                    fontcolor: 'black',
                                    fontvariant: 'merriparagraph',
                                  }),
                                }),
                              ],
                            }),
                        }),
                        (0, jsx_runtime.jsx)(Box.A, {
                          sx: { paddingLeft: '10px' },
                          children:
                            linkEnabled &&
                            (0, jsx_runtime.jsx)(link_default(), {
                              href: grandchildLink,
                              passHref: !0,
                              children: (0, jsx_runtime.jsx)(Button.A, {
                                icon: (0, jsx_runtime.jsx)(
                                  ArrowForwardIos.A,
                                  {}
                                ),
                                iconcolor: 'black',
                                iconsize: '15px',
                                iconlocation: 'right',
                                backgroundcolor: 'none',
                                variant: 'text',
                              }),
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          },
          defaultconfig = DefaultCard
        DefaultCard.__docgenInfo = {
          description:
            'DefaultCard component renders a customizable card with various features such as\nimage, title, body text, breadcrumbs, favorite icon, and stepper.\nIt adapts its layout based on the screen size and provided props.',
          methods: [],
          displayName: 'DefaultCard',
          props: {
            title: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Title of the card',
            },
            titleUnderline: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show an underline for the title',
              defaultValue: { value: 'true', computed: !1 },
            },
            body: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Body text of the card',
            },
            image: {
              required: !1,
              tsType: { name: 'string' },
              description: 'URL or path of the image to display',
            },
            imagePosition: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'top' | 'left'",
                elements: [
                  { name: 'literal', value: "'top'" },
                  { name: 'literal', value: "'left'" },
                ],
              },
              description: 'Position of the image in the card',
              defaultValue: { value: "'top'", computed: !1 },
            },
            parentText: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Text for the parent breadcrumb',
              defaultValue: { value: "'Parent'", computed: !1 },
            },
            parentLink: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Link for the parent breadcrumb',
              defaultValue: { value: "'/'", computed: !1 },
            },
            childText: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Text for the child breadcrumb',
              defaultValue: { value: "'Child'", computed: !1 },
            },
            childLink: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Link for the child breadcrumb',
              defaultValue: { value: "'/'", computed: !1 },
            },
            grandchildLink: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Link for the grandchild breadcrumb',
              defaultValue: { value: "'/'", computed: !1 },
            },
            favoriteEnabled: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to enable the favorite feature',
              defaultValue: { value: 'false', computed: !1 },
            },
            breadcrumbEnabled: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show breadcrumbs',
              defaultValue: { value: 'false', computed: !1 },
            },
            linkEnabled: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to enable links',
              defaultValue: { value: 'false', computed: !1 },
            },
            height: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'string | number',
                elements: [{ name: 'string' }, { name: 'number' }],
              },
              description: 'Height of the card',
            },
            stepperEnabled: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show a stepper',
              defaultValue: { value: 'false', computed: !1 },
            },
            stepperActiveStep: {
              required: !1,
              tsType: { name: 'number' },
              description: 'Active step in the stepper',
              defaultValue: { value: '-1', computed: !1 },
            },
            stepperSteps: {
              required: !1,
              tsType: {
                name: "intersection['steps']",
                raw: "CustomStepperProps['steps']",
              },
              description: 'Steps configuration for the stepper',
              defaultValue: { value: '[]', computed: !1 },
            },
            width: {
              defaultValue: { value: "'100%'", computed: !1 },
              required: !1,
            },
          },
          composes: ['BoxProps'],
        }
        var Checkbox = __webpack_require__(
          './node_modules/@mui/material/Checkbox/Checkbox.js'
        )
        const TaskCard = ({
            title = 'Task Title',
            description = 'Description',
            checked = !1,
            disabled = !1,
            onCheck,
            height = 'auto',
            sx,
            ...rest
          }) =>
            (0, jsx_runtime.jsxs)(Paper.A, {
              elevation: 1,
              sx: {
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                ...(height && { height }),
                p: 2,
                border: '1px solid #e8e8e8',
                ...sx,
              },
              ...rest,
              children: [
                (0, jsx_runtime.jsx)(Checkbox.A, {
                  checked,
                  disabled,
                  onChange: onCheck,
                  color: 'primary',
                  sx: { position: 'absolute', top: 8, right: 8 },
                }),
                (0, jsx_runtime.jsxs)(Box.A, {
                  sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: 4,
                  },
                  children: [
                    (0, jsx_runtime.jsx)(Typography.A, {
                      text: title,
                      fontcolor: 'black',
                      fontvariant: 'merrih5',
                      sx: { marginBottom: '4px' },
                    }),
                    (0, jsx_runtime.jsx)(Typography.A, {
                      text: description,
                      fontcolor: 'black',
                      fontvariant: 'merriparagraph',
                    }),
                  ],
                }),
              ],
            }),
          task = TaskCard
        function Card({
          title,
          titleUnderline = !0,
          body,
          image,
          imagePosition = 'top',
          parentText = 'Parent',
          parentLink = '/',
          childText = 'Child',
          childLink = '/',
          grandchildLink = '/',
          favoriteEnabled = !1,
          breadcrumbEnabled = !1,
          linkEnabled = !1,
          width = '100%',
          height,
          stepperEnabled = !1,
          stepperActiveStep = -1,
          stepperSteps = [],
          variant = 'default',
          pricingSummaryProps,
          detailedPricingSummaryProps,
          inventoryProps,
          productProps,
          productSummaryProps,
          taskProps,
          ...rest
        }) {
          return 'default' === variant
            ? (0, jsx_runtime.jsx)(Box.A, {
                sx: { width, height },
                ...rest,
                children: (0, jsx_runtime.jsx)(defaultconfig, {
                  title,
                  titleUnderline,
                  body,
                  image,
                  imagePosition,
                  parentText,
                  parentLink,
                  childText,
                  childLink,
                  grandchildLink,
                  favoriteEnabled,
                  breadcrumbEnabled,
                  linkEnabled,
                  height,
                  stepperEnabled,
                  stepperActiveStep,
                  stepperSteps,
                }),
              })
            : 'inventory' === variant
              ? (0, jsx_runtime.jsx)(Box.A, {
                  sx: { width, height },
                  ...rest,
                  children: (0, jsx_runtime.jsx)(inventory, {
                    title,
                    image,
                    height,
                    ...inventoryProps,
                  }),
                })
              : 'pricingsummary' === variant
                ? (0, jsx_runtime.jsx)(Box.A, {
                    sx: { width, height },
                    ...rest,
                    children: (0, jsx_runtime.jsx)(simplepricingsummary, {
                      height,
                      ...pricingSummaryProps,
                    }),
                  })
                : 'detailedpricingsummary' === variant
                  ? (0, jsx_runtime.jsx)(Box.A, {
                      sx: { width, height },
                      ...rest,
                      children: (0, jsx_runtime.jsx)(detailedpricingsummary, {
                        height,
                        ...detailedPricingSummaryProps,
                      }),
                    })
                  : 'product' === variant
                    ? (0, jsx_runtime.jsx)(Box.A, {
                        sx: { width, height },
                        ...rest,
                        children: (0, jsx_runtime.jsx)(product, {
                          height,
                          ...productProps,
                        }),
                      })
                    : 'productsummary' === variant
                      ? (0, jsx_runtime.jsx)(Box.A, {
                          sx: { width, height },
                          ...rest,
                          children: (0, jsx_runtime.jsx)(productsummary, {
                            title,
                            body,
                            annualPrice:
                              null == productSummaryProps
                                ? void 0
                                : productSummaryProps.annualPrice,
                            monthlyPrice:
                              null == productSummaryProps
                                ? void 0
                                : productSummaryProps.monthlyPrice,
                            height,
                            button1Props:
                              null == productSummaryProps
                                ? void 0
                                : productSummaryProps.button1Props,
                            button2Props:
                              null == productSummaryProps
                                ? void 0
                                : productSummaryProps.button2Props,
                          }),
                        })
                      : 'task' === variant
                        ? (0, jsx_runtime.jsx)(Box.A, {
                            draggable:
                              null == taskProps ? void 0 : taskProps.draggable,
                            onDragStart:
                              null == taskProps
                                ? void 0
                                : taskProps.onDragStart,
                            onDragOver:
                              null == taskProps ? void 0 : taskProps.onDragOver,
                            onDrop:
                              null == taskProps ? void 0 : taskProps.onDrop,
                            sx: { width, height },
                            ...rest,
                            children: (0, jsx_runtime.jsx)(task, {
                              title:
                                null == taskProps ? void 0 : taskProps.title,
                              description:
                                null == taskProps
                                  ? void 0
                                  : taskProps.description,
                              checked:
                                null == taskProps ? void 0 : taskProps.checked,
                              onCheck:
                                null == taskProps ? void 0 : taskProps.onCheck,
                              disabled:
                                null == taskProps ? void 0 : taskProps.disabled,
                            }),
                          })
                        : null
        }
        ;(TaskCard.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TaskCard',
          props: {
            title: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'Task Title'", computed: !1 },
            },
            description: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'Description'", computed: !1 },
            },
            checked: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether the card is currently checked/selected.',
              defaultValue: { value: 'false', computed: !1 },
            },
            disabled: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Disables the checkbox (prevents selection).',
              defaultValue: { value: 'false', computed: !1 },
            },
            onCheck: {
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
              description: 'Called when the user toggles the checkbox.',
            },
            height: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'string | number',
                elements: [{ name: 'string' }, { name: 'number' }],
              },
              description: 'Height of the card.',
              defaultValue: { value: "'auto'", computed: !1 },
            },
          },
          composes: ['PaperProps'],
        }),
          (Card.displayName = 'Card')
        const components_Card = Card
        Card.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Card',
          props: {
            title: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Title of the card',
            },
            titleUnderline: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show an underline for the title',
              defaultValue: { value: 'true', computed: !1 },
            },
            body: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Body text of the card',
            },
            image: {
              required: !1,
              tsType: { name: 'string' },
              description: 'URL or path of the image to display',
            },
            imagePosition: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'top' | 'left'",
                elements: [
                  { name: 'literal', value: "'top'" },
                  { name: 'literal', value: "'left'" },
                ],
              },
              description: 'Position of the image in the card',
              defaultValue: { value: "'top'", computed: !1 },
            },
            parentText: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Text for the parent breadcrumb',
              defaultValue: { value: "'Parent'", computed: !1 },
            },
            parentLink: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Link for the parent breadcrumb',
              defaultValue: { value: "'/'", computed: !1 },
            },
            childText: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Text for the child breadcrumb',
              defaultValue: { value: "'Child'", computed: !1 },
            },
            childLink: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Link for the child breadcrumb',
              defaultValue: { value: "'/'", computed: !1 },
            },
            grandchildLink: {
              required: !1,
              tsType: { name: 'string' },
              description: 'Link for the grandchild breadcrumb',
              defaultValue: { value: "'/'", computed: !1 },
            },
            favoriteEnabled: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to enable the favorite feature',
              defaultValue: { value: 'false', computed: !1 },
            },
            breadcrumbEnabled: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show breadcrumbs',
              defaultValue: { value: 'false', computed: !1 },
            },
            linkEnabled: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to enable links',
              defaultValue: { value: 'false', computed: !1 },
            },
            width: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "| string\n| number\n| Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string | number>>",
                elements: [
                  { name: 'string' },
                  { name: 'number' },
                  {
                    name: 'Partial',
                    elements: [
                      {
                        name: 'Record',
                        elements: [
                          {
                            name: 'union',
                            raw: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
                            elements: [
                              { name: 'literal', value: "'xs'" },
                              { name: 'literal', value: "'sm'" },
                              { name: 'literal', value: "'md'" },
                              { name: 'literal', value: "'lg'" },
                              { name: 'literal', value: "'xl'" },
                            ],
                          },
                          {
                            name: 'union',
                            raw: 'string | number',
                            elements: [{ name: 'string' }, { name: 'number' }],
                          },
                        ],
                        raw: "Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string | number>",
                      },
                    ],
                    raw: "Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string | number>>",
                  },
                ],
              },
              description:
                'Width of the card. Can be a string/number or MUI responsive object, e.g.:\n  width={{\n    xs: 250,\n    sm: 300,\n    md: 400\n  }}',
              defaultValue: { value: "'100%'", computed: !1 },
            },
            height: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'string | number',
                elements: [{ name: 'string' }, { name: 'number' }],
              },
              description: 'Height of the card',
            },
            stepperEnabled: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'Whether to show a stepper',
              defaultValue: { value: 'false', computed: !1 },
            },
            stepperActiveStep: {
              required: !1,
              tsType: { name: 'number' },
              description: 'Active step in the stepper',
              defaultValue: { value: '-1', computed: !1 },
            },
            stepperSteps: {
              required: !1,
              tsType: {
                name: "intersection['steps']",
                raw: "CustomStepperProps['steps']",
              },
              description: 'Steps configuration for the stepper',
              defaultValue: { value: '[]', computed: !1 },
            },
            variant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "| 'default'\n| 'inventory'\n| 'pricingsummary'\n| 'detailedpricingsummary'\n| 'product'\n| 'productsummary'\n| 'task'",
                elements: [
                  { name: 'literal', value: "'default'" },
                  { name: 'literal', value: "'inventory'" },
                  { name: 'literal', value: "'pricingsummary'" },
                  { name: 'literal', value: "'detailedpricingsummary'" },
                  { name: 'literal', value: "'product'" },
                  { name: 'literal', value: "'productsummary'" },
                  { name: 'literal', value: "'task'" },
                ],
              },
              description: 'Variant of the card to render',
              defaultValue: { value: "'default'", computed: !1 },
            },
            pricingSummaryProps: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  subtotal?: string\n  total?: string\n  proceedText?: string\n  taxText?: string\n  discountText?: string\n  onProceed?: () => void\n}',
                signature: {
                  properties: [
                    {
                      key: 'subtotal',
                      value: { name: 'string', required: !1 },
                    },
                    { key: 'total', value: { name: 'string', required: !1 } },
                    {
                      key: 'proceedText',
                      value: { name: 'string', required: !1 },
                    },
                    { key: 'taxText', value: { name: 'string', required: !1 } },
                    {
                      key: 'discountText',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'onProceed',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '() => void',
                        signature: { arguments: [], return: { name: 'void' } },
                        required: !1,
                      },
                    },
                  ],
                },
              },
              description: 'Props for the pricing summary variant',
            },
            detailedPricingSummaryProps: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  product?: string\n  vendor?: string\n  vendorPrice?: string\n  subtotal?: string\n  vat?: string\n  total?: string\n  proceedText?: string\n  onProceed?: () => void\n}',
                signature: {
                  properties: [
                    { key: 'product', value: { name: 'string', required: !1 } },
                    { key: 'vendor', value: { name: 'string', required: !1 } },
                    {
                      key: 'vendorPrice',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'subtotal',
                      value: { name: 'string', required: !1 },
                    },
                    { key: 'vat', value: { name: 'string', required: !1 } },
                    { key: 'total', value: { name: 'string', required: !1 } },
                    {
                      key: 'proceedText',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'onProceed',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '() => void',
                        signature: { arguments: [], return: { name: 'void' } },
                        required: !1,
                      },
                    },
                  ],
                },
              },
              description: 'Props for the detailed pricing summary variant',
            },
            inventoryProps: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  license?: string\n  developmentUse?: string\n  productionUse?: string\n  updates?: string\n  support?: string\n  price?: string\n  quantity?: number\n  onRemove?: () => void\n}',
                signature: {
                  properties: [
                    { key: 'license', value: { name: 'string', required: !1 } },
                    {
                      key: 'developmentUse',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'productionUse',
                      value: { name: 'string', required: !1 },
                    },
                    { key: 'updates', value: { name: 'string', required: !1 } },
                    { key: 'support', value: { name: 'string', required: !1 } },
                    { key: 'price', value: { name: 'string', required: !1 } },
                    {
                      key: 'quantity',
                      value: { name: 'number', required: !1 },
                    },
                    {
                      key: 'onRemove',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '() => void',
                        signature: { arguments: [], return: { name: 'void' } },
                        required: !1,
                      },
                    },
                  ],
                },
              },
              description: 'Props for the inventory variant',
            },
            productProps: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  title?: string\n  description?: string\n  image?: string\n  price?: string\n  onBuy?: () => void\n  favoriteEnabled?: boolean\n  linkEnabled?: boolean\n  grandchildLink?: string\n  numDevelopers?: number\n  onAddDeveloper?: () => void\n  licenses?: number\n  unitPrice?: number\n  total?: number\n  rating?: number\n  numReviews?: number\n  releaseDate?: string\n  category?: string\n  onContact?: () => void\n  createdBy?: string\n  featuredescriptions?: string[]\n}',
                signature: {
                  properties: [
                    { key: 'title', value: { name: 'string', required: !1 } },
                    {
                      key: 'description',
                      value: { name: 'string', required: !1 },
                    },
                    { key: 'image', value: { name: 'string', required: !1 } },
                    { key: 'price', value: { name: 'string', required: !1 } },
                    {
                      key: 'onBuy',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '() => void',
                        signature: { arguments: [], return: { name: 'void' } },
                        required: !1,
                      },
                    },
                    {
                      key: 'favoriteEnabled',
                      value: { name: 'boolean', required: !1 },
                    },
                    {
                      key: 'linkEnabled',
                      value: { name: 'boolean', required: !1 },
                    },
                    {
                      key: 'grandchildLink',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'numDevelopers',
                      value: { name: 'number', required: !1 },
                    },
                    {
                      key: 'onAddDeveloper',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '() => void',
                        signature: { arguments: [], return: { name: 'void' } },
                        required: !1,
                      },
                    },
                    {
                      key: 'licenses',
                      value: { name: 'number', required: !1 },
                    },
                    {
                      key: 'unitPrice',
                      value: { name: 'number', required: !1 },
                    },
                    { key: 'total', value: { name: 'number', required: !1 } },
                    { key: 'rating', value: { name: 'number', required: !1 } },
                    {
                      key: 'numReviews',
                      value: { name: 'number', required: !1 },
                    },
                    {
                      key: 'releaseDate',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'category',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'onContact',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '() => void',
                        signature: { arguments: [], return: { name: 'void' } },
                        required: !1,
                      },
                    },
                    {
                      key: 'createdBy',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'featuredescriptions',
                      value: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                        required: !1,
                      },
                    },
                  ],
                },
              },
              description: 'Props for the product variant',
            },
            productSummaryProps: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  annualPrice?: string\n  monthlyPrice?: string\n  button1Props?: CustomButtonProps\n  button2Props?: CustomButtonProps\n}',
                signature: {
                  properties: [
                    {
                      key: 'annualPrice',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'monthlyPrice',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'button1Props',
                      value: { name: 'CustomButtonProps', required: !1 },
                    },
                    {
                      key: 'button2Props',
                      value: { name: 'CustomButtonProps', required: !1 },
                    },
                  ],
                },
              },
              description: 'Props for the product summary variant',
            },
            taskProps: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  /** Title of the task */\n  title?: string\n  /** Description of the task */\n  description?: string\n  /** Whether the task is completed (checked) */\n  checked?: boolean\n  /** Callback when the checkbox changes */\n  onCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void\n\n  /** Whether the task card is disabled */\n  disabled?: boolean // NEW\n\n  /**\n   * Optional drag & drop props if you want the card itself\n   * to handle drag events.\n   */\n  draggable?: boolean\n  onDragStart?: React.DragEventHandler<HTMLDivElement>\n  onDragOver?: React.DragEventHandler<HTMLDivElement>\n  onDrop?: React.DragEventHandler<HTMLDivElement>\n}',
                signature: {
                  properties: [
                    {
                      key: 'title',
                      value: { name: 'string', required: !1 },
                      description: 'Title of the task',
                    },
                    {
                      key: 'description',
                      value: { name: 'string', required: !1 },
                      description: 'Description of the task',
                    },
                    {
                      key: 'checked',
                      value: { name: 'boolean', required: !1 },
                      description: 'Whether the task is completed (checked)',
                    },
                    {
                      key: 'onCheck',
                      value: {
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
                        required: !1,
                      },
                      description: 'Callback when the checkbox changes',
                    },
                    {
                      key: 'disabled',
                      value: { name: 'boolean', required: !1 },
                      description: 'Whether the task card is disabled',
                    },
                    {
                      key: 'draggable',
                      value: { name: 'boolean', required: !1 },
                      description:
                        'Optional drag & drop props if you want the card itself\nto handle drag events.',
                    },
                    {
                      key: 'onDragStart',
                      value: {
                        name: 'ReactDragEventHandler',
                        raw: 'React.DragEventHandler<HTMLDivElement>',
                        elements: [{ name: 'HTMLDivElement' }],
                        required: !1,
                      },
                    },
                    {
                      key: 'onDragOver',
                      value: {
                        name: 'ReactDragEventHandler',
                        raw: 'React.DragEventHandler<HTMLDivElement>',
                        elements: [{ name: 'HTMLDivElement' }],
                        required: !1,
                      },
                    },
                    {
                      key: 'onDrop',
                      value: {
                        name: 'ReactDragEventHandler',
                        raw: 'React.DragEventHandler<HTMLDivElement>',
                        elements: [{ name: 'HTMLDivElement' }],
                        required: !1,
                      },
                    },
                  ],
                },
              },
              description: 'Props for the new "task" variant',
            },
            columnconfig: {
              required: !1,
              tsType: { name: 'columnconfig' },
              description: 'Configuration for grid columns',
            },
          },
        }
      },
      './src/components/Stepper/index.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, { H: () => CustomStepper })
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/next/dist/compiled/react/jsx-runtime.js'
            ),
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ =
            (__webpack_require__(
              './node_modules/next/dist/compiled/react/index.js'
            ),
            __webpack_require__(
              './node_modules/@mui/material/styles/styled.js'
            )),
          _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/Stepper/Stepper.js'
            ),
          _mui_material_Step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            './node_modules/@mui/material/Step/Step.js'
          ),
          _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/material/StepLabel/StepLabel.js'
            ),
          _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Button/index.tsx'
          ),
          _mui_material_StepConnector__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              './node_modules/@mui/material/StepConnector/StepConnector.js'
            ),
          _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/Check.js'
            ),
          _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/CircleOutlined.js'
            ),
          _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/LockOutlined.js'
            ),
          _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/InfoOutlined.js'
            ),
          _barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/material/Tooltip/Tooltip.js'
            ),
          _barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              './node_modules/@mui/material/Tooltip/tooltipClasses.js'
            ),
          _barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(
              './node_modules/@mui/material/IconButton/IconButton.js'
            )
        const StyledStepper = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(props =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_4__.A,
              { ...props }
            )
          )({}),
          Step = (0, _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            props =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _mui_material_Step__WEBPACK_IMPORTED_MODULE_5__.A,
                { ...props }
              )
          )({}),
          StepLabel = (0, _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            props => {
              var _props_slots
              return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_6__.A,
                {
                  ...props,
                  slots: {
                    stepIcon:
                      null === (_props_slots = props.slots) ||
                      void 0 === _props_slots
                        ? void 0
                        : _props_slots.stepIcon,
                  },
                  sx: {
                    '.MuiStepLabel-labelContainer': {
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      '.MuiStepLabel-label': { marginLeft: '15px', flex: 1 },
                    },
                  },
                }
              )
            }
          )({}),
          BlackTooltip = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            ({ className, ...props }) =>
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,
                { ...props, classes: { popper: className } }
              )
          )({
            [`& .${_barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_8__.A.tooltip}`]:
              { backgroundColor: 'black', color: 'white', fontSize: 14 },
            [`& .${_barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_8__.A.arrow}`]:
              { color: 'black' },
          })
        function CustomStepper({ steps, activeStep, ...rest }) {
          const getStepLink = step =>
              step.statusLink ? step.statusLink : step.stepLink,
            isStepClickable = step => 'inactive' !== step.status
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            StyledStepper,
            {
              ...rest,
              connector: (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _mui_material_StepConnector__WEBPACK_IMPORTED_MODULE_12__.A,
                {}
              ),
              children: steps.map(step =>
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  Step,
                  {
                    active: step.stepNumber === activeStep,
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      StepLabel,
                      {
                        slots: {
                          stepIcon: () =>
                            (status => {
                              switch (status) {
                                case 'completed':
                                  return (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_9__.A,
                                    { sx: { color: 'black' } }
                                  )
                                case 'error':
                                default:
                                  return (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_10__.A,
                                    { sx: { color: 'black' } }
                                  )
                                case 'inactive':
                                  return (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_11__.A,
                                    { sx: { color: 'black' } }
                                  )
                              }
                            })(step.status),
                        },
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          _barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_13__.A,
                          {
                            sx: {
                              display: 'flex',
                              alignItems: 'center',
                              width: '100%',
                              gap: 1,
                            },
                            children: [
                              (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _Button__WEBPACK_IMPORTED_MODULE_2__.A,
                                {
                                  text: step.label,
                                  variant: 'text',
                                  fontcolor: 'black',
                                  fontlocation: 'left',
                                  href: isStepClickable(step)
                                    ? getStepLink(step)
                                    : void 0,
                                  sx: {
                                    padding: 0,
                                    minWidth: 0,
                                    flex: 1,
                                    justifyContent: 'flex-start',
                                    textTransform: 'none',
                                    '&:hover': {
                                      backgroundColor: 'transparent',
                                    },
                                  },
                                }
                              ),
                              step.description &&
                                (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  BlackTooltip,
                                  {
                                    title: step.description,
                                    arrow: !0,
                                    placement: 'right',
                                    children: (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _barrel_optimize_names_Box_IconButton_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_14__.A,
                                      {
                                        size: 'small',
                                        sx: {
                                          padding: 0,
                                          color: 'black',
                                          '&:hover': {
                                            backgroundColor: 'transparent',
                                          },
                                        },
                                        children: (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          _barrel_optimize_names_Check_CircleOutlined_InfoOutlined_LockOutlined_mui_icons_material__WEBPACK_IMPORTED_MODULE_15__.A,
                                          { fontSize: 'small' }
                                        ),
                                      }
                                    ),
                                  }
                                ),
                            ],
                          }
                        ),
                      }
                    ),
                  },
                  step.label
                )
              ),
            }
          )
        }
        ;(CustomStepper.displayName = 'CustomStepper'),
          (CustomStepper.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'CustomStepper',
            props: {
              steps: {
                required: !0,
                tsType: {
                  name: 'Array',
                  elements: [
                    {
                      name: 'signature',
                      type: 'object',
                      raw: "{\n  stepNumber: number\n  label: string\n  stepLink: string\n  status: 'completed' | 'active' | 'error' | 'inactive'\n  statusLink?: string\n  description?: string\n}",
                      signature: {
                        properties: [
                          {
                            key: 'stepNumber',
                            value: { name: 'number', required: !0 },
                          },
                          {
                            key: 'label',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'stepLink',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'status',
                            value: {
                              name: 'union',
                              raw: "'completed' | 'active' | 'error' | 'inactive'",
                              elements: [
                                { name: 'literal', value: "'completed'" },
                                { name: 'literal', value: "'active'" },
                                { name: 'literal', value: "'error'" },
                                { name: 'literal', value: "'inactive'" },
                              ],
                              required: !0,
                            },
                          },
                          {
                            key: 'statusLink',
                            value: { name: 'string', required: !1 },
                          },
                          {
                            key: 'description',
                            value: { name: 'string', required: !1 },
                          },
                        ],
                      },
                    },
                  ],
                  raw: "{\n  stepNumber: number\n  label: string\n  stepLink: string\n  status: 'completed' | 'active' | 'error' | 'inactive'\n  statusLink?: string\n  description?: string\n}[]",
                },
                description: '',
              },
              activeStep: {
                required: !0,
                tsType: { name: 'number' },
                description: '',
              },
            },
          })
      },
      './src/components/Tooltip/index.tsx': (
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
          _barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/material/Tooltip/Tooltip.js'
            ),
          _barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/Tooltip/tooltipClasses.js'
            ),
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__('./node_modules/@mui/material/styles/styled.js')
        __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
        const __WEBPACK_DEFAULT_EXPORT__ = (0,
        _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.Ay)(
          ({ className, tooltipplacement, offsetX, offsetY, ...props }) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
              {
                ...props,
                classes: { popper: className },
                placement: tooltipplacement,
                PopperProps: {
                  popperOptions: {
                    modifiers: [
                      {
                        name: 'offset',
                        options: { offset: [offsetX, offsetY] },
                      },
                    ],
                  },
                },
              }
            )
        )(({ tooltipcolor }) => ({
          [`& .${_barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_4__.A.tooltip}`]:
            {
              backgroundColor: tooltipcolor,
              fontSize: '16px',
              fontFamily: 'Merriweather',
              fontWeight: 400,
              padding: '5px 8px',
            },
          [`& .${_barrel_optimize_names_Tooltip_tooltipClasses_mui_material__WEBPACK_IMPORTED_MODULE_4__.A.arrow}`]:
            { color: tooltipcolor },
        }))
      },
    },
  ]
)
