import React, { useEffect } from "react";
import { Button, Icon, Typography } from "../../../design-system/atoms";
import "./ContentModal.css";

export type ModalSize = "small" | "medium" | "large";
export type ModalType = "news" | "event" | "artwork" | "artist" | "knowledge";
export type ModalVariant = "light" | "dark";

export interface AuthorCardData {
  avatar: string;
  name: string;
  email?: string;
  phone?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSize;
  type?: ModalType;
  variant?: ModalVariant;
  imageUrl?: string;
  title: string;
  description: string;
  expandedContent?: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
  showAuthorCard?: boolean;
  authorData?: AuthorCardData;
}

const ContentModal: React.FC<ContentModalProps> = ({
  isOpen,
  onClose,
  size = "medium",
  type = "news",
  variant = "light",
  imageUrl,
  title,
  description,
  expandedContent,
  ctaText = "DETAIL",
  onCtaClick,
  showAuthorCard = false,
  authorData,
}) => {
  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`content-modal-backdrop content-modal-backdrop--${variant}`} 
        onClick={onClose} 
      />

      {/* Close Button - Fixed position for dark variant */}
      <button
        className={`content-modal__close content-modal__close--${variant}`}
        onClick={onClose}
        aria-label="Close modal"
      >
        <Icon name="close" size="md" />
      </button>

      {/* Modal */}
      <div className={`content-modal content-modal--${size} content-modal--${variant}`}>
        <div className="content-modal__container">
          {/* Image - only show if imageUrl is provided */}
          {imageUrl && (
            <div className="content-modal__image">
              <img src={imageUrl} alt={title} />
            </div>
          )}

          {/* Content */}
          <div className="content-modal__content">
            <div className="content-modal__text-content">
              <Typography variant="h3" as="h2" className="content-modal__title">
                {title}
              </Typography>

              <Typography variant="body-md" className="content-modal__description">
                {description}
              </Typography>

              {/* Expanded Content - for larger modals */}
              {expandedContent && (
                <Typography
                  variant="body-md"
                  className="content-modal__expanded-content"
                >
                  {expandedContent}
                </Typography>
              )}
            </div>

            {/* Author Card - for dark variant */}
            {showAuthorCard && authorData && (
              <div className="content-modal__author-card">
                <div className="content-modal__author-info">
                  <img 
                    src={authorData.avatar} 
                    alt={authorData.name}
                    className="content-modal__author-avatar"
                  />
                  <div className="content-modal__author-details">
                    <p className="content-modal__author-name">{authorData.name}</p>
                    {(authorData.email || authorData.phone) && (
                      <p className="content-modal__author-contact">
                        {authorData.email}{authorData.email && authorData.phone && ' - '}{authorData.phone}
                      </p>
                    )}
                  </div>
                  {authorData.socialLinks && (
                    <div className="content-modal__author-social">
                      {authorData.socialLinks.facebook && (
                        <a href={authorData.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                          <Icon name="share" size="sm" />
                        </a>
                      )}
                      {authorData.socialLinks.instagram && (
                        <a href={authorData.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                          <Icon name="share" size="sm" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <button className="content-modal__author-more">
                  <span>More</span>
                  <Icon name="chevron-down" size="sm" />
                </button>
              </div>
            )}

            {/* CTA Button - for light variant */}
            {!showAuthorCard && ctaText && (
              <div className="content-modal__actions">
                <Button
                  variant="outline"
                  size="md"
                  onClick={onCtaClick || onClose}
                >
                  {ctaText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentModal;

