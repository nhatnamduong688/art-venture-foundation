/**
 * ArtCollection Component - Migrated to Design System
 * Using Typography, Button, Icon, and Card from design system
 */

import React, { useRef, useState } from 'react';
import { Typography } from '../../../design-system/atoms/Typography';
import { Button } from '../../../design-system/atoms/Button';
import { Icon } from '../../../design-system/atoms/Icon';
import { Card } from '../../../design-system/molecules/Card';
import { ContentModal } from '../../business';
import './ArtCollection.css';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  artistAvatar: string;
  email: string;
  phone: string;
  description: string;
  expandedContent: string;
  image: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
  };
}

const ArtCollection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 564; // 564px card width
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtwork(null);
  };

  // Base artworks - 2 images available locally
  const baseArtworks: Artwork[] = [
    {
      id: 1,
      title: "A Village in the fog",
      artist: "NGUYEN NAM ARTIST",
      artistAvatar: "https://i.pravatar.cc/150?img=1",
      email: "nguyennam@gmail.com",
      phone: "0908111111",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien.",
      expandedContent: "Lorem ipsum dolor sit amet consectetur. Vitae sed iaculis urna posuere. Elit aliquam diam nulla id massa volutpat molestie vitae. Ipsum at mauris ornare dui. Tortor tincidunt at amet dictum. Maecenas a faucibus suscipit dignissim amet ac interdum.",
      image: "/images/art-collection/village-in-fog.jpg",
      socialLinks: {
        facebook: "#",
        instagram: "#"
      }
    },
    {
      id: 2,
      title: "A Road in the rain",
      artist: "HA VY ARTIST",
      artistAvatar: "https://i.pravatar.cc/150?img=5",
      email: "havy@gmail.com",
      phone: "0908222222",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien.",
      expandedContent: "Lorem ipsum dolor sit amet consectetur. Vitae sed iaculis urna posuere. Elit aliquam diam nulla id massa volutpat molestie vitae. Ipsum at mauris ornare dui. Tortor tincidunt at amet dictum.",
      image: "/images/art-collection/road-in-rain.jpg",
      socialLinks: {
        facebook: "#",
        instagram: "#"
      }
    }
  ];

  // Repeat the 2 images to create scrollable list (2 images x 4 times = 8 cards)
  const artworks: Artwork[] = [
    ...baseArtworks,
    ...baseArtworks.map(art => ({ ...art, id: art.id + 2 })),
    ...baseArtworks.map(art => ({ ...art, id: art.id + 4 })),
    ...baseArtworks.map(art => ({ ...art, id: art.id + 6 }))
  ];

  return (
    <section className="art-collection section">

      <div className="container">
        {/* Title and Description above header */}
        <div className="art-collection__intro">
          <Typography variant="display-lg" as="h2" className="art-collection__title">
            Art & Venture Art Collection
          </Typography>
          <Typography variant="body-md" className="art-collection__description">
            {/*Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor.*/}
          </Typography>
        </div>

        {/* Slider */}
        <div className="art-collection__grid" ref={scrollContainerRef}>
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="artwork-card"
              onClick={() => handleArtworkClick(artwork)}
              style={{ cursor: 'pointer' }}
            >
              <Card className="artwork-card__container">
                <Card.Image
                  src={artwork.image}
                  alt={artwork.title}
                  aspectRatio="4/3"
                  className="artwork-card__image"
                />
                <div className="artwork-card__overlay">
                  <div className="artwork-card__content">
                    <div className="artwork-card__header">
                      <div className="artwork-card__avatar">
                        <img
                          src={artwork.artistAvatar}
                          alt="Artist avatar"
                          className="artwork-card__avatar-img"
                        />
                      </div>
                      <Typography variant="body-sm" weight="semibold" className="artwork-card__artist">
                        {artwork.artist}
                      </Typography>
                      <button className="artwork-card__icon" aria-label="More options">
                        <Icon name="menu" size="md" />
                      </button>
                    </div>
                    <div className="artwork-card__text">
                      <Typography variant="h4" as="h4" className="artwork-card__title">
                        {artwork.title}
                      </Typography>
                      <Typography variant="body-sm" className="artwork-card__description">
                        {artwork.description}
                      </Typography>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Figma spec: VIEW ALL + Navigation buttons */}
        <div className="art-collection__footer">
          <Button variant="primary" size="md" rightIcon={<Icon name="arrow-right" size="lg" />}>
            VIEW ALL
          </Button>

          <div className="art-collection__navigation">
            <button
              className="art-collection__nav-button"
              onClick={() => scroll('left')}
              aria-label="Previous"
            >
              <Icon name="chevron-left" size="lg" />
            </button>
            <button
              className="art-collection__nav-button"
              onClick={() => scroll('right')}
              aria-label="Next"
            >
              <Icon name="chevron-right" size="lg" />
            </button>
          </div>
        </div>

      </div>

      {/* Dark Modal for Artwork Details */}
      {selectedArtwork && (
        <ContentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          variant="dark"
          size="medium"
          type="artwork"
          imageUrl={selectedArtwork.image}
          title={selectedArtwork.title}
          description={selectedArtwork.description}
          expandedContent={selectedArtwork.expandedContent}
          showAuthorCard={true}
          authorData={{
            avatar: selectedArtwork.artistAvatar,
            name: selectedArtwork.artist,
            email: selectedArtwork.email,
            phone: selectedArtwork.phone,
            socialLinks: selectedArtwork.socialLinks
          }}
        />
      )}
    </section>
  );
};

export default ArtCollection;
