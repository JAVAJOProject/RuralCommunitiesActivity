import React from 'react';
import TotalActivityCalendarHead from './TotalActivityCalendarHead';
import TotalActivityCalendarBody from './TotalActivityCalendarBody';

export default function TotalActivityCalendar({
  contents,
  selectedDate,
  handleSelectedDate,
}) {
  return (
    <div>
      <TotalActivityCalendarHead />
      <TotalActivityCalendarBody
        contents={contents}
        selectedDate={selectedDate}
        handleSelectedDate={handleSelectedDate}
      />
    </div>
  );
}
