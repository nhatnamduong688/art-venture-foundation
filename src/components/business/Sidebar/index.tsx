import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(0);
  
  // Only show progress tracker on homepage
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Only track scroll on homepage
    if (!isHomePage) return;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const triggerPoint = scrollY + windowHeight / 2; // Middle of viewport

      // Find which section is currently in view
      let currentSection = 0;
      let foundSection = false;
      
      sections.forEach((section, index) => {
        const element = document.querySelector(`.${section.id}`) as HTMLElement;
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = scrollY + rect.top;
          const elementBottom = elementTop + element.offsetHeight;
          
          // Check if trigger point is within this section
          if (triggerPoint >= elementTop && triggerPoint < elementBottom) {
            currentSection = index;
            foundSection = true;
          }
        }
      });

      // If no section found (scrolled past all sections), stay at last section
      if (!foundSection && scrollY > 0) {
        // Check if we're past the last section
        const lastSection = document.querySelector(`.${sections[sections.length - 1].id}`) as HTMLElement;
        if (lastSection) {
          const rect = lastSection.getBoundingClientRect();
          const lastSectionBottom = scrollY + rect.top + lastSection.offsetHeight;
          if (triggerPoint >= lastSectionBottom) {
            currentSection = sections.length - 1;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Calculate initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

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
        
        {isHomePage && (
          <div className="sidebar__progress">
            <div className="sidebar__progress-track">
              <div 
                className="sidebar__progress-indicator"
                style={{ 
                  top: `calc(${(activeSection / (sections.length - 1)) * 100}% - ${(activeSection / (sections.length - 1)) * 20}px)` 
                }}
              />
            </div>
          </div>
        )}
        
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

