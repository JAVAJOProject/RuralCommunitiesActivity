import React from 'react';
import './TotalActivityCalendarBody.css';
import TotalActivityCalendarDate from './TotalActivityCalendarDate';
import range from '../../../../utils/range';

export default function TotalActivityCalendarBody({
  contents,
  selectedDate,
  handleSelectedDate,
}) {
  const firstWeekday = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  ).getDay();
  const emptyDivs = range(firstWeekday, 1);

  return (
    <div className="totalActivityCalendarBody">
      {emptyDivs.map((item) => (
        <TotalActivityCalendarDate key={item} type="none" />
      ))}
      {contents.map((item) => (
        <TotalActivityCalendarDate
          key={item.day}
          date={item.day}
          countPerDate={item.count}
          selectedDate={selectedDate}
          handleSelectedDate={handleSelectedDate}
        />
      ))}
    </div>
  );
}
