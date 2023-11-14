import React, { useState } from 'react';
import './InquiryMypostFilterBtn.css';
import { fetchDataGET } from '../../../../../config/ApiService';

export default function InquiryMypostFilterBtn({
  checkboxes,
  text,
  inputName,
  handleChecked
}) {
  const [isChecked, setIsChecked] = handleChecked;

  return (
    <div className="inquiryMypostFilterBtn">
      <label htmlFor={inputName}>
        <input
          type="checkbox"
          name={inputName}
          id={inputName}
          value={isChecked}
          onChange={() => {
            setIsChecked((prev) => !prev);
          }}
        />
        <img src={checkboxes[+isChecked]} alt="" />
        <p>{text}</p>
      </label>
    </div>
  );
}
