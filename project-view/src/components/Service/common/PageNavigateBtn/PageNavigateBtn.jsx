import React, { useRef } from 'react';
import './PageNavigateBtn.css';

export default function PageNavigateBtn({
  text,
  curr,
  total,
  handleCurr,
  // perPost,
}) {
  const buttonRef = useRef(null);

  let requestPos;
  switch (text) {
    case '<':
      // requestPos = +curr !== 0 ? curr - perPost : curr;
      requestPos = +curr !== 1 ? +curr - 1 : +curr;
      break;
    case '>':
      // requestPos = curr < total ? +curr + +perPost : curr;
      requestPos = +curr < total ? +curr + 1 : +curr;
      break;
    default:
      requestPos = +curr;
  }

  return (
    <div
      ref={buttonRef}
      className={
        'pageNavigateBtn' +
        (text === '<' ? ' pageNavigateBtnLeft' : ' pageNavigateBtnRight')
      }
      onPointerOver={() => {
        if ((text === '<' && +curr !== 1) || (text === '>' && curr < total)) {
          buttonRef.current.style.opacity = '100%';
          buttonRef.current.style.cursor = 'pointer';
        }
      }}
      onPointerOut={() => {
        buttonRef.current.style.opacity = '0%';
      }}
      onClick={() => {
        handleCurr(requestPos);
      }}
    >
      <p>{text}</p>
    </div>
  );
}
