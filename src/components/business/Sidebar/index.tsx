import React, { useState, useEffect } from 'react';
import './Sidebar.css';

// Define page sections with their actual class names
const sections = [
  { id: 'museum-card', label: 'Hero' },
  { id: 'av-news', label: 'News' },
  { id: 'art-collection', label: 'Collection' },
  { id: 'community-support', label: 'Community' },
  { id: 'news-events', label: 'Events' },
];

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const triggerPoint = scrollY + windowHeight / 2; // Middle of viewport

      // Find which section is currently in view
      let currentSection = 0;
      
      sections.forEach((section, index) => {
        const element = document.querySelector(`.${section.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = scrollY + rect.top;
          const elementBottom = elementTop + element.offsetHeight;
          
          // Check if trigger point is within this section
          if (triggerPoint >= elementTop && triggerPoint < elementBottom) {
            currentSection = index;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Calculate initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__top">
          <a href="/" className="sidebar__logo" aria-label="Home">
            <img 
              src="https://www.figma.com/api/mcp/asset/cb17b6ef-225e-4f52-820c-3784bd36d8c9" 
              alt="AV Foundation" 
              className="sidebar__logo-img"
            />
          </a>
        </div>
        
        <div className="sidebar__progress">
          <div className="sidebar__progress-track">
            <div 
              className="sidebar__progress-bar"
              style={{ 
                height: `${((activeSection + 1) / sections.length) * 100}%` 
              }}
            />
          </div>
        </div>
        
        <div className="sidebar__bottom">
          <button className="sidebar__language" aria-label="Change language">
            <span className="sidebar__language-text">VIE</span>
            <div className="sidebar__language-indicator" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

