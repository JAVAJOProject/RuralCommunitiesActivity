import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderMiddle from './HeaderMiddle/HeaderMiddle';
import SelectMenuBox from './SelectMenu/SelectMenuBox';
import { ToggleMenu } from '../toggleMenuContext/ToggleMenu';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import './Header.css';

export default function Header() {
  return (
    <>
      <HeaderTop />
      <ToggleMenu>
        <HeaderMiddle />
        <SelectMenuBox />
      </ToggleMenu>
      <HeaderBottom />
    </>
  );
}
