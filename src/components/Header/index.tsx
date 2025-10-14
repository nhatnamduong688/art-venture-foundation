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

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Collection', path: '/collection' },
    { label: 'Artists', path: '/artists' },
    { label: 'A&V Foundation Events', path: '/news' },
    { label: 'A&V News', path: '/av-news' },
    { label: 'Knowledge', path: '/knowledge' }
  ];

  const handleNavClick = (label: string) => {
    setActiveItem(label);
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
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
        
        <div className="header__shop">
          <Link to="/shop" className="header__shop-link">
            <span>Shop</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;



