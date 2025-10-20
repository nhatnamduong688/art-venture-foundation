import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import './KnowledgeDetailPage.css';

interface KnowledgeItem {
  title: string;
  description: string;
}

interface KnowledgeData {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  tabs: string[];
  items: KnowledgeItem[];
}

const KnowledgeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState(0);

  // Mock data
  const knowledgeData: Record<string, KnowledgeData> = {
    museums: {
      id: 'museums',
      icon: '🏛️',
      title: 'Arts Museums at Vietnam',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan. Sit integer magna purus tincidunt in ipsum. Egestas nam nec suscipit dignissim tincidunt ac. Consequat volutpat odio tortor a nulla volutpat vehicula quis pharetra. Orci cursus consectetur vitae sit pulvinar tellus. Amet tortor.',
      image: 'https://images.unsplash.com/photo-1566127444032-b726a4cb9754?w=1200',
      tabs: ['Vietnam', 'World'],
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
    schools: {
      id: 'schools',
      icon: '🎓',
      title: 'Art Schools',
      description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed. Cum nec morbi posuere in hendrerit semper a ac massa. Blandit enim eu mauris lacus accumsan. Sit integer magna purus tincidunt in ipsum.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200',
      tabs: ['Vietnam', 'World'],
      items: [
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed.'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque viverra adipiscing vel dignissim elementum sed.'
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur',
          description: 'Lorem ipsum dolor sit amet consectetur. Duis pretium sollicitudin etiam montes diam quam morbi.'
        }
      ]
    }
  };

  const data = knowledgeData[id || 'museums'] || knowledgeData.museums;

  return (
    <div className="knowledge-detail-page">
      <div className="knowledge-detail-container">
        {/* Back Button */}
        <Link to="/knowledge" className="knowledge-detail-back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Header */}
        <div className="knowledge-detail-header">
          <div className="knowledge-detail-icon">{data.icon}</div>
          
          <div className="knowledge-detail-tabs">
            {data.tabs.map((tab, index) => (
              <button
                key={index}
                className={`knowledge-detail-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <h1 className="knowledge-detail-title">{data.title}</h1>

        {/* Description */}
        <p className="knowledge-detail-description">{data.description}</p>

        {/* Image */}
        <div className="knowledge-detail-image">
          <img src={data.image} alt={data.title} />
        </div>

        {/* Items List */}
        <div className="knowledge-detail-items">
          {data.items.map((item, index) => (
            <div key={index} className="knowledge-detail-item">
              <div className="knowledge-detail-item__number">
                <span>{index + 1}</span>
              </div>
              <div className="knowledge-detail-item__content">
                <h3 className="knowledge-detail-item__title">{item.title}</h3>
                <p className="knowledge-detail-item__description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KnowledgeDetailPage;

