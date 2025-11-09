/**
 * Home Page
 * Main landing page with all sections
 * Using Hero component with responsive images (accurate Figma implementation)
 */

import React from 'react';
import { AVNews } from '../../components/business';
import { Hero, ArtCollection, CommunitySupport, NewsEvents } from '../../components/sections';
import { Footer } from '../../design-system/organisms';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section - Responsive images, Design System, Matches Figma exactly */}
      <Hero />
      
      {/* A&V News Section */}
      <AVNews />
      
      {/* Art Collection Section */}
      <ArtCollection />
      
      {/* Community Support Section */}
      <CommunitySupport />
      
      {/* News & Events Section */}
      <NewsEvents />
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;

