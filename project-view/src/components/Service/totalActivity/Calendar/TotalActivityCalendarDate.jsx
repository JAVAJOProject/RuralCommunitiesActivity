import React from 'react';
import './TotalActivityCalendarDate.css';

export default function TotalActivityCalendarDate({
  type,
  date,
  countPerDate,
  selectedDate,
  handleSelectedDate,
}) {
  if (type && type === 'none') {
    return (
      <div
        className="totalActivityCalendarDate"
        style={{ opacity: '0%' }}
      ></div>
    );
  }

  const isPlus = countPerDate >= 100;
  const count = isPlus ? '+' : `${countPerDate}개`;

  const handleFilteredDate = () => {
    handleSelectedDate((prev) => (+date === +selectedDate ? null : date));
  };

  return (
    <div
      className="totalActivityCalendarDate"
      style={{ paddingTop: isPlus ? '2rem' : '1.6rem' }}
    >
      <p>{date}</p>
      <div
        style={{
          width: isPlus ? '2rem' : '2.51781rem',
          height: isPlus ? '2rem' : '2.51781rem',
        }}
        onClick={handleFilteredDate}
      >
        <p style={{ fontSize: isPlus ? '1.8rem' : '1.125rem' }}>{count}</p>
      </div>
    </div>
  );
}
