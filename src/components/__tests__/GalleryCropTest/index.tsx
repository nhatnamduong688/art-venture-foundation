import React, { useState } from 'react';
import GalleryInterior from '../../sections/GalleryInterior';
import './GalleryCropTest.css';

type CropMode = 'figma-exact' | 'center-crop' | 'top-crop' | 'middle-crop';

const GalleryCropTest: React.FC = () => {
  const [currentCrop, setCurrentCrop] = useState<CropMode>('middle-crop');

  const cropModes: { mode: CropMode; label: string; description: string }[] = [
    {
      mode: 'figma-exact',
      label: 'Figma Exact',
      description: 'Exact positioning from Figma (77.33% height, positioned at 2.91% from top)'
    },
    {
      mode: 'center-crop',
      label: 'Center Crop',
      description: 'Standard center focus, shows middle of image'
    },
    {
      mode: 'top-crop',
      label: 'Top Crop',
      description: 'Focus on upper portion, crops bottom 30%'
    },
    {
      mode: 'middle-crop',
      label: 'Middle Crop',
      description: 'Focus on middle portion, crops top 10% and bottom 20%'
    }
  ];

  return (
    <div className="gallery-crop-test">
      {/* Controls */}
      <div className="crop-controls">
        <h2>Gallery Interior Crop Test</h2>
        <p>Test different crop modes to match Figma design:</p>
        
        <div className="crop-buttons">
          {cropModes.map(({ mode, label, description }) => (
            <button
              key={mode}
              className={`crop-button ${currentCrop === mode ? 'active' : ''}`}
              onClick={() => setCurrentCrop(mode)}
              title={description}
            >
              {label}
            </button>
          ))}
        </div>
        
        <div className="current-crop-info">
          <strong>Current: {cropModes.find(m => m.mode === currentCrop)?.label}</strong>
          <p>{cropModes.find(m => m.mode === currentCrop)?.description}</p>
        </div>
      </div>

      {/* Gallery with selected crop */}
      <div className="gallery-preview">
        <GalleryInterior cropMode={currentCrop} />
      </div>
    </div>
  );
};

export default GalleryCropTest;
