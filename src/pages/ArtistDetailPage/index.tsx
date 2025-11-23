import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../../design-system/organisms';
import { artistsAPI, ArtistDetail, getArtistImageUrl } from '../../api/artists';
import './ArtistDetailPage.css';

const ArtistDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('bio');
  const [artist, setArtist] = useState<ArtistDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  // Fetch artist detail from API
  useEffect(() => {
    const fetchArtist = async () => {
      if (!id) {
        setError('Artist ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await artistsAPI.getById(id);
        setArtist(data);
      } catch (err: any) {
        console.error('Error fetching artist:', err);
        setError(err.message || 'Failed to load artist details');
      } finally {
        setLoading(false);
      }
    };

    fetchArtist();
  }, [id]);

  const tabs = [
    { id: 'bio', label: 'Tiểu sử' },
    { id: 'education', label: 'Học vấn' },
    { id: 'exhibitions', label: 'Triển lãm' },
    { id: 'works', label: 'Tác phẩm' },
    { id: 'notes', label: 'Ghi chú' },
    { id: 'documents', label: 'Tài liệu' }
  ];

  // Loading state with skeleton
  if (loading) {
    return (
      <div className="artist-detail-page">
        <div className="artist-detail-container">
          {/* Back Button Skeleton */}
          <div className="artist-detail-back skeleton"></div>

          {/* Main Content Skeleton */}
          <div className="artist-detail-main">
            {/* Left: Portrait Skeleton */}
            <div className="artist-detail-left">
              <div className="artist-portrait skeleton"></div>
            </div>

            {/* Right: Info Skeleton */}
            <div className="artist-detail-right">
              <div className="skeleton skeleton-title"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text" style={{ width: '80%' }}></div>
              
              <div className="artist-info-grid">
                <div className="skeleton skeleton-info-item"></div>
                <div className="skeleton skeleton-info-item"></div>
                <div className="skeleton skeleton-info-item"></div>
                <div className="skeleton skeleton-info-item"></div>
              </div>

              <div className="artist-details">
                <div className="skeleton skeleton-section-title"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text" style={{ width: '90%' }}></div>
              </div>

              <div className="artist-tabs">
                <div className="skeleton skeleton-tab"></div>
                <div className="skeleton skeleton-tab"></div>
                <div className="skeleton skeleton-tab"></div>
                <div className="skeleton skeleton-tab"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error || !artist) {
    return (
      <div className="artist-detail-page">
        <div className="artist-detail-container">
          <Link to="/artists" className="artist-detail-back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div className="artist-detail-error">
            <h2>Không tìm thấy nghệ sĩ</h2>
            <p>{error || 'Nghệ sĩ bạn đang tìm không tồn tại.'}</p>
            <Link to="/artists" className="artist-detail-error-button">
              Về trang danh sách
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
              {artist.portraitImage ? (
                <img 
                  src={getArtistImageUrl(artist.portraitImage)!} 
                  alt={artist.fullName}
                  className={imageLoaded ? 'loaded' : 'loading'}
                  onLoad={() => setImageLoaded(true)}
                  loading="eager"
                />
              ) : (
                <div className="artist-portrait-placeholder">
                  {artist.fullName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            
            <div className="artist-quote">
              <div className="artist-quote__mark">"</div>
              <p className="artist-quote__text">
                {artist.artistStatement || "Nghệ thuật là ngôn ngữ của tâm hồn, là cách tôi kể những câu chuyện về văn hóa và con người qua từng tác phẩm."}
              </p>
            </div>
          </div>

          {/* Right: Info */}
          <div className="artist-detail-right">
            <h1 className="artist-name">{artist.fullName}</h1>
            <p className="artist-bio">{artist.bioSummary || artist.biography}</p>

            {/* Info Grid */}
            <div className="artist-info-grid">
              {artist.generation && (
                <div className="artist-info-item">
                  <span className="artist-info-label">{artist.generation}</span>
                </div>
              )}
              {artist.placeOfBirth && (
                <div className="artist-info-item">
                  <span className="artist-info-label">Sinh tại {artist.placeOfBirth}</span>
                </div>
              )}
              {artist.currentResidence && (
                <div className="artist-info-item">
                  <span className="artist-info-label">Hiện tại: {artist.currentResidence}</span>
                </div>
              )}
              <div className="artist-info-item">
                <span className="artist-info-label">{artist.artworksCount} tác phẩm</span>
              </div>
            </div>

            {/* Details */}
            <div className="artist-details">
              {artist.primaryMaterials && artist.primaryMaterials.length > 0 && (
                <div className="artist-detail-section">
                  <h3 className="artist-detail-title">Chất Liệu Chính</h3>
                  <p className="artist-detail-text">{artist.primaryMaterials.join(' • ')}</p>
                </div>
              )}

              {artist.techniques && artist.techniques.length > 0 && (
                <div className="artist-detail-section">
                  <h3 className="artist-detail-title">Kỹ Thuật</h3>
                  <p className="artist-detail-text">{artist.techniques.join(' • ')}</p>
                </div>
              )}

              {artist.themes && artist.themes.length > 0 && (
                <div className="artist-detail-section">
                  <h3 className="artist-detail-title">Chủ Đề</h3>
                  <p className="artist-detail-text">{artist.themes.join(' • ')}</p>
                </div>
              )}

              {artist.styles && artist.styles.length > 0 && (
                <div className="artist-detail-section">
                  <h3 className="artist-detail-title">Phong Cách</h3>
                  <p className="artist-detail-text">{artist.styles.join(' • ')}</p>
                </div>
              )}
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
                  {artist.biography && (
                    <div className="artist-content-section">
                      <h3 className="artist-content-title">Tiểu Sử Chi Tiết</h3>
                      <p className="artist-content-text">{artist.biography}</p>
                    </div>
                  )}

                  {artist.milestones && artist.milestones.length > 0 && (
                    <div className="artist-content-section">
                      <h3 className="artist-content-title">Cột Mốc Quan Trọng</h3>
                      <ul className="artist-content-list">
                        {artist.milestones.map((milestone, index) => (
                          <li key={index}>{milestone}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {artist.artInfluences && artist.artInfluences.length > 0 && (
                    <div className="artist-content-section">
                      <h3 className="artist-content-title">Ảnh Hưởng Nghệ Thuật</h3>
                      <ul className="artist-content-list">
                        {artist.artInfluences.map((influence, index) => (
                          <li key={index}>{influence}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}

              {activeTab === 'education' && (
                <div className="artist-content-section">
                  {artist.education && artist.education.length > 0 ? (
                    <ul className="artist-content-list">
                      {artist.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="artist-content-text">Thông tin học vấn chưa được cập nhật.</p>
                  )}
                </div>
              )}

              {activeTab === 'exhibitions' && (
                <>
                  {artist.soloExhibitions && artist.soloExhibitions.length > 0 && (
                    <div className="artist-content-section">
                      <h3 className="artist-content-title">Triển Lãm Cá Nhân</h3>
                      <ul className="artist-content-list">
                        {artist.soloExhibitions.map((ex, index) => (
                          <li key={index}>{ex}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {artist.groupExhibitions && artist.groupExhibitions.length > 0 && (
                    <div className="artist-content-section">
                      <h3 className="artist-content-title">Triển Lãm Nhóm</h3>
                      <ul className="artist-content-list">
                        {artist.groupExhibitions.map((ex, index) => (
                          <li key={index}>{ex}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {artist.internationalExhibitions && artist.internationalExhibitions.length > 0 && (
                    <div className="artist-content-section">
                      <h3 className="artist-content-title">Triển Lãm Quốc Tế</h3>
                      <ul className="artist-content-list">
                        {artist.internationalExhibitions.map((ex, index) => (
                          <li key={index}>{ex}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(!artist.soloExhibitions || artist.soloExhibitions.length === 0) &&
                   (!artist.groupExhibitions || artist.groupExhibitions.length === 0) &&
                   (!artist.internationalExhibitions || artist.internationalExhibitions.length === 0) && (
                    <p className="artist-content-text">Thông tin triển lãm chưa được cập nhật.</p>
                  )}
                </>
              )}

              {activeTab === 'works' && (
                <div className="artist-content-section">
                  <p className="artist-content-text">
                    Nghệ sĩ có {artist.artworksCount} tác phẩm trong bộ sưu tập.
                  </p>
                </div>
              )}

              {activeTab === 'notes' && (
                <div className="artist-content-section">
                  <p className="artist-content-text">Ghi chú sẽ được cập nhật.</p>
                </div>
              )}

              {activeTab === 'documents' && (
                <div className="artist-content-section">
                  {artist.awards && artist.awards.length > 0 && (
                    <>
                      <h3 className="artist-content-title">Giải Thưởng</h3>
                      <ul className="artist-content-list">
                        {artist.awards.map((award, index) => (
                          <li key={index}>{award}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {artist.booksCatalogues && artist.booksCatalogues.length > 0 && (
                    <>
                      <h3 className="artist-content-title">Sách & Catalogue</h3>
                      <ul className="artist-content-list">
                        {artist.booksCatalogues.map((book, index) => (
                          <li key={index}>{book}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {(!artist.awards || artist.awards.length === 0) &&
                   (!artist.booksCatalogues || artist.booksCatalogues.length === 0) && (
                    <p className="artist-content-text">Tài liệu chưa được cập nhật.</p>
                  )}
                </div>
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

