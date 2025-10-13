import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img 
            src="https://www.figma.com/api/mcp/asset/9c1d2deb-43a4-44d2-b708-73d3ca42b9de" 
            alt="AV Foundation" 
            className="header__logo-img"
          />
        </div>
        
        <nav className="header__nav">
          <div className="header__nav-item">
            <div className="header__nav-line"></div>
          </div>
        </nav>
        
        <div className="header__language">
          <span>VIE</span>
        </div>
        
        <button className="header__menu-btn">
          <div className="header__menu-icon">
            <div className="header__menu-line"></div>
            <div className="header__menu-line"></div>
            <div className="header__menu-line"></div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;



