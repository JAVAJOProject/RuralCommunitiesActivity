import React, { useState } from 'react';
import InputSelect from './InputSelect';
import NotLabelBox from '../NotLabelBox';
import './InputSelectBox.css';

export default function InputSelectBox({
  inputInfo,
  isRequired,
  defaultValue,
}) {
  const [checkedValue, setCheckedValue] = useState(defaultValue ?? 1);
  const { inputName, inputValue, inputLabel, labelText, type } = inputInfo;

  let style = { marginRight: '0.87rem', marginLeft: '0.3rem' };
  switch (type) {
    case 'thin':
      style.height = '3.66531rem';
      break;
    case 'image':
      style.height = '13.0625rem';
      break;
    case 'thinTextArea':
      style.height = '21.2495rem';
      break;
    case 'thickTextArea':
      style.height = '21.25rem';
      break;
    default:
      style.height = '0';
      break;
  }

  return (
    <div className="inputSelectBox">
      <NotLabelBox text={labelText} style={style} />
      <div className="inputSelects">
        {inputValue.map((val, index) => (
          <InputSelect
            key={val}
            inputValue={val}
            inputName={inputName}
            inputLabel={inputLabel[index]}
            checkedValue={checkedValue}
            handleCheckedValue={setCheckedValue}
          />
        ))}
      </div>
    </div>
  );
}
