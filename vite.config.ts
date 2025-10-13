/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Development server configuration
  server: {
    port: 3000,
    open: true,
    host: true
  },

  // Build configuration
  build: {
    outDir: 'build',
    sourcemap: true,
    minify: false, // Disable minification for easier debugging
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          utils: ['zustand', 'framer-motion']
        }
      }
    }
  },

  // Path resolution
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@store': path.resolve(__dirname, './src/store')
    }
  },

  // CSS configuration
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },

  // Environment variables prefix
  envPrefix: 'REACT_APP_',

  // Preview server (for production build)
  preview: {
    port: 3000,
    open: true
  },

  // Test configuration
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: true
  }
})
