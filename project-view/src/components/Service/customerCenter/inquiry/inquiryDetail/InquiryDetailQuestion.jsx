import React from 'react';
import './InquiryDetailQuestion.css';

export default function InquiryDetailQuestion({ text }) {
  return (
    <div className="inquiryDetailQuestion">
      <p>{text}</p>
    </div>
  );
}
