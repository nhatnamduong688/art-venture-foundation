/**
 * Organism Component - Header
 * Main navigation header using design system components
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../../atoms/Icon';
import { LanguageToggle } from '../../molecules/LanguageToggle';
import { useAppStore } from '../../../store/useAppStore';
import './Header.css';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Collection', path: '/collection' },
  { label: 'Artists', path: '/artists' },
  { label: 'A&V Foundation Events', path: '/news' },
  { label: 'A&V News', path: '/av-news' },
  { label: 'Knowledge', path: '/knowledge' },
];

export const Header: React.FC = () => {
  const location = useLocation();
  const { language, setLanguage } = useAppStore();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="ds-header">
      <div className="ds-header__container">
        <nav className="ds-header__nav">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`ds-header__nav-item ${
                isActiveRoute(item.path) ? 'ds-header__nav-item--active' : ''
              }`}
            >
              <span className="ds-header__nav-text">{item.label}</span>
              <div className="ds-header__nav-underline"></div>
            </Link>
          ))}
        </nav>

        <div className="ds-header__actions">
          <button className="ds-header__action-button" aria-label="Search">
            <Icon name="search" size="lg" />
          </button>

          <LanguageToggle
            currentLanguage={language}
            onLanguageChange={setLanguage}
            className="ds-header__language"
          />

          <Link to="/shop" className="ds-header__shop-link">
            <span>Shop</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

