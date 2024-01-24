import React from 'react';
import './InputAdmin.css';

export default function InputAdmin({ inputData,change }) {

  return (
    <>
<div className='inputSearchAdmin'>
    {inputData.map((inputItem, index) => (
    <label htmlFor={inputItem.key}
    className='inputLabelSearchA'
    key={inputItem.key} >
    {inputItem.title}
    <input className='inputSearchA'
    id={inputItem.key}
    type={inputItem.type}
    name={inputItem.name}
    defaultValue={inputItem.value}
    placeholder={inputItem.placeholder || ''}
    style={inputItem.style}
    onChange={change}
    />
    </label>
    ))}
</div>
</>
  );  
}
