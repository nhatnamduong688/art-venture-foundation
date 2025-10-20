/**
 * About Component - Migrated to Design System
 * Using Typography, Button, and Icon from design system
 */

import React from 'react';
import { Typography } from '../../../design-system/atoms/Typography';
import { Button } from '../../../design-system/atoms/Button';
import { Icon } from '../../../design-system/atoms/Icon';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about section">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <Typography variant="display-lg" as="h2" className="about__title">
              Who we are
            </Typography>
            <Typography variant="body-md" className="about__description">
              Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor.
              Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum
              eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin.
            </Typography>
            <Button variant="primary" size="md" rightIcon={<Icon name="arrow-right" size="lg" />}>
              MORE
            </Button>
          </div>
          <div className="about__image">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Art gallery interior with classical sculptures"
              className="about__img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
