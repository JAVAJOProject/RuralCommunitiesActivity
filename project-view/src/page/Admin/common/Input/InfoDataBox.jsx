import React, { useState } from 'react';
import './InfoDataBox.css';



export default function InfoDataBox({InfoData}) {

  return (
    
    <div className='InfoDataBox'> 
    {Array.isArray(InfoData) ? InfoData.map((InfoDataItem) => (
    <ul key={InfoDataItem.u_id}>
      <li>{InfoDataItem.u_id}</li>
      <li>{InfoDataItem.u_name}</li>
      <li>{InfoDataItem.u_nick}</li>
      <li>{InfoDataItem.u_birth}</li>
      <li>{InfoDataItem.u_tel}</li>
      <li>{InfoDataItem.u_email}</li>
    </ul>
    )) : null}
    </div>
  
  );  
}
