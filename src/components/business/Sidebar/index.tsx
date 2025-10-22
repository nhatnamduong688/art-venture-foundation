import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const scrolled = window.scrollY;
      
      // Calculate progress (0 to 100)
      const progress = scrollableHeight > 0 ? (scrolled / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
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
              className="sidebar__progress-indicator"
              style={{ 
                // Position bar based on scroll progress (0-100%)
                // Subtract half of bar height (20px) to keep it centered at progress point
                top: `calc(${scrollProgress}% - 20px)` 
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

