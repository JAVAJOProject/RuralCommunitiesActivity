import React from 'react';
import './RatingDataTableBodyText.css';

export default function RatingDataTableBodyText({
  regionSido,
  regionSigungu,
  regionTown,
}) {
  let text;
  let className;
  if (regionTown) {
    text = regionTown;
    className = 'ratingDataTableBodyTextWide';
  } else if (regionSido && regionSigungu) {
    let sido;
    if (regionSido.length >= 5 || regionSido.length < 4) {
      sido = regionSido.substring(0, 2);
    } else if (regionSido.length === 4) {
      sido = regionSido[0] + regionSido[2];
    }

    const sigungu = regionSigungu.substring(0, regionSigungu.length - 1);
    text = `${sido} ${sigungu.length === 1 ? sigungu + '(구)' : sigungu}`;
    className = 'ratingDataTableBodyTextNarrow';
  }
  const classes = ['ratingDataTableBodyText', className].join(' ');

  return (
    <td className={classes}>
      <p>{text}</p>
    </td>
  );
}
