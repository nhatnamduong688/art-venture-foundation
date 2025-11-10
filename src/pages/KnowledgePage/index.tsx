import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../design-system/organisms';
import './KnowledgePage.css';

interface KnowledgeItem {
  title: string;
  description: string;
}

interface KnowledgeCategory {
  id: string;
  iconImage: string;
  title: string;
  description: string;
  heroImage: string;
  items: KnowledgeItem[];
}

const KnowledgePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories: KnowledgeCategory[] = [
    {
      id: 'museums',
      iconImage: '/images/knowledge/icons/museums.svg',
      title: 'Arts Museums',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan.',
      heroImage: '/images/knowledge/heroes/museums.jpg',
      items: [
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan.'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Duis pretium sollicitudin etiam montes diam quam morbi. Fermentum augue faucibus ullamcorper feugiat eget lobortis. Amet risus nunc commodo habitant. Sit sit lacus ornare ut.'
        }
      ]
    },
    {
      id: 'schools',
      iconImage: '/images/knowledge/icons/schools.svg',
      title: 'Art Schools',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan. Sit integer magna purus tincidunt in ipsum.',
      heroImage: '/images/knowledge/heroes/schools.jpg',
      items: [
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan.'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Duis pretium sollicitudin etiam montes diam quam morbi. Fermentum augue faucibus ullamcorper feugiat eget lobortis. Amet risus nunc commodo habitant. Sit sit lacus ornare ut.'
        }
      ]
    },
    {
      id: 'books',
      iconImage: '/images/knowledge/icons/books.svg',
      title: 'Art Books',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan. Sit integer magna purus tincidunt in ipsum.',
      heroImage: '/images/knowledge/heroes/books.jpg',
      items: [
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan.'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Duis pretium sollicitudin etiam montes diam quam morbi. Fermentum augue faucibus ullamcorper feugiat eget lobortis. Amet risus nunc commodo habitant. Sit sit lacus ornare ut.'
        }
      ]
    },
    {
      id: 'magazines',
      iconImage: '/images/knowledge/icons/magazines.svg',
      title: 'Art Magazines',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan. Sit integer magna purus tincidunt in ipsum.',
      heroImage: '/images/knowledge/heroes/magazines.jpg',
      items: [
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan.'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Duis pretium sollicitudin etiam montes diam quam morbi. Fermentum augue faucibus ullamcorper feugiat eget lobortis. Amet risus nunc commodo habitant. Sit sit lacus ornare ut.'
        }
      ]
    },
    {
      id: 'spaces',
      iconImage: '/images/knowledge/icons/spaces.svg',
      title: 'Art Spaces & Galleries',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan. Sit integer magna purus tincidunt in ipsum.',
      heroImage: '/images/knowledge/heroes/spaces.jpg',
      items: [
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan.'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Duis pretium sollicitudin etiam montes diam quam morbi. Fermentum augue faucibus ullamcorper feugiat eget lobortis. Amet risus nunc commodo habitant. Sit sit lacus ornare ut.'
        }
      ]
    }
  ];

  const filteredCategories = categories.filter(cat =>
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="knowledge-page">
      <div className="knowledge-container">
        {/* Header */}
        <div className="knowledge-header">
          <h1 className="knowledge-title">Knowledge</h1>
          
          <div className="knowledge-actions">
            <div className="knowledge-search">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input 
                type="text" 
                placeholder="Tìm kiếm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button className="knowledge-filter" aria-label="Filter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 7H21M6 12H18M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="knowledge-categories">
          {filteredCategories.map((category, index) => (
            <div key={category.id} className="knowledge-category">
              {/* Category Header */}
              <div className="knowledge-category__header">
                <div className="knowledge-category__icon-wrapper">
                  <img src={category.iconImage} alt={category.title} className="knowledge-category__icon" />
                </div>
                <Link to={`/knowledge/${category.id}`} className="knowledge-category__view">
                  VIEW DETAIL
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

              {/* Category Hero Image */}
              <div className="knowledge-category__hero">
                <img src={category.heroImage} alt={category.title} />
              </div>

              {/* Category Content */}
              <div className="knowledge-category__content">
                {/* Left Column */}
                <div className="knowledge-category__left">
                  <h2 className="knowledge-category__title">{category.title}</h2>
                  <p className="knowledge-category__description">{category.description}</p>
                </div>

                {/* Vertical Divider */}
                <div className="knowledge-category__divider" />

                {/* Right Column */}
                <div className="knowledge-category__right">
                  <div className="knowledge-category__list">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="knowledge-category__item">
                        <div className="knowledge-category__item-header">
                          <div className="knowledge-category__number">{itemIndex + 1}</div>
                          <div className="knowledge-category__item-content">
                            <h3 className="knowledge-category__item-title">{item.title}</h3>
                            <p className="knowledge-category__item-description">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KnowledgePage;

