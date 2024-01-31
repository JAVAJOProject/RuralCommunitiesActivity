import React from 'react';

import ReservationBackgroundBox from '../../../common/box/reservationBox/ReservationBackgroundBox';
import CalenderBox from './CalenderBox';

export default function ReservationCalender({
  ReservationName,
  seeMore,
  springCnt,
  month,
  calenderData,
  children,
}) {
  return (
    <>
      <ReservationBackgroundBox
        ReservationName={ReservationName}
        seeMore={seeMore}
      >
        <CalenderBox
          springCnt={springCnt}
          thisMonth={month}
          calenderData={calenderData}
        >
          {children}
        </CalenderBox>
      </ReservationBackgroundBox>
    </>
  );
}
