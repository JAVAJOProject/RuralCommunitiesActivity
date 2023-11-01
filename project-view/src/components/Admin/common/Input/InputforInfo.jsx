import React, { useState } from 'react';
import './InputforInfo.css';



export default function InputforInfo({inputInfoData,onChange}) {

  return (
    <>
    <div className='inputInfoBox'> 
    {inputInfoData.map((inputInfoItem) => 
    <input
    key={inputInfoItem.name}
    type={inputInfoItem.type}
    readOnly={inputInfoItem.readonly}
    name={inputInfoItem.name}
    placeholder={inputInfoItem.placeholder || ''}
    onChange={onChange}
    />
    )}
    </div>
  </>
  );  
}
