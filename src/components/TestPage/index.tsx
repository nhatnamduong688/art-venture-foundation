import React from 'react';
import './TestPage.css';

const TestPage: React.FC = () => {
  return (
    <div className="test-page">
      <div className="test-page__container">
        <h1 className="test-page__title">Test Page</h1>
        <p className="test-page__description">
          Đây là trang test để bạn kiểm tra routing và các component.
        </p>
        
        <div className="test-page__content">
          <div className="test-card">
            <h3>Component Test</h3>
            <p>Kiểm tra các component đã tạo</p>
            <button className="btn btn-black">
              Test Button
              <div className="btn-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
          
          <div className="test-card">
            <h3>Styling Test</h3>
            <p>Kiểm tra CSS và responsive design</p>
            <div className="test-colors">
              <div className="color-box color-primary"></div>
              <div className="color-box color-secondary"></div>
              <div className="color-box color-accent"></div>
            </div>
          </div>
          
          <div className="test-card">
            <h3>Typography Test</h3>
            <p>Kiểm tra các font và kích thước chữ</p>
            <div className="typography-test">
              <h1 className="text-large">Large Text</h1>
              <h2 className="text-medium">Medium Text</h2>
              <h3 className="text-small">Small Text</h3>
              <p className="text-body">Body Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;



