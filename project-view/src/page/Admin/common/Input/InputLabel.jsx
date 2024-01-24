import React from 'react';
import './InputLabel.css';

export default function InputLabel({labelType, inputLabelData}) {

    return (
        <>
        <div className={labelType === 'search' ? 'searchLabelBoxA' : 'inputLabelBoxA'}>
        <ul className={labelType === 'search' ? 'searchLabelA' : 'inputLabelA'} >
            {inputLabelData.map((labelItem) => (
            <li 
                key={labelItem.name} 
                >{labelItem.value}</li>                
            ))}
        </ul>   
        </div>
        </>
    );
}

