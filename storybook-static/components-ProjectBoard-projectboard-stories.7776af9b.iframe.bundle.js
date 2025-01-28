;(self.webpackChunkgoobs_frontend = self.webpackChunkgoobs_frontend || []).push(
  [
    [2083],
    {
      './src/components/ProjectBoard/projectboard.stories.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict'
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            AddTaskPopup_Administrator: () => AddTaskPopup_Administrator,
            AddTaskPopup_Company: () => AddTaskPopup_Company,
            AddTaskPopup_Customer: () => AddTaskPopup_Customer,
            BasicStatusBoard: () => BasicStatusBoard,
            SeverityBoard: () => SeverityBoard,
            ShowTaskPopup: () => ShowTaskPopup,
            SubStatusBoard: () => SubStatusBoard,
            TopicBoard: () => TopicBoard,
            __namedExportsOrder: () => __namedExportsOrder,
            default: () => projectboard_stories,
          })
        var jsx_runtime = __webpack_require__(
            './node_modules/next/dist/compiled/react/jsx-runtime.js'
          ),
          dist = __webpack_require__(
            './node_modules/@storybook/test/dist/index.mjs'
          ),
          react = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          Box = __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          Stack = __webpack_require__(
            './node_modules/@mui/material/Stack/Stack.js'
          ),
          esm_react = __webpack_require__('./node_modules/jotai/esm/react.mjs')
        const columnsAtom = (0,
        __webpack_require__('./node_modules/jotai/esm/vanilla.mjs').eU)([])
        var Toolbar = __webpack_require__('./src/components/Toolbar/index.tsx'),
          Close = __webpack_require__(
            './node_modules/@mui/icons-material/esm/Close.js'
          ),
          Dialog = __webpack_require__(
            './node_modules/@mui/material/Dialog/Dialog.js'
          ),
          IconButton = __webpack_require__(
            './node_modules/@mui/material/IconButton/IconButton.js'
          ),
          Grid = __webpack_require__('./src/components/Grid/index.tsx'),
          Typography = __webpack_require__(
            './src/components/Typography/index.tsx'
          )
        const typography_useGridTypography = grid => {
          if (!grid.typography) return null
          const renderTypography = (typographyItem, index) => {
            const {
              text,
              fontcolor,
              fontvariant,
              columnconfig: itemColumnConfig,
              cellconfig,
              component,
              ...restProps
            } = typographyItem
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig, border: 'none' },
              component: (0, jsx_runtime.jsx)(
                Typography.o,
                {
                  text,
                  fontvariant,
                  fontcolor,
                  component: component || 'span',
                  ...restProps,
                },
                `typography-${index}`
              ),
            }
          }
          return Array.isArray(grid.typography)
            ? grid.typography.map(renderTypography)
            : renderTypography(grid.typography, 0)
        }
        var RadioGroup = __webpack_require__(
          './src/components/RadioGroup/index.tsx'
        )
        const useRadioGroup = grid => {
          if (!grid.radiogroup) return null
          const renderRadioGroup = (radiogroup, index) => {
            const {
              label,
              options,
              defaultValue,
              name,
              labelFontVariant,
              labelFontColor,
              labelText,
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = radiogroup
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                RadioGroup.A,
                {
                  label,
                  options,
                  defaultValue,
                  name,
                  labelFontVariant,
                  labelFontColor,
                  labelText,
                  ...restProps,
                },
                `radiogroup-${index}`
              ),
            }
          }
          return Array.isArray(grid.radiogroup)
            ? grid.radiogroup.map(renderRadioGroup)
            : renderRadioGroup(grid.radiogroup, 0)
        }
        var ConfirmationCodeInput = __webpack_require__(
          './src/components/ConfirmationCodeInput/index.tsx'
        )
        const confirmationinput_useConfirmationInput = grid => {
          if (!grid.confirmationcodeinput) return null
          const renderConfirmationInput = (
            confirmationCodeInputProps,
            index
          ) => {
            const {
              identifier,
              isValid,
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = confirmationCodeInputProps
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                ConfirmationCodeInput.A,
                { identifier, isValid, ...restProps },
                `confirmationcodeinput-${index}`
              ),
            }
          }
          return Array.isArray(grid.confirmationcodeinput)
            ? grid.confirmationcodeinput.map(renderConfirmationInput)
            : renderConfirmationInput(grid.confirmationcodeinput, 0)
        }
        var next_link = __webpack_require__('./node_modules/next/link.js'),
          link_default = __webpack_require__.n(next_link)
        const link_useLink = grid => {
          if (!grid.link) return null
          const renderLink = (linkItem, index) => {
            const {
              link,
              text,
              fontcolor,
              fontvariant,
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = linkItem
            if (!link)
              throw new Error(
                'Link property is required in ExtendedTypographyProps'
              )
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                link_default(),
                {
                  href: link,
                  passHref: !0,
                  children: (0, jsx_runtime.jsx)(Typography.o, {
                    text,
                    fontvariant,
                    fontcolor,
                    ...restProps,
                  }),
                },
                `link-${index}`
              ),
            }
          }
          return Array.isArray(grid.link)
            ? grid.link.map(renderLink)
            : renderLink(grid.link, 0)
        }
        var next_image = __webpack_require__(
          './node_modules/@storybook/nextjs/dist/images/next-image.mjs'
        )
        const image_useImage = grid => {
          if (!grid.image) return null
          const renderImage = (imageItem, index) => {
            const {
              url,
              alt = '',
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = imageItem
            if (!url) throw new Error('URL is required for image')
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                next_image.A,
                {
                  src: url,
                  alt: alt || 'image',
                  style: { width: '100%', height: 'auto' },
                  fill: !0,
                  ...restProps,
                },
                `image-${index}`
              ),
            }
          }
          return Array.isArray(grid.image)
            ? grid.image.map(renderImage)
            : renderImage(grid.image, 0)
        }
        var Button = __webpack_require__('./src/components/Button/index.tsx')
        const button_useButton = grid => {
          if (!grid.button) return null
          const renderButton = (buttonItem, index) => {
            const {
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = buttonItem
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                Button.A,
                { ...restProps },
                `button-${index}`
              ),
            }
          }
          return Array.isArray(grid.button)
            ? grid.button.map(renderButton)
            : [renderButton(grid.button, 0)]
        }
        var PricingTable = __webpack_require__(
          './src/components/PricingTable/index.tsx'
        )
        const pricing_usePricing = pricing => {
          if (!pricing) return null
          return ((pricingItem, index) => {
            const {
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = pricingItem
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                PricingTable.A,
                { ...restProps },
                `pricingtable-${index}`
              ),
            }
          })(pricing, 0)
        }
        var Stepper = __webpack_require__('./src/components/Stepper/index.tsx')
        const stepper_useStepper = grid => {
          if (!grid.stepper) return null
          const renderStepper = (stepperProps, index) => {
            const {
              steps,
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = stepperProps
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                Stepper.H,
                { steps, ...restProps },
                `stepper-${index}`
              ),
            }
          }
          return Array.isArray(grid.stepper)
            ? grid.stepper.map((stepper, index) =>
                renderStepper(stepper, index)
              )
            : renderStepper(grid.stepper, 0)
        }
        var TransferList = __webpack_require__(
          './src/components/TransferList/index.tsx'
        )
        const transferlist_useTransferList = grid => {
          if (!grid.transferlist) return null
          const renderTransferList = (transferListItem, index) => {
            const {
              leftItems,
              rightItems,
              onChange,
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = transferListItem
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                TransferList.A,
                { leftItems, rightItems, onChange, ...restProps },
                `transferlist-${index}`
              ),
            }
          }
          return Array.isArray(grid.transferlist)
            ? grid.transferlist.map((item, index) =>
                renderTransferList(item, index)
              )
            : renderTransferList(grid.transferlist, 0)
        }
        var Card = __webpack_require__('./src/components/Card/index.tsx')
        const card_useCard = grid => {
          if (!grid.card) return null
          const renderCard = (cardProps, index) => {
            const {
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = cardProps
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                Card.A,
                { ...restProps },
                `card-${index}`
              ),
            }
          }
          return Array.isArray(grid.card)
            ? grid.card.map(renderCard)
            : renderCard(grid.card, 0)
        }
        var CodeCopy = __webpack_require__(
          './src/components/CodeCopy/index.tsx'
        )
        const codecopy_useCodeCopy = grid => {
          if (!grid.codecopy) return null
          const renderCodeCopy = (codeCopyProps, index) => {
            const {
              code,
              language,
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = codeCopyProps
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                CodeCopy.A,
                { code, language, ...restProps },
                `codecopy-${index}`
              ),
            }
          }
          return Array.isArray(grid.codecopy)
            ? grid.codecopy.map(renderCodeCopy)
            : renderCodeCopy(grid.codecopy, 0)
        }
        var TextField = __webpack_require__(
          './src/components/TextField/index.tsx'
        )
        const textfield_useTextField = grid => {
          if (!grid.textfield) return null
          const renderTextField = (component, index) => {
            const {
              columnconfig: itemColumnConfig,
              cellconfig,
              backgroundcolor,
              ...restProps
            } = component
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig, backgroundColor: backgroundcolor },
              component: (0, jsx_runtime.jsx)(
                TextField.A,
                { ...restProps },
                `textfield-${index}`
              ),
            }
          }
          return Array.isArray(grid.textfield)
            ? grid.textfield.map(renderTextField)
            : renderTextField(grid.textfield, 0)
        }
        var DateField = __webpack_require__(
          './src/components/DateField/index.tsx'
        )
        const datefield_useDateField = grid => {
          if (!grid.datefield) return null
          const renderDateField = (dateFieldItem, index) => {
            const {
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = dateFieldItem
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                DateField.A,
                { ...restProps },
                `datefield-${index}`
              ),
            }
          }
          return Array.isArray(grid.datefield)
            ? grid.datefield.map(renderDateField)
            : [renderDateField(grid.datefield, 0)]
        }
        var Dropdown = __webpack_require__(
          './src/components/Dropdown/index.tsx'
        )
        const dropdown_useDropdown = grid => {
          if (!grid.dropdown) return null
          const renderDropdown = (dropdownItem, index) => {
            const {
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = dropdownItem
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                Dropdown.A,
                { ...restProps },
                `dropdown-${index}`
              ),
            }
          }
          return Array.isArray(grid.dropdown)
            ? grid.dropdown.map(renderDropdown)
            : [renderDropdown(grid.dropdown, 0)]
        }
        var IncrementNumberField = __webpack_require__(
          './src/components/IncrementNumberField/index.tsx'
        )
        const useIncremementNumberField = grid => {
          if (!grid.incrementNumberField) return null
          const renderIncrementNumberField = (
            incrementNumberFieldItem,
            index
          ) => {
            const {
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = incrementNumberFieldItem
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                IncrementNumberField.A,
                { ...restProps },
                `increment-number-field-${index}`
              ),
            }
          }
          return Array.isArray(grid.incrementNumberField)
            ? grid.incrementNumberField.map(renderIncrementNumberField)
            : [renderIncrementNumberField(grid.incrementNumberField, 0)]
        }
        var Searchbar = __webpack_require__(
          './src/components/Searchbar/index.tsx'
        )
        const searchbar_useSearchbar = grid => {
          if (!grid.searchbar) return null
          const renderSearchbar = (searchbarItem, index) => {
            const {
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = searchbarItem
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                Searchbar.A,
                { ...restProps },
                `searchbar-${index}`
              ),
            }
          }
          return Array.isArray(grid.searchbar)
            ? grid.searchbar.map(renderSearchbar)
            : [renderSearchbar(grid.searchbar, 0)]
        }
        var NumberField = __webpack_require__(
          './src/components/NumberField/index.tsx'
        )
        const numberField_useNumberField = grid => {
          if (!grid.numberField) return null
          const renderNumberField = (numberFieldItem, index) => {
            const {
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = numberFieldItem
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                NumberField.A,
                { ...restProps },
                `number-field-${index}`
              ),
            }
          }
          return Array.isArray(grid.numberField)
            ? grid.numberField.map(renderNumberField)
            : [renderNumberField(grid.numberField, 0)]
        }
        var PasswordField = __webpack_require__(
          './src/components/PasswordField/index.tsx'
        )
        const passwordField_usePasswordField = grid => {
          if (!grid.passwordField) return null
          const renderPasswordField = (passwordFieldItem, index) => {
            const {
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = passwordFieldItem
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                PasswordField.A,
                { ...restProps },
                `password-field-${index}`
              ),
            }
          }
          return Array.isArray(grid.passwordField)
            ? grid.passwordField.map(renderPasswordField)
            : [renderPasswordField(grid.passwordField, 0)]
        }
        var QRCode = __webpack_require__('./src/components/QRCode/index.tsx')
        const qrcode_useQRCode = grid => {
          if (!grid.qrcode) return null
          const renderQRCode = (component, index) => {
            const {
              username,
              appName,
              size,
              title,
              onSecretGenerated,
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = component
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                QRCode.A,
                {
                  username,
                  appName,
                  size,
                  title,
                  onSecretGenerated,
                  ...restProps,
                },
                `qrcode-${index}`
              ),
            }
          }
          return Array.isArray(grid.qrcode)
            ? grid.qrcode.map(renderQRCode)
            : renderQRCode(grid.qrcode, 0)
        }
        var PhoneNumberField = __webpack_require__(
          './src/components/PhoneNumberField/index.tsx'
        )
        const phoneNumber_usePhoneNumber = grid => {
          if (!grid.phoneNumberField) return null
          const renderPhoneNumberField = (phoneNumberFieldItem, index) => {
            const {
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = phoneNumberFieldItem
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                PhoneNumberField.A,
                { ...restProps },
                `phone-number-field-${index}`
              ),
            }
          }
          return Array.isArray(grid.phoneNumberField)
            ? grid.phoneNumberField.map(renderPhoneNumberField)
            : [renderPhoneNumberField(grid.phoneNumberField, 0)]
        }
        var Checkbox = __webpack_require__(
          './src/components/Checkbox/index.tsx'
        )
        const checkbox_useCheckbox = grid => {
          if (!grid.checkbox) return null
          const renderCheckbox = (checkboxProps, index) => {
            const {
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = checkboxProps
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                Checkbox.A,
                { ...restProps },
                `checkbox-${index}`
              ),
            }
          }
          return Array.isArray(grid.checkbox)
            ? grid.checkbox.map(renderCheckbox)
            : renderCheckbox(grid.checkbox, 0)
        }
        var ComplexTextEditor = __webpack_require__(
          './src/components/ComplexTextEditor/index.tsx'
        )
        const complexeditor_useComplexEditor = grid => {
          if (!grid.complexeditor) return null
          const renderComplexEditor = (component, index) => {
            const {
              columnconfig: itemColumnConfig,
              cellconfig,
              backgroundcolor,
              ...restProps
            } = component
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig, backgroundColor: backgroundcolor },
              component: (0, jsx_runtime.jsx)(
                ComplexTextEditor.A,
                { ...restProps },
                `complexeditor-${index}`
              ),
            }
          }
          return Array.isArray(grid.complexeditor)
            ? grid.complexeditor.map(renderComplexEditor)
            : renderComplexEditor(grid.complexeditor, 0)
        }
        var SearchableDropdown = __webpack_require__(
          './src/components/SearchableDropdown/index.tsx'
        )
        const searchableDropdown_useSearchableDropdown = grid => {
          if (!grid.searchableDropdown) return null
          const renderSearchableDropdown = (searchableDropdownItem, index) => {
            const {
              columnconfig: itemColumnConfig,
              cellconfig,
              ...restProps
            } = searchableDropdownItem
            if (
              !itemColumnConfig ||
              'object' != typeof itemColumnConfig ||
              'number' != typeof itemColumnConfig.row ||
              'number' != typeof itemColumnConfig.column
            )
              throw new Error(
                'columnconfig must be an object with row and column as numbers'
              )
            return {
              ...itemColumnConfig,
              cellconfig: { ...cellconfig },
              component: (0, jsx_runtime.jsx)(
                SearchableDropdown.A,
                { ...restProps },
                `searchable-dropdown-${index}`
              ),
            }
          }
          return Array.isArray(grid.searchableDropdown)
            ? grid.searchableDropdown.map(renderSearchableDropdown)
            : [renderSearchableDropdown(grid.searchableDropdown, 0)]
        }
        var Accordion = __webpack_require__(
          './src/components/Accordion/index.tsx'
        )
        const accordion_useAccordion = grid => {
            if (!grid.accordion) return null
            const renderAccordion = (accordionItem, index) => {
              const {
                columnconfig: itemColumnConfig,
                cellconfig,
                summaryProps,
                detailsProps,
                summaryContent,
                detailsContent,
                ...restProps
              } = accordionItem
              if (
                !itemColumnConfig ||
                'object' != typeof itemColumnConfig ||
                'number' != typeof itemColumnConfig.row ||
                'number' != typeof itemColumnConfig.column
              )
                throw new Error(
                  'columnconfig must be an object with row and column as numbers'
                )
              return {
                ...itemColumnConfig,
                cellconfig: { ...cellconfig },
                component: (0, jsx_runtime.jsxs)(
                  Accordion.nD,
                  {
                    ...restProps,
                    children: [
                      (0, jsx_runtime.jsx)(Accordion.Xo, {
                        ...summaryProps,
                        children: summaryContent,
                      }),
                      (0, jsx_runtime.jsx)(Accordion.Zi, {
                        ...detailsProps,
                        children: detailsContent,
                      }),
                    ],
                  },
                  `accordion-${index}`
                ),
              }
            }
            return Array.isArray(grid.accordion)
              ? grid.accordion.map(renderAccordion)
              : [renderAccordion(grid.accordion, 0)]
          },
          projectboard_useProjectBoard = grid => {
            if (!grid.projectboard) return null
            const renderProjectBoard = (item, index) => {
              const {
                columnconfig: itemColumnConfig,
                cellconfig,
                columns,
                ...restProps
              } = item
              if (
                !itemColumnConfig ||
                'number' != typeof itemColumnConfig.row ||
                'number' != typeof itemColumnConfig.column
              )
                throw new Error(
                  'columnconfig must be an object with numeric row and column'
                )
              return {
                ...itemColumnConfig,
                cellconfig: { ...cellconfig },
                component: (0, jsx_runtime.jsx)(
                  components_ProjectBoard,
                  { columns, ...restProps },
                  `projectboard-${index}`
                ),
              }
            }
            return Array.isArray(grid.projectboard)
              ? grid.projectboard.map(renderProjectBoard)
              : renderProjectBoard(grid.projectboard, 0)
          }
        var MultiSelect = __webpack_require__(
          './src/components/MultiSelect/index.tsx'
        )
        const multiSelect_useMultiSelect = grid => {
            const { multiSelect } = grid
            if (!multiSelect) return null
            const renderMultiSelect = (item, index) => {
              const {
                columnconfig: itemColumnConfig,
                cellconfig,
                ...restProps
              } = item
              if (
                !itemColumnConfig ||
                'object' != typeof itemColumnConfig ||
                'number' != typeof itemColumnConfig.row ||
                'number' != typeof itemColumnConfig.column
              )
                throw new Error(
                  'columnconfig must be an object with row and column as numbers'
                )
              return {
                ...itemColumnConfig,
                cellconfig: { ...cellconfig },
                component: (0, jsx_runtime.jsx)(
                  MultiSelect.A,
                  { ...restProps },
                  `multiselect-${index}`
                ),
              }
            }
            return Array.isArray(multiSelect)
              ? multiSelect.map(renderMultiSelect)
              : renderMultiSelect(multiSelect, 0)
          },
          RenderContent = ({ grid, width, ...props }) => {
            var _grid_gridconfig
            let columnConfigs = []
            const addToColumnConfigs = config => {
              config &&
                (Array.isArray(config)
                  ? (columnConfigs = columnConfigs.concat(config))
                  : columnConfigs.push(config))
            }
            addToColumnConfigs(typography_useGridTypography(props)),
              addToColumnConfigs(useRadioGroup(props)),
              addToColumnConfigs(
                confirmationinput_useConfirmationInput({
                  confirmationcodeinput: props.confirmationcodeinput,
                })
              ),
              addToColumnConfigs(link_useLink(props)),
              addToColumnConfigs(button_useButton(props)),
              addToColumnConfigs(image_useImage(props)),
              addToColumnConfigs(complexeditor_useComplexEditor(props)),
              addToColumnConfigs(pricing_usePricing(props.pricing)),
              addToColumnConfigs(stepper_useStepper(props)),
              addToColumnConfigs(transferlist_useTransferList(props)),
              addToColumnConfigs(card_useCard(props)),
              addToColumnConfigs(codecopy_useCodeCopy(props)),
              addToColumnConfigs(
                searchableDropdown_useSearchableDropdown(props)
              ),
              addToColumnConfigs(textfield_useTextField(props)),
              addToColumnConfigs(datefield_useDateField(props)),
              addToColumnConfigs(projectboard_useProjectBoard(props)),
              addToColumnConfigs(accordion_useAccordion(props)),
              addToColumnConfigs(multiSelect_useMultiSelect(props)),
              addToColumnConfigs(checkbox_useCheckbox(props)),
              addToColumnConfigs(phoneNumber_usePhoneNumber(props)),
              addToColumnConfigs(dropdown_useDropdown(props)),
              addToColumnConfigs(
                useIncremementNumberField({
                  incrementNumberField: props.incrementNumberField,
                })
              ),
              addToColumnConfigs(searchbar_useSearchbar(props)),
              addToColumnConfigs(
                numberField_useNumberField({ numberField: props.numberField })
              ),
              addToColumnConfigs(
                passwordField_usePasswordField({
                  passwordField: props.passwordField,
                })
              ),
              addToColumnConfigs(qrcode_useQRCode({ qrcode: props.qrcode }))
            const updatedGridConfig = {
              ...grid.gridconfig,
              gridwidth: width
                ? `${width}px`
                : null === (_grid_gridconfig = grid.gridconfig) ||
                    void 0 === _grid_gridconfig
                  ? void 0
                  : _grid_gridconfig.gridwidth,
            }
            return (0, jsx_runtime.jsx)(Grid.A, {
              gridconfig: updatedGridConfig,
              columnconfig: columnConfigs,
            })
          }
        function ContentSection({ grids, width }) {
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: grids.map((gridProps, index) =>
              (0, jsx_runtime.jsx)(
                RenderContent,
                { ...gridProps, width },
                index
              )
            ),
          })
        }
        ContentSection.__docgenInfo = {
          description:
            'ContentSection component renders multiple grids based on the provided configuration.\n@param grids An array of ContentSectionProps, each representing a grid to be rendered.\n@param width Optional width for the content section, defaults to 450px if not provided.',
          methods: [],
          displayName: 'ContentSection',
          props: {
            grids: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  grid: {\n    gridconfig?: gridconfig\n  }\n  confirmationcodeinput?:\n    | ExtendedConfirmationCodeInputsProps\n    | ExtendedConfirmationCodeInputsProps[]\n  searchableDropdown?:\n    | ExtendedSearchableDropdownProps\n    | ExtendedSearchableDropdownProps[]\n  projectboard?: ExtendedProjectBoardProps | ExtendedProjectBoardProps[]\n  complexeditor?: ExtendedComplexEditorProps | ExtendedComplexEditorProps[]\n  typography?: TypographyProps | TypographyProps[]\n  accordion?: ExtendedAccordionProps | ExtendedAccordionProps[]\n  radiogroup?: ExtendedRadioGroupProps | ExtendedRadioGroupProps[]\n  link?: LinkProps | LinkProps[]\n  button?: ExtendedButtonProps | ExtendedButtonProps[]\n  image?: ExtendedImageProps | ExtendedImageProps[]\n  pricing?: ExtendedPricingProps\n  stepper?: ExtendedStepperProps | ExtendedStepperProps[]\n  transferlist?: ExtendedTransferListProps | ExtendedTransferListProps[]\n  card?: ExtendedCardProps | ExtendedCardProps[]\n  codecopy?: ExtendedCodeCopyProps | ExtendedCodeCopyProps[]\n  textfield?: ExtendedTextFieldProps | ExtendedTextFieldProps[]\n  datefield?: ExtendedDateFieldProps | ExtendedDateFieldProps[]\n  dropdown?: ExtendedDropdownProps | ExtendedDropdownProps[]\n  incrementNumberField?:\n    | ExtendedIncrementNumberFieldProps\n    | ExtendedIncrementNumberFieldProps[]\n  searchbar?: ExtendedSearchbarProps | ExtendedSearchbarProps[]\n  numberField?: ExtendedNumberFieldProps | ExtendedNumberFieldProps[]\n  passwordField?: ExtendedPasswordFieldProps | ExtendedPasswordFieldProps[]\n  qrcode?: ExtendedQRCodeProps | ExtendedQRCodeProps[]\n  phoneNumberField?:\n    | ExtendedPhoneNumberFieldProps\n    | ExtendedPhoneNumberFieldProps[]\n  checkbox?: ExtendedCheckboxProps | ExtendedCheckboxProps[]\n  multiSelect?: ExtendedMultiSelectProps | ExtendedMultiSelectProps[]\n}',
                    signature: {
                      properties: [
                        {
                          key: 'grid',
                          value: {
                            name: 'signature',
                            type: 'object',
                            raw: '{\n  gridconfig?: gridconfig\n}',
                            signature: {
                              properties: [
                                {
                                  key: 'gridconfig',
                                  value: { name: 'gridconfig', required: !1 },
                                },
                              ],
                            },
                            required: !0,
                          },
                        },
                        {
                          key: 'confirmationcodeinput',
                          value: {
                            name: 'union',
                            raw: '| ExtendedConfirmationCodeInputsProps\n| ExtendedConfirmationCodeInputsProps[]',
                            elements: [
                              { name: 'ExtendedConfirmationCodeInputsProps' },
                              {
                                name: 'Array',
                                elements: [
                                  {
                                    name: 'ExtendedConfirmationCodeInputsProps',
                                  },
                                ],
                                raw: 'ExtendedConfirmationCodeInputsProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'searchableDropdown',
                          value: {
                            name: 'union',
                            raw: '| ExtendedSearchableDropdownProps\n| ExtendedSearchableDropdownProps[]',
                            elements: [
                              { name: 'ExtendedSearchableDropdownProps' },
                              {
                                name: 'Array',
                                elements: [
                                  { name: 'ExtendedSearchableDropdownProps' },
                                ],
                                raw: 'ExtendedSearchableDropdownProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'projectboard',
                          value: {
                            name: 'union',
                            raw: 'ExtendedProjectBoardProps | ExtendedProjectBoardProps[]',
                            elements: [
                              { name: 'ExtendedProjectBoardProps' },
                              {
                                name: 'Array',
                                elements: [
                                  { name: 'ExtendedProjectBoardProps' },
                                ],
                                raw: 'ExtendedProjectBoardProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'complexeditor',
                          value: {
                            name: 'union',
                            raw: 'ExtendedComplexEditorProps | ExtendedComplexEditorProps[]',
                            elements: [
                              {
                                name: 'intersection',
                                raw: 'ComplexTextEditorProps & {\n  columnconfig?: ExtendedColumnConfig\n  cellconfig?: cellconfig\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n}',
                                elements: [
                                  { name: 'ComplexTextEditorProps' },
                                  {
                                    name: 'signature',
                                    type: 'object',
                                    raw: '{\n  columnconfig?: ExtendedColumnConfig\n  cellconfig?: cellconfig\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n}',
                                    signature: {
                                      properties: [
                                        {
                                          key: 'columnconfig',
                                          value: {
                                            name: 'intersection',
                                            raw: "Omit<columnconfig, 'component'> & {\n  component?: columnconfig['component']\n}",
                                            elements: [
                                              {
                                                name: 'Omit',
                                                elements: [
                                                  { name: 'columnconfig' },
                                                  {
                                                    name: 'literal',
                                                    value: "'component'",
                                                  },
                                                ],
                                                raw: "Omit<columnconfig, 'component'>",
                                              },
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: "{\n  component?: columnconfig['component']\n}",
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'component',
                                                      value: {
                                                        name: "columnconfig['component']",
                                                        raw: "columnconfig['component']",
                                                        required: !1,
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                            required: !1,
                                          },
                                        },
                                        {
                                          key: 'cellconfig',
                                          value: {
                                            name: 'cellconfig',
                                            required: !1,
                                          },
                                        },
                                        {
                                          key: 'backgroundcolor',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                        },
                                        {
                                          key: 'outlinecolor',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                        },
                                        {
                                          key: 'fontcolor',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                              {
                                name: 'Array',
                                elements: [
                                  {
                                    name: 'intersection',
                                    raw: 'ComplexTextEditorProps & {\n  columnconfig?: ExtendedColumnConfig\n  cellconfig?: cellconfig\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n}',
                                    elements: [
                                      { name: 'ComplexTextEditorProps' },
                                      {
                                        name: 'signature',
                                        type: 'object',
                                        raw: '{\n  columnconfig?: ExtendedColumnConfig\n  cellconfig?: cellconfig\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n}',
                                        signature: {
                                          properties: [
                                            {
                                              key: 'columnconfig',
                                              value: {
                                                name: 'intersection',
                                                raw: "Omit<columnconfig, 'component'> & {\n  component?: columnconfig['component']\n}",
                                                elements: [
                                                  {
                                                    name: 'Omit',
                                                    elements: [
                                                      { name: 'columnconfig' },
                                                      {
                                                        name: 'literal',
                                                        value: "'component'",
                                                      },
                                                    ],
                                                    raw: "Omit<columnconfig, 'component'>",
                                                  },
                                                  {
                                                    name: 'signature',
                                                    type: 'object',
                                                    raw: "{\n  component?: columnconfig['component']\n}",
                                                    signature: {
                                                      properties: [
                                                        {
                                                          key: 'component',
                                                          value: {
                                                            name: "columnconfig['component']",
                                                            raw: "columnconfig['component']",
                                                            required: !1,
                                                          },
                                                        },
                                                      ],
                                                    },
                                                  },
                                                ],
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'cellconfig',
                                              value: {
                                                name: 'cellconfig',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'backgroundcolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'outlinecolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'fontcolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                ],
                                raw: 'ExtendedComplexEditorProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'typography',
                          value: {
                            name: 'union',
                            raw: 'TypographyProps | TypographyProps[]',
                            elements: [
                              { name: 'TypographyProps' },
                              {
                                name: 'Array',
                                elements: [{ name: 'TypographyProps' }],
                                raw: 'TypographyProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'accordion',
                          value: {
                            name: 'union',
                            raw: 'ExtendedAccordionProps | ExtendedAccordionProps[]',
                            elements: [
                              { name: 'ExtendedAccordionProps' },
                              {
                                name: 'Array',
                                elements: [{ name: 'ExtendedAccordionProps' }],
                                raw: 'ExtendedAccordionProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'radiogroup',
                          value: {
                            name: 'union',
                            raw: 'ExtendedRadioGroupProps | ExtendedRadioGroupProps[]',
                            elements: [
                              { name: 'ExtendedRadioGroupProps' },
                              {
                                name: 'Array',
                                elements: [{ name: 'ExtendedRadioGroupProps' }],
                                raw: 'ExtendedRadioGroupProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'link',
                          value: {
                            name: 'union',
                            raw: 'LinkProps | LinkProps[]',
                            elements: [
                              { name: 'LinkProps' },
                              {
                                name: 'Array',
                                elements: [{ name: 'LinkProps' }],
                                raw: 'LinkProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'button',
                          value: {
                            name: 'union',
                            raw: 'ExtendedButtonProps | ExtendedButtonProps[]',
                            elements: [
                              { name: 'ExtendedButtonProps' },
                              {
                                name: 'Array',
                                elements: [{ name: 'ExtendedButtonProps' }],
                                raw: 'ExtendedButtonProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'image',
                          value: {
                            name: 'union',
                            raw: 'ExtendedImageProps | ExtendedImageProps[]',
                            elements: [
                              { name: 'ExtendedImageProps' },
                              {
                                name: 'Array',
                                elements: [{ name: 'ExtendedImageProps' }],
                                raw: 'ExtendedImageProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'pricing',
                          value: { name: 'ExtendedPricingProps', required: !1 },
                        },
                        {
                          key: 'stepper',
                          value: {
                            name: 'union',
                            raw: 'ExtendedStepperProps | ExtendedStepperProps[]',
                            elements: [
                              { name: 'ExtendedStepperProps' },
                              {
                                name: 'Array',
                                elements: [{ name: 'ExtendedStepperProps' }],
                                raw: 'ExtendedStepperProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'transferlist',
                          value: {
                            name: 'union',
                            raw: 'ExtendedTransferListProps | ExtendedTransferListProps[]',
                            elements: [
                              { name: 'ExtendedTransferListProps' },
                              {
                                name: 'Array',
                                elements: [
                                  { name: 'ExtendedTransferListProps' },
                                ],
                                raw: 'ExtendedTransferListProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'card',
                          value: {
                            name: 'union',
                            raw: 'ExtendedCardProps | ExtendedCardProps[]',
                            elements: [
                              { name: 'ExtendedCardProps' },
                              {
                                name: 'Array',
                                elements: [{ name: 'ExtendedCardProps' }],
                                raw: 'ExtendedCardProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'codecopy',
                          value: {
                            name: 'union',
                            raw: 'ExtendedCodeCopyProps | ExtendedCodeCopyProps[]',
                            elements: [
                              { name: 'ExtendedCodeCopyProps' },
                              {
                                name: 'Array',
                                elements: [{ name: 'ExtendedCodeCopyProps' }],
                                raw: 'ExtendedCodeCopyProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'textfield',
                          value: {
                            name: 'union',
                            raw: 'ExtendedTextFieldProps | ExtendedTextFieldProps[]',
                            elements: [
                              {
                                name: 'intersection',
                                raw: 'TextFieldProps & {\n  columnconfig?: ExtendedColumnConfig\n  cellconfig?: cellconfig\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n}',
                                elements: [
                                  {
                                    name: 'intersection',
                                    raw: "(\n  | StandardTextFieldProps\n  | OutlinedTextFieldProps\n  | FilledTextFieldProps\n) & {\n  endAdornment?: React.ReactNode\n  value?: string | number | readonly string[] | undefined\n  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void\n  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void\n  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void\n  error?: boolean\n  name?: string\n  label?: React.ReactNode\n  placeholder?: string\n  textAlign?: 'left' | 'center' | 'right'\n  inputPadding?: {\n    top?: number\n    left?: number\n  }\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n  inputfontcolor?: string\n  shrunkfontcolor?: string\n  unshrunkfontcolor?: string\n  placeholdercolor?: string\n  shrunklabelposition?: 'onNotch' | 'aboveNotch'\n  sx?: MuiTextFieldProps['sx']\n  slotProps?: MuiTextFieldProps['slotProps']\n}",
                                    elements: [
                                      { name: 'unknown' },
                                      {
                                        name: 'signature',
                                        type: 'object',
                                        raw: "{\n  endAdornment?: React.ReactNode\n  value?: string | number | readonly string[] | undefined\n  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void\n  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void\n  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void\n  error?: boolean\n  name?: string\n  label?: React.ReactNode\n  placeholder?: string\n  textAlign?: 'left' | 'center' | 'right'\n  inputPadding?: {\n    top?: number\n    left?: number\n  }\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n  inputfontcolor?: string\n  shrunkfontcolor?: string\n  unshrunkfontcolor?: string\n  placeholdercolor?: string\n  shrunklabelposition?: 'onNotch' | 'aboveNotch'\n  sx?: MuiTextFieldProps['sx']\n  slotProps?: MuiTextFieldProps['slotProps']\n}",
                                        signature: {
                                          properties: [
                                            {
                                              key: 'endAdornment',
                                              value: {
                                                name: 'ReactReactNode',
                                                raw: 'React.ReactNode',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'value',
                                              value: {
                                                name: 'union',
                                                raw: 'string | number | readonly string[] | undefined',
                                                elements: [
                                                  { name: 'string' },
                                                  { name: 'number' },
                                                  { name: 'unknown' },
                                                  { name: 'undefined' },
                                                ],
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'onChange',
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
                                                        elements: [
                                                          {
                                                            name: 'HTMLInputElement',
                                                          },
                                                        ],
                                                      },
                                                      name: 'event',
                                                    },
                                                  ],
                                                  return: { name: 'void' },
                                                },
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'onFocus',
                                              value: {
                                                name: 'signature',
                                                type: 'function',
                                                raw: '(event: React.FocusEvent<HTMLInputElement>) => void',
                                                signature: {
                                                  arguments: [
                                                    {
                                                      type: {
                                                        name: 'ReactFocusEvent',
                                                        raw: 'React.FocusEvent<HTMLInputElement>',
                                                        elements: [
                                                          {
                                                            name: 'HTMLInputElement',
                                                          },
                                                        ],
                                                      },
                                                      name: 'event',
                                                    },
                                                  ],
                                                  return: { name: 'void' },
                                                },
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'onBlur',
                                              value: {
                                                name: 'signature',
                                                type: 'function',
                                                raw: '(event: React.FocusEvent<HTMLInputElement>) => void',
                                                signature: {
                                                  arguments: [
                                                    {
                                                      type: {
                                                        name: 'ReactFocusEvent',
                                                        raw: 'React.FocusEvent<HTMLInputElement>',
                                                        elements: [
                                                          {
                                                            name: 'HTMLInputElement',
                                                          },
                                                        ],
                                                      },
                                                      name: 'event',
                                                    },
                                                  ],
                                                  return: { name: 'void' },
                                                },
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'error',
                                              value: {
                                                name: 'boolean',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'name',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'label',
                                              value: {
                                                name: 'ReactReactNode',
                                                raw: 'React.ReactNode',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'placeholder',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'textAlign',
                                              value: {
                                                name: 'union',
                                                raw: "'left' | 'center' | 'right'",
                                                elements: [
                                                  {
                                                    name: 'literal',
                                                    value: "'left'",
                                                  },
                                                  {
                                                    name: 'literal',
                                                    value: "'center'",
                                                  },
                                                  {
                                                    name: 'literal',
                                                    value: "'right'",
                                                  },
                                                ],
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'inputPadding',
                                              value: {
                                                name: 'signature',
                                                type: 'object',
                                                raw: '{\n  top?: number\n  left?: number\n}',
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'top',
                                                      value: {
                                                        name: 'number',
                                                        required: !1,
                                                      },
                                                    },
                                                    {
                                                      key: 'left',
                                                      value: {
                                                        name: 'number',
                                                        required: !1,
                                                      },
                                                    },
                                                  ],
                                                },
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'backgroundcolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'outlinecolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'fontcolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'inputfontcolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'shrunkfontcolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'unshrunkfontcolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'placeholdercolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'shrunklabelposition',
                                              value: {
                                                name: 'union',
                                                raw: "'onNotch' | 'aboveNotch'",
                                                elements: [
                                                  {
                                                    name: 'literal',
                                                    value: "'onNotch'",
                                                  },
                                                  {
                                                    name: 'literal',
                                                    value: "'aboveNotch'",
                                                  },
                                                ],
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'sx',
                                              value: {
                                                name: "MuiTextFieldProps['sx']",
                                                raw: "MuiTextFieldProps['sx']",
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'slotProps',
                                              value: {
                                                name: "MuiTextFieldProps['slotProps']",
                                                raw: "MuiTextFieldProps['slotProps']",
                                                required: !1,
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    name: 'signature',
                                    type: 'object',
                                    raw: '{\n  columnconfig?: ExtendedColumnConfig\n  cellconfig?: cellconfig\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n}',
                                    signature: {
                                      properties: [
                                        {
                                          key: 'columnconfig',
                                          value: {
                                            name: 'intersection',
                                            raw: "Omit<columnconfig, 'component'> & {\n  component?: columnconfig['component']\n}",
                                            elements: [
                                              {
                                                name: 'Omit',
                                                elements: [
                                                  { name: 'columnconfig' },
                                                  {
                                                    name: 'literal',
                                                    value: "'component'",
                                                  },
                                                ],
                                                raw: "Omit<columnconfig, 'component'>",
                                              },
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: "{\n  component?: columnconfig['component']\n}",
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'component',
                                                      value: {
                                                        name: "columnconfig['component']",
                                                        raw: "columnconfig['component']",
                                                        required: !1,
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                            required: !1,
                                          },
                                        },
                                        {
                                          key: 'cellconfig',
                                          value: {
                                            name: 'cellconfig',
                                            required: !1,
                                          },
                                        },
                                        {
                                          key: 'backgroundcolor',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                        },
                                        {
                                          key: 'outlinecolor',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                        },
                                        {
                                          key: 'fontcolor',
                                          value: {
                                            name: 'string',
                                            required: !1,
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                              {
                                name: 'Array',
                                elements: [
                                  {
                                    name: 'intersection',
                                    raw: 'TextFieldProps & {\n  columnconfig?: ExtendedColumnConfig\n  cellconfig?: cellconfig\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n}',
                                    elements: [
                                      {
                                        name: 'intersection',
                                        raw: "(\n  | StandardTextFieldProps\n  | OutlinedTextFieldProps\n  | FilledTextFieldProps\n) & {\n  endAdornment?: React.ReactNode\n  value?: string | number | readonly string[] | undefined\n  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void\n  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void\n  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void\n  error?: boolean\n  name?: string\n  label?: React.ReactNode\n  placeholder?: string\n  textAlign?: 'left' | 'center' | 'right'\n  inputPadding?: {\n    top?: number\n    left?: number\n  }\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n  inputfontcolor?: string\n  shrunkfontcolor?: string\n  unshrunkfontcolor?: string\n  placeholdercolor?: string\n  shrunklabelposition?: 'onNotch' | 'aboveNotch'\n  sx?: MuiTextFieldProps['sx']\n  slotProps?: MuiTextFieldProps['slotProps']\n}",
                                        elements: [
                                          { name: 'unknown' },
                                          {
                                            name: 'signature',
                                            type: 'object',
                                            raw: "{\n  endAdornment?: React.ReactNode\n  value?: string | number | readonly string[] | undefined\n  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void\n  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void\n  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void\n  error?: boolean\n  name?: string\n  label?: React.ReactNode\n  placeholder?: string\n  textAlign?: 'left' | 'center' | 'right'\n  inputPadding?: {\n    top?: number\n    left?: number\n  }\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n  inputfontcolor?: string\n  shrunkfontcolor?: string\n  unshrunkfontcolor?: string\n  placeholdercolor?: string\n  shrunklabelposition?: 'onNotch' | 'aboveNotch'\n  sx?: MuiTextFieldProps['sx']\n  slotProps?: MuiTextFieldProps['slotProps']\n}",
                                            signature: {
                                              properties: [
                                                {
                                                  key: 'endAdornment',
                                                  value: {
                                                    name: 'ReactReactNode',
                                                    raw: 'React.ReactNode',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'value',
                                                  value: {
                                                    name: 'union',
                                                    raw: 'string | number | readonly string[] | undefined',
                                                    elements: [
                                                      { name: 'string' },
                                                      { name: 'number' },
                                                      { name: 'unknown' },
                                                      { name: 'undefined' },
                                                    ],
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'onChange',
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
                                                            elements: [
                                                              {
                                                                name: 'HTMLInputElement',
                                                              },
                                                            ],
                                                          },
                                                          name: 'event',
                                                        },
                                                      ],
                                                      return: { name: 'void' },
                                                    },
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'onFocus',
                                                  value: {
                                                    name: 'signature',
                                                    type: 'function',
                                                    raw: '(event: React.FocusEvent<HTMLInputElement>) => void',
                                                    signature: {
                                                      arguments: [
                                                        {
                                                          type: {
                                                            name: 'ReactFocusEvent',
                                                            raw: 'React.FocusEvent<HTMLInputElement>',
                                                            elements: [
                                                              {
                                                                name: 'HTMLInputElement',
                                                              },
                                                            ],
                                                          },
                                                          name: 'event',
                                                        },
                                                      ],
                                                      return: { name: 'void' },
                                                    },
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'onBlur',
                                                  value: {
                                                    name: 'signature',
                                                    type: 'function',
                                                    raw: '(event: React.FocusEvent<HTMLInputElement>) => void',
                                                    signature: {
                                                      arguments: [
                                                        {
                                                          type: {
                                                            name: 'ReactFocusEvent',
                                                            raw: 'React.FocusEvent<HTMLInputElement>',
                                                            elements: [
                                                              {
                                                                name: 'HTMLInputElement',
                                                              },
                                                            ],
                                                          },
                                                          name: 'event',
                                                        },
                                                      ],
                                                      return: { name: 'void' },
                                                    },
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'error',
                                                  value: {
                                                    name: 'boolean',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'name',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'label',
                                                  value: {
                                                    name: 'ReactReactNode',
                                                    raw: 'React.ReactNode',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'placeholder',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'textAlign',
                                                  value: {
                                                    name: 'union',
                                                    raw: "'left' | 'center' | 'right'",
                                                    elements: [
                                                      {
                                                        name: 'literal',
                                                        value: "'left'",
                                                      },
                                                      {
                                                        name: 'literal',
                                                        value: "'center'",
                                                      },
                                                      {
                                                        name: 'literal',
                                                        value: "'right'",
                                                      },
                                                    ],
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'inputPadding',
                                                  value: {
                                                    name: 'signature',
                                                    type: 'object',
                                                    raw: '{\n  top?: number\n  left?: number\n}',
                                                    signature: {
                                                      properties: [
                                                        {
                                                          key: 'top',
                                                          value: {
                                                            name: 'number',
                                                            required: !1,
                                                          },
                                                        },
                                                        {
                                                          key: 'left',
                                                          value: {
                                                            name: 'number',
                                                            required: !1,
                                                          },
                                                        },
                                                      ],
                                                    },
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'backgroundcolor',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'outlinecolor',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'fontcolor',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'inputfontcolor',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'shrunkfontcolor',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'unshrunkfontcolor',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'placeholdercolor',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'shrunklabelposition',
                                                  value: {
                                                    name: 'union',
                                                    raw: "'onNotch' | 'aboveNotch'",
                                                    elements: [
                                                      {
                                                        name: 'literal',
                                                        value: "'onNotch'",
                                                      },
                                                      {
                                                        name: 'literal',
                                                        value: "'aboveNotch'",
                                                      },
                                                    ],
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'sx',
                                                  value: {
                                                    name: "MuiTextFieldProps['sx']",
                                                    raw: "MuiTextFieldProps['sx']",
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'slotProps',
                                                  value: {
                                                    name: "MuiTextFieldProps['slotProps']",
                                                    raw: "MuiTextFieldProps['slotProps']",
                                                    required: !1,
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                      {
                                        name: 'signature',
                                        type: 'object',
                                        raw: '{\n  columnconfig?: ExtendedColumnConfig\n  cellconfig?: cellconfig\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n}',
                                        signature: {
                                          properties: [
                                            {
                                              key: 'columnconfig',
                                              value: {
                                                name: 'intersection',
                                                raw: "Omit<columnconfig, 'component'> & {\n  component?: columnconfig['component']\n}",
                                                elements: [
                                                  {
                                                    name: 'Omit',
                                                    elements: [
                                                      { name: 'columnconfig' },
                                                      {
                                                        name: 'literal',
                                                        value: "'component'",
                                                      },
                                                    ],
                                                    raw: "Omit<columnconfig, 'component'>",
                                                  },
                                                  {
                                                    name: 'signature',
                                                    type: 'object',
                                                    raw: "{\n  component?: columnconfig['component']\n}",
                                                    signature: {
                                                      properties: [
                                                        {
                                                          key: 'component',
                                                          value: {
                                                            name: "columnconfig['component']",
                                                            raw: "columnconfig['component']",
                                                            required: !1,
                                                          },
                                                        },
                                                      ],
                                                    },
                                                  },
                                                ],
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'cellconfig',
                                              value: {
                                                name: 'cellconfig',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'backgroundcolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'outlinecolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'fontcolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                ],
                                raw: 'ExtendedTextFieldProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'datefield',
                          value: {
                            name: 'union',
                            raw: 'ExtendedDateFieldProps | ExtendedDateFieldProps[]',
                            elements: [
                              { name: 'ExtendedDateFieldProps' },
                              {
                                name: 'Array',
                                elements: [{ name: 'ExtendedDateFieldProps' }],
                                raw: 'ExtendedDateFieldProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'dropdown',
                          value: {
                            name: 'union',
                            raw: 'ExtendedDropdownProps | ExtendedDropdownProps[]',
                            elements: [
                              { name: 'ExtendedDropdownProps' },
                              {
                                name: 'Array',
                                elements: [{ name: 'ExtendedDropdownProps' }],
                                raw: 'ExtendedDropdownProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'incrementNumberField',
                          value: {
                            name: 'union',
                            raw: '| ExtendedIncrementNumberFieldProps\n| ExtendedIncrementNumberFieldProps[]',
                            elements: [
                              { name: 'ExtendedIncrementNumberFieldProps' },
                              {
                                name: 'Array',
                                elements: [
                                  { name: 'ExtendedIncrementNumberFieldProps' },
                                ],
                                raw: 'ExtendedIncrementNumberFieldProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'searchbar',
                          value: {
                            name: 'union',
                            raw: 'ExtendedSearchbarProps | ExtendedSearchbarProps[]',
                            elements: [
                              { name: 'ExtendedSearchbarProps' },
                              {
                                name: 'Array',
                                elements: [{ name: 'ExtendedSearchbarProps' }],
                                raw: 'ExtendedSearchbarProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'numberField',
                          value: {
                            name: 'union',
                            raw: 'ExtendedNumberFieldProps | ExtendedNumberFieldProps[]',
                            elements: [
                              { name: 'ExtendedNumberFieldProps' },
                              {
                                name: 'Array',
                                elements: [
                                  { name: 'ExtendedNumberFieldProps' },
                                ],
                                raw: 'ExtendedNumberFieldProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'passwordField',
                          value: {
                            name: 'union',
                            raw: 'ExtendedPasswordFieldProps | ExtendedPasswordFieldProps[]',
                            elements: [
                              { name: 'ExtendedPasswordFieldProps' },
                              {
                                name: 'Array',
                                elements: [
                                  { name: 'ExtendedPasswordFieldProps' },
                                ],
                                raw: 'ExtendedPasswordFieldProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'qrcode',
                          value: {
                            name: 'union',
                            raw: 'ExtendedQRCodeProps | ExtendedQRCodeProps[]',
                            elements: [
                              { name: 'ExtendedQRCodeProps' },
                              {
                                name: 'Array',
                                elements: [{ name: 'ExtendedQRCodeProps' }],
                                raw: 'ExtendedQRCodeProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'phoneNumberField',
                          value: {
                            name: 'union',
                            raw: '| ExtendedPhoneNumberFieldProps\n| ExtendedPhoneNumberFieldProps[]',
                            elements: [
                              {
                                name: 'intersection',
                                raw: 'TextFieldProps & {\n  columnconfig?: Partial<columnconfig>\n  cellconfig?: cellconfig\n}',
                                elements: [
                                  {
                                    name: 'intersection',
                                    raw: "(\n  | StandardTextFieldProps\n  | OutlinedTextFieldProps\n  | FilledTextFieldProps\n) & {\n  endAdornment?: React.ReactNode\n  value?: string | number | readonly string[] | undefined\n  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void\n  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void\n  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void\n  error?: boolean\n  name?: string\n  label?: React.ReactNode\n  placeholder?: string\n  textAlign?: 'left' | 'center' | 'right'\n  inputPadding?: {\n    top?: number\n    left?: number\n  }\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n  inputfontcolor?: string\n  shrunkfontcolor?: string\n  unshrunkfontcolor?: string\n  placeholdercolor?: string\n  shrunklabelposition?: 'onNotch' | 'aboveNotch'\n  sx?: MuiTextFieldProps['sx']\n  slotProps?: MuiTextFieldProps['slotProps']\n}",
                                    elements: [
                                      { name: 'unknown' },
                                      {
                                        name: 'signature',
                                        type: 'object',
                                        raw: "{\n  endAdornment?: React.ReactNode\n  value?: string | number | readonly string[] | undefined\n  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void\n  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void\n  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void\n  error?: boolean\n  name?: string\n  label?: React.ReactNode\n  placeholder?: string\n  textAlign?: 'left' | 'center' | 'right'\n  inputPadding?: {\n    top?: number\n    left?: number\n  }\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n  inputfontcolor?: string\n  shrunkfontcolor?: string\n  unshrunkfontcolor?: string\n  placeholdercolor?: string\n  shrunklabelposition?: 'onNotch' | 'aboveNotch'\n  sx?: MuiTextFieldProps['sx']\n  slotProps?: MuiTextFieldProps['slotProps']\n}",
                                        signature: {
                                          properties: [
                                            {
                                              key: 'endAdornment',
                                              value: {
                                                name: 'ReactReactNode',
                                                raw: 'React.ReactNode',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'value',
                                              value: {
                                                name: 'union',
                                                raw: 'string | number | readonly string[] | undefined',
                                                elements: [
                                                  { name: 'string' },
                                                  { name: 'number' },
                                                  { name: 'unknown' },
                                                  { name: 'undefined' },
                                                ],
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'onChange',
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
                                                        elements: [
                                                          {
                                                            name: 'HTMLInputElement',
                                                          },
                                                        ],
                                                      },
                                                      name: 'event',
                                                    },
                                                  ],
                                                  return: { name: 'void' },
                                                },
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'onFocus',
                                              value: {
                                                name: 'signature',
                                                type: 'function',
                                                raw: '(event: React.FocusEvent<HTMLInputElement>) => void',
                                                signature: {
                                                  arguments: [
                                                    {
                                                      type: {
                                                        name: 'ReactFocusEvent',
                                                        raw: 'React.FocusEvent<HTMLInputElement>',
                                                        elements: [
                                                          {
                                                            name: 'HTMLInputElement',
                                                          },
                                                        ],
                                                      },
                                                      name: 'event',
                                                    },
                                                  ],
                                                  return: { name: 'void' },
                                                },
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'onBlur',
                                              value: {
                                                name: 'signature',
                                                type: 'function',
                                                raw: '(event: React.FocusEvent<HTMLInputElement>) => void',
                                                signature: {
                                                  arguments: [
                                                    {
                                                      type: {
                                                        name: 'ReactFocusEvent',
                                                        raw: 'React.FocusEvent<HTMLInputElement>',
                                                        elements: [
                                                          {
                                                            name: 'HTMLInputElement',
                                                          },
                                                        ],
                                                      },
                                                      name: 'event',
                                                    },
                                                  ],
                                                  return: { name: 'void' },
                                                },
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'error',
                                              value: {
                                                name: 'boolean',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'name',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'label',
                                              value: {
                                                name: 'ReactReactNode',
                                                raw: 'React.ReactNode',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'placeholder',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'textAlign',
                                              value: {
                                                name: 'union',
                                                raw: "'left' | 'center' | 'right'",
                                                elements: [
                                                  {
                                                    name: 'literal',
                                                    value: "'left'",
                                                  },
                                                  {
                                                    name: 'literal',
                                                    value: "'center'",
                                                  },
                                                  {
                                                    name: 'literal',
                                                    value: "'right'",
                                                  },
                                                ],
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'inputPadding',
                                              value: {
                                                name: 'signature',
                                                type: 'object',
                                                raw: '{\n  top?: number\n  left?: number\n}',
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'top',
                                                      value: {
                                                        name: 'number',
                                                        required: !1,
                                                      },
                                                    },
                                                    {
                                                      key: 'left',
                                                      value: {
                                                        name: 'number',
                                                        required: !1,
                                                      },
                                                    },
                                                  ],
                                                },
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'backgroundcolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'outlinecolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'fontcolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'inputfontcolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'shrunkfontcolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'unshrunkfontcolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'placeholdercolor',
                                              value: {
                                                name: 'string',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'shrunklabelposition',
                                              value: {
                                                name: 'union',
                                                raw: "'onNotch' | 'aboveNotch'",
                                                elements: [
                                                  {
                                                    name: 'literal',
                                                    value: "'onNotch'",
                                                  },
                                                  {
                                                    name: 'literal',
                                                    value: "'aboveNotch'",
                                                  },
                                                ],
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'sx',
                                              value: {
                                                name: "MuiTextFieldProps['sx']",
                                                raw: "MuiTextFieldProps['sx']",
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'slotProps',
                                              value: {
                                                name: "MuiTextFieldProps['slotProps']",
                                                raw: "MuiTextFieldProps['slotProps']",
                                                required: !1,
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    name: 'signature',
                                    type: 'object',
                                    raw: '{\n  columnconfig?: Partial<columnconfig>\n  cellconfig?: cellconfig\n}',
                                    signature: {
                                      properties: [
                                        {
                                          key: 'columnconfig',
                                          value: {
                                            name: 'Partial',
                                            elements: [
                                              { name: 'columnconfig' },
                                            ],
                                            raw: 'Partial<columnconfig>',
                                            required: !1,
                                          },
                                        },
                                        {
                                          key: 'cellconfig',
                                          value: {
                                            name: 'cellconfig',
                                            required: !1,
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                              {
                                name: 'Array',
                                elements: [
                                  {
                                    name: 'intersection',
                                    raw: 'TextFieldProps & {\n  columnconfig?: Partial<columnconfig>\n  cellconfig?: cellconfig\n}',
                                    elements: [
                                      {
                                        name: 'intersection',
                                        raw: "(\n  | StandardTextFieldProps\n  | OutlinedTextFieldProps\n  | FilledTextFieldProps\n) & {\n  endAdornment?: React.ReactNode\n  value?: string | number | readonly string[] | undefined\n  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void\n  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void\n  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void\n  error?: boolean\n  name?: string\n  label?: React.ReactNode\n  placeholder?: string\n  textAlign?: 'left' | 'center' | 'right'\n  inputPadding?: {\n    top?: number\n    left?: number\n  }\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n  inputfontcolor?: string\n  shrunkfontcolor?: string\n  unshrunkfontcolor?: string\n  placeholdercolor?: string\n  shrunklabelposition?: 'onNotch' | 'aboveNotch'\n  sx?: MuiTextFieldProps['sx']\n  slotProps?: MuiTextFieldProps['slotProps']\n}",
                                        elements: [
                                          { name: 'unknown' },
                                          {
                                            name: 'signature',
                                            type: 'object',
                                            raw: "{\n  endAdornment?: React.ReactNode\n  value?: string | number | readonly string[] | undefined\n  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void\n  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void\n  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void\n  error?: boolean\n  name?: string\n  label?: React.ReactNode\n  placeholder?: string\n  textAlign?: 'left' | 'center' | 'right'\n  inputPadding?: {\n    top?: number\n    left?: number\n  }\n  backgroundcolor?: string\n  outlinecolor?: string\n  fontcolor?: string\n  inputfontcolor?: string\n  shrunkfontcolor?: string\n  unshrunkfontcolor?: string\n  placeholdercolor?: string\n  shrunklabelposition?: 'onNotch' | 'aboveNotch'\n  sx?: MuiTextFieldProps['sx']\n  slotProps?: MuiTextFieldProps['slotProps']\n}",
                                            signature: {
                                              properties: [
                                                {
                                                  key: 'endAdornment',
                                                  value: {
                                                    name: 'ReactReactNode',
                                                    raw: 'React.ReactNode',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'value',
                                                  value: {
                                                    name: 'union',
                                                    raw: 'string | number | readonly string[] | undefined',
                                                    elements: [
                                                      { name: 'string' },
                                                      { name: 'number' },
                                                      { name: 'unknown' },
                                                      { name: 'undefined' },
                                                    ],
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'onChange',
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
                                                            elements: [
                                                              {
                                                                name: 'HTMLInputElement',
                                                              },
                                                            ],
                                                          },
                                                          name: 'event',
                                                        },
                                                      ],
                                                      return: { name: 'void' },
                                                    },
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'onFocus',
                                                  value: {
                                                    name: 'signature',
                                                    type: 'function',
                                                    raw: '(event: React.FocusEvent<HTMLInputElement>) => void',
                                                    signature: {
                                                      arguments: [
                                                        {
                                                          type: {
                                                            name: 'ReactFocusEvent',
                                                            raw: 'React.FocusEvent<HTMLInputElement>',
                                                            elements: [
                                                              {
                                                                name: 'HTMLInputElement',
                                                              },
                                                            ],
                                                          },
                                                          name: 'event',
                                                        },
                                                      ],
                                                      return: { name: 'void' },
                                                    },
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'onBlur',
                                                  value: {
                                                    name: 'signature',
                                                    type: 'function',
                                                    raw: '(event: React.FocusEvent<HTMLInputElement>) => void',
                                                    signature: {
                                                      arguments: [
                                                        {
                                                          type: {
                                                            name: 'ReactFocusEvent',
                                                            raw: 'React.FocusEvent<HTMLInputElement>',
                                                            elements: [
                                                              {
                                                                name: 'HTMLInputElement',
                                                              },
                                                            ],
                                                          },
                                                          name: 'event',
                                                        },
                                                      ],
                                                      return: { name: 'void' },
                                                    },
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'error',
                                                  value: {
                                                    name: 'boolean',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'name',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'label',
                                                  value: {
                                                    name: 'ReactReactNode',
                                                    raw: 'React.ReactNode',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'placeholder',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'textAlign',
                                                  value: {
                                                    name: 'union',
                                                    raw: "'left' | 'center' | 'right'",
                                                    elements: [
                                                      {
                                                        name: 'literal',
                                                        value: "'left'",
                                                      },
                                                      {
                                                        name: 'literal',
                                                        value: "'center'",
                                                      },
                                                      {
                                                        name: 'literal',
                                                        value: "'right'",
                                                      },
                                                    ],
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'inputPadding',
                                                  value: {
                                                    name: 'signature',
                                                    type: 'object',
                                                    raw: '{\n  top?: number\n  left?: number\n}',
                                                    signature: {
                                                      properties: [
                                                        {
                                                          key: 'top',
                                                          value: {
                                                            name: 'number',
                                                            required: !1,
                                                          },
                                                        },
                                                        {
                                                          key: 'left',
                                                          value: {
                                                            name: 'number',
                                                            required: !1,
                                                          },
                                                        },
                                                      ],
                                                    },
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'backgroundcolor',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'outlinecolor',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'fontcolor',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'inputfontcolor',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'shrunkfontcolor',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'unshrunkfontcolor',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'placeholdercolor',
                                                  value: {
                                                    name: 'string',
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'shrunklabelposition',
                                                  value: {
                                                    name: 'union',
                                                    raw: "'onNotch' | 'aboveNotch'",
                                                    elements: [
                                                      {
                                                        name: 'literal',
                                                        value: "'onNotch'",
                                                      },
                                                      {
                                                        name: 'literal',
                                                        value: "'aboveNotch'",
                                                      },
                                                    ],
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'sx',
                                                  value: {
                                                    name: "MuiTextFieldProps['sx']",
                                                    raw: "MuiTextFieldProps['sx']",
                                                    required: !1,
                                                  },
                                                },
                                                {
                                                  key: 'slotProps',
                                                  value: {
                                                    name: "MuiTextFieldProps['slotProps']",
                                                    raw: "MuiTextFieldProps['slotProps']",
                                                    required: !1,
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                      {
                                        name: 'signature',
                                        type: 'object',
                                        raw: '{\n  columnconfig?: Partial<columnconfig>\n  cellconfig?: cellconfig\n}',
                                        signature: {
                                          properties: [
                                            {
                                              key: 'columnconfig',
                                              value: {
                                                name: 'Partial',
                                                elements: [
                                                  { name: 'columnconfig' },
                                                ],
                                                raw: 'Partial<columnconfig>',
                                                required: !1,
                                              },
                                            },
                                            {
                                              key: 'cellconfig',
                                              value: {
                                                name: 'cellconfig',
                                                required: !1,
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                ],
                                raw: 'ExtendedPhoneNumberFieldProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'checkbox',
                          value: {
                            name: 'union',
                            raw: 'ExtendedCheckboxProps | ExtendedCheckboxProps[]',
                            elements: [
                              { name: 'ExtendedCheckboxProps' },
                              {
                                name: 'Array',
                                elements: [{ name: 'ExtendedCheckboxProps' }],
                                raw: 'ExtendedCheckboxProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                        {
                          key: 'multiSelect',
                          value: {
                            name: 'union',
                            raw: 'ExtendedMultiSelectProps | ExtendedMultiSelectProps[]',
                            elements: [
                              {
                                name: 'intersection',
                                raw: "MultiSelectChipProps & {\n  /**\n   * Additional configuration for the grid column.\n   */\n  columnconfig?: Omit<columnconfig, 'component'> & {\n    component?: columnconfig['component']\n  }\n  /**\n   * Configuration for the individual cell.\n   */\n  cellconfig?: cellconfig\n}",
                                elements: [
                                  { name: 'MultiSelectChipProps' },
                                  {
                                    name: 'signature',
                                    type: 'object',
                                    raw: "{\n  /**\n   * Additional configuration for the grid column.\n   */\n  columnconfig?: Omit<columnconfig, 'component'> & {\n    component?: columnconfig['component']\n  }\n  /**\n   * Configuration for the individual cell.\n   */\n  cellconfig?: cellconfig\n}",
                                    signature: {
                                      properties: [
                                        {
                                          key: 'columnconfig',
                                          value: {
                                            name: 'intersection',
                                            raw: "Omit<columnconfig, 'component'> & {\n  component?: columnconfig['component']\n}",
                                            elements: [
                                              {
                                                name: 'Omit',
                                                elements: [
                                                  { name: 'columnconfig' },
                                                  {
                                                    name: 'literal',
                                                    value: "'component'",
                                                  },
                                                ],
                                                raw: "Omit<columnconfig, 'component'>",
                                              },
                                              {
                                                name: 'signature',
                                                type: 'object',
                                                raw: "{\n  component?: columnconfig['component']\n}",
                                                signature: {
                                                  properties: [
                                                    {
                                                      key: 'component',
                                                      value: {
                                                        name: "columnconfig['component']",
                                                        raw: "columnconfig['component']",
                                                        required: !1,
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                            required: !1,
                                          },
                                          description:
                                            'Additional configuration for the grid column.',
                                        },
                                        {
                                          key: 'cellconfig',
                                          value: {
                                            name: 'cellconfig',
                                            required: !1,
                                          },
                                          description:
                                            'Configuration for the individual cell.',
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                              {
                                name: 'Array',
                                elements: [
                                  {
                                    name: 'intersection',
                                    raw: "MultiSelectChipProps & {\n  /**\n   * Additional configuration for the grid column.\n   */\n  columnconfig?: Omit<columnconfig, 'component'> & {\n    component?: columnconfig['component']\n  }\n  /**\n   * Configuration for the individual cell.\n   */\n  cellconfig?: cellconfig\n}",
                                    elements: [
                                      { name: 'MultiSelectChipProps' },
                                      {
                                        name: 'signature',
                                        type: 'object',
                                        raw: "{\n  /**\n   * Additional configuration for the grid column.\n   */\n  columnconfig?: Omit<columnconfig, 'component'> & {\n    component?: columnconfig['component']\n  }\n  /**\n   * Configuration for the individual cell.\n   */\n  cellconfig?: cellconfig\n}",
                                        signature: {
                                          properties: [
                                            {
                                              key: 'columnconfig',
                                              value: {
                                                name: 'intersection',
                                                raw: "Omit<columnconfig, 'component'> & {\n  component?: columnconfig['component']\n}",
                                                elements: [
                                                  {
                                                    name: 'Omit',
                                                    elements: [
                                                      { name: 'columnconfig' },
                                                      {
                                                        name: 'literal',
                                                        value: "'component'",
                                                      },
                                                    ],
                                                    raw: "Omit<columnconfig, 'component'>",
                                                  },
                                                  {
                                                    name: 'signature',
                                                    type: 'object',
                                                    raw: "{\n  component?: columnconfig['component']\n}",
                                                    signature: {
                                                      properties: [
                                                        {
                                                          key: 'component',
                                                          value: {
                                                            name: "columnconfig['component']",
                                                            raw: "columnconfig['component']",
                                                            required: !1,
                                                          },
                                                        },
                                                      ],
                                                    },
                                                  },
                                                ],
                                                required: !1,
                                              },
                                              description:
                                                'Additional configuration for the grid column.',
                                            },
                                            {
                                              key: 'cellconfig',
                                              value: {
                                                name: 'cellconfig',
                                                required: !1,
                                              },
                                              description:
                                                'Configuration for the individual cell.',
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                ],
                                raw: 'ExtendedMultiSelectProps[]',
                              },
                            ],
                            required: !1,
                          },
                        },
                      ],
                    },
                  },
                ],
                raw: 'Array<{\n  grid: {\n    gridconfig?: gridconfig\n  }\n  confirmationcodeinput?:\n    | ExtendedConfirmationCodeInputsProps\n    | ExtendedConfirmationCodeInputsProps[]\n  searchableDropdown?:\n    | ExtendedSearchableDropdownProps\n    | ExtendedSearchableDropdownProps[]\n  projectboard?: ExtendedProjectBoardProps | ExtendedProjectBoardProps[]\n  complexeditor?: ExtendedComplexEditorProps | ExtendedComplexEditorProps[]\n  typography?: TypographyProps | TypographyProps[]\n  accordion?: ExtendedAccordionProps | ExtendedAccordionProps[]\n  radiogroup?: ExtendedRadioGroupProps | ExtendedRadioGroupProps[]\n  link?: LinkProps | LinkProps[]\n  button?: ExtendedButtonProps | ExtendedButtonProps[]\n  image?: ExtendedImageProps | ExtendedImageProps[]\n  pricing?: ExtendedPricingProps\n  stepper?: ExtendedStepperProps | ExtendedStepperProps[]\n  transferlist?: ExtendedTransferListProps | ExtendedTransferListProps[]\n  card?: ExtendedCardProps | ExtendedCardProps[]\n  codecopy?: ExtendedCodeCopyProps | ExtendedCodeCopyProps[]\n  textfield?: ExtendedTextFieldProps | ExtendedTextFieldProps[]\n  datefield?: ExtendedDateFieldProps | ExtendedDateFieldProps[]\n  dropdown?: ExtendedDropdownProps | ExtendedDropdownProps[]\n  incrementNumberField?:\n    | ExtendedIncrementNumberFieldProps\n    | ExtendedIncrementNumberFieldProps[]\n  searchbar?: ExtendedSearchbarProps | ExtendedSearchbarProps[]\n  numberField?: ExtendedNumberFieldProps | ExtendedNumberFieldProps[]\n  passwordField?: ExtendedPasswordFieldProps | ExtendedPasswordFieldProps[]\n  qrcode?: ExtendedQRCodeProps | ExtendedQRCodeProps[]\n  phoneNumberField?:\n    | ExtendedPhoneNumberFieldProps\n    | ExtendedPhoneNumberFieldProps[]\n  checkbox?: ExtendedCheckboxProps | ExtendedCheckboxProps[]\n  multiSelect?: ExtendedMultiSelectProps | ExtendedMultiSelectProps[]\n}>',
              },
              description: '',
            },
            width: {
              required: !1,
              tsType: { name: 'number' },
              description: '',
            },
          },
        }
        const formContainerStyle = {
          p: 2,
          bgcolor: 'background.paper',
          boxShadow: 1,
        }
        function Popup({
          open,
          close,
          onClose,
          title,
          description,
          grids,
          content,
          width = 450,
        }) {
          const [isOpen, setIsOpen] = (0, react.useState)(open),
            [, setIsClosed] = (0, react.useState)(!open)
          ;(0, react.useEffect)(() => {
            setIsOpen(open), setIsClosed(!open)
          }, [open]),
            (0, react.useEffect)(() => {
              'boolean' == typeof close &&
                (setIsOpen(!close), setIsClosed(close))
            }, [close])
          const headerGrid = (0, react.useMemo)(
              () => ({
                grid: {
                  gridconfig: {
                    gridname: 'formHeader',
                    marginbottom: 0.5,
                    gridwidth: '100%',
                  },
                },
                typography: [
                  {
                    text: title,
                    fontvariant: 'merrih5',
                    fontcolor: 'black',
                    columnconfig: {
                      row: 1,
                      column: 1,
                      gridname: 'formHeader',
                      columnwidth: '100%',
                      alignment: 'left',
                      marginbottom: 1.5,
                    },
                  },
                  {
                    text: description,
                    fontvariant: 'merriparagraph',
                    fontcolor: 'black',
                    columnconfig: {
                      row: 2,
                      column: 1,
                      alignment: 'left',
                      gridname: 'formHeader',
                      columnwidth: '100%',
                    },
                  },
                ],
              }),
              [title, description]
            ),
            renderHeader = (0, react.useMemo)(
              () =>
                (0, jsx_runtime.jsx)(ContentSection, { grids: [headerGrid] }),
              [headerGrid]
            ),
            renderContent = (0, react.useMemo)(
              () =>
                (0, jsx_runtime.jsxs)(Box.A, {
                  sx: formContainerStyle,
                  children: [
                    (0, jsx_runtime.jsx)(Box.A, {
                      mb: 0,
                      children: renderHeader,
                    }),
                    content ||
                      (grids &&
                        (0, jsx_runtime.jsx)(ContentSection, { grids })),
                  ],
                }),
              [renderHeader, content, grids]
            ),
            handleClose = () => {
              setIsOpen(!1), setIsClosed(!0), null == onClose || onClose()
            }
          return (0, jsx_runtime.jsxs)(Dialog.A, {
            open: isOpen,
            onClose: handleClose,
            fullWidth: !0,
            maxWidth: !1,
            PaperProps: {
              style: { width: `${width}px`, pointerEvents: 'auto' },
            },
            children: [
              (0, jsx_runtime.jsx)(IconButton.A, {
                size: 'small',
                onClick: handleClose,
                sx: {
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: theme => theme.palette.grey[500],
                  zIndex: theme => theme.zIndex.modal + 1,
                  cursor: 'pointer',
                  '&:hover': { color: theme => theme.palette.grey[700] },
                },
                children: (0, jsx_runtime.jsx)(Close.A, {}),
              }),
              renderContent,
            ],
          })
        }
        const Form_Popup = Popup
        Popup.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Popup',
          props: {
            open: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            close: {
              required: !0,
              tsType: { name: 'boolean' },
              description:
                'Optional flag indicating the popup should be closed from the parent.',
            },
            onClose: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description:
                'Optional callback so the parent can be informed when user closes the dialog.',
            },
            title: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            description: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            grids: {
              required: !1,
              tsType: {
                name: "ContentSectionProps['grids']",
                raw: "ContentSectionProps['grids']",
              },
              description: '',
            },
            content: {
              required: !1,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            width: {
              required: !1,
              tsType: { name: 'number' },
              description: '',
              defaultValue: { value: '450', computed: !1 },
            },
          },
        }
        const AddTask = ({
            open,
            close,
            onClose,
            onSubmit,
            variant = 'customer',
            statuses,
            subStatuses,
            topics,
            schedulingQueues,
            knowledgebaseArticles,
            customers,
            employees,
            severityLevels,
          }) => {
            const [selectedAccount, setSelectedAccount] = (0, react.useState)(
                ''
              ),
              [selectedAdministrator, setSelectedAdministrator] = (0,
              react.useState)(''),
              [selectedEmployee, setSelectedEmployee] = (0, react.useState)(''),
              [selectedSeverity, setSelectedSeverity] = (0, react.useState)(''),
              [selectedQueue, setSelectedQueue] = (0, react.useState)(''),
              [selectedStatus, setSelectedStatus] = (0, react.useState)(''),
              [selectedSubStatus, setSelectedSubStatus] = (0, react.useState)(
                ''
              ),
              [selectedTopicIds, setSelectedTopicIds] = (0, react.useState)([]),
              [selectedArticleIds, setSelectedArticleIds] = (0, react.useState)(
                []
              ),
              [taskTitle, setTaskTitle] = (0, react.useState)(''),
              [taskDescription, setTaskDescription] = (0, react.useState)(''),
              severityOptions = severityLevels.map(sl => ({ value: sl._id })),
              statusOptions = statuses.map(s => ({ value: s._id })),
              subStatusOptions = subStatuses.map(s => ({ value: s._id })),
              queueOptions = schedulingQueues.map(q => ({ value: q._id })),
              customerOptions = customers.map(c => ({
                value: c._id || '',
                attribute1: [c.firstName, c.lastName].filter(Boolean).join(' '),
              })),
              employeeOptions = employees.map(e => ({
                value: e._id || '',
                attribute1: [e.firstName, e.lastName].filter(Boolean).join(' '),
              }))
            const mainGrid = {
                grid: { gridconfig: { gridwidth: '100%' } },
                dropdown: [
                  'customer' === variant && {
                    label: 'Customer Account',
                    name: 'customerAccount',
                    options: customerOptions,
                    value: selectedAccount,
                    onChange: e => setSelectedAccount(e.target.value),
                    columnconfig: { row: 1, column: 1, columnwidth: '50%' },
                  },
                  'customer' === variant && {
                    label: 'Assigned Employee',
                    name: 'assignedEmployee',
                    options: employeeOptions,
                    value: selectedEmployee,
                    onChange: e => setSelectedEmployee(e.target.value),
                    columnconfig: { row: 1, column: 2, columnwidth: '50%' },
                  },
                  'company' === variant && {
                    label: 'Company Account',
                    name: 'companyAccount',
                    options: [{ value: 'AcmeInc' }, { value: 'TechCorp' }],
                    value: selectedAccount,
                    onChange: e => setSelectedAccount(e.target.value),
                    columnconfig: { row: 1, column: 1, columnwidth: '50%' },
                  },
                  'company' === variant && {
                    label: 'Assigned Administrator',
                    name: 'assignedAdministrator',
                    options: employeeOptions,
                    value: selectedAdministrator,
                    onChange: e => setSelectedAdministrator(e.target.value),
                    columnconfig: { row: 1, column: 2, columnwidth: '50%' },
                  },
                  {
                    label: 'Severity Level',
                    name: 'severityLevel',
                    options: severityOptions,
                    value: selectedSeverity,
                    onChange: e => setSelectedSeverity(e.target.value),
                    columnconfig: { row: 2, column: 1, columnwidth: '50%' },
                  },
                  {
                    label: 'Associated Product (Queue)',
                    name: 'associatedQueue',
                    options: queueOptions,
                    value: selectedQueue,
                    onChange: e => setSelectedQueue(e.target.value),
                    columnconfig: { row: 2, column: 2, columnwidth: '50%' },
                  },
                  {
                    label: 'Status',
                    name: 'status',
                    options: statusOptions,
                    value: selectedStatus,
                    onChange: e => setSelectedStatus(e.target.value),
                    columnconfig: { row: 3, column: 1, columnwidth: '50%' },
                  },
                  {
                    label: 'Substatus',
                    name: 'substatus',
                    options: subStatusOptions,
                    value: selectedSubStatus,
                    onChange: e => setSelectedSubStatus(e.target.value),
                    columnconfig: { row: 3, column: 2, columnwidth: '50%' },
                  },
                ].filter(function isDefinedDropdown(val) {
                  return Boolean(val)
                }),
                multiSelect: [
                  {
                    label: 'Topics (by ID)',
                    options: topics.map(t => t._id),
                    defaultSelected: selectedTopicIds,
                    onChange: newVals => setSelectedTopicIds(newVals),
                    columnconfig: { row: 4, column: 1, columnwidth: '100%' },
                  },
                  {
                    label: 'Knowledgebase Articles (by ID)',
                    options: knowledgebaseArticles.map(a => a._id),
                    defaultSelected: selectedArticleIds,
                    onChange: newVals => setSelectedArticleIds(newVals),
                    columnconfig: { row: 5, column: 1, columnwidth: '100%' },
                  },
                ],
                textfield: [
                  {
                    label: 'Task Title',
                    value: taskTitle,
                    onChange: e => setTaskTitle(e.target.value),
                    columnconfig: { row: 6, column: 1, columnwidth: '100%' },
                  },
                ],
                complexeditor: [
                  {
                    label: 'Task Description',
                    editorType: 'simple',
                    value: taskDescription,
                    minRows: 5,
                    onChange: val => setTaskDescription(val),
                    columnconfig: { row: 7, column: 1, columnwidth: '100%' },
                  },
                ],
              },
              buttonGrid = {
                grid: { gridconfig: { alignment: 'right' } },
                button: [
                  {
                    text: 'Cancel',
                    backgroundcolor: 'none',
                    fontcolor: 'black',
                    onClick: onClose,
                    columnconfig: { row: 1, column: 1 },
                  },
                  {
                    text: 'Create Task',
                    backgroundcolor: '#1976d2',
                    fontcolor: 'white',
                    onClick: () => {
                      const newTaskData = {
                        title: taskTitle,
                        description: taskDescription,
                        topicIds: selectedTopicIds,
                        articleIds: selectedArticleIds,
                      }
                      selectedSeverity &&
                        (newTaskData.severityId = selectedSeverity),
                        selectedQueue &&
                          (newTaskData.schedulingQueueId = selectedQueue),
                        selectedStatus &&
                          (newTaskData.statusId = selectedStatus),
                        selectedSubStatus &&
                          (newTaskData.substatusId = selectedSubStatus),
                        'customer' === variant
                          ? ((newTaskData.customerId =
                              selectedAccount || void 0),
                            selectedEmployee &&
                              (newTaskData.employeeIds = [selectedEmployee]))
                          : 'company' === variant &&
                            ((newTaskData.companyId =
                              selectedAccount || void 0),
                            selectedAdministrator &&
                              (newTaskData.employeeIds = [
                                selectedAdministrator,
                              ])),
                        onSubmit(newTaskData)
                    },
                    columnconfig: { row: 1, column: 2 },
                  },
                ],
              }
            return (0, jsx_runtime.jsx)(Form_Popup, {
              open,
              close: null != close && close,
              onClose,
              title: 'Create Task',
              width: 700,
              grids: [mainGrid, buttonGrid],
            })
          },
          client = AddTask
        AddTask.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'AddTask',
          props: {
            open: {
              required: !0,
              tsType: { name: 'boolean' },
              description: 'Controls whether the Popup is open or closed.',
            },
            close: {
              required: !1,
              tsType: { name: 'boolean' },
              description: 'If `true`, force the Popup closed.',
            },
            onClose: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description:
                'Called when user closes the dialog (via Cancel, X button, backdrop, etc.).',
            },
            onSubmit: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: "(newTask: Omit<Task, '_id'>) => void",
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'Omit',
                        elements: [
                          {
                            name: 'signature',
                            type: 'object',
                            raw: '{\n  _id: string\n  /** The parent company ID or other domain-specific reference. */\n  companyId?: string\n\n  title: string\n  description: string\n\n  /** If severity is linked to a separate record, store it here. */\n  severityId?: string\n  /** The main status. */\n  statusId?: string\n  /** The sub-status. */\n  substatusId?: string\n  /** The scheduling queue ID. */\n  schedulingQueueId?: string\n  /** Topics array, each referencing a topic ID. */\n  topicIds?: string[]\n  /** Comments array, referencing comment IDs. */\n  commentIds?: string[]\n  /** Employee IDs assigned to the task. */\n  employeeIds?: string[]\n  /** Knowledgebase article IDs. */\n  articleIds?: string[]\n  /** The "customer" ID if you have one. */\n  customerId?: string\n\n  /** Timestamps. */\n  createdAt?: Date\n  closedAt?: Date\n  updatedAt?: Date\n  createdBy?: string\n\n  /**\n   * If you want to store the actual comments (rather than just commentIds),\n   * so ShowTask can display them directly.\n   */\n  comments?: Array<{\n    _id: string\n    authorName: string\n    text: string\n  }>\n\n  /** If you store the "customer assigned" label as text (e.g. "Bobbie Sue"). */\n  customerAssigned?: string\n\n  /** Severity label text (e.g. "Critical"). */\n  severity?: string\n\n  /** Scheduling Queue text (e.g. "Technologies Unlimited"). */\n  schedulingQueue?: string\n\n  /** High-level status text (e.g. "Open"). */\n  status?: string\n\n  /** Sub-status text (e.g. "In Progress"). */\n  subStatus?: string\n\n  /**\n   * If you want to store the actual topic strings (e.g. ["Technical Support"]).\n   * This can be used in addition to or instead of topicIds.\n   */\n  topicLabels?: string[]\n\n  /**\n   * If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\n   * This can be used in addition to or instead of articleIds.\n   */\n  kbArticles?: string[]\n\n  /** A string representing the assigned team member (e.g. "Matthew Goluba"). */\n  teamMember?: string\n\n  /** If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST"). */\n  nextActionDate?: string\n}',
                            signature: {
                              properties: [
                                {
                                  key: '_id',
                                  value: { name: 'string', required: !0 },
                                },
                                {
                                  key: 'companyId',
                                  value: { name: 'string', required: !1 },
                                  description:
                                    'The parent company ID or other domain-specific reference.',
                                },
                                {
                                  key: 'title',
                                  value: { name: 'string', required: !0 },
                                },
                                {
                                  key: 'description',
                                  value: { name: 'string', required: !0 },
                                },
                                {
                                  key: 'severityId',
                                  value: { name: 'string', required: !1 },
                                  description:
                                    'If severity is linked to a separate record, store it here.',
                                },
                                {
                                  key: 'statusId',
                                  value: { name: 'string', required: !1 },
                                  description: 'The main status.',
                                },
                                {
                                  key: 'substatusId',
                                  value: { name: 'string', required: !1 },
                                  description: 'The sub-status.',
                                },
                                {
                                  key: 'schedulingQueueId',
                                  value: { name: 'string', required: !1 },
                                  description: 'The scheduling queue ID.',
                                },
                                {
                                  key: 'topicIds',
                                  value: {
                                    name: 'Array',
                                    elements: [{ name: 'string' }],
                                    raw: 'string[]',
                                    required: !1,
                                  },
                                  description:
                                    'Topics array, each referencing a topic ID.',
                                },
                                {
                                  key: 'commentIds',
                                  value: {
                                    name: 'Array',
                                    elements: [{ name: 'string' }],
                                    raw: 'string[]',
                                    required: !1,
                                  },
                                  description:
                                    'Comments array, referencing comment IDs.',
                                },
                                {
                                  key: 'employeeIds',
                                  value: {
                                    name: 'Array',
                                    elements: [{ name: 'string' }],
                                    raw: 'string[]',
                                    required: !1,
                                  },
                                  description:
                                    'Employee IDs assigned to the task.',
                                },
                                {
                                  key: 'articleIds',
                                  value: {
                                    name: 'Array',
                                    elements: [{ name: 'string' }],
                                    raw: 'string[]',
                                    required: !1,
                                  },
                                  description: 'Knowledgebase article IDs.',
                                },
                                {
                                  key: 'customerId',
                                  value: { name: 'string', required: !1 },
                                  description:
                                    'The "customer" ID if you have one.',
                                },
                                {
                                  key: 'createdAt',
                                  value: { name: 'Date', required: !1 },
                                  description: 'Timestamps.',
                                },
                                {
                                  key: 'closedAt',
                                  value: { name: 'Date', required: !1 },
                                },
                                {
                                  key: 'updatedAt',
                                  value: { name: 'Date', required: !1 },
                                },
                                {
                                  key: 'createdBy',
                                  value: { name: 'string', required: !1 },
                                },
                                {
                                  key: 'comments',
                                  value: {
                                    name: 'Array',
                                    elements: [
                                      {
                                        name: 'signature',
                                        type: 'object',
                                        raw: '{\n  _id: string\n  authorName: string\n  text: string\n}',
                                        signature: {
                                          properties: [
                                            {
                                              key: '_id',
                                              value: {
                                                name: 'string',
                                                required: !0,
                                              },
                                            },
                                            {
                                              key: 'authorName',
                                              value: {
                                                name: 'string',
                                                required: !0,
                                              },
                                            },
                                            {
                                              key: 'text',
                                              value: {
                                                name: 'string',
                                                required: !0,
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                    raw: 'Array<{\n  _id: string\n  authorName: string\n  text: string\n}>',
                                    required: !1,
                                  },
                                  description:
                                    'If you want to store the actual comments (rather than just commentIds),\nso ShowTask can display them directly.',
                                },
                                {
                                  key: 'customerAssigned',
                                  value: { name: 'string', required: !1 },
                                  description:
                                    'If you store the "customer assigned" label as text (e.g. "Bobbie Sue").',
                                },
                                {
                                  key: 'severity',
                                  value: { name: 'string', required: !1 },
                                  description:
                                    'Severity label text (e.g. "Critical").',
                                },
                                {
                                  key: 'schedulingQueue',
                                  value: { name: 'string', required: !1 },
                                  description:
                                    'Scheduling Queue text (e.g. "Technologies Unlimited").',
                                },
                                {
                                  key: 'status',
                                  value: { name: 'string', required: !1 },
                                  description:
                                    'High-level status text (e.g. "Open").',
                                },
                                {
                                  key: 'subStatus',
                                  value: { name: 'string', required: !1 },
                                  description:
                                    'Sub-status text (e.g. "In Progress").',
                                },
                                {
                                  key: 'topicLabels',
                                  value: {
                                    name: 'Array',
                                    elements: [{ name: 'string' }],
                                    raw: 'string[]',
                                    required: !1,
                                  },
                                  description:
                                    'If you want to store the actual topic strings (e.g. ["Technical Support"]).\nThis can be used in addition to or instead of topicIds.',
                                },
                                {
                                  key: 'kbArticles',
                                  value: {
                                    name: 'Array',
                                    elements: [{ name: 'string' }],
                                    raw: 'string[]',
                                    required: !1,
                                  },
                                  description:
                                    'If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\nThis can be used in addition to or instead of articleIds.',
                                },
                                {
                                  key: 'teamMember',
                                  value: { name: 'string', required: !1 },
                                  description:
                                    'A string representing the assigned team member (e.g. "Matthew Goluba").',
                                },
                                {
                                  key: 'nextActionDate',
                                  value: { name: 'string', required: !1 },
                                  description:
                                    'If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST").',
                                },
                              ],
                            },
                          },
                          { name: 'literal', value: "'_id'" },
                        ],
                        raw: "Omit<Task, '_id'>",
                      },
                      name: 'newTask',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description:
                'Called when the user clicks "Create Task."\nWe pass back an Omit<Task, \'_id\'> that the parent can store.',
            },
            variant: {
              required: !1,
              tsType: {
                name: 'union',
                raw: "'customer' | 'company' | 'administrator'",
                elements: [
                  { name: 'literal', value: "'customer'" },
                  { name: 'literal', value: "'company'" },
                  { name: 'literal', value: "'administrator'" },
                ],
              },
              description:
                "Controls which fields appear:\n  - 'customer'\n  - 'company'\n  - 'administrator'",
              defaultValue: { value: "'customer'", computed: !1 },
            },
            statuses: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  status: string\n  description?: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'status',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'description',
                          value: { name: 'string', required: !1 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawStatus[]',
              },
              description: 'Data for the various dropdowns, etc.',
            },
            subStatuses: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  subStatus: string\n  description?: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'subStatus',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'description',
                          value: { name: 'string', required: !1 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawSubStatus[]',
              },
              description: '',
            },
            topics: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  topic: string\n  description?: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'topic',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'description',
                          value: { name: 'string', required: !1 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawTopic[]',
              },
              description: '',
            },
            schedulingQueues: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  queueName: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'queueName',
                          value: { name: 'string', required: !0 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawQueue[]',
              },
              description: '',
            },
            knowledgebaseArticles: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  articleTitle: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'articleTitle',
                          value: { name: 'string', required: !0 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawArticle[]',
              },
              description: '',
            },
            customers: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  firstName?: string\n  lastName?: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'firstName',
                          value: { name: 'string', required: !1 },
                        },
                        {
                          key: 'lastName',
                          value: { name: 'string', required: !1 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawCustomer[]',
              },
              description: '',
            },
            employees: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  firstName?: string\n  lastName?: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'firstName',
                          value: { name: 'string', required: !1 },
                        },
                        {
                          key: 'lastName',
                          value: { name: 'string', required: !1 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawEmployee[]',
              },
              description: '',
            },
            severityLevels: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  severityLevel: number\n  description?: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'severityLevel',
                          value: { name: 'number', required: !0 },
                        },
                        {
                          key: 'description',
                          value: { name: 'string', required: !1 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawSeverityLevel[]',
              },
              description: '',
            },
          },
        }
        var DialogContent = __webpack_require__(
            './node_modules/@mui/material/DialogContent/DialogContent.js'
          ),
          Menu = __webpack_require__(
            './node_modules/@mui/material/Menu/Menu.js'
          ),
          MenuItem = __webpack_require__(
            './node_modules/@mui/material/MenuItem/MenuItem.js'
          ),
          Chip = __webpack_require__(
            './node_modules/@mui/material/Chip/Chip.js'
          ),
          MoreVert = __webpack_require__(
            './node_modules/@mui/icons-material/esm/MoreVert.js'
          ),
          palette = __webpack_require__('./src/styles/palette.ts')
        function formatRelativeTime(dateStr) {
          if (!dateStr) return ''
          const d = new Date(dateStr)
          if (Number.isNaN(d.getTime())) return ''
          const diff = +new Date() - +d
          if (diff < 0) return 'in the future?'
          const mins = Math.floor(diff / 6e4)
          if (mins < 60) return `${mins} minute${1 === mins ? '' : 's'} ago`
          const hours = Math.floor(mins / 60)
          if (hours < 24) return `${hours} hour${1 === hours ? '' : 's'} ago`
          const days = Math.floor(hours / 24)
          return `${days} day${1 === days ? '' : 's'} ago`
        }
        function safeParseDate(dateStr) {
          if (!dateStr) return null
          const d = new Date(dateStr)
          return Number.isNaN(d.getTime()) ? null : d
        }
        const ShowTask = ({
            open,
            onClose,
            taskTitle = '',
            createdBy = '',
            description = '',
            comments = [],
            customerAssigned = '',
            severity = '',
            schedulingQueue = '',
            status = '',
            subStatus = '',
            topics = [],
            knowledgebaseArticles = [],
            teamMemberAssigned = '',
            nextActionDate = '',
            customerOptions = [],
            severityOptions = [],
            schedulingQueueOptions = [],
            statusOptions = [],
            subStatusOptions = [],
            topicOptions = [],
            knowledgebaseArticleOptions = [],
            teamMemberOptions = [],
            currentUserName,
            onCloseTask,
            onComment,
            onEdit,
            onDelete,
            onDuplicate,
            onEditComment,
          }) => {
            const [localComments, setLocalComments] = (0, react.useState)(
                comments
              ),
              [newComment, setNewComment] = (0, react.useState)(''),
              [isEditing, setIsEditing] = (0, react.useState)(!1),
              [formData, setFormData] = (0, react.useState)({
                taskTitle,
                description,
                customerAssigned,
                severity,
                schedulingQueue,
                status,
                subStatus,
                topics,
                knowledgebaseArticles,
                teamMemberAssigned,
                nextActionDate,
              }),
              [editingCommentId, setEditingCommentId] = (0, react.useState)(
                null
              ),
              [editingCommentText, setEditingCommentText] = (0, react.useState)(
                ''
              ),
              [selectedRevisions, setSelectedRevisions] = (0, react.useState)(
                {}
              )
            ;(0, react.useEffect)(() => {
              setLocalComments(prev =>
                prev.map(c => {
                  if (!c.editHistory || 0 === c.editHistory.length) {
                    const originalTime =
                        c.createdAt || new Date().toISOString(),
                      originalRev = {
                        _id: `rev-orig-${c._id}`,
                        editedBy: c.authorName,
                        editedAt: originalTime,
                        text: c.text,
                        isOriginal: !0,
                      }
                    return { ...c, editHistory: [originalRev] }
                  }
                  return c
                })
              )
            }, [])
            const cancelEditingComment = () => {
                setEditingCommentId(null), setEditingCommentText('')
              },
              rightSideRowStyle = {
                display: 'flex',
                flexDirection: 'column',
                pb: 2,
                borderBottom: '1px solid black',
                mx: -2,
                px: 2,
              },
              [commentMenu, setCommentMenu] = (0, react.useState)({
                anchor: null,
                commentId: null,
              }),
              closeCommentMenu = () => {
                setCommentMenu({ anchor: null, commentId: null })
              },
              handleEditClick = (commentId, text) => {
                closeCommentMenu(),
                  ((commentId, currentText) => {
                    setEditingCommentId(commentId),
                      setEditingCommentText(currentText)
                  })(commentId, text)
              }
            return (0, jsx_runtime.jsx)(Dialog.A, {
              open,
              onClose,
              maxWidth: 'lg',
              fullWidth: !0,
              PaperProps: {
                sx: {
                  border: '2px solid black',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: 'none',
                },
              },
              children: (0, jsx_runtime.jsxs)(DialogContent.A, {
                sx: { p: 0 },
                children: [
                  (0, jsx_runtime.jsxs)(Box.A, {
                    sx: {
                      display: 'flex',
                      justifyContent: 'space-between',
                      p: 2,
                      borderBottom: '2px solid black',
                    },
                    children: [
                      (0, jsx_runtime.jsxs)(Box.A, {
                        sx: { display: 'flex', flexDirection: 'column' },
                        children: [
                          isEditing
                            ? (0, jsx_runtime.jsx)(TextField.A, {
                                label: 'Task Title',
                                value: formData.taskTitle,
                                onChange: e =>
                                  setFormData(prev => ({
                                    ...prev,
                                    taskTitle: e.target.value,
                                  })),
                                outlinecolor: palette.Ql.main,
                                fontcolor: palette.Ql.main,
                                shrunklabelposition: 'aboveNotch',
                                sx: { mb: 1 },
                              })
                            : (0, jsx_runtime.jsx)(Typography.A, {
                                fontvariant: 'merrih4',
                                fontcolor: 'black',
                                text: formData.taskTitle,
                                sx: { fontSize: '18px', fontWeight: 'bold' },
                              }),
                          (0, jsx_runtime.jsx)(Typography.A, {
                            fontvariant: 'merrih5',
                            fontcolor: 'gray',
                            text: `created by ${createdBy}`,
                            sx: { fontSize: '14px', mt: 0.5 },
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)(Box.A, {
                        sx: { display: 'flex', alignItems: 'center', gap: 1 },
                        children: [
                          onEdit &&
                            (0, jsx_runtime.jsx)(Button.A, {
                              text: isEditing ? 'Save' : 'Edit',
                              fontcolor: 'black',
                              backgroundcolor: 'none',
                              onClick: () => {
                                isEditing
                                  ? (null == onEdit ||
                                      onEdit({
                                        taskTitle: formData.taskTitle,
                                        description: formData.description,
                                        customerAssigned:
                                          formData.customerAssigned,
                                        severity: formData.severity,
                                        schedulingQueue:
                                          formData.schedulingQueue,
                                        status: formData.status,
                                        subStatus: formData.subStatus,
                                        topics: formData.topics,
                                        knowledgebaseArticles:
                                          formData.knowledgebaseArticles,
                                        teamMemberAssigned:
                                          formData.teamMemberAssigned,
                                        nextActionDate: formData.nextActionDate,
                                      }),
                                    setIsEditing(!1))
                                  : setIsEditing(!0)
                              },
                            }),
                          onDelete &&
                            (0, jsx_runtime.jsx)(Button.A, {
                              text: 'Delete',
                              fontcolor: 'black',
                              backgroundcolor: 'none',
                              onClick: onDelete,
                            }),
                          onDuplicate &&
                            (0, jsx_runtime.jsx)(Button.A, {
                              text: 'Duplicate',
                              fontcolor: 'black',
                              backgroundcolor: 'none',
                              onClick: onDuplicate,
                            }),
                          (0, jsx_runtime.jsx)(IconButton.A, {
                            onClick: onClose,
                            children: (0, jsx_runtime.jsx)(Close.A, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsxs)(Box.A, {
                    sx: {
                      display: 'grid',
                      gridTemplateColumns: '3fr 1fr',
                      gap: 0,
                    },
                    children: [
                      (0, jsx_runtime.jsxs)(Box.A, {
                        sx: { p: 2, pt: 0 },
                        children: [
                          (0, jsx_runtime.jsx)(Box.A, {
                            sx: {
                              border: '1px solid black',
                              mx: -2,
                              px: 2,
                              pt: '5px',
                              pb: '10px',
                              display: 'flex',
                              flexDirection: 'column',
                            },
                            children: isEditing
                              ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                  children: [
                                    (0, jsx_runtime.jsx)(Typography.A, {
                                      fontvariant: 'merrih5',
                                      fontcolor: 'black',
                                      text: 'Task Description',
                                      sx: { fontWeight: 'bold', mb: 1 },
                                    }),
                                    (0, jsx_runtime.jsx)(ComplexTextEditor.A, {
                                      value: formData.description,
                                      onChange: val =>
                                        setFormData(prev => ({
                                          ...prev,
                                          description: val,
                                        })),
                                      label: 'Task Description',
                                      editorType: 'simple',
                                      minRows: 3,
                                    }),
                                  ],
                                })
                              : (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                  children: [
                                    (0, jsx_runtime.jsx)(Typography.A, {
                                      fontvariant: 'merrih5',
                                      fontcolor: 'black',
                                      text: 'Task Description',
                                      sx: { fontWeight: 'bold', mb: 1 },
                                    }),
                                    (0, jsx_runtime.jsx)(Typography.A, {
                                      fontvariant: 'merrih6',
                                      fontcolor: 'black',
                                      text: formData.description,
                                      sx: {
                                        fontSize: '14px',
                                        whiteSpace: 'pre-wrap',
                                      },
                                    }),
                                  ],
                                }),
                          }),
                          localComments.map(comment => {
                            const selectedRevId =
                              selectedRevisions[comment._id] || null
                            let displayedText = comment.text,
                              displayedTime = comment.updatedAt,
                              displayedAuthor =
                                comment.lastEditedBy || comment.authorName
                            if (selectedRevId && comment.editHistory) {
                              const foundRev = comment.editHistory.find(
                                r => r._id === selectedRevId
                              )
                              foundRev &&
                                ((displayedText = foundRev.text || ''),
                                (displayedTime = foundRev.editedAt),
                                (displayedAuthor = foundRev.editedBy))
                            }
                            const createdTime = formatRelativeTime(
                                comment.createdAt
                              ),
                              updatedTime = formatRelativeTime(displayedTime),
                              hasHistory =
                                comment.editHistory &&
                                comment.editHistory.length > 0,
                              canEdit =
                                currentUserName &&
                                comment.authorName === currentUserName,
                              isMenuOpen =
                                commentMenu.anchor &&
                                commentMenu.commentId === comment._id
                            return (0, jsx_runtime.jsx)(
                              Box.A,
                              {
                                sx: { mb: 0 },
                                children:
                                  editingCommentId === comment._id
                                    ? (0, jsx_runtime.jsxs)(Box.A, {
                                        sx: {
                                          border: '1px solid black',
                                          mx: -2,
                                          px: 2,
                                          py: 1,
                                        },
                                        children: [
                                          (0, jsx_runtime.jsx)(
                                            ComplexTextEditor.A,
                                            {
                                              value: editingCommentText,
                                              onChange: val =>
                                                setEditingCommentText(val),
                                              label: 'Edit Comment',
                                              minRows: 3,
                                              editorType: 'simple',
                                            }
                                          ),
                                          (0, jsx_runtime.jsxs)(Box.A, {
                                            sx: {
                                              display: 'flex',
                                              justifyContent: 'flex-end',
                                              mt: 1,
                                              gap: 1,
                                            },
                                            children: [
                                              (0, jsx_runtime.jsx)(Button.A, {
                                                text: 'Save',
                                                backgroundcolor:
                                                  palette.yR.dark,
                                                fontcolor: palette.ON.main,
                                                onClick: () => {
                                                  return (
                                                    (commentId = comment._id),
                                                    null == onEditComment ||
                                                      onEditComment(
                                                        commentId,
                                                        editingCommentText
                                                      ),
                                                    setLocalComments(prev =>
                                                      prev.map(c => {
                                                        if (c._id !== commentId)
                                                          return c
                                                        const newUpdatedAt =
                                                            new Date().toISOString(),
                                                          newEditedBy =
                                                            currentUserName ||
                                                            'UnknownUser',
                                                          newRevision = {
                                                            _id: `rev-${Date.now()}`,
                                                            editedBy:
                                                              newEditedBy,
                                                            editedAt:
                                                              newUpdatedAt,
                                                            text: editingCommentText,
                                                            isOriginal: !1,
                                                          }
                                                        return {
                                                          ...c,
                                                          text: editingCommentText,
                                                          updatedAt:
                                                            newUpdatedAt,
                                                          lastEditedBy:
                                                            newEditedBy,
                                                          editHistory: [
                                                            ...(c.editHistory ||
                                                              []),
                                                            newRevision,
                                                          ],
                                                        }
                                                      })
                                                    ),
                                                    setEditingCommentId(null),
                                                    setEditingCommentText(''),
                                                    void setSelectedRevisions(
                                                      prev => ({
                                                        ...prev,
                                                        [commentId]: null,
                                                      })
                                                    )
                                                  )
                                                  var commentId
                                                },
                                              }),
                                              (0, jsx_runtime.jsx)(Button.A, {
                                                text: 'Cancel',
                                                backgroundcolor: 'none',
                                                fontcolor: 'black',
                                                onClick: cancelEditingComment,
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : (0, jsx_runtime.jsxs)(Box.A, {
                                        sx: {
                                          border: '1px solid black',
                                          mx: -2,
                                          px: 2,
                                          py: 1,
                                          display: 'flex',
                                          flexDirection: 'column',
                                          minHeight: '80px',
                                        },
                                        children: [
                                          (0, jsx_runtime.jsxs)(Box.A, {
                                            sx: {
                                              display: 'flex',
                                              justifyContent: 'space-between',
                                              alignItems: 'flex-start',
                                            },
                                            children: [
                                              (0, jsx_runtime.jsx)(
                                                Typography.A,
                                                {
                                                  fontvariant: 'merrih5',
                                                  fontcolor: 'black',
                                                  text: comment.authorName,
                                                  sx: { fontWeight: 'bold' },
                                                }
                                              ),
                                              (0, jsx_runtime.jsx)(
                                                IconButton.A,
                                                {
                                                  size: 'small',
                                                  onClick: e => {
                                                    return (
                                                      (event = e),
                                                      (commentId = comment._id),
                                                      void setCommentMenu({
                                                        anchor:
                                                          event.currentTarget,
                                                        commentId,
                                                      })
                                                    )
                                                    var event, commentId
                                                  },
                                                  sx: { mb: 1 },
                                                  children: (0,
                                                  jsx_runtime.jsx)(MoreVert.A, {
                                                    fontSize: 'small',
                                                  }),
                                                }
                                              ),
                                              (0, jsx_runtime.jsxs)(Menu.A, {
                                                anchorEl: commentMenu.anchor,
                                                open: Boolean(isMenuOpen),
                                                onClose: closeCommentMenu,
                                                anchorOrigin: {
                                                  vertical: 'bottom',
                                                  horizontal: 'right',
                                                },
                                                transformOrigin: {
                                                  vertical: 'top',
                                                  horizontal: 'right',
                                                },
                                                children: [
                                                  onEditComment &&
                                                    canEdit &&
                                                    (0, jsx_runtime.jsx)(
                                                      MenuItem.A,
                                                      {
                                                        onClick: () =>
                                                          handleEditClick(
                                                            comment._id,
                                                            comment.text
                                                          ),
                                                        children: 'Edit',
                                                      }
                                                    ),
                                                  hasHistory &&
                                                    (0, jsx_runtime.jsx)(
                                                      MenuItem.A,
                                                      {
                                                        disableRipple: !0,
                                                        sx: {
                                                          py: 0.5,
                                                          cursor: 'default',
                                                          '&:hover': {
                                                            backgroundColor:
                                                              'transparent',
                                                          },
                                                        },
                                                        children: (0,
                                                        jsx_runtime.jsx)(
                                                          Box.A,
                                                          {
                                                            sx: { width: 220 },
                                                            children: (0,
                                                            jsx_runtime.jsx)(
                                                              SearchableDropdown.A,
                                                              {
                                                                label:
                                                                  'Revision History',
                                                                shrunklabelposition:
                                                                  'aboveNotch',
                                                                placeholder:
                                                                  'Select revision...',
                                                                options: (
                                                                  comment.editHistory ||
                                                                  []
                                                                ).map(rev => {
                                                                  const revTime =
                                                                      formatRelativeTime(
                                                                        rev.editedAt
                                                                      ),
                                                                    prefix =
                                                                      rev.isOriginal
                                                                        ? 'Original'
                                                                        : 'Edited'
                                                                  return {
                                                                    value:
                                                                      rev._id,
                                                                    attribute1: `${prefix} ${revTime} by ${rev.editedBy}`,
                                                                  }
                                                                }),
                                                                onChange:
                                                                  opt => {
                                                                    return (
                                                                      (commentId =
                                                                        comment._id),
                                                                      (revisionId =
                                                                        (null ==
                                                                        opt
                                                                          ? void 0
                                                                          : opt.value) ||
                                                                        null),
                                                                      void setSelectedRevisions(
                                                                        prev => ({
                                                                          ...prev,
                                                                          [commentId]:
                                                                            revisionId ||
                                                                            null,
                                                                        })
                                                                      )
                                                                    )
                                                                    var commentId,
                                                                      revisionId
                                                                  },
                                                                outlinecolor:
                                                                  palette.Ql
                                                                    .main,
                                                                fontcolor:
                                                                  palette.Ql
                                                                    .main,
                                                                defaultValue:
                                                                  selectedRevId ||
                                                                  void 0,
                                                              }
                                                            ),
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, jsx_runtime.jsxs)(Box.A, {
                                            sx: { mt: 'auto' },
                                            children: [
                                              (0, jsx_runtime.jsx)(
                                                Typography.A,
                                                {
                                                  fontvariant: 'merriparagraph',
                                                  fontcolor: 'black',
                                                  text: displayedText,
                                                  sx: {
                                                    fontSize: '14px',
                                                    mt: 0.5,
                                                  },
                                                }
                                              ),
                                              (0, jsx_runtime.jsxs)(Box.A, {
                                                sx: {
                                                  fontSize: '12px',
                                                  color: 'gray',
                                                  mt: 0.5,
                                                },
                                                children: [
                                                  comment.createdAt &&
                                                    (0, jsx_runtime.jsxs)(
                                                      'span',
                                                      {
                                                        children: [
                                                          'Created ',
                                                          createdTime,
                                                          ' by ',
                                                          comment.authorName,
                                                        ],
                                                      }
                                                    ),
                                                  displayedTime &&
                                                    displayedAuthor &&
                                                    (0, jsx_runtime.jsxs)(
                                                      'span',
                                                      {
                                                        children: [
                                                          ' ',
                                                          '| Edited ',
                                                          updatedTime,
                                                          ' by ',
                                                          displayedAuthor,
                                                        ],
                                                      }
                                                    ),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                              },
                              comment._id
                            )
                          }),
                          (0, jsx_runtime.jsxs)(Box.A, {
                            sx: { mx: -2, px: 2, py: 0 },
                            children: [
                              (0, jsx_runtime.jsx)(ComplexTextEditor.A, {
                                value: newComment,
                                onChange: val => setNewComment(val),
                                label: 'Add Comment',
                                minRows: 3,
                                editorType: 'simple',
                              }),
                              (0, jsx_runtime.jsxs)(Box.A, {
                                sx: {
                                  display: 'flex',
                                  justifyContent: 'flex-end',
                                  mt: 2,
                                  gap: 2,
                                },
                                children: [
                                  onCloseTask &&
                                    (0, jsx_runtime.jsx)(Button.A, {
                                      text: 'Close Task',
                                      backgroundcolor: palette.Om.main,
                                      fontcolor: palette.ON.main,
                                      onClick: onCloseTask,
                                    }),
                                  (0, jsx_runtime.jsx)(Button.A, {
                                    text: 'Comment',
                                    backgroundcolor: palette.yR.dark,
                                    fontcolor: palette.ON.main,
                                    onClick: () => {
                                      const trimmed = newComment.trim()
                                      if (!trimmed) return
                                      const newLocalComment = {
                                        _id: `temp-${Date.now()}`,
                                        authorName:
                                          currentUserName || 'UnknownUser',
                                        text: trimmed,
                                        createdAt: new Date().toISOString(),
                                        updatedAt: new Date().toISOString(),
                                        lastEditedBy:
                                          currentUserName || 'UnknownUser',
                                        editHistory: [
                                          {
                                            _id: `rev-orig-temp-${Date.now()}`,
                                            editedBy:
                                              currentUserName || 'UnknownUser',
                                            editedAt: new Date().toISOString(),
                                            text: trimmed,
                                            isOriginal: !0,
                                          },
                                        ],
                                      }
                                      setLocalComments([
                                        ...localComments,
                                        newLocalComment,
                                      ]),
                                        null == onComment || onComment(trimmed),
                                        setNewComment('')
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)(Box.A, {
                        sx: {
                          borderLeft: '2px solid black',
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 2,
                        },
                        children: [
                          (0, jsx_runtime.jsxs)(Box.A, {
                            sx: rightSideRowStyle,
                            children: [
                              !isEditing &&
                                (0, jsx_runtime.jsx)(Typography.A, {
                                  fontvariant: 'merriparagraph',
                                  fontcolor: 'black',
                                  text: 'Customer Assigned',
                                  sx: { fontWeight: 'bold', fontSize: '14px' },
                                }),
                              isEditing
                                ? (0, jsx_runtime.jsx)(SearchableDropdown.A, {
                                    label: 'Customer Assigned',
                                    options: customerOptions.map(v => ({
                                      value: v,
                                    })),
                                    shrunklabelposition: 'aboveNotch',
                                    defaultValue: formData.customerAssigned,
                                    onChange: newVal =>
                                      setFormData(prev => ({
                                        ...prev,
                                        customerAssigned:
                                          (null == newVal
                                            ? void 0
                                            : newVal.value) || '',
                                      })),
                                    outlinecolor: palette.Ql.main,
                                    fontcolor: palette.Ql.main,
                                  })
                                : formData.customerAssigned &&
                                  (0, jsx_runtime.jsx)(Chip.A, {
                                    label: formData.customerAssigned,
                                    variant: 'filled',
                                    sx: {
                                      backgroundColor: palette.yR.main,
                                      color: palette.ON.main,
                                      mt: 1,
                                    },
                                  }),
                            ],
                          }),
                          (0, jsx_runtime.jsxs)(Box.A, {
                            sx: rightSideRowStyle,
                            children: [
                              !isEditing &&
                                (0, jsx_runtime.jsx)(Typography.A, {
                                  fontvariant: 'merriparagraph',
                                  fontcolor: 'black',
                                  text: 'Severity',
                                  sx: { fontWeight: 'bold', fontSize: '14px' },
                                }),
                              isEditing
                                ? (0, jsx_runtime.jsx)(SearchableDropdown.A, {
                                    label: 'Severity',
                                    options: severityOptions.map(opt => ({
                                      value: opt,
                                    })),
                                    shrunklabelposition: 'aboveNotch',
                                    defaultValue: formData.severity,
                                    onChange: newVal =>
                                      setFormData(prev => ({
                                        ...prev,
                                        severity:
                                          (null == newVal
                                            ? void 0
                                            : newVal.value) || '',
                                      })),
                                    outlinecolor: palette.Ql.main,
                                    fontcolor: palette.Ql.main,
                                  })
                                : formData.severity
                                  ? (0, jsx_runtime.jsx)(Chip.A, {
                                      label: formData.severity,
                                      variant: 'filled',
                                      sx: {
                                        backgroundColor: palette.wv.main,
                                        color: palette.ON.main,
                                        mt: 1,
                                      },
                                    })
                                  : null,
                            ],
                          }),
                          (0, jsx_runtime.jsxs)(Box.A, {
                            sx: rightSideRowStyle,
                            children: [
                              !isEditing &&
                                (0, jsx_runtime.jsx)(Typography.A, {
                                  fontvariant: 'merriparagraph',
                                  fontcolor: 'black',
                                  text: 'Scheduling Queue',
                                  sx: { fontWeight: 'bold', fontSize: '14px' },
                                }),
                              isEditing
                                ? (0, jsx_runtime.jsx)(SearchableDropdown.A, {
                                    label: 'Scheduling Queue',
                                    options: schedulingQueueOptions.map(
                                      opt => ({ value: opt })
                                    ),
                                    shrunklabelposition: 'aboveNotch',
                                    defaultValue: formData.schedulingQueue,
                                    onChange: newVal =>
                                      setFormData(prev => ({
                                        ...prev,
                                        schedulingQueue:
                                          (null == newVal
                                            ? void 0
                                            : newVal.value) || '',
                                      })),
                                    outlinecolor: palette.Ql.main,
                                    fontcolor: palette.Ql.main,
                                  })
                                : formData.schedulingQueue
                                  ? (0, jsx_runtime.jsx)(Chip.A, {
                                      label: formData.schedulingQueue,
                                      variant: 'filled',
                                      sx: {
                                        backgroundColor: '#C48EA6',
                                        color: palette.ON.main,
                                        mt: 1,
                                      },
                                    })
                                  : null,
                            ],
                          }),
                          (0, jsx_runtime.jsxs)(Box.A, {
                            sx: rightSideRowStyle,
                            children: [
                              !isEditing &&
                                (0, jsx_runtime.jsx)(Typography.A, {
                                  fontvariant: 'merriparagraph',
                                  fontcolor: 'black',
                                  text: 'Status',
                                  sx: { fontWeight: 'bold', fontSize: '14px' },
                                }),
                              isEditing
                                ? (0, jsx_runtime.jsx)(SearchableDropdown.A, {
                                    label: 'Status',
                                    options: statusOptions.map(opt => ({
                                      value: opt,
                                    })),
                                    shrunklabelposition: 'aboveNotch',
                                    defaultValue: formData.status,
                                    onChange: newVal =>
                                      setFormData(prev => ({
                                        ...prev,
                                        status:
                                          (null == newVal
                                            ? void 0
                                            : newVal.value) || '',
                                      })),
                                    outlinecolor: palette.Ql.main,
                                    fontcolor: palette.Ql.main,
                                  })
                                : formData.status
                                  ? (0, jsx_runtime.jsx)(Chip.A, {
                                      label: formData.status,
                                      variant: 'filled',
                                      sx: {
                                        backgroundColor: palette.Ql.main,
                                        color: palette.ON.main,
                                        mt: 1,
                                      },
                                    })
                                  : null,
                            ],
                          }),
                          (0, jsx_runtime.jsxs)(Box.A, {
                            sx: rightSideRowStyle,
                            children: [
                              !isEditing &&
                                (0, jsx_runtime.jsx)(Typography.A, {
                                  fontvariant: 'merriparagraph',
                                  fontcolor: 'black',
                                  text: 'Sub Status',
                                  sx: { fontWeight: 'bold', fontSize: '14px' },
                                }),
                              isEditing
                                ? (0, jsx_runtime.jsx)(SearchableDropdown.A, {
                                    label: 'Sub Status',
                                    options: subStatusOptions.map(opt => ({
                                      value: opt,
                                    })),
                                    defaultValue: formData.subStatus,
                                    onChange: newVal =>
                                      setFormData(prev => ({
                                        ...prev,
                                        subStatus:
                                          (null == newVal
                                            ? void 0
                                            : newVal.value) || '',
                                      })),
                                    outlinecolor: palette.Ql.main,
                                    fontcolor: palette.Ql.main,
                                    shrunklabelposition: 'aboveNotch',
                                  })
                                : formData.subStatus
                                  ? (0, jsx_runtime.jsx)(Chip.A, {
                                      label: formData.subStatus,
                                      variant: 'filled',
                                      color: 'info',
                                      sx: { mt: 1 },
                                    })
                                  : null,
                            ],
                          }),
                          (0, jsx_runtime.jsxs)(Box.A, {
                            sx: rightSideRowStyle,
                            children: [
                              !isEditing &&
                                (0, jsx_runtime.jsx)(Typography.A, {
                                  fontvariant: 'merriparagraph',
                                  fontcolor: 'black',
                                  text: 'Topics',
                                  sx: { fontWeight: 'bold', fontSize: '14px' },
                                }),
                              isEditing
                                ? (0, jsx_runtime.jsx)(MultiSelect.A, {
                                    label: 'Topics',
                                    options: topicOptions,
                                    defaultSelected: formData.topics,
                                    onChange: values =>
                                      setFormData(prev => ({
                                        ...prev,
                                        topics: values,
                                      })),
                                    outlinecolor: palette.Ql.main,
                                    fontcolor: palette.Ql.main,
                                    sx: { mt: 1 },
                                  })
                                : formData.topics.length > 0
                                  ? (0, jsx_runtime.jsx)(Box.A, {
                                      sx: {
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: 1,
                                        mt: 1,
                                      },
                                      children: formData.topics.map(
                                        (topic, idx) =>
                                          (0, jsx_runtime.jsx)(
                                            Chip.A,
                                            {
                                              label: topic,
                                              variant: 'filled',
                                              color: 'success',
                                            },
                                            idx
                                          )
                                      ),
                                    })
                                  : null,
                            ],
                          }),
                          (0, jsx_runtime.jsxs)(Box.A, {
                            sx: rightSideRowStyle,
                            children: [
                              !isEditing &&
                                (0, jsx_runtime.jsx)(Typography.A, {
                                  fontvariant: 'merriparagraph',
                                  fontcolor: 'black',
                                  text: 'Knowledgebase Articles',
                                  sx: { fontWeight: 'bold', fontSize: '14px' },
                                }),
                              isEditing
                                ? (0, jsx_runtime.jsx)(MultiSelect.A, {
                                    label: 'Knowledgebase Articles',
                                    options: knowledgebaseArticleOptions,
                                    defaultSelected:
                                      formData.knowledgebaseArticles,
                                    onChange: values =>
                                      setFormData(prev => ({
                                        ...prev,
                                        knowledgebaseArticles: values,
                                      })),
                                    outlinecolor: palette.Ql.main,
                                    fontcolor: palette.Ql.main,
                                    sx: { mt: 1 },
                                  })
                                : formData.knowledgebaseArticles.length > 0
                                  ? (0, jsx_runtime.jsx)(Box.A, {
                                      sx: {
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: 1,
                                        mt: 1,
                                      },
                                      children:
                                        formData.knowledgebaseArticles.map(
                                          (article, idx) =>
                                            (0, jsx_runtime.jsx)(
                                              Chip.A,
                                              {
                                                label: article,
                                                variant: 'filled',
                                                color: 'warning',
                                              },
                                              idx
                                            )
                                        ),
                                    })
                                  : null,
                            ],
                          }),
                          (0, jsx_runtime.jsxs)(Box.A, {
                            sx: rightSideRowStyle,
                            children: [
                              !isEditing &&
                                (0, jsx_runtime.jsx)(Typography.A, {
                                  fontvariant: 'merriparagraph',
                                  fontcolor: 'black',
                                  text: 'Team Member Assigned',
                                  sx: { fontWeight: 'bold', fontSize: '14px' },
                                }),
                              isEditing
                                ? (0, jsx_runtime.jsx)(SearchableDropdown.A, {
                                    label: 'Team Member Assigned',
                                    options: teamMemberOptions.map(opt => ({
                                      value: opt,
                                    })),
                                    defaultValue: formData.teamMemberAssigned,
                                    onChange: newVal =>
                                      setFormData(prev => ({
                                        ...prev,
                                        teamMemberAssigned:
                                          (null == newVal
                                            ? void 0
                                            : newVal.value) || '',
                                      })),
                                    outlinecolor: palette.Ql.main,
                                    fontcolor: palette.Ql.main,
                                    shrunklabelposition: 'aboveNotch',
                                  })
                                : formData.teamMemberAssigned
                                  ? (0, jsx_runtime.jsx)(Chip.A, {
                                      label: formData.teamMemberAssigned,
                                      variant: 'filled',
                                      sx: {
                                        backgroundColor: palette.yR.main,
                                        color: palette.ON.main,
                                        mt: 1,
                                      },
                                    })
                                  : null,
                            ],
                          }),
                          (0, jsx_runtime.jsxs)(Box.A, {
                            sx: { display: 'flex', flexDirection: 'column' },
                            children: [
                              !isEditing &&
                                (0, jsx_runtime.jsx)(Typography.A, {
                                  fontvariant: 'merriparagraph',
                                  fontcolor: 'black',
                                  text: 'Next Action Date',
                                  sx: { fontWeight: 'bold', fontSize: '14px' },
                                }),
                              isEditing
                                ? (0, jsx_runtime.jsx)(Box.A, {
                                    sx: { mt: 1, width: '100%' },
                                    children: (0, jsx_runtime.jsx)(
                                      DateField.A,
                                      {
                                        label: 'Next Action Date',
                                        value: safeParseDate(
                                          formData.nextActionDate
                                        ),
                                        onChange: date => {
                                          if (date) {
                                            const mm = String(
                                                date.getMonth() + 1
                                              ).padStart(2, '0'),
                                              dd = String(
                                                date.getDate()
                                              ).padStart(2, '0'),
                                              yyyy = date.getFullYear()
                                            setFormData(prev => ({
                                              ...prev,
                                              nextActionDate: `${mm}/${dd}/${yyyy}`,
                                            }))
                                          } else
                                            setFormData(prev => ({
                                              ...prev,
                                              nextActionDate: '',
                                            }))
                                        },
                                      }
                                    ),
                                  })
                                : formData.nextActionDate
                                  ? (0, jsx_runtime.jsx)(Typography.A, {
                                      fontvariant: 'merriparagraph',
                                      fontcolor: 'black',
                                      text: formData.nextActionDate,
                                      sx: { fontSize: '14px', mt: 1 },
                                    })
                                  : null,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          },
          ShowTask_client = ShowTask
        ShowTask.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ShowTask',
          props: {
            open: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            onClose: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            taskTitle: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "''", computed: !1 },
            },
            createdBy: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "''", computed: !1 },
            },
            description: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "''", computed: !1 },
            },
            comments: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'ShowTaskComment' }],
                raw: 'ShowTaskComment[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            customerAssigned: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "''", computed: !1 },
            },
            severity: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "''", computed: !1 },
            },
            schedulingQueue: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "''", computed: !1 },
            },
            status: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "''", computed: !1 },
            },
            subStatus: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "''", computed: !1 },
            },
            topics: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            knowledgebaseArticles: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            teamMemberAssigned: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "''", computed: !1 },
            },
            nextActionDate: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "''", computed: !1 },
            },
            customerOptions: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            severityOptions: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            schedulingQueueOptions: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            statusOptions: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            subStatusOptions: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            topicOptions: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            knowledgebaseArticleOptions: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            teamMemberOptions: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'string' }],
                raw: 'string[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            currentUserName: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            onCloseTask: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onComment: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(commentText: string) => void',
                signature: {
                  arguments: [
                    { type: { name: 'string' }, name: 'commentText' },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onEdit: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(updatedData: {\n  taskTitle: string\n  description: string\n  customerAssigned: string\n  severity: string\n  schedulingQueue: string\n  status: string\n  subStatus: string\n  topics: string[]\n  knowledgebaseArticles: string[]\n  teamMemberAssigned: string\n  nextActionDate: string\n}) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'signature',
                        type: 'object',
                        raw: '{\n  taskTitle: string\n  description: string\n  customerAssigned: string\n  severity: string\n  schedulingQueue: string\n  status: string\n  subStatus: string\n  topics: string[]\n  knowledgebaseArticles: string[]\n  teamMemberAssigned: string\n  nextActionDate: string\n}',
                        signature: {
                          properties: [
                            {
                              key: 'taskTitle',
                              value: { name: 'string', required: !0 },
                            },
                            {
                              key: 'description',
                              value: { name: 'string', required: !0 },
                            },
                            {
                              key: 'customerAssigned',
                              value: { name: 'string', required: !0 },
                            },
                            {
                              key: 'severity',
                              value: { name: 'string', required: !0 },
                            },
                            {
                              key: 'schedulingQueue',
                              value: { name: 'string', required: !0 },
                            },
                            {
                              key: 'status',
                              value: { name: 'string', required: !0 },
                            },
                            {
                              key: 'subStatus',
                              value: { name: 'string', required: !0 },
                            },
                            {
                              key: 'topics',
                              value: {
                                name: 'Array',
                                elements: [{ name: 'string' }],
                                raw: 'string[]',
                                required: !0,
                              },
                            },
                            {
                              key: 'knowledgebaseArticles',
                              value: {
                                name: 'Array',
                                elements: [{ name: 'string' }],
                                raw: 'string[]',
                                required: !0,
                              },
                            },
                            {
                              key: 'teamMemberAssigned',
                              value: { name: 'string', required: !0 },
                            },
                            {
                              key: 'nextActionDate',
                              value: { name: 'string', required: !0 },
                            },
                          ],
                        },
                      },
                      name: 'updatedData',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onDelete: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onDuplicate: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
              },
              description: '',
            },
            onEditComment: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(commentId: string, newText: string) => void',
                signature: {
                  arguments: [
                    { type: { name: 'string' }, name: 'commentId' },
                    { type: { name: 'string' }, name: 'newText' },
                  ],
                  return: { name: 'void' },
                },
              },
              description:
                'Called when a comment’s text is edited. We pass (commentId, newText).',
            },
          },
        }
        var useTheme = __webpack_require__(
            './node_modules/@mui/material/styles/useTheme.js'
          ),
          useMediaQuery = __webpack_require__(
            './node_modules/@mui/material/useMediaQuery/index.js'
          ),
          Checkbox_Checkbox = __webpack_require__(
            './node_modules/@mui/material/Checkbox/Checkbox.js'
          )
        function useTaskDragAndDrop() {
          const [dragItem, setDragItem] = react.useState(null)
          return {
            dragItem,
            setDragItem,
            handleTaskDragStart: function handleTaskDragStart(e, item) {
              setDragItem(item)
            },
            handleTaskDragOver: function handleTaskDragOver(e) {
              e.preventDefault()
            },
            handleTaskDrop: function handleTaskDrop(
              e,
              { dropColumnIndex, dropTaskIndex, allColumns, setAllColumns }
            ) {
              if ((e.preventDefault(), !dragItem)) return
              const { columnIndex: sourceColIdx, taskIndex: sourceTaskIdx } =
                dragItem
              if (sourceColIdx < 0 || sourceColIdx >= allColumns.length) return
              const sourceColumn = allColumns[sourceColIdx]
              if (
                sourceTaskIdx < 0 ||
                sourceTaskIdx >= sourceColumn.tasks.length
              )
                return
              const [movedTask] = sourceColumn.tasks.splice(sourceTaskIdx, 1)
              if (dropColumnIndex < 0 || dropColumnIndex >= allColumns.length)
                return (
                  sourceColumn.tasks.splice(sourceTaskIdx, 0, movedTask),
                  void setDragItem(null)
                )
              const destColumn = allColumns[dropColumnIndex]
              dropTaskIndex < 0 && (dropTaskIndex = 0),
                dropTaskIndex > destColumn.tasks.length &&
                  (dropTaskIndex = destColumn.tasks.length),
                destColumn.tasks.splice(dropTaskIndex, 0, movedTask)
              const newCols = [...allColumns]
              ;(newCols[sourceColIdx] = { ...sourceColumn }),
                (newCols[dropColumnIndex] = { ...destColumn }),
                setAllColumns(newCols),
                setDragItem(null)
            },
          }
        }
        function DesktopBoard({
          columns,
          overflowColumns,
          selectedOverflowColumnId,
          onChangeSelectedOverflowColumn,
          selectedTask,
          onSelectTask,
          onColumnDragStart,
          onColumnDragOver,
          onColumnDrop,
        }) {
          var _activeOverflowColumn_tasks
          const [allColumns, setAllColumns] = (0, esm_react.fp)(columnsAtom),
            [selectedColumnIndex, setSelectedColumnIndex] = (0, react.useState)(
              null
            ),
            { handleTaskDragStart, handleTaskDragOver, handleTaskDrop } =
              useTaskDragAndDrop()
          function isColumnDraggable(colIndex) {
            return selectedColumnIndex === colIndex
          }
          function isTaskDraggable(colIndex, taskIndex) {
            return (
              null === selectedColumnIndex &&
              (null == selectedTask ? void 0 : selectedTask.colIndex) ===
                colIndex &&
              (null == selectedTask ? void 0 : selectedTask.taskIndex) ===
                taskIndex
            )
          }
          function handleLocalTaskDragStart(e, columnIndex, taskIndex) {
            isTaskDraggable(columnIndex, taskIndex)
              ? handleTaskDragStart(e, { columnIndex, taskIndex })
              : e.preventDefault()
          }
          function handleLocalTaskDrop(e, dropColumnIndex, dropTaskIndex) {
            e.preventDefault(),
              handleTaskDrop(e, {
                dropColumnIndex,
                dropTaskIndex,
                allColumns,
                setAllColumns,
              })
          }
          const hasOverflow = Boolean(
            null == overflowColumns ? void 0 : overflowColumns.length
          )
          let activeOverflowColumn
          hasOverflow &&
            selectedOverflowColumnId &&
            overflowColumns &&
            (activeOverflowColumn =
              overflowColumns.find(c => c._id === selectedOverflowColumnId) ||
              overflowColumns[0])
          const handleOverflowDropdownChange = (0, react.useCallback)(
            e => {
              if (!overflowColumns || !onChangeSelectedOverflowColumn) return
              const colTitle = e.target.value,
                found = overflowColumns.find(c => c.title === colTitle)
              found && onChangeSelectedOverflowColumn(found._id)
            },
            [overflowColumns, onChangeSelectedOverflowColumn]
          )
          var _overflowColumns_map
          return (0, jsx_runtime.jsxs)(Stack.A, {
            direction: 'row',
            spacing: 3,
            children: [
              columns.map((col, colIndex) => {
                var _col_tasks
                const colChecked = selectedColumnIndex === colIndex
                return (0, jsx_runtime.jsxs)(
                  Box.A,
                  {
                    draggable: isColumnDraggable(colIndex),
                    onDragStart: e =>
                      (function handleLocalColumnDragStart(e, colIndex) {
                        isColumnDraggable(colIndex)
                          ? onColumnDragStart(e, colIndex)
                          : e.preventDefault()
                      })(e, colIndex),
                    onDragOver: e =>
                      (function handleLocalColumnDragOver(e, colIndex) {
                        e.preventDefault(), onColumnDragOver(e, colIndex)
                      })(e, colIndex),
                    onDrop: e =>
                      (function handleLocalColumnDrop(e, colIndex) {
                        e.preventDefault(), onColumnDrop(e, colIndex)
                      })(e, colIndex),
                    sx: {
                      boxSizing: 'border-box',
                      width: '300px',
                      height: '70vh',
                      backgroundColor: palette.Ql.main,
                      borderRadius: '5px',
                      display: 'flex',
                      flexDirection: 'column',
                      overflowX: 'hidden',
                      overflowY: 'auto',
                      position: 'relative',
                    },
                    children: [
                      (0, jsx_runtime.jsxs)(Box.A, {
                        sx: {
                          borderBottom: `1px solid ${palette.ON.main}`,
                          p: 2,
                          position: 'relative',
                        },
                        children: [
                          (0, jsx_runtime.jsx)(Checkbox_Checkbox.A, {
                            checked: colChecked,
                            disabled: null !== selectedTask,
                            onChange: () =>
                              (function handleColumnCheck(colIndex) {
                                selectedColumnIndex === colIndex
                                  ? setSelectedColumnIndex(null)
                                  : (onSelectTask(-1, -1),
                                    setSelectedColumnIndex(colIndex))
                              })(colIndex),
                            sx: {
                              position: 'absolute',
                              top: 2,
                              right: 2,
                              color: palette.ON.main,
                              '&.Mui-checked': { color: palette.ON.main },
                            },
                          }),
                          (0, jsx_runtime.jsxs)(Stack.A, {
                            direction: 'column',
                            spacing: 0.5,
                            children: [
                              (0, jsx_runtime.jsx)(Typography.A, {
                                fontvariant: 'merrih4',
                                fontcolor: palette.ON.main,
                                children: col.title,
                              }),
                              (0, jsx_runtime.jsx)(Typography.A, {
                                fontvariant: 'merrih6',
                                fontcolor: palette.ON.main,
                                children: col.description,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsx)(Box.A, {
                        sx: { p: 2, flex: 1 },
                        children: (
                          null === (_col_tasks = col.tasks) ||
                          void 0 === _col_tasks
                            ? void 0
                            : _col_tasks.length
                        )
                          ? (0, jsx_runtime.jsx)(Stack.A, {
                              spacing: 1,
                              children: col.tasks.map((task, taskIndex) => {
                                const isSelected =
                                  (null == selectedTask
                                    ? void 0
                                    : selectedTask.colIndex) === colIndex &&
                                  (null == selectedTask
                                    ? void 0
                                    : selectedTask.taskIndex) === taskIndex
                                return (0, jsx_runtime.jsx)(
                                  Card.A,
                                  {
                                    variant: 'task',
                                    sx: {
                                      mx: '5px',
                                      width: { xs: '250px', sm: '250px' },
                                    },
                                    taskProps: {
                                      title: task.title,
                                      description: task.description,
                                      checked: isSelected,
                                      disabled: null !== selectedColumnIndex,
                                      onCheck: () => {
                                        null === selectedColumnIndex &&
                                          onSelectTask(colIndex, taskIndex)
                                      },
                                      draggable: isTaskDraggable(
                                        colIndex,
                                        taskIndex
                                      ),
                                      onDragStart: e =>
                                        handleLocalTaskDragStart(
                                          e,
                                          colIndex,
                                          taskIndex
                                        ),
                                      onDragOver: handleTaskDragOver,
                                      onDrop: e =>
                                        handleLocalTaskDrop(
                                          e,
                                          colIndex,
                                          taskIndex
                                        ),
                                    },
                                  },
                                  task._id
                                )
                              }),
                            })
                          : (0, jsx_runtime.jsx)(Typography.A, {
                              fontcolor: palette.ON.main,
                              children: 'No tasks yet',
                            }),
                      }),
                    ],
                  },
                  col._id
                )
              }),
              hasOverflow &&
                activeOverflowColumn &&
                (0, jsx_runtime.jsxs)(
                  Box.A,
                  {
                    draggable: !1,
                    onDragOver: e => e.preventDefault(),
                    onDrop: e => {
                      e.preventDefault(), onColumnDrop(e, columns.length)
                    },
                    sx: {
                      boxSizing: 'border-box',
                      width: '300px',
                      height: '70vh',
                      backgroundColor: palette.Ql.main,
                      borderRadius: '5px',
                      display: 'flex',
                      flexDirection: 'column',
                      overflowX: 'hidden',
                      overflowY: 'auto',
                      position: 'relative',
                    },
                    children: [
                      (0, jsx_runtime.jsxs)(Box.A, {
                        sx: {
                          borderBottom: `1px solid ${palette.ON.main}`,
                          p: 2,
                          position: 'relative',
                        },
                        children: [
                          (0, jsx_runtime.jsx)(Dropdown.A, {
                            label: 'More Columns',
                            options:
                              null !==
                                (_overflowColumns_map =
                                  null == overflowColumns
                                    ? void 0
                                    : overflowColumns.map(col => ({
                                        value: col.title,
                                      }))) && void 0 !== _overflowColumns_map
                                ? _overflowColumns_map
                                : [],
                            value:
                              null == activeOverflowColumn
                                ? void 0
                                : activeOverflowColumn.title,
                            onChange: handleOverflowDropdownChange,
                            name: 'overflowColumnSelect',
                            fontcolor: '#000',
                            shrunkfontcolor: palette.ON.main,
                            backgroundcolor: palette.ON.main,
                            shrunklabelposition: 'aboveNotch',
                          }),
                          (0, jsx_runtime.jsx)(Stack.A, {
                            direction: 'column',
                            spacing: 0.5,
                            mt: 1,
                            children: (0, jsx_runtime.jsx)(Typography.A, {
                              fontvariant: 'merrih6',
                              fontcolor: palette.ON.main,
                              children: activeOverflowColumn.description,
                            }),
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsx)(Box.A, {
                        sx: { p: 2, flex: 1 },
                        children: (
                          null ===
                            (_activeOverflowColumn_tasks =
                              activeOverflowColumn.tasks) ||
                          void 0 === _activeOverflowColumn_tasks
                            ? void 0
                            : _activeOverflowColumn_tasks.length
                        )
                          ? (0, jsx_runtime.jsx)(Stack.A, {
                              spacing: 1,
                              children: activeOverflowColumn.tasks.map(
                                (task, taskIndex) => {
                                  const overflowColIndex = columns.length,
                                    isSelected =
                                      (null == selectedTask
                                        ? void 0
                                        : selectedTask.colIndex) ===
                                        overflowColIndex &&
                                      (null == selectedTask
                                        ? void 0
                                        : selectedTask.taskIndex) === taskIndex
                                  return (0, jsx_runtime.jsx)(
                                    Card.A,
                                    {
                                      variant: 'task',
                                      sx: {
                                        mx: '5px',
                                        width: { xs: '250px', sm: '250px' },
                                      },
                                      taskProps: {
                                        title: task.title,
                                        description: task.description,
                                        checked: isSelected,
                                        disabled: !1,
                                        onCheck: () =>
                                          onSelectTask(
                                            overflowColIndex,
                                            taskIndex
                                          ),
                                        draggable: isTaskDraggable(
                                          overflowColIndex,
                                          taskIndex
                                        ),
                                        onDragStart: e =>
                                          handleLocalTaskDragStart(
                                            e,
                                            overflowColIndex,
                                            taskIndex
                                          ),
                                        onDragOver: handleTaskDragOver,
                                        onDrop: e =>
                                          handleLocalTaskDrop(
                                            e,
                                            overflowColIndex,
                                            taskIndex
                                          ),
                                      },
                                    },
                                    task._id
                                  )
                                }
                              ),
                            })
                          : (0, jsx_runtime.jsx)(Typography.A, {
                              fontcolor: palette.ON.main,
                              children: 'No tasks yet',
                            }),
                      }),
                    ],
                  },
                  'overflow-desktop-column'
                ),
            ],
          })
        }
        function MobileBoard({
          columns,
          overflowColumns,
          selectedOverflowColumnId,
          onChangeSelectedOverflowColumn,
          selectedTask,
          onSelectTask,
          onColumnDrop,
        }) {
          var _currentColumn_tasks
          const [allColumns, setAllColumns] = (0, esm_react.fp)(columnsAtom),
            { handleTaskDragStart, handleTaskDragOver, handleTaskDrop } =
              useTaskDragAndDrop(),
            [mobileColumnIndex, setMobileColumnIndex] = (0, react.useState)(0),
            [selectedColumnIndex, setSelectedColumnIndex] = (0, react.useState)(
              null
            )
          function isColumnDraggable(colIndex) {
            return selectedColumnIndex === colIndex
          }
          function isTaskDraggable(colIndex, taskIndex) {
            return (
              null === selectedColumnIndex &&
              (null == selectedTask ? void 0 : selectedTask.colIndex) ===
                colIndex &&
              (null == selectedTask ? void 0 : selectedTask.taskIndex) ===
                taskIndex
            )
          }
          function handleLocalTaskDragStart(e, columnIndex, taskIndex) {
            isTaskDraggable(columnIndex, taskIndex)
              ? handleTaskDragStart(e, { columnIndex, taskIndex })
              : e.preventDefault()
          }
          function handleLocalTaskDrop(e, dropColumnIndex, dropTaskIndex) {
            e.preventDefault(),
              handleTaskDrop(e, {
                dropColumnIndex,
                dropTaskIndex,
                allColumns,
                setAllColumns,
              })
          }
          const hasOverflow = Boolean(
            null == overflowColumns ? void 0 : overflowColumns.length
          )
          let activeOverflowColumn
          hasOverflow &&
            selectedOverflowColumnId &&
            overflowColumns &&
            (activeOverflowColumn =
              overflowColumns.find(c => c._id === selectedOverflowColumnId) ||
              overflowColumns[0])
          const handleOverflowDropdownChange = (0, react.useCallback)(
            e => {
              if (!overflowColumns || !onChangeSelectedOverflowColumn) return
              const colTitle = e.target.value,
                found = overflowColumns.find(c => c.title === colTitle)
              found && onChangeSelectedOverflowColumn(found._id)
            },
            [overflowColumns, onChangeSelectedOverflowColumn]
          )
          if (hasOverflow && activeOverflowColumn) {
            var _activeOverflowColumn_tasks
            const overflowColIndex = columns.length
            var _overflowColumns_map
            return (0, jsx_runtime.jsxs)(
              Box.A,
              {
                draggable: !1,
                onDragOver: e => e.preventDefault(),
                onDrop: e => {
                  e.preventDefault(), onColumnDrop(e, overflowColIndex)
                },
                sx: {
                  boxSizing: 'border-box',
                  width: { xs: '300px', sm: '300px' },
                  height: '70vh',
                  backgroundColor: palette.Ql.main,
                  borderRadius: '5px',
                  display: 'flex',
                  flexDirection: 'column',
                  overflowX: 'hidden',
                  overflowY: 'auto',
                  position: 'relative',
                },
                children: [
                  (0, jsx_runtime.jsxs)(Box.A, {
                    sx: {
                      borderBottom: `1px solid ${palette.ON.main}`,
                      p: 2,
                      position: 'relative',
                    },
                    children: [
                      (0, jsx_runtime.jsx)(Dropdown.A, {
                        label: 'More Columns',
                        options:
                          null !==
                            (_overflowColumns_map =
                              null == overflowColumns
                                ? void 0
                                : overflowColumns.map(col => ({
                                    value: col.title,
                                  }))) && void 0 !== _overflowColumns_map
                            ? _overflowColumns_map
                            : [],
                        value:
                          null == activeOverflowColumn
                            ? void 0
                            : activeOverflowColumn.title,
                        onChange: handleOverflowDropdownChange,
                        name: 'overflowColumnSelect',
                        fontcolor: '#000',
                        shrunkfontcolor: palette.ON.main,
                        backgroundcolor: palette.ON.main,
                        shrunklabelposition: 'aboveNotch',
                      }),
                      (0, jsx_runtime.jsx)(Stack.A, {
                        direction: 'column',
                        spacing: 0.5,
                        mt: 1,
                        children: (0, jsx_runtime.jsx)(Typography.A, {
                          fontvariant: 'merrih6',
                          fontcolor: palette.ON.main,
                          children: activeOverflowColumn.description,
                        }),
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)(Box.A, {
                    sx: { p: 2, flex: 1 },
                    children: (
                      null ===
                        (_activeOverflowColumn_tasks =
                          activeOverflowColumn.tasks) ||
                      void 0 === _activeOverflowColumn_tasks
                        ? void 0
                        : _activeOverflowColumn_tasks.length
                    )
                      ? (0, jsx_runtime.jsx)(Stack.A, {
                          spacing: 1,
                          children: activeOverflowColumn.tasks.map(
                            (task, taskIndex) => {
                              const isSelected =
                                (null == selectedTask
                                  ? void 0
                                  : selectedTask.colIndex) ===
                                  overflowColIndex &&
                                (null == selectedTask
                                  ? void 0
                                  : selectedTask.taskIndex) === taskIndex
                              return (0, jsx_runtime.jsx)(
                                Card.A,
                                {
                                  variant: 'task',
                                  sx: {
                                    mx: '5px',
                                    width: { xs: '250px', sm: '250px' },
                                  },
                                  taskProps: {
                                    title: task.title,
                                    description: task.description,
                                    checked: isSelected,
                                    disabled: !1,
                                    onCheck: () =>
                                      onSelectTask(overflowColIndex, taskIndex),
                                    draggable: isTaskDraggable(
                                      overflowColIndex,
                                      taskIndex
                                    ),
                                    onDragStart: e =>
                                      handleLocalTaskDragStart(
                                        e,
                                        overflowColIndex,
                                        taskIndex
                                      ),
                                    onDragOver: handleTaskDragOver,
                                    onDrop: e =>
                                      handleLocalTaskDrop(
                                        e,
                                        overflowColIndex,
                                        taskIndex
                                      ),
                                  },
                                },
                                task._id
                              )
                            }
                          ),
                        })
                      : (0, jsx_runtime.jsx)(Typography.A, {
                          fontcolor: palette.ON.main,
                          children: 'No tasks yet',
                        }),
                  }),
                ],
              },
              'overflow-mobile-column'
            )
          }
          if (!columns.length)
            return (0, jsx_runtime.jsx)(Typography.A, {
              fontcolor: palette.Ql.main,
              children: 'No columns available.',
            })
          const currentColumn = columns[mobileColumnIndex]
          return (0, jsx_runtime.jsx)(Box.A, {
            sx: {
              boxSizing: 'border-box',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
            children: (0, jsx_runtime.jsxs)(
              Box.A,
              {
                draggable: isColumnDraggable(mobileColumnIndex),
                onDragStart: e =>
                  (function handleLocalColumnDragStart(e, colIndex) {
                    isColumnDraggable(colIndex) || e.preventDefault()
                  })(e, mobileColumnIndex),
                onDragOver: e => e.preventDefault(),
                onDrop: e => {
                  e.preventDefault(), onColumnDrop(e, mobileColumnIndex)
                },
                sx: {
                  boxSizing: 'border-box',
                  width: { xs: '300px', sm: '300px' },
                  height: '70vh',
                  backgroundColor: palette.Ql.main,
                  borderRadius: '5px',
                  display: 'flex',
                  flexDirection: 'column',
                  overflowX: 'hidden',
                  overflowY: 'auto',
                  position: 'relative',
                },
                children: [
                  (0, jsx_runtime.jsxs)(Box.A, {
                    sx: {
                      borderBottom: `1px solid ${palette.ON.main}`,
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      position: 'relative',
                    },
                    children: [
                      (0, jsx_runtime.jsx)(Checkbox_Checkbox.A, {
                        checked: selectedColumnIndex === mobileColumnIndex,
                        disabled: (function isColumnCheckboxDisabled() {
                          return null !== selectedTask
                        })(),
                        onChange: () =>
                          (function handleColumnCheck(colIndex) {
                            selectedColumnIndex === colIndex
                              ? setSelectedColumnIndex(null)
                              : (onSelectTask(-1, -1),
                                setSelectedColumnIndex(colIndex))
                          })(mobileColumnIndex),
                        sx: {
                          position: 'absolute',
                          top: 2,
                          right: 2,
                          color: palette.ON.main,
                          '&.Mui-checked': { color: palette.ON.main },
                        },
                      }),
                      (0, jsx_runtime.jsx)(Dropdown.A, {
                        label: 'Select Column',
                        options: columns.map(col => ({ value: col.title })),
                        value: currentColumn.title,
                        onChange: function handleColumnDropdownChange(e) {
                          const title = e.target.value,
                            foundIndex = columns.findIndex(
                              c => c.title === title
                            )
                          foundIndex >= 0 &&
                            (onSelectTask(-1, -1),
                            setSelectedColumnIndex(null),
                            setMobileColumnIndex(foundIndex))
                        },
                        name: 'mobileColumnSelect',
                        fontcolor: '#000',
                        shrunkfontcolor: palette.ON.main,
                        backgroundcolor: palette.ON.main,
                        shrunklabelposition: 'aboveNotch',
                      }),
                      (0, jsx_runtime.jsx)(Typography.A, {
                        fontvariant: 'merrih6',
                        fontcolor: palette.ON.main,
                        children: currentColumn.description,
                      }),
                    ],
                  }),
                  (0, jsx_runtime.jsx)(Box.A, {
                    sx: { p: 2, flex: 1 },
                    children: (
                      null === (_currentColumn_tasks = currentColumn.tasks) ||
                      void 0 === _currentColumn_tasks
                        ? void 0
                        : _currentColumn_tasks.length
                    )
                      ? (0, jsx_runtime.jsx)(Stack.A, {
                          spacing: 1,
                          children: currentColumn.tasks.map(
                            (task, taskIndex) => {
                              const isSelected =
                                (null == selectedTask
                                  ? void 0
                                  : selectedTask.colIndex) ===
                                  mobileColumnIndex &&
                                (null == selectedTask
                                  ? void 0
                                  : selectedTask.taskIndex) === taskIndex
                              return (0, jsx_runtime.jsx)(
                                Card.A,
                                {
                                  variant: 'task',
                                  sx: {
                                    mx: '5px',
                                    width: { xs: '250px', sm: '250px' },
                                  },
                                  taskProps: {
                                    title: task.title,
                                    description: task.description,
                                    checked: isSelected,
                                    disabled: null !== selectedColumnIndex,
                                    onCheck: () => {
                                      null === selectedColumnIndex &&
                                        onSelectTask(
                                          mobileColumnIndex,
                                          taskIndex
                                        )
                                    },
                                    draggable: isTaskDraggable(
                                      mobileColumnIndex,
                                      taskIndex
                                    ),
                                    onDragStart: e =>
                                      handleLocalTaskDragStart(
                                        e,
                                        mobileColumnIndex,
                                        taskIndex
                                      ),
                                    onDragOver: handleTaskDragOver,
                                    onDrop: e =>
                                      handleLocalTaskDrop(
                                        e,
                                        mobileColumnIndex,
                                        taskIndex
                                      ),
                                  },
                                },
                                task._id
                              )
                            }
                          ),
                        })
                      : (0, jsx_runtime.jsx)(Typography.A, {
                          fontcolor: palette.ON.main,
                          children: 'No tasks yet',
                        }),
                  }),
                ],
              },
              currentColumn._id
            ),
          })
        }
        function TabletBoard({
          columns,
          overflowColumns,
          selectedOverflowColumnId,
          onChangeSelectedOverflowColumn,
          selectedTask,
          onSelectTask,
          onColumnDragStart,
          onColumnDragOver,
          onColumnDrop,
        }) {
          var _activeOverflowColumn_tasks
          const [allColumns, setAllColumns] = (0, esm_react.fp)(columnsAtom),
            [selectedColumnIndex, setSelectedColumnIndex] = (0, react.useState)(
              null
            ),
            { handleTaskDragStart, handleTaskDragOver, handleTaskDrop } =
              useTaskDragAndDrop()
          function isTaskCheckboxDisabled() {
            return null !== selectedColumnIndex
          }
          function isColumnDraggable(colIndex) {
            return selectedColumnIndex === colIndex
          }
          function isTaskDraggable(colIndex, taskIndex) {
            return (
              null === selectedColumnIndex &&
              (null == selectedTask ? void 0 : selectedTask.colIndex) ===
                colIndex &&
              (null == selectedTask ? void 0 : selectedTask.taskIndex) ===
                taskIndex
            )
          }
          function handleLocalTaskDragStart(e, columnIndex, taskIndex) {
            isTaskDraggable(columnIndex, taskIndex)
              ? handleTaskDragStart(e, { columnIndex, taskIndex })
              : e.preventDefault()
          }
          function handleLocalTaskDrop(e, dropColumnIndex, dropTaskIndex) {
            e.preventDefault(),
              handleTaskDrop(e, {
                dropColumnIndex,
                dropTaskIndex,
                allColumns,
                setAllColumns,
              })
          }
          const hasOverflow = Boolean(
            null == overflowColumns ? void 0 : overflowColumns.length
          )
          let activeOverflowColumn
          hasOverflow &&
            selectedOverflowColumnId &&
            overflowColumns &&
            (activeOverflowColumn =
              overflowColumns.find(c => c._id === selectedOverflowColumnId) ||
              overflowColumns[0])
          const handleOverflowDropdownChange = (0, react.useCallback)(
            e => {
              if (!overflowColumns || !onChangeSelectedOverflowColumn) return
              const colTitle = e.target.value,
                found = overflowColumns.find(c => c.title === colTitle)
              found && onChangeSelectedOverflowColumn(found._id)
            },
            [overflowColumns, onChangeSelectedOverflowColumn]
          )
          var _overflowColumns_map
          return (0, jsx_runtime.jsxs)(Stack.A, {
            direction: 'row',
            spacing: 3,
            children: [
              columns.map((col, colIndex) => {
                var _col_tasks
                const colChecked = selectedColumnIndex === colIndex
                return (0, jsx_runtime.jsxs)(
                  Box.A,
                  {
                    draggable: isColumnDraggable(colIndex),
                    onDragStart: e =>
                      (function handleLocalColumnDragStart(e, colIndex) {
                        isColumnDraggable(colIndex)
                          ? onColumnDragStart(e, colIndex)
                          : e.preventDefault()
                      })(e, colIndex),
                    onDragOver: e =>
                      (function handleLocalColumnDragOver(e, colIndex) {
                        e.preventDefault(), onColumnDragOver(e, colIndex)
                      })(e, colIndex),
                    onDrop: e =>
                      (function handleLocalColumnDrop(e, colIndex) {
                        e.preventDefault(), onColumnDrop(e, colIndex)
                      })(e, colIndex),
                    sx: {
                      boxSizing: 'border-box',
                      width: '300px',
                      height: '70vh',
                      backgroundColor: palette.Ql.main,
                      borderRadius: '5px',
                      display: 'flex',
                      flexDirection: 'column',
                      overflowX: 'hidden',
                      overflowY: 'auto',
                      position: 'relative',
                    },
                    children: [
                      (0, jsx_runtime.jsxs)(Box.A, {
                        sx: {
                          borderBottom: `1px solid ${palette.ON.main}`,
                          p: 2,
                          position: 'relative',
                        },
                        children: [
                          (0, jsx_runtime.jsx)(Checkbox_Checkbox.A, {
                            checked: colChecked,
                            disabled: null !== selectedTask,
                            onChange: () =>
                              (function handleColumnCheck(colIndex) {
                                selectedColumnIndex === colIndex
                                  ? setSelectedColumnIndex(null)
                                  : (onSelectTask(-1, -1),
                                    setSelectedColumnIndex(colIndex))
                              })(colIndex),
                            sx: {
                              position: 'absolute',
                              top: 2,
                              right: 2,
                              color: palette.ON.main,
                              '&.Mui-checked': { color: palette.ON.main },
                            },
                          }),
                          (0, jsx_runtime.jsxs)(Stack.A, {
                            direction: 'column',
                            spacing: 0.5,
                            children: [
                              (0, jsx_runtime.jsx)(Typography.A, {
                                fontvariant: 'merrih4',
                                fontcolor: palette.ON.main,
                                children: col.title,
                              }),
                              (0, jsx_runtime.jsx)(Typography.A, {
                                fontvariant: 'merrih6',
                                fontcolor: palette.ON.main,
                                children: col.description,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsx)(Box.A, {
                        sx: { p: 2, flex: 1 },
                        children: (
                          null === (_col_tasks = col.tasks) ||
                          void 0 === _col_tasks
                            ? void 0
                            : _col_tasks.length
                        )
                          ? (0, jsx_runtime.jsx)(Stack.A, {
                              spacing: 1,
                              children: col.tasks.map((task, taskIndex) => {
                                const isSelected =
                                  (null == selectedTask
                                    ? void 0
                                    : selectedTask.colIndex) === colIndex &&
                                  (null == selectedTask
                                    ? void 0
                                    : selectedTask.taskIndex) === taskIndex
                                return (0, jsx_runtime.jsx)(
                                  Card.A,
                                  {
                                    variant: 'task',
                                    sx: {
                                      mx: '5px',
                                      width: { xs: '250px', sm: '250px' },
                                    },
                                    taskProps: {
                                      title: task.title,
                                      description: task.description,
                                      checked: isSelected,
                                      disabled: isTaskCheckboxDisabled(),
                                      onCheck: () => {
                                        null === selectedColumnIndex &&
                                          onSelectTask(colIndex, taskIndex)
                                      },
                                      draggable: isTaskDraggable(
                                        colIndex,
                                        taskIndex
                                      ),
                                      onDragStart: e =>
                                        handleLocalTaskDragStart(
                                          e,
                                          colIndex,
                                          taskIndex
                                        ),
                                      onDragOver: handleTaskDragOver,
                                      onDrop: e =>
                                        handleLocalTaskDrop(
                                          e,
                                          colIndex,
                                          taskIndex
                                        ),
                                    },
                                  },
                                  task._id
                                )
                              }),
                            })
                          : (0, jsx_runtime.jsx)(Typography.A, {
                              fontcolor: palette.ON.main,
                              children: 'No tasks yet',
                            }),
                      }),
                    ],
                  },
                  col._id
                )
              }),
              hasOverflow &&
                activeOverflowColumn &&
                (0, jsx_runtime.jsxs)(
                  Box.A,
                  {
                    draggable: !1,
                    onDragOver: e => e.preventDefault(),
                    onDrop: e => {
                      e.preventDefault(), onColumnDrop(e, columns.length)
                    },
                    sx: {
                      boxSizing: 'border-box',
                      width: '300px',
                      height: '70vh',
                      backgroundColor: palette.Ql.main,
                      borderRadius: '5px',
                      display: 'flex',
                      flexDirection: 'column',
                      overflowX: 'hidden',
                      overflowY: 'auto',
                      position: 'relative',
                    },
                    children: [
                      (0, jsx_runtime.jsxs)(Box.A, {
                        sx: {
                          borderBottom: `1px solid ${palette.ON.main}`,
                          p: 2,
                          position: 'relative',
                        },
                        children: [
                          (0, jsx_runtime.jsx)(Dropdown.A, {
                            label: 'More Columns',
                            options:
                              null !==
                                (_overflowColumns_map =
                                  null == overflowColumns
                                    ? void 0
                                    : overflowColumns.map(col => ({
                                        value: col.title,
                                      }))) && void 0 !== _overflowColumns_map
                                ? _overflowColumns_map
                                : [],
                            value:
                              null == activeOverflowColumn
                                ? void 0
                                : activeOverflowColumn.title,
                            onChange: handleOverflowDropdownChange,
                            name: 'overflowColumnSelect',
                            fontcolor: '#000',
                            shrunkfontcolor: palette.ON.main,
                            backgroundcolor: palette.ON.main,
                            shrunklabelposition: 'aboveNotch',
                          }),
                          (0, jsx_runtime.jsx)(Stack.A, {
                            direction: 'column',
                            spacing: 0.5,
                            mt: 1,
                            children: (0, jsx_runtime.jsx)(Typography.A, {
                              fontvariant: 'merrih6',
                              fontcolor: palette.ON.main,
                              children: activeOverflowColumn.description,
                            }),
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsx)(Box.A, {
                        sx: { p: 2, flex: 1 },
                        children: (
                          null ===
                            (_activeOverflowColumn_tasks =
                              activeOverflowColumn.tasks) ||
                          void 0 === _activeOverflowColumn_tasks
                            ? void 0
                            : _activeOverflowColumn_tasks.length
                        )
                          ? (0, jsx_runtime.jsx)(Stack.A, {
                              spacing: 1,
                              children: activeOverflowColumn.tasks.map(
                                (task, taskIndex) => {
                                  const overflowColIndex = columns.length,
                                    isSelected =
                                      (null == selectedTask
                                        ? void 0
                                        : selectedTask.colIndex) ===
                                        overflowColIndex &&
                                      (null == selectedTask
                                        ? void 0
                                        : selectedTask.taskIndex) === taskIndex
                                  return (0, jsx_runtime.jsx)(
                                    Card.A,
                                    {
                                      variant: 'task',
                                      sx: {
                                        mx: '5px',
                                        width: { xs: '250px', sm: '250px' },
                                      },
                                      taskProps: {
                                        title: task.title,
                                        description: task.description,
                                        checked: isSelected,
                                        disabled: isTaskCheckboxDisabled(),
                                        onCheck: () => {
                                          null === selectedColumnIndex &&
                                            onSelectTask(
                                              overflowColIndex,
                                              taskIndex
                                            )
                                        },
                                        draggable: isTaskDraggable(
                                          overflowColIndex,
                                          taskIndex
                                        ),
                                        onDragStart: e =>
                                          handleLocalTaskDragStart(
                                            e,
                                            overflowColIndex,
                                            taskIndex
                                          ),
                                        onDragOver: handleTaskDragOver,
                                        onDrop: e =>
                                          handleLocalTaskDrop(
                                            e,
                                            overflowColIndex,
                                            taskIndex
                                          ),
                                      },
                                    },
                                    task._id
                                  )
                                }
                              ),
                            })
                          : (0, jsx_runtime.jsx)(Typography.A, {
                              fontcolor: palette.ON.main,
                              children: 'No tasks yet',
                            }),
                      }),
                    ],
                  },
                  'overflow-tablet-column'
                ),
            ],
          })
        }
        function Board(props) {
          const theme = (0, useTheme.A)(),
            isMobile = (0, useMediaQuery.A)(theme.breakpoints.down('sm')),
            isTablet = (0, useMediaQuery.A)(
              theme.breakpoints.between('sm', 'md')
            )
          return isMobile
            ? (0, jsx_runtime.jsx)(MobileBoard, { ...props })
            : isTablet
              ? (0, jsx_runtime.jsx)(TabletBoard, { ...props })
              : (0, jsx_runtime.jsx)(DesktopBoard, { ...props })
        }
        function ProjectBoard({
          variant,
          boardType,
          columns = [],
          tasks = [],
          rawStatuses,
          rawSubStatuses,
          rawTopics,
          rawQueues,
          rawArticles,
          rawCustomers,
          rawEmployees,
          rawSeverityLevels,
          showTaskOpen: showTaskProp,
          onEdit,
          onDelete,
          onDuplicate,
          onCloseTask,
          onComment,
          onEditComment,
          currentUserName,
        }) {
          const [columnState, setColumnState] = (0, esm_react.fp)(columnsAtom),
            mergedColumns = (0, react.useMemo)(
              () =>
                (function mergeColumnsAndTasks(columns, tasks, boardType) {
                  return columns.map(col => {
                    const colId = col._id,
                      matchingTasks = tasks.filter(task => {
                        switch (boardType) {
                          case 'severityLevel':
                            return task.severityId === colId
                          case 'status':
                            return task.statusId === colId
                          case 'subStatus':
                            return task.substatusId === colId
                          case 'topic':
                            var _task_topicIds
                            return null === (_task_topicIds = task.topicIds) ||
                              void 0 === _task_topicIds
                              ? void 0
                              : _task_topicIds.includes(colId)
                          default:
                            return !1
                        }
                      })
                    return {
                      _id: col._id,
                      title: col.title,
                      description: col.description,
                      tasks: matchingTasks,
                    }
                  })
                })(columns, tasks, boardType),
              [columns, tasks, boardType]
            )
          ;(0, react.useEffect)(() => {
            setColumnState(mergedColumns)
          }, [mergedColumns, setColumnState])
          const [selectedTask, setSelectedTask] = (0, react.useState)(null)
          const allTasks = (0, react.useMemo)(
              () => columnState.flatMap(col => col.tasks),
              [columnState]
            ),
            { handleColumnDragStart, handleColumnDragOver, handleColumnDrop } =
              (function useColumnDragAndDrop(columnState, setColumnState) {
                const [dragItem, setDragItem] = react.useState(null)
                return {
                  handleColumnDragStart: function handleColumnDragStart(
                    e,
                    columnIndex
                  ) {
                    ;(e.dataTransfer.effectAllowed = 'move'),
                      setDragItem({ type: 'column', columnIndex })
                  },
                  handleColumnDragOver: function handleColumnDragOver(e) {
                    e.preventDefault(), (e.dataTransfer.dropEffect = 'move')
                  },
                  handleColumnDrop: function handleColumnDrop(
                    e,
                    dropColumnIndex
                  ) {
                    if (
                      (e.preventDefault(),
                      !dragItem || 'column' !== dragItem.type)
                    )
                      return void setDragItem(null)
                    const newCols = (function reorder(
                      list,
                      startIndex,
                      endIndex
                    ) {
                      const result = [...list],
                        [removed] = result.splice(startIndex, 1)
                      return result.splice(endIndex, 0, removed), result
                    })(columnState, dragItem.columnIndex, dropColumnIndex)
                    setColumnState(newCols), setDragItem(null)
                  },
                }
              })(columnState, setColumnState),
            [addTaskOpen, setAddTaskOpen] = (0, react.useState)(!1),
            [localShowTaskOpen, setLocalShowTaskOpen] = (0, react.useState)(
              '-1'
            ),
            showTaskOpen =
              null != showTaskProp ? showTaskProp : localShowTaskOpen
          const currentShowTask = allTasks.find(t => t._id === showTaskOpen),
            showTaskTitle =
              null == currentShowTask ? void 0 : currentShowTask.title,
            showTaskDescription =
              null == currentShowTask ? void 0 : currentShowTask.description,
            showTaskCreatedBy =
              null == currentShowTask ? void 0 : currentShowTask.createdBy
          var _currentShowTask_comments
          const showTaskComments =
              null !==
                (_currentShowTask_comments =
                  null == currentShowTask
                    ? void 0
                    : currentShowTask.comments) &&
              void 0 !== _currentShowTask_comments
                ? _currentShowTask_comments
                : [],
            showTaskCustomerAssigned =
              null == currentShowTask
                ? void 0
                : currentShowTask.customerAssigned,
            showTaskSeverity =
              null == currentShowTask ? void 0 : currentShowTask.severity,
            showTaskSchedulingQueue =
              null == currentShowTask
                ? void 0
                : currentShowTask.schedulingQueue,
            showTaskStatus =
              null == currentShowTask ? void 0 : currentShowTask.status,
            showTaskSubStatus =
              null == currentShowTask ? void 0 : currentShowTask.subStatus,
            showTaskTopics =
              null == currentShowTask ? void 0 : currentShowTask.topicLabels,
            showTaskKBArticles =
              null == currentShowTask ? void 0 : currentShowTask.kbArticles,
            showTaskTeamMemberAssigned =
              null == currentShowTask ? void 0 : currentShowTask.teamMember,
            showTaskNextActionDate =
              null == currentShowTask ? void 0 : currentShowTask.nextActionDate,
            showTaskCustomerOptions = (0, react.useMemo)(
              () =>
                (null != rawCustomers ? rawCustomers : []).map(c =>
                  [c.firstName, c.lastName].filter(Boolean).join(' ')
                ),
              [rawCustomers]
            ),
            showTaskSeverityOptions = (0, react.useMemo)(
              () =>
                (null != rawSeverityLevels ? rawSeverityLevels : []).map(
                  sl => sl.description || `Severity #${sl.severityLevel}`
                ),
              [rawSeverityLevels]
            ),
            showTaskSchedulingQueueOptions = (0, react.useMemo)(
              () => (null != rawQueues ? rawQueues : []).map(q => q.queueName),
              [rawQueues]
            ),
            showTaskStatusOptions = (0, react.useMemo)(
              () => (null != rawStatuses ? rawStatuses : []).map(s => s.status),
              [rawStatuses]
            ),
            showTaskSubStatusOptions = (0, react.useMemo)(
              () =>
                (null != rawSubStatuses ? rawSubStatuses : []).map(
                  ss => ss.subStatus
                ),
              [rawSubStatuses]
            ),
            showTaskTopicOptions = (0, react.useMemo)(
              () => (null != rawTopics ? rawTopics : []).map(t => t.topic),
              [rawTopics]
            ),
            showTaskKBArticleOptions = (0, react.useMemo)(
              () =>
                (null != rawArticles ? rawArticles : []).map(
                  a => a.articleTitle
                ),
              [rawArticles]
            ),
            showTaskTeamMemberOptions = (0, react.useMemo)(
              () =>
                (null != rawEmployees ? rawEmployees : []).map(e =>
                  [e.firstName, e.lastName].filter(Boolean).join(' ')
                ),
              [rawEmployees]
            ),
            [searchTerm, setSearchTerm] = (0, react.useState)('')
          const filteredColumnState = (0, react.useMemo)(() => {
              const lowerTerm = searchTerm.toLowerCase()
              return columnState.map(col => {
                const filteredTasks = col.tasks.filter(
                  t =>
                    t.title.toLowerCase().includes(lowerTerm) ||
                    t.description.toLowerCase().includes(lowerTerm)
                )
                return { ...col, tasks: filteredTasks }
              })
            }, [columnState, searchTerm]),
            {
              containerRef,
              fittedColumns,
              overflowColumns,
              selectedOverflowColumnId,
              setSelectedOverflowColumnId,
            } = (function useComputeBoardResize({
              columns,
              columnWidth,
              showOverflowDropdown,
            }) {
              const containerRef = (0, react.useRef)(null),
                [fittedColumns, setFittedColumns] = (0, react.useState)([]),
                [overflowColumns, setOverflowColumns] = (0, react.useState)([]),
                [selectedOverflowColumnId, setSelectedOverflowColumnId] = (0,
                react.useState)(''),
                recalcColumns = (0, react.useCallback)(() => {
                  if (!containerRef.current) return
                  const containerWidth = containerRef.current.offsetWidth,
                    overflowReservedWidth = showOverflowDropdown
                      ? columnWidth
                      : 0
                  let usedWidth = 0
                  const canFit = []
                  let theOverflow = []
                  for (let i = 0; i < columns.length; i++) {
                    if (
                      !(
                        usedWidth + columnWidth + overflowReservedWidth <=
                        containerWidth
                      )
                    ) {
                      if (
                        ((theOverflow = columns.slice(i)),
                        theOverflow.length > 0 && canFit.length > 0)
                      ) {
                        const lastFitted = canFit.pop()
                        lastFitted &&
                          (theOverflow = [lastFitted, ...theOverflow])
                      }
                      break
                    }
                    canFit.push(columns[i]), (usedWidth += columnWidth)
                  }
                  setFittedColumns(canFit),
                    setOverflowColumns(theOverflow),
                    theOverflow.length > 0
                      ? theOverflow.some(
                          c => c._id === selectedOverflowColumnId
                        ) || setSelectedOverflowColumnId(theOverflow[0]._id)
                      : '' !== selectedOverflowColumnId &&
                        setSelectedOverflowColumnId('')
                }, [
                  columns,
                  columnWidth,
                  showOverflowDropdown,
                  selectedOverflowColumnId,
                ])
              return (
                (0, react.useLayoutEffect)(() => {
                  if (!containerRef.current) return
                  const ro = new ResizeObserver(() => {
                    recalcColumns()
                  })
                  return ro.observe(containerRef.current), () => ro.disconnect()
                }, [recalcColumns]),
                (0, react.useEffect)(() => {
                  const handleResize = () => recalcColumns()
                  return (
                    window.addEventListener('resize', handleResize),
                    () => window.removeEventListener('resize', handleResize)
                  )
                }, [recalcColumns]),
                (0, react.useEffect)(() => {
                  recalcColumns()
                }, [recalcColumns]),
                {
                  containerRef,
                  fittedColumns,
                  overflowColumns,
                  selectedOverflowColumnId,
                  setSelectedOverflowColumnId,
                }
              )
            })({
              columns: filteredColumnState,
              columnWidth: 300,
              showOverflowDropdown: !0,
            })
          const exactlyOneSelected = null !== selectedTask
          let selectedTaskId = ''
          if (exactlyOneSelected) {
            const { colIndex, taskIndex } = selectedTask
            colIndex >= 0 &&
              colIndex < columnState.length &&
              taskIndex >= 0 &&
              taskIndex < columnState[colIndex].tasks.length &&
              (selectedTaskId = columnState[colIndex].tasks[taskIndex]._id)
          }
          const buttons = [
            { text: 'Create Task', onClick: () => setAddTaskOpen(!0) },
            {
              text: 'Show Task',
              onClick: () => {
                exactlyOneSelected &&
                  selectedTaskId &&
                  (showTaskProp || setLocalShowTaskOpen(selectedTaskId))
              },
              disabled: !exactlyOneSelected || !selectedTaskId,
            },
          ]
          return (0, jsx_runtime.jsxs)(Box.A, {
            ref: containerRef,
            sx: { boxSizing: 'border-box', width: '100%', height: '100%' },
            children: [
              (0, jsx_runtime.jsx)(Toolbar.A, {
                buttons,
                searchbarProps: {
                  label: 'Search...',
                  value: searchTerm,
                  onChange: function handleSearchChange(e) {
                    setSearchTerm(e.target.value)
                  },
                  backgroundcolor: palette.Yb.main,
                  shrunkfontcolor: palette.ON.main,
                  unshrunkfontcolor: palette.ON.main,
                  shrunklabelposition: 'onNotch',
                },
              }),
              (0, jsx_runtime.jsx)(Stack.A, {
                direction: 'row',
                spacing: 3,
                mt: 1,
                pl: 4,
                children: (0, jsx_runtime.jsx)(Board, {
                  columns: fittedColumns,
                  overflowColumns,
                  selectedOverflowColumnId,
                  onChangeSelectedOverflowColumn: setSelectedOverflowColumnId,
                  selectedTask,
                  onSelectTask: function handleSelectTask(colIndex, taskIndex) {
                    ;(null == selectedTask ? void 0 : selectedTask.colIndex) ===
                      colIndex &&
                    (null == selectedTask ? void 0 : selectedTask.taskIndex) ===
                      taskIndex
                      ? setSelectedTask(null)
                      : setSelectedTask({ colIndex, taskIndex })
                  },
                  onColumnDragStart: handleColumnDragStart,
                  onColumnDragOver: handleColumnDragOver,
                  onColumnDrop: handleColumnDrop,
                }),
              }),
              (0, jsx_runtime.jsx)(client, {
                open: addTaskOpen,
                onClose: () => setAddTaskOpen(!1),
                variant,
                onSubmit: function handleAddTaskSubmit(newTask) {
                  if (0 === columnState.length) return
                  const newCols = [...columnState],
                    colId = newCols[0]._id,
                    typedTask = {
                      ...newTask,
                      _id: String(Date.now()),
                      title: newTask.title || '',
                      description: newTask.description || '',
                    }
                  switch (boardType) {
                    case 'severityLevel':
                      typedTask.severityId = colId
                      break
                    case 'status':
                      typedTask.statusId = colId
                      break
                    case 'subStatus':
                      typedTask.substatusId = colId
                      break
                    case 'topic':
                      typedTask.topicIds = [colId]
                  }
                  newCols[0].tasks.push(typedTask),
                    setColumnState(newCols),
                    setAddTaskOpen(!1)
                },
                statuses: rawStatuses,
                subStatuses: rawSubStatuses,
                topics: rawTopics,
                schedulingQueues: rawQueues,
                knowledgebaseArticles: rawArticles,
                customers: rawCustomers,
                employees: rawEmployees,
                severityLevels: rawSeverityLevels,
              }),
              (0, jsx_runtime.jsx)(ShowTask_client, {
                open: '-1' !== showTaskOpen,
                onClose: () => {
                  showTaskProp || setLocalShowTaskOpen('-1')
                },
                taskTitle: showTaskTitle,
                createdBy: showTaskCreatedBy,
                description: showTaskDescription,
                comments: showTaskComments,
                customerAssigned: showTaskCustomerAssigned,
                severity: showTaskSeverity,
                schedulingQueue: showTaskSchedulingQueue,
                status: showTaskStatus,
                subStatus: showTaskSubStatus,
                topics: showTaskTopics,
                knowledgebaseArticles: showTaskKBArticles,
                teamMemberAssigned: showTaskTeamMemberAssigned,
                nextActionDate: showTaskNextActionDate,
                currentUserName,
                onEdit: () =>
                  null == onEdit ? void 0 : onEdit({ _id: showTaskOpen || '' }),
                onDelete: () =>
                  null == onDelete
                    ? void 0
                    : onDelete({ _id: showTaskOpen || '' }),
                onDuplicate: () =>
                  null == onDuplicate
                    ? void 0
                    : onDuplicate({ _id: showTaskOpen || '' }),
                onCloseTask: () =>
                  null == onCloseTask
                    ? void 0
                    : onCloseTask({ _id: showTaskOpen || '' }),
                onComment: text =>
                  null == onComment
                    ? void 0
                    : onComment(text, showTaskOpen || ''),
                customerOptions: showTaskCustomerOptions,
                severityOptions: showTaskSeverityOptions,
                schedulingQueueOptions: showTaskSchedulingQueueOptions,
                statusOptions: showTaskStatusOptions,
                subStatusOptions: showTaskSubStatusOptions,
                topicOptions: showTaskTopicOptions,
                knowledgebaseArticleOptions: showTaskKBArticleOptions,
                teamMemberOptions: showTaskTeamMemberOptions,
                onEditComment: (commentId, newText) =>
                  (function handleEditComment(commentId, newText, taskId) {
                    setColumnState(oldCols =>
                      oldCols.map(col => {
                        const updatedTasks = col.tasks.map(task => {
                          if (task._id !== taskId) return task
                          const updatedComments = (task.comments || []).map(
                            c =>
                              c._id === commentId
                                ? {
                                    ...c,
                                    text: newText,
                                    updatedAt: new Date().toISOString(),
                                    lastEditedBy:
                                      null != currentUserName
                                        ? currentUserName
                                        : 'CurrentUser',
                                  }
                                : c
                          )
                          return { ...task, comments: updatedComments }
                        })
                        return { ...col, tasks: updatedTasks }
                      })
                    ),
                      null == onEditComment ||
                        onEditComment(commentId, newText, taskId)
                  })(commentId, newText, showTaskOpen || ''),
              }),
            ],
          })
        }
        ;(DesktopBoard.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'DesktopBoard',
          props: {
            columns: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  title: string\n  description: string\n  tasks: Task[]\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'title',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'description',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'tasks',
                          value: {
                            name: 'Array',
                            elements: [
                              {
                                name: 'signature',
                                type: 'object',
                                raw: '{\n  _id: string\n  /** The parent company ID or other domain-specific reference. */\n  companyId?: string\n\n  title: string\n  description: string\n\n  /** If severity is linked to a separate record, store it here. */\n  severityId?: string\n  /** The main status. */\n  statusId?: string\n  /** The sub-status. */\n  substatusId?: string\n  /** The scheduling queue ID. */\n  schedulingQueueId?: string\n  /** Topics array, each referencing a topic ID. */\n  topicIds?: string[]\n  /** Comments array, referencing comment IDs. */\n  commentIds?: string[]\n  /** Employee IDs assigned to the task. */\n  employeeIds?: string[]\n  /** Knowledgebase article IDs. */\n  articleIds?: string[]\n  /** The "customer" ID if you have one. */\n  customerId?: string\n\n  /** Timestamps. */\n  createdAt?: Date\n  closedAt?: Date\n  updatedAt?: Date\n  createdBy?: string\n\n  /**\n   * If you want to store the actual comments (rather than just commentIds),\n   * so ShowTask can display them directly.\n   */\n  comments?: Array<{\n    _id: string\n    authorName: string\n    text: string\n  }>\n\n  /** If you store the "customer assigned" label as text (e.g. "Bobbie Sue"). */\n  customerAssigned?: string\n\n  /** Severity label text (e.g. "Critical"). */\n  severity?: string\n\n  /** Scheduling Queue text (e.g. "Technologies Unlimited"). */\n  schedulingQueue?: string\n\n  /** High-level status text (e.g. "Open"). */\n  status?: string\n\n  /** Sub-status text (e.g. "In Progress"). */\n  subStatus?: string\n\n  /**\n   * If you want to store the actual topic strings (e.g. ["Technical Support"]).\n   * This can be used in addition to or instead of topicIds.\n   */\n  topicLabels?: string[]\n\n  /**\n   * If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\n   * This can be used in addition to or instead of articleIds.\n   */\n  kbArticles?: string[]\n\n  /** A string representing the assigned team member (e.g. "Matthew Goluba"). */\n  teamMember?: string\n\n  /** If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST"). */\n  nextActionDate?: string\n}',
                                signature: {
                                  properties: [
                                    {
                                      key: '_id',
                                      value: { name: 'string', required: !0 },
                                    },
                                    {
                                      key: 'companyId',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'The parent company ID or other domain-specific reference.',
                                    },
                                    {
                                      key: 'title',
                                      value: { name: 'string', required: !0 },
                                    },
                                    {
                                      key: 'description',
                                      value: { name: 'string', required: !0 },
                                    },
                                    {
                                      key: 'severityId',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'If severity is linked to a separate record, store it here.',
                                    },
                                    {
                                      key: 'statusId',
                                      value: { name: 'string', required: !1 },
                                      description: 'The main status.',
                                    },
                                    {
                                      key: 'substatusId',
                                      value: { name: 'string', required: !1 },
                                      description: 'The sub-status.',
                                    },
                                    {
                                      key: 'schedulingQueueId',
                                      value: { name: 'string', required: !1 },
                                      description: 'The scheduling queue ID.',
                                    },
                                    {
                                      key: 'topicIds',
                                      value: {
                                        name: 'Array',
                                        elements: [{ name: 'string' }],
                                        raw: 'string[]',
                                        required: !1,
                                      },
                                      description:
                                        'Topics array, each referencing a topic ID.',
                                    },
                                    {
                                      key: 'commentIds',
                                      value: {
                                        name: 'Array',
                                        elements: [{ name: 'string' }],
                                        raw: 'string[]',
                                        required: !1,
                                      },
                                      description:
                                        'Comments array, referencing comment IDs.',
                                    },
                                    {
                                      key: 'employeeIds',
                                      value: {
                                        name: 'Array',
                                        elements: [{ name: 'string' }],
                                        raw: 'string[]',
                                        required: !1,
                                      },
                                      description:
                                        'Employee IDs assigned to the task.',
                                    },
                                    {
                                      key: 'articleIds',
                                      value: {
                                        name: 'Array',
                                        elements: [{ name: 'string' }],
                                        raw: 'string[]',
                                        required: !1,
                                      },
                                      description: 'Knowledgebase article IDs.',
                                    },
                                    {
                                      key: 'customerId',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'The "customer" ID if you have one.',
                                    },
                                    {
                                      key: 'createdAt',
                                      value: { name: 'Date', required: !1 },
                                      description: 'Timestamps.',
                                    },
                                    {
                                      key: 'closedAt',
                                      value: { name: 'Date', required: !1 },
                                    },
                                    {
                                      key: 'updatedAt',
                                      value: { name: 'Date', required: !1 },
                                    },
                                    {
                                      key: 'createdBy',
                                      value: { name: 'string', required: !1 },
                                    },
                                    {
                                      key: 'comments',
                                      value: {
                                        name: 'Array',
                                        elements: [
                                          {
                                            name: 'signature',
                                            type: 'object',
                                            raw: '{\n  _id: string\n  authorName: string\n  text: string\n}',
                                            signature: {
                                              properties: [
                                                {
                                                  key: '_id',
                                                  value: {
                                                    name: 'string',
                                                    required: !0,
                                                  },
                                                },
                                                {
                                                  key: 'authorName',
                                                  value: {
                                                    name: 'string',
                                                    required: !0,
                                                  },
                                                },
                                                {
                                                  key: 'text',
                                                  value: {
                                                    name: 'string',
                                                    required: !0,
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                        raw: 'Array<{\n  _id: string\n  authorName: string\n  text: string\n}>',
                                        required: !1,
                                      },
                                      description:
                                        'If you want to store the actual comments (rather than just commentIds),\nso ShowTask can display them directly.',
                                    },
                                    {
                                      key: 'customerAssigned',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'If you store the "customer assigned" label as text (e.g. "Bobbie Sue").',
                                    },
                                    {
                                      key: 'severity',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'Severity label text (e.g. "Critical").',
                                    },
                                    {
                                      key: 'schedulingQueue',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'Scheduling Queue text (e.g. "Technologies Unlimited").',
                                    },
                                    {
                                      key: 'status',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'High-level status text (e.g. "Open").',
                                    },
                                    {
                                      key: 'subStatus',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'Sub-status text (e.g. "In Progress").',
                                    },
                                    {
                                      key: 'topicLabels',
                                      value: {
                                        name: 'Array',
                                        elements: [{ name: 'string' }],
                                        raw: 'string[]',
                                        required: !1,
                                      },
                                      description:
                                        'If you want to store the actual topic strings (e.g. ["Technical Support"]).\nThis can be used in addition to or instead of topicIds.',
                                    },
                                    {
                                      key: 'kbArticles',
                                      value: {
                                        name: 'Array',
                                        elements: [{ name: 'string' }],
                                        raw: 'string[]',
                                        required: !1,
                                      },
                                      description:
                                        'If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\nThis can be used in addition to or instead of articleIds.',
                                    },
                                    {
                                      key: 'teamMember',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'A string representing the assigned team member (e.g. "Matthew Goluba").',
                                    },
                                    {
                                      key: 'nextActionDate',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST").',
                                    },
                                  ],
                                },
                              },
                            ],
                            raw: 'Task[]',
                            required: !0,
                          },
                        },
                      ],
                    },
                  },
                ],
                raw: 'ColumnData[]',
              },
              description:
                'The columns to display (already "filtered/fitted" if needed).',
            },
            overflowColumns: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  title: string\n  description: string\n  tasks: Task[]\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'title',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'description',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'tasks',
                          value: {
                            name: 'Array',
                            elements: [
                              {
                                name: 'signature',
                                type: 'object',
                                raw: '{\n  _id: string\n  /** The parent company ID or other domain-specific reference. */\n  companyId?: string\n\n  title: string\n  description: string\n\n  /** If severity is linked to a separate record, store it here. */\n  severityId?: string\n  /** The main status. */\n  statusId?: string\n  /** The sub-status. */\n  substatusId?: string\n  /** The scheduling queue ID. */\n  schedulingQueueId?: string\n  /** Topics array, each referencing a topic ID. */\n  topicIds?: string[]\n  /** Comments array, referencing comment IDs. */\n  commentIds?: string[]\n  /** Employee IDs assigned to the task. */\n  employeeIds?: string[]\n  /** Knowledgebase article IDs. */\n  articleIds?: string[]\n  /** The "customer" ID if you have one. */\n  customerId?: string\n\n  /** Timestamps. */\n  createdAt?: Date\n  closedAt?: Date\n  updatedAt?: Date\n  createdBy?: string\n\n  /**\n   * If you want to store the actual comments (rather than just commentIds),\n   * so ShowTask can display them directly.\n   */\n  comments?: Array<{\n    _id: string\n    authorName: string\n    text: string\n  }>\n\n  /** If you store the "customer assigned" label as text (e.g. "Bobbie Sue"). */\n  customerAssigned?: string\n\n  /** Severity label text (e.g. "Critical"). */\n  severity?: string\n\n  /** Scheduling Queue text (e.g. "Technologies Unlimited"). */\n  schedulingQueue?: string\n\n  /** High-level status text (e.g. "Open"). */\n  status?: string\n\n  /** Sub-status text (e.g. "In Progress"). */\n  subStatus?: string\n\n  /**\n   * If you want to store the actual topic strings (e.g. ["Technical Support"]).\n   * This can be used in addition to or instead of topicIds.\n   */\n  topicLabels?: string[]\n\n  /**\n   * If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\n   * This can be used in addition to or instead of articleIds.\n   */\n  kbArticles?: string[]\n\n  /** A string representing the assigned team member (e.g. "Matthew Goluba"). */\n  teamMember?: string\n\n  /** If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST"). */\n  nextActionDate?: string\n}',
                                signature: {
                                  properties: [
                                    {
                                      key: '_id',
                                      value: { name: 'string', required: !0 },
                                    },
                                    {
                                      key: 'companyId',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'The parent company ID or other domain-specific reference.',
                                    },
                                    {
                                      key: 'title',
                                      value: { name: 'string', required: !0 },
                                    },
                                    {
                                      key: 'description',
                                      value: { name: 'string', required: !0 },
                                    },
                                    {
                                      key: 'severityId',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'If severity is linked to a separate record, store it here.',
                                    },
                                    {
                                      key: 'statusId',
                                      value: { name: 'string', required: !1 },
                                      description: 'The main status.',
                                    },
                                    {
                                      key: 'substatusId',
                                      value: { name: 'string', required: !1 },
                                      description: 'The sub-status.',
                                    },
                                    {
                                      key: 'schedulingQueueId',
                                      value: { name: 'string', required: !1 },
                                      description: 'The scheduling queue ID.',
                                    },
                                    {
                                      key: 'topicIds',
                                      value: {
                                        name: 'Array',
                                        elements: [{ name: 'string' }],
                                        raw: 'string[]',
                                        required: !1,
                                      },
                                      description:
                                        'Topics array, each referencing a topic ID.',
                                    },
                                    {
                                      key: 'commentIds',
                                      value: {
                                        name: 'Array',
                                        elements: [{ name: 'string' }],
                                        raw: 'string[]',
                                        required: !1,
                                      },
                                      description:
                                        'Comments array, referencing comment IDs.',
                                    },
                                    {
                                      key: 'employeeIds',
                                      value: {
                                        name: 'Array',
                                        elements: [{ name: 'string' }],
                                        raw: 'string[]',
                                        required: !1,
                                      },
                                      description:
                                        'Employee IDs assigned to the task.',
                                    },
                                    {
                                      key: 'articleIds',
                                      value: {
                                        name: 'Array',
                                        elements: [{ name: 'string' }],
                                        raw: 'string[]',
                                        required: !1,
                                      },
                                      description: 'Knowledgebase article IDs.',
                                    },
                                    {
                                      key: 'customerId',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'The "customer" ID if you have one.',
                                    },
                                    {
                                      key: 'createdAt',
                                      value: { name: 'Date', required: !1 },
                                      description: 'Timestamps.',
                                    },
                                    {
                                      key: 'closedAt',
                                      value: { name: 'Date', required: !1 },
                                    },
                                    {
                                      key: 'updatedAt',
                                      value: { name: 'Date', required: !1 },
                                    },
                                    {
                                      key: 'createdBy',
                                      value: { name: 'string', required: !1 },
                                    },
                                    {
                                      key: 'comments',
                                      value: {
                                        name: 'Array',
                                        elements: [
                                          {
                                            name: 'signature',
                                            type: 'object',
                                            raw: '{\n  _id: string\n  authorName: string\n  text: string\n}',
                                            signature: {
                                              properties: [
                                                {
                                                  key: '_id',
                                                  value: {
                                                    name: 'string',
                                                    required: !0,
                                                  },
                                                },
                                                {
                                                  key: 'authorName',
                                                  value: {
                                                    name: 'string',
                                                    required: !0,
                                                  },
                                                },
                                                {
                                                  key: 'text',
                                                  value: {
                                                    name: 'string',
                                                    required: !0,
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                        raw: 'Array<{\n  _id: string\n  authorName: string\n  text: string\n}>',
                                        required: !1,
                                      },
                                      description:
                                        'If you want to store the actual comments (rather than just commentIds),\nso ShowTask can display them directly.',
                                    },
                                    {
                                      key: 'customerAssigned',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'If you store the "customer assigned" label as text (e.g. "Bobbie Sue").',
                                    },
                                    {
                                      key: 'severity',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'Severity label text (e.g. "Critical").',
                                    },
                                    {
                                      key: 'schedulingQueue',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'Scheduling Queue text (e.g. "Technologies Unlimited").',
                                    },
                                    {
                                      key: 'status',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'High-level status text (e.g. "Open").',
                                    },
                                    {
                                      key: 'subStatus',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'Sub-status text (e.g. "In Progress").',
                                    },
                                    {
                                      key: 'topicLabels',
                                      value: {
                                        name: 'Array',
                                        elements: [{ name: 'string' }],
                                        raw: 'string[]',
                                        required: !1,
                                      },
                                      description:
                                        'If you want to store the actual topic strings (e.g. ["Technical Support"]).\nThis can be used in addition to or instead of topicIds.',
                                    },
                                    {
                                      key: 'kbArticles',
                                      value: {
                                        name: 'Array',
                                        elements: [{ name: 'string' }],
                                        raw: 'string[]',
                                        required: !1,
                                      },
                                      description:
                                        'If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\nThis can be used in addition to or instead of articleIds.',
                                    },
                                    {
                                      key: 'teamMember',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'A string representing the assigned team member (e.g. "Matthew Goluba").',
                                    },
                                    {
                                      key: 'nextActionDate',
                                      value: { name: 'string', required: !1 },
                                      description:
                                        'If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST").',
                                    },
                                  ],
                                },
                              },
                            ],
                            raw: 'Task[]',
                            required: !0,
                          },
                        },
                      ],
                    },
                  },
                ],
                raw: 'ColumnData[]',
              },
              description: 'Overflow columns, if any.',
            },
            selectedOverflowColumnId: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            onChangeSelectedOverflowColumn: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(colId: string) => void',
                signature: {
                  arguments: [{ type: { name: 'string' }, name: 'colId' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            selectedTask: {
              required: !0,
              tsType: {
                name: 'union',
                raw: '{ colIndex: number; taskIndex: number } | null',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{ colIndex: number; taskIndex: number }',
                    signature: {
                      properties: [
                        {
                          key: 'colIndex',
                          value: { name: 'number', required: !0 },
                        },
                        {
                          key: 'taskIndex',
                          value: { name: 'number', required: !0 },
                        },
                      ],
                    },
                  },
                  { name: 'null' },
                ],
              },
              description: 'Which task is selected?',
            },
            onSelectTask: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(colIndex: number, taskIndex: number) => void',
                signature: {
                  arguments: [
                    { type: { name: 'number' }, name: 'colIndex' },
                    { type: { name: 'number' }, name: 'taskIndex' },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onColumnDragStart: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(e: React.DragEvent, columnIndex: number) => void',
                signature: {
                  arguments: [
                    {
                      type: { name: 'ReactDragEvent', raw: 'React.DragEvent' },
                      name: 'e',
                    },
                    { type: { name: 'number' }, name: 'columnIndex' },
                  ],
                  return: { name: 'void' },
                },
              },
              description: 'Column-level DnD from the parent ProjectBoard',
            },
            onColumnDragOver: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(e: React.DragEvent, columnIndex: number) => void',
                signature: {
                  arguments: [
                    {
                      type: { name: 'ReactDragEvent', raw: 'React.DragEvent' },
                      name: 'e',
                    },
                    { type: { name: 'number' }, name: 'columnIndex' },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onColumnDrop: {
              required: !0,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(e: React.DragEvent, columnIndex: number) => void',
                signature: {
                  arguments: [
                    {
                      type: { name: 'ReactDragEvent', raw: 'React.DragEvent' },
                      name: 'e',
                    },
                    { type: { name: 'number' }, name: 'columnIndex' },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
          },
        }),
          (MobileBoard.__docgenInfo = {
            description:
              'Mobile: if overflow exists, show ONLY the overflow column. Otherwise,\n show a single selected "main" column from the \'columns\' array.',
            methods: [],
            displayName: 'MobileBoard',
            props: {
              columns: {
                required: !0,
                tsType: {
                  name: 'Array',
                  elements: [
                    {
                      name: 'signature',
                      type: 'object',
                      raw: '{\n  _id: string\n  title: string\n  description: string\n  tasks: Task[]\n}',
                      signature: {
                        properties: [
                          {
                            key: '_id',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'title',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'description',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'tasks',
                            value: {
                              name: 'Array',
                              elements: [
                                {
                                  name: 'signature',
                                  type: 'object',
                                  raw: '{\n  _id: string\n  /** The parent company ID or other domain-specific reference. */\n  companyId?: string\n\n  title: string\n  description: string\n\n  /** If severity is linked to a separate record, store it here. */\n  severityId?: string\n  /** The main status. */\n  statusId?: string\n  /** The sub-status. */\n  substatusId?: string\n  /** The scheduling queue ID. */\n  schedulingQueueId?: string\n  /** Topics array, each referencing a topic ID. */\n  topicIds?: string[]\n  /** Comments array, referencing comment IDs. */\n  commentIds?: string[]\n  /** Employee IDs assigned to the task. */\n  employeeIds?: string[]\n  /** Knowledgebase article IDs. */\n  articleIds?: string[]\n  /** The "customer" ID if you have one. */\n  customerId?: string\n\n  /** Timestamps. */\n  createdAt?: Date\n  closedAt?: Date\n  updatedAt?: Date\n  createdBy?: string\n\n  /**\n   * If you want to store the actual comments (rather than just commentIds),\n   * so ShowTask can display them directly.\n   */\n  comments?: Array<{\n    _id: string\n    authorName: string\n    text: string\n  }>\n\n  /** If you store the "customer assigned" label as text (e.g. "Bobbie Sue"). */\n  customerAssigned?: string\n\n  /** Severity label text (e.g. "Critical"). */\n  severity?: string\n\n  /** Scheduling Queue text (e.g. "Technologies Unlimited"). */\n  schedulingQueue?: string\n\n  /** High-level status text (e.g. "Open"). */\n  status?: string\n\n  /** Sub-status text (e.g. "In Progress"). */\n  subStatus?: string\n\n  /**\n   * If you want to store the actual topic strings (e.g. ["Technical Support"]).\n   * This can be used in addition to or instead of topicIds.\n   */\n  topicLabels?: string[]\n\n  /**\n   * If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\n   * This can be used in addition to or instead of articleIds.\n   */\n  kbArticles?: string[]\n\n  /** A string representing the assigned team member (e.g. "Matthew Goluba"). */\n  teamMember?: string\n\n  /** If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST"). */\n  nextActionDate?: string\n}',
                                  signature: {
                                    properties: [
                                      {
                                        key: '_id',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'companyId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'The parent company ID or other domain-specific reference.',
                                      },
                                      {
                                        key: 'title',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'description',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'severityId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If severity is linked to a separate record, store it here.',
                                      },
                                      {
                                        key: 'statusId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The main status.',
                                      },
                                      {
                                        key: 'substatusId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The sub-status.',
                                      },
                                      {
                                        key: 'schedulingQueueId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The scheduling queue ID.',
                                      },
                                      {
                                        key: 'topicIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Topics array, each referencing a topic ID.',
                                      },
                                      {
                                        key: 'commentIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Comments array, referencing comment IDs.',
                                      },
                                      {
                                        key: 'employeeIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Employee IDs assigned to the task.',
                                      },
                                      {
                                        key: 'articleIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Knowledgebase article IDs.',
                                      },
                                      {
                                        key: 'customerId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'The "customer" ID if you have one.',
                                      },
                                      {
                                        key: 'createdAt',
                                        value: { name: 'Date', required: !1 },
                                        description: 'Timestamps.',
                                      },
                                      {
                                        key: 'closedAt',
                                        value: { name: 'Date', required: !1 },
                                      },
                                      {
                                        key: 'updatedAt',
                                        value: { name: 'Date', required: !1 },
                                      },
                                      {
                                        key: 'createdBy',
                                        value: { name: 'string', required: !1 },
                                      },
                                      {
                                        key: 'comments',
                                        value: {
                                          name: 'Array',
                                          elements: [
                                            {
                                              name: 'signature',
                                              type: 'object',
                                              raw: '{\n  _id: string\n  authorName: string\n  text: string\n}',
                                              signature: {
                                                properties: [
                                                  {
                                                    key: '_id',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                  {
                                                    key: 'authorName',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                  {
                                                    key: 'text',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                          raw: 'Array<{\n  _id: string\n  authorName: string\n  text: string\n}>',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store the actual comments (rather than just commentIds),\nso ShowTask can display them directly.',
                                      },
                                      {
                                        key: 'customerAssigned',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If you store the "customer assigned" label as text (e.g. "Bobbie Sue").',
                                      },
                                      {
                                        key: 'severity',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Severity label text (e.g. "Critical").',
                                      },
                                      {
                                        key: 'schedulingQueue',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Scheduling Queue text (e.g. "Technologies Unlimited").',
                                      },
                                      {
                                        key: 'status',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'High-level status text (e.g. "Open").',
                                      },
                                      {
                                        key: 'subStatus',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Sub-status text (e.g. "In Progress").',
                                      },
                                      {
                                        key: 'topicLabels',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store the actual topic strings (e.g. ["Technical Support"]).\nThis can be used in addition to or instead of topicIds.',
                                      },
                                      {
                                        key: 'kbArticles',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\nThis can be used in addition to or instead of articleIds.',
                                      },
                                      {
                                        key: 'teamMember',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'A string representing the assigned team member (e.g. "Matthew Goluba").',
                                      },
                                      {
                                        key: 'nextActionDate',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST").',
                                      },
                                    ],
                                  },
                                },
                              ],
                              raw: 'Task[]',
                              required: !0,
                            },
                          },
                        ],
                      },
                    },
                  ],
                  raw: 'ColumnData[]',
                },
                description:
                  'The columns to display (already "filtered/fitted" if needed).',
              },
              overflowColumns: {
                required: !1,
                tsType: {
                  name: 'Array',
                  elements: [
                    {
                      name: 'signature',
                      type: 'object',
                      raw: '{\n  _id: string\n  title: string\n  description: string\n  tasks: Task[]\n}',
                      signature: {
                        properties: [
                          {
                            key: '_id',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'title',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'description',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'tasks',
                            value: {
                              name: 'Array',
                              elements: [
                                {
                                  name: 'signature',
                                  type: 'object',
                                  raw: '{\n  _id: string\n  /** The parent company ID or other domain-specific reference. */\n  companyId?: string\n\n  title: string\n  description: string\n\n  /** If severity is linked to a separate record, store it here. */\n  severityId?: string\n  /** The main status. */\n  statusId?: string\n  /** The sub-status. */\n  substatusId?: string\n  /** The scheduling queue ID. */\n  schedulingQueueId?: string\n  /** Topics array, each referencing a topic ID. */\n  topicIds?: string[]\n  /** Comments array, referencing comment IDs. */\n  commentIds?: string[]\n  /** Employee IDs assigned to the task. */\n  employeeIds?: string[]\n  /** Knowledgebase article IDs. */\n  articleIds?: string[]\n  /** The "customer" ID if you have one. */\n  customerId?: string\n\n  /** Timestamps. */\n  createdAt?: Date\n  closedAt?: Date\n  updatedAt?: Date\n  createdBy?: string\n\n  /**\n   * If you want to store the actual comments (rather than just commentIds),\n   * so ShowTask can display them directly.\n   */\n  comments?: Array<{\n    _id: string\n    authorName: string\n    text: string\n  }>\n\n  /** If you store the "customer assigned" label as text (e.g. "Bobbie Sue"). */\n  customerAssigned?: string\n\n  /** Severity label text (e.g. "Critical"). */\n  severity?: string\n\n  /** Scheduling Queue text (e.g. "Technologies Unlimited"). */\n  schedulingQueue?: string\n\n  /** High-level status text (e.g. "Open"). */\n  status?: string\n\n  /** Sub-status text (e.g. "In Progress"). */\n  subStatus?: string\n\n  /**\n   * If you want to store the actual topic strings (e.g. ["Technical Support"]).\n   * This can be used in addition to or instead of topicIds.\n   */\n  topicLabels?: string[]\n\n  /**\n   * If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\n   * This can be used in addition to or instead of articleIds.\n   */\n  kbArticles?: string[]\n\n  /** A string representing the assigned team member (e.g. "Matthew Goluba"). */\n  teamMember?: string\n\n  /** If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST"). */\n  nextActionDate?: string\n}',
                                  signature: {
                                    properties: [
                                      {
                                        key: '_id',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'companyId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'The parent company ID or other domain-specific reference.',
                                      },
                                      {
                                        key: 'title',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'description',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'severityId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If severity is linked to a separate record, store it here.',
                                      },
                                      {
                                        key: 'statusId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The main status.',
                                      },
                                      {
                                        key: 'substatusId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The sub-status.',
                                      },
                                      {
                                        key: 'schedulingQueueId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The scheduling queue ID.',
                                      },
                                      {
                                        key: 'topicIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Topics array, each referencing a topic ID.',
                                      },
                                      {
                                        key: 'commentIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Comments array, referencing comment IDs.',
                                      },
                                      {
                                        key: 'employeeIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Employee IDs assigned to the task.',
                                      },
                                      {
                                        key: 'articleIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Knowledgebase article IDs.',
                                      },
                                      {
                                        key: 'customerId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'The "customer" ID if you have one.',
                                      },
                                      {
                                        key: 'createdAt',
                                        value: { name: 'Date', required: !1 },
                                        description: 'Timestamps.',
                                      },
                                      {
                                        key: 'closedAt',
                                        value: { name: 'Date', required: !1 },
                                      },
                                      {
                                        key: 'updatedAt',
                                        value: { name: 'Date', required: !1 },
                                      },
                                      {
                                        key: 'createdBy',
                                        value: { name: 'string', required: !1 },
                                      },
                                      {
                                        key: 'comments',
                                        value: {
                                          name: 'Array',
                                          elements: [
                                            {
                                              name: 'signature',
                                              type: 'object',
                                              raw: '{\n  _id: string\n  authorName: string\n  text: string\n}',
                                              signature: {
                                                properties: [
                                                  {
                                                    key: '_id',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                  {
                                                    key: 'authorName',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                  {
                                                    key: 'text',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                          raw: 'Array<{\n  _id: string\n  authorName: string\n  text: string\n}>',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store the actual comments (rather than just commentIds),\nso ShowTask can display them directly.',
                                      },
                                      {
                                        key: 'customerAssigned',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If you store the "customer assigned" label as text (e.g. "Bobbie Sue").',
                                      },
                                      {
                                        key: 'severity',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Severity label text (e.g. "Critical").',
                                      },
                                      {
                                        key: 'schedulingQueue',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Scheduling Queue text (e.g. "Technologies Unlimited").',
                                      },
                                      {
                                        key: 'status',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'High-level status text (e.g. "Open").',
                                      },
                                      {
                                        key: 'subStatus',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Sub-status text (e.g. "In Progress").',
                                      },
                                      {
                                        key: 'topicLabels',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store the actual topic strings (e.g. ["Technical Support"]).\nThis can be used in addition to or instead of topicIds.',
                                      },
                                      {
                                        key: 'kbArticles',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\nThis can be used in addition to or instead of articleIds.',
                                      },
                                      {
                                        key: 'teamMember',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'A string representing the assigned team member (e.g. "Matthew Goluba").',
                                      },
                                      {
                                        key: 'nextActionDate',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST").',
                                      },
                                    ],
                                  },
                                },
                              ],
                              raw: 'Task[]',
                              required: !0,
                            },
                          },
                        ],
                      },
                    },
                  ],
                  raw: 'ColumnData[]',
                },
                description: 'Overflow columns, if any.',
              },
              selectedOverflowColumnId: {
                required: !1,
                tsType: { name: 'string' },
                description: '',
              },
              onChangeSelectedOverflowColumn: {
                required: !1,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(colId: string) => void',
                  signature: {
                    arguments: [{ type: { name: 'string' }, name: 'colId' }],
                    return: { name: 'void' },
                  },
                },
                description: '',
              },
              selectedTask: {
                required: !0,
                tsType: {
                  name: 'union',
                  raw: '{ colIndex: number; taskIndex: number } | null',
                  elements: [
                    {
                      name: 'signature',
                      type: 'object',
                      raw: '{ colIndex: number; taskIndex: number }',
                      signature: {
                        properties: [
                          {
                            key: 'colIndex',
                            value: { name: 'number', required: !0 },
                          },
                          {
                            key: 'taskIndex',
                            value: { name: 'number', required: !0 },
                          },
                        ],
                      },
                    },
                    { name: 'null' },
                  ],
                },
                description: 'Which task is selected?',
              },
              onSelectTask: {
                required: !0,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(colIndex: number, taskIndex: number) => void',
                  signature: {
                    arguments: [
                      { type: { name: 'number' }, name: 'colIndex' },
                      { type: { name: 'number' }, name: 'taskIndex' },
                    ],
                    return: { name: 'void' },
                  },
                },
                description: '',
              },
              onColumnDragStart: {
                required: !0,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(e: React.DragEvent, columnIndex: number) => void',
                  signature: {
                    arguments: [
                      {
                        type: {
                          name: 'ReactDragEvent',
                          raw: 'React.DragEvent',
                        },
                        name: 'e',
                      },
                      { type: { name: 'number' }, name: 'columnIndex' },
                    ],
                    return: { name: 'void' },
                  },
                },
                description: 'Column-level DnD from the parent ProjectBoard',
              },
              onColumnDragOver: {
                required: !0,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(e: React.DragEvent, columnIndex: number) => void',
                  signature: {
                    arguments: [
                      {
                        type: {
                          name: 'ReactDragEvent',
                          raw: 'React.DragEvent',
                        },
                        name: 'e',
                      },
                      { type: { name: 'number' }, name: 'columnIndex' },
                    ],
                    return: { name: 'void' },
                  },
                },
                description: '',
              },
              onColumnDrop: {
                required: !0,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(e: React.DragEvent, columnIndex: number) => void',
                  signature: {
                    arguments: [
                      {
                        type: {
                          name: 'ReactDragEvent',
                          raw: 'React.DragEvent',
                        },
                        name: 'e',
                      },
                      { type: { name: 'number' }, name: 'columnIndex' },
                    ],
                    return: { name: 'void' },
                  },
                },
                description: '',
              },
            },
          }),
          (TabletBoard.__docgenInfo = {
            description:
              'The TabletBoard:\n - Shows all "fitted" columns on the left\n - If overflowColumns exist, show exactly one overflow column on the right with a dropdown',
            methods: [],
            displayName: 'TabletBoard',
            props: {
              columns: {
                required: !0,
                tsType: {
                  name: 'Array',
                  elements: [
                    {
                      name: 'signature',
                      type: 'object',
                      raw: '{\n  _id: string\n  title: string\n  description: string\n  tasks: Task[]\n}',
                      signature: {
                        properties: [
                          {
                            key: '_id',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'title',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'description',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'tasks',
                            value: {
                              name: 'Array',
                              elements: [
                                {
                                  name: 'signature',
                                  type: 'object',
                                  raw: '{\n  _id: string\n  /** The parent company ID or other domain-specific reference. */\n  companyId?: string\n\n  title: string\n  description: string\n\n  /** If severity is linked to a separate record, store it here. */\n  severityId?: string\n  /** The main status. */\n  statusId?: string\n  /** The sub-status. */\n  substatusId?: string\n  /** The scheduling queue ID. */\n  schedulingQueueId?: string\n  /** Topics array, each referencing a topic ID. */\n  topicIds?: string[]\n  /** Comments array, referencing comment IDs. */\n  commentIds?: string[]\n  /** Employee IDs assigned to the task. */\n  employeeIds?: string[]\n  /** Knowledgebase article IDs. */\n  articleIds?: string[]\n  /** The "customer" ID if you have one. */\n  customerId?: string\n\n  /** Timestamps. */\n  createdAt?: Date\n  closedAt?: Date\n  updatedAt?: Date\n  createdBy?: string\n\n  /**\n   * If you want to store the actual comments (rather than just commentIds),\n   * so ShowTask can display them directly.\n   */\n  comments?: Array<{\n    _id: string\n    authorName: string\n    text: string\n  }>\n\n  /** If you store the "customer assigned" label as text (e.g. "Bobbie Sue"). */\n  customerAssigned?: string\n\n  /** Severity label text (e.g. "Critical"). */\n  severity?: string\n\n  /** Scheduling Queue text (e.g. "Technologies Unlimited"). */\n  schedulingQueue?: string\n\n  /** High-level status text (e.g. "Open"). */\n  status?: string\n\n  /** Sub-status text (e.g. "In Progress"). */\n  subStatus?: string\n\n  /**\n   * If you want to store the actual topic strings (e.g. ["Technical Support"]).\n   * This can be used in addition to or instead of topicIds.\n   */\n  topicLabels?: string[]\n\n  /**\n   * If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\n   * This can be used in addition to or instead of articleIds.\n   */\n  kbArticles?: string[]\n\n  /** A string representing the assigned team member (e.g. "Matthew Goluba"). */\n  teamMember?: string\n\n  /** If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST"). */\n  nextActionDate?: string\n}',
                                  signature: {
                                    properties: [
                                      {
                                        key: '_id',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'companyId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'The parent company ID or other domain-specific reference.',
                                      },
                                      {
                                        key: 'title',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'description',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'severityId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If severity is linked to a separate record, store it here.',
                                      },
                                      {
                                        key: 'statusId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The main status.',
                                      },
                                      {
                                        key: 'substatusId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The sub-status.',
                                      },
                                      {
                                        key: 'schedulingQueueId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The scheduling queue ID.',
                                      },
                                      {
                                        key: 'topicIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Topics array, each referencing a topic ID.',
                                      },
                                      {
                                        key: 'commentIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Comments array, referencing comment IDs.',
                                      },
                                      {
                                        key: 'employeeIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Employee IDs assigned to the task.',
                                      },
                                      {
                                        key: 'articleIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Knowledgebase article IDs.',
                                      },
                                      {
                                        key: 'customerId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'The "customer" ID if you have one.',
                                      },
                                      {
                                        key: 'createdAt',
                                        value: { name: 'Date', required: !1 },
                                        description: 'Timestamps.',
                                      },
                                      {
                                        key: 'closedAt',
                                        value: { name: 'Date', required: !1 },
                                      },
                                      {
                                        key: 'updatedAt',
                                        value: { name: 'Date', required: !1 },
                                      },
                                      {
                                        key: 'createdBy',
                                        value: { name: 'string', required: !1 },
                                      },
                                      {
                                        key: 'comments',
                                        value: {
                                          name: 'Array',
                                          elements: [
                                            {
                                              name: 'signature',
                                              type: 'object',
                                              raw: '{\n  _id: string\n  authorName: string\n  text: string\n}',
                                              signature: {
                                                properties: [
                                                  {
                                                    key: '_id',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                  {
                                                    key: 'authorName',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                  {
                                                    key: 'text',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                          raw: 'Array<{\n  _id: string\n  authorName: string\n  text: string\n}>',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store the actual comments (rather than just commentIds),\nso ShowTask can display them directly.',
                                      },
                                      {
                                        key: 'customerAssigned',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If you store the "customer assigned" label as text (e.g. "Bobbie Sue").',
                                      },
                                      {
                                        key: 'severity',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Severity label text (e.g. "Critical").',
                                      },
                                      {
                                        key: 'schedulingQueue',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Scheduling Queue text (e.g. "Technologies Unlimited").',
                                      },
                                      {
                                        key: 'status',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'High-level status text (e.g. "Open").',
                                      },
                                      {
                                        key: 'subStatus',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Sub-status text (e.g. "In Progress").',
                                      },
                                      {
                                        key: 'topicLabels',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store the actual topic strings (e.g. ["Technical Support"]).\nThis can be used in addition to or instead of topicIds.',
                                      },
                                      {
                                        key: 'kbArticles',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\nThis can be used in addition to or instead of articleIds.',
                                      },
                                      {
                                        key: 'teamMember',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'A string representing the assigned team member (e.g. "Matthew Goluba").',
                                      },
                                      {
                                        key: 'nextActionDate',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST").',
                                      },
                                    ],
                                  },
                                },
                              ],
                              raw: 'Task[]',
                              required: !0,
                            },
                          },
                        ],
                      },
                    },
                  ],
                  raw: 'ColumnData[]',
                },
                description:
                  'The columns to display (already "filtered/fitted" if needed).',
              },
              overflowColumns: {
                required: !1,
                tsType: {
                  name: 'Array',
                  elements: [
                    {
                      name: 'signature',
                      type: 'object',
                      raw: '{\n  _id: string\n  title: string\n  description: string\n  tasks: Task[]\n}',
                      signature: {
                        properties: [
                          {
                            key: '_id',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'title',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'description',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'tasks',
                            value: {
                              name: 'Array',
                              elements: [
                                {
                                  name: 'signature',
                                  type: 'object',
                                  raw: '{\n  _id: string\n  /** The parent company ID or other domain-specific reference. */\n  companyId?: string\n\n  title: string\n  description: string\n\n  /** If severity is linked to a separate record, store it here. */\n  severityId?: string\n  /** The main status. */\n  statusId?: string\n  /** The sub-status. */\n  substatusId?: string\n  /** The scheduling queue ID. */\n  schedulingQueueId?: string\n  /** Topics array, each referencing a topic ID. */\n  topicIds?: string[]\n  /** Comments array, referencing comment IDs. */\n  commentIds?: string[]\n  /** Employee IDs assigned to the task. */\n  employeeIds?: string[]\n  /** Knowledgebase article IDs. */\n  articleIds?: string[]\n  /** The "customer" ID if you have one. */\n  customerId?: string\n\n  /** Timestamps. */\n  createdAt?: Date\n  closedAt?: Date\n  updatedAt?: Date\n  createdBy?: string\n\n  /**\n   * If you want to store the actual comments (rather than just commentIds),\n   * so ShowTask can display them directly.\n   */\n  comments?: Array<{\n    _id: string\n    authorName: string\n    text: string\n  }>\n\n  /** If you store the "customer assigned" label as text (e.g. "Bobbie Sue"). */\n  customerAssigned?: string\n\n  /** Severity label text (e.g. "Critical"). */\n  severity?: string\n\n  /** Scheduling Queue text (e.g. "Technologies Unlimited"). */\n  schedulingQueue?: string\n\n  /** High-level status text (e.g. "Open"). */\n  status?: string\n\n  /** Sub-status text (e.g. "In Progress"). */\n  subStatus?: string\n\n  /**\n   * If you want to store the actual topic strings (e.g. ["Technical Support"]).\n   * This can be used in addition to or instead of topicIds.\n   */\n  topicLabels?: string[]\n\n  /**\n   * If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\n   * This can be used in addition to or instead of articleIds.\n   */\n  kbArticles?: string[]\n\n  /** A string representing the assigned team member (e.g. "Matthew Goluba"). */\n  teamMember?: string\n\n  /** If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST"). */\n  nextActionDate?: string\n}',
                                  signature: {
                                    properties: [
                                      {
                                        key: '_id',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'companyId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'The parent company ID or other domain-specific reference.',
                                      },
                                      {
                                        key: 'title',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'description',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'severityId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If severity is linked to a separate record, store it here.',
                                      },
                                      {
                                        key: 'statusId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The main status.',
                                      },
                                      {
                                        key: 'substatusId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The sub-status.',
                                      },
                                      {
                                        key: 'schedulingQueueId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The scheduling queue ID.',
                                      },
                                      {
                                        key: 'topicIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Topics array, each referencing a topic ID.',
                                      },
                                      {
                                        key: 'commentIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Comments array, referencing comment IDs.',
                                      },
                                      {
                                        key: 'employeeIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Employee IDs assigned to the task.',
                                      },
                                      {
                                        key: 'articleIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Knowledgebase article IDs.',
                                      },
                                      {
                                        key: 'customerId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'The "customer" ID if you have one.',
                                      },
                                      {
                                        key: 'createdAt',
                                        value: { name: 'Date', required: !1 },
                                        description: 'Timestamps.',
                                      },
                                      {
                                        key: 'closedAt',
                                        value: { name: 'Date', required: !1 },
                                      },
                                      {
                                        key: 'updatedAt',
                                        value: { name: 'Date', required: !1 },
                                      },
                                      {
                                        key: 'createdBy',
                                        value: { name: 'string', required: !1 },
                                      },
                                      {
                                        key: 'comments',
                                        value: {
                                          name: 'Array',
                                          elements: [
                                            {
                                              name: 'signature',
                                              type: 'object',
                                              raw: '{\n  _id: string\n  authorName: string\n  text: string\n}',
                                              signature: {
                                                properties: [
                                                  {
                                                    key: '_id',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                  {
                                                    key: 'authorName',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                  {
                                                    key: 'text',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                          raw: 'Array<{\n  _id: string\n  authorName: string\n  text: string\n}>',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store the actual comments (rather than just commentIds),\nso ShowTask can display them directly.',
                                      },
                                      {
                                        key: 'customerAssigned',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If you store the "customer assigned" label as text (e.g. "Bobbie Sue").',
                                      },
                                      {
                                        key: 'severity',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Severity label text (e.g. "Critical").',
                                      },
                                      {
                                        key: 'schedulingQueue',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Scheduling Queue text (e.g. "Technologies Unlimited").',
                                      },
                                      {
                                        key: 'status',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'High-level status text (e.g. "Open").',
                                      },
                                      {
                                        key: 'subStatus',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Sub-status text (e.g. "In Progress").',
                                      },
                                      {
                                        key: 'topicLabels',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store the actual topic strings (e.g. ["Technical Support"]).\nThis can be used in addition to or instead of topicIds.',
                                      },
                                      {
                                        key: 'kbArticles',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\nThis can be used in addition to or instead of articleIds.',
                                      },
                                      {
                                        key: 'teamMember',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'A string representing the assigned team member (e.g. "Matthew Goluba").',
                                      },
                                      {
                                        key: 'nextActionDate',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST").',
                                      },
                                    ],
                                  },
                                },
                              ],
                              raw: 'Task[]',
                              required: !0,
                            },
                          },
                        ],
                      },
                    },
                  ],
                  raw: 'ColumnData[]',
                },
                description: 'Overflow columns, if any.',
              },
              selectedOverflowColumnId: {
                required: !1,
                tsType: { name: 'string' },
                description: '',
              },
              onChangeSelectedOverflowColumn: {
                required: !1,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(colId: string) => void',
                  signature: {
                    arguments: [{ type: { name: 'string' }, name: 'colId' }],
                    return: { name: 'void' },
                  },
                },
                description: '',
              },
              selectedTask: {
                required: !0,
                tsType: {
                  name: 'union',
                  raw: '{ colIndex: number; taskIndex: number } | null',
                  elements: [
                    {
                      name: 'signature',
                      type: 'object',
                      raw: '{ colIndex: number; taskIndex: number }',
                      signature: {
                        properties: [
                          {
                            key: 'colIndex',
                            value: { name: 'number', required: !0 },
                          },
                          {
                            key: 'taskIndex',
                            value: { name: 'number', required: !0 },
                          },
                        ],
                      },
                    },
                    { name: 'null' },
                  ],
                },
                description: 'Which task is selected?',
              },
              onSelectTask: {
                required: !0,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(colIndex: number, taskIndex: number) => void',
                  signature: {
                    arguments: [
                      { type: { name: 'number' }, name: 'colIndex' },
                      { type: { name: 'number' }, name: 'taskIndex' },
                    ],
                    return: { name: 'void' },
                  },
                },
                description: '',
              },
              onColumnDragStart: {
                required: !0,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(e: React.DragEvent, columnIndex: number) => void',
                  signature: {
                    arguments: [
                      {
                        type: {
                          name: 'ReactDragEvent',
                          raw: 'React.DragEvent',
                        },
                        name: 'e',
                      },
                      { type: { name: 'number' }, name: 'columnIndex' },
                    ],
                    return: { name: 'void' },
                  },
                },
                description: 'Column-level DnD from the parent ProjectBoard',
              },
              onColumnDragOver: {
                required: !0,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(e: React.DragEvent, columnIndex: number) => void',
                  signature: {
                    arguments: [
                      {
                        type: {
                          name: 'ReactDragEvent',
                          raw: 'React.DragEvent',
                        },
                        name: 'e',
                      },
                      { type: { name: 'number' }, name: 'columnIndex' },
                    ],
                    return: { name: 'void' },
                  },
                },
                description: '',
              },
              onColumnDrop: {
                required: !0,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(e: React.DragEvent, columnIndex: number) => void',
                  signature: {
                    arguments: [
                      {
                        type: {
                          name: 'ReactDragEvent',
                          raw: 'React.DragEvent',
                        },
                        name: 'e',
                      },
                      { type: { name: 'number' }, name: 'columnIndex' },
                    ],
                    return: { name: 'void' },
                  },
                },
                description: '',
              },
            },
          }),
          (Board.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'Board',
            props: {
              columns: {
                required: !0,
                tsType: {
                  name: 'Array',
                  elements: [
                    {
                      name: 'signature',
                      type: 'object',
                      raw: '{\n  _id: string\n  title: string\n  description: string\n  tasks: Task[]\n}',
                      signature: {
                        properties: [
                          {
                            key: '_id',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'title',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'description',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'tasks',
                            value: {
                              name: 'Array',
                              elements: [
                                {
                                  name: 'signature',
                                  type: 'object',
                                  raw: '{\n  _id: string\n  /** The parent company ID or other domain-specific reference. */\n  companyId?: string\n\n  title: string\n  description: string\n\n  /** If severity is linked to a separate record, store it here. */\n  severityId?: string\n  /** The main status. */\n  statusId?: string\n  /** The sub-status. */\n  substatusId?: string\n  /** The scheduling queue ID. */\n  schedulingQueueId?: string\n  /** Topics array, each referencing a topic ID. */\n  topicIds?: string[]\n  /** Comments array, referencing comment IDs. */\n  commentIds?: string[]\n  /** Employee IDs assigned to the task. */\n  employeeIds?: string[]\n  /** Knowledgebase article IDs. */\n  articleIds?: string[]\n  /** The "customer" ID if you have one. */\n  customerId?: string\n\n  /** Timestamps. */\n  createdAt?: Date\n  closedAt?: Date\n  updatedAt?: Date\n  createdBy?: string\n\n  /**\n   * If you want to store the actual comments (rather than just commentIds),\n   * so ShowTask can display them directly.\n   */\n  comments?: Array<{\n    _id: string\n    authorName: string\n    text: string\n  }>\n\n  /** If you store the "customer assigned" label as text (e.g. "Bobbie Sue"). */\n  customerAssigned?: string\n\n  /** Severity label text (e.g. "Critical"). */\n  severity?: string\n\n  /** Scheduling Queue text (e.g. "Technologies Unlimited"). */\n  schedulingQueue?: string\n\n  /** High-level status text (e.g. "Open"). */\n  status?: string\n\n  /** Sub-status text (e.g. "In Progress"). */\n  subStatus?: string\n\n  /**\n   * If you want to store the actual topic strings (e.g. ["Technical Support"]).\n   * This can be used in addition to or instead of topicIds.\n   */\n  topicLabels?: string[]\n\n  /**\n   * If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\n   * This can be used in addition to or instead of articleIds.\n   */\n  kbArticles?: string[]\n\n  /** A string representing the assigned team member (e.g. "Matthew Goluba"). */\n  teamMember?: string\n\n  /** If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST"). */\n  nextActionDate?: string\n}',
                                  signature: {
                                    properties: [
                                      {
                                        key: '_id',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'companyId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'The parent company ID or other domain-specific reference.',
                                      },
                                      {
                                        key: 'title',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'description',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'severityId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If severity is linked to a separate record, store it here.',
                                      },
                                      {
                                        key: 'statusId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The main status.',
                                      },
                                      {
                                        key: 'substatusId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The sub-status.',
                                      },
                                      {
                                        key: 'schedulingQueueId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The scheduling queue ID.',
                                      },
                                      {
                                        key: 'topicIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Topics array, each referencing a topic ID.',
                                      },
                                      {
                                        key: 'commentIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Comments array, referencing comment IDs.',
                                      },
                                      {
                                        key: 'employeeIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Employee IDs assigned to the task.',
                                      },
                                      {
                                        key: 'articleIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Knowledgebase article IDs.',
                                      },
                                      {
                                        key: 'customerId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'The "customer" ID if you have one.',
                                      },
                                      {
                                        key: 'createdAt',
                                        value: { name: 'Date', required: !1 },
                                        description: 'Timestamps.',
                                      },
                                      {
                                        key: 'closedAt',
                                        value: { name: 'Date', required: !1 },
                                      },
                                      {
                                        key: 'updatedAt',
                                        value: { name: 'Date', required: !1 },
                                      },
                                      {
                                        key: 'createdBy',
                                        value: { name: 'string', required: !1 },
                                      },
                                      {
                                        key: 'comments',
                                        value: {
                                          name: 'Array',
                                          elements: [
                                            {
                                              name: 'signature',
                                              type: 'object',
                                              raw: '{\n  _id: string\n  authorName: string\n  text: string\n}',
                                              signature: {
                                                properties: [
                                                  {
                                                    key: '_id',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                  {
                                                    key: 'authorName',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                  {
                                                    key: 'text',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                          raw: 'Array<{\n  _id: string\n  authorName: string\n  text: string\n}>',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store the actual comments (rather than just commentIds),\nso ShowTask can display them directly.',
                                      },
                                      {
                                        key: 'customerAssigned',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If you store the "customer assigned" label as text (e.g. "Bobbie Sue").',
                                      },
                                      {
                                        key: 'severity',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Severity label text (e.g. "Critical").',
                                      },
                                      {
                                        key: 'schedulingQueue',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Scheduling Queue text (e.g. "Technologies Unlimited").',
                                      },
                                      {
                                        key: 'status',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'High-level status text (e.g. "Open").',
                                      },
                                      {
                                        key: 'subStatus',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Sub-status text (e.g. "In Progress").',
                                      },
                                      {
                                        key: 'topicLabels',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store the actual topic strings (e.g. ["Technical Support"]).\nThis can be used in addition to or instead of topicIds.',
                                      },
                                      {
                                        key: 'kbArticles',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\nThis can be used in addition to or instead of articleIds.',
                                      },
                                      {
                                        key: 'teamMember',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'A string representing the assigned team member (e.g. "Matthew Goluba").',
                                      },
                                      {
                                        key: 'nextActionDate',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST").',
                                      },
                                    ],
                                  },
                                },
                              ],
                              raw: 'Task[]',
                              required: !0,
                            },
                          },
                        ],
                      },
                    },
                  ],
                  raw: 'ColumnData[]',
                },
                description:
                  'The columns to display (already "filtered/fitted" if needed).',
              },
              overflowColumns: {
                required: !1,
                tsType: {
                  name: 'Array',
                  elements: [
                    {
                      name: 'signature',
                      type: 'object',
                      raw: '{\n  _id: string\n  title: string\n  description: string\n  tasks: Task[]\n}',
                      signature: {
                        properties: [
                          {
                            key: '_id',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'title',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'description',
                            value: { name: 'string', required: !0 },
                          },
                          {
                            key: 'tasks',
                            value: {
                              name: 'Array',
                              elements: [
                                {
                                  name: 'signature',
                                  type: 'object',
                                  raw: '{\n  _id: string\n  /** The parent company ID or other domain-specific reference. */\n  companyId?: string\n\n  title: string\n  description: string\n\n  /** If severity is linked to a separate record, store it here. */\n  severityId?: string\n  /** The main status. */\n  statusId?: string\n  /** The sub-status. */\n  substatusId?: string\n  /** The scheduling queue ID. */\n  schedulingQueueId?: string\n  /** Topics array, each referencing a topic ID. */\n  topicIds?: string[]\n  /** Comments array, referencing comment IDs. */\n  commentIds?: string[]\n  /** Employee IDs assigned to the task. */\n  employeeIds?: string[]\n  /** Knowledgebase article IDs. */\n  articleIds?: string[]\n  /** The "customer" ID if you have one. */\n  customerId?: string\n\n  /** Timestamps. */\n  createdAt?: Date\n  closedAt?: Date\n  updatedAt?: Date\n  createdBy?: string\n\n  /**\n   * If you want to store the actual comments (rather than just commentIds),\n   * so ShowTask can display them directly.\n   */\n  comments?: Array<{\n    _id: string\n    authorName: string\n    text: string\n  }>\n\n  /** If you store the "customer assigned" label as text (e.g. "Bobbie Sue"). */\n  customerAssigned?: string\n\n  /** Severity label text (e.g. "Critical"). */\n  severity?: string\n\n  /** Scheduling Queue text (e.g. "Technologies Unlimited"). */\n  schedulingQueue?: string\n\n  /** High-level status text (e.g. "Open"). */\n  status?: string\n\n  /** Sub-status text (e.g. "In Progress"). */\n  subStatus?: string\n\n  /**\n   * If you want to store the actual topic strings (e.g. ["Technical Support"]).\n   * This can be used in addition to or instead of topicIds.\n   */\n  topicLabels?: string[]\n\n  /**\n   * If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\n   * This can be used in addition to or instead of articleIds.\n   */\n  kbArticles?: string[]\n\n  /** A string representing the assigned team member (e.g. "Matthew Goluba"). */\n  teamMember?: string\n\n  /** If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST"). */\n  nextActionDate?: string\n}',
                                  signature: {
                                    properties: [
                                      {
                                        key: '_id',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'companyId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'The parent company ID or other domain-specific reference.',
                                      },
                                      {
                                        key: 'title',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'description',
                                        value: { name: 'string', required: !0 },
                                      },
                                      {
                                        key: 'severityId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If severity is linked to a separate record, store it here.',
                                      },
                                      {
                                        key: 'statusId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The main status.',
                                      },
                                      {
                                        key: 'substatusId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The sub-status.',
                                      },
                                      {
                                        key: 'schedulingQueueId',
                                        value: { name: 'string', required: !1 },
                                        description: 'The scheduling queue ID.',
                                      },
                                      {
                                        key: 'topicIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Topics array, each referencing a topic ID.',
                                      },
                                      {
                                        key: 'commentIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Comments array, referencing comment IDs.',
                                      },
                                      {
                                        key: 'employeeIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Employee IDs assigned to the task.',
                                      },
                                      {
                                        key: 'articleIds',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'Knowledgebase article IDs.',
                                      },
                                      {
                                        key: 'customerId',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'The "customer" ID if you have one.',
                                      },
                                      {
                                        key: 'createdAt',
                                        value: { name: 'Date', required: !1 },
                                        description: 'Timestamps.',
                                      },
                                      {
                                        key: 'closedAt',
                                        value: { name: 'Date', required: !1 },
                                      },
                                      {
                                        key: 'updatedAt',
                                        value: { name: 'Date', required: !1 },
                                      },
                                      {
                                        key: 'createdBy',
                                        value: { name: 'string', required: !1 },
                                      },
                                      {
                                        key: 'comments',
                                        value: {
                                          name: 'Array',
                                          elements: [
                                            {
                                              name: 'signature',
                                              type: 'object',
                                              raw: '{\n  _id: string\n  authorName: string\n  text: string\n}',
                                              signature: {
                                                properties: [
                                                  {
                                                    key: '_id',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                  {
                                                    key: 'authorName',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                  {
                                                    key: 'text',
                                                    value: {
                                                      name: 'string',
                                                      required: !0,
                                                    },
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                          raw: 'Array<{\n  _id: string\n  authorName: string\n  text: string\n}>',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store the actual comments (rather than just commentIds),\nso ShowTask can display them directly.',
                                      },
                                      {
                                        key: 'customerAssigned',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If you store the "customer assigned" label as text (e.g. "Bobbie Sue").',
                                      },
                                      {
                                        key: 'severity',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Severity label text (e.g. "Critical").',
                                      },
                                      {
                                        key: 'schedulingQueue',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Scheduling Queue text (e.g. "Technologies Unlimited").',
                                      },
                                      {
                                        key: 'status',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'High-level status text (e.g. "Open").',
                                      },
                                      {
                                        key: 'subStatus',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'Sub-status text (e.g. "In Progress").',
                                      },
                                      {
                                        key: 'topicLabels',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store the actual topic strings (e.g. ["Technical Support"]).\nThis can be used in addition to or instead of topicIds.',
                                      },
                                      {
                                        key: 'kbArticles',
                                        value: {
                                          name: 'Array',
                                          elements: [{ name: 'string' }],
                                          raw: 'string[]',
                                          required: !1,
                                        },
                                        description:
                                          'If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\nThis can be used in addition to or instead of articleIds.',
                                      },
                                      {
                                        key: 'teamMember',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'A string representing the assigned team member (e.g. "Matthew Goluba").',
                                      },
                                      {
                                        key: 'nextActionDate',
                                        value: { name: 'string', required: !1 },
                                        description:
                                          'If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST").',
                                      },
                                    ],
                                  },
                                },
                              ],
                              raw: 'Task[]',
                              required: !0,
                            },
                          },
                        ],
                      },
                    },
                  ],
                  raw: 'ColumnData[]',
                },
                description: 'Overflow columns, if any.',
              },
              selectedOverflowColumnId: {
                required: !1,
                tsType: { name: 'string' },
                description: '',
              },
              onChangeSelectedOverflowColumn: {
                required: !1,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(colId: string) => void',
                  signature: {
                    arguments: [{ type: { name: 'string' }, name: 'colId' }],
                    return: { name: 'void' },
                  },
                },
                description: '',
              },
              selectedTask: {
                required: !0,
                tsType: {
                  name: 'union',
                  raw: '{ colIndex: number; taskIndex: number } | null',
                  elements: [
                    {
                      name: 'signature',
                      type: 'object',
                      raw: '{ colIndex: number; taskIndex: number }',
                      signature: {
                        properties: [
                          {
                            key: 'colIndex',
                            value: { name: 'number', required: !0 },
                          },
                          {
                            key: 'taskIndex',
                            value: { name: 'number', required: !0 },
                          },
                        ],
                      },
                    },
                    { name: 'null' },
                  ],
                },
                description: 'Which task is selected?',
              },
              onSelectTask: {
                required: !0,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(colIndex: number, taskIndex: number) => void',
                  signature: {
                    arguments: [
                      { type: { name: 'number' }, name: 'colIndex' },
                      { type: { name: 'number' }, name: 'taskIndex' },
                    ],
                    return: { name: 'void' },
                  },
                },
                description: '',
              },
              onColumnDragStart: {
                required: !0,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(e: React.DragEvent, columnIndex: number) => void',
                  signature: {
                    arguments: [
                      {
                        type: {
                          name: 'ReactDragEvent',
                          raw: 'React.DragEvent',
                        },
                        name: 'e',
                      },
                      { type: { name: 'number' }, name: 'columnIndex' },
                    ],
                    return: { name: 'void' },
                  },
                },
                description: 'Column-level DnD from the parent ProjectBoard',
              },
              onColumnDragOver: {
                required: !0,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(e: React.DragEvent, columnIndex: number) => void',
                  signature: {
                    arguments: [
                      {
                        type: {
                          name: 'ReactDragEvent',
                          raw: 'React.DragEvent',
                        },
                        name: 'e',
                      },
                      { type: { name: 'number' }, name: 'columnIndex' },
                    ],
                    return: { name: 'void' },
                  },
                },
                description: '',
              },
              onColumnDrop: {
                required: !0,
                tsType: {
                  name: 'signature',
                  type: 'function',
                  raw: '(e: React.DragEvent, columnIndex: number) => void',
                  signature: {
                    arguments: [
                      {
                        type: {
                          name: 'ReactDragEvent',
                          raw: 'React.DragEvent',
                        },
                        name: 'e',
                      },
                      { type: { name: 'number' }, name: 'columnIndex' },
                    ],
                    return: { name: 'void' },
                  },
                },
                description: '',
              },
            },
          })
        const components_ProjectBoard = react.memo(ProjectBoard)
        ProjectBoard.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ProjectBoard',
          props: {
            variant: {
              required: !0,
              tsType: {
                name: 'union',
                raw: "'administrator' | 'company' | 'customer'",
                elements: [
                  { name: 'literal', value: "'administrator'" },
                  { name: 'literal', value: "'company'" },
                  { name: 'literal', value: "'customer'" },
                ],
              },
              description: '',
            },
            boardType: {
              required: !0,
              tsType: {
                name: 'union',
                raw: "'severityLevel' | 'status' | 'subStatus' | 'topic'",
                elements: [
                  { name: 'literal', value: "'severityLevel'" },
                  { name: 'literal', value: "'status'" },
                  { name: 'literal', value: "'subStatus'" },
                  { name: 'literal', value: "'topic'" },
                ],
              },
              description: '',
            },
            company: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  _id: string\n  companyName: string\n}',
                signature: {
                  properties: [
                    { key: '_id', value: { name: 'string', required: !0 } },
                    {
                      key: 'companyName',
                      value: { name: 'string', required: !0 },
                    },
                  ],
                },
              },
              description: '',
            },
            columns: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  title: string\n  description: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'title',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'description',
                          value: { name: 'string', required: !0 },
                        },
                      ],
                    },
                  },
                ],
                raw: '{\n  _id: string\n  title: string\n  description: string\n}[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            tasks: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  /** The parent company ID or other domain-specific reference. */\n  companyId?: string\n\n  title: string\n  description: string\n\n  /** If severity is linked to a separate record, store it here. */\n  severityId?: string\n  /** The main status. */\n  statusId?: string\n  /** The sub-status. */\n  substatusId?: string\n  /** The scheduling queue ID. */\n  schedulingQueueId?: string\n  /** Topics array, each referencing a topic ID. */\n  topicIds?: string[]\n  /** Comments array, referencing comment IDs. */\n  commentIds?: string[]\n  /** Employee IDs assigned to the task. */\n  employeeIds?: string[]\n  /** Knowledgebase article IDs. */\n  articleIds?: string[]\n  /** The "customer" ID if you have one. */\n  customerId?: string\n\n  /** Timestamps. */\n  createdAt?: Date\n  closedAt?: Date\n  updatedAt?: Date\n  createdBy?: string\n\n  /**\n   * If you want to store the actual comments (rather than just commentIds),\n   * so ShowTask can display them directly.\n   */\n  comments?: Array<{\n    _id: string\n    authorName: string\n    text: string\n  }>\n\n  /** If you store the "customer assigned" label as text (e.g. "Bobbie Sue"). */\n  customerAssigned?: string\n\n  /** Severity label text (e.g. "Critical"). */\n  severity?: string\n\n  /** Scheduling Queue text (e.g. "Technologies Unlimited"). */\n  schedulingQueue?: string\n\n  /** High-level status text (e.g. "Open"). */\n  status?: string\n\n  /** Sub-status text (e.g. "In Progress"). */\n  subStatus?: string\n\n  /**\n   * If you want to store the actual topic strings (e.g. ["Technical Support"]).\n   * This can be used in addition to or instead of topicIds.\n   */\n  topicLabels?: string[]\n\n  /**\n   * If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\n   * This can be used in addition to or instead of articleIds.\n   */\n  kbArticles?: string[]\n\n  /** A string representing the assigned team member (e.g. "Matthew Goluba"). */\n  teamMember?: string\n\n  /** If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST"). */\n  nextActionDate?: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'companyId',
                          value: { name: 'string', required: !1 },
                          description:
                            'The parent company ID or other domain-specific reference.',
                        },
                        {
                          key: 'title',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'description',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'severityId',
                          value: { name: 'string', required: !1 },
                          description:
                            'If severity is linked to a separate record, store it here.',
                        },
                        {
                          key: 'statusId',
                          value: { name: 'string', required: !1 },
                          description: 'The main status.',
                        },
                        {
                          key: 'substatusId',
                          value: { name: 'string', required: !1 },
                          description: 'The sub-status.',
                        },
                        {
                          key: 'schedulingQueueId',
                          value: { name: 'string', required: !1 },
                          description: 'The scheduling queue ID.',
                        },
                        {
                          key: 'topicIds',
                          value: {
                            name: 'Array',
                            elements: [{ name: 'string' }],
                            raw: 'string[]',
                            required: !1,
                          },
                          description:
                            'Topics array, each referencing a topic ID.',
                        },
                        {
                          key: 'commentIds',
                          value: {
                            name: 'Array',
                            elements: [{ name: 'string' }],
                            raw: 'string[]',
                            required: !1,
                          },
                          description:
                            'Comments array, referencing comment IDs.',
                        },
                        {
                          key: 'employeeIds',
                          value: {
                            name: 'Array',
                            elements: [{ name: 'string' }],
                            raw: 'string[]',
                            required: !1,
                          },
                          description: 'Employee IDs assigned to the task.',
                        },
                        {
                          key: 'articleIds',
                          value: {
                            name: 'Array',
                            elements: [{ name: 'string' }],
                            raw: 'string[]',
                            required: !1,
                          },
                          description: 'Knowledgebase article IDs.',
                        },
                        {
                          key: 'customerId',
                          value: { name: 'string', required: !1 },
                          description: 'The "customer" ID if you have one.',
                        },
                        {
                          key: 'createdAt',
                          value: { name: 'Date', required: !1 },
                          description: 'Timestamps.',
                        },
                        {
                          key: 'closedAt',
                          value: { name: 'Date', required: !1 },
                        },
                        {
                          key: 'updatedAt',
                          value: { name: 'Date', required: !1 },
                        },
                        {
                          key: 'createdBy',
                          value: { name: 'string', required: !1 },
                        },
                        {
                          key: 'comments',
                          value: {
                            name: 'Array',
                            elements: [
                              {
                                name: 'signature',
                                type: 'object',
                                raw: '{\n  _id: string\n  authorName: string\n  text: string\n}',
                                signature: {
                                  properties: [
                                    {
                                      key: '_id',
                                      value: { name: 'string', required: !0 },
                                    },
                                    {
                                      key: 'authorName',
                                      value: { name: 'string', required: !0 },
                                    },
                                    {
                                      key: 'text',
                                      value: { name: 'string', required: !0 },
                                    },
                                  ],
                                },
                              },
                            ],
                            raw: 'Array<{\n  _id: string\n  authorName: string\n  text: string\n}>',
                            required: !1,
                          },
                          description:
                            'If you want to store the actual comments (rather than just commentIds),\nso ShowTask can display them directly.',
                        },
                        {
                          key: 'customerAssigned',
                          value: { name: 'string', required: !1 },
                          description:
                            'If you store the "customer assigned" label as text (e.g. "Bobbie Sue").',
                        },
                        {
                          key: 'severity',
                          value: { name: 'string', required: !1 },
                          description: 'Severity label text (e.g. "Critical").',
                        },
                        {
                          key: 'schedulingQueue',
                          value: { name: 'string', required: !1 },
                          description:
                            'Scheduling Queue text (e.g. "Technologies Unlimited").',
                        },
                        {
                          key: 'status',
                          value: { name: 'string', required: !1 },
                          description: 'High-level status text (e.g. "Open").',
                        },
                        {
                          key: 'subStatus',
                          value: { name: 'string', required: !1 },
                          description: 'Sub-status text (e.g. "In Progress").',
                        },
                        {
                          key: 'topicLabels',
                          value: {
                            name: 'Array',
                            elements: [{ name: 'string' }],
                            raw: 'string[]',
                            required: !1,
                          },
                          description:
                            'If you want to store the actual topic strings (e.g. ["Technical Support"]).\nThis can be used in addition to or instead of topicIds.',
                        },
                        {
                          key: 'kbArticles',
                          value: {
                            name: 'Array',
                            elements: [{ name: 'string' }],
                            raw: 'string[]',
                            required: !1,
                          },
                          description:
                            'If you want to store knowledgebase articles as raw text (e.g. ["How to Troubleshoot Stuff"]).\nThis can be used in addition to or instead of articleIds.',
                        },
                        {
                          key: 'teamMember',
                          value: { name: 'string', required: !1 },
                          description:
                            'A string representing the assigned team member (e.g. "Matthew Goluba").',
                        },
                        {
                          key: 'nextActionDate',
                          value: { name: 'string', required: !1 },
                          description:
                            'If you store the next action date/time as a string (e.g. "09/15/2023 - 8:30AM CST").',
                        },
                      ],
                    },
                  },
                ],
                raw: 'Task[]',
              },
              description: '',
              defaultValue: { value: '[]', computed: !1 },
            },
            rawStatuses: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  status: string\n  description?: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'status',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'description',
                          value: { name: 'string', required: !1 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawStatus[]',
              },
              description: '',
            },
            rawSubStatuses: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  subStatus: string\n  description?: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'subStatus',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'description',
                          value: { name: 'string', required: !1 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawSubStatus[]',
              },
              description: '',
            },
            rawTopics: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  topic: string\n  description?: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'topic',
                          value: { name: 'string', required: !0 },
                        },
                        {
                          key: 'description',
                          value: { name: 'string', required: !1 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawTopic[]',
              },
              description: '',
            },
            rawQueues: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  queueName: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'queueName',
                          value: { name: 'string', required: !0 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawQueue[]',
              },
              description: '',
            },
            rawArticles: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  articleTitle: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'articleTitle',
                          value: { name: 'string', required: !0 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawArticle[]',
              },
              description: '',
            },
            rawCustomers: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  firstName?: string\n  lastName?: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'firstName',
                          value: { name: 'string', required: !1 },
                        },
                        {
                          key: 'lastName',
                          value: { name: 'string', required: !1 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawCustomer[]',
              },
              description: '',
            },
            rawEmployees: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  firstName?: string\n  lastName?: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'firstName',
                          value: { name: 'string', required: !1 },
                        },
                        {
                          key: 'lastName',
                          value: { name: 'string', required: !1 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawEmployee[]',
              },
              description: '',
            },
            rawSeverityLevels: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  severityLevel: number\n  description?: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'severityLevel',
                          value: { name: 'number', required: !0 },
                        },
                        {
                          key: 'description',
                          value: { name: 'string', required: !1 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'RawSeverityLevel[]',
              },
              description: '',
            },
            companyAccounts: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [
                  {
                    name: 'signature',
                    type: 'object',
                    raw: '{\n  _id: string\n  companyName: string\n}',
                    signature: {
                      properties: [
                        { key: '_id', value: { name: 'string', required: !0 } },
                        {
                          key: 'companyName',
                          value: { name: 'string', required: !0 },
                        },
                      ],
                    },
                  },
                ],
                raw: 'CompanyInfo[]',
              },
              description:
                'If your app wants to pass "companyAccounts" or "administrators" data\nto the ManageTask component, you can define them here.\n\nExample: companyAccounts: CompanyInfo[],\nadministrators: RawAdministrator[] (or Administrator[]).',
            },
            administrators: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'RawAdministrator[] | Administrator[]',
                elements: [
                  {
                    name: 'Array',
                    elements: [
                      {
                        name: 'signature',
                        type: 'object',
                        raw: '{\n  _id: string\n  firstName?: string\n  lastName?: string\n  /** Add a `fullName` field if your code references it. */\n  fullName?: string\n}',
                        signature: {
                          properties: [
                            {
                              key: '_id',
                              value: { name: 'string', required: !0 },
                            },
                            {
                              key: 'firstName',
                              value: { name: 'string', required: !1 },
                            },
                            {
                              key: 'lastName',
                              value: { name: 'string', required: !1 },
                            },
                            {
                              key: 'fullName',
                              value: { name: 'string', required: !1 },
                              description:
                                'Add a `fullName` field if your code references it.',
                            },
                          ],
                        },
                      },
                    ],
                    raw: 'RawAdministrator[]',
                  },
                  {
                    name: 'Array',
                    elements: [{ name: 'Administrator' }],
                    raw: 'Administrator[]',
                  },
                ],
              },
              description: '',
            },
            showTaskOpen: {
              required: !1,
              tsType: { name: 'string' },
              description:
                'If your app wants to control the "ShowTask" and "ManageTask" modals externally,\nstore them here as string states representing the task ID or \'-1\'.',
            },
            onEdit: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(args: { _id: string }) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'signature',
                        type: 'object',
                        raw: '{ _id: string }',
                        signature: {
                          properties: [
                            {
                              key: '_id',
                              value: { name: 'string', required: !0 },
                            },
                          ],
                        },
                      },
                      name: 'args',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description:
                'If ShowTask supports "Edit," "Delete," or "Duplicate," pass them here.',
            },
            onDelete: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(args: { _id: string }) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'signature',
                        type: 'object',
                        raw: '{ _id: string }',
                        signature: {
                          properties: [
                            {
                              key: '_id',
                              value: { name: 'string', required: !0 },
                            },
                          ],
                        },
                      },
                      name: 'args',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onDuplicate: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(args: { _id: string }) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'signature',
                        type: 'object',
                        raw: '{ _id: string }',
                        signature: {
                          properties: [
                            {
                              key: '_id',
                              value: { name: 'string', required: !0 },
                            },
                          ],
                        },
                      },
                      name: 'args',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onEditComment: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(commentId: string, newText: string, taskId: string) => void',
                signature: {
                  arguments: [
                    { type: { name: 'string' }, name: 'commentId' },
                    { type: { name: 'string' }, name: 'newText' },
                    { type: { name: 'string' }, name: 'taskId' },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            onCloseTask: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(args: { _id: string }) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'signature',
                        type: 'object',
                        raw: '{ _id: string }',
                        signature: {
                          properties: [
                            {
                              key: '_id',
                              value: { name: 'string', required: !0 },
                            },
                          ],
                        },
                      },
                      name: 'args',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            currentUserName: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            onComment: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(commentText: string, _id: string) => void',
                signature: {
                  arguments: [
                    { type: { name: 'string' }, name: 'commentText' },
                    { type: { name: 'string' }, name: '_id' },
                  ],
                  return: { name: 'void' },
                },
              },
              description:
                'If ShowTask calls onComment with both commentText and _id,\ndefine the signature here. You can also do (text: string) => void if that’s your design.',
            },
          },
        }
        var console = __webpack_require__(
          './node_modules/console-browserify/index.js'
        )
        const projectboard_stories = {
            title: 'Components/ProjectBoard',
            component: components_ProjectBoard,
            parameters: { a11y: { disable: !1 } },
          },
          BasicStatusBoard = {
            name: 'Basic Board (Status-based)',
            args: {
              variant: 'company',
              boardType: 'status',
              company: { _id: 'co-123', companyName: 'Acme Inc.' },
              columns: [
                {
                  _id: 'stat-1',
                  title: 'Open',
                  description: 'Open tasks or tickets',
                },
                { _id: 'stat-2', title: 'Closed', description: 'Closed tasks' },
              ],
              tasks: [
                {
                  _id: 'task-101',
                  title: 'Fix login bug',
                  description: 'Users cannot log in under certain conditions.',
                  severityId: 'sev-2',
                  statusId: 'stat-1',
                  substatusId: 'sub-1',
                  topicIds: ['topic-1'],
                  createdAt: new Date(),
                },
                {
                  _id: 'task-102',
                  title: 'Add new dashboard feature',
                  description: 'Implement a new chart in the dashboard.',
                  severityId: 'sev-1',
                  statusId: 'stat-1',
                  substatusId: 'sub-2',
                  topicIds: ['topic-2'],
                },
                {
                  _id: 'task-103',
                  title: 'Update docs',
                  description:
                    'Improve the documentation for deployment steps.',
                  severityId: 'sev-1',
                  statusId: 'stat-2',
                  substatusId: 'sub-2',
                  topicIds: ['topic-1', 'topic-2'],
                },
              ],
              rawStatuses: [
                { _id: 'stat-1', status: 'Open', description: 'Open tasks' },
                {
                  _id: 'stat-2',
                  status: 'Closed',
                  description: 'Closed tasks',
                },
              ],
              rawSubStatuses: [
                {
                  _id: 'sub-1',
                  subStatus: 'Pending Info',
                  description: 'Waiting on info',
                },
                {
                  _id: 'sub-2',
                  subStatus: 'In Progress',
                  description: 'Actively working',
                },
              ],
              rawTopics: [
                { _id: 'topic-1', topic: 'Frontend' },
                { _id: 'topic-2', topic: 'Backend' },
              ],
              rawQueues: [
                { _id: 'queue-1', queueName: 'Tier 1 Support' },
                { _id: 'queue-2', queueName: 'Tier 2 Support' },
              ],
              rawArticles: [
                { _id: 'article-1', articleTitle: 'Setup Guide' },
                { _id: 'article-2', articleTitle: 'Troubleshooting FAQ' },
              ],
              rawCustomers: [
                { _id: 'cust-1', firstName: 'Alice', lastName: 'Wonder' },
                { _id: 'cust-2', firstName: 'Bob', lastName: 'Builder' },
              ],
              rawEmployees: [
                { _id: 'emp-1', firstName: 'John', lastName: 'Doe' },
                { _id: 'emp-2', firstName: 'Jane', lastName: 'Smith' },
              ],
              rawSeverityLevels: [
                { _id: 'sev-1', severityLevel: 1, description: 'Low severity' },
                {
                  _id: 'sev-2',
                  severityLevel: 5,
                  description: 'High severity',
                },
              ],
              onComment: (text, taskId) =>
                console.log('[BasicStatusBoard] onComment =>', {
                  text,
                  taskId,
                }),
              onEdit: data => console.log('[BasicStatusBoard] onEdit =>', data),
              onDelete: data =>
                console.log('[BasicStatusBoard] onDelete =>', data),
              onDuplicate: data =>
                console.log('[BasicStatusBoard] onDuplicate =>', data),
              onCloseTask: data =>
                console.log('[BasicStatusBoard] onCloseTask =>', data),
              onEditComment: (commentId, newText, taskId) =>
                console.log('[BasicStatusBoard] onEditComment =>', {
                  commentId,
                  newText,
                  taskId,
                }),
            },
            play: async ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              ;(0, dist.E3)(canvas.getByText('Open')).toBeInTheDocument(),
                (0, dist.E3)(canvas.getByText('Closed')).toBeInTheDocument(),
                (0, dist.E3)(
                  canvas.getByText('Fix login bug')
                ).toBeInTheDocument(),
                await dist.Q4.click(canvas.getByText('Fix login bug'))
            },
          },
          SeverityBoard = {
            name: 'Severity Board',
            args: {
              variant: 'administrator',
              boardType: 'severityLevel',
              company: { _id: 'co-123', companyName: 'Acme Inc.' },
              columns: [
                {
                  _id: 'sev-1',
                  title: 'Low',
                  description: 'Low severity tasks',
                },
                {
                  _id: 'sev-2',
                  title: 'High',
                  description: 'High severity tasks',
                },
              ],
              tasks: [
                {
                  _id: 'task-101',
                  title: 'Fix login bug',
                  description: 'Users cannot log in under certain conditions.',
                  severityId: 'sev-2',
                  statusId: 'stat-1',
                },
                {
                  _id: 'task-102',
                  title: 'Add new dashboard feature',
                  description: 'Implement a new chart in the dashboard.',
                  severityId: 'sev-1',
                  statusId: 'stat-1',
                },
                {
                  _id: 'task-103',
                  title: 'Update docs',
                  description:
                    'Improve the documentation for deployment steps.',
                  severityId: 'sev-1',
                  statusId: 'stat-2',
                },
              ],
              rawStatuses: [
                { _id: 'stat-1', status: 'Open', description: 'Open tasks' },
                {
                  _id: 'stat-2',
                  status: 'Closed',
                  description: 'Closed tasks',
                },
              ],
              rawSubStatuses: [
                {
                  _id: 'sub-1',
                  subStatus: 'Pending Info',
                  description: 'Waiting on info',
                },
                {
                  _id: 'sub-2',
                  subStatus: 'In Progress',
                  description: 'Actively working',
                },
              ],
              rawTopics: [
                { _id: 'topic-1', topic: 'Frontend' },
                { _id: 'topic-2', topic: 'Backend' },
              ],
              rawQueues: [
                { _id: 'queue-1', queueName: 'Tier 1 Support' },
                { _id: 'queue-2', queueName: 'Tier 2 Support' },
              ],
              rawArticles: [
                { _id: 'article-1', articleTitle: 'Setup Guide' },
                { _id: 'article-2', articleTitle: 'Troubleshooting FAQ' },
              ],
              rawCustomers: [
                { _id: 'cust-1', firstName: 'Alice', lastName: 'Wonder' },
                { _id: 'cust-2', firstName: 'Bob', lastName: 'Builder' },
              ],
              rawEmployees: [
                { _id: 'emp-1', firstName: 'John', lastName: 'Doe' },
                { _id: 'emp-2', firstName: 'Jane', lastName: 'Smith' },
              ],
              rawSeverityLevels: [
                { _id: 'sev-1', severityLevel: 1, description: 'Low severity' },
                {
                  _id: 'sev-2',
                  severityLevel: 5,
                  description: 'High severity',
                },
              ],
              onComment: (text, taskId) =>
                console.log('[SeverityBoard] onComment =>', { text, taskId }),
              onEdit: data => console.log('[SeverityBoard] onEdit =>', data),
              onDelete: data =>
                console.log('[SeverityBoard] onDelete =>', data),
              onDuplicate: data =>
                console.log('[SeverityBoard] onDuplicate =>', data),
              onCloseTask: data =>
                console.log('[SeverityBoard] onCloseTask =>', data),
              onEditComment: (commentId, newText, taskId) =>
                console.log('[SeverityBoard] onEditComment =>', {
                  commentId,
                  newText,
                  taskId,
                }),
            },
            play: ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              ;(0, dist.E3)(canvas.getByText('Low')).toBeInTheDocument(),
                (0, dist.E3)(canvas.getByText('High')).toBeInTheDocument()
            },
          },
          SubStatusBoard = {
            name: 'SubStatus Board',
            args: {
              variant: 'customer',
              boardType: 'subStatus',
              company: { _id: 'co-123', companyName: 'Acme Inc.' },
              columns: [
                {
                  _id: 'sub-1',
                  title: 'Pending Info',
                  description: 'Waiting for info',
                },
                {
                  _id: 'sub-2',
                  title: 'In Progress',
                  description: 'Actively in progress',
                },
              ],
              tasks: [
                {
                  _id: 'task-101',
                  title: 'Fix login bug',
                  description: 'Users cannot log in under certain conditions.',
                  severityId: 'sev-2',
                  substatusId: 'sub-1',
                },
                {
                  _id: 'task-102',
                  title: 'Add new dashboard feature',
                  description: 'Implement a new chart in the dashboard.',
                  severityId: 'sev-1',
                  substatusId: 'sub-2',
                },
              ],
              rawStatuses: [
                { _id: 'stat-1', status: 'Open' },
                { _id: 'stat-2', status: 'Closed' },
              ],
              rawSubStatuses: [
                {
                  _id: 'sub-1',
                  subStatus: 'Pending Info',
                  description: 'Waiting on info',
                },
                {
                  _id: 'sub-2',
                  subStatus: 'In Progress',
                  description: 'Actively working',
                },
              ],
              rawTopics: [
                { _id: 'topic-1', topic: 'Frontend' },
                { _id: 'topic-2', topic: 'Backend' },
              ],
              rawQueues: [],
              rawArticles: [],
              rawCustomers: [],
              rawEmployees: [],
              rawSeverityLevels: [],
              onComment: (text, taskId) =>
                console.log('[SubStatusBoard] onComment =>', { text, taskId }),
              onEdit: data => console.log('[SubStatusBoard] onEdit =>', data),
              onDelete: data =>
                console.log('[SubStatusBoard] onDelete =>', data),
              onDuplicate: data =>
                console.log('[SubStatusBoard] onDuplicate =>', data),
              onCloseTask: data =>
                console.log('[SubStatusBoard] onCloseTask =>', data),
              onEditComment: (commentId, newText, taskId) =>
                console.log('[SubStatusBoard] onEditComment =>', {
                  commentId,
                  newText,
                  taskId,
                }),
            },
          },
          TopicBoard = {
            name: 'Topic Board',
            args: {
              variant: 'company',
              boardType: 'topic',
              company: { _id: 'co-123', companyName: 'Acme Inc.' },
              columns: [
                { _id: 'topic-1', title: 'Frontend', description: 'UI tasks' },
                {
                  _id: 'topic-2',
                  title: 'Backend',
                  description: 'Server tasks',
                },
              ],
              tasks: [
                {
                  _id: 'task-101',
                  title: 'Fix login bug',
                  description: 'Users cannot log in under certain conditions.',
                  topicIds: ['topic-1'],
                },
                {
                  _id: 'task-102',
                  title: 'Add new dashboard feature',
                  description: 'Implement a new chart in the dashboard.',
                  topicIds: ['topic-2'],
                },
              ],
              rawStatuses: [],
              rawSubStatuses: [],
              rawTopics: [
                { _id: 'topic-1', topic: 'Frontend' },
                { _id: 'topic-2', topic: 'Backend' },
              ],
              rawQueues: [],
              rawArticles: [],
              rawCustomers: [],
              rawEmployees: [],
              rawSeverityLevels: [],
              onComment: (text, taskId) =>
                console.log('[TopicBoard] onComment =>', { text, taskId }),
              onEdit: data => console.log('[TopicBoard] onEdit =>', data),
              onDelete: data => console.log('[TopicBoard] onDelete =>', data),
              onDuplicate: data =>
                console.log('[TopicBoard] onDuplicate =>', data),
              onCloseTask: data =>
                console.log('[TopicBoard] onCloseTask =>', data),
              onEditComment: (commentId, newText, taskId) =>
                console.log('[TopicBoard] onEditComment =>', {
                  commentId,
                  newText,
                  taskId,
                }),
            },
          }
        function makeAddTaskStory(variant, storyName) {
          return {
            name: storyName,
            render: () => {
              const props = {
                open: !0,
                onClose: () => console.log('AddTask onClose'),
                onSubmit: newTask => {
                  console.log(`[AddTask ${variant}] onSubmit => `, newTask)
                },
                variant,
                statuses: [
                  { _id: 'stat-1', status: 'Open', description: 'Open tasks' },
                  {
                    _id: 'stat-2',
                    status: 'Closed',
                    description: 'Closed tasks',
                  },
                ],
                subStatuses: [
                  {
                    _id: 'sub-1',
                    subStatus: 'Pending Info',
                    description: 'Waiting on info',
                  },
                  {
                    _id: 'sub-2',
                    subStatus: 'In Progress',
                    description: 'Actively working',
                  },
                ],
                topics: [
                  { _id: 'topic-1', topic: 'Frontend' },
                  { _id: 'topic-2', topic: 'Backend' },
                ],
                schedulingQueues: [
                  { _id: 'queue-1', queueName: 'Tier 1 Support' },
                  { _id: 'queue-2', queueName: 'Tier 2 Support' },
                ],
                knowledgebaseArticles: [
                  { _id: 'article-1', articleTitle: 'Setup Guide' },
                  { _id: 'article-2', articleTitle: 'Troubleshooting FAQ' },
                ],
                customers: [
                  { _id: 'cust-1', firstName: 'Alice', lastName: 'Wonder' },
                  { _id: 'cust-2', firstName: 'Bob', lastName: 'Builder' },
                ],
                employees: [
                  { _id: 'emp-1', firstName: 'John', lastName: 'Doe' },
                  { _id: 'emp-2', firstName: 'Jane', lastName: 'Smith' },
                ],
                severityLevels: [
                  {
                    _id: 'sev-1',
                    severityLevel: 1,
                    description: 'Low severity',
                  },
                  {
                    _id: 'sev-2',
                    severityLevel: 5,
                    description: 'High severity',
                  },
                ],
              }
              return (0, jsx_runtime.jsx)(client, { ...props })
            },
            play: async ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement),
                createBtn = canvas.getByRole('button', { name: /Create Task/i })
              ;(0, dist.E3)(createBtn).toBeInTheDocument()
              const titleField = canvas.getByLabelText(/Task Title/i)
              await dist.Q4.type(titleField, `My ${variant} Task`),
                (0, dist.E3)(titleField).toHaveValue(`My ${variant} Task`)
            },
          }
        }
        const AddTaskPopup_Customer = makeAddTaskStory(
            'customer',
            'AddTask Popup - Customer Variant'
          ),
          AddTaskPopup_Company = makeAddTaskStory(
            'company',
            'AddTask Popup - Company Variant'
          ),
          AddTaskPopup_Administrator = makeAddTaskStory(
            'administrator',
            'AddTask Popup - Administrator Variant'
          ),
          ShowTaskPopup = {
            name: 'ShowTask Popup (Standalone)',
            render: () => {
              const props = {
                open: !0,
                onClose: () => console.log('ShowTask onClose'),
                taskTitle: 'Sample Task Title',
                createdBy: 'John Doe',
                description: 'Lorem ipsum dolor sit amet...',
                customerAssigned: 'Bobbie Sue',
                customerOptions: ['Alice', 'Bobbie Sue', 'Sally Customer'],
                severityOptions: ['Low', 'Medium', 'High'],
                schedulingQueueOptions: ['Tier 1 Support', 'Tier 2 Support'],
                statusOptions: ['Open', 'Pending', 'Closed'],
                subStatusOptions: [
                  'Pending Info',
                  'In Progress',
                  'Waiting on Customer',
                ],
                topicOptions: ['Frontend', 'Backend', 'DevOps'],
                knowledgebaseArticleOptions: [
                  'Setup Guide',
                  'Troubleshooting FAQ',
                ],
                teamMemberOptions: ['Jane Smith', 'John Doe', 'Alice Dev'],
                comments: [
                  {
                    _id: 'comm-1',
                    authorName: 'Alice',
                    text: 'First comment here!',
                    createdAt: '2023-08-15T10:00:00Z',
                    updatedAt: '2023-08-15T10:05:00Z',
                    lastEditedBy: 'Alice',
                    editHistory: [
                      {
                        _id: 'rev-orig-comm-1',
                        editedBy: 'Alice',
                        editedAt: '2023-08-15T10:00:00Z',
                        text: 'First comment here!',
                        isOriginal: !0,
                      },
                      {
                        _id: 'rev-2-comm-1',
                        editedBy: 'Alice',
                        editedAt: '2023-08-15T10:05:00Z',
                        text: 'First comment, slightly edited by Alice!',
                        isOriginal: !1,
                      },
                    ],
                  },
                  {
                    _id: 'comm-2',
                    authorName: 'Bob',
                    text: 'Another comment with multiple edits!',
                    createdAt: '2023-08-15T10:10:00Z',
                    updatedAt: '2023-08-15T10:25:00Z',
                    lastEditedBy: 'Bob',
                    editHistory: [
                      {
                        _id: 'rev-orig-comm-2',
                        editedBy: 'Bob',
                        editedAt: '2023-08-15T10:10:00Z',
                        text: 'Another comment with multiple edits!',
                        isOriginal: !0,
                      },
                      {
                        _id: 'rev-2-comm-2',
                        editedBy: 'Bob',
                        editedAt: '2023-08-15T10:20:00Z',
                        text: 'Bob changed it once!',
                        isOriginal: !1,
                      },
                      {
                        _id: 'rev-3-comm-2',
                        editedBy: 'Bob',
                        editedAt: '2023-08-15T10:25:00Z',
                        text: 'And changed it a second time!',
                        isOriginal: !1,
                      },
                    ],
                  },
                ],
                status: 'Open',
                subStatus: 'Pending Info',
                severity: 'High',
                schedulingQueue: 'Tier 1 Support',
                topics: ['Frontend', 'Backend'],
                knowledgebaseArticles: ['Setup Guide', 'Troubleshooting FAQ'],
                teamMemberAssigned: 'Jane Smith',
                nextActionDate: '09/15/2023 - 8:30AM CST',
                currentUserName: 'Bob',
                onComment: text => console.log('ShowTask onComment =>', text),
                onCloseTask: () => console.log('ShowTask onCloseTask'),
                onEdit: data => console.log('ShowTask onEdit =>', data),
                onDelete: () => console.log('ShowTask onDelete'),
                onDuplicate: () => console.log('ShowTask onDuplicate'),
                onEditComment: (commentId, newText) => {
                  console.log('ShowTask onEditComment =>', {
                    commentId,
                    newText,
                    taskId: 'storybookTaskId',
                  })
                },
              }
              return (0, jsx_runtime.jsx)(ShowTask_client, { ...props })
            },
            play: async ({ canvasElement }) => {
              const canvas = (0, dist.ux)(canvasElement)
              ;(0, dist.E3)(
                canvas.getByText('Sample Task Title')
              ).toBeInTheDocument(),
                (0, dist.E3)(
                  canvas.getByText('First comment here!')
                ).toBeInTheDocument(),
                (0, dist.E3)(
                  canvas.getByText('Another comment with multiple edits!')
                ).toBeInTheDocument()
              const commentBtn = canvas.getByRole('button', {
                name: /Comment/i,
              })
              await dist.Q4.click(commentBtn)
            },
          },
          __namedExportsOrder = [
            'BasicStatusBoard',
            'SeverityBoard',
            'SubStatusBoard',
            'TopicBoard',
            'AddTaskPopup_Customer',
            'AddTaskPopup_Company',
            'AddTaskPopup_Administrator',
            'ShowTaskPopup',
          ]
        ;(BasicStatusBoard.parameters = {
          ...BasicStatusBoard.parameters,
          docs: {
            ...BasicStatusBoard.parameters?.docs,
            source: {
              originalSource:
                "{\n  name: 'Basic Board (Status-based)',\n  args: {\n    variant: 'company',\n    boardType: 'status',\n    company: {\n      _id: 'co-123',\n      companyName: 'Acme Inc.'\n    },\n    columns: [{\n      _id: 'stat-1',\n      title: 'Open',\n      description: 'Open tasks or tickets'\n    }, {\n      _id: 'stat-2',\n      title: 'Closed',\n      description: 'Closed tasks'\n    }],\n    tasks: [{\n      _id: 'task-101',\n      title: 'Fix login bug',\n      description: 'Users cannot log in under certain conditions.',\n      severityId: 'sev-2',\n      statusId: 'stat-1',\n      substatusId: 'sub-1',\n      topicIds: ['topic-1'],\n      createdAt: new Date()\n    }, {\n      _id: 'task-102',\n      title: 'Add new dashboard feature',\n      description: 'Implement a new chart in the dashboard.',\n      severityId: 'sev-1',\n      statusId: 'stat-1',\n      substatusId: 'sub-2',\n      topicIds: ['topic-2']\n    }, {\n      _id: 'task-103',\n      title: 'Update docs',\n      description: 'Improve the documentation for deployment steps.',\n      severityId: 'sev-1',\n      statusId: 'stat-2',\n      substatusId: 'sub-2',\n      topicIds: ['topic-1', 'topic-2']\n    }],\n    rawStatuses: [{\n      _id: 'stat-1',\n      status: 'Open',\n      description: 'Open tasks'\n    }, {\n      _id: 'stat-2',\n      status: 'Closed',\n      description: 'Closed tasks'\n    }],\n    rawSubStatuses: [{\n      _id: 'sub-1',\n      subStatus: 'Pending Info',\n      description: 'Waiting on info'\n    }, {\n      _id: 'sub-2',\n      subStatus: 'In Progress',\n      description: 'Actively working'\n    }],\n    rawTopics: [{\n      _id: 'topic-1',\n      topic: 'Frontend'\n    }, {\n      _id: 'topic-2',\n      topic: 'Backend'\n    }],\n    rawQueues: [{\n      _id: 'queue-1',\n      queueName: 'Tier 1 Support'\n    }, {\n      _id: 'queue-2',\n      queueName: 'Tier 2 Support'\n    }],\n    rawArticles: [{\n      _id: 'article-1',\n      articleTitle: 'Setup Guide'\n    }, {\n      _id: 'article-2',\n      articleTitle: 'Troubleshooting FAQ'\n    }],\n    rawCustomers: [{\n      _id: 'cust-1',\n      firstName: 'Alice',\n      lastName: 'Wonder'\n    }, {\n      _id: 'cust-2',\n      firstName: 'Bob',\n      lastName: 'Builder'\n    }],\n    rawEmployees: [{\n      _id: 'emp-1',\n      firstName: 'John',\n      lastName: 'Doe'\n    }, {\n      _id: 'emp-2',\n      firstName: 'Jane',\n      lastName: 'Smith'\n    }],\n    rawSeverityLevels: [{\n      _id: 'sev-1',\n      severityLevel: 1,\n      description: 'Low severity'\n    }, {\n      _id: 'sev-2',\n      severityLevel: 5,\n      description: 'High severity'\n    }],\n    // Provide callbacks:\n    onComment: (text, taskId) => console.log('[BasicStatusBoard] onComment =>', {\n      text,\n      taskId\n    }),\n    onEdit: data => console.log('[BasicStatusBoard] onEdit =>', data),\n    onDelete: data => console.log('[BasicStatusBoard] onDelete =>', data),\n    onDuplicate: data => console.log('[BasicStatusBoard] onDuplicate =>', data),\n    onCloseTask: data => console.log('[BasicStatusBoard] onCloseTask =>', data),\n    onEditComment: (commentId, newText, taskId) => console.log('[BasicStatusBoard] onEditComment =>', {\n      commentId,\n      newText,\n      taskId\n    })\n  } as ProjectBoardProps,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Check for columns\n    expect(canvas.getByText('Open')).toBeInTheDocument();\n    expect(canvas.getByText('Closed')).toBeInTheDocument();\n\n    // Check for sample tasks\n    expect(canvas.getByText('Fix login bug')).toBeInTheDocument();\n\n    // Click one to open (Show Task) in the preview\n    await userEvent.click(canvas.getByText('Fix login bug'));\n  }\n}",
              ...BasicStatusBoard.parameters?.docs?.source,
            },
            description: {
              story:
                'Example #1: Status-based board\r\nWe provide real data (no placeholders).',
              ...BasicStatusBoard.parameters?.docs?.description,
            },
          },
        }),
          (SeverityBoard.parameters = {
            ...SeverityBoard.parameters,
            docs: {
              ...SeverityBoard.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'Severity Board',\n  args: {\n    variant: 'administrator',\n    boardType: 'severityLevel',\n    company: {\n      _id: 'co-123',\n      companyName: 'Acme Inc.'\n    },\n    columns: [{\n      _id: 'sev-1',\n      title: 'Low',\n      description: 'Low severity tasks'\n    }, {\n      _id: 'sev-2',\n      title: 'High',\n      description: 'High severity tasks'\n    }],\n    tasks: [{\n      _id: 'task-101',\n      title: 'Fix login bug',\n      description: 'Users cannot log in under certain conditions.',\n      severityId: 'sev-2',\n      statusId: 'stat-1'\n    }, {\n      _id: 'task-102',\n      title: 'Add new dashboard feature',\n      description: 'Implement a new chart in the dashboard.',\n      severityId: 'sev-1',\n      statusId: 'stat-1'\n    }, {\n      _id: 'task-103',\n      title: 'Update docs',\n      description: 'Improve the documentation for deployment steps.',\n      severityId: 'sev-1',\n      statusId: 'stat-2'\n    }],\n    rawStatuses: [{\n      _id: 'stat-1',\n      status: 'Open',\n      description: 'Open tasks'\n    }, {\n      _id: 'stat-2',\n      status: 'Closed',\n      description: 'Closed tasks'\n    }],\n    rawSubStatuses: [{\n      _id: 'sub-1',\n      subStatus: 'Pending Info',\n      description: 'Waiting on info'\n    }, {\n      _id: 'sub-2',\n      subStatus: 'In Progress',\n      description: 'Actively working'\n    }],\n    rawTopics: [{\n      _id: 'topic-1',\n      topic: 'Frontend'\n    }, {\n      _id: 'topic-2',\n      topic: 'Backend'\n    }],\n    rawQueues: [{\n      _id: 'queue-1',\n      queueName: 'Tier 1 Support'\n    }, {\n      _id: 'queue-2',\n      queueName: 'Tier 2 Support'\n    }],\n    rawArticles: [{\n      _id: 'article-1',\n      articleTitle: 'Setup Guide'\n    }, {\n      _id: 'article-2',\n      articleTitle: 'Troubleshooting FAQ'\n    }],\n    rawCustomers: [{\n      _id: 'cust-1',\n      firstName: 'Alice',\n      lastName: 'Wonder'\n    }, {\n      _id: 'cust-2',\n      firstName: 'Bob',\n      lastName: 'Builder'\n    }],\n    rawEmployees: [{\n      _id: 'emp-1',\n      firstName: 'John',\n      lastName: 'Doe'\n    }, {\n      _id: 'emp-2',\n      firstName: 'Jane',\n      lastName: 'Smith'\n    }],\n    rawSeverityLevels: [{\n      _id: 'sev-1',\n      severityLevel: 1,\n      description: 'Low severity'\n    }, {\n      _id: 'sev-2',\n      severityLevel: 5,\n      description: 'High severity'\n    }],\n    // Provide callbacks:\n    onComment: (text, taskId) => console.log('[SeverityBoard] onComment =>', {\n      text,\n      taskId\n    }),\n    onEdit: data => console.log('[SeverityBoard] onEdit =>', data),\n    onDelete: data => console.log('[SeverityBoard] onDelete =>', data),\n    onDuplicate: data => console.log('[SeverityBoard] onDuplicate =>', data),\n    onCloseTask: data => console.log('[SeverityBoard] onCloseTask =>', data),\n    onEditComment: (commentId, newText, taskId) => console.log('[SeverityBoard] onEditComment =>', {\n      commentId,\n      newText,\n      taskId\n    })\n  } as ProjectBoardProps,\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByText('Low')).toBeInTheDocument();\n    expect(canvas.getByText('High')).toBeInTheDocument();\n  }\n}",
                ...SeverityBoard.parameters?.docs?.source,
              },
              description: {
                story: 'Example #2: Severity-based board',
                ...SeverityBoard.parameters?.docs?.description,
              },
            },
          }),
          (SubStatusBoard.parameters = {
            ...SubStatusBoard.parameters,
            docs: {
              ...SubStatusBoard.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'SubStatus Board',\n  args: {\n    variant: 'customer',\n    boardType: 'subStatus',\n    company: {\n      _id: 'co-123',\n      companyName: 'Acme Inc.'\n    },\n    columns: [{\n      _id: 'sub-1',\n      title: 'Pending Info',\n      description: 'Waiting for info'\n    }, {\n      _id: 'sub-2',\n      title: 'In Progress',\n      description: 'Actively in progress'\n    }],\n    tasks: [{\n      _id: 'task-101',\n      title: 'Fix login bug',\n      description: 'Users cannot log in under certain conditions.',\n      severityId: 'sev-2',\n      substatusId: 'sub-1'\n    }, {\n      _id: 'task-102',\n      title: 'Add new dashboard feature',\n      description: 'Implement a new chart in the dashboard.',\n      severityId: 'sev-1',\n      substatusId: 'sub-2'\n    }],\n    rawStatuses: [{\n      _id: 'stat-1',\n      status: 'Open'\n    }, {\n      _id: 'stat-2',\n      status: 'Closed'\n    }],\n    rawSubStatuses: [{\n      _id: 'sub-1',\n      subStatus: 'Pending Info',\n      description: 'Waiting on info'\n    }, {\n      _id: 'sub-2',\n      subStatus: 'In Progress',\n      description: 'Actively working'\n    }],\n    rawTopics: [{\n      _id: 'topic-1',\n      topic: 'Frontend'\n    }, {\n      _id: 'topic-2',\n      topic: 'Backend'\n    }],\n    rawQueues: [],\n    rawArticles: [],\n    rawCustomers: [],\n    rawEmployees: [],\n    rawSeverityLevels: [],\n    // Provide callbacks:\n    onComment: (text, taskId) => console.log('[SubStatusBoard] onComment =>', {\n      text,\n      taskId\n    }),\n    onEdit: data => console.log('[SubStatusBoard] onEdit =>', data),\n    onDelete: data => console.log('[SubStatusBoard] onDelete =>', data),\n    onDuplicate: data => console.log('[SubStatusBoard] onDuplicate =>', data),\n    onCloseTask: data => console.log('[SubStatusBoard] onCloseTask =>', data),\n    onEditComment: (commentId, newText, taskId) => console.log('[SubStatusBoard] onEditComment =>', {\n      commentId,\n      newText,\n      taskId\n    })\n  } as ProjectBoardProps\n}",
                ...SubStatusBoard.parameters?.docs?.source,
              },
              description: {
                story: 'Example #3: SubStatus-based board',
                ...SubStatusBoard.parameters?.docs?.description,
              },
            },
          }),
          (TopicBoard.parameters = {
            ...TopicBoard.parameters,
            docs: {
              ...TopicBoard.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'Topic Board',\n  args: {\n    variant: 'company',\n    boardType: 'topic',\n    company: {\n      _id: 'co-123',\n      companyName: 'Acme Inc.'\n    },\n    columns: [{\n      _id: 'topic-1',\n      title: 'Frontend',\n      description: 'UI tasks'\n    }, {\n      _id: 'topic-2',\n      title: 'Backend',\n      description: 'Server tasks'\n    }],\n    tasks: [{\n      _id: 'task-101',\n      title: 'Fix login bug',\n      description: 'Users cannot log in under certain conditions.',\n      topicIds: ['topic-1']\n    }, {\n      _id: 'task-102',\n      title: 'Add new dashboard feature',\n      description: 'Implement a new chart in the dashboard.',\n      topicIds: ['topic-2']\n    }],\n    rawStatuses: [],\n    rawSubStatuses: [],\n    rawTopics: [{\n      _id: 'topic-1',\n      topic: 'Frontend'\n    }, {\n      _id: 'topic-2',\n      topic: 'Backend'\n    }],\n    rawQueues: [],\n    rawArticles: [],\n    rawCustomers: [],\n    rawEmployees: [],\n    rawSeverityLevels: [],\n    // Provide callbacks:\n    onComment: (text, taskId) => console.log('[TopicBoard] onComment =>', {\n      text,\n      taskId\n    }),\n    onEdit: data => console.log('[TopicBoard] onEdit =>', data),\n    onDelete: data => console.log('[TopicBoard] onDelete =>', data),\n    onDuplicate: data => console.log('[TopicBoard] onDuplicate =>', data),\n    onCloseTask: data => console.log('[TopicBoard] onCloseTask =>', data),\n    onEditComment: (commentId, newText, taskId) => console.log('[TopicBoard] onEditComment =>', {\n      commentId,\n      newText,\n      taskId\n    })\n  } as ProjectBoardProps\n}",
                ...TopicBoard.parameters?.docs?.source,
              },
              description: {
                story: 'Example #4: Topic-based board',
                ...TopicBoard.parameters?.docs?.description,
              },
            },
          }),
          (AddTaskPopup_Customer.parameters = {
            ...AddTaskPopup_Customer.parameters,
            docs: {
              ...AddTaskPopup_Customer.parameters?.docs,
              source: {
                originalSource:
                  "makeAddTaskStory('customer', 'AddTask Popup - Customer Variant')",
                ...AddTaskPopup_Customer.parameters?.docs?.source,
              },
            },
          }),
          (AddTaskPopup_Company.parameters = {
            ...AddTaskPopup_Company.parameters,
            docs: {
              ...AddTaskPopup_Company.parameters?.docs,
              source: {
                originalSource:
                  "makeAddTaskStory('company', 'AddTask Popup - Company Variant')",
                ...AddTaskPopup_Company.parameters?.docs?.source,
              },
            },
          }),
          (AddTaskPopup_Administrator.parameters = {
            ...AddTaskPopup_Administrator.parameters,
            docs: {
              ...AddTaskPopup_Administrator.parameters?.docs,
              source: {
                originalSource:
                  "makeAddTaskStory('administrator', 'AddTask Popup - Administrator Variant')",
                ...AddTaskPopup_Administrator.parameters?.docs?.source,
              },
            },
          }),
          (ShowTaskPopup.parameters = {
            ...ShowTaskPopup.parameters,
            docs: {
              ...ShowTaskPopup.parameters?.docs,
              source: {
                originalSource:
                  "{\n  name: 'ShowTask Popup (Standalone)',\n  render: () => {\n    // We define all fields we want to display or edit:\n    const props: ShowTaskProps = {\n      open: true,\n      onClose: () => console.log('ShowTask onClose'),\n      // Provide a real \"title\" and \"description\" from the story:\n      taskTitle: 'Sample Task Title',\n      createdBy: 'John Doe',\n      description: 'Lorem ipsum dolor sit amet...',\n      // Optional \"customerAssigned\" so the chip is visible\n      customerAssigned: 'Bobbie Sue',\n      // We also provide arrays so editing can show dropdowns:\n      customerOptions: ['Alice', 'Bobbie Sue', 'Sally Customer'],\n      severityOptions: ['Low', 'Medium', 'High'],\n      schedulingQueueOptions: ['Tier 1 Support', 'Tier 2 Support'],\n      statusOptions: ['Open', 'Pending', 'Closed'],\n      subStatusOptions: ['Pending Info', 'In Progress', 'Waiting on Customer'],\n      topicOptions: ['Frontend', 'Backend', 'DevOps'],\n      knowledgebaseArticleOptions: ['Setup Guide', 'Troubleshooting FAQ'],\n      teamMemberOptions: ['Jane Smith', 'John Doe', 'Alice Dev'],\n      // Our comments now have multiple revisions:\n      comments: [{\n        _id: 'comm-1',\n        authorName: 'Alice',\n        text: 'First comment here!',\n        createdAt: '2023-08-15T10:00:00Z',\n        updatedAt: '2023-08-15T10:05:00Z',\n        lastEditedBy: 'Alice',\n        editHistory: [{\n          _id: 'rev-orig-comm-1',\n          editedBy: 'Alice',\n          editedAt: '2023-08-15T10:00:00Z',\n          text: 'First comment here!',\n          isOriginal: true\n        }, {\n          _id: 'rev-2-comm-1',\n          editedBy: 'Alice',\n          editedAt: '2023-08-15T10:05:00Z',\n          text: 'First comment, slightly edited by Alice!',\n          isOriginal: false\n        }]\n      }, {\n        _id: 'comm-2',\n        authorName: 'Bob',\n        text: 'Another comment with multiple edits!',\n        createdAt: '2023-08-15T10:10:00Z',\n        updatedAt: '2023-08-15T10:25:00Z',\n        lastEditedBy: 'Bob',\n        editHistory: [{\n          _id: 'rev-orig-comm-2',\n          editedBy: 'Bob',\n          editedAt: '2023-08-15T10:10:00Z',\n          text: 'Another comment with multiple edits!',\n          isOriginal: true\n        }, {\n          _id: 'rev-2-comm-2',\n          editedBy: 'Bob',\n          editedAt: '2023-08-15T10:20:00Z',\n          text: 'Bob changed it once!',\n          isOriginal: false\n        }, {\n          _id: 'rev-3-comm-2',\n          editedBy: 'Bob',\n          editedAt: '2023-08-15T10:25:00Z',\n          text: 'And changed it a second time!',\n          isOriginal: false\n        }]\n      }],\n      status: 'Open',\n      subStatus: 'Pending Info',\n      severity: 'High',\n      schedulingQueue: 'Tier 1 Support',\n      topics: ['Frontend', 'Backend'],\n      knowledgebaseArticles: ['Setup Guide', 'Troubleshooting FAQ'],\n      teamMemberAssigned: 'Jane Smith',\n      nextActionDate: '09/15/2023 - 8:30AM CST',\n      // Bob is the current user => he can edit his own comment(s).\n      currentUserName: 'Bob',\n      onComment: text => console.log('ShowTask onComment =>', text),\n      onCloseTask: () => console.log('ShowTask onCloseTask'),\n      onEdit: data => console.log('ShowTask onEdit =>', data),\n      onDelete: () => console.log('ShowTask onDelete'),\n      onDuplicate: () => console.log('ShowTask onDuplicate'),\n      // We add \"taskId\" ourselves in the log for demonstration\n      onEditComment: (commentId, newText) => {\n        const fakeTaskId = 'storybookTaskId';\n        console.log('ShowTask onEditComment =>', {\n          commentId,\n          newText,\n          taskId: fakeTaskId\n        });\n      }\n    };\n    return <ShowTask {...props} />;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n\n    // Confirm the title\n    expect(canvas.getByText('Sample Task Title')).toBeInTheDocument();\n    // Confirm the revised comment texts\n    expect(canvas.getByText('First comment here!')).toBeInTheDocument();\n    expect(canvas.getByText('Another comment with multiple edits!')).toBeInTheDocument();\n\n    // Try the \"Comment\" button\n    const commentBtn = canvas.getByRole('button', {\n      name: /Comment/i\n    });\n    await userEvent.click(commentBtn);\n  }\n}",
                ...ShowTaskPopup.parameters?.docs?.source,
              },
            },
          })
      },
      './src/components/Accordion/index.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          Xo: () => AccordionSummary,
          Zi: () => AccordionDetails,
          nD: () => Accordion,
        })
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
          _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/Accordion/Accordion.js'
            ),
          _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/material/AccordionSummary/AccordionSummary.js'
            ),
          _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/material/AccordionDetails/AccordionDetails.js'
            ),
          _barrel_optimize_names_ExpandMore_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/ExpandMore.js'
            ),
          _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/styles/palette.ts'
          )
        const StyledAccordion = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_4__.A
          )({ '&.MuiAccordion-root': { '&:before': { display: 'none' } } }),
          StyledAccordionSummary = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_5__.A
          )({ fontSize: '20px', fontFamily: 'merriweather', fontWeight: 500 }),
          StyledAccordionDetails = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__.A
          )(({ theme }) => ({ padding: theme.spacing(2) }))
        function Accordion({ children, ...props }) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            StyledAccordion,
            { disableGutters: !0, ...props, children }
          )
        }
        function AccordionSummary({ children, ...props }) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            StyledAccordionSummary,
            {
              expandIcon: (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _barrel_optimize_names_ExpandMore_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__.A,
                {
                  sx: {
                    color: _styles_palette__WEBPACK_IMPORTED_MODULE_2__.Ql.main,
                  },
                }
              ),
              ...props,
              children,
            }
          )
        }
        function AccordionDetails({ children, ...props }) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            StyledAccordionDetails,
            { ...props, children }
          )
        }
        ;(Accordion.displayName = 'Accordion'),
          (AccordionSummary.displayName = 'AccordionSummary'),
          (AccordionDetails.displayName = 'AccordionDetails'),
          (Accordion.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'Accordion',
            props: {
              children: {
                required: !0,
                tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
                description: '',
              },
            },
          }),
          (AccordionSummary.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'AccordionSummary',
            props: {
              children: {
                required: !0,
                tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
                description: '',
              },
            },
          }),
          (AccordionDetails.__docgenInfo = {
            description: '',
            methods: [],
            displayName: 'AccordionDetails',
            props: {
              children: {
                required: !0,
                tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
                description: '',
              },
            },
          })
      },
      './src/components/Checkbox/index.tsx': (
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
      './src/components/CodeCopy/index.tsx': (
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
          _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Button/index.tsx'
          ),
          _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/ContentCopy.js'
            ),
          highlight_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './node_modules/highlight.js/es/index.js'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const CodeCopy = ({ code, language }) => {
            const codeRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null)
            ;(0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              codeRef.current &&
                highlight_js__WEBPACK_IMPORTED_MODULE_3__.A.highlightElement(
                  codeRef.current
                )
            }, [code, language])
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
              {
                sx: {
                  position: 'relative',
                  borderRadius: 1,
                  backgroundColor: 'black',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                },
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                    {
                      sx: {
                        height: '40px',
                        width: '100%',
                        backgroundColor: 'grey.300',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        paddingRight: 2,
                        borderTopLeftRadius: 'inherit',
                        borderTopRightRadius: 'inherit',
                      },
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                        {
                          sx: { marginLeft: 'auto' },
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            _components_Button__WEBPACK_IMPORTED_MODULE_2__.A,
                            {
                              text: 'Copy Code',
                              variant: 'text',
                              icon: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_5__.A,
                                {}
                              ),
                              iconlocation: 'left',
                              fontcolor: 'black',
                              iconcolor: 'black',
                              onClick: () => {
                                const codeElement = codeRef.current
                                if (codeElement) {
                                  const textArea =
                                    document.createElement('textarea')
                                  ;(textArea.value = codeElement.innerText),
                                    document.body.appendChild(textArea),
                                    textArea.select(),
                                    document.execCommand('copy'),
                                    textArea.remove(),
                                    console.log('Code copied to clipboard')
                                }
                              },
                            }
                          ),
                        }
                      ),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                    {
                      sx: {
                        backgroundColor: 'black',
                        color: 'white',
                        flexGrow: 1,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      },
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        'pre',
                        {
                          style: {
                            backgroundColor: 'black',
                            color: 'white',
                            margin: 0,
                            flexGrow: 1,
                            paddingTop: 0,
                            paddingBottom: 16,
                          },
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                            'code',
                            {
                              ref: codeRef,
                              className: `language-${language}`,
                              children: code,
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
          __WEBPACK_DEFAULT_EXPORT__ = CodeCopy
        CodeCopy.__docgenInfo = {
          description:
            'CodeCopy component renders a code block with syntax highlighting and a copy button.\nIt uses highlight.js for syntax highlighting and provides a mechanism to copy the code to clipboard.',
          methods: [],
          displayName: 'CodeCopy',
          props: {
            code: {
              required: !0,
              tsType: { name: 'string' },
              description: 'The code to be displayed and copied',
            },
            language: {
              required: !0,
              tsType: { name: 'string' },
              description:
                'The programming language of the code (for syntax highlighting)',
            },
          },
        }
      },
      './src/components/ConfirmationCodeInput/index.tsx': (
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
          _barrel_optimize_names_Box_Input_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _barrel_optimize_names_Box_Input_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__('./node_modules/@mui/material/Input/Input.js'),
          _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/styles/palette.ts'
          )
        const ConfirmationCodeInputs = ({
            codeLength = 6,
            isValid,
            onChange,
            value,
            'aria-label': ariaLabel,
            'aria-required': ariaRequired,
            'aria-invalid': ariaInvalid,
            ...props
          }) => {
            const { handleCodeChange, handleKeyDown } = (({
                codeLength,
                onChange,
              }) => {
                const [code, setCode] = (0,
                react__WEBPACK_IMPORTED_MODULE_1__.useState)(
                  Object.fromEntries(
                    Array.from({ length: codeLength }, (_, i) => [
                      `code${i + 1}`,
                      '',
                    ])
                  )
                )
                return {
                  handleCodeChange: (0,
                  react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                    (event, index) => {
                      const value = event.target.value.replace(/\D/g, '')
                      value.length <= 1 &&
                        setCode(prevCode => {
                          const newCode = {
                              ...prevCode,
                              [`code${index + 1}`]: value,
                            },
                            combinedValue = Object.values(newCode).join('')
                          return (
                            null == onChange || onChange(combinedValue), newCode
                          )
                        })
                    },
                    [onChange]
                  ),
                  handleKeyDown: (0,
                  react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                    (event, index) => {
                      if (
                        [
                          'Backspace',
                          'ArrowLeft',
                          'ArrowRight',
                          'Tab',
                          'Delete',
                          'Home',
                          'End',
                        ].includes(event.key) ||
                        /^\d$/.test(event.key)
                      ) {
                        if (
                          'Backspace' === event.key &&
                          !code[`code${index + 1}`] &&
                          index > 0
                        ) {
                          setCode(prevCode => {
                            const newCode = {
                                ...prevCode,
                                [`code${index}`]: '',
                              },
                              combinedValue = Object.values(newCode).join('')
                            return (
                              null == onChange || onChange(combinedValue),
                              newCode
                            )
                          })
                          const prevInput = document.querySelector(
                            `input[name=code${index}]`
                          )
                          prevInput && prevInput.focus()
                        } else if ('ArrowLeft' === event.key && index > 0) {
                          const prevInput = document.querySelector(
                            `input[name=code${index}]`
                          )
                          prevInput && prevInput.focus()
                        } else if (
                          'ArrowRight' === event.key &&
                          index < codeLength - 1
                        ) {
                          const nextInput = document.querySelector(
                            `input[name=code${index + 2}]`
                          )
                          nextInput && nextInput.focus()
                        }
                      } else event.preventDefault()
                    },
                    [code, codeLength, onChange]
                  ),
                }
              })({ codeLength, onChange }),
              digits = value
                ? value.split('')
                : Array.from({ length: codeLength }, () => '')
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _barrel_optimize_names_Box_Input_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
              {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                role: 'group',
                'aria-label': ariaLabel || 'Confirmation Code',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_Box_Input_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
                    {
                      display: 'flex',
                      gap: 1,
                      children: Array.from({ length: codeLength }, (_, index) =>
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _barrel_optimize_names_Box_Input_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                          {
                            name: `code${index + 1}`,
                            value: digits[index] || '',
                            inputProps: {
                              maxLength: 1,
                              pattern: '[0-9]*',
                              inputMode: 'numeric',
                              'aria-label': `Code Digit ${index + 1}`,
                              'aria-required': ariaRequired,
                              'aria-invalid': ariaInvalid,
                            },
                            sx: {
                              border: '1px solid',
                              borderColor: 'black',
                              borderRadius: 1,
                              width: 50,
                              height: 50,
                              input: { textAlign: 'center', color: 'black' },
                            },
                            onChange: event =>
                              ((event, index) => {
                                const inputValue = event.target.value.replace(
                                  /\D/g,
                                  ''
                                )
                                if (
                                  inputValue.length <= 1 &&
                                  (handleCodeChange(event, index), inputValue)
                                ) {
                                  const nextInput = document.querySelector(
                                    `input[name=code${index + 2}]`
                                  )
                                  nextInput && nextInput.focus()
                                }
                              })(event, index),
                            onKeyDown: event =>
                              ((event, index) => {
                                handleKeyDown(event, index)
                              })(event, index),
                            ...props,
                          },
                          index
                        )
                      ),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_Box_Input_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
                    {
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      bgcolor: isValid
                        ? _styles_palette__WEBPACK_IMPORTED_MODULE_2__.wL.main
                        : _styles_palette__WEBPACK_IMPORTED_MODULE_2__.wv.main,
                      ml: 2,
                      role: 'status',
                      'aria-label': isValid
                        ? 'Code is valid'
                        : 'Code is invalid',
                    }
                  ),
                ],
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = ConfirmationCodeInputs
        ConfirmationCodeInputs.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ConfirmationCodeInputs',
          props: {
            identifier: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            columnconfig: {
              required: !1,
              tsType: { name: 'columnconfig' },
              description: '',
            },
            isValid: {
              required: !0,
              tsType: { name: 'boolean' },
              description: '',
            },
            codeLength: {
              required: !1,
              tsType: { name: 'number' },
              description: '',
              defaultValue: { value: '6', computed: !1 },
            },
            'aria-label': {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            'aria-required': {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            'aria-invalid': {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            onChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(value: string) => void',
                signature: {
                  arguments: [{ type: { name: 'string' }, name: 'value' }],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            value: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }
      },
      './src/components/DateField/index.tsx': (
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
          react_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            './node_modules/react-datepicker/dist/react-datepicker.min.js'
          ),
          react_datepicker__WEBPACK_IMPORTED_MODULE_5___default =
            __webpack_require__.n(
              react_datepicker__WEBPACK_IMPORTED_MODULE_5__
            ),
          _mui_icons_material_CalendarToday__WEBPACK_IMPORTED_MODULE_4__ =
            (__webpack_require__(
              './node_modules/react-datepicker/dist/react-datepicker.css'
            ),
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/CalendarToday.js'
            )),
          _TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './src/components/TextField/index.tsx'
          )
        const CustomInput = (0, react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
          ({ value, onClick, style }, ref) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)('input', {
              ref,
              value,
              onClick,
              style: { display: 'none', ...style },
              readOnly: !0,
            })
        )
        CustomInput.displayName = 'CustomInput'
        const DateField = ({
            onChange,
            label = 'Select Date',
            value,
            ...rest
          }) => {
            const formatDate = date => {
                if (date) {
                  const month = date.getMonth() + 1,
                    day = date.getDate(),
                    year = date.getFullYear()
                  return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`
                }
                return ''
              },
              [selectedDate, setSelectedDate] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(value || new Date()),
              [isOpen, setIsOpen] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
              [inputValue, setInputValue] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(
                formatDate(selectedDate)
              ),
              calendarIcon = (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _mui_icons_material_CalendarToday__WEBPACK_IMPORTED_MODULE_4__.A,
                {
                  onClick: e => {
                    e.stopPropagation(), setIsOpen(!0)
                  },
                  sx: {
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 },
                    fontSize: '20px',
                    color: 'black',
                  },
                }
              )
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _TextField__WEBPACK_IMPORTED_MODULE_3__.A,
                    {
                      label,
                      value: inputValue,
                      onChange: e => {
                        const input = e.target,
                          newValue = e.target.value,
                          selectionStart = input.selectionStart || 0
                        setInputValue(newValue)
                        const parts = newValue.split('/')
                        if (3 === parts.length) {
                          const month = parseInt(parts[0], 10),
                            day = parseInt(parts[1], 10),
                            year = parseInt(parts[2], 10)
                          if (!isNaN(month) && !isNaN(day) && !isNaN(year)) {
                            const newDate = new Date(year, month - 1, day)
                            newDate.getMonth() === month - 1 &&
                              newDate.getDate() === day &&
                              newDate.getFullYear() === year &&
                              (setSelectedDate(newDate),
                              onChange && onChange(newDate))
                          }
                        }
                        setTimeout(() => {
                          input.setSelectionRange(
                            selectionStart,
                            selectionStart
                          )
                        }, 0)
                      },
                      endAdornment: calendarIcon,
                      slotProps: {
                        input: {
                          readOnly: !1,
                          style: { cursor: 'text', height: '40px' },
                          onKeyDown: e => {
                            const input = e.currentTarget,
                              selectionStart = input.selectionStart || 0
                            let selectedPart
                            if (
                              ((selectedPart =
                                selectionStart <= 2
                                  ? 'month'
                                  : selectionStart <= 5
                                    ? 'day'
                                    : 'year'),
                              'ArrowUp' === e.key || 'ArrowDown' === e.key)
                            ) {
                              e.preventDefault()
                              const newDate = new Date(selectedDate),
                                increment = 'ArrowUp' === e.key ? 1 : -1
                              switch (selectedPart) {
                                case 'month':
                                  newDate.setMonth(
                                    newDate.getMonth() + increment
                                  )
                                  break
                                case 'day':
                                  newDate.setDate(newDate.getDate() + increment)
                                  break
                                case 'year':
                                  newDate.setFullYear(
                                    newDate.getFullYear() + increment
                                  )
                              }
                              setSelectedDate(newDate),
                                setInputValue(formatDate(newDate)),
                                onChange && onChange(newDate),
                                setTimeout(() => {
                                  switch (selectedPart) {
                                    case 'month':
                                      input.setSelectionRange(0, 2)
                                      break
                                    case 'day':
                                      input.setSelectionRange(3, 5)
                                      break
                                    case 'year':
                                      input.setSelectionRange(6, 10)
                                  }
                                }, 0)
                            }
                          },
                          onClick: e => {
                            const input = e.currentTarget,
                              clickPosition = input.selectionStart || 0
                            clickPosition <= 2
                              ? input.setSelectionRange(0, 2)
                              : clickPosition <= 5
                                ? input.setSelectionRange(3, 5)
                                : input.setSelectionRange(6, 10)
                          },
                        },
                      },
                      ...rest,
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    react_datepicker__WEBPACK_IMPORTED_MODULE_5___default(),
                    {
                      selected: selectedDate,
                      onChange: date => {
                        date &&
                          (setSelectedDate(date),
                          setInputValue(formatDate(date)),
                          setIsOpen(!1),
                          onChange && onChange(date))
                      },
                      dateFormat: 'MM/dd/yyyy',
                      customInput: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        CustomInput,
                        {}
                      ),
                      open: isOpen,
                      onClickOutside: () => setIsOpen(!1),
                      shouldCloseOnSelect: !0,
                    }
                  ),
                ],
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = DateField
        DateField.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'DateField',
          props: {
            onChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(date: Date | null) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'union',
                        raw: 'Date | null',
                        elements: [{ name: 'Date' }, { name: 'null' }],
                      },
                      name: 'date',
                    },
                  ],
                  return: { name: 'void' },
                },
              },
              description: '',
            },
            value: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'Date | null',
                elements: [{ name: 'Date' }, { name: 'null' }],
              },
              description: '',
            },
            label: {
              defaultValue: { value: "'Select Date'", computed: !1 },
              required: !1,
            },
          },
          composes: ['Omit'],
        }
      },
      './src/components/Grid/index.tsx': (
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
      './src/components/Icons/ShowHideEye.tsx': (
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
          _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_2__ =
            (__webpack_require__(
              './node_modules/next/dist/compiled/react/index.js'
            ),
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/Visibility.js'
            )),
          _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/VisibilityOff.js'
            )
        const ShowHideEyeIcon = ({ visible = !1 }) => {
            const iconStyle = { color: 'black' }
            return visible
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_2__.A,
                  { style: iconStyle }
                )
              : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_3__.A,
                  { style: iconStyle }
                )
          },
          __WEBPACK_DEFAULT_EXPORT__ = ShowHideEyeIcon
        ShowHideEyeIcon.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ShowHideEyeIcon',
          props: {
            visible: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
              defaultValue: { value: 'false', computed: !1 },
            },
          },
        }
      },
      './src/components/IncrementNumberField/index.tsx': (
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
          _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/material/TextField/TextField.js'
            ),
          _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/Button/Button.js'
            ),
          _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__('./node_modules/@mui/material/styles/styled.js')
        const StyledTextField = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.Ay)(
            _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__.A
          )(({ theme, backgroundcolor, outlinecolor, fontcolor }) => ({
            '& .MuiOutlinedInput-root': {
              backgroundColor:
                backgroundcolor || theme.palette.background.paper,
              '& fieldset': {
                borderColor: outlinecolor || theme.palette.primary.main,
              },
              '&:hover fieldset': {
                borderColor: outlinecolor || theme.palette.primary.main,
              },
              '&.Mui-focused fieldset': {
                borderColor: outlinecolor || theme.palette.primary.main,
              },
            },
            '& .MuiInputLabel-root': {
              color: fontcolor || theme.palette.text.primary,
              '&.Mui-focused': {
                color: fontcolor || theme.palette.primary.main,
              },
            },
            '& .MuiInputBase-input': {
              color: fontcolor || theme.palette.text.primary,
              textAlign: 'center',
              padding: '8px 0',
            },
          })),
          StyledButton = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.Ay)(
            _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.A
          )(({ theme }) => ({
            minWidth: '36px',
            padding: 0,
            height: '100%',
            borderRadius: '4px',
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.text.primary,
            '&:hover': { backgroundColor: theme.palette.grey[400] },
          })),
          IncrementNumberField = ({
            initialValue = '0',
            onChange,
            backgroundcolor,
            outlinecolor,
            fontcolor,
            label,
            ...rest
          }) => {
            const [value, setValue] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue),
              handleIncrement = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
                setValue(prev => {
                  const num = parseInt(prev)
                  if (isNaN(num)) return '0'
                  const newValue = (num + 1).toString()
                  return null == onChange || onChange(), newValue
                })
              }, [onChange]),
              handleDecrement = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
                setValue(prev => {
                  const num = parseInt(prev)
                  if (isNaN(num)) return '0'
                  const newValue = Math.max(0, num - 1).toString()
                  return null == onChange || onChange(), newValue
                })
              }, [onChange]),
              handleChange = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                event => {
                  const numValue = event.target.value.replace(/[^0-9]/g, '')
                  setValue('' === numValue ? '0' : numValue),
                    null == onChange || onChange()
                },
                [onChange]
              )
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,
              {
                display: 'flex',
                alignItems: 'center',
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    StyledButton,
                    { onClick: handleDecrement, children: '-' }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    StyledTextField,
                    {
                      value,
                      onChange: handleChange,
                      backgroundcolor,
                      outlinecolor,
                      fontcolor,
                      label,
                      variant: 'outlined',
                      size: 'small',
                      inputProps: { style: { width: '40px' } },
                      ...rest,
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    StyledButton,
                    { onClick: handleIncrement, children: '+' }
                  ),
                ],
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = IncrementNumberField
        IncrementNumberField.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'IncrementNumberField',
          props: {
            initialValue: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'0'", computed: !1 },
            },
            onChange: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '() => void',
                signature: { arguments: [], return: { name: 'void' } },
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
            label: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
          composes: ['Omit'],
        }
      },
      './src/components/MultiSelect/index.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict'
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
      './src/components/NumberField/index.tsx': (
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
          _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/TextField/index.tsx'
          )
        const NumberField = ({
            initialValue = '',
            onChange,
            label,
            min,
            max,
            ...rest
          }) => {
            const [value, setValue] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValue),
              handleChange = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                event => {
                  const newValue = event.target.value.replace(/[^0-9]/g, '')
                  if ((null == onChange || onChange(event), '' === newValue))
                    return void setValue('')
                  const numValue = parseInt(newValue, 10)
                  setValue(
                    void 0 !== min && numValue < min
                      ? String(min)
                      : void 0 !== max && numValue > max
                        ? String(max)
                        : newValue
                  )
                },
                [onChange, min, max]
              )
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _TextField__WEBPACK_IMPORTED_MODULE_2__.A,
              {
                value,
                onChange: handleChange,
                label,
                type: 'text',
                inputMode: 'numeric',
                variant: 'outlined',
                ...rest,
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = NumberField
        NumberField.__docgenInfo = {
          description:
            'A controlled numeric field that only allows digits\nand optionally enforces min/max constraints.',
          methods: [],
          displayName: 'NumberField',
          props: {
            initialValue: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "''", computed: !1 },
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
              description:
                'A standard ChangeEvent<HTMLInputElement> so parent can do\ne.g. (event) => parseInt(event.target.value) ...',
            },
            label: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            min: { required: !1, tsType: { name: 'number' }, description: '' },
            max: { required: !1, tsType: { name: 'number' }, description: '' },
          },
          composes: ['Omit'],
        }
      },
      './src/components/PasswordField/index.tsx': (
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
          _barrel_optimize_names_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/TextField/TextField.js'
            ),
          _barrel_optimize_names_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/material/InputAdornment/InputAdornment.js'
            ),
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              './node_modules/@mui/material/styles/styled.js'
            ),
          _Icons_ShowHideEye__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Icons/ShowHideEye.tsx'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const StyledTextField = (0,
          _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.Ay)(
            _barrel_optimize_names_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__.A
          )(({ theme, backgroundcolor, outlinecolor, fontcolor }) => ({
            '& .MuiOutlinedInput-root': {
              backgroundColor:
                backgroundcolor || theme.palette.background.paper,
              '& fieldset': {
                borderColor: outlinecolor || theme.palette.primary.main,
              },
              '&:hover fieldset': {
                borderColor: outlinecolor || theme.palette.primary.main,
              },
              '&.Mui-focused fieldset': {
                borderColor: outlinecolor || theme.palette.primary.main,
              },
            },
            '& .MuiInputLabel-root': {
              color: fontcolor || theme.palette.text.primary,
              '&.Mui-focused': {
                color: fontcolor || theme.palette.primary.main,
              },
            },
            '& .MuiInputBase-input': {
              color: fontcolor || theme.palette.text.primary,
            },
          })),
          EndAdornment = ({
            componentvariant,
            passwordVisible,
            togglePasswordVisibility,
          }) =>
            'password' === componentvariant
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _barrel_optimize_names_InputAdornment_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,
                  {
                    position: 'end',
                    onClick: togglePasswordVisibility,
                    style: { cursor: 'pointer' },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Icons_ShowHideEye__WEBPACK_IMPORTED_MODULE_2__.A,
                      { visible: passwordVisible }
                    ),
                  }
                )
              : null,
          PasswordField = ({
            backgroundcolor,
            outlinecolor,
            fontcolor,
            label = 'Password',
            ...rest
          }) => {
            const [passwordVisible, setPasswordVisible] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
              togglePasswordVisibility = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
                setPasswordVisible(
                  prev => (
                    console.log('togglePasswordVisibility', {
                      passwordVisible: !prev,
                    }),
                    !prev
                  )
                )
              }, [])
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              StyledTextField,
              {
                type: passwordVisible ? 'text' : 'password',
                label,
                backgroundcolor,
                outlinecolor,
                fontcolor,
                fullWidth: !0,
                InputProps: {
                  endAdornment: (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    EndAdornment,
                    {
                      componentvariant: 'password',
                      passwordVisible,
                      togglePasswordVisibility,
                    }
                  ),
                },
                ...rest,
              }
            )
          },
          __WEBPACK_DEFAULT_EXPORT__ = PasswordField
        PasswordField.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'PasswordField',
          props: {
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
            label: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
              defaultValue: { value: "'Password'", computed: !1 },
            },
          },
          composes: ['Omit'],
        }
      },
      './src/components/PhoneNumberField/index.tsx': (
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
          _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/TextField/index.tsx'
          )
        const formatPhoneNumber = inputValue => {
            let digits = inputValue.replace(/\D/g, '')
            digits.startsWith('1') && (digits = digits.slice(1))
            const limitedDigits = digits.slice(0, 10)
            let formattedNumber = '+1 '
            return (
              limitedDigits.length > 0 &&
                ((formattedNumber += limitedDigits.slice(0, 3)),
                limitedDigits.length > 3 &&
                  ((formattedNumber += '-' + limitedDigits.slice(3, 6)),
                  limitedDigits.length > 6 &&
                    (formattedNumber += '-' + limitedDigits.slice(6)))),
              formattedNumber.trim()
            )
          },
          PhoneNumberField = react__WEBPACK_IMPORTED_MODULE_1__.memo(props => {
            const {
                name,
                label = 'Phone Number',
                placeholder,
                onChange,
                onFocus,
                onBlur,
                value = '',
                error,
                ...restProps
              } = props,
              [phoneNumber, setPhoneNumber] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(
                formatPhoneNumber(value)
              ),
              handleChange = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                e => {
                  let strippedInput = e.target.value
                    .replace(/^\+1\s?/, '')
                    .replace(/\D/g, '')
                  strippedInput.startsWith('1') &&
                    (strippedInput = strippedInput.slice(1)),
                    (strippedInput = strippedInput.slice(0, 10))
                  const formattedValue =
                    strippedInput.length > 0
                      ? formatPhoneNumber(strippedInput)
                      : '+1 '
                  setPhoneNumber(formattedValue), onChange && onChange(e)
                },
                [onChange]
              ),
              handleFocus = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                e => {
                  onFocus && onFocus(e)
                },
                [onFocus]
              ),
              handleBlur = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                e => {
                  onBlur && onBlur(e)
                },
                [onBlur]
              ),
              handleClick = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                e => {
                  e.preventDefault()
                },
                []
              ),
              mergedSlotProps = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
                () => ({
                  input: { sx: { height: '40px', padding: '8px 0px' } },
                  inputLabel: {
                    sx: {
                      '&.MuiInputLabel-shrink': { top: '0px', left: '0px' },
                      '&:not(.MuiInputLabel-shrink)': {
                        transform: 'scale(1)',
                        transformOrigin: 'top left',
                        top: '9px',
                        left: '12px',
                      },
                    },
                  },
                }),
                []
              )
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
              {
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: '100%',
                },
                onClick: handleClick,
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _TextField__WEBPACK_IMPORTED_MODULE_2__.A,
                  {
                    name,
                    label,
                    placeholder,
                    onChange: handleChange,
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                    value: phoneNumber,
                    error,
                    fullWidth: !0,
                    variant: 'outlined',
                    slotProps: mergedSlotProps,
                    ...restProps,
                  }
                ),
              }
            )
          })
        PhoneNumberField.displayName = 'PhoneNumberField'
        const __WEBPACK_DEFAULT_EXPORT__ = PhoneNumberField
        PhoneNumberField.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'PhoneNumberField',
          props: {
            endAdornment: {
              required: !1,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            value: {
              required: !1,
              tsType: {
                name: 'union',
                raw: 'string | number | readonly string[] | undefined',
                elements: [
                  { name: 'string' },
                  { name: 'number' },
                  { name: 'unknown' },
                  { name: 'undefined' },
                ],
              },
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
            onFocus: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(event: React.FocusEvent<HTMLInputElement>) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'ReactFocusEvent',
                        raw: 'React.FocusEvent<HTMLInputElement>',
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
            onBlur: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'function',
                raw: '(event: React.FocusEvent<HTMLInputElement>) => void',
                signature: {
                  arguments: [
                    {
                      type: {
                        name: 'ReactFocusEvent',
                        raw: 'React.FocusEvent<HTMLInputElement>',
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
            error: {
              required: !1,
              tsType: { name: 'boolean' },
              description: '',
            },
            name: { required: !1, tsType: { name: 'string' }, description: '' },
            label: {
              required: !1,
              tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
              description: '',
            },
            placeholder: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            textAlign: {
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
            },
            inputPadding: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  top?: number\n  left?: number\n}',
                signature: {
                  properties: [
                    { key: 'top', value: { name: 'number', required: !1 } },
                    { key: 'left', value: { name: 'number', required: !1 } },
                  ],
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
            sx: {
              required: !1,
              tsType: {
                name: "MuiTextFieldProps['sx']",
                raw: "MuiTextFieldProps['sx']",
              },
              description: '',
            },
            slotProps: {
              required: !1,
              tsType: {
                name: "MuiTextFieldProps['slotProps']",
                raw: "MuiTextFieldProps['slotProps']",
              },
              description: '',
            },
          },
        }
      },
      './src/components/PricingTable/defaultconfig.tsx': (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict'
        __webpack_require__.d(__webpack_exports__, {
          A: () => __WEBPACK_DEFAULT_EXPORT__,
        })
        const __WEBPACK_DEFAULT_EXPORT__ = {
          headerGridConfig: {
            gridname: 'pricingtableheader',
            alignment: 'center',
            gridwidth: '100%',
          },
          tabletitle: {
            text: 'Features',
            columnconfig: {
              row: 3,
              column: 1,
              gridname: 'pricingtableheader',
              alignment: 'left',
              paddingleft: { xs: 2, sm: 2, md: 2, ms: 2, ml: 2, lg: 2, xl: 2 },
              paddingtop: { xs: 1, sm: 1, md: 1, ms: 1, ml: 1, lg: 1, xl: 1 },
              mobilewidth: '100%',
              tabletwidth: '100%',
              computerwidth: '50%',
            },
          },
          packagecolumns: {
            packagenames: ['ThothOS', 'ThothOS Pro', 'ThothOS Enterprise'],
            columnconfig: {
              row: 1,
              column: 1,
              gridname: 'pricingtableheader',
              alignment: 'center',
              paddingleft: { xs: 2, sm: 2, md: 2, ms: 2, ml: 2, lg: 2, xl: 2 },
              paddingright: { xs: 2, sm: 2, md: 2, ms: 2, ml: 2, lg: 2, xl: 2 },
              paddingtop: {
                xs: 2.5,
                sm: 2.5,
                md: 2.5,
                ms: 2.5,
                ml: 2.5,
                lg: 2.5,
                xl: 2.5,
              },
              paddingbottom: {
                xs: 1,
                sm: 2,
                md: 2,
                ms: 2,
                ml: 2,
                lg: 2,
                xl: 2,
              },
              mobilewidth: '100%',
              tabletwidth: '48%',
              computerwidth: '48%',
            },
          },
          monthlyprice: {
            prices: [
              'Monthly Pricing - $10',
              'Monthly Pricing - $20',
              'Monthly Pricing - $30',
            ],
            columnconfig: {
              row: 2,
              column: 1,
              mobilewidth: '100%',
              tabletwidth: '48%',
              computerwidth: '48%',
              gridname: 'pricingtableheader',
              alignment: 'center',
            },
          },
          annualprice: {
            annualprices: [
              'Annual Pricing - $100',
              'Annual Pricing - $200',
              'Annual Pricing - $300',
            ],
            columnconfig: {
              row: 2,
              column: 2,
              mobilewidth: '100%',
              tabletwidth: '48%',
              computerwidth: '48%',
              gridname: 'pricingtableheader',
              alignment: 'center',
            },
          },
          featureGridConfig: {
            gridname: 'pricingtablefeatures',
            alignment: 'center',
            gridwidth: '100%',
          },
          features: [
            {
              title: 'Frontend Components',
              infopopuptext: 'How do I choose the right plan?',
              titlelink: '',
              columnconfig: {
                row: 1,
                column: 1,
                mobilewidth: '80%',
                tabletwidth: '48%',
                computerwidth: '48%',
                gridname: 'pricingtablefeatures',
                alignment: 'left',
              },
              tiedtopackage: {
                tiedtopackages: ['true', 'true', 'true'],
                columnconfig: {
                  row: 1,
                  column: 2,
                  mobilewidth: '20%',
                  tabletwidth: '48%',
                  computerwidth: '48%',
                  gridname: 'pricingtablefeatures',
                  alignment: 'center',
                },
              },
              subfeatures: [
                {
                  title: 'Pricing Table',
                  infopopuptext: 'Pricing table subfeature info',
                  columnconfig: {
                    row: 2,
                    column: 1,
                    mobilewidth: '80%',
                    tabletwidth: '48%',
                    computerwidth: '48%',
                    gridname: 'pricingtablefeatures',
                    alignment: 'left',
                  },
                  tiedtopackage: {
                    tiedtopackages: ['true', 'true', 'true'],
                    columnconfig: {
                      row: 2,
                      column: 2,
                      mobilewidth: '20%',
                      tabletwidth: '48%',
                      computerwidth: '48%',
                      gridname: 'pricingtablefeatures',
                      alignment: 'center',
                    },
                  },
                },
                {
                  title: 'Feature Grid',
                  titlelink: '',
                  infopopuptext: 'Feature grid subfeature info',
                  columnconfig: {
                    row: 3,
                    column: 1,
                    mobilewidth: '80%',
                    tabletwidth: '48%',
                    computerwidth: '48%',
                    gridname: 'pricingtablefeatures',
                    alignment: 'left',
                  },
                  tiedtopackage: {
                    tiedtopackages: ['true', 'true', 'true'],
                    columnconfig: {
                      row: 3,
                      column: 2,
                      mobilewidth: '20%',
                      tabletwidth: '48%',
                      computerwidth: '48%',
                      gridname: 'pricingtablefeatures',
                      alignment: 'center',
                    },
                  },
                },
              ],
            },
            {
              title: 'Backend Capabilities',
              infopopuptext: 'What is the difference between the plans?',
              columnconfig: {
                row: 4,
                column: 1,
                mobilewidth: '80%',
                tabletwidth: '48%',
                computerwidth: '48%',
                gridname: 'pricingtablefeatures',
                alignment: 'left',
              },
              tiedtopackage: {
                tiedtopackages: ['true', 'true', 'true'],
                columnconfig: {
                  row: 4,
                  column: 2,
                  mobilewidth: '20%',
                  tabletwidth: '48%',
                  computerwidth: '48%',
                  gridname: 'pricingtablefeatures',
                  alignment: 'center',
                },
              },
              subfeatures: [
                {
                  title: 'API Integration',
                  titlelink: '',
                  infopopuptext: 'API integration subfeature info',
                  columnconfig: {
                    row: 5,
                    column: 1,
                    mobilewidth: '80%',
                    tabletwidth: '50%',
                    computerwidth: '48%',
                    gridname: 'pricingtablefeatures',
                    alignment: 'left',
                  },
                  tiedtopackage: {
                    tiedtopackages: ['true', 'true', 'true'],
                    columnconfig: {
                      row: 5,
                      column: 2,
                      mobilewidth: '20%',
                      tabletwidth: '48%',
                      computerwidth: '48%',
                      gridname: 'pricingtablefeatures',
                      alignment: 'center',
                    },
                  },
                },
                {
                  title: 'Database Support',
                  titlelink: '',
                  infopopuptext: 'Database support subfeature info',
                  columnconfig: {
                    row: 6,
                    column: 1,
                    mobilewidth: '80%',
                    tabletwidth: '48%',
                    computerwidth: '48%',
                    gridname: 'pricingtablefeatures',
                    alignment: 'left',
                  },
                  tiedtopackage: {
                    tiedtopackages: ['true', 'true', 'true'],
                    columnconfig: {
                      row: 6,
                      column: 2,
                      mobilewidth: '20%',
                      tabletwidth: '48%',
                      computerwidth: '48%',
                      gridname: 'pricingtablefeatures',
                      alignment: 'center',
                    },
                  },
                },
              ],
            },
          ],
          buttoncolumns: {
            buttontexts: ['Learn More', 'Learn More', 'Learn More'],
            buttonlinks: [
              '#goobs-frontend-unlimited',
              '#goobs-frontend-unlimited',
              '#goobs-frontend-unlimited',
            ],
            columnconfig: {
              row: 7,
              column: 1,
              mobilewidth: '100%',
              margintop: { xs: 2, sm: 2, md: 2, ms: 2, ml: 2, lg: 2, xl: 2 },
              marginbottom: { xs: 1, sm: 1, md: 1, ms: 1, ml: 1, lg: 1, xl: 1 },
              marginright: { xs: 1, sm: 1, md: 1, ms: 1, ml: 1, lg: 1, xl: 1 },
              marginleft: { xs: 1, sm: 1, md: 1, ms: 1, ml: 1, lg: 1, xl: 1 },
              tabletwidth: '100%',
              computerwidth: '48%',
              gridname: 'pricingtablefeatures',
              alignment: 'center',
            },
          },
        }
      },
      './src/components/PricingTable/index.tsx': (
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
          _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__('./node_modules/@mui/material/Box/Box.js'),
          _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              './node_modules/@mui/material/CircularProgress/CircularProgress.js'
            ),
          _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__('./node_modules/@mui/material/Paper/Paper.js'),
          _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/Info.js'
            ),
          _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              './node_modules/@mui/icons-material/esm/CheckCircle.js'
            ),
          _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            './src/components/Typography/index.tsx'
          ),
          _Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            './src/components/Tooltip/index.tsx'
          ),
          _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            './src/components/Button/index.tsx'
          ),
          _Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            './src/components/Dropdown/index.tsx'
          ),
          _components_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            './src/components/Grid/index.tsx'
          ),
          _defaultconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            './src/components/PricingTable/defaultconfig.tsx'
          ),
          _styles_palette__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            './src/styles/palette.ts'
          ),
          console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          )
        const PricingTable = props => {
            var _config_packagecolumns, _config_packagecolumns1
            const { router } = props,
              [selectedPackageIndex, setSelectedPackageIndex] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
              [selectedPackage, setSelectedPackage] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
              [isLoading, setIsLoading] = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),
              config = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
                () => ({
                  ..._defaultconfig__WEBPACK_IMPORTED_MODULE_7__.A,
                  ...props,
                }),
                [props]
              )
            ;(0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              const timer = setTimeout(() => {
                setIsLoading(!1)
              }, 100)
              return () => clearTimeout(timer)
            }, []),
              (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
                var _config_packagecolumns
                ;(null === (_config_packagecolumns = config.packagecolumns) ||
                void 0 === _config_packagecolumns
                  ? void 0
                  : _config_packagecolumns.packagenames) &&
                  config.packagecolumns.packagenames.length > 0 &&
                  setSelectedPackage(config.packagecolumns.packagenames[0])
              }, [
                null === (_config_packagecolumns = config.packagecolumns) ||
                void 0 === _config_packagecolumns
                  ? void 0
                  : _config_packagecolumns.packagenames,
              ])
            const handlePackageChange = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
                event => {
                  var _config_packagecolumns_packagenames,
                    _config_packagecolumns
                  const newValue = event.target.value
                  var _config_packagecolumns_packagenames_indexOf
                  const newIndex =
                    null !==
                      (_config_packagecolumns_packagenames_indexOf =
                        null ===
                          (_config_packagecolumns = config.packagecolumns) ||
                        void 0 === _config_packagecolumns ||
                        null ===
                          (_config_packagecolumns_packagenames =
                            _config_packagecolumns.packagenames) ||
                        void 0 === _config_packagecolumns_packagenames
                          ? void 0
                          : _config_packagecolumns_packagenames.indexOf(
                              newValue
                            )) &&
                    void 0 !== _config_packagecolumns_packagenames_indexOf
                      ? _config_packagecolumns_packagenames_indexOf
                      : 0
                  setSelectedPackageIndex(newIndex),
                    setSelectedPackage(newValue),
                    console.log('Package selection changed to:', newValue)
                },
                [
                  null === (_config_packagecolumns1 = config.packagecolumns) ||
                  void 0 === _config_packagecolumns1
                    ? void 0
                    : _config_packagecolumns1.packagenames,
                ]
              ),
              renderColumnConfigs = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
                var _config_features
                const headerColumnConfigs = [],
                  featureColumnConfigs = []
                var _config_monthlyprice_prices,
                  _config_annualprice_annualprices
                ;(config.tabletitle &&
                  config.tabletitle.columnconfig &&
                  headerColumnConfigs.push({
                    ...config.tabletitle.columnconfig,
                    component: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Typography__WEBPACK_IMPORTED_MODULE_2__.o,
                      {
                        text: config.tabletitle.text || '',
                        fontcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.Ql.main,
                        fontvariant: 'merrih4',
                        noWrap: !0,
                      }
                    ),
                  }),
                config.packagecolumns &&
                  config.packagecolumns.columnconfig &&
                  headerColumnConfigs.push({
                    ...config.packagecolumns.columnconfig,
                    margintop: 1,
                    marginright: 0.625,
                    component: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Dropdown__WEBPACK_IMPORTED_MODULE_5__.A,
                      {
                        label: 'Packages',
                        options: (config.packagecolumns.packagenames || []).map(
                          name => ({ value: name, label: name })
                        ),
                        defaultValue: selectedPackage,
                        backgroundcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.o_.main,
                        shrunklabelposition: 'aboveNotch',
                        outlinecolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.Ql.main,
                        fontcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.Ql.main,
                        shrunkfontcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.Ql.main,
                        onChange: handlePackageChange,
                      }
                    ),
                  }),
                config.monthlyprice && config.monthlyprice.columnconfig) &&
                  headerColumnConfigs.push({
                    ...config.monthlyprice.columnconfig,
                    component: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Typography__WEBPACK_IMPORTED_MODULE_2__.o,
                      {
                        text:
                          (null ===
                            (_config_monthlyprice_prices =
                              config.monthlyprice.prices) ||
                          void 0 === _config_monthlyprice_prices
                            ? void 0
                            : _config_monthlyprice_prices[
                                selectedPackageIndex
                              ]) || '',
                        fontcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.Ql.main,
                        fontvariant: 'merrih5',
                      }
                    ),
                  })
                config.annualprice &&
                  config.annualprice.columnconfig &&
                  headerColumnConfigs.push({
                    ...config.annualprice.columnconfig,
                    component: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Typography__WEBPACK_IMPORTED_MODULE_2__.o,
                      {
                        text:
                          (null ===
                            (_config_annualprice_annualprices =
                              config.annualprice.annualprices) ||
                          void 0 === _config_annualprice_annualprices
                            ? void 0
                            : _config_annualprice_annualprices[
                                selectedPackageIndex
                              ]) || '',
                        fontcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.Ql.main,
                        fontvariant: 'merrih5',
                      }
                    ),
                  })
                if (
                  (null === (_config_features = config.features) ||
                    void 0 === _config_features ||
                    _config_features.forEach(feature => {
                      if (
                        (feature.columnconfig &&
                          featureColumnConfigs.push({
                            ...feature.columnconfig,
                            margintop: 1,
                            paddingleft: 2,
                            component: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                              _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                              {
                                display: 'flex',
                                alignItems: 'center',
                                children: [
                                  (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    _Typography__WEBPACK_IMPORTED_MODULE_2__.o,
                                    {
                                      text: feature.title,
                                      fontcolor:
                                        _styles_palette__WEBPACK_IMPORTED_MODULE_8__
                                          .Ql.main,
                                      fontvariant: 'merrih5',
                                      noWrap: !0,
                                    }
                                  ),
                                  feature.infopopuptext &&
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                                      {
                                        ml: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        children: (0,
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                          _Tooltip__WEBPACK_IMPORTED_MODULE_3__.A,
                                          {
                                            arrow: !0,
                                            tooltipcolor:
                                              _styles_palette__WEBPACK_IMPORTED_MODULE_8__
                                                .wy.dark,
                                            tooltipplacement: 'right',
                                            title: feature.infopopuptext,
                                            offsetX: 0,
                                            offsetY: 0,
                                            children: (0,
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                              _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_10__.A,
                                              { fontSize: 'small' }
                                            ),
                                          }
                                        ),
                                      }
                                    ),
                                ],
                              }
                            ),
                          }),
                        feature.tiedtopackage &&
                          feature.tiedtopackage.columnconfig)
                      ) {
                        var _feature_tiedtopackage_tiedtopackages
                        const tiedConfig = {
                          ...feature.tiedtopackage.columnconfig,
                          margintop: 1,
                          cellconfig: { minHeight: '40px' },
                          component: (
                            null ===
                              (_feature_tiedtopackage_tiedtopackages =
                                feature.tiedtopackage.tiedtopackages) ||
                            void 0 === _feature_tiedtopackage_tiedtopackages
                              ? void 0
                              : _feature_tiedtopackage_tiedtopackages[
                                  selectedPackageIndex
                                ]
                          )
                            ? (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_11__.A,
                                {}
                              )
                            : (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                                { sx: { width: '24px', height: '24px' } }
                              ),
                        }
                        featureColumnConfigs.push(tiedConfig)
                      }
                      feature.subfeatures.forEach(subFeature => {
                        if (
                          (subFeature.columnconfig &&
                            featureColumnConfigs.push({
                              ...subFeature.columnconfig,
                              margintop: 1,
                              paddingleft: 3,
                              component: (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                                {
                                  display: 'flex',
                                  alignItems: 'center',
                                  children: [
                                    (0,
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                      _Typography__WEBPACK_IMPORTED_MODULE_2__.o,
                                      {
                                        text: subFeature.title,
                                        fontcolor:
                                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__
                                            .Ql.main,
                                        fontvariant: 'merriparagraph',
                                        noWrap: !0,
                                      }
                                    ),
                                    subFeature.infopopuptext &&
                                      (0,
                                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                        _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                                        {
                                          ml: 1,
                                          display: 'flex',
                                          alignItems: 'center',
                                          children: (0,
                                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                            _Tooltip__WEBPACK_IMPORTED_MODULE_3__.A,
                                            {
                                              arrow: !0,
                                              tooltipcolor:
                                                _styles_palette__WEBPACK_IMPORTED_MODULE_8__
                                                  .wy.dark,
                                              tooltipplacement: 'right',
                                              title: subFeature.infopopuptext,
                                              offsetX: 0,
                                              offsetY: 0,
                                              children: (0,
                                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_10__.A,
                                                { fontSize: 'small' }
                                              ),
                                            }
                                          ),
                                        }
                                      ),
                                  ],
                                }
                              ),
                            }),
                          subFeature.tiedtopackage &&
                            subFeature.tiedtopackage.columnconfig)
                        ) {
                          var _subFeature_tiedtopackage_tiedtopackages
                          const tiedConfig = {
                            ...subFeature.tiedtopackage.columnconfig,
                            margintop: 1,
                            cellconfig: { minHeight: '40px' },
                            component: (
                              null ===
                                (_subFeature_tiedtopackage_tiedtopackages =
                                  subFeature.tiedtopackage.tiedtopackages) ||
                              void 0 ===
                                _subFeature_tiedtopackage_tiedtopackages
                                ? void 0
                                : _subFeature_tiedtopackage_tiedtopackages[
                                    selectedPackageIndex
                                  ]
                            )
                              ? (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_11__.A,
                                  {}
                                )
                              : (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                  _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                                  { sx: { width: '24px', height: '24px' } }
                                ),
                          }
                          featureColumnConfigs.push(tiedConfig)
                        }
                      })
                    }),
                  config.buttoncolumns && config.buttoncolumns.columnconfig)
                ) {
                  var _config_buttoncolumns_buttonlinks,
                    _config_buttoncolumns_buttontexts
                  const buttonLink =
                    (null ===
                      (_config_buttoncolumns_buttonlinks =
                        config.buttoncolumns.buttonlinks) ||
                    void 0 === _config_buttoncolumns_buttonlinks
                      ? void 0
                      : _config_buttoncolumns_buttonlinks[
                          selectedPackageIndex
                        ]) || '#'
                  featureColumnConfigs.push({
                    ...config.buttoncolumns.columnconfig,
                    margintop: 1,
                    component: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_4__.A,
                      {
                        variant: 'contained',
                        fontcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.ON.main,
                        backgroundcolor:
                          _styles_palette__WEBPACK_IMPORTED_MODULE_8__.Ql.main,
                        href: buttonLink,
                        width: '100%',
                        onClick: () => {
                          router
                            ? router.push(buttonLink)
                            : console.warn(
                                'No router provided; skipping navigation.'
                              )
                        },
                        text:
                          (null ===
                            (_config_buttoncolumns_buttontexts =
                              config.buttoncolumns.buttontexts) ||
                          void 0 === _config_buttoncolumns_buttontexts
                            ? void 0
                            : _config_buttoncolumns_buttontexts[
                                selectedPackageIndex
                              ]) || '',
                      }
                    ),
                  })
                }
                return { headerColumnConfigs, featureColumnConfigs }
              }, [
                config,
                selectedPackageIndex,
                selectedPackage,
                router,
                handlePackageChange,
              ]),
              { headerColumnConfigs, featureColumnConfigs } =
                renderColumnConfigs()
            return isLoading
              ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_6__.A,
                  {
                    gridconfig: { gridwidth: '100%', alignment: 'center' },
                    columnconfig: [
                      {
                        row: 1,
                        column: 1,
                        alignment: 'center',
                        component: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_9__.A,
                          {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '350px',
                            width: '100%',
                            overflow: 'auto',
                            children: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_12__.A,
                              { size: 240, thickness: 2 }
                            ),
                          }
                        ),
                      },
                    ],
                  }
                )
              : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                  _barrel_optimize_names_Box_CircularProgress_Paper_mui_material__WEBPACK_IMPORTED_MODULE_13__.A,
                  {
                    elevation: 1,
                    sx: {
                      borderRadius: '6px',
                      borderTop: `12px solid ${_styles_palette__WEBPACK_IMPORTED_MODULE_8__.hu.main}`,
                      display: 'flex',
                      width: '100%',
                      flexDirection: 'column',
                      height: '100%',
                    },
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_6__.A,
                        {
                          gridconfig: config.headerGridConfig,
                          columnconfig: headerColumnConfigs,
                        }
                      ),
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_6__.A,
                        {
                          gridconfig: config.featureGridConfig,
                          columnconfig: featureColumnConfigs,
                        }
                      ),
                    ],
                  }
                )
          },
          __WEBPACK_DEFAULT_EXPORT__ = PricingTable
        PricingTable.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'PricingTable',
          props: {
            headerGridConfig: {
              required: !1,
              tsType: { name: 'gridconfig' },
              description: '',
            },
            tabletitle: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  text?: string\n  columnconfig?: columnconfig\n}',
                signature: {
                  properties: [
                    { key: 'text', value: { name: 'string', required: !1 } },
                    {
                      key: 'columnconfig',
                      value: { name: 'columnconfig', required: !1 },
                    },
                  ],
                },
              },
              description: '',
            },
            packagecolumns: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  columnheaders?: string\n  packagenames?: string[]\n  columnconfig?: columnconfig\n}',
                signature: {
                  properties: [
                    {
                      key: 'columnheaders',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'packagenames',
                      value: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                        required: !1,
                      },
                    },
                    {
                      key: 'columnconfig',
                      value: { name: 'columnconfig', required: !1 },
                    },
                  ],
                },
              },
              description: '',
            },
            monthlyprice: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  prices?: string[]\n  columnconfig?: columnconfig\n}',
                signature: {
                  properties: [
                    {
                      key: 'prices',
                      value: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                        required: !1,
                      },
                    },
                    {
                      key: 'columnconfig',
                      value: { name: 'columnconfig', required: !1 },
                    },
                  ],
                },
              },
              description: '',
            },
            annualprice: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  annualprices?: string[]\n  columnconfig?: columnconfig\n}',
                signature: {
                  properties: [
                    {
                      key: 'annualprices',
                      value: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                        required: !1,
                      },
                    },
                    {
                      key: 'columnconfig',
                      value: { name: 'columnconfig', required: !1 },
                    },
                  ],
                },
              },
              description: '',
            },
            featureGridConfig: {
              required: !1,
              tsType: { name: 'gridconfig' },
              description: '',
            },
            features: {
              required: !1,
              tsType: {
                name: 'Array',
                elements: [{ name: 'Feature' }],
                raw: 'Feature[]',
              },
              description: '',
            },
            buttoncolumns: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  buttontexts?: string[]\n  buttonlinks?: string[]\n  columnconfig?: columnconfig\n}',
                signature: {
                  properties: [
                    {
                      key: 'buttontexts',
                      value: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                        required: !1,
                      },
                    },
                    {
                      key: 'buttonlinks',
                      value: {
                        name: 'Array',
                        elements: [{ name: 'string' }],
                        raw: 'string[]',
                        required: !1,
                      },
                    },
                    {
                      key: 'columnconfig',
                      value: { name: 'columnconfig', required: !1 },
                    },
                  ],
                },
              },
              description: '',
            },
            router: {
              required: !1,
              tsType: {
                name: 'signature',
                type: 'object',
                raw: '{\n  push(url: string): void\n}',
                signature: {
                  properties: [
                    { key: 'push', value: { name: 'void', required: !0 } },
                  ],
                },
              },
              description:
                'The router object with a `.push()` method.\nIn Next.js, this would typically come from `useRouter()` in the parent.',
            },
          },
        }
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
      './src/components/RadioGroup/index.tsx': (
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
          _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            (__webpack_require__(
              './node_modules/next/dist/compiled/react/index.js'
            ),
            __webpack_require__(
              './node_modules/@mui/material/FormControl/FormControl.js'
            )),
          _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              './node_modules/@mui/material/FormLabel/FormLabel.js'
            ),
          _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              './node_modules/@mui/material/RadioGroup/RadioGroup.js'
            ),
          _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              './node_modules/@mui/material/FormControlLabel/FormControlLabel.js'
            ),
          _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__('./node_modules/@mui/material/Radio/Radio.js'),
          _components_Typography__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__('./src/components/Typography/index.tsx')
        const RadioGroup = ({
            label,
            options,
            defaultValue,
            name,
            labelFontVariant,
            labelFontColor,
            labelText,
          }) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_4__.A,
                    {
                      id: `${name}-label`,
                      sx: { marginBottom: '8px' },
                      children: (0,
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _components_Typography__WEBPACK_IMPORTED_MODULE_2__.o,
                        {
                          text: labelText || label,
                          fontcolor: labelFontColor,
                          fontvariant: labelFontVariant,
                        }
                      ),
                    }
                  ),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,
                    {
                      'aria-labelledby': `${name}-label`,
                      defaultValue,
                      name,
                      children: options.map((option, index) =>
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                          _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,
                          {
                            control: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _barrel_optimize_names_FormControl_FormControlLabel_FormLabel_Radio_RadioGroup_mui_material__WEBPACK_IMPORTED_MODULE_7__.A,
                              {}
                            ),
                            label: (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                              _components_Typography__WEBPACK_IMPORTED_MODULE_2__.o,
                              {
                                text: option.label,
                                fontcolor: option.fontColor,
                                fontvariant: option.fontVariant,
                              }
                            ),
                          },
                          index
                        )
                      ),
                    }
                  ),
                ],
              }
            ),
          __WEBPACK_DEFAULT_EXPORT__ = RadioGroup
        RadioGroup.__docgenInfo = {
          description:
            'RadioGroup component renders a group of radio buttons with customizable options.\nIt allows selecting a single value from a list of options.\n@param props The props for the RadioGroup component.\n@returns The rendered RadioGroup component.',
          methods: [],
          displayName: 'RadioGroup',
          props: {
            label: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            options: {
              required: !0,
              tsType: {
                name: 'Array',
                elements: [{ name: 'RadioOption' }],
                raw: 'RadioOption[]',
              },
              description: '',
            },
            defaultValue: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            name: { required: !0, tsType: { name: 'string' }, description: '' },
            labelFontVariant: {
              required: !1,
              tsType: { name: 'TypographyPropsVariantOverrides' },
              description: '',
            },
            labelFontColor: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
            labelText: {
              required: !1,
              tsType: { name: 'string' },
              description: '',
            },
          },
        }
      },
      './src/components/TransferList/index.tsx': (
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
      '?8131': () => {},
      '?3fc0': () => {},
      '?f9d4': () => {},
      '?7a28': () => {},
      '?cad2': () => {},
      '?593c': () => {},
    },
  ]
)
