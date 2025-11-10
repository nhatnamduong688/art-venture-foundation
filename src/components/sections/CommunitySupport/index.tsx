/**
 * CommunitySupport Component - Migrated to Design System
 * Using Typography, Button, and Icon from design system
 */

import React from 'react';
import { Typography } from '../../../design-system/atoms/Typography';
import { Button } from '../../../design-system/atoms/Button';
import { Icon } from '../../../design-system/atoms/Icon';
import './CommunitySupport.css';

interface TimelineItem {
  year: string;
  description: string;
  activities: string[];
}

const CommunitySupport: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: "Giải thưởng Victor Tardieu",
      description: 'Ra đời trong bối cảnh kỷ niệm một thế kỷ truyền thống của Trường Mỹ thuật Đông Dương – Trường Đại học Mỹ thuật Việt Nam, Giải thưởng Victor Tardieu mang trong mình tinh thần "Trăm năm hội tụ, khai mở tương lai". Giải thưởng được đặt theo tên Victor Tardieu – họa sĩ người Pháp, đồng thời là hiệu trưởng đầu tiên của Trường Mỹ thuật Đông Dương, người đã đặt nền móng cho nền giáo dục mỹ thuật hiện đại tại Việt Nam.',
      activities: []
    },
    {
      year: "Giải thưởng Con đường Thiên Lý",
      description: 'Cuộc thi Giải thưởng Con Đường Thiên Lý (Mandarine Road Prize) chính thức được phát động! "Giải thưởng Con đường Thiên Lý" (Prix de la route Mandarine) được tổ chức hàng năm với mục tiêu tôn vinh hai sinh viên Việt Nam chuyên ngành mỹ thuật, giúp họ bước những bước đầu tiên vào thị trường nghệ thuật quốc tế thông qua một buổi triển lãm tại Paris.',
      activities: []
    }
  ];

  return (
    <section className="community-support section">
      <div className="container">
        <div className="community-support__layout">
          {/* Left side: Title + Timeline content */}
          <div className="community-support__content-wrapper">
            <div className="community-support__content">
              <Typography variant="display-lg" as="h2" className="community-support__title">
                Community support
              </Typography>

              <div className="community-support__timeline-box">
              <div className="community-support__timeline">
                {timelineItems.map((item) => (
                  <div key={item.year} className="timeline-item">
                    <div className="timeline-item__content">
                      <div className="timeline-item__year">
                        {item.year}
                      </div>
                      <Typography variant="body-md" className="timeline-item__description">
                        {item.description}
                      </Typography>

                      {item.activities.length > 0 && (
                        <div className="timeline-item__activities">
                          {item.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="activity-item">
                              <Typography variant="body-sm" weight="medium" className="activity-item__text">
                                {activity}
                              </Typography>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>

          {/* Right side: Decorative sculpture image */}
          <div className="community-support__image-wrapper">
            <div className="community-support__image" data-node-id="145:2253">
              <img 
                src="/images/community-support/sculpture.png"
                alt="Classical sculpture with decorative elements"
                className="community-support__image-content"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySupport;



