/**
 * CommunitySupport Component - Migrated to Design System
 * Using Typography, Button, and Icon from design system
 */

import React from 'react';
import { Typography } from '../../design-system/atoms/Typography';
import { Button } from '../../design-system/atoms/Button';
import { Icon } from '../../design-system/atoms/Icon';
import './CommunitySupport.css';

interface TimelineItem {
  year: string;
  description: string;
  activities: string[];
}

const CommunitySupport: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: "2024",
      description: "Lorem ipsum dolor sit amet consectetur. Viverra magna sed adipiscing eu scelerisque malesuada. Dignissim porttitor ac ut mauris. Tincidunt sed at quam vel id molestie cras in. Quis cursus cursus in fusce etiam sagittis non convallis. Tortor libero posuere sit velit et magnis consectetur. Mauris sed ultricies donec a adipiscing elit nisl vel.",
      activities: [
        "Art exhibition Ho Chi Minh CIty",
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
        <Typography variant="display-lg" as="h2" className="community-support__title">
          Community support
        </Typography>

        <div className="community-support__content">
          <div className="community-support__timeline-box">
            <div className="community-support__timeline">
              {timelineItems.map((item) => (
                <div key={item.year} className="timeline-item">
                  <div className="timeline-item__content">
                    <Typography variant="h2" as="h3" className="timeline-item__year">
                      {item.year}
                    </Typography>
                    <Typography variant="body-md" className="timeline-item__description">
                      {item.description}
                    </Typography>

                    <div className="timeline-item__activities">
                      {item.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="activity-item">
                          <Typography variant="body-sm" weight="medium" className="activity-item__text">
                            {activity}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="primary"
            size="md"
            rightIcon={<Icon name="arrow-right" size="lg" />}
            className="community-support__view-all"
          >
            VIEW ALL
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySupport;



