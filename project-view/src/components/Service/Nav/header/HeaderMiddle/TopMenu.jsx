import React, { useEffect, useState } from 'react';
import './TopMenu.css';
import { NavLink } from 'react-router-dom';

let style = {};

export default function TopMenu({ menu, menuNo }) {
  const [active, setActive] = useState(false);
  const { name, link } = menu;

  // const handleHoverStyle = () => {
  //   const classes = hoverState === menuNo ? `topMenu ${hoverStyle}` : 'topMenu';
  //   setClassName(classes);
  // };
  const activeTopMenu = {
    background: '#ffb800',
  };
  const activeTopMenuText = {
    color: '#fff',
  };

  return (
    <li className="topMenu" style={active ? activeTopMenu : {}}>
      <NavLink
        className="topMenuText"
        to={link}
        style={({ isActive }) => {
          setActive(isActive);
          return isActive ? activeTopMenuText : {};
        }}
      >
        {name}
      </NavLink>
      {/* <div className='topMenuText'></div> */}
    </li>
  );
}
