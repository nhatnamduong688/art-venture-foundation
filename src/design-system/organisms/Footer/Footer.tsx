/**
 * Organism Component - Footer
 * Main footer using design system components
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '../../atoms/Typography';
import { Icon } from '../../atoms/Icon';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="ds-footer">
      <div className="ds-footer__container">
        <div className="ds-footer__content">
          <div className="ds-footer__main">
            <div className="ds-footer__info">
              <Typography variant="h4" as="h3" className="ds-footer__title">
                Arts & Venture Foundation (AVF)
              </Typography>
              <div className="ds-footer__contact">
                <Typography variant="body-sm" as="p">
                  A: 5/F Building 112 Tu Hoa, Tay Ho, Hanoi
                </Typography>
                <Typography variant="body-sm" as="p">
                  A: 25/F D' Le Roi Soleil, 59 Xuan Dieu, Tay Ho, Hanoi
                </Typography>
                <Typography variant="body-sm" as="p">
                  E: <a href="mailto:info@avfoundation.com.vn" className="ds-footer__email-link">info@avfoundation.com.vn</a>
                </Typography>
              </div>
              <div className="ds-footer__social">
                <a
                  href="https://facebook.com"
                  className="ds-footer__social-link"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="facebook" size="md" />
                </a>
                <a
                  href="https://instagram.com"
                  className="ds-footer__social-link"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="instagram" size="md" />
                </a>
                <a
                  href="https://twitter.com"
                  className="ds-footer__social-link"
                  aria-label="Twitter/X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="twitter" size="md" />
                </a>
                <a
                  href="https://tiktok.com"
                  className="ds-footer__social-link"
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="tiktok" size="md" />
                </a>
              </div>
            </div>

            <div className="ds-footer__links">
              <div className="ds-footer__section">
                <Typography variant="body-md" weight="semibold" as="h4" className="ds-footer__section-title">
                  Who We are
                </Typography>
                <div className="ds-footer__section-content">
                  <Link to="/about" className="ds-footer__link">
                    <Typography variant="body-sm">About us</Typography>
                  </Link>
                </div>
              </div>

              <div className="ds-footer__section">
                <Typography variant="body-md" weight="semibold" as="h4" className="ds-footer__section-title">
                  Other information
                </Typography>
                <div className="ds-footer__section-content">
                  <a
                    href="https://vsvcapital.com"
                    className="ds-footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography variant="body-sm">Vsvcapital</Typography>
                  </a>
                  <a
                    href="https://artcozy.com"
                    className="ds-footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography variant="body-sm">artcozy</Typography>
                  </a>
                  <a
                    href="https://vsvfoundation.com"
                    className="ds-footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography variant="body-sm">vsvfoundation</Typography>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="ds-footer__bottom">
            <Typography variant="body-sm" className="ds-footer__copyright">
              © Art & Venture Foundation. All rights reserved.
            </Typography>
          </div>
        </div>

        <div className="ds-footer__logo">
          <img
            src="/images/footer/av-logo-watermark.svg"
            alt="AV Foundation"
            className="ds-footer__logo-img"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

