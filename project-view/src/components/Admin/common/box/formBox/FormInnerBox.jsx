import React from 'react';
import './FormInnerBox.css';

export default function FormInnerBox({
  formType,
  formName,
  innerStyle,
  children,
}) {
  return formType ? (
    <div className="boardformInnerBoxA" style={innerStyle}>
      {formName && (
        <div>
          <p className="boardformNameA">{formName}</p>
        </div>
      )}
      <br />
      <br />
      {children}
    </div>
  ) : (
    <div className="formInnerBoxA" style={innerStyle}>
      {formName && (
        <div>
          <p className="formNameA">{formName}</p>
        </div>
      )}
      <br />
      <br />
      {children}
    </div>
  );
}
