import React from 'react';
import './PageNavigateBtn.css';

export default function PageNavigateBtn({
  text,
  curr,
  total,
  perPost,
  handleCurr,
}) {
  let requestPos;
  switch (text) {
    case '<':
      requestPos = +curr !== 0 ? curr - perPost : curr;
      break;
    case '>':
      requestPos = curr < total ? +curr + +perPost : curr;
      break;
    default:
      requestPos = curr;
  }

  return (
    ((text === '<' && +curr !== 0) || (text === '>' && curr < total)) && (
      <div
        className="pageNavigateBtn"
        onClick={() => {
          handleCurr(requestPos);
          alert(requestPos);
        }}
      >
        <p>{text}</p>
      </div>
    )
  );
}
