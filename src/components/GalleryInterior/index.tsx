/**
 * GalleryInterior Component - Migrated to Design System
 * Background gallery image component
 */

import React from 'react';
import './GalleryInterior.css';
import { getFigmaAsset } from '../../utils/figmaAssets';
import FigmaImage from '../FigmaImage';

interface GalleryInteriorProps {
  className?: string;
  cropMode?: 'figma-exact' | 'center-crop' | 'top-crop' | 'middle-crop';
}

const GalleryInterior: React.FC<GalleryInteriorProps> = ({ 
  className = '', 
  cropMode = 'figma-exact' 
}) => {
  
  const getCropClass = () => {
    switch (cropMode) {
      case 'figma-exact':
        return 'gallery-interior__image--figma-exact';
      case 'center-crop':
        return 'gallery-interior__image--center-crop';
      case 'top-crop':
        return 'gallery-interior__image--top-crop';
      case 'middle-crop':
      default:
        return 'gallery-interior__image--middle-crop';
    }
  };
  return (
    <div className={`gallery-interior ${className}`} data-node-id="99:282">
      {/* Background overlay - 995x851px at top: -24px */}
      <div className="gallery-interior__overlay" data-node-id="99:283" />
      
      {/* Main gallery image - 1311x1968px at top: -532px */}
      <div className="gallery-interior__image-container" data-node-id="99:284">
        <FigmaImage
          figmaUrl="https://www.figma.com/api/mcp/asset/6f23b1ef-4cbc-4685-8318-f3066aa66577"
          fallbackUrl="https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Museum gallery interior with classical sculptures and elegant architecture"
          className={`gallery-interior__image ${getCropClass()}`}
        />
      </div>
    </div>
  );
};

export default GalleryInterior;
