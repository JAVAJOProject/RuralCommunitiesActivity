import React from 'react';
import './MypageSellerAnalyticsCalendarBox.css';
import MypageSellerAnalyticsCalendar from './MypageSellerAnalyticsCalendar';

export default function MypageSellerAnalyticsCalendarBox({
  mainTitle,
  data,
  subtitle,
}) {
  return (
    <div className="mypageSellerAnalyticsCalendarBox">
      <div>
        <h2>{mainTitle}</h2>
        <div>
          <MypageSellerAnalyticsCalendar data={data} />
        </div>
        <p>
          {subtitle} : {data[new Date().getDate()]}건
        </p>
      </div>
    </div>
  );
}
