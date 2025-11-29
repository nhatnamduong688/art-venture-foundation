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
  MAX_ROWS: 200,            // Maximum rows (2000px) - increased for tall portrait images
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
 * MUST MATCH CSS BREAKPOINTS IN CollectionPage.css
 * 
 * Mobile (< 768px):      padding = 16px each side (--spacing-4)
 * Tablet (768-1023px):   padding = 40px each side (--spacing-10)
 * Desktop (1024-1439px): padding = 60px each side
 * Wide (1440-1919px):    padding = 188px each side
 * Ultra (≥ 1920px):      padding = 220px each side
 * 
 * Note: max-width only applies to hero-content, NOT to grid!
 * Grid always uses full viewport width minus padding.
 * 
 * @param viewportWidth - Current viewport width in pixels
 * @returns Width of a single grid column in pixels
 */
export function getColumnWidth(viewportWidth: number): number {
  // ===== MOBILE: < 768px =====
  // CSS: padding: 40px var(--spacing-4) = 40px 16px
  // Horizontal padding: 16px × 2 = 32px
  // Columns: 1
  if (viewportWidth < 768) {
    const MOBILE_PADDING = 32; // 16px each side (--spacing-4)
    return viewportWidth - MOBILE_PADDING;
  }
  
  // ===== TABLET: 768px - 1023px =====
  // CSS: padding: 40px var(--spacing-10) = 40px 40px
  // Horizontal padding: 40px × 2 = 80px
  // Columns: 2
  if (viewportWidth < 1024) {
    const TABLET_PADDING = 80; // 40px each side (--spacing-10)
    const availableWidth = viewportWidth - TABLET_PADDING;
    return (availableWidth - GRID_CONFIG.COLUMN_GAP) / GRID_CONFIG.COLUMNS_DESKTOP;
  }
  
  // ===== DESKTOP: 1024px - 1439px =====
  // CSS: padding: 60px 60px
  // Horizontal padding: 60px × 2 = 120px
  // Columns: 2
  if (viewportWidth < 1440) {
    const DESKTOP_PADDING = 120; // 60px each side
    const availableWidth = viewportWidth - DESKTOP_PADDING;
    return (availableWidth - GRID_CONFIG.COLUMN_GAP) / GRID_CONFIG.COLUMNS_DESKTOP;
  }
  
  // ===== WIDE: 1440px - 1919px =====
  // CSS: padding: 80px 188px
  // Horizontal padding: 188px × 2 = 376px
  // Columns: 2
  if (viewportWidth < 1920) {
    const WIDE_PADDING = 376; // 188px each side
    const availableWidth = viewportWidth - WIDE_PADDING;
    return (availableWidth - GRID_CONFIG.COLUMN_GAP) / GRID_CONFIG.COLUMNS_DESKTOP;
  }
  
  // ===== ULTRA: >= 1920px =====
  // CSS: padding: 100px 220px
  // Horizontal padding: 220px × 2 = 440px
  // Columns: 2
  const ULTRA_PADDING = 440; // 220px each side
  const availableWidth = viewportWidth - ULTRA_PADDING;
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

