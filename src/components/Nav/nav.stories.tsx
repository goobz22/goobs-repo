// src/components/Nav/nav.stories.tsx

import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import Nav, { NavProps, NavItem } from './index'

// --------------------------------------------------------------------------
// Sample Data
// --------------------------------------------------------------------------

/**
 * Minimal main nav item array (with no sub-nav).
 */
const basicMainNav: NavItem[] = [
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
]

/**
 * Subnav example (with a subNav that has sub-views).
 */
const subnavItems: NavItem[] = [
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
]

// A more complex scenario combining mainNav, subNav, viewNav
const complexNavItems: NavItem[] = [
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
]

// --------------------------------------------------------------------------
// Storybook Setup
// --------------------------------------------------------------------------
const meta: Meta<typeof Nav> = {
  title: 'Components/Nav',
  component: Nav,
  parameters: {
    a11y: {
      disable: false,
    },
  },
}
export default meta

type Story = StoryObj<typeof Nav>

/**
 * 1) Basic permanent Nav
 */
export const BasicPermanent: Story = {
  name: 'Basic (Permanent)',
  args: {
    items: basicMainNav,
    showSearchableNav: false,
    showTitle: true,
    verticalNavTitle: 'Basic Nav',
    variant: 'permanent',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The title should appear
    expect(canvas.getByText('Basic Nav')).toBeInTheDocument()

    // The main nav items: "Dashboard", "Profile"
    expect(canvas.getByText('Dashboard')).toBeInTheDocument()
    expect(canvas.getByText('Profile')).toBeInTheDocument()
  },
}

/**
 * 2) Subnav Example
 */
export const WithSubNav: Story = {
  args: {
    items: subnavItems,
    showSearchableNav: false,
    showTitle: true,
    verticalNavTitle: 'Admin Nav',
    variant: 'permanent',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm top-level "Admin Section" & "Help & Support"
    expect(canvas.getByText('Admin Section')).toBeInTheDocument()
    expect(canvas.getByText('Help & Support')).toBeInTheDocument()

    // Expand "Admin Section"
    await userEvent.click(canvas.getByText('Admin Section'))
    // "User Management" and "System Logs" subNav should appear
    expect(canvas.getByText('User Management')).toBeInTheDocument()
    expect(canvas.getByText('System Logs')).toBeInTheDocument()

    // Expand "User Management"
    await userEvent.click(canvas.getByText('User Management'))
    // "View All Users" and "Create User" should appear
    expect(canvas.getByText('View All Users')).toBeInTheDocument()
    expect(canvas.getByText('Create User')).toBeInTheDocument()
  },
}

/**
 * 3) Searchable Nav
 */
export const WithSearch: Story = {
  args: {
    items: basicMainNav,
    showSearchableNav: true,
    showTitle: true,
    verticalNavTitle: 'Searchable Nav',
    variant: 'permanent',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Confirm the label text for search
    expect(canvas.getByLabelText('Search or select a nav')).toBeInTheDocument()

    // Type partial text in the search (like "Dash")
    await userEvent.type(
      canvas.getByRole('combobox', { name: /search or select a nav/i }),
      'Dash'
    )
    // "Dashboard" might appear as an option
    // The story doesn't have a real pop-up or "option" DOM for the fake search,
    // but you might test it if the dropdown renders items.
  },
}

/**
 * 4) Temporary Drawer (Mobile)
 */
export const TemporaryDrawer: Story = {
  name: 'Temporary (Mobile) Drawer',
  args: {
    items: subnavItems,
    showTitle: true,
    verticalNavTitle: 'Mobile Nav',
    variant: 'temporary',
    mobileOpen: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Check the title
    expect(canvas.getByText('Mobile Nav')).toBeInTheDocument()
    // The drawer is open, so we see "Admin Section" etc.
    expect(canvas.getByText('Admin Section')).toBeInTheDocument()
  },
}

/**
 * 5) Complex scenario
 */
export const Complex: Story = {
  name: 'Complex (With Subnav & Views + Search)',
  args: {
    items: complexNavItems,
    showSearchableNav: true,
    showTitle: true,
    verticalNavTitle: 'Complex Nav',
    variant: 'permanent',
    showLine: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Confirm we see the nav title
    expect(canvas.getByText('Complex Nav')).toBeInTheDocument()

    // Confirm top-level items
    expect(canvas.getByText('Dashboard')).toBeInTheDocument()
    expect(canvas.getByText('Projects')).toBeInTheDocument()
    expect(canvas.getByText('Settings')).toBeInTheDocument()

    // Expand "Projects"
    await userEvent.click(canvas.getByText('Projects'))
    // We see "Current", "Archived"
    expect(canvas.getByText('Current')).toBeInTheDocument()
    expect(canvas.getByText('Archived')).toBeInTheDocument()

    // Expand "Current"
    await userEvent.click(canvas.getByText('Current'))
    // Now we see "QA Testing" & "Deployment" views
    expect(canvas.getByText('QA Testing')).toBeInTheDocument()
    expect(canvas.getByText('Deployment')).toBeInTheDocument()

    // Confirm the search label is there
    expect(canvas.getByLabelText('Search or select a nav')).toBeInTheDocument()
  },
}
