/**
 * ArtCollection Component - Migrated to Design System
 * Using Typography, Button, Icon, and Card from design system
 */

import React, { useRef } from 'react';
import { Typography } from '../../../design-system/atoms/Typography';
import { Button } from '../../../design-system/atoms/Button';
import { Icon } from '../../../design-system/atoms/Icon';
import { Card } from '../../../design-system/molecules/Card';
import './ArtCollection.css';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  description: string;
  image: string;
}

const ArtCollection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const artworks: Artwork[] = [
    {
      id: 1,
      title: "A Village in the fog",
      artist: "NGUYEN NAM ARTIST",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. ",
      image: "https://www.figma.com/api/mcp/asset/05c08f23-ee99-49b0-8395-cb4a12168a66"
    },
    {
      id: 2,
      title: "A Road in the  rain",
      artist: "HA VY ARTIST",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. ",
      image: "https://www.figma.com/api/mcp/asset/840776cc-c612-4915-bd81-f72315101480"
    },
    {
      id: 3,
      title: "The body",
      artist: "VINH NGHI ARTIST",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. ",
      image: "https://www.figma.com/api/mcp/asset/ef2da4c7-8bfd-482c-b2ef-8b8559ed4895"
    },
    {
      id: 4,
      title: "The Portrait",
      artist: "ANH THY ARTIST",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. ",
      image: "https://www.figma.com/api/mcp/asset/27944a8c-727a-4bd6-a4bc-8eac10788c59"
    }
  ];

  return (
    <section className="art-collection section">
      <div className="container">
        <div className="art-collection__header">
          <div className="art-collection__text">
            <Typography variant="display-lg" as="h2" className="art-collection__title">
              Art & Venture Art Collection
            </Typography>
            <Typography variant="body-md" className="art-collection__description">
              Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor.
            </Typography>
            <Button variant="primary" size="md" rightIcon={<Icon name="arrow-right" size="lg" />}>
              VIEW ALL
            </Button>
          </div>
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
        
        <div className="art-collection__grid" ref={scrollContainerRef}>
          {artworks.map((artwork) => (
            <div key={artwork.id} className="artwork-card">
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
                          src="https://www.figma.com/api/mcp/asset/4c291ca2-2bdd-4521-a5ae-ece7dcddde25"
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
      </div>
    </section>
  );
};

export default ArtCollection;
