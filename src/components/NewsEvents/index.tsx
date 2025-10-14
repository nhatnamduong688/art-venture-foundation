import React, { useRef } from 'react';
import './NewsEvents.css';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const NewsEvents: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Gallery exhibition of A&V Foundation Mid 2025",
      description: "Lorem ipsum dolor sit amet consectetur. Massa auctor justo lorem dictumst. Pharetra tincidunt dictumst sollicitudin ac. Cras purus non sed mus lorem dictumst. Tempor ac accumsan dui orci sit nibh tempor vulputate lorem. Tellus morbi amet felis lorem nisl at a lacus. Proin sed arcu enim dignissim. Gravida sed suscipit gravida sed arcu. Vitae tortor nulla vel fringilla. Eget dolor urna.",
      image: "https://www.figma.com/api/mcp/asset/50f46b7d-54e6-4097-882a-ca9bf49ff6e8"
    },
    {
      id: 2,
      title: "Gallery exhibition of A&V Foundation 2025",
      description: "Lorem ipsum dolor sit amet consectetur. Sagittis suspendisse placerat fermentum quam suspendisse. Maecenas non nibh in at. Aliquam vitae aliquam et tellus mattis tincidunt nam ut pharetra. Amet pellentesque morbi ornare tortor interdum. Urna lorem pharetra eget gravida.",
      image: "https://www.figma.com/api/mcp/asset/313b7350-9354-4a66-9d6e-a98b8e1f2ff6"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 769; // 737px card width + 32px gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="news-events section">
      <div className="container">
        <h2 className="news-events__title">A&V Foundation Events</h2>
        
        <div className="news-events__content">
          <div className="news-events__grid" ref={scrollContainerRef}>
            {newsItems.map((item) => (
              <div key={item.id} className="news-card">
                <div className="news-card__image">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="news-card__img"
                  />
                </div>
                <div className="news-card__content">
                  <div className="news-card__text">
                    <h3 className="news-card__title">{item.title}</h3>
                    <p className="news-card__description">{item.description}</p>
                  </div>
                  <button className="news-card__link">
                    <span>VIEW DETAIL</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            <div className="news-events__spacer"></div>
          </div>
          
          <div className="news-events__footer">
            <button className="news-events__view-all">
              <span>VIEW ALL</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="news-events__navigation">
              <button 
                className="news-events__nav-button" 
                onClick={() => scroll('left')}
                aria-label="Previous"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="news-events__nav-button" 
                onClick={() => scroll('right')}
                aria-label="Next"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;



