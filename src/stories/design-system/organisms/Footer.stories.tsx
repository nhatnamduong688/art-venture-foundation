/**
 * Footer Organism Stories
 * Design System - Organisms
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../../../design-system/organisms/Footer';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Design System/Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Main footer with company info, links, and social media.',
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
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default footer
export const Default: Story = {};

// With page content
export const WithPageContent: Story = {
  render: () => (
    <div>
      <div style={{ 
        minHeight: '500px', 
        padding: '40px',
        background: '#F2EFE7'
      }}>
        <h1>Page Content</h1>
        <p>This is the main content of the page.</p>
        <p>Footer appears below.</p>
      </div>
      <Footer />
    </div>
  ),
};

// Mobile view
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => (
    <div style={{ maxWidth: '375px' }}>
      <Footer />
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

