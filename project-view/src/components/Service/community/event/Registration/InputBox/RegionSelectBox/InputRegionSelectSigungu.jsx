import React, { useState } from 'react';
import './InputRegionSelect.css';

export default function InputRegionSelectSigungu({ inputName, regionSigungu }) {
  const [selectedSigunguId, setSelectedSigunguId] = useState('');
  const handleSelectedSigunguId = (e) => {
    setSelectedSigunguId(e.target.value);
  };

  return (
    <div className="inputRegionSelect">
      <p>시군구</p>
      <select value={selectedSigunguId} onChange={handleSelectedSigunguId}>
        {regionSigungu.length > 0 &&
          regionSigungu.map((sigungu) => (
            <option key={sigungu.typeId} value={sigungu.typeId}>
              {sigungu.text}
            </option>
          ))}
      </select>
    </div>
  );
}
