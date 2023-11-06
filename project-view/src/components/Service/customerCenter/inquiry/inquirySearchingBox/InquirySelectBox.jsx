import React, { useState } from 'react';
import './InquirySelectBox.css';

export default function InquirySelectBox({ contents, register }) {
  // const [selectedType, setSelectedType] = useState(0);
  // const handleSelectedType = (e) => {
  //   setSelectedType(e.target.value);
  // };

  return (
    <select
      className="inquirySelectBox"
      defaultValue={0}
      {...register('searchingTypeId')}
    >
      {contents.map((content) => (
        <option key={content.value} value={content.value}>
          {content.text}
        </option>
      ))}
    </select>
  );
}
