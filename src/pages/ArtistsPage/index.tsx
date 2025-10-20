import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ArtistsPage.css';

interface Artist {
  id: number;
  name: string;
  artworkCount: number;
  image: string;
}

const ArtistsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const artists: Artist[] = [
    {
      id: 1,
      name: "Đào Hải Phong",
      artworkCount: 23,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=460&fit=crop"
    },
    {
      id: 2,
      name: "Nguyễn Phan Chánh",
      artworkCount: 56,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=460&fit=crop"
    },
    {
      id: 3,
      name: "Lê Minh Đức",
      artworkCount: 34,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=460&fit=crop"
    },
    {
      id: 4,
      name: "Lê Phổ",
      artworkCount: 67,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=460&fit=crop"
    },
    {
      id: 5,
      name: "Nguyễn Tư Nghiêm",
      artworkCount: 45,
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=460&fit=crop"
    },
    {
      id: 6,
      name: "Nguyễn Gia Trí",
      artworkCount: 78,
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=460&fit=crop"
    },
    {
      id: 7,
      name: "Bùi Xuân Phái",
      artworkCount: 123,
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=460&fit=crop"
    },
    {
      id: 8,
      name: "Nguyễn Sáng",
      artworkCount: 89,
      image: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=400&h=460&fit=crop"
    }
  ];

  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="artists-page__grid">
          {filteredArtists.map((artist) => (
            <Link 
              key={artist.id} 
              to={`/artists/${artist.id}`}
              className="artist-card"
            >
              <div className="artist-card__image">
                <img src={artist.image} alt={artist.name} />
              </div>
              <div className="artist-card__overlay">
                <div className="artist-card__info">
                  <h3 className="artist-card__name">{artist.name}</h3>
                  <p className="artist-card__count">{artist.artworkCount} Tác phẩm</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistsPage;

