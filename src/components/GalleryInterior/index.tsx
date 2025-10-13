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
  cropMode = 'middle-crop' 
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
      {/* Background overlay */}
      <div className="gallery-interior__overlay" data-node-id="99:283" />
      
      {/* Main gallery image */}
      <div className="gallery-interior__image-container" data-node-id="99:284">
        <FigmaImage
          figmaUrl={getFigmaAsset('galleryInterior')}
          fallbackUrl="https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Museum gallery interior with classical sculptures and elegant architecture"
          className={`gallery-interior__image ${getCropClass()}`}
          onLoad={() => console.log('GalleryInterior image loaded with crop:', cropMode)}
          onError={() => console.log('GalleryInterior fallback to Unsplash')}
        />
      </div>
    </div>
  );
};

export default GalleryInterior;
