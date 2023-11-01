import React from 'react';
import './InputLabel.css';

export default function InputLabel({inputLabelData}) {
    return (
        <>
        <div className='inputLabelBoxA'>
        <ul className='inputLabelA' >
            {inputLabelData.map((labelItem) => (
            <li key={labelItem.name}>{labelItem.value}</li>                
            ))}
        </ul>   
        </div>
        </>
    );
}

