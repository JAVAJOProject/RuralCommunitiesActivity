import React from 'react';
import './InquiryListBar.css';
import { useNavigate } from 'react-router-dom';

export default function InquiryListBar({ content, type, lock }) {
  const navigate = useNavigate();
  const { postNo, title, status, author, dateCreated } = content;
  let classes = ['inquiryListBar'];
  if (type) {
    classes.push('inquiryListBarTitle');
  }

  let titleText;
  if (title && title.length > 37) {
    titleText = title.substr(0, 37) + '...';
  } else {
    titleText = title;
  }

  let dateText;
  if (type !== 'title' && dateCreated) {
    let dateT = new Date(dateCreated);
    dateText = `${dateT.getFullYear()}-${
      dateT.getMonth() + 1
    }-${dateT.getDate()}`;
  } else {
    dateText = dateCreated;
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={() => {
        navigate(`/app/customerService/inquiry/detail/${postNo}`);
      }}
    >
      <p>{postNo}</p>
      <div>
        <p>{titleText}</p>
        {type !== 'title' && <img src={lock} alt="" />}
      </div>
      <p>{status}</p>
      <p>{author}</p>
      <p>{dateText}</p>
    </div>
  );
}
