import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  text?: string;
  subtext?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  text = 'Loading...', 
  subtext 
}) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">{text}</p>
      {subtext && <p className="loading-subtext">{subtext}</p>}
    </div>
  );
};

interface SkeletonGridProps {
  count?: number;
}

// Artistic color palette for skeleton cards (matching artworkColors.ts)
const skeletonColors = [
  '#8B7355', // Warm Brown
  '#C89B4F', // Golden Ochre
  '#B8735C', // Terracotta
  '#7A8B7F', // Sage Green
  '#9B8FA5', // Soft Lavender
  '#6B7F8C', // Slate Blue
  '#4A6FA5', // Blue-Gray
  '#E67E73', // Coral
  '#E8E4DF', // Warm Ivory
];

export const SkeletonGrid: React.FC<SkeletonGridProps> = ({ count = 22 }) => {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, index) => {
        // Cycle through colors for variety
        const backgroundColor = skeletonColors[index % skeletonColors.length];
        
        return (
          <div 
            key={index} 
            className="skeleton-card"
            style={{ backgroundColor }}
          >
            <div className="skeleton-image"></div>
          </div>
        );
      })}
    </div>
  );
};

export default LoadingSpinner;

