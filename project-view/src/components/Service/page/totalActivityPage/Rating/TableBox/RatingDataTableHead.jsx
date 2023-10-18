import React from 'react';
import './RatingDataTableHead.css';

export default function RatingDataTableHead({ tableHead }) {
  const {
    region,
    town,
    topTown,
    gradeType: {
      main,
      subTitle: { activity, food, accommodation },
    },
  } = tableHead;

  return (
    <thead className="ratingDataTableHead">
      <tr>
        <th rowSpan="2" style={{ width: '10.5625rem', height: '7.0625rem' }}>
          {region}
        </th>
        <th rowSpan="2" style={{ width: '18.6875rem', height: '7.0625rem' }}>
          {town}
        </th>
        <th rowSpan="2" style={{ width: '4.8125rem', height: '7.0625rem' }}>
          {topTown}
        </th>
        <th colSpan="3" style={{ width: '26.75rem', height: '3.1875rem' }}>
          {main}
        </th>
      </tr>
      <tr>
        <th style={{ width: '8.625rem', height: '3.375rem' }}>{activity}</th>
        <th style={{ width: '8.625rem', height: '3.375rem' }}>{food}</th>
        <th style={{ width: '8.625rem', height: '3.375rem' }}>
          {accommodation}
        </th>
      </tr>
    </thead>
  );
}
