import React, { useState } from 'react';
import './InputForm.css';

export default function InputForm({
  inputFormData,
  isInputRef,
  // change,
  // isCheckList,
}) {
  /* const handleChange = (e) => {
    const { name, value, checked } = e.target; //자동체크

    if (name === 'u_gender') {
      //ref에 접근해서 checked에 접근
      if (value === 'M') {
        isInputRef.current[2].checked = false;
        console.log('2번 체크됫나', isInputRef.current[2].checked); //false이 됫는데css안먹힘 다시하면먹힘
      } else if (value === 'F') {
        isInputRef.current[1].checked = false;
      }
      change(value, checked);
      console.log(name, value, checked);
    } else if (name === 'u_marketing') {
      //ref에 접근해서 checked에 접근
      if (value === 1) {
        isInputRef.current[9].checked = false;
      } else if (value === 0) {
        isInputRef.current[8].checked = false;
      }
      change(value, checked);
      console.log(name, value, checked);
    }
  }; */

  return (
    <>
      <div className={'inputLabelBoxA'}>
        {inputFormData.map((inputFormItem, index) => (
          <>
            {inputFormItem.key === 'u_marketingOne' && (
              <label className="inputLabelA">
                <p>마케팅 동의</p>
              </label>
            )}
            <label
              htmlFor={inputFormItem.key}
              className={
                inputFormItem.name === 'u_gender'
                  ? 'inputGenderA'
                  : inputFormItem.name === 'u_marketing'
                  ? 'inputMarketingA'
                  : 'inputLabelA'
              }
              key={inputFormItem.key}
            >
              <p>{inputFormItem.title}</p>
              <input
                className={'inputDefaultA'}
                id={inputFormItem.key}
                type={inputFormItem.type}
                name={inputFormItem.name}
                defaultValue={inputFormItem.value}
                style={inputFormItem.style}
                ref={(el) => (isInputRef.current[index] = el)}
                // onChange={(e) => handleChange(e)}
              />
            </label>
          </>
        ))}
      </div>
    </>
  );
}
