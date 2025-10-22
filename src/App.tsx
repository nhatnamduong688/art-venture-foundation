import React from 'react';
import './App.css';
import { Header, Footer } from './design-system/organisms';
import { 
  Hero, 
  About, 
  ArtCollection, 
  CommunitySupport, 
  Partnerships, 
  NewsEvents, 
  ContentBlock 
} from './components/sections';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
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
      <ScrollToTop />
    </div>
  );
}

export default App;
