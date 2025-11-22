import React, { useState, useEffect, useRef } from 'react';
import './ImageLoader.css';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: number; // width/height (e.g., 4/3 = 1.333)
  blurSrc?: string; // Optional tiny blur placeholder
  backgroundColor?: string; // Optional dominant/fallback color (Phase 1)
  showSpinner?: boolean; // Show loading spinner (default: false for artistic look)
  transitionDuration?: number; // Fade transition duration in ms (default: 500)
  onLoad?: () => void;
  onError?: () => void;
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 4 / 3,
  blurSrc,
  backgroundColor = '#e8e4df', // Warm neutral default for art
  showSpinner = false, // Default false for cleaner artistic look
  transitionDuration = 500,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setIsError(true);
    onError?.();
  };

  const paddingBottom = `${(1 / aspectRatio) * 100}%`;

  return (
    <div
      ref={containerRef}
      className={`image-loader ${className}`}
      style={{ 
        paddingBottom,
        backgroundColor: !isLoaded ? backgroundColor : 'transparent',
        transition: `background-color ${transitionDuration}ms ease-out`
      }}
    >
      {/* Dominant color background - shows instantly */}
      {!isLoaded && !isError && (
        <div 
          className="image-loader__color-bg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor,
            transition: `opacity ${transitionDuration}ms ease-out`,
            opacity: isLoaded ? 0 : 1
          }}
        />
      )}

      {/* Blur placeholder (if provided) */}
      {blurSrc && !isLoaded && (
        <img
          src={blurSrc}
          alt=""
          className={`image-loader__blur ${isLoaded ? 'loaded' : ''}`}
          aria-hidden="true"
        />
      )}

      {/* Loading spinner - only if enabled */}
      {showSpinner && !isLoaded && !isError && isInView && (
        <div className={`image-loader__spinner ${isLoaded ? 'hidden' : ''}`} />
      )}

      {/* Main image */}
      {isInView && !isError && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`image-loader__img ${isLoaded ? 'loaded' : ''}`}
          style={{
            transition: `opacity ${transitionDuration}ms ease-in`
          }}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
        />
      )}

      {/* Error state */}
      {isError && (
        <div className="image-loader__error">
          <div className="image-loader__error-icon">🖼️</div>
          <div>Image not available</div>
        </div>
      )}
    </div>
  );
};

export default ImageLoader;

