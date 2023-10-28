import React from 'react';
import './MypageMemberReviewEditTitle.css';
import MypageMemberReviewEditRating from './MypageMemberReviewEditRating';

export default function MypageMemberReviewEditTitle({
  reviewTitle,
  ratingTitle,
  ratingNum,
  handleReviewContent,
}) {
  return (
    <div className="mypageMemberReviewEditTitle">
      <MypageMemberReviewEditRating
        ratingTitle={ratingTitle}
        ratingNum={ratingNum}
        handleReviewContent={handleReviewContent}
      />
      <input
        type="text"
        value={reviewTitle}
        onChange={(e) => {
          handleReviewContent((draft) => {
            draft.reviewTitle = e.target.value;
          });
        }}
      />
    </div>
  );
}
