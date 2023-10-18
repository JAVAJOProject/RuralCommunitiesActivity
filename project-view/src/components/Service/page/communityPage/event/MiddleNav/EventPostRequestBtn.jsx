import React from 'react';
import './EventPostRequestBtn.css';

const text = '이벤트 게재 요청하기';

export default function EventPostRequestBtn() {
  return (
    <button className="eventPostRequestBtn">
      <p>{text}</p>
    </button>
  );
}
