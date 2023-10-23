import React from 'react';
import './RatingDataTableBodyTopTown.css';

export default function RatingDataTableBodyTopTown({ isTopTown, imgSrc }) {
  return (
    <td className="ratingDataTableBodyTopTown">
      <img src={isTopTown === 'Y' && imgSrc} alt="" />
    </td>
  );
}
