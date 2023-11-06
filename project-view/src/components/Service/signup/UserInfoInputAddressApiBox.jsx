import React from 'react';
import './UserInfoInputAddressApiBox.css'

import UserInfoLabelBox from './UserInfoLabelBox';
import AddressInputApi from '../community/event/Registration/InputBox/AddressApi/AddressInputApi';

export default function UserInfoInputAddressApiBox({ inputTexts, isRequired }) {
  const { inputName, labelText } = inputTexts;

  return (
    <div className="userInfoInputDefaultBox">
      <UserInfoLabelBox inputId={inputName} labelText={labelText} />
      <AddressInputApi inputName={inputName} isRequired={isRequired} className='mypageAddressInputApi' />
    </div>
  );
}
