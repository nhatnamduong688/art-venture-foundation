/**
 * SearchBox Component Stories
 * Design System - Molecules
 */

import type { Meta, StoryObj } from '@storybook/react';
import { SearchBox } from '../../../design-system/molecules/SearchBox';
import { useState } from 'react';

const meta = {
  title: 'Design System/Molecules/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A search box component with integrated search icon and functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'SearchBox size',
    },
  },
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
  args: {
    placeholder: 'Search...',
    onSearch: (value) => console.log('Search:', value),
  },
};

// Custom placeholder
export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Search artworks, artists, events...',
    onSearch: (value) => console.log('Search:', value),
  },
};

// Small size
export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Search...',
    onSearch: (value) => console.log('Search:', value),
  },
};

// Large size
export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Search...',
    onSearch: (value) => console.log('Search:', value),
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState<string[]>([]);

    const handleSearch = (value: string) => {
      setSearchValue(value);
      // Simulate search results
      if (value.length > 2) {
        setResults([
          `Result 1 for "${value}"`,
          `Result 2 for "${value}"`,
          `Result 3 for "${value}"`,
        ]);
      } else {
        setResults([]);
      }
    };

    return (
      <div style={{ maxWidth: '600px' }}>
        <SearchBox
          placeholder="Search artworks..."
          onSearch={handleSearch}
        />
        {results.length > 0 && (
          <div style={{ 
            marginTop: '16px', 
            padding: '16px', 
            background: '#f5f5f5',
            borderRadius: '8px'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
              Search Results:
            </div>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Small</div>
        <SearchBox size="sm" placeholder="Search..." onSearch={console.log} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Medium</div>
        <SearchBox size="md" placeholder="Search..." onSearch={console.log} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Large</div>
        <SearchBox size="lg" placeholder="Search..." onSearch={console.log} />
      </div>
    </div>
  ),
};

