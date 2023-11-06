import React from 'react';
import './MypageSellerAnalyticsPieBox.css';
import MypageSellerAnalyticsPie from './MypageSellerAnalyticsPie';

export default function MypageSellerAnalyticsPieBox({
  title,
  subtitles,
  data,
}) {
  return (
    <div className="mypageSellerAnalyticsPieBox">
      <div>
        <h2>{title}</h2>
        <div>
          <div>
            {subtitles
              .filter((_, index) => index < 3)
              .map((item, index) => (
                <MypageSellerAnalyticsPie
                  key={item}
                  title={item}
                  figure={data[index]}
                />
              ))}
          </div>
          <div style={{ marginTop: '-2rem' }}>
            {subtitles
              .filter((_, index) => index >= 3)
              .map((item, index) => (
                <MypageSellerAnalyticsPie
                  key={item}
                  title={item}
                  figure={data[index + 3]}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
