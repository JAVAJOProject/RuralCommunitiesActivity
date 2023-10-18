import React from 'react';
import './TotalActReviewDate.css';

export default function TotalActReviewDate({ text }) {
  const dateT = new Date(text);
  const dateText = `${dateT.getFullYear()}-${
    dateT.getMonth() + 1
  }-${dateT.getDate()}`;

  return <p className="totalActReviewDate">{dateText}</p>;
}
