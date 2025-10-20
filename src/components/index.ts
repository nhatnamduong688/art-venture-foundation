/**
 * Components Main Export
 * Central export point for all application components
 * 
 * Structure:
 * - sections/   - Page sections using Design System
 * - business/   - Business-specific components
 * - utils/      - Utility components
 * - __tests__/  - Test components
 */

// Page Sections (migrated to Design System)
export * from './sections';

// Business Components
export * from './business';

// Utility Components
export * from './utils';

// Test Components (use sparingly in production)
export * from './__tests__';

