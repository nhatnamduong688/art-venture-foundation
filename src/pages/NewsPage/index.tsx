import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../design-system/organisms';
import './NewsPage.css';

interface NewsArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien.",
      image: "/images/news/news-1.jpg",
      date: "15/10/2025"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien.",
      image: "/images/news/news-2.jpg",
      date: "15/10/2025"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien.",
      image: "/images/news/news-3.jpg",
      date: "15/10/2025"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien.",
      image: "/images/news/news-4.jpg",
      date: "16/10/2025"
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien.",
      image: "/images/news/news-5.jpg",
      date: "16/10/2025"
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien.",
      image: "/images/news/news-6.jpg",
      date: "16/10/2025"
    },
    {
      id: 7,
      title: "Lorem ipsum dolor sit amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien.",
      image: "/images/news/news-7.jpg",
      date: "16/10/2025"
    }
  ];

  const filteredNews = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="news-page">
      <div className="news-page__container">
        <div className="news-page__header">
          <h1 className="news-page__title">A&V News</h1>
          
          <div className="news-page__actions">
            <div className="news-page__search">
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
            
            <button className="news-page__filter" aria-label="Filter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 7H21M6 12H18M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="news-page__list">
          {filteredNews.map((article) => (
            <Link 
              key={article.id}
              to={`/news/${article.id}`}
              className="news-item-row"
            >
              <div className="news-item-row__image">
                <img src={article.image} alt={article.title} />
              </div>
              
              <div className="news-item-row__content">
                <div className="news-item-row__text">
                  <h3 className="news-item-row__title">{article.title}</h3>
                  <p className="news-item-row__description">{article.description}</p>
                  
                  <button className="news-item-row__link">
                    VIEW DETAIL
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <span className="news-item-row__date">{article.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsPage;

