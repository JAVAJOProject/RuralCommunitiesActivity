import React, { useState } from 'react';
import './InputAdmin.css';



export default function InputAdmin({inputData,onChange}) {


  return (
    <>
<div className='inputAdmin'>
    {inputData.map((inputItem) => 
    <input
    key={inputItem.name}
    type={inputItem.type}
    name={inputItem.name}
    placeholder={inputItem.placeholder || ''}
    onChange={onChange}
    />
    )}
</div>
  </>
  );  
}
