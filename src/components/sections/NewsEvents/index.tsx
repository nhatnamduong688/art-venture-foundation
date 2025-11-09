/**
 * NewsEvents Component - Migrated to Design System
 * Using Typography, Button, Icon, and Card from design system
 */

import React, { useRef } from 'react';
import { Typography } from '../../../design-system/atoms/Typography';
import { Button } from '../../../design-system/atoms/Button';
import { Icon } from '../../../design-system/atoms/Icon';
import { Card } from '../../../design-system/molecules/Card';
import './NewsEvents.css';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const NewsEvents: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Base event data - will be repeated for scroll effect
  const baseEvent = {
    title: "Gallery exhibition of A&V Foundation Mid 2025",
    description: "Lorem ipsum dolor sit amet consectetur. Massa auctor justo lorem dictumst. Pharetra tincidunt dictumst sollicitudin ac. Cras purus non sed mus lorem dictumst. Tempor ac accumsan dui orci sit nibh tempor vulputate lorem. Tellus morbi amet felis lorem nisl at a lacus. Proin sed arcu enim dignissim. Gravida sed suscipit gravida sed arcu. Vitae tortor nulla vel fringilla. Eget dolor urna.",
    image: "/images/events/event-1.jpg"
  };

  // Repeat the event 6 times for horizontal scroll
  const newsItems: NewsItem[] = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    ...baseEvent
  }));

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
        <Typography variant="display-lg" as="h2" className="news-events__title">
          A&V Foundation Events
        </Typography>

        <div className="news-events__content">
          <div className="news-events__grid" ref={scrollContainerRef}>
            {newsItems.map((item) => (
              <Card key={item.id} className="news-card" padding="none">
                <Card.Image
                  src={item.image}
                  alt={item.title}
                  aspectRatio="16/9"
                  className="news-card__image"
                />
                <div className="news-card__content">
                  <Typography variant="h3" as="h3" className="news-card__title">
                    {item.title}
                  </Typography>
                </div>
              </Card>
            ))}
            <div className="news-events__spacer"></div>
          </div>

          <div className="news-events__footer">
            <Button
              variant="primary"
              size="md"
              rightIcon={<Icon name="arrow-right" size="lg" />}
              className="news-events__view-all"
            >
              VIEW ALL
            </Button>

            <div className="news-events__navigation">
              <button
                className="news-events__nav-button"
                onClick={() => scroll('left')}
                aria-label="Previous"
              >
                <Icon name="chevron-left" size="lg" />
              </button>
              <button
                className="news-events__nav-button"
                onClick={() => scroll('right')}
                aria-label="Next"
              >
                <Icon name="chevron-right" size="lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;



