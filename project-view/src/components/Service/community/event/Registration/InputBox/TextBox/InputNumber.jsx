import React from 'react';
import './InputText.css';

export default function InputNumber({ inputName, inputId, maxValue, placeholder, stateValue, handleStateValue }) {
  return (
    <div className="inputText inputNumber">
      <input type="number" min={1} name={inputName} id={inputId} max={maxValue} placeholder={placeholder} value={stateValue} onChange={(e) => {handleStateValue(e.target.value)}} />
    </div>
  );
}