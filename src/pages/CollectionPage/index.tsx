import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArtistCollectionCard } from '../../components/business';
import type { ArtistInfo, ArtworkImage } from '../../components/business';
import { LoadingSpinner, SkeletonGrid } from '../../components/common/LoadingSpinner';
import { ImageLoader } from '../../components/common/ImageLoader';
import { artworksAPI, getImageUrl } from '../../api/artworks';
import type { Artwork as ApiArtwork } from '../../api/artworks';
import { getArtworkColor } from '../../utils/artworkColors';
import './CollectionPage.css';

interface Artwork {
  id: string;
  title: string;
  artist: string;
  artistAvatar: string | null;
  image: string | null;
  category: string;
  size: 'large' | 'medium' | 'small';
}

const CollectionPage: React.FC = () => {
  const [activeMainTab, setActiveMainTab] = useState<'new' | 'key'>('new');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const limit = 22;

  // Fetch artworks from API
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await artworksAPI.getAll(currentPage, limit);
        
        if (response.success && response.data) {
          // Transform API data to local format
          const transformedArtworks: Artwork[] = response.data.data.map((artwork: ApiArtwork, index: number) => {
            // Assign size based on index pattern for grid layout
            // Use global index (across all pages) for size pattern
            const globalIndex = (currentPage - 1) * limit + index;
            const sizes: ('large' | 'medium' | 'small')[] = ['large', 'medium', 'medium', 'small', 'medium', 'medium'];
            const size = sizes[globalIndex % sizes.length];
            
            return {
              id: artwork.id,
              title: artwork.title,
              artist: artwork.artist.fullName,
              artistAvatar: getImageUrl(artwork.artist.image),
              image: getImageUrl(artwork.image),
              category: 'all', // Backend doesn't have category yet, default to 'all'
              size: size
            };
          });
          
          // Append new artworks to existing ones (for "Load More")
          // Replace all artworks on page 1 (initial load or refresh)
          setArtworks(prevArtworks => 
            currentPage === 1 ? transformedArtworks : [...prevArtworks, ...transformedArtworks]
          );
          setTotalItems(response.data.meta.total);
        }
      } catch (err: any) {
        console.error('Error fetching artworks:', err);
        setError(err.message || 'Failed to load artworks');
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [currentPage]);

  // Artist data for ArtistCollectionCard - Keep mock data for now since we need specific artist collections
  const artistArtworks: ArtworkImage[] = [
    {
      id: 1,
      url: "/images/collection/new-creation/artwork-1.jpg",
      alt: "Artwork by Đào Hải Phong",
      artist: {
        name: "Đào Hải Phong",
        avatar: "/images/collection/artists/dao-hai-phong.png",
        artworkCount: 23,
        description: "Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed."
      }
    },
    {
      id: 2,
      url: "/images/collection/new-creation/artwork-2.jpg",
      alt: "Artwork by Nguyễn Phan Chánh",
      artist: {
        name: "Nguyễn Phan Chánh",
        avatar: "/images/collection/artists/nguyen-phan-chanh.png",
        artworkCount: 14,
        description: "Lorem ipsum dolor sit amet consectetur. Tristique quis diam viverra duis pellentesque scelerisque sit tellus proin. Ac gravida senectus condimentum."
      }
    },
    {
      id: 3,
      url: "/images/collection/new-creation/artwork-3.jpg",
      alt: "Artwork by Nguyễn Tư Nghiêm",
      artist: {
        name: "Nguyễn Tư Nghiêm",
        avatar: "/images/collection/artists/nguyen-tu-nghiem.png",
        artworkCount: 56,
        description: "Lorem ipsum dolor sit amet consectetur. Hac tincidunt semper scelerisque eu cras eget urna. Aliquet scelerisque eu non pellentesque tellus nibh in non. Tempus vitae at elementum nunc mattis pharetra eget a. Nisl massa."
      }
    }
  ];

  const filteredArtworks = artworks.filter(artwork => {
    if (activeFilter === 'all') return true;
    return artwork.category === activeFilter;
  });

  // Handle load more
  const handleLoadMore = () => {
    if (currentPage * limit < totalItems) {
      // Store current scroll position to calculate where new items appear
      const currentArtworksCount = artworks.length;
      
      setCurrentPage(prev => prev + 1);
      
      // Smooth scroll to new items after they load
      // Wait for next render cycle
      setTimeout(() => {
        // Find the first new artwork card
        const artworkCards = document.querySelectorAll('.artwork-card-grid');
        const firstNewCard = artworkCards[currentArtworksCount];
        
        if (firstNewCard) {
          // Scroll to show new items with some offset
          firstNewCard.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }, 800); // Wait for data to load and render
    }
  };

  const hasMore = currentPage * limit < totalItems;

  return (
    <div className="collection-page">
      <div className="collection-page__hero">
        <div className="collection-page__hero-content">
          <h1 className="collection-page__title">Collection</h1>
          
          <div className="collection-page__featured">
            <h2 className="collection-page__section-title">New creation</h2>
            
            {/* Figma Design Artist Collection Card */}
            <ArtistCollectionCard
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
        
        {/* Loading State - Initial Load Only */}
        {loading && artworks.length === 0 && (
          <SkeletonGrid count={limit} />
        )}
        
        {/* Error State */}
        {error && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#d32f2f' }}>
            <p>Error: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
            >
              Retry
            </button>
          </div>
        )}
        
        {/* Artworks Grid - Always show if we have artworks */}
        {!error && artworks.length > 0 && (
          <>
            <div className="collection-page__grid">
              {filteredArtworks.map((artwork) => (
                <Link 
                  key={artwork.id} 
                  to={`/collection/${artwork.id}`}
                  className={`artwork-card-grid artwork-card-grid--${artwork.size}`}
                >
                  <div className="artwork-card-grid__image">
                    {artwork.image ? (
                      <ImageLoader
                        src={artwork.image}
                        alt={artwork.title}
                        aspectRatio={4 / 3}
                        backgroundColor={getArtworkColor(
                          artwork.id,
                          artwork.artist,
                          artwork.category
                        )}
                        showSpinner={false}
                        transitionDuration={600}
                      />
                    ) : (
                      <div style={{ 
                        width: '100%', 
                        height: '100%', 
                        background: '#e0e0e0', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: '#999'
                      }}>
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="artwork-card-grid__overlay">
                    <div className="artwork-card-grid__info">
                      <div className="artwork-card-grid__artist">
                        {artwork.artistAvatar ? (
                          <img src={artwork.artistAvatar} alt={artwork.artist} />
                        ) : (
                          <div style={{ 
                            width: '100%', 
                            height: '100%', 
                            background: '#ccc', 
                            borderRadius: '50%' 
                          }} />
                        )}
                      </div>
                      <span className="artwork-card-grid__artist-name">{artwork.artist}</span>
                    </div>
                  </div>
                </Link>
              ))}
              
              {/* Loading More - Show skeleton cards at bottom */}
              {loading && artworks.length > 0 && (
                <>
                  {Array.from({ length: Math.min(limit, totalItems - artworks.length) }).map((_, index) => {
                    const colors = ['#8B7355', '#C89B4F', '#B8735C', '#7A8B7F', '#9B8FA5', '#6B7F8C', '#4A6FA5', '#E67E73', '#E8E4DF'];
                    const backgroundColor = colors[index % colors.length];
                    
                    return (
                      <div 
                        key={`loading-skeleton-${index}`}
                        className="artwork-card-grid artwork-card-grid--medium skeleton-card"
                        style={{ backgroundColor }}
                      >
                        <div className="skeleton-image"></div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
            
            {/* Load More / Pagination Info */}
            <div className="collection-page__load-more">
              {hasMore ? (
                <>
                  <p style={{ 
                    textAlign: 'center', 
                    color: 'var(--color-text-secondary)', 
                    marginBottom: '20px',
                    fontSize: '14px'
                  }}>
                    Showing {artworks.length} of {totalItems} artworks
                  </p>
                  <button 
                    className="btn btn-burgundy" 
                    onClick={handleLoadMore}
                    disabled={loading}
                  >
                    {loading ? 'LOADING...' : 'VIEW MORE'}
                    {!loading && (
                      <div className="btn-arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </button>
                </>
              ) : (
                <p style={{ 
                  textAlign: 'center', 
                  color: 'var(--color-burgundy)', 
                  padding: '20px', 
                  fontSize: '16px', 
                  fontWeight: '500' 
                }}>
                  ✨ Showing all {totalItems} artworks
                </p>
              )}
            </div>
          </>
        )}
        
        {/* Empty State */}
        {!loading && !error && artworks.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--color-burgundy)' }}>
            <p>No artworks found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;

