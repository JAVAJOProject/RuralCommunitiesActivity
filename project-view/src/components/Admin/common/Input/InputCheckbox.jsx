import React from 'react';
import './InputCheckbox.css';

export default function InputCheckbox({ checkboxData, checkOnChange }) {
  return (
    <>
      <div>
        {checkboxData.map((checkboxItem) => (
          <div
            className={
              checkboxItem.name === 'u_gender'
                ? 'inputGenderA'
                : 'inputMarketingA'
            }
            key={checkboxItem.key}
          >
            <input
              type={checkboxItem.type}
              value={checkboxItem.value}
              readOnly={checkboxItem.readonly}
              name={checkboxItem.name}
              placeholder={checkboxItem.placeholder || ''}
              onChange={checkOnChange}
              checked={checkboxItem.checked}
              style={checkboxItem.style}
            />
            <p>{checkboxItem.placeholder}</p>
          </div>
        ))}
      </div>
    </>
  );
}
