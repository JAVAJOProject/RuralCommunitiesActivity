import React from 'react';
import './SelectDate.css';


export default function SelectDate({selectDate}) {
    return (
    <select name="date" id="dateTime">
        {selectDate.map((item) => <option value={item.value}>{item.name}</option>)}
    </select>
    );
}

