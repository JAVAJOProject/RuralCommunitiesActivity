import React from 'react';
import './UserInfoLabelBox.css';

export default function UserInfoLabelBox({ inputId, labelText }) {
  return (
    <div className="userInfoLabelBox">
      <label htmlFor={inputId}>
        {labelText}
      </label>
    </div>
  );
}
