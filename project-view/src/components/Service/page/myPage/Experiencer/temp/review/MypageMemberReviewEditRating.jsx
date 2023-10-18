import React, { useState } from 'react';
import './MypageMemberReviewEditRating.css';

export default function MypageMemberReviewEditRating({
  ratingTitle,
  ratingNum,
}) {
  const [selected, setSelected] = useState(ratingNum);
  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="mypageMemberReviewEditRating">
      <label>{ratingTitle} : </label>
      <select name="" onChange={handleSelected} value={selected}>
        <option value={5}>{5}점</option>
        <option value={4}>{4}점</option>
        <option value={3}>{3}점</option>
        <option value={2}>{2}점</option>
        <option value={1}>{1}점</option>
      </select>
    </div>
  );
}
