/**
 * Grid Calculations Utility
 * Utilities for calculating CSS Grid masonry layout with row spans
 */

// Grid configuration constants
export const GRID_CONFIG = {
  ROW_HEIGHT: 10,           // Base row unit (px)
  COLUMN_GAP: 24,           // Gap between columns (px)
  VERTICAL_SPACING: 24,     // Desired space between cards (px)
  COLUMNS_MOBILE: 1,        // 1 column on mobile
  COLUMNS_DESKTOP: 2,       // 2 columns on desktop+
  MIN_ROWS: 20,             // Minimum rows (200px)
  MAX_ROWS: 100,            // Maximum rows (1000px)
  DEFAULT_ROWS: 40,         // Default when no dimensions (400px)
} as const;

/**
 * Calculate row span for an item based on image dimensions
 * 
 * @param imageWidth - Width of the image in pixels
 * @param imageHeight - Height of the image in pixels
 * @param columnWidth - Width of the grid column in pixels
 * @returns Number of rows the item should span
 */
export function calculateRowSpan(
  imageWidth?: number | null,
  imageHeight?: number | null,
  columnWidth: number = 500
): number {
  // Fallback for missing dimensions
  if (!imageWidth || !imageHeight) {
    return GRID_CONFIG.DEFAULT_ROWS;
  }

  // Calculate aspect ratio
  const aspectRatio = imageHeight / imageWidth;
  
  // Calculate display height based on column width
  const displayHeight = columnWidth * aspectRatio;
  
  // Total card height = image height + padding-bottom (24px)
  const totalHeight = displayHeight + GRID_CONFIG.VERTICAL_SPACING;
  
  // Calculate number of rows needed
  let rowSpan = Math.ceil(totalHeight / GRID_CONFIG.ROW_HEIGHT);
  
  // Cap min/max to prevent extreme sizes
  rowSpan = Math.max(GRID_CONFIG.MIN_ROWS, Math.min(GRID_CONFIG.MAX_ROWS, rowSpan));
  
  return rowSpan;
}

/**
 * Get column width based on viewport width and breakpoints
 * 
 * @param viewportWidth - Current viewport width in pixels
 * @returns Width of a single grid column in pixels
 */
export function getColumnWidth(viewportWidth: number): number {
  const isMobile = viewportWidth < 768;
  
  if (isMobile) {
    // Mobile: Full width minus padding
    const mobilePadding = 40; // 20px each side (from --spacing-4)
    return viewportWidth - mobilePadding;
  }
  
  // Desktop: Calculate based on container and columns
  // From CSS: max-width 1064px, padding 188px each side at 1440px+
  const isWideScreen = viewportWidth >= 1440;
  
  if (isWideScreen) {
    const containerWidth = 1064; // From CSS
    return (containerWidth - GRID_CONFIG.COLUMN_GAP) / GRID_CONFIG.COLUMNS_DESKTOP;
  }
  
  // Tablet/smaller desktop: dynamic calculation
  const containerPadding = viewportWidth < 1024 ? 120 : 376; // Total horizontal padding
  const availableWidth = viewportWidth - containerPadding;
  return (availableWidth - GRID_CONFIG.COLUMN_GAP) / GRID_CONFIG.COLUMNS_DESKTOP;
}

/**
 * Precompute row spans for all artworks
 * Useful for batch processing and memoization
 * 
 * @param artworks - Array of artworks with optional dimensions
 * @param columnWidth - Width of the grid column
 * @returns Array of row span values
 */
export function computeRowSpans(
  artworks: Array<{ imageWidth?: number | null; imageHeight?: number | null }>,
  columnWidth: number
): number[] {
  return artworks.map(artwork => 
    calculateRowSpan(
      artwork.imageWidth,
      artwork.imageHeight,
      columnWidth
    )
  );
}

/**
 * Debounce helper for resize events
 * 
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

