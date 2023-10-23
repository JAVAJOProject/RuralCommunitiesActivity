import React, { useState } from 'react';
import './TotalActivityNavBox.css';
import { NavLink } from 'react-router-dom';

export default function TotalActivityNavBox({ text, link }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={
        active
          ? 'totalActivityNavBox totalActivityNavBoxActive'
          : 'totalActivityNavBox'
      }
    >
      <NavLink className={({ isActive }) => setActive(isActive)} to={link}>
        <p>{text}</p>
      </NavLink>
    </div>
  );
}
