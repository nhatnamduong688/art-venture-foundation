/**
 * LanguageToggle Component Stories
 * Design System - Molecules
 */

import type { Meta, StoryObj } from '@storybook/react';
import { LanguageToggle } from '../../../design-system/molecules/LanguageToggle';
import { useState } from 'react';

const meta = {
  title: 'Design System/Molecules/LanguageToggle',
  component: LanguageToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A language toggle component for switching between EN/VI.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LanguageToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default (EN selected)
export const Default: Story = {
  args: {
    currentLanguage: 'EN',
    onLanguageChange: (lang) => console.log('Language changed to:', lang),
  },
};

// Vietnamese selected
export const VietnameseSelected: Story = {
  args: {
    currentLanguage: 'VI',
    onLanguageChange: (lang) => console.log('Language changed to:', lang),
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [language, setLanguage] = useState<'EN' | 'VI'>('EN');
    
    return (
      <div style={{ textAlign: 'center' }}>
        <LanguageToggle
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          Current language: <strong>{language}</strong>
        </div>
      </div>
    );
  },
};

// In header context
export const InHeaderContext: Story = {
  render: () => {
    const [language, setLanguage] = useState<'EN' | 'VI'>('EN');
    
    return (
      <div style={{ 
        background: '#F2EFE7', 
        padding: '16px 24px', 
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>Header Content</div>
        <LanguageToggle
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
      </div>
    );
  },
};

