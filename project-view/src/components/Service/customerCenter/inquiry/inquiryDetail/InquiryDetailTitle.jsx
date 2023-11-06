import React from 'react';
import './InquiryDetailTitle.css';

export default function InquiryDetailTitle({ contents }) {
  const { inquiryStatus, inquiryTitle, userInfo, inquiryDateCreated } =
    contents;
  const uNick = userInfo?.uNick;
  const sComName = userInfo?.sComName;

  let dateText;
  if (inquiryDateCreated) {
    const dateT = new Date(inquiryDateCreated);
    dateText = `${dateT.getFullYear()}-${
      dateT.getMonth() + 1
    }-${dateT.getDate()}`;
  } else {
    dateText = '';
  }

  return (
    <div className="inquiryDetailTitle">
      <p>{inquiryStatus}</p>
      <p>{inquiryTitle}</p>
      <p>{uNick ? uNick : sComName}</p>
      <p>{dateText}</p>
    </div>
  );
}
