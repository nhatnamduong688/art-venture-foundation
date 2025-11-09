import React from 'react';
import './AVNews.css';

interface NewsItem {
  id: number;
  title: string;
  description: string;
}

const AVNews: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Harvard Museum of Arts - Bộ sưu tập của Maurice Wertheim, Khóa 1906",
      description: "Maurice Wertheim (1886–1950), tốt nghiệp Đại học Harvard khóa 1906, là một nhà đầu tư ngân hàng đến từ New York. Ông bắt đầu sưu tập bộ tác phẩm nghệ thuật nổi tiếng của mình vào những năm 1930, với các kiệt tác của những danh họa như Edgar Degas, Claude Monet, Pierre-Auguste Renoir, cũng như các nghệ sĩ đương đại thời đó như Aristide Maillol, Henri Matisse và Pablo Picasso."
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
    <section className="av-news section">
      <div className="container">
        <h2 className="av-news__title">A&V News</h2>
        <div className="av-news__grid">
          {newsItems.map((item) => (
            <div key={item.id} className="news-item">
              <div className="news-item__content">
                <h3 className="news-item__title">{item.title}</h3>
                <p className="news-item__description">{item.description}</p>
              </div>
              <button className="news-item__link">
                <span>XEM CHI TIẾT</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="av-news__footer">
          <button className="av-news__view-all">
            <span>VIEW ALL</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AVNews;
