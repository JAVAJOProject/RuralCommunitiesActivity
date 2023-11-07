import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CommunityListBtnSet.css';

import CommunityCardListBtn from './CommunityCardListBtn';
import CommunityListBarBtn from './CommunityListBarBtn';

export default function CommunityListBtnSet() {
  const [isCardActive, setIsCardActive] = useState(true);
  const [isListActive, setIsListActive] = useState(false);

  return (
    (isCardActive || isListActive) && (
      <div className="communityListBtnSet">
        <NavLink
          to={'card'}
          className={({ isActive }) => {
            setIsCardActive(isActive);
          }}
        >
          <CommunityCardListBtn active={isCardActive} />
        </NavLink>
        <NavLink
          to={'list'}
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
