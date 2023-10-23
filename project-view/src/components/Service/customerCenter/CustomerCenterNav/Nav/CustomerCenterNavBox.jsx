import React, { useState } from 'react';
import './CustomerCenterNavBox.css';
import { NavLink } from 'react-router-dom';

export default function CustomerCenterNavBox({ innerText, link, selectedNo }) {
  const [selected, setSelected] = useState(selectedNo);
  const [active, setActive] = useState(false);

  const activeBoxStyle = {
    borderRadius: '0.625rem',
    border: '2px solid #6B6B6B',
    background: 'rgba(237, 237, 237, 0.00)',
  };

  return (
    <li className="navBox" style={active ? activeBoxStyle : {}}>
      <NavLink
        className="navBoxText"
        to={link}
        style={({ isActive }) => setActive(isActive)}
        state={{ selected }}
      >
        {innerText}
      </NavLink>
    </li>
  );
}
