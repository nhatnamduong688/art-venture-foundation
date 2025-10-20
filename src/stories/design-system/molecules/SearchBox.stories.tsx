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

// Full width
export const FullWidth: Story = {
  args: {
    placeholder: 'Search...',
    fullWidth: true,
    onSearch: (value) => console.log('Search:', value),
  },
};

