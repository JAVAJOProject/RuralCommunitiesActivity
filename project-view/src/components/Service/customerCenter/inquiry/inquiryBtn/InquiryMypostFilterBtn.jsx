import React, { useState } from 'react';
import './InquiryMypostFilterBtn.css';

export default function InquiryMypostFilterBtn({
  checkboxes,
  text,
  inputName,
}) {
  const [isChecked, setIsChecked] = useState(false);

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
