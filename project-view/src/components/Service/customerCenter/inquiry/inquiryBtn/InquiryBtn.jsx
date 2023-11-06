import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InquiryBtn.css';

export default function InquiryBtn({
  btnText,
  type,
  handleClick,
}) {
  const navigate = useNavigate();
  const classes = ['inquiryBtn'];
  if (type === 'sub') {
    classes.push('inquiryBtnSub');
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={
        typeof handleClick === 'string'
          ? () => {
              navigate(handleClick);
              window.scrollTo(0, 0);
            }
          : handleClick
      }
    >
      <p>{btnText}</p>
    </div>
  );
}
