import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../design-system/organisms';
import { artistsAPI, Artist, getArtistImageUrl } from '../../api/artists';
import './ArtistsPage.css';

const ArtistsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const limit = 24;

  // Fetch artists from API
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setLoading(true);
        setError(null);

        let response;
        if (searchTerm.trim()) {
          // Search mode
          response = await artistsAPI.search(searchTerm, currentPage, limit);
        } else {
          // Normal list mode
          response = await artistsAPI.getAll(currentPage, limit);
        }

        if (response.success && response.data) {
          setArtists(response.data.data);
          setTotalItems(response.data.meta.total);
        }
      } catch (err: any) {
        console.error('Error fetching artists:', err);
        setError(err.message || 'Failed to load artists');
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, [currentPage, searchTerm]);

  // Handle search with debounce
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page on search
  };

  const filteredArtists = artists;

  return (
    <div className="artists-page">
      <div className="artists-page__container">
        <div className="artists-page__header">
          <h1 className="artists-page__title">Artists</h1>
          
          <div className="artists-page__search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input 
              type="text" 
              placeholder="Tìm kiếm"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
        </div>

        {/* Loading State with Skeleton */}
        {loading && (
          <div className="artists-page__grid">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="artist-card skeleton">
                <div className="artist-card__image skeleton-pulse"></div>
                <div className="artist-card__overlay skeleton-overlay">
                  <div className="skeleton-text"></div>
                  <div className="skeleton-text-small"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="artists-page__error">
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Thử lại</button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredArtists.length === 0 && (
          <div className="artists-page__empty">
            <p>Không tìm thấy nghệ sĩ nào{searchTerm ? ` với từ khóa "${searchTerm}"` : ''}.</p>
          </div>
        )}
        
        {/* Artists Grid */}
        {!loading && !error && filteredArtists.length > 0 && (
          <div className="artists-page__grid">
            {filteredArtists.map((artist) => (
              <Link 
                key={artist.id} 
                to={`/artists/${artist.id}`}
                className="artist-card"
              >
                <div className="artist-card__image">
                  {artist.portraitImage ? (
                    <img 
                      src={getArtistImageUrl(artist.portraitImage)!} 
                      alt={artist.fullName} 
                    />
                  ) : (
                    <div className="artist-card__placeholder">
                      {artist.fullName.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="artist-card__overlay">
                  <div className="artist-card__info">
                    <h3 className="artist-card__name">{artist.fullName}</h3>
                    <p className="artist-card__count">{artist.artworksCount} Tác phẩm</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination Info */}
        {!loading && !error && totalItems > 0 && (
          <div className="artists-page__pagination">
            <p>Hiển thị {artists.length} / {totalItems} nghệ sĩ</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ArtistsPage;

