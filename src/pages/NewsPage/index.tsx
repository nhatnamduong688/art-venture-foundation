import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../design-system/organisms';
import { newsAPI, NewsArticle, getNewsImageUrl, formatNewsDate, getNewsTitle, getNewsExcerpt } from '../../api/news';
import './NewsPage.css';

const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const limit = 12;

  // Fetch news articles from API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await newsAPI.getAll(currentPage, limit, 'date', 'desc');
        
        if (response.success && response.data) {
          setNewsArticles(response.data.data);
          setTotalItems(response.data.meta.total);
        }
      } catch (err: any) {
        console.error('Error fetching news:', err);
        setError(err.message || 'Failed to load news articles');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [currentPage]);

  // Handle search
  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      // If search is empty, reload all news
      setCurrentPage(1);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await newsAPI.search(searchTerm, 1, limit);
      
      if (response.success && response.data) {
        setNewsArticles(response.data.data);
        setTotalItems(response.data.meta.total);
        setCurrentPage(1);
      }
    } catch (err: any) {
      console.error('Error searching news:', err);
      setError(err.message || 'Failed to search news articles');
    } finally {
      setLoading(false);
    }
  };

  // Handle load more
  const handleLoadMore = () => {
    if (currentPage * limit < totalItems) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const hasMore = currentPage * limit < totalItems;

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
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
              <button 
                className="news-page__search-button"
                onClick={handleSearch}
                aria-label="Search"
              >
                Search
              </button>
            </div>
            
            <button className="news-page__filter" aria-label="Filter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 7H21M6 12H18M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Loading State */}
        {loading && newsArticles.length === 0 && (
          <div className="news-page__loading">
            <div className="loading-spinner">Loading news...</div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="news-page__error">
            <p>Error: {error}</p>
            <button 
              className="news-page__retry-button"
              onClick={() => {
                setCurrentPage(1);
                setSearchTerm('');
              }}
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && newsArticles.length === 0 && (
          <div className="news-page__empty">
            <p>No news articles found.</p>
          </div>
        )}
        
        {/* News List */}
        {!error && newsArticles.length > 0 && (
          <>
        <div className="news-page__list">
              {newsArticles.map((article) => {
                const imageUrl = getNewsImageUrl(article.featuredImage);
                const title = getNewsTitle(article);
                const excerpt = getNewsExcerpt(article);
                const date = formatNewsDate(article.publishedAt || article.createdAt);

                return (
            <Link 
              key={article.id}
              to={`/news/${article.id}`}
              className="news-item-row"
            >
              <div className="news-item-row__image">
                      {imageUrl ? (
                        <img src={imageUrl} alt={title} />
                      ) : (
                        <div className="news-item-row__image-placeholder">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="currentColor"/>
                          </svg>
                        </div>
                      )}
              </div>
              
              <div className="news-item-row__content">
                <div className="news-item-row__text">
                        <h3 className="news-item-row__title">{title}</h3>
                        <p className="news-item-row__description">
                          {excerpt || article.content?.substring(0, 150) + '...'}
                        </p>
                  
                  <button className="news-item-row__link">
                    VIEW DETAIL
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                      <span className="news-item-row__date">{date}</span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="news-page__load-more">
                <button 
                  className="news-page__load-more-button"
                  onClick={handleLoadMore}
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'LOAD MORE'}
                </button>
              </div>
            )}

            {/* Show total count */}
            {!hasMore && totalItems > 0 && (
              <div className="news-page__total">
                Showing all {totalItems} news article{totalItems !== 1 ? 's' : ''}
        </div>
            )}
          </>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsPage;

