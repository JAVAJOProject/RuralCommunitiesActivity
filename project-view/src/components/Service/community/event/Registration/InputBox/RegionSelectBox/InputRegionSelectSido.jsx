import React from 'react';
import './InputRegionSelect.css';

export default function InputRegionSelectSido({
  inputName,
  regionSido,
  selectedSido,
}) {
  const [selectedSidoId, setSelectedSidoId] = selectedSido;
  const handleSelectedSidoId = (e) => {
    setSelectedSidoId(e.target.value);
  };

  return (
    <div className="inputRegionSelect">
      <p>시도</p>
      <select value={selectedSidoId} onChange={handleSelectedSidoId}>
        <option value={0}>{'온라인'}</option>
        {regionSido.map((sido) => (
          <option key={sido.typeId} value={sido.typeId}>
            {sido.text}
          </option>
        ))}
      </select>
    </div>
  );
}
