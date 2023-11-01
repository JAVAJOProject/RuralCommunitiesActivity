import React from 'react';
import './InputRegionSelect.css';

export default function InputRegionSelectSido({
  inputName,
  regionSido,
  selectedSido,
  isOnlyRegion,
  isRequired,
}) {
  const [selectedSidoId, setSelectedSidoId] = selectedSido;
  const handleSelectedSidoId = (e) => {
    setSelectedSidoId(e.target.value);
  };

  return (
    <div className="inputRegionSelect">
      <p>시도</p>
      <select
        value={selectedSidoId}
        onChange={handleSelectedSidoId}
        name={inputName}
        isRequired={isRequired}
      >
        {!isOnlyRegion && <option value={0}>{'온라인'}</option>}
        {regionSido.map((sido) => (
          <option key={sido.sidoId} value={sido.sidoId}>
            {sido.sidoName}
          </option>
        ))}
      </select>
    </div>
  );
}
