import React from 'react';
import './InquiryDetailTitle.css';

export default function InquiryDetailTitle({ contents }) {
  const { status, title, author, dateCreated } = contents;

  let dateText;
  if (dateCreated) {
    const dateT = new Date(dateCreated);
    dateText = `${dateT.getFullYear()}-${
      dateT.getMonth() + 1
    }-${dateT.getDate()}`;
  } else {
    dateText = '';
  }

  return (
    <div className="inquiryDetailTitle">
      <p>{status}</p>
      <p>{title}</p>
      <p>{author}</p>
      <p>{dateText}</p>
    </div>
  );
}
