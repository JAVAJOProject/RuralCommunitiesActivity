import React from 'react';
import './InputText.css';

export default function InputText({
  inputName,
  inputId,
  isReadOnly,
  value,
  isCenter,
  isRequired,
  inputStyle,
}) {
  const styles = { ...inputStyle };
  styles.textAlign = isCenter ? 'center' : 'justify';

  return (
    <div className="inputText">
      {!!isReadOnly ? (
        <input
          type="text"
          name={inputName}
          id={inputId}
          readOnly={!!isReadOnly}
          value={value ?? ''}
          style={styles}
        />
      ) : (
        <input
          type="text"
          name={inputName}
          id={inputId}
          required={isRequired}
          defaultValue={value ?? null}
        />
      )}
    </div>
  );
}
