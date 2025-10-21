import React, { useEffect } from "react";
import { Button, Icon, Typography } from "../../../design-system/atoms";
import "./ContentModal.css";

export type ModalSize = "small" | "medium" | "large";
export type ModalType = "news" | "event" | "artwork" | "artist" | "knowledge";

export interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSize;
  type?: ModalType;
  imageUrl?: string;
  title: string;
  description: string;
  expandedContent?: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
}

const ContentModal: React.FC<ContentModalProps> = ({
  isOpen,
  onClose,
  size = "medium",
  type = "news",
  imageUrl,
  title,
  description,
  expandedContent,
  ctaText = "DETAIL",
  onCtaClick,
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
      <div className="content-modal-backdrop" onClick={onClose} />

      {/* Modal */}
      <div className={`content-modal content-modal--${size}`}>
        <button
          className="content-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <Icon name="close" size="md" />
        </button>

        <div className="content-modal__container">
          {/* Image - only show if imageUrl is provided */}
          {imageUrl && (
            <div className="content-modal__image">
              <img src={imageUrl} alt={title} />
            </div>
          )}

          {/* Content */}
          <div className="content-modal__content">
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

            {/* CTA Button */}
            {ctaText && (
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

