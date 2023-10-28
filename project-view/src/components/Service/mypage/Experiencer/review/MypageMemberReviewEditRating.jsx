import React from 'react';
import './MypageMemberReviewEditRating.css';

export default function MypageMemberReviewEditRating({
  ratingTitle,
  ratingNum,
  handleReviewContent,
}) {
  return (
    <div className="mypageMemberReviewEditRating">
      <label>{ratingTitle} : </label>
      <select
        name=""
        onChange={(e) => {
          handleReviewContent((draft) => {
            draft.ratingNum = e.target.value;
          });
        }}
        value={ratingNum}
      >
        <option value={5}>{5}점</option>
        <option value={4}>{4}점</option>
        <option value={3}>{3}점</option>
        <option value={2}>{2}점</option>
        <option value={1}>{1}점</option>
      </select>
    </div>
  );
}
