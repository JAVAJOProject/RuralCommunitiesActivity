import React from 'react';
import './TotalActivityCalendarHead.css';

export default function TotalActivityCalendarHead() {
  return (
    <div className="totalActivityCalendarHead">
      <div className="totalActivityCalendarHeadPunch">
        <div className="totalActivityCalendarHeadHole" />
        <div className="totalActivityCalendarHeadRing" />
      </div>
      <div className="totalActivityCalendarHeadMonth">
        <p>{new Date().getMonth() + 1}월</p>
      </div>
      <div className="totalActivityCalendarHeadPunch">
        <div className="totalActivityCalendarHeadHole" />
        <div className="totalActivityCalendarHeadRing" />
      </div>
    </div>
  );
}
