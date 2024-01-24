import React from 'react';
import './ChartBox.css';

import VerticalUnit from './VerticalUnit';
import ChartData from './ChartData';
import ChartCategory from './ChartCategory';


export default function ChartBox({graphUnit,graphCategory,graphData}) {

    return (
        <>
        <VerticalUnit graphUnit={graphUnit}/>
        <div className='chartBoxA'>
            <ChartData graphData={graphData}/>
        </div>
        <ChartCategory graphCategory={graphCategory}/>
        </>
    );
}

