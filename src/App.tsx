import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ArtCollection from './components/ArtCollection';
import CommunitySupport from './components/CommunitySupport';
import Partnerships from './components/Partnerships';
import NewsEvents from './components/NewsEvents';
import ContentBlock from './components/ContentBlock';
import Footer from './components/Footer';

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
    </div>
  );
}

export default App;
