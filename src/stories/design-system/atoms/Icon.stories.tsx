/**
 * Icon Component Stories
 * Design System - Atoms
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Icon, type IconName } from '../../../design-system/atoms/Icon';

const meta = {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A centralized SVG icon system with 19 built-in icons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'search', 'arrow-right', 'menu', 'close', 'chevron-down', 'chevron-up',
        'chevron-left', 'chevron-right', 'heart', 'share', 'cart', 'user',
        'calendar', 'location', 'phone', 'email', 'facebook', 'instagram', 'twitter'
      ],
      description: 'Icon name',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Icon size',
    },
    color: {
      control: 'color',
      description: 'Icon color',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default icon
export const Default: Story = {
  args: {
    name: 'search',
    size: 'md',
  },
};

// Arrow right
export const ArrowRight: Story = {
  args: {
    name: 'arrow-right',
    size: 'lg',
  },
};

// With custom color
export const CustomColor: Story = {
  args: {
    name: 'heart',
    size: 'lg',
    color: '#6B2128',
  },
};

// All sizes
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon name="search" size="xs" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>XS</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="search" size="sm" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>SM</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="search" size="md" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>MD</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="search" size="lg" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>LG</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="search" size="xl" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>XL</div>
      </div>
    </div>
  ),
};

// All icons showcase
export const AllIcons: Story = {
  render: () => {
    const icons: IconName[] = [
      'search', 'arrow-right', 'menu', 'close', 
      'chevron-down', 'chevron-up', 'chevron-left', 'chevron-right',
      'heart', 'share', 'cart', 'user',
      'calendar', 'location', 'phone', 'email',
      'facebook', 'instagram', 'twitter'
    ];

    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '24px',
        maxWidth: '800px'
      }}>
        {icons.map((iconName) => (
          <div key={iconName} style={{ 
            textAlign: 'center',
            padding: '16px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px'
          }}>
            <Icon name={iconName} size="lg" />
            <div style={{ marginTop: '8px', fontSize: '11px', wordBreak: 'break-word' }}>
              {iconName}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

// Navigation icons
export const NavigationIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Icon name="arrow-right" size="lg" />
      <Icon name="chevron-left" size="lg" />
      <Icon name="chevron-right" size="lg" />
      <Icon name="chevron-up" size="lg" />
      <Icon name="chevron-down" size="lg" />
      <Icon name="menu" size="lg" />
      <Icon name="close" size="lg" />
    </div>
  ),
};

// Action icons
export const ActionIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Icon name="search" size="lg" />
      <Icon name="heart" size="lg" />
      <Icon name="share" size="lg" />
      <Icon name="cart" size="lg" />
      <Icon name="user" size="lg" />
    </div>
  ),
};

// Social icons
export const SocialIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Icon name="facebook" size="lg" />
      <Icon name="instagram" size="lg" />
      <Icon name="twitter" size="lg" />
    </div>
  ),
};

