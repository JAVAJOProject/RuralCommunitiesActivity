import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InquiryBtn.css';

export default function InquiryBtn({ btnText, type, link }) {
  const navigate = useNavigate();
  const classes = ['inquiryBtn'];
  if (type === 'sub') {
    classes.push('inquiryBtnSub');
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={
        typeof link === 'string'
          ? () => {
              navigate(link);
            }
          : link
      }
    >
      <p>{btnText}</p>
    </div>
  );
}
