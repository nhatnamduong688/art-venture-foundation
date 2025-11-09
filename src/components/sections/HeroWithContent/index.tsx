/**
 * HeroWithContent Component
 * Combines Hero's responsive background with MuseumCard's content box
 * 
 * Structure:
 * 1. Hero background (responsive images from Figma)
 * 2. Content box overlay (title, description, button, border)
 * 3. Empty space below
 */

import React from 'react';
import './HeroWithContent.css';

interface HeroWithContentProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const HeroWithContent: React.FC<HeroWithContentProps> = ({
  title = "Art & Venture Foundation",
  description = "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin.",
  buttonText = "MORE"
}) => {
  return (
    <section className="hero-with-content">
      {/* Part 1: Hero Background (from Hero component) */}
      <div className="hero-with-content__hero-section">
        <div className="hero-with-content__background">
          <picture>
            {/* Large screens 2200px+ */}
            <source
              media="(min-width: 2200px)"
              srcSet="/images/hero/2200/hero-2200.jpg"
            />
            {/* Wide screens 1920px - 2199px */}
            <source
              media="(min-width: 1920px)"
              srcSet="/images/hero/1920/hero-1920.jpg"
            />
            {/* Desktop 1440px - 1919px */}
            <source
              media="(min-width: 1440px)"
              srcSet="/images/hero/1440/hero-1440.jpg"
            />
            {/* Default fallback for smaller screens */}
            <img
              src="/images/hero/1440/hero-1440.jpg"
              alt="Museum gallery interior with classical sculptures and elegant architecture"
              className="hero-with-content__bg-image"
              loading="eager"
            />
          </picture>
          <div className="hero-with-content__overlay"></div>
        </div>

        {/* Part 2: Content Box (from MuseumCard) */}
        <div className="hero-with-content__content-box">
          <h2 className="hero-with-content__title">{title}</h2>
          <p className="hero-with-content__description">{description}</p>
          <button className="hero-with-content__button btn btn-burgundy">
            {buttonText}
            <div className="btn-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
          {/* Border đỏ phía dưới */}
          <div className="hero-with-content__border"></div>
        </div>
      </div>

      {/* Part 3: Empty space below */}
      <div className="hero-with-content__empty-space"></div>
    </section>
  );
};

export default HeroWithContent;

