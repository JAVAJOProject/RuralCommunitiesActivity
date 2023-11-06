import React from 'react';
import './InquiryListBar.css';
import { useNavigate } from 'react-router-dom';

export default function InquiryListBar({ content, type, lock }) {
  const navigate = useNavigate();
  const { inquiryId, inquiryTitle, inquiryStatus, author, inquiryDateCreated } =
    content;
  const uNick = content?.userInfo?.uNick;
  const sComName = content?.userInfo?.sComName;

  let classes = ['inquiryListBar'];
  if (type) {
    classes.push('inquiryListBarTitle');
  }

  let titleText;
  if (inquiryTitle && inquiryTitle.length > 37) {
    titleText = inquiryTitle.substr(0, 37) + '...';
  } else {
    titleText = inquiryTitle;
  }

  let dateText;
  if (type !== 'title' && inquiryDateCreated) {
    let dateT = new Date(inquiryDateCreated);
    dateText = `${dateT.getFullYear()}-${
      dateT.getMonth() + 1
    }-${dateT.getDate()}`;
  } else {
    dateText = inquiryDateCreated;
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={() => {
        navigate(
          type !== 'title'
            ? `/app/customerService/inquiry/detail/${inquiryId}`
            : ''
        );
      }}
    >
      <p>{inquiryId}</p>
      <div>
        <p>{titleText}</p>
        {type !== 'title' && <img src={lock} alt="" />}
      </div>
      <p>{inquiryStatus}</p>
      <p>{author ? author : uNick ? uNick : sComName}</p>
      <p>{dateText}</p>
    </div>
  );
}
