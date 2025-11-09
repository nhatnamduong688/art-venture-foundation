/**
 * Hero Component - Migrated to Design System
 * Using Typography, Button, and Icon from design system
 */

import React from 'react';
import { Typography } from '../../../design-system/atoms/Typography';
import { Button } from '../../../design-system/atoms/Button';
import { Icon } from '../../../design-system/atoms/Icon';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <Typography variant="display-xl" color="burgundy" className="hero__title">
            Art & Venture Foundation
          </Typography>
          <Typography variant="body-md" color="primary" className="hero__description">
            Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor.
            Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum
            eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin.
          </Typography>
          <Button variant="burgundy" size="md" rightIcon={<Icon name="arrow-right" size="lg" />}>
            MORE
          </Button>
        </div>
      </div>
      <div className="hero__background">
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
            className="hero__bg-image"
            loading="eager"
          />
        </picture>
        <div className="hero__overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
