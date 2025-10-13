import React from 'react';
import './CommunitySupport.css';

interface TimelineItem {
  year: string;
  description: string;
  activities: string[];
}

const CommunitySupport: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: "2023",
      description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper risus neque mus at lectus. Diam tristique convallis egestas sed arcu. Urna metus natoque velit arcu lobortis nulla molestie nisi augue. Eu blandit commodo augue placerat at.",
      activities: [
        "Art exhibition Ho Chi Minh City",
        "Give a scholarship"
      ]
    },
    {
      year: "2024",
      description: "Lorem ipsum dolor sit amet consectetur. Viverra magna sed adipiscing eu scelerisque malesuada. Dignissim porttitor ac ut mauris. Tincidunt sed at quam vel id molestie cras in. Quis cursus cursus in fusce etiam sagittis non convallis. Tortor libero posuere sit velit et magnis consectetur. Mauris sed ultricies donec a adipiscing elit nisl vel.",
      activities: [
        "Art exhibition Ho Chi Minh City",
        "Give a scholarship"
      ]
    },
    {
      year: "2025",
      description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper risus neque mus at lectus. Diam tristique convallis egestas sed arcu.",
      activities: [
        "Give a scholarship"
      ]
    }
  ];

  return (
    <section className="community-support section">
      <div className="container">
        <h2 className="community-support__title">Community support</h2>
        
        <div className="community-support__timeline">
          {timelineItems.map((item, index) => (
            <div key={item.year} className="timeline-item">
              <div className="timeline-item__content">
                <h3 className="timeline-item__year">{item.year}</h3>
                <p className="timeline-item__description">{item.description}</p>
                
                <div className="timeline-item__activities">
                  {item.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="activity-item">
                      <span className="activity-item__text">{activity}</span>
                      <div className="activity-item__arrow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySupport;



