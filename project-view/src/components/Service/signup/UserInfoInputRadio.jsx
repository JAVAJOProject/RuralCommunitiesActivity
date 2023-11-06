import React from 'react';
import './UserInfoInputRadio.css';

export default function UserInfoInputRadio({
  images,
  inputName,
  inputType,
  value,
  defaultValue,
  text,
  handleValue,
}) {
  return (
    <div className="userInfoInputRadio">
      <label htmlFor={`${inputName}_${value}`}>
        <img
          src={images[value === defaultValue ? 1 : 0]}
          alt=""
          onClick={() => {
            handleValue(value);
          }}
        />
        <input
          type={inputType}
          name={inputName}
          value={value}
          checked={value === defaultValue}
        />
        <p>{text}</p>
      </label>
    </div>
  );
}
