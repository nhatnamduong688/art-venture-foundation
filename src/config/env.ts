/**
 * Environment Configuration
 * Centralized environment variables and configuration
 */

// Get environment variable with fallback
const getEnvVar = (key: string, defaultValue: string = ''): string => {
  if (typeof import.meta !== 'undefined' && (import.meta as any).env) {
    return (import.meta as any).env[key] || defaultValue;
  }
  return defaultValue;
};

export const env = {
  // App Info
  appName: 'Art & Venture Foundation',
  appVersion: '1.0.0',

  // Environment
  isDevelopment: getEnvVar('MODE') === 'development',
  isProduction: getEnvVar('MODE') === 'production',
  isTest: getEnvVar('MODE') === 'test',

  // API Configuration
  apiUrl: getEnvVar('VITE_API_URL', 'http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com'),
  apiTimeout: parseInt(getEnvVar('VITE_API_TIMEOUT', '10000'), 10),
  
  // Image base URL (same as API URL for this project)
  imageBaseUrl: getEnvVar('VITE_IMAGE_BASE_URL', 'http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com'),

  // Feature Flags
  features: {
    enableSearch: getEnvVar('VITE_ENABLE_SEARCH', 'true') === 'true',
    enableLanguageSwitch: getEnvVar('VITE_ENABLE_LANGUAGE_SWITCH', 'true') === 'true',
    enableDarkMode: getEnvVar('VITE_ENABLE_DARK_MODE', 'false') === 'true',
    enableAnalytics: getEnvVar('VITE_ENABLE_ANALYTICS', 'false') === 'true',
  },

  // Analytics
  analytics: {
    googleAnalyticsId: getEnvVar('VITE_GA_ID', ''),
  },

  // Social Links
  social: {
    facebook: 'https://facebook.com/artventurefoundation',
    instagram: 'https://instagram.com/artventurefoundation',
    twitter: 'https://twitter.com/artventurefnd',
  },

  // Contact
  contact: {
    email: 'info@artventurefoundation.org',
    phone: '+84 123 456 789',
    address: 'Ho Chi Minh City, Vietnam',
  },
} as const;

export type EnvConfig = typeof env;

export default env;

