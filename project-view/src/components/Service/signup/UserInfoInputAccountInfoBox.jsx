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
  const [selectedBank, setSelectedBank] = useState(
    defaultValue?.bankInfoId ?? 0
  );

  const { inputName, labelText, inputType, inputPattern, subInput } =
    inputTexts;

  return (
    <div className="userInfoInputAccountInfoBox">
      <UserInfoLabelBox inputId={inputName} labelText={labelText} />
      <div>
        <div>
          <InputHidden
            inputInfo={{
              inputName: subInput.accountInfoId.inputName,
              value: defaultValue?.accountInfoId ?? 0,
            }}
          />
          <InputHidden
            inputInfo={{
              inputName: subInput.bankInfoId.inputName,
              value: defaultValue?.bankInfoId ?? 0,
            }}
          />
          <UserInfoInputDefault
            inputType={inputType}
            inputName={inputName}
            inputPattern={inputPattern}
            defaultValue={defaultValue?.accountNumber ?? ''}
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
              {bankList?.length > 0 &&
                bankList.map((bank) => (
                  <option key={bank?.bankInfoId} value={bank?.bankInfoId}>
                    {bank?.bankName}
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
              defaultValue={defaultValue?.accountHolder ?? ''}
              name={subInput.accountHolder.inputName}
              id={subInput.accountHolder.inputName}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
