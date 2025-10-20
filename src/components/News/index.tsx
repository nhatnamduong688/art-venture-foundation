import React from 'react';
import './News.css';

interface NewsArticle {
  id: number;
  title: string;
  description: string;
}

const News: React.FC = () => {
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper risus neque mus at lectus. Diam tristique convallis egestas sed arcu. Urna metus natoque velit arcu lobortis nulla molestie nisi augue. Eu blandit commodo augue placerat at."
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur. Arcu ullamcorper feugiat ultricies lacinia. Odio sit id nulla eget pharetra pharetra diam malesuada. Lectus."
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur. Suspendisse sollicitudin arcu nulla velit eget nisl arcu pharetra. Sapien ipsum pretium volutpat ac in. Consectetur."
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur. Convallis augue pretium sit amet consequat. Volutpat nulla amet diam."
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur. Ullamcorper risus neque mus at lectus. Diam tristique convallis egestas sed arcu. Urna metus natoque velit arcu lobortis nulla molestie nisi augue. Eu blandit commodo augue placerat at."
    }
  ];

  return (
    <section className="news section">
      <div className="container">
        <h2 className="news__title">A&V News</h2>
        
        <div className="news__content">
          <div className="news__row">
            {newsArticles.slice(0, 3).map((article) => (
              <div key={article.id} className="news-item">
                <div className="news-item__text">
                  <h3 className="news-item__title">{article.title}</h3>
                  <p className="news-item__description">{article.description}</p>
                </div>
                <button className="news-item__link">
                  <span>DETAIL</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
          
          <div className="news__row">
            {newsArticles.slice(3, 5).map((article) => (
              <div key={article.id} className="news-item">
                <div className="news-item__text">
                  <h3 className="news-item__title">{article.title}</h3>
                  <p className="news-item__description">{article.description}</p>
                </div>
                <button className="news-item__link">
                  <span>DETAIL</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

