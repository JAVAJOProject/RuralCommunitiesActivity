import React from 'react';
import './MypageMemberReviewTextarea.css';

export default function MypageMemberReviewTextarea({
  textContent,
  handleReviewContent,
}) {
  return (
    <div className="mypageMemberReviewTextarea">
      <textarea
        value={textContent}
        onChange={(e) => {
          handleReviewContent((draft) => {
            draft.content = e.target.value;
          });
        }}
      />
    </div>
  );
}
