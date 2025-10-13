import React from 'react';
import './NewsEvents.css';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const NewsEvents: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Gallery exhibition of A&V Foundation 2025",
      description: "Lorem ipsum dolor sit amet consectetur. Sagittis suspendisse placerat fermentum quam suspendisse. Maecenas non nibh in at. Aliquam vitae aliquam et tellus mattis tincidunt nam ut pharetra. Amet pellentesque morbi ornare tortor interdum. Urna lorem pharetra eget gravida.",
      image: "https://www.figma.com/api/mcp/asset/1c5d3ac6-a8f8-4c55-aaa1-c1c16a1d6739"
    },
    {
      id: 2,
      title: "Gallery in Japan",
      description: "Lorem ipsum dolor sit amet consectetur. Massa auctor justo lorem dictumst. Pharetra tincidunt dictumst sollicitudin ac. Cras purus non sed mus lorem dictumst. Tempor ac accumsan dui orci sit nibh tempor vulputate lorem. Tellus morbi amet felis lorem nisl at a lacus. Proin sed arcu enim dignissim. Gravida sed suscipit gravida sed arcu. Vitae tortor nulla vel fringilla. Eget dolor urna.",
      image: "https://www.figma.com/api/mcp/asset/10744635-0bff-459d-8a32-3ba94372eb33"
    }
  ];

  return (
    <section className="news-events section">
      <div className="container">
        <div className="news-events__header">
          <h2 className="news-events__title">News & Events</h2>
          <button className="btn btn-black">
            ALL
            <div className="btn-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
        
        <div className="news-events__grid">
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
                <h3 className="news-card__title">{item.title}</h3>
                <p className="news-card__description">{item.description}</p>
                <button className="btn btn-black">
                  VIEW DETAIL
                  <div className="btn-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;



