import React from 'react';
import './MypageSellerAnalyticsBarChart.css';
import MypageSellerAnalyticsBar from './MypageSellerAnalyticsBar';

export default function MypageSellerAnalyticsBarChart({
  mainTitle,
  subtitle,
  data,
}) {
  return (
    <div className="mypageSellerAnalyticsBarChart">
      <h2>{mainTitle}</h2>
      <div>
        {data.map((item, index) => (
          <MypageSellerAnalyticsBar
            key={index}
            title={subtitle[index]}
            figure={item}
          />
        ))}
      </div>
    </div>
  );
}
