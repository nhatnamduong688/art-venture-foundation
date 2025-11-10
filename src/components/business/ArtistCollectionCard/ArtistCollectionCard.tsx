import React, { useState } from 'react';
import { Typography } from '../../../design-system/atoms/Typography';
import { Button } from '../../../design-system/atoms/Button';
import { Icon } from '../../../design-system/atoms/Icon';
import './ArtistCollectionCard.css';

export interface ArtistInfo {
  name: string;
  avatar: string;
  artworkCount: number;
  description: string;
}

export interface ArtworkImage {
  id: number;
  url: string;
  alt: string;
  artist: ArtistInfo; // Each artwork has its own artist info
}

export interface ArtistCollectionCardProps {
  artworks: ArtworkImage[]; // Array of artworks, each with artist info
  onDetailClick?: () => void;
  className?: string;
}

const ArtistCollectionCard: React.FC<ArtistCollectionCardProps> = ({
  artworks,
  onDetailClick,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Get current artist info based on current slide
  const currentArtist = artworks[currentSlide]?.artist;

  // Auto-advance slider every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [artworks.length]);

  return (
    <div 
      className={`artist-collection-card ${className}`}
      data-node-id="427:1643"
    >
      {/* Left: Artist Info Panel - Changes with slider */}
      <div className="artist-collection-card__info">
        <div className="artist-collection-card__header">
          {/* Avatar */}
          <div className="artist-collection-card__avatar">
            <img 
              src={currentArtist?.avatar} 
              alt={currentArtist?.name}
            />
          </div>
          
          {/* Artist Details */}
          <div className="artist-collection-card__details">
            <Typography 
              variant="body-lg" 
              weight="semibold"
              className="artist-collection-card__name"
            >
              {currentArtist?.name}
            </Typography>
            <Typography 
              variant="body-sm" 
              weight="medium"
              className="artist-collection-card__count"
            >
              {currentArtist?.artworkCount} Tác phẩm
            </Typography>
          </div>
        </div>

        {/* Description */}
        <Typography 
          variant="body-md"
          className="artist-collection-card__description"
        >
          {currentArtist?.description}
        </Typography>
      </div>

      {/* Right: Gallery Panel */}
      <div className="artist-collection-card__gallery">
        {/* Image Slider */}
        <div className="artist-collection-card__slider">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`artist-collection-card__slide ${
                index === currentSlide ? 'artist-collection-card__slide--active' : ''
              }`}
            >
              <img 
                src={artwork.url} 
                alt={artwork.alt}
              />
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="artist-collection-card__nav">
          {/* Pagination Dots - Display only (not clickable) */}
          <div className="artist-collection-card__dots">
            {artworks.map((_, index) => (
              <div
                key={index}
                className={`artist-collection-card__dot ${
                  index === currentSlide ? 'artist-collection-card__dot--active' : ''
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCollectionCard;

