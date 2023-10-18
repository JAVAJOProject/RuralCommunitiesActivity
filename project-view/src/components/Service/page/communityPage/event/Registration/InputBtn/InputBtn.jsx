import React from 'react';
import './InputBtns.css';

export default function InputBtn({ btnText, type, style }) {
  let classes = ['inputBtn'];
  if (type === 'button') {
    classes.push('inputBtnBlack');
  } else if (type === 'reset') {
    classes.push('inputBtnGray');
  }

  return (
    <div className={classes.join(' ')} style={style}>
      <input type={type} value={btnText} />
    </div>
  );
}
