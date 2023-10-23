import React from 'react';
import './RatingDataTableBodyMedal.css';

export default function RatingDataTableBodyMedal({ gradeNo, medals }) {
  let imgSrc;
  switch (gradeNo ?? '') {
    case 1:
      imgSrc = medals[gradeNo - 1];
      break;
    case 2:
      imgSrc = medals[gradeNo - 1];
      break;
    case 3:
      imgSrc = medals[gradeNo - 1];
    default:
      imgSrc = '';
  }

  return (
    <td className="ratingDataTableBodyMedal">
      <img src={imgSrc} alt="" />
    </td>
  );
}
