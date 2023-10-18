import React, { useState } from 'react';
import './NavContent.css';
import { NavLink } from 'react-router-dom';

export default function NavContent({ navContent, style, type }) {
  const [active, setActive] = useState(false);
  const { text, link } = navContent;

  return (
    <div
      className={
        active && type !== 'subtitle'
          ? 'adminNavContent adminNavContentActive'
          : 'adminNavContent'
      }
      style={style}
    >
      <NavLink className={({ isActive }) => setActive(isActive)} to={link}>
        <p>{text}</p>
      </NavLink>
    </div>
  );
}
