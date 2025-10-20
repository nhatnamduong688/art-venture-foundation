/**
 * Input Component Stories
 * Design System - Atoms
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../../design-system/atoms/Input';
import { Icon } from '../../../design-system/atoms/Icon';

const meta = {
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible input component with label, placeholder, icons, and error states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input type',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Input size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable input',
    },
    error: {
      control: 'boolean',
      description: 'Show error state',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default input
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

// With label
export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

// With left icon
export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search artworks...',
    leftIcon: <Icon name="search" size="md" />,
  },
};

// With right icon
export const WithRightIcon: Story = {
  args: {
    label: 'Location',
    placeholder: 'Enter location',
    rightIcon: <Icon name="location" size="md" />,
  },
};

// Password input
export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
};

// Error state
export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    error: true,
    helperText: 'Please enter a valid email address',
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
    value: 'Disabled value',
  },
};

// Small size
export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small input',
  },
};

// Large size
export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large input',
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

// Form example
export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Input 
        label="Full Name" 
        placeholder="John Doe" 
      />
      <Input 
        label="Email" 
        type="email"
        placeholder="john@example.com"
        leftIcon={<Icon name="email" size="md" />}
      />
      <Input 
        label="Phone" 
        type="tel"
        placeholder="+1 (555) 000-0000"
        leftIcon={<Icon name="phone" size="md" />}
      />
      <Input 
        label="Password" 
        type="password"
        placeholder="Enter password"
      />
    </div>
  ),
};

