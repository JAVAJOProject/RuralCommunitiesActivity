import React, { useEffect, useState } from 'react';
import './MypageSellerAnalyticsBar.css';

export default function MypageSellerAnalyticsBar({ title, figure }) {
  const [figureWidth, setFigureWidth] = useState(0);
  useEffect(() => {
    setFigureWidth(figure * 100);
  }, [figure]);

  return (
    <div className="mypageSellerAnalyticsBar">
      <p>{title}</p>
      <div>
        <p>{figure * 100}%</p>
        <div style={{ width: `${figureWidth}%` }} />
      </div>
    </div>
  );
}
