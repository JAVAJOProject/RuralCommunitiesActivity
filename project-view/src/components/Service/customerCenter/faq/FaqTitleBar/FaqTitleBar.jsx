import React, { useState } from 'react';
import './FaqTitleBar.css';
import FaqCircle from './FaqCircle';
import FaqTitleText from './FaqTitleText';
import DropDownBtn from '../../../common/DropDownBtn';

export default function FaqTitleBar({ title, content }) {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown((state) => !state);
  };

  return (
    <div
      className={'faqTitleBar' + (dropdown ? ' faqTitleBarActive' : '')}
    >
      <div className="faqTitleBarQuestion">
        <FaqCircle text={'Q'} />
        <FaqTitleText title={title} />
        <DropDownBtn dropdown={dropdown} handleDropdown={handleDropdown} />
      </div>
      {dropdown && (
        <div className="faqTitleBarAnswer">
          <hr />
          <div className="faqTitleBarAnswerContent">
            <FaqCircle text={'A'} />
            <p>{content}</p>
          </div>
        </div>
      )}
    </div>
  );
}