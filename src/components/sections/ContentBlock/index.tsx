/**
 * ContentBlock Component - Migrated to Design System
 * Reusable content block with title, description, and optional button
 */

import React from 'react';
import { Typography } from '../../../design-system/atoms/Typography';
import { Button } from '../../../design-system/atoms/Button';
import { Icon } from '../../../design-system/atoms/Icon';
import './ContentBlock.css';

interface ContentBlockProps {
  title?: string;
  description?: string;
  buttonText?: string;
  showButton?: boolean;
  className?: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  title = "Art & Venture Foundation",
  description = "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin.",
  buttonText = "MORE",
  showButton = true,
  className = ""
}) => {
  return (
    <div className={`content-block ${className}`}>
      <div className="content-block__container">
        <div className="content-block__content">
          <Typography variant="display-xl" color="burgundy" as="h2" className="content-block__title">
            {title}
          </Typography>
          <Typography variant="body-md" className="content-block__description">
            {description}
          </Typography>
          {showButton && (
            <Button
              variant="burgundy"
              size="md"
              rightIcon={<Icon name="arrow-right" size="lg" />}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;



