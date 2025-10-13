import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Art & Venture Foundation</h1>
          <p className="hero__description">
            Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. 
            Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum 
            eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin.
          </p>
          <button className="btn btn-white">
            MORE
            <div className="btn-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="hero__background">
        <img 
          src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Museum gallery with classical sculptures" 
          className="hero__bg-image"
        />
        <div className="hero__overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
