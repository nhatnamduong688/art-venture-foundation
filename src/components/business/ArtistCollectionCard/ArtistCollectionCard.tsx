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
}

export interface ArtistCollectionCardProps {
  artist: ArtistInfo;
  artworks: ArtworkImage[];
  onDetailClick?: () => void;
  className?: string;
}

const ArtistCollectionCard: React.FC<ArtistCollectionCardProps> = ({
  artist,
  artworks,
  onDetailClick,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      className={`artist-collection-card ${className}`}
      data-node-id="427:1643"
    >
      {/* Left: Artist Info Panel */}
      <div className="artist-collection-card__info">
        <div className="artist-collection-card__header">
          {/* Avatar */}
          <div className="artist-collection-card__avatar">
            <img 
              src={artist.avatar} 
              alt={artist.name}
            />
          </div>
          
          {/* Artist Details */}
          <div className="artist-collection-card__details">
            <Typography 
              variant="body-lg" 
              weight="semibold"
              className="artist-collection-card__name"
            >
              {artist.name}
            </Typography>
            <Typography 
              variant="body-sm" 
              weight="medium"
              className="artist-collection-card__count"
            >
              {artist.artworkCount} Tác phẩm
            </Typography>
          </div>
        </div>

        {/* Description */}
        <Typography 
          variant="body-md"
          className="artist-collection-card__description"
        >
          {artist.description}
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
          {/* Navigation Buttons (Optional - can be invisible) */}
          <button
            className="artist-collection-card__nav-btn artist-collection-card__nav-btn--prev"
            onClick={handlePrevSlide}
            aria-label="Previous artwork"
          >
            <Icon name="chevron-left" size="md" />
          </button>
          
          <button
            className="artist-collection-card__nav-btn artist-collection-card__nav-btn--next"
            onClick={handleNextSlide}
            aria-label="Next artwork"
          >
            <Icon name="chevron-right" size="md" />
          </button>

          {/* Pagination Dots */}
          <div className="artist-collection-card__dots">
            {artworks.map((_, index) => (
              <button
                key={index}
                className={`artist-collection-card__dot ${
                  index === currentSlide ? 'artist-collection-card__dot--active' : ''
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCollectionCard;

