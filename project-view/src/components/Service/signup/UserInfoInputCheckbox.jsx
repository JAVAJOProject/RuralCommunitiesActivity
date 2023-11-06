import React, { useState } from 'react';
import './UserInfoInputCheckbox.css';

export default function UserInfoInputCheckbox({
  inputType,
  inputName,
  images,
  text,
  defaultValue,
}) {
  const [value, setValue] = useState(!!defaultValue);

  return (
    <div className="userInfoInputCheckbox">
      <label htmlFor={inputName}>
        <img
          src={images[value ? 1 : 0]}
          alt=""
          onClick={() => {
            setValue((prev) => !prev);
          }}
        />
        <input type={inputType} name={inputName} id={inputName} value={value} />
        <p>{text}</p>
      </label>
    </div>
  );
}
