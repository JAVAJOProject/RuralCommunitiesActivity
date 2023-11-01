import React from 'react';
import './InputSelect.css';

export default function InputSelect({
  inputValue,
  inputName,
  inputLabel,
  checkedValue,
  handleCheckedValue,
}) {
  return (
    <label
      htmlFor={inputName}
      className="inputSelectLabel"
      onClick={() => {
        handleCheckedValue(inputValue);
      }}
    >
      <div
        className={
          'inputSelect' +
          (inputValue === +checkedValue ? ' inputSelectActive' : '')
        }
      >
        <input
          type="radio"
          value={inputValue}
          name={inputName}
          checked={inputValue === +checkedValue}
          onChange={() => {
            handleCheckedValue(inputValue);
          }}
        />
        <p>{inputLabel}</p>
      </div>
    </label>
  );
}
