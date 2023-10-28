import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MyPageNavBox.css';

export default function MyPageNavBox({ text, link }) {
  const [active, setActive] = useState(false);
  const handleActive = ({ isActive }) => {
    setActive(isActive);
  };

  return (
    <li className={active ? 'myPageNavBox myPageNavBoxActive' : 'myPageNavBox'}>
      <NavLink className={handleActive} to={link} text={text}>
        <div
          className={
            active
              ? 'myPageNavBoxCircle myPageNavBoxCircleActive'
              : 'myPageNavBoxCircle'
          }
        ></div>
        <p>{text}</p>
      </NavLink>
    </li>
  );
}
