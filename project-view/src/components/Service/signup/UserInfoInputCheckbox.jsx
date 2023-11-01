import React from 'react';
import './UserInfoInputCheckbox.css';

export default function UserInfoInputCheckbox({
  inputType,
  inputName,
  images,
  text,
  defaultValue,
}) {
  const checkedImgIdx = !!defaultValue ? 1 : 0;

  return (
    <div className='userInfoInputCheckbox'>
      <label htmlFor={inputName}>
        <img src={images[checkedImgIdx]} alt="" />
        <input
          type={inputType}
          name={inputName}
          id={inputName}
          defaultValue={!!defaultValue}
        />
        <p>{text}</p>
      </label>
    </div>
  );
}
