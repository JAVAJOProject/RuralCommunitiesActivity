import React from 'react';
import './MypageMemberEventList.css';

export default function MypageMemberEventList({ type, title, content }) {
  let text;
  if (type && type === 'date') {
    const dateT = new Date(content);
    text = `${dateT.getFullYear()}-${dateT.getMonth() + 1}-${dateT.getDate()}`;
  } else {
    text = content;
  }
	
  return (
    <div className="mypageMemberEventList">
      <div />
      <p>
        {title} : {text}
      </p>
    </div>
  );
}
