import React, { useState, useEffect } from 'react';

interface FigmaImageProps {
  figmaUrl?: string;
  fallbackUrl: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const FigmaImage: React.FC<FigmaImageProps> = ({
  figmaUrl,
  fallbackUrl,
  alt,
  className,
  onLoad,
  onError
}) => {
  const [currentSrc, setCurrentSrc] = useState(figmaUrl || fallbackUrl);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    console.log('Figma image failed to load, using fallback:', fallbackUrl);
    setHasError(true);
    setCurrentSrc(fallbackUrl);
    onError?.();
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully:', currentSrc);
    onLoad?.();
  };

  // Reset error state when figmaUrl changes
  useEffect(() => {
    if (figmaUrl && !hasError) {
      setCurrentSrc(figmaUrl);
    }
  }, [figmaUrl, hasError]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleImageError}
      onLoad={handleImageLoad}
      crossOrigin="anonymous"
    />
  );
};

export default FigmaImage;
