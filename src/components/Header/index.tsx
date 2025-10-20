import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

interface NavItem {
  label: string;
  path: string;
  isActive?: boolean;
}

const Header: React.FC = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string>('Home');
  const [language, setLanguage] = useState<'EN' | 'VI'>('EN');

  const navItems: NavItem[] = [
    { label: 'H', path: '/' },
    { label: 'Collection', path: '/collection' },
    { label: 'Artists', path: '/artists' },
    { label: 'A&V Foundation Events', path: '/news' },
    { label: 'A&V News', path: '/av-news' },
    { label: 'KNOWLEDGE', path: '/knowledge' }
  ];

  const handleNavClick = (label: string) => {
    setActiveItem(label);
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'VI' : 'EN');
  };

  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`header__nav-item ${
                isActiveRoute(item.path) ? 'header__nav-item--active' : ''
              }`}
              onClick={() => handleNavClick(item.label)}
            >
              <span className="header__nav-text">{item.label}</span>
              <div className="header__nav-underline"></div>
            </Link>
          ))}
        </nav>
        
        <div className="header__actions">
          <button className="header__search" aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button className="header__language" onClick={toggleLanguage}>
            <span className={language === 'EN' ? 'header__language-active' : ''}>EN</span>
            <span className="header__language-divider">/</span>
            <span className={language === 'VI' ? 'header__language-active' : ''}>VI</span>
          </button>
          
          <Link to="/shop" className="header__shop-link">
            <span>Shop</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;



