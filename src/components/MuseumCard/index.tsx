import React from 'react';
import './MuseumCard.css';
import GalleryInterior from '../GalleryInterior';

interface MuseumCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  imageUrl?: string;
  backgroundColor?: string;
  useGalleryInterior?: boolean;
}

const MuseumCard: React.FC<MuseumCardProps> = ({
  title = "Art & Venture Foundation",
  description = "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin.",
  buttonText = "MORE",
  imageUrl = "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  backgroundColor = "#F2EFE7",
  useGalleryInterior = false
}) => {
  return (
    <div className="museum-card">
      {/* Component 1: Ảnh phía trên - 80% */}
      <div className="museum-card__image-section">
        {useGalleryInterior ? (
          <GalleryInterior className="museum-card__gallery-interior" />
        ) : (
          <img 
            src={imageUrl} 
            alt="Museum interior" 
            className="museum-card__image"
          />
        )}
      </div>

      {/* Component 2: Content box ở giữa (overlay) */}
      <div className="museum-card__content-box">
        <h2 className="museum-card__title">{title}</h2>
        <p className="museum-card__description">{description}</p>
        <button className="museum-card__button btn btn-burgundy">
          {buttonText}
          <div className="btn-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
        {/* Border đỏ phía dưới */}
        <div className="museum-card__border"></div>
      </div>

    </div>
  );
};

export default MuseumCard;
