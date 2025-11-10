import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../../design-system/organisms';
import './NewsDetailPage.css';

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data - in real app, fetch based on ID
  const article = {
    id: id || '1',
    title: "Lorem ipsum dolor sit amet consectetur",
    subtitle: "Lorem ipsum dolor sit amet consectetur. Urna mauris amet ipsum risus pharetra mi nam turpis. Urna convallis cras nibh ullamcorper mi amet. Dolor sit sed accumsan et scelerisque sed quis.",
    heroImage: "/images/news-detail/hero-1.jpg",
    contentImage: "/images/news-detail/content-1.jpg",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin.",
      "Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan. Sit integer magna purus tincidunt in ipsum. Egestas nam nec suscipit dignissim tincidunt ac. Consequat volutpat odio tortor a nulla volutpat vehicula quis pharetra. Orci cursus consectetur vitae sit pulvinar tellus. Amet tortor.",
      "Lorem ipsum dolor sit amet consectetur. Leo morbi tincidunt integer consectetur nam eget vel gravida sem. Consectetur blandit suspendisse dui nulla ut purus sit. Volutpat iaculis ut mauris gravida. Amet in arcu purus leo maecenas euismod commodo. Aenean adipiscing pulvinar lectus urna tristique viverra a. Elit blandit venenatis ornare enim morbi maecenas et ultricies. Sed tortor facilisis nulla integer. Turpis habitasse nec aliquam nulla elementum sapien viverra feugiat et. Molestie mus tincidunt rhoncus.",
      "Lorem ipsum dolor sit amet consectetur. Amet eu convallis vivamus tortor urna magna tristique consectetur. Ornare ipsum sem phasellus non. Id semper auctor ut est tincidunt pellentesque eu ac. Felis nisi duis dictum euismod urna erat egestas malesuada sit. Sed cras nulla senectus urna urna.",
      "Lorem ipsum dolor sit amet consectetur. Facilisis justo nullam nulla consequat vulputate mi in sed mattis. Gravida augue mi suspendisse convallis. Varius nulla urna quis massa. Purus fermentum nunc faucibus felis tellus leo orci vulputate. Faucibus nunc nullam sit nulla. Vitae amet adipiscing etiam volutpat est libero eu et. Tellus nulla."
    ],
    contentBottom: [
      "Lorem ipsum dolor sit amet consectetur. Massa turpis ullamcorper eget elementum feugiat sit quam dolor. Mauris in convallis interdum facilisis platea sapien. Scelerisque porttitor iaculis in mauris elementum eu vulputate. Viverra neque sit ridiculus orci amet quisque sodales sapien sollicitudin.",
      "Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan. Sit integer magna purus tincidunt in ipsum. Egestas nam nec suscipit dignissim tincidunt ac. Consequat volutpat odio tortor a nulla volutpat vehicula quis pharetra. Orci cursus consectetur vitae sit pulvinar tellus. Amet tortor."
    ]
  };

  return (
    <div className="news-detail-page">
      <div className="news-detail-container">
        {/* Back Button */}
        <Link to="/news" className="news-detail-back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Header */}
        <div className="news-detail-header">
          <h1 className="news-detail-title">{article.title}</h1>
          <p className="news-detail-subtitle">{article.subtitle}</p>
        </div>

        {/* Hero Image */}
        <div className="news-detail-hero">
          <img src={article.heroImage} alt={article.title} />
        </div>

        {/* Content Section 1 */}
        <div className="news-detail-content">
          {article.content.map((paragraph, index) => (
            <p key={index} className="news-detail-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Content Image */}
        <div className="news-detail-image">
          <img src={article.contentImage} alt="News detail" />
        </div>

        {/* Content Section 2 */}
        <div className="news-detail-content">
          {article.contentBottom.map((paragraph, index) => (
            <p key={index} className="news-detail-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetailPage;

