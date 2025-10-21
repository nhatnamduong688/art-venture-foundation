import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArtistCollectionCard } from '../../components/business';
import type { ArtistInfo, ArtworkImage } from '../../components/business';
import './CollectionPage.css';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  artistAvatar: string;
  image: string;
  category: string;
  size: 'large' | 'medium' | 'small';
}

const CollectionPage: React.FC = () => {
  const [activeMainTab, setActiveMainTab] = useState<'new' | 'key'>('new');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Artist data for ArtistCollectionCard
  const artistInfo: ArtistInfo = {
    name: "Đào Hải Phong",
    avatar: "https://www.figma.com/api/mcp/asset/1b7bd1fe-54e5-430d-b9c5-ed72937f1f51",
    artworkCount: 23,
    description: "Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed."
  };

  const artistArtworks: ArtworkImage[] = [
    {
      id: 1,
      url: "https://www.figma.com/api/mcp/asset/4f38b31f-7444-40e8-823e-5664eafe8c72",
      alt: "Artwork by Đào Hải Phong - Image 1"
    },
    {
      id: 2,
      url: "https://www.figma.com/api/mcp/asset/05c08f23-ee99-49b0-8395-cb4a12168a66",
      alt: "Artwork by Đào Hải Phong - Image 2"
    },
    {
      id: 3,
      url: "https://www.figma.com/api/mcp/asset/840776cc-c612-4915-bd81-f72315101480",
      alt: "Artwork by Đào Hải Phong - Image 3"
    }
  ];

  const artworks: Artwork[] = [
    {
      id: 1,
      title: "Village Landscape",
      artist: "Đào Hải Phong",
      artistAvatar: "https://www.figma.com/api/mcp/asset/4c291ca2-2bdd-4521-a5ae-ece7dcddde25",
      image: "https://www.figma.com/api/mcp/asset/05c08f23-ee99-49b0-8395-cb4a12168a66",
      category: "nature",
      size: "large"
    },
    {
      id: 2,
      title: "Golden Clock",
      artist: "Đào Hải Phong",
      artistAvatar: "https://www.figma.com/api/mcp/asset/4c291ca2-2bdd-4521-a5ae-ece7dcddde25",
      image: "https://images.unsplash.com/photo-1611842524745-3f0d6d862b97?w=500",
      category: "sculpture",
      size: "medium"
    },
    {
      id: 3,
      title: "Portrait Study",
      artist: "Đào Hải Phong",
      artistAvatar: "https://www.figma.com/api/mcp/asset/4c291ca2-2bdd-4521-a5ae-ece7dcddde25",
      image: "https://www.figma.com/api/mcp/asset/840776cc-c612-4915-bd81-f72315101480",
      category: "people",
      size: "medium"
    },
    {
      id: 4,
      title: "Abstract Portrait",
      artist: "Đào Hải Phong",
      artistAvatar: "https://www.figma.com/api/mcp/asset/4c291ca2-2bdd-4521-a5ae-ece7dcddde25",
      image: "https://www.figma.com/api/mcp/asset/ef2da4c7-8bfd-482c-b2ef-8b8559ed4895",
      category: "people",
      size: "small"
    },
    {
      id: 5,
      title: "White Sculpture",
      artist: "Đào Hải Phong",
      artistAvatar: "https://www.figma.com/api/mcp/asset/4c291ca2-2bdd-4521-a5ae-ece7dcddde25",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=500",
      category: "sculpture",
      size: "medium"
    },
    {
      id: 6,
      title: "Countryside Scene",
      artist: "Đào Hải Phong",
      artistAvatar: "https://www.figma.com/api/mcp/asset/4c291ca2-2bdd-4521-a5ae-ece7dcddde25",
      image: "https://www.figma.com/api/mcp/asset/05c08f23-ee99-49b0-8395-cb4a12168a66",
      category: "nature",
      size: "medium"
    },
    {
      id: 7,
      title: "Lady Portrait",
      artist: "Đào Hải Phong",
      artistAvatar: "https://www.figma.com/api/mcp/asset/4c291ca2-2bdd-4521-a5ae-ece7dcddde25",
      image: "https://www.figma.com/api/mcp/asset/ef2da4c7-8bfd-482c-b2ef-8b8559ed4895",
      category: "people",
      size: "medium"
    },
    {
      id: 8,
      title: "Bronze Sculpture",
      artist: "Đào Hải Phong",
      artistAvatar: "https://www.figma.com/api/mcp/asset/4c291ca2-2bdd-4521-a5ae-ece7dcddde25",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
      category: "sculpture",
      size: "medium"
    }
  ];

  const filteredArtworks = artworks.filter(artwork => {
    if (activeFilter === 'all') return true;
    return artwork.category === activeFilter;
  });

  return (
    <div className="collection-page">
      <div className="collection-page__hero">
        <div className="collection-page__hero-content">
          <h1 className="collection-page__title">Collection</h1>
          
          <div className="collection-page__featured">
            <h2 className="collection-page__section-title">New creation</h2>
            
            {/* Figma Design Artist Collection Card */}
            <ArtistCollectionCard
              artist={artistInfo}
              artworks={artistArtworks}
              onDetailClick={() => console.log('Detail clicked')}
            />
          </div>
        </div>
      </div>
      
      <div className="collection-page__content">
        <div className="collection-page__filters">
          <h2 className="collection-page__section-title">Key works</h2>
          
          <div className="collection-page__filter-tabs">
            <button 
              className={`filter-tab ${activeFilter === 'all' ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'people' ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveFilter('people')}
            >
              People
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'nature' ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveFilter('nature')}
            >
              Nature
            </button>
            <button 
              className={`filter-tab ${activeFilter === 'sculpture' ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveFilter('sculpture')}
            >
              Sculpture
            </button>
          </div>
        </div>
        
        <div className="collection-page__grid">
          {filteredArtworks.map((artwork) => (
            <Link 
              key={artwork.id} 
              to={`/collection/${artwork.id}`}
              className={`artwork-card-grid artwork-card-grid--${artwork.size}`}
            >
              <div className="artwork-card-grid__image">
                <img src={artwork.image} alt={artwork.title} />
              </div>
              <div className="artwork-card-grid__overlay">
                <div className="artwork-card-grid__info">
                  <div className="artwork-card-grid__artist">
                    <img src={artwork.artistAvatar} alt={artwork.artist} />
                  </div>
                  <span className="artwork-card-grid__artist-name">{artwork.artist}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="collection-page__load-more">
          <button className="btn btn-burgundy">
            VIEW ALL
            <div className="btn-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;

