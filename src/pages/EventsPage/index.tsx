import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../design-system/organisms';
import './EventsPage.css';

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

const EventsPage: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Gallery exhibition of A&V Foundation Mid 2025",
      description: "Lorem ipsum dolor sit amet consectetur. Massa auctor justo lorem dictumst. Pharetra tincidunt dictumst sollicitudin ac. Cras purus non sed mus lorem dictumst. Tempor ac accumsan dui orci sit nibh tempor vulputate lorem.",
      image: "https://www.figma.com/api/mcp/asset/50f46b7d-54e6-4097-882a-ca9bf49ff6e8",
      date: "June 2025"
    },
    {
      id: 2,
      title: "Gallery exhibition of A&V Foundation Late 2024",
      description: "Lorem ipsum dolor sit amet consectetur. Sagittis suspendisse placerat fermentum quam suspendisse. Maecenas non nibh in at. Aliquam vitae aliquam et tellus mattis tincidunt nam ut pharetra.",
      image: "https://www.figma.com/api/mcp/asset/313b7350-9354-4a66-9d6e-a98b8e1f2ff6",
      date: "December 2024"
    },
    {
      id: 3,
      title: "Gallery exhibition of A&V Foundation Late 2023",
      description: "Lorem ipsum dolor sit amet consectetur. Viverra magna sed adipiscing eu scelerisque malesuada. Dignissim porttitor ac ut mauris. Tincidunt sed at quam vel id molestie cras in.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
      date: "November 2023"
    }
  ];

  return (
    <div className="events-page">
      <div className="events-page__container">
        <h1 className="events-page__title">A&V Events</h1>
        
        <div className="events-page__list">
          {events.map((event) => (
            <Link 
              key={event.id}
              to={`/events/${event.id}`}
              className="event-card-full"
            >
              <div className="event-card-full__image">
                <img src={event.image} alt={event.title} />
              </div>
              
              <div className="event-card-full__content">
                <h2 className="event-card-full__title">{event.title}</h2>
                <p className="event-card-full__description">{event.description}</p>
                
                <button className="event-card-full__link">
                  DETAIL
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EventsPage;

