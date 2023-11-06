import React, { useState } from 'react';
import './UserInfoInputAccountInfoBox.css';
import UserInfoLabelBox from './UserInfoLabelBox';
import UserInfoInputDefault from './UserInfoInputDefault';
import InputHidden from '../community/event/Registration/InputBox/TextBox/InputHidden';

export default function UserInfoInputAccountInfoBox({
  inputTexts,
  defaultValue,
  bankList,
  isRequired,
}) {
  const [selectedBank, setSelectedBank] = useState(defaultValue.bankInfoId);

  const { inputName, labelText, inputType, inputPattern, subInput } =
    inputTexts;
  const {
    accountInfoId,
    bankInfoId,
    accountNumber,
    accountHolder,
    accountName,
  } = defaultValue;

  return (
    <div className="userInfoInputAccountInfoBox">
      <UserInfoLabelBox inputId={inputName} labelText={labelText} />
      <div>
        <div>
          <InputHidden
            inputInfo={{
              inputName: subInput.accountInfoId.inputName,
              value: accountInfoId,
            }}
          />
          <InputHidden
            inputInfo={{
              inputName: subInput.bankInfoId.inputName,
              value: bankInfoId,
            }}
          />
          <UserInfoInputDefault
            inputType={inputType}
            inputName={inputName}
            inputPattern={inputPattern}
            defaultValue={accountNumber}
          />
        </div>
        <div>
          <div>
            <label htmlFor={subInput.bank.inputName}>
              {subInput.bank.inputText}
            </label>
            <select
              value={selectedBank}
              onChange={(e) => {
                setSelectedBank(e.target.value);
              }}
              name={subInput.bank.inputName}
              id={subInput.bank.inputName}
              required={isRequired}
            >
              {bankList.map((bank) => (
                <option key={bank.bankInfoId} value={bank.bankInfoId}>
                  {bank.bankName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={subInput.accountHolder.inputName}>
              {subInput.accountHolder.inputText}
            </label>
            <input
              type="text"
              defaultValue={accountHolder}
              name={subInput.accountHolder.inputName}
              id={subInput.accountHolder.inputName}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
