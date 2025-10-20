/**
 * Molecule Component - Card
 * Reusable card component for content display
 */

import React from 'react';
import './Card.css';

export interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated' | 'museum';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

interface CardComposition extends React.FC<CardProps> {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
  Image: typeof CardImage;
}

export const Card: CardComposition = ({
  variant = 'default',
  padding = 'md',
  children,
  className = '',
  onClick,
  hoverable = false,
}) => {
  const classNames = [
    'ds-card',
    `ds-card--${variant}`,
    `ds-card--padding-${padding}`,
    hoverable && 'ds-card--hoverable',
    onClick && 'ds-card--clickable',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const Component = onClick ? 'button' : 'div';

  return (
    <Component className={classNames} onClick={onClick}>
      {children}
    </Component>
  );
};

// Sub-components for composition
export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`ds-card__header ${className}`}>{children}</div>;

export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`ds-card__body ${className}`}>{children}</div>;

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`ds-card__footer ${className}`}>{children}</div>;

export const CardImage: React.FC<{
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
  className?: string;
}> = ({ src, alt, aspectRatio = 'auto', className = '' }) => (
  <div className={`ds-card__image-container ds-card__image--${aspectRatio} ${className}`}>
    <img src={src} alt={alt} className="ds-card__image" loading="lazy" />
  </div>
);

// Compose Card with sub-components
Card.displayName = 'Card';
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card as CardComposition;

