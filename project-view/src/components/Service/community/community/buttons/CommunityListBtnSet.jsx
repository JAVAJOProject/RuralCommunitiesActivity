import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './CommunityListBtnSet.css';

import CommunityCardListBtn from './CommunityCardListBtn';
import CommunityListBarBtn from './CommunityListBarBtn';

export default function CommunityListBtnSet() {
  const [isCardActive, setIsCardActive] = useState(true);
  const [isListActive, setIsListActive] = useState(false);

  const location = useLocation();
  const boardType = location?.pathname.split('/').pop();

  return (
    boardType &&
    (boardType === 'card' || boardType === 'list') && (
      <div className="communityListBtnSet">
        <NavLink
          to={'board/card'}
          className={({ isActive }) => {
            setIsCardActive(isActive);
          }}
        >
          <CommunityCardListBtn active={isCardActive} />
        </NavLink>
        <NavLink
          to={'board/list'}
          className={({ isActive }) => {
            setIsListActive(isActive);
          }}
        >
          <CommunityListBarBtn active={isListActive} />
        </NavLink>
      </div>
    )
  );
}
