/**
 * Header Organism Stories
 * Design System - Organisms
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../../../design-system/organisms/Header';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Design System/Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Main navigation header with menu, search, language toggle, and shop link.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default header
export const Default: Story = {};

// With page content
export const WithPageContent: Story = {
  render: () => (
    <div>
      <Header />
      <div style={{ 
        marginTop: '114px', 
        marginLeft: '129px', 
        padding: '40px',
        minHeight: '500px'
      }}>
        <h1>Page Content</h1>
        <p>The header is fixed at the top with proper spacing.</p>
        <p>Content starts below the header (114px) and to the right of sidebar (129px).</p>
      </div>
    </div>
  ),
};

// Mobile view (simulated)
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => (
    <div style={{ maxWidth: '375px' }}>
      <Header />
      <div style={{ marginTop: '60px', padding: '20px' }}>
        <h2>Mobile View</h2>
        <p>Header adapts to mobile screen size.</p>
      </div>
    </div>
  ),
};

// Tablet view
export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

