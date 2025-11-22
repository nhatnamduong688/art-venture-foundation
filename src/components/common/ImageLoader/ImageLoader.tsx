import React, { useState, useEffect, useRef } from 'react';
import './ImageLoader.css';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: number; // width/height (e.g., 4/3 = 1.333)
  blurSrc?: string; // Optional tiny blur placeholder
  onLoad?: () => void;
  onError?: () => void;
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 4 / 3,
  blurSrc,
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
      style={{ paddingBottom }}
    >
      {/* Placeholder shimmer */}
      {!isLoaded && !isError && <div className="image-loader__placeholder" />}

      {/* Blur placeholder (if provided) */}
      {blurSrc && !isLoaded && (
        <img
          src={blurSrc}
          alt=""
          className={`image-loader__blur ${isLoaded ? 'loaded' : ''}`}
          aria-hidden="true"
        />
      )}

      {/* Loading spinner */}
      {!isLoaded && !isError && isInView && (
        <div className={`image-loader__spinner ${isLoaded ? 'hidden' : ''}`} />
      )}

      {/* Main image */}
      {isInView && !isError && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`image-loader__img ${isLoaded ? 'loaded' : ''}`}
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

