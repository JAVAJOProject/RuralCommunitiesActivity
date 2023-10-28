import React from 'react';
import './InputText.css';

export default function InputText({
  inputName,
  inputId,
  isReadOnly,
  value,
  isCenter,
}) {
  return (
    <div className="inputText">
      {!!isReadOnly ? (
        <input
          type="text"
          name={inputName}
          id={inputId}
          readOnly={!!isReadOnly}
          value={value ?? ''}
          style={{ textAlign: isCenter ? 'center' : 'justify' }}
        />
      ) : (
        <input type="text" name={inputName} id={inputId} />
      )}
    </div>
  );
}
