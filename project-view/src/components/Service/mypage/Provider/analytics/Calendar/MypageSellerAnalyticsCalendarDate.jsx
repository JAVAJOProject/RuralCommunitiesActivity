import React from 'react';
import './MypageSellerAnalyticsCalendarDate.css';

export default function MypageSellerAnalyticsCalendarDate({
  reservationNum,
  type,
}) {
  return (
    <div
      className="mypageSellerAnalyticsCalendarDate"
      style={type && type === 'none' ? { opacity: '0%' } : {}}
    >
      <p>{reservationNum}</p>
    </div>
  );
}
