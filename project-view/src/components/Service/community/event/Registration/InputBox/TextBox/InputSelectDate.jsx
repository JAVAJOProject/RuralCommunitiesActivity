import React, { useState } from 'react';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './InputText.css';

export default function InputSelectDate({
  inputName,
  minDate,
  maxDate,
  placeholder,
}) {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <div>
      <DatePicker
        locale={ko}
        dateFormat="yyyy.MM.dd"
        shouldCloseOnSelect
        minDate={
          new Date() > new Date(minDate) ? new Date() : new Date(minDate)
        }
        maxDate={new Date(maxDate)}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="inputDateText inputOneDate"
        name={inputName}
        id={inputName}
        placeholderText={placeholder}
      />
    </div>
  );
}
