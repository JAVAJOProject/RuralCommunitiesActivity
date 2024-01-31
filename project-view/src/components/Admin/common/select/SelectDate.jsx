import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import './SelectDate.css';
import SelectDateValue from './SelectDateValue';

export default function SelectDate({
  selectData,
  selectType,
  selectSido,
  selectChange,
}) {
  const [selectValues, updateSelectValues] = useImmer([]);
  const [selectedSido, setSelectedSido] = useState(0);
  const [selectSigungu, updateSelectSigungu] = useImmer([]);

  useEffect(() => {
    setSelectedSido(selectSido);
  }, [selectSido]);

  return (
    <div className="selectAdmin">
      <select
        name={selectType ? selectType : 'dateType'}
        onChange={selectChange}
      >
        {selectType ? (
          <SelectDateValue
            selectType={selectType}
            sido={selectedSido}
            values={selectValues}
            setValues={updateSelectValues}
            sigungu={selectSigungu}
            setSigungu={updateSelectSigungu}
          />
        ) : (
          selectData.map((item) => (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          ))
        )}
      </select>
    </div>
  );
}
