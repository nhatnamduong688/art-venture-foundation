import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__info">
              <h3 className="footer__title">Art & Venture Foundation</h3>
              <div className="footer__contact">
                <p className="footer__address">15 Nguyễn Thị Minh Khai, Phường Đa Kao, Tp. HCM</p>
                <p className="footer__phone">T: 028 8293 2343</p>
                <p className="footer__email">E: ArtVenture@gmail.com</p>
              </div>
              <div className="footer__social">
                <a href="https://facebook.com" className="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M16 8.05C16 3.6 12.4 0 8 0S0 3.6 0 8.05C0 12.1 2.93 15.4 6.75 16v-5.61H4.72V8.05h2.03V6.28c0-2.01 1.2-3.12 3.02-3.12.88 0 1.8.16 1.8.16v1.98h-1c-1 0-1.3.62-1.3 1.25v1.5h2.22l-.36 2.34h-1.86V16C13.07 15.4 16 12.1 16 8.05z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" className="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C5.83 0 5.56.01 4.7.05 3.85.09 3.27.22 2.76.42c-.52.2-.96.48-1.4.92-.44.44-.72.88-.92 1.4-.2.51-.33 1.09-.37 1.94C.01 5.56 0 5.83 0 8s.01 2.44.05 3.3c.04.85.17 1.43.37 1.94.2.52.48.96.92 1.4.44.44.88.72 1.4.92.51.2 1.09.33 1.94.37.86.04 1.13.05 3.3.05s2.44-.01 3.3-.05c.85-.04 1.43-.17 1.94-.37.52-.2.96-.48 1.4-.92.44-.44.72-.88.92-1.4.2-.51.33-1.09.37-1.94.04-.86.05-1.13.05-3.3s-.01-2.44-.05-3.3c-.04-.85-.17-1.43-.37-1.94-.2-.52-.48-.96-.92-1.4-.44-.44-.88-.72-1.4-.92-.51-.2-1.09-.33-1.94-.37C10.44.01 10.17 0 8 0zm0 1.44c2.14 0 2.4 0 3.24.05.78.03 1.2.16 1.48.27.37.14.64.32.92.6.28.28.46.55.6.92.11.28.24.7.27 1.48.04.84.05 1.1.05 3.24s-.01 2.4-.05 3.24c-.03.78-.16 1.2-.27 1.48-.14.37-.32.64-.6.92-.28.28-.55.46-.92.6-.28.11-.7.24-1.48.27-.84.04-1.1.05-3.24.05s-2.4-.01-3.24-.05c-.78-.03-1.2-.16-1.48-.27-.37-.14-.64-.32-.92-.6-.28-.28-.46-.55-.6-.92-.11-.28-.24-.7-.27-1.48-.04-.84-.05-1.1-.05-3.24s.01-2.4.05-3.24c.03-.78.16-1.2.27-1.48.14-.37.32-.64.6-.92.28-.28.55-.46.92-.6.28-.11.7-.24 1.48-.27.84-.04 1.1-.05 3.24-.05z"/>
                    <path d="M8 10.67A2.67 2.67 0 118 5.33a2.67 2.67 0 010 5.34zm0-6.78A4.11 4.11 0 108 12.1a4.11 4.11 0 000-8.21zM13.23 3.73a.96.96 0 11-1.92 0 .96.96 0 011.92 0z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" className="footer__social-link" aria-label="Twitter/X" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M12.6.75h2.45l-5.36 6.13L16 15.25h-4.93l-3.86-5.04-4.42 5.04H.34l5.73-6.56L0 .75h5.06l3.49 4.62L12.6.75zm-.86 13.03h1.36L4.32 2.1H2.87l8.87 11.68z"/>
                  </svg>
                </a>
                <a href="https://tiktok.com" className="footer__social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8.55 0c.11 1.41.67 2.63 1.66 3.49.99.86 2.27 1.3 3.79 1.3v2.58c-1.27 0-2.41-.31-3.43-.94-.99-.61-1.73-1.4-2.2-2.38v6.36c0 .8-.16 1.54-.47 2.2-.31.67-.74 1.24-1.27 1.72-.54.48-1.16.85-1.87 1.11-.7.26-1.46.39-2.27.39-1.27 0-2.41-.35-3.43-1.04-1.02-.69-1.8-1.62-2.35-2.77.55.15 1.14.22 1.77.22 1.27 0 2.4-.35 3.39-1.06.99-.7 1.74-1.64 2.26-2.8-.86-.09-1.64-.39-2.33-.9-.69-.51-1.22-1.16-1.59-1.95.25.04.49.06.74.06.35 0 .7-.04 1.04-.13-.92-.19-1.69-.64-2.3-1.37-.61-.73-.92-1.58-.92-2.57v-.06c.55.31 1.15.48 1.79.51-.54-.36-.97-.83-1.29-1.41-.32-.58-.48-1.21-.48-1.88 0-.72.18-1.38.55-1.99 1 1.23 2.21 2.21 3.64 2.94 1.43.73 2.97 1.14 4.63 1.22-.08-.31-.12-.63-.12-.95 0-1.11.39-2.06 1.18-2.85.79-.79 1.74-1.18 2.85-1.18.58 0 1.14.11 1.66.34.53.23 1 .55 1.42.97.44-.09.85-.22 1.24-.4.39-.18.73-.4 1.03-.66-.15.46-.42.87-.82 1.22-.4.35-.85.61-1.36.78.38-.04.76-.12 1.14-.24.38-.12.73-.27 1.06-.45-.27.41-.58.78-.93 1.12-.35.34-.72.61-1.11.82z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="footer__links">
              <div className="footer__section">
                <h4 className="footer__section-title">Who We are</h4>
                <div className="footer__section-content">
                  <a href="/about" className="footer__link">About us</a>
                </div>
              </div>
              
              <div className="footer__section">
                <h4 className="footer__section-title">Other information</h4>
                <div className="footer__section-content">
                  <a href="https://vsvcapital.com" className="footer__link" target="_blank" rel="noopener noreferrer">Vsvcapital</a>
                  <a href="https://artcozy.com" className="footer__link" target="_blank" rel="noopener noreferrer">artcozy</a>
                  <a href="https://vsvfoundation.com" className="footer__link" target="_blank" rel="noopener noreferrer">vsvfoundation</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer__bottom">
            <p className="footer__copyright">© Art & Venture Foundation. All rights reserved.</p>
          </div>
        </div>
        
        <div className="footer__logo">
          <img 
            src="https://www.figma.com/api/mcp/asset/7dcf134e-e95d-463c-9945-9c957c64b181" 
            alt="AV Foundation" 
            className="footer__logo-img"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;



