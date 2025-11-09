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

