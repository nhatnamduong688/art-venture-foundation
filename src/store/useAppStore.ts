/**
 * Global App Store - Enhanced Zustand Implementation
 * Centralized state management with persistence
 */

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type Language = 'en' | 'vi';
export type Theme = 'light' | 'dark';

interface AppState {
  // Language
  language: Language;
  setLanguage: (language: Language) => void;

  // Theme
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;

  // UI State
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;

  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;

  // Loading states
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        // Language
        language: 'en',
        setLanguage: (language) => set({ language }, false, 'setLanguage'),

        // Theme
        theme: 'light',
        setTheme: (theme) => set({ theme }, false, 'setTheme'),
        toggleTheme: () =>
          set(
            (state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' }),
            false,
            'toggleTheme'
          ),

        // UI State
        isSidebarOpen: true,
        toggleSidebar: () =>
          set((state) => ({ isSidebarOpen: !state.isSidebarOpen }), false, 'toggleSidebar'),
        setSidebarOpen: (open) => set({ isSidebarOpen: open }, false, 'setSidebarOpen'),

        // Search
        searchQuery: '',
        setSearchQuery: (query) => set({ searchQuery: query }, false, 'setSearchQuery'),
        clearSearch: () => set({ searchQuery: '' }, false, 'clearSearch'),

        // Loading
        isLoading: false,
        setLoading: (loading) => set({ isLoading: loading }, false, 'setLoading'),
      }),
      {
        name: 'av-app-storage',
        partialize: (state) => ({
          language: state.language,
          theme: state.theme,
        }),
      }
    ),
    { name: 'AppStore' }
  )
);

// Selectors for optimized re-renders
export const useLanguage = () => useAppStore((state) => state.language);
export const useTheme = () => useAppStore((state) => state.theme);
export const useSearchQuery = () => useAppStore((state) => state.searchQuery);
export const useIsLoading = () => useAppStore((state) => state.isLoading);

export default useAppStore;

