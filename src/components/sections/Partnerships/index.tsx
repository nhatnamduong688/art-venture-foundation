/**
 * Partnerships Component - Migrated to Design System
 * Using Typography, Button, Icon, and Card from design system
 */

import React from 'react';
import { Typography } from '../../../design-system/atoms/Typography';
import { Button } from '../../../design-system/atoms/Button';
import { Icon } from '../../../design-system/atoms/Icon';
import { Card } from '../../../design-system/molecules/Card';
import './Partnerships.css';

interface Partnership {
  id: number;
  name: string;
  description: string;
  logo: string;
}

const Partnerships: React.FC = () => {
  const partnerships: Partnership[] = [
    {
      id: 1,
      name: "Partnership 1",
      description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper risus neque mus at lectus. Diam tristique convallis egestas sed arcu. Urna metus natoque velit arcu lobortis nulla molestie nisi augue. Eu blandit commodo augue placerat at.",
      logo: "https://www.figma.com/api/mcp/asset/a3156d2a-6628-4f17-bb51-758d46e6ecc6"
    },
    {
      id: 2,
      name: "Partnership 2",
      description: "Lorem ipsum dolor sit amet consectetur. Arcu ullamcorper feugiat ultricies lacinia. Odio sit id nulla eget pharetra pharetra diam malesuada. Lectus.",
      logo: "https://www.figma.com/api/mcp/asset/c15b9dfd-0efd-4773-b24c-36d8ccf1164a"
    },
    {
      id: 3,
      name: "Partnership 3",
      description: "Lorem ipsum dolor sit amet consectetur. Suspendisse sollicitudin arcu nulla velit eget nisl arcu pharetra. Sapien ipsum pretium volutpat ac in. Consectetur.",
      logo: "https://www.figma.com/api/mcp/asset/8d3ad7b9-3850-4d98-992c-9fbb6fa27556"
    },
    {
      id: 4,
      name: "Partnership 4",
      description: "Lorem ipsum dolor sit amet consectetur. Convallis augue pretium sit amet consequat. Volutpat nulla amet diam.",
      logo: "https://www.figma.com/api/mcp/asset/8281b4e7-5074-45ac-894a-d8e21feecbfa"
    },
    {
      id: 5,
      name: "Partnership 5",
      description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper risus neque mus at lectus. Diam tristique convallis egestas sed arcu. Urna metus natoque velit arcu lobortis nulla molestie nisi augue. Eu blandit commodo augue placerat at.",
      logo: "https://www.figma.com/api/mcp/asset/b825d807-2f4f-421a-a934-ffd35978e8a7"
    }
  ];

  return (
    <section className="partnerships section">
      <div className="container">
        <Typography variant="display-lg" as="h2" className="partnerships__title">
          Partnerships
        </Typography>

        <div className="partnerships__grid">
          {partnerships.map((partnership) => (
            <Card key={partnership.id} className="partnership-card" padding="lg">
              <div className="partnership-card__logo">
                <img
                  src={partnership.logo}
                  alt={`${partnership.name} logo`}
                  className="partnership-card__logo-img"
                  loading="lazy"
                />
              </div>
              <Typography variant="h4" as="h3" className="partnership-card__name">
                {partnership.name}
              </Typography>
              <Typography variant="body-sm" className="partnership-card__description">
                {partnership.description}
              </Typography>
              <Button
                variant="primary"
                size="sm"
                rightIcon={<Icon name="arrow-right" size="md" />}
                className="partnership-card__button"
              >
                DETAIL
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;



