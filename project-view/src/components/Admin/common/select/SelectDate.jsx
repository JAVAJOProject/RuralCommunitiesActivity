import React from 'react';
import './SelectDate.css';


export default function SelectDate({selectDate}) {
    return (
<div className='selectAdmin'>
    <select name="date" id="dateTime">
        {selectDate.map((item) => <option value={item.value}>{item.name}</option>)}
    </select>
</div>
    );
}

