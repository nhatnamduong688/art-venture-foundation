/**
 * Design System - Tokens Index
 * Central export for all design tokens
 */

// Export all tokens (but not getCSSVariables to avoid conflicts)
export { colors } from './colors';
export type { ColorToken } from './colors';

export { typography } from './typography';
export type { TypographyToken } from './typography';

export { spacing, semanticSpacing } from './spacing';
export type { SpacingToken, SemanticSpacingToken } from './spacing';

export { breakpoints, mediaQuery } from './breakpoints';
export type { BreakpointToken } from './breakpoints';

import { getCSSVariables as getColorVars } from './colors';
import { getCSSVariables as getTypographyVars } from './typography';
import { getCSSVariables as getSpacingVars } from './spacing';
import { getCSSVariables as getBreakpointVars } from './breakpoints';

/**
 * Generate all CSS custom properties from design tokens
 * Use this in your index.css or root component
 */
export const generateAllCSSVariables = () => {
  return {
    ...getColorVars(),
    ...getTypographyVars(),
    ...getSpacingVars(),
    ...getBreakpointVars(),
  };
};

