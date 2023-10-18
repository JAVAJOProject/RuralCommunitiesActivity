import React from 'react';
import './EventBigCardTextList.css';

export default function EventBigCardTextList({ title, content }) {
  let text;
  if (content.length > 1) {
    const startDate = new Date(content[0]);
    const endDate = new Date(content[1]);
    text = `${startDate.getMonth() + 1}/${startDate.getDate()} ~ ${
      endDate.getMonth() + 1
    }/${endDate.getDate()}`;
  } else {
    text = +content[0] === 0 ? `${content[0]}명` : '-';
  }

  return (
    <li className="eventBigCardTextList">
      <div className="eventBigCardTextListCircle" />
      <p>
        {title} : {text}
      </p>
    </li>
  );
}
