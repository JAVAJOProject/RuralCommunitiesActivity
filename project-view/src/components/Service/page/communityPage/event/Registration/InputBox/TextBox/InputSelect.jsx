import React, { useState } from 'react';
import './InputSelect.css';

export default function InputSelect({ inputValue, inputName, inputLabel }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleIsChecked = () => {
    setIsChecked((checked) => !checked);
  };

  return (
    <label htmlFor={inputName} className="inputSelectLabel">
      <div className={isChecked ? 'inputSelectActive' : 'inputSelect'}>
        <input
          type="radio"
          value={inputValue}
          name={inputName}
          checked={isChecked}
          onClick={handleIsChecked}
        />
        <p>{inputLabel}</p>
      </div>
    </label>
  );
}
