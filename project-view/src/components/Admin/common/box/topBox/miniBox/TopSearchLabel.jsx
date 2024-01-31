import React from 'react';
import './TopSearchLabel.css';

export default function TopSearchLabel({ labelName, labelStyle }) {
  return (
    <>
      {labelName &&
        labelName.map((searchItem) => (
          <ul className="TopSearchLabelA">
            <li
              key={searchItem.name}
              className="TopSearchLabelliA"
              style={labelStyle}
            >
              {searchItem.value}
            </li>
          </ul>
        ))}
    </>
  );
}
