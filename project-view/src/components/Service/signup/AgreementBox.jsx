import React, { useEffect, useState } from 'react';
import './AgreementBox.css';

export default function AgreementBox({
  title,
  agreeContent,
  agreeText,
  images,
  inputName,
  inputId,
  register,
  watch,
  index,
}) {
  const [val, setVal] = useState(false);
  useEffect(() => {
    setVal((prev) => !prev);
  }, [watch(inputName[index])]);

  return (
    <div className="agreementBox">
      <h2>{title}</h2>
      <textarea value={agreeContent} readOnly />
      <div>
        <label htmlFor={inputId}>
          <img src={images[+val]} alt="" />
          <input
            type="checkbox"
            name={inputName}
            id={inputId}
            {...register(inputName[index])}
          />
        </label>
        <p>{agreeText}</p>
      </div>
    </div>
  );
}
