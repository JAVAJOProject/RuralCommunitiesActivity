import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import './UserInfoInputBirth.css'

export default function UserInfoInputBirth({
  inputName,
  minDate,
  maxDate,
  defaultValue,
}) {
  return (
    <DatePicker
      locale={ko}
      dateFormat="yyyy.MM.dd"
      shouldCloseOnSelect
      minDate={typeof minDate === 'string' ? new Date(minDate) : minDate}
      maxDate={typeof maxDate === 'string' ? new Date(maxDate) : maxDate}
      selected={
        typeof defaultValue === 'string' ? new Date(defaultValue) : defaultValue
      }
      name={inputName}
      id={inputName}
			className='userInfoInputBirth'
    />
  );
}
