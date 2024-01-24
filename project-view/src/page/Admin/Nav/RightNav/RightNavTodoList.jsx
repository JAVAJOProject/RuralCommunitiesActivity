import React from 'react';
import { Link } from 'react-router-dom';
import './RightNavTodoList.css';

export default function RightNavTodoList({ text, link, todoNo }) {
  return (
    <li className="rightNavTodoList">
      <Link to={link}>{text}</Link>
      <div className="rightNavTodoNo">
        <p>{todoNo}</p>
      </div>
    </li>
  );
}
