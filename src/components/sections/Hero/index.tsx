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
        <img
          src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Museum gallery with classical sculptures"
          className="hero__bg-image"
          loading="lazy"
        />
        <div className="hero__overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
