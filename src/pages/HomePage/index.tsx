/**
 * Home Page
 * Main landing page with all sections
 * Using HeroWithContent component with overlapping layout (magazine-style)
 */

import React from 'react';
import { AVNews } from '../../components/business';
import { HeroWithContent, ArtCollection, CommunitySupport, NewsEvents } from '../../components/sections';
import { Footer } from '../../design-system/organisms';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section - Overlapping content box between hero and sections */}
      <HeroWithContent />
      
      {/* Art Collection Section */}
      <ArtCollection />
      
      {/* Community Support Section */}
      <CommunitySupport />
      
      {/* A&V Foundation Events Section */}
      <NewsEvents />
      
      {/* A&V News Section */}
      <AVNews />
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;

