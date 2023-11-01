import React from 'react';
import './AccommodationThead.css'

export default function AccommodationThead({ theadText }) {
  const [region, name, [etc, brunch, internet, payment]] = theadText;
  return (
    <thead className='accommodationThead'>
      <tr>
        <th rowSpan="2" style={{ width: '13.5625rem', height: '7.0625rem' }}>
          {region}
        </th>
        <th rowSpan="2" style={{ width: '24.6875rem', height: '7.0625rem' }}>
          {name}
        </th>
        <th colSpan="3" style={{ width: '26.8125rem', height: '3.1875rem' }}>
          {etc}
        </th>
      </tr>
      <tr>
        <th style={{ width: '8.625rem', height: '3.375rem' }}>{brunch}</th>
        <th style={{ width: '8.625rem', height: '3.375rem' }}>{internet}</th>
        <th style={{ width: '8.625rem', height: '3.375rem' }}>{payment}</th>
      </tr>
    </thead>
  );
}
