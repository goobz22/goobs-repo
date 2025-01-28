# goobs-frontend

goobs-frontend, is a React-based UI library built on Material-UI.

The NPM repo is available here - https://www.npmjs.com/package/goobs-frontend

This entire repository is written in TypeScript, and there is no need for a separate types installation.

## Storybook

See component design and documentation in Storybook available here - https://storybook.technologiesunlimited.net/

## Integrating goobs-frontend with Next.js

This guide explains how to integrate goobs-frontend with a Next.js project

**Step 1: Install the project**

In your Next.js project directory, run the following command to install goobs-frontend

#### npm

```bash
npm i goobs-frontend
```

#### yarn

```bash
yarn add goobs-frontend
```

**Step 2: Update next.config.js**

You must then transpile the package in next.config

```javascript
/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['goobs-frontend'],
}

export default nextConfig
```

After this is done, you can import components from goobs-frontend into your project.

## Components

Below is a high-level overview of all components now available in goobs-frontend. For full usage instructions, code snippets, and best practices, see our Storybook.

### Accordion

Description: A collapsible container for toggling expanded/collapsed content.

Features: Built on Material-UI’s Accordion.

Combines Accordion, AccordionSummary, and AccordionDetails for a complete layout.

### Button

Description: A Material-UI Button wrapper with advanced customization—supporting icons, text alignment, and coloring.

Features: Flexible icon positioning (left, right, above).

Configurable background color, text color, dimensions, etc.

### Card

Description: A versatile container with multiple variants (inventory, pricing, product, tasks, etc.).

Features: Displays images, stepper integration, and optional breadcrumbs.

Ideal for product listings, tasks, or advanced pricing scenarios.

### CodeCopy

Description: Renders syntax-highlighted code blocks and offers a single-click “Copy to clipboard” button.

Features: Uses highlight.js for syntax highlighting.

Great for docs, tutorials, or developer portals.

### ConfirmationCodeInputs

Description: An OTP-style multi-digit input.

Features: Automatically moves focus between fields, numeric-only.

Visual valid/invalid status indicator.

### ComplexTextEditor

Description: A text editor capable of switching between modes (simple, markdown, or rich text) via a single toolbar.

Features: Uses sub-editors (SimpleEditor, RichTextEditor, MarkdownEditor).

Accepts label, min-rows, error text, etc.

### Content

Description: A catch-all container that can render multiple typed sub-components (typography, images, forms, etc.).

Features: Allows dynamic rendering of sub-components in a structured layout.

### CustomToolbar

Description: A flexible toolbar with optional buttons, search bar, dropdowns, and management actions.

Features:

- Left: Renders an optional vertical divider and an array of buttons.
- LeftCenter: Typically a search bar.
- Right: Renders one or more Dropdown components.
- RightCenter: Manages selected rows or data actions (duplicate, delete, etc.).

### DataGrid

Description: A table/grid with row selection, search, pagination, and advanced row management (duplicate, delete, etc.).

Features:

- Built-in search integration.
- Custom toolbars, footers, and row selection.
- Single or multiple row selection with checkboxes.

### DataGridCheckbox

Description: A specialized Checkbox for data grid usage, logging click/change events.

Features:

- Styled for grid contexts.
- Allows debug logging or analytics.

### DateField

Description: A date picker that supports both manual text entry and a pop-up calendar (via react-datepicker).

Features:

- Arrow-key increments for day/month/year.
- Partial manual editing (e.g., only day or month).

### Dialog and Popup

Description: Modal components for various form-based interactions.

Features:

- Popup for simpler modals; Dialog for more complex or multi-step forms.
- Both can integrate with form controls or custom actions.

### Dropdown

Description: A select input with advanced styling (label above or on the outline) and typed options.

Features:

- Allows custom color overrides for background, outline, and font.
- Works well in forms or toolbars.

### FormDataGrid

Description: A specialized DataGrid for form-based usage.

Features:

- Possibly merges form validation with row-based data editing.
- Accepts typed definitions for columns, validation, or data transformations.

### Grid

Description: A flexible grid system for laying out UI components, wrapping Material-UI’s Grid.

Features:

- Row/column/cell configurations with advanced spacing and alignment.
- Perfect for building complex multi-column forms or pages.

### IncrementNumberField

Description: A numeric input with dedicated increment/decrement buttons.

Features:

- Restricts input to digits.
- Configurable label, background, outline, and text color.

### MultiSelectChip

Description: A multiple-selection dropdown that displays selected items as chips.

Features:

- Easy to handle multiple values.
- Optional background, font, and label styling.

### Nav (Vertical)

Description: A vertical navigation component with expandable main/sub nav items, optional search, etc.

Features:

