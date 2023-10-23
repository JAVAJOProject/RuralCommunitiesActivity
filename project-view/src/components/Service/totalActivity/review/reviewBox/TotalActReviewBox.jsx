import React from 'react';
import './TotalActReviewBox.css';
import TotalActReviewCard from './TotalActReviewCard';
import TotalActReviewTitle from './TotalActReviewTitle';
import TotalActReviewLine from './TotalActReviewLine';
import TotalActReviewContent from './TotalActReviewContent';
import TotalActReviewRating from './TotalActReviewRating';
import TotalActReviewBoxLastChild from './TotalActReviewBoxLastChild';

export default function TotalActReviewBox({ reviewContents }) {
  const { title, rating, content, author, dateCreated } = reviewContents;

  return (
    <TotalActReviewCard
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: '2rem',
      }}
    >
      <div className="totalActReviewBox">
        <div>
          <TotalActReviewRating ratingNum={rating} />
          <TotalActReviewTitle text={title} />
        </div>
        <TotalActReviewLine />
        <TotalActReviewContent text={content} />
        <TotalActReviewBoxLastChild author={author} dateCreated={dateCreated} />
      </div>
    </TotalActReviewCard>
  );
}
