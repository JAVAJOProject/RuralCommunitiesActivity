import React from 'react';
import './InputText.css';

export default function InputNumber({
  inputName,
  inputId,
  maxValue,
  placeholder,
  valueState,
  handleValueState,
}) {
  return (
    <div className="inputText inputNumber">
      <input
        type="number"
        min={1}
        name={inputName}
        id={inputId}
        max={maxValue}
        placeholder={placeholder}
        value={valueState ?? ''}
        onChange={(e) => {
          handleValueState(e.target.value);
        }}
      />
    </div>
  );
}
