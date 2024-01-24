import React from 'react';
import './CalenderCell.css';
export default function CalenderCell({calenderData}) {



    const cellArray = [];
    
    calenderData.map((items) => (
    cellArray.push(
        <div key={items.DAY} 
            className='calenderCellA'>
                {items.DAY}<br/>
                <p className='cellDataA'>{items.COUNT}건</p>
        </div>)
        ));

    const nullArray = [];

    for(let i = 0; i < 31; i++){
        nullArray.push(
        <div key={i}
            className='calenderCellA'>
                {i+1}<br/>
                <p className='cellDataA'>0건</p>
        </div>
    )}
        
    
    

    return (
        <>
            {calenderData.length !== 0 ? cellArray : nullArray}
        </>
    );
}

