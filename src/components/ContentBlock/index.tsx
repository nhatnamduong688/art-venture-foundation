import React from 'react';
import './ContentBlock.css';

interface ContentBlockProps {
  title?: string;
  description?: string;
  buttonText?: string;
  showButton?: boolean;
  className?: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  title = "Art & Venture Foundation",
  description = "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin.",
  buttonText = "MORE",
  showButton = true,
  className = ""
}) => {
  return (
    <div className={`content-block ${className}`}>
      <div className="content-block__container">
        <div className="content-block__content">
          <h2 className="content-block__title">{title}</h2>
          <p className="content-block__description">{description}</p>
          {showButton && (
            <button className="btn btn-burgundy">
              {buttonText}
              <div className="btn-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;



