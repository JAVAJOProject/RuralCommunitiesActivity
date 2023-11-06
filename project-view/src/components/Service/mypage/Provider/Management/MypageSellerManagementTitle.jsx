import React from 'react';
import './MypageSellerManagementTitle.css';

export default function MypageSellerManagementTitle({ subtitles }) {
  return (
    <div className="mypageSellerManagementTitle">
      {subtitles.map((item) => (
        <p key={item.text} style={item.style}>
          {item.text}
        </p>
      ))}
    </div>
  );
}
