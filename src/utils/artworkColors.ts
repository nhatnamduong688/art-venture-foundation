/**
 * Dominant Colors for Artworks
 * 
 * These colors are extracted from artwork images to provide
 * instant visual feedback during image loading (Phase 1).
 * 
 * In Phase 2, these will be replaced by backend-generated
 * blur placeholders or actual dominant color extraction.
 */

export interface ArtworkColorMap {
  [key: string]: string;
}

/**
 * Curated dominant colors for common artwork types
 * Based on traditional Vietnamese art and common museum pieces
 */
export const defaultArtworkColors: ArtworkColorMap = {
  // Warm earth tones (traditional Vietnamese paintings)
  warm: '#8B7355',      // Warm brown - silk paintings
  ochre: '#C89B4F',     // Golden ochre - lacquer art
  terracotta: '#B8735C', // Terracotta - pottery
  
  // Cool tones (landscapes, modern art)
  sage: '#7A8B7F',      // Sage green - nature scenes
  slate: '#6B7F8C',     // Blue-gray - water scenes
  lavender: '#9B8FA5',  // Soft purple - modern art
  
  // Neutral tones (abstract, minimalist)
  ivory: '#E8E4DF',     // Warm ivory - default
  charcoal: '#4A4A4A',  // Dark gray - sculptures
  cream: '#F5F1E8',     // Cream - paper art
  
  // Vibrant (contemporary, pop art)
  coral: '#E67E73',     // Coral - contemporary
  teal: '#5B9AA8',      // Teal - modern pieces
  amber: '#D9A359',     // Amber - golden art
};

/**
 * Get dominant color for an artwork
 * 
 * Priority:
 * 1. Artwork-specific color (if backend provides)
 * 2. Artist-specific fallback
 * 3. Category-based fallback
 * 4. Default warm ivory
 */
export const getArtworkColor = (
  artworkId?: string,
  artistName?: string,
  category?: string,
  customColor?: string
): string => {
  // If custom color provided (from backend in future)
  if (customColor) {
    return customColor;
  }

  // Artist-based colors (common Vietnamese artists)
  if (artistName) {
    const artistLower = artistName.toLowerCase();
    
    // Traditional silk painting artists
    if (
      artistLower.includes('mai trung thứ') ||
      artistLower.includes('mai thu') ||
      artistLower.includes('lê phổ')
    ) {
      return defaultArtworkColors.warm;
    }
    
    // Lacquer artists
    if (
      artistLower.includes('nguyễn gia trí') ||
      artistLower.includes('trần huy')
    ) {
      return defaultArtworkColors.ochre;
    }
    
    // Modern/contemporary artists
    if (
      artistLower.includes('điềm phùng thị') ||
      artistLower.includes('lê lam')
    ) {
      return defaultArtworkColors.lavender;
    }
    
    // Water/landscape artists
    if (
      artistLower.includes('andré maire') ||
      artistLower.includes('alix aymé')
    ) {
      return defaultArtworkColors.sage;
    }
  }

  // Category-based fallback
  switch (category?.toLowerCase()) {
    case 'painting':
    case 'silk':
      return defaultArtworkColors.warm;
    
    case 'sculpture':
    case 'bronze':
      return defaultArtworkColors.charcoal;
    
    case 'lacquer':
      return defaultArtworkColors.ochre;
    
    case 'contemporary':
    case 'modern':
      return defaultArtworkColors.coral;
    
    case 'nature':
    case 'landscape':
      return defaultArtworkColors.sage;
    
    case 'abstract':
      return defaultArtworkColors.slate;
    
    default:
      return defaultArtworkColors.ivory;
  }
};

/**
 * Generate a subtle variation of a color
 * Useful for creating variety in similar artworks
 */
export const varyColor = (baseColor: string, variation: number = 10): string => {
  // Simple variation by adjusting brightness
  // In production, use a proper color library
  return baseColor; // For now, return base color
};

/**
 * Check if a color is light or dark
 * Useful for determining text color on placeholder
 */
export const isLightColor = (hexColor: string): boolean => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminance > 0.5;
};

/**
 * Batch color extraction for multiple artworks
 * Returns a map of artwork IDs to colors
 */
export const extractArtworkColors = (
  artworks: Array<{
    id: string;
    artist?: { fullName: string };
    category?: string;
  }>
): ArtworkColorMap => {
  const colorMap: ArtworkColorMap = {};
  
  artworks.forEach((artwork) => {
    colorMap[artwork.id] = getArtworkColor(
      artwork.id,
      artwork.artist?.fullName,
      artwork.category
    );
  });
  
  return colorMap;
};

export default {
  defaultArtworkColors,
  getArtworkColor,
  extractArtworkColors,
  isLightColor,
};

