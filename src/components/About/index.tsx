import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about section">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="about__title">Who we are</h2>
            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. 
              Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum 
              eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin.
            </p>
            <button className="btn btn-black">
              MORE
              <div className="btn-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
          <div className="about__image">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Art gallery interior with classical sculptures" 
              className="about__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
