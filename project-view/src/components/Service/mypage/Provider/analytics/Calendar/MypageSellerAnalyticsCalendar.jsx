import React, { useEffect } from 'react';
import './MypageSellerAnalyticsCalendar.css';
import MypageSellerAnalyticsCalendarDate from './MypageSellerAnalyticsCalendarDate';
import range from '../../../../../../utils/range';
import { useImmer } from 'use-immer';

export default function MypageSellerAnalyticsCalendar({ data }) {
  const firstWeekday = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  ).getDay();
  const emptyDivs = range(firstWeekday, 1);

  return (
    <div className="mypageSellerAnalyticsCalendar">
      <div className="mypageSellerAnalyticsCalendarHead">
        <div>
          <h4>{new Date().getMonth() + 1}월</h4>
        </div>
      </div>
      <div className="mypageSellerAnalyticsCalendarBody">
        {emptyDivs.map((item) => (
          <MypageSellerAnalyticsCalendarDate
            key={item}
            type="none"
            reservationNum={''}
          />
        ))}
        {data.map((item, index) => (
          <MypageSellerAnalyticsCalendarDate
            key={index}
            reservationNum={item}
          />
        ))}
      </div>
    </div>
  );
}
