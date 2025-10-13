import React from 'react';
import './ArtCollection.css';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  description: string;
  image: string;
}

const ArtCollection: React.FC = () => {
  const artworks: Artwork[] = [
    {
      id: 1,
      title: "Classical Reclining Figure",
      artist: "NGUYEN NAM ARTIST",
      description: "A bronze sculpture depicting a mythological figure in repose, showcasing classical forms and intricate drapery details.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Modern Mother and Child",
      artist: "HA VY ARTIST",
      description: "A contemporary marble sculpture representing maternal love and protection through simplified, abstract forms.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Gallery Interior Study",
      artist: "VINH NGHI ARTIST",
      description: "An architectural study capturing the interplay of light and shadow in museum spaces, celebrating the environment of art appreciation.",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Sculpture Garden View",
      artist: "ANH THY ARTIST",
      description: "A contemplative view of classical sculptures in their natural museum setting, emphasizing the relationship between art and space.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="art-collection section">
      <div className="container">
        <div className="art-collection__header">
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
        
        <div className="art-collection__grid">
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
                          src="https://www.figma.com/api/mcp/asset/6b1fcae6-1345-4ea9-a333-80ab0705118a" 
                          alt="Artist avatar" 
                          className="artwork-card__avatar-img"
                        />
                      </div>
                      <h3 className="artwork-card__artist">{artwork.artist}</h3>
                      <div className="artwork-card__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M3 7H21M3 12H21M3 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
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
