import React, { useState } from 'react';
import './InputText.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

export default function InputDatePicker({
  inputName,
  inputId,
  isReadOnly,
  defaultValue,
  isRequired,
}) {
  const [selectedStartDate, setSelectedStartDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();

  if (isReadOnly) {
    return (
      <div className="inputText inputDate">
        <DatePicker
          locale={ko}
          dateFormat="yyyy.MM.dd"
          selected={
            typeof defaultValue[0] === 'string'
              ? new Date(defaultValue[0])
              : defaultValue[0]
          }
          className="inputDateText inputPeriod"
          name={inputName[0]}
          id={inputName[0]}
          readOnly
        />
        <p> ~ </p>
        <DatePicker
          locale={ko}
          dateFormat="yyyy.MM.dd"
          selected={
            typeof defaultValue[1] === 'string'
              ? new Date(defaultValue[1])
              : defaultValue[1]
          }
          className="inputDateText inputPeriod"
          name={inputName[1]}
          id={inputName[1]}
          readOnly
        />
      </div>
    );
  }

  return (
    <div className="inputText inputDate">
      <DatePicker
        locale={ko}
        dateFormat="yyyy.MM.dd"
        shouldCloseOnSelect
        minDate={new Date()}
        selected={selectedStartDate}
        onChange={(date) => setSelectedStartDate(date)}
        className="inputDateText inputPeriod"
        name={inputName[0]}
        id={inputName[0]}
        placeholderText="시작 날짜"
        required={isRequired}
      />
      <p> ~ </p>
      <DatePicker
        locale={ko}
        dateFormat="yyyy.MM.dd"
        shouldCloseOnSelect
        minDate={selectedStartDate ? selectedStartDate : new Date()}
        selected={selectedEndDate}
        onChange={(date) => setSelectedEndDate(date)}
        className="inputDateText inputPeriod"
        name={inputName[1]}
        id={inputName[1]}
        placeholderText="끝나는 날짜"
        required={isRequired}
      />
    </div>
  );
}
