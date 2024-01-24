import React from 'react';
import './VerticalUnit.css';

export default function VerticalUnit({graphUnit}) {
    const unit = graphUnit ? parseInt(graphUnit, 10) : 10;
    const unitMax = unit*10;


    const unitArray = [];
    
    for(let i=0; i < 10; i++){
        unitArray.push(
        <div key={i} 
            className='graphUnitA'
            >{unitMax-(unit*i)}
            {i !== 9 && <br />}
        </div>)
    };

    return (
        <div className='unitBoxA'>
        {unitArray}
        </div>
    );
}

