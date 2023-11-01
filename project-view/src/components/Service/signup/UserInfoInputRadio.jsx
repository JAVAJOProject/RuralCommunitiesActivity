import React from 'react';
import './UserInfoInputRadio.css';

export default function UserInfoInputRadio({
  images,
  inputName,
  inputType,
  value,
  defaultValue,
  text,
}) {
  const isChecked = value === defaultValue;
  const checkedImgIdx = isChecked ? 1 : 0;

  return (
    <div className="userInfoInputRadio">
      <label htmlFor={`${inputName}_${value}`}>
        <img src={images[checkedImgIdx]} alt="" />
        <input
          type={inputType}
          name={inputName}
          value={value}
          checked={isChecked}
        />
        <p>{text}</p>
      </label>
    </div>
  );
}
