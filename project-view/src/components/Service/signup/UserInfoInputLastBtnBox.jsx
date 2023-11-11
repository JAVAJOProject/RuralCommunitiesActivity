import React from 'react';
import './UserInfoInputLastBtnBox.css';

import UserInfoInputLastBtn from './UserInfoInputLastBtn';

export default function UserInfoInputLastBtnBox({ inputTexts }) {
  return (
    <div className="userInfoInputLastBtnBox">
      {inputTexts.map((btn) => {
        const { colorType, inputType, btnText, handleClick } = btn;

        return (
          <UserInfoInputLastBtn
            key={btnText}
            colorType={colorType}
            inputType={inputType}
            btnText={btnText}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}
