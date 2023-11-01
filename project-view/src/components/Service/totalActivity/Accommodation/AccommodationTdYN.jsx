import React from 'react';
import './AccommodationTdYN.css';
import AccommodationY from './AccommodationY';
import AccommodationN from './AccommodationN';

export default function AccommodationTdYN({ data }) {
  let visible = true;
  let yn;
  switch (data) {
    case 'Y':
    case 'y':
      yn = true;
      break;
    case 'N':
    case 'n':
      yn = false;
      break;
    default:
      visible = false;
  }

  return (
    <td className="accommodationTdYN">
      {visible && (yn ? <AccommodationY /> : <AccommodationN />)}
    </td>
  );
}
