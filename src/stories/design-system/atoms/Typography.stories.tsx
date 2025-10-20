/**
 * Typography Component Stories
 * Design System - Atoms
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../../design-system/atoms/Typography';

const meta = {
  title: 'Design System/Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A typography component for consistent text styling across the application.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['display-xl', 'display-lg', 'display-md', 'display-sm', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body-xl', 'body-lg', 'body-md', 'body-sm', 'body-xs'],
      description: 'Typography variant',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'burgundy', 'inverse'],
      description: 'Text color',
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// Display variants
export const DisplayXL: Story = {
  args: {
    variant: 'display-xl',
    children: 'Display XL - Art & Venture Foundation',
  },
};

export const DisplayLG: Story = {
  args: {
    variant: 'display-lg',
    children: 'Display LG - Art & Venture Art Collection',
  },
};

// Headings
export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1 - Main Title',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2 - Section Title',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3 - Subsection Title',
  },
};

// Body text
export const BodyLarge: Story = {
  args: {
    variant: 'body-lg',
    children: 'Body Large - Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum.',
  },
};

export const BodyMedium: Story = {
  args: {
    variant: 'body-md',
    children: 'Body Medium - Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor.',
  },
};

export const BodySmall: Story = {
  args: {
    variant: 'body-sm',
    children: 'Body Small - Lorem ipsum dolor sit amet consectetur.',
  },
};

// Body Extra Small
export const BodyExtraSmall: Story = {
  args: {
    variant: 'body-xs',
    children: 'Body Extra Small - Additional information',
  },
};

// Colors
export const BurgundyColor: Story = {
  args: {
    variant: 'h2',
    color: 'burgundy',
    children: 'Burgundy Color Text',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="display-xl">Display XL</Typography>
      <Typography variant="display-lg">Display LG</Typography>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="body-lg">Body Large</Typography>
      <Typography variant="body-md">Body Medium</Typography>
      <Typography variant="body-sm">Body Small</Typography>
      <Typography variant="body-xs">Body Extra Small</Typography>
    </div>
  ),
};

// All colors showcase
export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h3" color="primary">Primary Color</Typography>
      <Typography variant="h3" color="secondary">Secondary Color</Typography>
      <Typography variant="h3" color="tertiary">Tertiary Color</Typography>
      <Typography variant="h3" color="burgundy">Burgundy Color</Typography>
      <div style={{ background: '#2E2E2E', padding: '16px' }}>
        <Typography variant="h3" color="inverse">Inverse Color (Light on Dark)</Typography>
      </div>
    </div>
  ),
};

