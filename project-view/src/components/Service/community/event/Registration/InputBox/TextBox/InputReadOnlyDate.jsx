import React from 'react';
import './InputText.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

export default function InputReadOnlyDate({
  inputName,
  // placeholder,
}) {
  const reservationDate = new Date();
  reservationDate.setDate(reservationDate.getDate() + 7);

  return (
    <div className="inputText inputDate">
      <DatePicker
        locale={ko}
        selected={reservationDate}
        dateFormat="yyyy.MM.dd"
        name={inputName}
        id={inputName}
        className="inputDateText inputOneDate"
        readOnly
      />
      {/* <input
        type="date"
        name={inputName}
        id={inputName}
        className="inputDateText inputOneDate"
        defaultValue={reservationDate.toLocaleDateString()}
        readOnly
        aria-readonly
        data-placeholder={placeholder}
      /> */}
    </div>
  );
}
