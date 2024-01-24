import React from 'react';
import './ChartCategory.css';

export default function ChartCategory({graphCategory}) {


    return (
        <div className='categoryContainerA'>
        {graphCategory && graphCategory.map((item) => (
            <div key={item.key} className='graphCategoryA'>{item.THEME}</div>
        ))}
        </div>
    );
}