- Supports multiple levels: mainNav, subNav, and viewNav.
- Collapsible sections and optional route-based or onClick triggers.

### NumberField

Description: A numeric text field with optional min/max constraints.

Features:

- Restricts non-numeric input.
- Auto-corrects values outside allowable ranges.

### PasswordField

Description: A text field for secure passwords, featuring a show/hide toggle icon.

Features:

- Color overrides for background, outline, text.
- Eye icon toggles between hidden and visible text.

### PhoneNumberField

Description: A phone number input that auto-formats values (e.g., +1-xxx-xxx-xxxx).

Features:

- Removes non-digit characters, ensures +1.
- Great for US-based phone inputs, can be adapted for international usage.

### PricingTable

Description: A tabular display of multi-tier pricing data, toggling monthly/annual costs, etc.

Features:

- Compare multiple packages.
- Checkmark-based feature lists.
- Integrated CTA buttons, easily link to a router or checkout flow.

### ProjectBoard

Description: A kanban-like board for tasks, with drag-and-drop columns, search, and sub-forms (AddTask, ShowTask).

Features:

- Handles status/sub-status or severity-based columns.
- Built-in search, comment, revision history, assigned user, etc.

### QRCodeComponent

Description: Dynamically generates a QR code from TOTP secrets (or any string).

Features:

- Integrates with otplib for generating or verifying TOTP secrets.
- Accepts size, optional title, and callback for the generated secret.

### RadioGroup

Description: A group of radio buttons for single-option selection, built on Material-UI’s RadioGroup.

Features:

- Accepts typed RadioOption for label customizations.
- Includes an optional overall label with custom font variants/colors.

### RichTextEditor

Description: A full WYSIWYG editor with optional Markdown toggles, link insertion, bold/italic, etc.

Features:

- Built on Slate or similar.
- Separate toolbars for Rich Text vs. Markdown modes.

### SearchableDropdown

Description: A dropdown with real-time filtering, based on Material-UI’s Autocomplete.

Features:

- Additional attributes for each option (attribute1, attribute2).
- Flexible color/label styling.

### Searchbar

Description: A stylized search input field, typically placed in a toolbar or nav.

Features:

- Icon, label positioning, and color customization.
- Easy onChange event to handle filtering or searching.

### ShowTask

Description: A modal-based component that displays a single task, its fields, and a comment section with revision history.

Features:

- Edits or adds comments, optionally restricted to the original commenter.
- Adjust sub-status, assigned user, next-action date, etc.

### Stepper (CustomStepper)

Description: A multi-step progress indicator for processes or wizards.

Features:

- Supports “completed”, “active”, “error”, or “inactive” steps.
- Displays optional step descriptions or links.
- Step icons can be customized (check, lock, error, etc.).

### StyledTooltip

Description: A Material-UI Tooltip extended with custom color, offsets, and arrow placement.

Features:

- Override background color, text color, arrow color.
- Precisely position via offset props.

### Tabs (Horizontal)

Description: A horizontal tab navigation bar built with Material-UI’s Tabs.

Features:

- Route-based (trigger='route') or custom callback (trigger='onClick') tab switches.
- Supports alignment (left, center, right, justify) and optional borders.

### TextField

Description: A Material-UI TextField wrapper with advanced color and label position overrides, plus optional end adornments.

Features:

- Label can shrink onto or above the outline for a unique UI.
- Extended color styling for background, outline, font, placeholder, etc.

### Toolbar

Description: A flexible container for actions, often used atop tables or pages for filtering, button actions, and more.

Features:

- Extensible subcomponents (Left, LeftCenter, Right, RightCenter).
- Adapts layout based on screen size (desktop, tablet, mobile).

### Tooltip

Description: A styled tooltip (see StyledTooltip).

Features:

- Enhanced theming, offsets, arrow customization.
- Works with icons, text, or anything that needs a hover tooltip.

### TransferList

Description: A dual-list component for transferring items between left and right.

Features:

- “Move selected” or “Move all” controls.
- Single or multiple selection variants.
- Can pair with dropdowns for multi-collection contexts.

### Typography

Description: A text component supporting multiple font families (Arapey, Inter, Merriweather) and variant styles.

Features:

- Additional variants like paragraph, helperheader, helperfooter.
- Flexible coloring and consistent text sizing across your app.

### Feedback and Contributions

We welcome contributions of all kinds:

- Issues: Report bugs or request features via GitHub Issues.
- Pull Requests: Fork, create a branch, and open a PR for review.
- Custom Requests: If you need special features or want these components ported to a different design system, reach out.

### License

goobs-frontend is licensed under the MIT License.

### Contact

For questions, support, or further details, please contact Matthew Goluba

Email: mkgoluba@technologiesunlimited.net

Enjoy building with goobs-frontend!
