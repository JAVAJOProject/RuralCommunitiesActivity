import React from 'react';
import './Header.css';

import { ToggleMenu } from '../toggleMenuContext/ToggleMenu';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderMiddle from './HeaderMiddle/HeaderMiddle';
import SelectMenuBox from './SelectMenu/SelectMenuBox';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import TopMenuPos from './HeaderMiddle/TopMenuPos';

export default function Header() {
  return (
    <>
      <HeaderTop />
      <ToggleMenu>
        <TopMenuPos>
          <HeaderMiddle />
          <SelectMenuBox />
        </TopMenuPos>
      </ToggleMenu>
      <HeaderBottom />
    </>
  );
}
