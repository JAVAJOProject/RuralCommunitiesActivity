import React from 'react';
import BoardFormBackgroundBox from '../../../../common/box/formBox/BoardFormBackgroundBox';
import FormInnerBox from '../../../../common/box/formBox/FormInnerBox';

export default function InquiryUpdateForm() {
  return (
    <BoardFormBackgroundBox clipColor="green" formType="답변하기">
      <FormInnerBox formType="1" formName="{inquiryTitle}" />
      <br />
      <FormInnerBox
        formType="1"
        formName="{inquiryContent}"
        innerStyle={{ height: '200px' }}
      />{' '}
      <br />
      <FormInnerBox
        formType="1"
        formName="{inquiryA}"
        innerStyle={{ height: '200px' }}
      />
    </BoardFormBackgroundBox>
  );
}
