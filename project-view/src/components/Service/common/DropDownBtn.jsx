import React, { useState } from 'react';
import dropdownBtn from '../../../view_img/Service/common/dropdownBtn.svg';
import dropdownBtnUp from '../../../view_img/Service/common/dropdownBtnUp.svg';
import './DropDownBtn.css';

export default function DropDownBtn({dropdown, handleDropdown}) {
  return (
    <div onClick={handleDropdown} className="dropdownBtn">
      <img src={dropdown ? dropdownBtnUp : dropdownBtn} alt="" />
    </div>
  );
}
