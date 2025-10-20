/**
 * App Router - Code Split Routes with Lazy Loading
 * Implements React.lazy() for better performance
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './design-system/organisms';
import Sidebar from './components/Sidebar';
import './App.css';

// Loading component
const LoadingFallback: React.FC = () => (
  <div className="loading-container" style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    fontSize: '18px',
    color: 'var(--color-text-secondary)',
  }}>
    Loading...
  </div>
);

// ===== Lazy Load Pages =====
// Main Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CollectionPage = lazy(() => import('./pages/CollectionPage'));
const ArtistsPage = lazy(() => import('./pages/ArtistsPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const WhoWeArePage = lazy(() => import('./pages/WhoWeArePage'));
const KnowledgePage = lazy(() => import('./pages/KnowledgePage'));

// Detail Pages
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'));
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage'));
const ArtistDetailPage = lazy(() => import('./pages/ArtistDetailPage'));
const KnowledgeDetailPage = lazy(() => import('./pages/KnowledgeDetailPage'));

// ===== Lazy Load Components (for testing routes) =====
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const ArtCollection = lazy(() => import('./components/ArtCollection'));
const CommunitySupport = lazy(() => import('./components/CommunitySupport'));
const Partnerships = lazy(() => import('./components/Partnerships'));
const NewsEvents = lazy(() => import('./components/NewsEvents'));
const News = lazy(() => import('./components/News'));
const AVNews = lazy(() => import('./components/AVNews'));
const ContentBlock = lazy(() => import('./components/ContentBlock'));
const TestPage = lazy(() => import('./components/TestPage'));
const MuseumCard = lazy(() => import('./components/MuseumCard'));
const GalleryInterior = lazy(() => import('./components/GalleryInterior'));
const GalleryCropTest = lazy(() => import('./components/GalleryCropTest'));

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Header />
        
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/artists/:id" element={<ArtistDetailPage />} />
            <Route path="/news" element={<EventsPage />} />
            <Route path="/events/:id" element={<EventDetailPage />} />
            <Route path="/av-news" element={<AVNews />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
            <Route path="/knowledge" element={<KnowledgePage />} />
            <Route path="/knowledge/:id" element={<KnowledgeDetailPage />} />
            <Route path="/who-we-are" element={<WhoWeArePage />} />
            
            {/* Shop Page - Placeholder */}
            <Route path="/shop" element={
              <div style={{
                padding: '120px 60px',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: 'var(--color-burgundy)'
              }}>
                Shop Page - Coming Soon
              </div>
            } />
            
            {/* Legacy/Test Routes */}
            <Route path="/test" element={<TestPage />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/collection-home" element={<ArtCollection />} />
            <Route path="/community" element={
              <>
                <CommunitySupport />
                <AVNews />
              </>
            } />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events-home" element={<NewsEvents />} />
            <Route path="/news-page" element={<NewsPage />} />
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
                backgroundColor="#F2EFE7"
                useGalleryInterior={true}
              />
            } />
            <Route path="/gallery-interior" element={<GalleryInterior />} />
            <Route path="/gallery-crop-test" element={<GalleryCropTest />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default AppRouter;
