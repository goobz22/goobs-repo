// src/components/Tabs/tabs.stories.tsx

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import Tabs, { TabsProps, TabsItem } from './index'

/**
 * A small helper to emulate a "pathname" in a Storybook environment.
 * By default, "next/navigation" uses actual browser location, but in Storybook,
 * we might provide a simpler mock. If you prefer real routing, skip this logic.
 */
const mockCurrentPathname = (route: string) => {
  window.history.pushState({}, '', route)
}

/**
 * Sample tabs data
 */
const basicTabs: TabsItem[] = [
  {
    title: 'Home',
    route: '/home',
    trigger: 'route',
  },
  {
    title: 'About',
    route: '/about',
    trigger: 'route',
  },
  {
    title: 'Contact',
    route: '/contact',
    trigger: 'route',
  },
]

const withBordersTabs: TabsItem[] = [
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
  {
    title: 'Tab Three',
    route: '/three',
    trigger: 'route',
  },
]

const mixedTriggerTabs: TabsItem[] = [
  {
    title: 'Profile',
    route: '/profile',
    trigger: 'route',
  },
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
]

/**
 * Storybook metadata
 */
const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    a11y: { disable: false },
  },
}
export default meta

type Story = StoryObj<typeof Tabs>

/**
 * 1) Basic usage
 */
export const Basic: Story = {
  args: {
    items: basicTabs,
    alignment: 'left',
    height: '48px',
    navname: 'basicNav',
  },
  // We'll set the mock pathname to "/home" so the "Home" tab is selected initially.
  play: async ({ canvasElement }) => {
    mockCurrentPathname('/home')

    const canvas = within(canvasElement)
    // We confirm we see "Home", "About", "Contact"
    expect(canvas.getByText('Home')).toBeInTheDocument()
    expect(canvas.getByText('About')).toBeInTheDocument()
    expect(canvas.getByText('Contact')).toBeInTheDocument()

    // "Home" should be selected if the route is "/home"
    const homeTab = canvas.getByRole('tab', { name: 'Home' })
    expect(homeTab).toHaveAttribute('aria-selected', 'true')
  },
}

/**
 * 2) Center alignment
 */
export const CenterAlignment: Story = {
  args: {
    items: basicTabs,
    alignment: 'center',
    height: '50px',
    navname: 'centerNav',
  },
  play: async ({ canvasElement }) => {
    mockCurrentPathname('/about')

    const canvas = within(canvasElement)
    // "About" should be selected
    const aboutTab = canvas.getByRole('tab', { name: 'About' })
    expect(aboutTab).toHaveAttribute('aria-selected', 'true')
  },
}

/**
 * 3) Tabs with left/right borders on certain items
 */
export const TabsWithBorders: Story = {
  args: {
    items: withBordersTabs,
    alignment: 'center',
    navname: 'borderNav',
  },
  play: async ({ canvasElement }) => {
    mockCurrentPathname('/two')

    const canvas = within(canvasElement)
    // "Tab Two" is selected
    const tabTwo = canvas.getByRole('tab', { name: 'Tab Two' })
    expect(tabTwo).toHaveAttribute('aria-selected', 'true')
  },
}

/**
 * 4) Mixed triggers: some route-based, some onClick
 */
export const MixedTriggers: Story = {
  args: {
    items: mixedTriggerTabs,
    alignment: 'right',
    navname: 'mixedNav',
  },
  play: async ({ canvasElement }) => {
    // We'll not set a route, so none is initially selected
    const canvas = within(canvasElement)

    // "Profile" is route => if we set mock pathname to /profile, it becomes selected
    mockCurrentPathname('/profile')

    // "Profile" should be selected
    const profileTab = canvas.getByRole('tab', { name: 'Profile' })
    expect(profileTab).toHaveAttribute('aria-selected', 'true')

    // "Settings" has onClick => let's test it
    const settingsTab = canvas.getByRole('tab', { name: 'Settings' })
    await userEvent.click(settingsTab)
    // We can't confirm the alert in the test runner, but at least no error thrown
  },
}

/**
 * 5) Interaction: switching routes
 */
export const SwitchRouteInteraction: Story = {
  args: {
    items: basicTabs,
    alignment: 'left',
    navname: 'switchNav',
  },
  play: async ({ canvasElement }) => {
    // Start with "/home"
    mockCurrentPathname('/home')
    const canvas = within(canvasElement)
    const homeTab = canvas.getByRole('tab', { name: 'Home' })
    const aboutTab = canvas.getByRole('tab', { name: 'About' })

    // "Home" is selected
    expect(homeTab).toHaveAttribute('aria-selected', 'true')

    // Click "About"
    await userEvent.click(aboutTab)
    // Now window.location.href changes to "/about"
    // If your component depends on next/navigation hooking,
    // you might not see a real re-render in Storybook,
    // but we can at least confirm that the code tries to set it.

    // Re-check the "aboutTab" if the component re-renders,
    // though in a real Next environment it might cause a full page load.
    expect(aboutTab).toHaveAttribute('aria-selected', 'true')
  },
}
