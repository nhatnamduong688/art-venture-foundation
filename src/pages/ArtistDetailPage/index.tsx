import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import './ArtistDetailPage.css';

const ArtistDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('bio');

  // Mock data
  const artist = {
    id: id || '1',
    name: "Đào Hải Phong",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Đào Hải Phong (sinh 1965) là nghệ sĩ đương đại nổi bật với các tác phẩm sắp đặt khám phá bản sắc văn hóa trong bối cảnh toàn cầu hóa. Tác phẩm của ông thường kết hợp công nghệ hiện đại với truyền thống để tạo ra những trải nghiệm nghệ thuật độc đáo.",
    birthYear: "1965 - nay",
    birthPlace: "Sinh tại Hà Nội",
    currentLocation: "Hiện tại: Hà Nội",
    artworkCount: "23 tác phẩm",
    materials: "Hỗn hợp đa phương tiện • DIGITAL_TECHNOLOGY • TRADITIONAL_MATERIALS • SOUND • VIDEO",
    techniques: "Kỹ thuật sắp đặt • Nghệ thuật video • Nghệ thuật âm thanh • Truyền thông tương tác",
    themes: "Bản sắc văn hóa • Toàn cầu hóa • Truyền thống & Hiện đại • Chuyển đổi xã hội",
    style: "Nghệ thuật sắp đặt • Đa phương tiện • Đương đại Việt Nam • Nghệ thuật khái niệm",
    quote: "Trong thời đại toàn cầu hóa, tôi muốn tìm kiếm và khẳng định bản sắc văn hóa Việt Nam thông qua ngôn ngữ nghệ thuật đương đại. Mỗi tác phẩm là cầu nối giữa quá khứ và hiện tại, giữa địa phương và toàn cầu.",
    detailedBio: "Đào Hải Phong (sinh 1965) là nghệ sĩ đương đại nổi bật với các tác phẩm sắp đặt khám phá bản sắc văn hóa trong bối cảnh toàn cầu hóa.",
    milestones: [
      "1985: Nhập học Trường Đại học Mỹ thuật Hà Nội",
      "1990: Tốt nghiệp xuất sắc",
      "1995-1997: Nghiên cứu tại Paris",
      "2016: Tham gia Singapore Biennale",
      "2017: Triển lãm tại Venice Biennale"
    ],
    influences: [
      "Văn hóa truyền thống Việt Nam",
      "Nghệ thuật sắp đặt phương Tây",
      "Công nghệ đương đại"
    ]
  };

  const tabs = [
    { id: 'bio', label: 'Tiểu sử' },
    { id: 'education', label: 'Học vấn' },
    { id: 'exhibitions', label: 'Triển lãm' },
    { id: 'works', label: 'Tác phẩm' },
    { id: 'notes', label: 'Ghi chú' },
    { id: 'documents', label: 'Tài liệu' }
  ];

  return (
    <div className="artist-detail-page">
      <div className="artist-detail-container">
        {/* Back Button */}
        <Link to="/artists" className="artist-detail-back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Main Content */}
        <div className="artist-detail-main">
          {/* Left: Portrait & Quote */}
          <div className="artist-detail-left">
            <div className="artist-portrait">
              <img src={artist.portrait} alt={artist.name} />
            </div>
            
            <div className="artist-quote">
              <div className="artist-quote__mark">"</div>
              <p className="artist-quote__text">{artist.quote}</p>
            </div>
          </div>

          {/* Right: Info */}
          <div className="artist-detail-right">
            <h1 className="artist-name">{artist.name}</h1>
            <p className="artist-bio">{artist.bio}</p>

            {/* Info Grid */}
            <div className="artist-info-grid">
              <div className="artist-info-item">
                <span className="artist-info-label">{artist.birthYear}</span>
              </div>
              <div className="artist-info-item">
                <span className="artist-info-label">{artist.birthPlace}</span>
              </div>
              <div className="artist-info-item">
                <span className="artist-info-label">{artist.currentLocation}</span>
              </div>
              <div className="artist-info-item">
                <span className="artist-info-label">{artist.artworkCount}</span>
              </div>
            </div>

            {/* Details */}
            <div className="artist-details">
              <div className="artist-detail-section">
                <h3 className="artist-detail-title">Chất Liệu Chính</h3>
                <p className="artist-detail-text">{artist.materials}</p>
              </div>

              <div className="artist-detail-section">
                <h3 className="artist-detail-title">Kỹ Thuật</h3>
                <p className="artist-detail-text">{artist.techniques}</p>
              </div>

              <div className="artist-detail-section">
                <h3 className="artist-detail-title">Chủ Đề</h3>
                <p className="artist-detail-text">{artist.themes}</p>
              </div>

              <div className="artist-detail-section">
                <h3 className="artist-detail-title">Phong Cách</h3>
                <p className="artist-detail-text">{artist.style}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="artist-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`artist-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="artist-tab-content">
              {activeTab === 'bio' && (
                <>
                  <div className="artist-content-section">
                    <h3 className="artist-content-title">Tiểu Sử Chi Tiết</h3>
                    <p className="artist-content-text">{artist.detailedBio}</p>
                  </div>

                  <div className="artist-content-section">
                    <h3 className="artist-content-title">Cột Mốc Quan Trọng</h3>
                    <ul className="artist-content-list">
                      {artist.milestones.map((milestone, index) => (
                        <li key={index}>{milestone}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="artist-content-section">
                    <h3 className="artist-content-title">Ảnh Hưởng Nghệ Thuật</h3>
                    <ul className="artist-content-list">
                      {artist.influences.map((influence, index) => (
                        <li key={index}>{influence}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {activeTab !== 'bio' && (
                <p className="artist-content-text">Nội dung cho tab {tabs.find(t => t.id === activeTab)?.label} sẽ được cập nhật.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArtistDetailPage;

