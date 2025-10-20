import React, { useRef } from 'react';
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
            <h2 className="art-collection__title">Art & Venture Art Collection</h2>
            <p className="art-collection__description">
              Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor.
            </p>
            <button className="btn btn-black">
              VIEW ALL COLLECTION
              <div className="btn-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
          <div className="art-collection__navigation">
            <button 
              className="art-collection__nav-button" 
              onClick={() => scroll('left')}
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="art-collection__nav-button" 
              onClick={() => scroll('right')}
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="art-collection__grid" ref={scrollContainerRef}>
          {artworks.map((artwork) => (
            <div key={artwork.id} className="artwork-card">
              <div className="artwork-card__image-container">
                <img 
                  src={artwork.image} 
                  alt={artwork.title} 
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
                      <h3 className="artwork-card__artist">{artwork.artist}</h3>
                      <button className="artwork-card__icon" aria-label="More options">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M3 7H21M3 12H21M3 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    <div className="artwork-card__text">
                      <h4 className="artwork-card__title">{artwork.title}</h4>
                      <p className="artwork-card__description">{artwork.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtCollection;
