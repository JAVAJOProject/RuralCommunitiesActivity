import React, { useState } from 'react';
import './AgreementBox.css';

export default function AgreementBox({
  title,
  agreeContent,
  agreeText,
  images,
  inputName,
  inputId,
  register,
  watchedValue,
}) {
  return (
    <div className="agreementBox">
      <h2>{title}</h2>
      <textarea value={agreeContent} readOnly />
      <div>
        <label htmlFor={inputId}>
          <img src={images[+!!watchedValue]} alt="" />
          <input
            type="checkbox"
            name={inputName}
            id={inputId}
            {...register}
          />
        </label>
        <p>{agreeText}</p>
      </div>
    </div>
  );
}
