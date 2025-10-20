/**
 * Card Component Stories
 * Design System - Molecules
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../../design-system/molecules/Card';
import { Typography } from '../../../design-system/atoms/Typography';
import { Button } from '../../../design-system/atoms/Button';
import { Icon } from '../../../design-system/atoms/Icon';

const meta = {
  title: 'Design System/Molecules/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible card component with composition pattern (Header, Body, Footer, Image).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated', 'museum'],
      description: 'Card visual style',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Card padding',
    },
    hoverable: {
      control: 'boolean',
      description: 'Add hover effect',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic card
export const Default: Story = {
  args: {
    children: (
      <>
        <Typography variant="h3">Card Title</Typography>
        <Typography variant="body-md">
          This is a basic card with some content inside.
        </Typography>
      </>
    ),
  },
};

// Card with composition
export const WithComposition: Story = {
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <Card.Image
        src="https://images.unsplash.com/photo-1541961017774-22349e4a1262"
        alt="Museum"
        aspectRatio="16/9"
      />
      <Card.Header>
        <Typography variant="h3">Museum Exhibition</Typography>
      </Card.Header>
      <Card.Body>
        <Typography variant="body-md">
          Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum.
        </Typography>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" size="sm" rightIcon={<Icon name="arrow-right" />}>
          View Details
        </Button>
      </Card.Footer>
    </Card>
  ),
};

// Outlined variant
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <>
        <Typography variant="h3">Outlined Card</Typography>
        <Typography variant="body-md">
          This card has an outlined style.
        </Typography>
      </>
    ),
  },
};

// Elevated variant
export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <Typography variant="h3">Elevated Card</Typography>
        <Typography variant="body-md">
          This card has a shadow effect.
        </Typography>
      </>
    ),
  },
};

// Hoverable card
export const Hoverable: Story = {
  args: {
    variant: 'elevated',
    hoverable: true,
    children: (
      <>
        <Typography variant="h3">Hoverable Card</Typography>
        <Typography variant="body-md">
          Hover over this card to see the effect.
        </Typography>
      </>
    ),
  },
};

// Different padding
export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <img 
        src="https://images.unsplash.com/photo-1541961017774-22349e4a1262" 
        alt="Museum"
        style={{ width: '100%', height: 'auto' }}
      />
    ),
  },
};

// Image with different aspect ratios
export const ImageAspectRatios: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
      <Card padding="none">
        <Card.Image
          src="https://images.unsplash.com/photo-1541961017774-22349e4a1262"
          alt="16:9"
          aspectRatio="16/9"
        />
        <div style={{ padding: '16px' }}>
          <Typography variant="caption">16:9</Typography>
        </div>
      </Card>
      <Card padding="none">
        <Card.Image
          src="https://images.unsplash.com/photo-1541961017774-22349e4a1262"
          alt="4:3"
          aspectRatio="4/3"
        />
        <div style={{ padding: '16px' }}>
          <Typography variant="caption">4:3</Typography>
        </div>
      </Card>
      <Card padding="none">
        <Card.Image
          src="https://images.unsplash.com/photo-1541961017774-22349e4a1262"
          alt="1:1"
          aspectRatio="1/1"
        />
        <div style={{ padding: '16px' }}>
          <Typography variant="caption">1:1</Typography>
        </div>
      </Card>
    </div>
  ),
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '800px' }}>
      <Card variant="default">
        <Typography variant="h4">Default</Typography>
        <Typography variant="body-sm">Default card style</Typography>
      </Card>
      <Card variant="outlined">
        <Typography variant="h4">Outlined</Typography>
        <Typography variant="body-sm">Outlined card style</Typography>
      </Card>
      <Card variant="elevated">
        <Typography variant="h4">Elevated</Typography>
        <Typography variant="body-sm">Elevated card style</Typography>
      </Card>
      <Card variant="museum">
        <Typography variant="h4">Museum</Typography>
        <Typography variant="body-sm">Museum card style</Typography>
      </Card>
    </div>
  ),
};

