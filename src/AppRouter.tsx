import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import ArtCollection from './components/ArtCollection';
import CommunitySupport from './components/CommunitySupport';
import Partnerships from './components/Partnerships';
import NewsEvents from './components/NewsEvents';
import News from './components/News';
import ContentBlock from './components/ContentBlock';
import Footer from './components/Footer';
import TestPage from './components/TestPage';
import MuseumCard from './components/MuseumCard';
import GalleryInterior from './components/GalleryInterior';
import GalleryCropTest from './components/GalleryCropTest';
import FigmaOverlay from './components/FigmaOverlay';
import './App.css';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        {/*<Header />*/}
        
        <Routes>
          <Route path="/" element={
            <>
              {/*<Hero />*/}
              <MuseumCard
                  title="Art & Venture Foundation"
                  description="Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin."
                  buttonText="MORE"
                  backgroundColor="#f2f1eb"
                  useGalleryInterior={true}
              />
              <About />
              <ArtCollection />
              <CommunitySupport />
              <Partnerships />
              <NewsEvents />
              <ContentBlock 
                title="Art & Venture Foundation"
                description="Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin."
                buttonText="MORE"
                showButton={true}
              />
              <Footer />
            </>
          } />
          
          <Route path="/test" element={<TestPage />} />
          
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<ArtCollection />} />
          <Route path="/community" element={<CommunitySupport />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/news" element={<NewsEvents />} />
          <Route path="/news-list" element={<News />} />
          <Route path="/content" element={
            <ContentBlock 
              title="Art & Venture Foundation"
              description="Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin."
              buttonText="MORE"
              showButton={true}
            />
          } />
          
              <Route path="/museum-card" element={
                <MuseumCard
                  title="Art & Venture Foundation"
                  description="Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin."
                  buttonText="MORE"
                  backgroundColor="#f2f1eb"
                  useGalleryInterior={true}
                />
              } />
              <Route path="/gallery-interior" element={<GalleryInterior />} />
              <Route path="/gallery-crop-test" element={<GalleryCropTest />} />
        </Routes>
        
        {/* Figma Overlay Tool */}
        {/*<FigmaOverlay />*/}
        
        {/* Navigation for testing */}
        {/*<div className="test-navigation">*/}
        {/*  <div className="test-nav-container">*/}
        {/*    <h4>Test Navigation:</h4>*/}
        {/*    <div className="test-nav-links">*/}
        {/*      <Link to="/" className="test-nav-link">Home</Link>*/}
        {/*          <Link to="/test" className="test-nav-link">Test Page</Link>*/}
        {/*          <Link to="/museum-card" className="test-nav-link">Museum Card</Link>*/}
        {/*          <Link to="/gallery-interior" className="test-nav-link">Gallery Interior</Link>*/}
        {/*          <Link to="/gallery-crop-test" className="test-nav-link">Gallery Crop Test</Link>*/}
        {/*          <Link to="/hero" className="test-nav-link">Hero</Link>*/}
        {/*      <Link to="/about" className="test-nav-link">About</Link>*/}
        {/*      <Link to="/collection" className="test-nav-link">Collection</Link>*/}
        {/*      <Link to="/community" className="test-nav-link">Community</Link>*/}
        {/*      <Link to="/partnerships" className="test-nav-link">Partnerships</Link>*/}
        {/*      <Link to="/news" className="test-nav-link">News Events</Link>*/}
        {/*      <Link to="/news-list" className="test-nav-link">News List</Link>*/}
        {/*      <Link to="/content" className="test-nav-link">Content Block</Link>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </Router>
  );
};

export default AppRouter;
