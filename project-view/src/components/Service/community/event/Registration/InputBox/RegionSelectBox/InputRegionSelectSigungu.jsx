import React, { useState } from 'react';
import './InputRegionSelect.css';

export default function InputRegionSelectSigungu({ inputName, regionSigungu, isRequired }) {
  const [selectedSigunguId, setSelectedSigunguId] = useState('');
  const handleSelectedSigunguId = (e) => {
    setSelectedSigunguId(e.target.value);
  };

  return (
    <div className="inputRegionSelect">
      <p>시군구</p>
      <select
        value={selectedSigunguId}
        onChange={handleSelectedSigunguId}
        name={inputName}
        isRequired={isRequired}
      >
        {regionSigungu.length > 0 &&
          regionSigungu.map((sigungu) => (
            <option key={sigungu.sigunguId} value={sigungu.sigunguId}>
              {sigungu.sigunguName}
            </option>
          ))}
      </select>
    </div>
  );
}
