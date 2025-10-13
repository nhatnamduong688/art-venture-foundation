import React from 'react';
import './GalleryInterior.css';

interface GalleryInteriorProps {
  className?: string;
}

const GalleryInterior: React.FC<GalleryInteriorProps> = ({ className = '' }) => {
  return (
    <div className={`gallery-interior ${className}`} data-node-id="99:282">
      {/* Background overlay */}
      <div className="gallery-interior__overlay" data-node-id="99:283" />
      
      {/* Main gallery image */}
      <div className="gallery-interior__image-container" data-node-id="99:284">
        <img 
          src="https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Museum gallery interior with classical sculptures and elegant architecture"
          className="gallery-interior__image"
        />
      </div>
    </div>
  );
};

export default GalleryInterior;
