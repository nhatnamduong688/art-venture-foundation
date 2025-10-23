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

  const artworks: Artwork[] = [
    {
      id: 1,
      title: "A Village in the fog",
      artist: "NGUYEN NAM ARTIST",
      artistAvatar: "https://i.pravatar.cc/150?img=1",
      email: "nguyennam@gmail.com",
      phone: "0908111111",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien.",
      expandedContent: "Lorem ipsum dolor sit amet consectetur. Vitae sed iaculis urna posuere. Elit aliquam diam nulla id massa volutpat molestie vitae. Ipsum at mauris ornare dui. Tortor tincidunt at amet dictum. Maecenas a faucibus suscipit dignissim amet ac interdum.",
      image: "https://www.figma.com/api/mcp/asset/05c08f23-ee99-49b0-8395-cb4a12168a66",
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
      image: "https://www.figma.com/api/mcp/asset/840776cc-c612-4915-bd81-f72315101480",
      socialLinks: {
        facebook: "#",
        instagram: "#"
      }
    },
    {
      id: 3,
      title: "The body",
      artist: "VINH NGHI ARTIST",
      artistAvatar: "https://i.pravatar.cc/150?img=8",
      email: "vinhnghi@gmail.com",
      phone: "0908333333",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien.",
      expandedContent: "Lorem ipsum dolor sit amet consectetur. Vitae sed iaculis urna posuere. Elit aliquam diam nulla id massa volutpat molestie vitae. Ipsum at mauris ornare dui.",
      image: "https://www.figma.com/api/mcp/asset/ef2da4c7-8bfd-482c-b2ef-8b8559ed4895",
      socialLinks: {
        facebook: "#",
        instagram: "#"
      }
    },
    {
      id: 4,
      title: "The Portrait",
      artist: "ANH THY ARTIST",
      artistAvatar: "https://i.pravatar.cc/150?img=10",
      email: "anhthy@gmail.com",
      phone: "0908444444",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien.",
      expandedContent: "Lorem ipsum dolor sit amet consectetur. Vitae sed iaculis urna posuere. Elit aliquam diam nulla id massa volutpat molestie vitae.",
      image: "https://www.figma.com/api/mcp/asset/27944a8c-727a-4bd6-a4bc-8eac10788c59",
      socialLinks: {
        facebook: "#",
        instagram: "#"
      }
    }
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
