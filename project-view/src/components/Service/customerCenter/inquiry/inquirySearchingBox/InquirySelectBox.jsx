import React from 'react';
import './InquirySelectBox.css'

export default function InquirySelectBox({ contents }) {
  return (
    <select value={0} className='inquirySelectBox'>
      {contents.map((content) => (
        <option key={content.value} value={content.value}>
          {content.text}
        </option>
      ))}
    </select>
  );
}
