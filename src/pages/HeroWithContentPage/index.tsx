/**
 * HeroWithContent Test Page
 * Test page for the new HeroWithContent component
 */

import React from 'react';
import { HeroWithContent } from '../../components/sections';
import './HeroWithContentPage.css';

const HeroWithContentPage: React.FC = () => {
  return (
    <div className="hero-with-content-page">
      <HeroWithContent
        title="Art & Venture Foundation"
        description="Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin."
        buttonText="MORE"
      />
      
      {/* You can add more sections below here */}
      <div className="hero-with-content-page__info">
        <h3>📌 Component Structure:</h3>
        <ul>
          <li>✅ Hero background with responsive images (1440px, 1920px, 2200px)</li>
          <li>✅ Content box overlay (title, description, button, border)</li>
          <li>✅ Empty space below for additional content</li>
        </ul>
      </div>
    </div>
  );
};

export default HeroWithContentPage;

