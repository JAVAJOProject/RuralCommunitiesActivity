import React from 'react';
import FormBackgroundBox from './FormBackgroundBox';
import FormInnerBox from './FormInnerBox';

export default function FormBox({ clipColor, formName, children }) {
  return (
    <FormBackgroundBox clipColor={clipColor}>
      <FormInnerBox formName={formName}>{children}</FormInnerBox>
    </FormBackgroundBox>
  );
}
