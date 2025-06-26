import React from 'react';

const SocialStats = () => {
  const stats = [
    { platform: 'Instagram', followers: '8.5K', icon: '📸', color: '#E4405F' },
    { platform: 'Customers', subscribers: '500+', icon: '�', color: '#10B981' },
    { platform: 'WhatsApp', messages: '50+/day', icon: '💬', color: '#25D366' },
  ];

  return (
    <div className="social-stats">
      <h3 className="social-stats-title">Social Media</h3>
      <div className="social-stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="social-stat-card">
            <div className="social-stat-icon" style={{ backgroundColor: stat.color }}>
              {stat.icon}
            </div>
            <div className="social-stat-info">
              <div className="social-stat-number">{stat.followers || stat.subscribers || stat.messages}</div>
              <div className="social-stat-platform">{stat.platform}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialStats;
