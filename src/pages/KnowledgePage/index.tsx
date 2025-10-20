import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import './KnowledgePage.css';

interface KnowledgeCategory {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  items: string[];
}

const KnowledgePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories: KnowledgeCategory[] = [
    {
      id: 'museums',
      icon: '🏛️',
      title: 'Arts Museums',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan.',
      image: 'https://images.unsplash.com/photo-1566127444032-b726a4cb9754?w=800',
      items: [
        'Lorem ipsum dolor sit amet consectetur',
        'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in',
        'Lorem ipsum dolor sit amet consectetur'
      ]
    },
    {
      id: 'schools',
      icon: '🎓',
      title: 'Art Schools',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan. Sit integer magna purus tincidunt in ipsum.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
      items: [
        'Lorem ipsum dolor sit amet consectetur',
        'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in',
        'Lorem ipsum dolor sit amet consectetur'
      ]
    },
    {
      id: 'books',
      icon: '📚',
      title: 'Art Books',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan. Sit integer magna purus tincidunt in ipsum.',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800',
      items: [
        'Lorem ipsum dolor sit amet consectetur',
        'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in',
        'Lorem ipsum dolor sit amet consectetur'
      ]
    },
    {
      id: 'magazines',
      icon: '📰',
      title: 'Art Magazines',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan. Sit integer magna purus tincidunt in ipsum.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      items: [
        'Lorem ipsum dolor sit amet consectetur',
        'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in',
        'Lorem ipsum dolor sit amet consectetur'
      ]
    },
    {
      id: 'spaces',
      icon: '🎨',
      title: 'Art Spaces & Galleries',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan. Sit integer magna purus tincidunt in ipsum.',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800',
      items: [
        'Lorem ipsum dolor sit amet consectetur',
        'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in',
        'Lorem ipsum dolor sit amet consectetur'
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
                <div className="knowledge-category__icon">{category.icon}</div>
                <Link to={`/knowledge/${category.id}`} className="knowledge-category__view">
                  DETAIL
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

              {/* Category Image */}
              <div className="knowledge-category__image">
                <img src={category.image} alt={category.title} />
              </div>

              {/* Category Content */}
              <div className="knowledge-category__content">
                <div className="knowledge-category__left">
                  <h2 className="knowledge-category__title">{category.title}</h2>
                  <p className="knowledge-category__description">{category.description}</p>
                </div>

                <div className="knowledge-category__right">
                  <ul className="knowledge-category__list">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="knowledge-category__item">
                        <span className="knowledge-category__number">{itemIndex + 1}</span>
                        <span className="knowledge-category__text">{item}</span>
                      </li>
                    ))}
                  </ul>
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

