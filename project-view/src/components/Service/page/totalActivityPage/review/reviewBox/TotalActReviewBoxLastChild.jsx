import React from 'react';
import './TotalActReviewBoxLastChild.css';
import TotalActReviewAuthor from './TotalActReviewAuthor';
import TotalActReviewDate from './TotalActReviewDate';

export default function TotalActReviewBoxLastChild({ author, dateCreated }) {
  return (
    <div className="totalActReviewBoxLastChild">
      <TotalActReviewAuthor text={author} />
      <TotalActReviewDate text={dateCreated} />
    </div>
  );
}
