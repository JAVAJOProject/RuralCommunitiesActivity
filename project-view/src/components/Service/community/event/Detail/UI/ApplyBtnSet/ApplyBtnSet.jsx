import React from 'react';
import EventApplyBtn from '../../../Buttons/EventApplyBtn';
import './ApplyBtnSet.css';
import BackBtn from '../../../Buttons/BackBtn';

export default function ApplyBtnSet({ content, applyLink }) {
  const { applyBtnTypeId } = content;

  return (
    <div className="applyBtnSet">
      <EventApplyBtn size="big" type={applyBtnTypeId} link={applyLink} />
      <BackBtn size="big" />
    </div>
  );
}
