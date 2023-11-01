import React from 'react';
import './InputBtns.css';

export default function InputBtn({
  btnText,
  type,
  style,
  formRef,
  handleClick,
  handleModalSet,
  handleSeparatelySuccessModalSet,
  handleWasValidated,
}) {
  let classes = ['inputBtn'];
  if (type === 'button') {
    classes.push('inputBtnBlack');
  } else if (type === 'reset') {
    classes.push('inputBtnGray');
  }

  return (
    <div className={classes.join(' ')} style={style}>
      <input
        type={type}
        value={btnText}
        onClick={(e) => {
          handleClick(
            e,
            handleModalSet.handleOpen,
            handleModalSet.handleTexts,
            handleModalSet.handleBtn,
            formRef,
            handleWasValidated,
            handleSeparatelySuccessModalSet?.handleTexts,
            handleSeparatelySuccessModalSet?.handleOpen
          );
        }}
      />
    </div>
  );
}
