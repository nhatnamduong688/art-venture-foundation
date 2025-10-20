import React, { useState } from 'react';
import './FigmaOverlay.css';

const FigmaOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0.5);
  const [figmaUrl, setFigmaUrl] = useState('');

  return (
    <>
      {/* Control Panel */}
      <div className="figma-overlay-controls">
        <button 
          className="figma-overlay-toggle"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? '👁️ Hide' : '👁️ Show'} Figma Overlay
        </button>
        
        {isVisible && (
          <div className="figma-overlay-panel">
            <label>
              Figma Screenshot URL:
              <input 
                type="text" 
                value={figmaUrl}
                onChange={(e) => setFigmaUrl(e.target.value)}
                placeholder="Paste Figma screenshot URL"
              />
            </label>
            
            <label>
              Opacity: {opacity}
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.1"
                value={opacity}
                onChange={(e) => setOpacity(parseFloat(e.target.value))}
              />
            </label>
            
            <div className="figma-overlay-tips">
              <h4>💡 How to use:</h4>
              <ol>
                <li>Take screenshot from Figma (Export as PNG)</li>
                <li>Upload to Imgur or similar</li>
                <li>Paste URL above</li>
                <li>Adjust opacity to compare</li>
                <li>Use arrow keys to nudge position</li>
              </ol>
            </div>
          </div>
        )}
      </div>

      {/* Overlay Image */}
      {isVisible && figmaUrl && (
        <div 
          className="figma-overlay-image"
          style={{ opacity }}
        >
          <img src={figmaUrl} alt="Figma design overlay" />
        </div>
      )}
    </>
  );
};

export default FigmaOverlay;



