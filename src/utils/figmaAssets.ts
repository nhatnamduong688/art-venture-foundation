// Figma Assets - Direct links from Figma API
export const figmaAssets = {
  // Gallery Interior - Node 99:282
  galleryInterior: "https://www.figma.com/api/mcp/asset/f52ac90a-cc32-4274-b452-3e8776e908ee",
  
  // Add more Figma assets here as needed
  // Example:
  // heroBackground: "https://www.figma.com/api/mcp/asset/another-asset-id",
  // artworkImage: "https://www.figma.com/api/mcp/asset/yet-another-asset-id",
} as const;

// Helper function to get Figma asset with fallback
export const getFigmaAsset = (
  assetKey: keyof typeof figmaAssets, 
  fallbackUrl?: string
): string => {
  return figmaAssets[assetKey] || fallbackUrl || '';
};

// Type for Figma asset keys
export type FigmaAssetKey = keyof typeof figmaAssets;
