import React from 'react';
import './CalenderBox.css';

import CalenderBar from './CalenderBar';
import CalenderSpring from './CalenderSpring';
import CalenderCell from './CalenderCell';

export default function CalenderBox({
  springCnt,
  thisMonth,
  calenderData,
  children,
}) {
  return (
    <>
      <div className="calenderBoxA">
        <CalenderCell thisMonth={thisMonth} calenderData={calenderData}>
          {children}
        </CalenderCell>
      </div>
      <CalenderBar />
      <CalenderSpring springCnt={springCnt} />
    </>
  );
}
