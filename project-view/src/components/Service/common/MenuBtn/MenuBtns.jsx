import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CardMenuBtn from './CardMenuBtn';
import ListMenuBtn from './ListMenuBtn';
import './MenuBtns.css';

const onColor = '#FFD56A';

export default function MenuBtns({ cardLink, listLink, handleActiveCard }) {
  const [activeCard, setActiveCard] = useState(false);
  const [activeList, setActiveList] = useState(false);

  return (
    <div className="menuBtns">
      <NavLink
        to={cardLink}
        className={({ isActive }) => {
          setActiveCard(isActive);
          handleActiveCard(isActive);
        }}
      >
        <CardMenuBtn onColor={onColor} isOn={activeCard} />
      </NavLink>
      <NavLink
        to={listLink}
        className={({ isActive }) => {
          setActiveList(isActive);
        }}
      >
        <ListMenuBtn onColor={onColor} isOn={activeList} />
      </NavLink>
    </div>
  );
}
