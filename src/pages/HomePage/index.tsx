/**
 * Home Page
 * Main landing page with all sections
 */

import React from 'react';
import MuseumCard from '../../components/MuseumCard';
import AVNews from '../../components/AVNews';
import ArtCollection from '../../components/ArtCollection';
import CommunitySupport from '../../components/CommunitySupport';
import NewsEvents from '../../components/NewsEvents';
import Footer from '../../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <MuseumCard
        title="Art & Venture Foundation"
        description="Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin."
        buttonText="MORE"
        backgroundColor="#F2EFE7"
        useGalleryInterior={true}
      />
      <AVNews />
      <ArtCollection />
      <CommunitySupport />
      <NewsEvents />
      <Footer />
    </>
  );
};

export default HomePage;

