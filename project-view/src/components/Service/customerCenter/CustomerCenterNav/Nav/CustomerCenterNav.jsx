import React from 'react';
import CustomerCenterTitleImg from './CustomerCenterTitleImg';
import CustomerCenterTitleText from './CustomerCenterTitleText';
import CustomerCenterNavBox from './CustomerCenterNavBox';
import './CustomerCenterNav.css';

export default function CustomerCenterNav({ navContents }) {
  const { titleImg, titleText, navInnerContent } = navContents;

  return (
    <div>
      <CustomerCenterTitleImg
        className={titleImg.className}
        imgSrc={titleImg.imgSrc}
      />
      <CustomerCenterTitleText
        className={titleText.className}
        content={titleText.content}
      />
      <ul className="navBoxes">
        {navInnerContent.map((nav, index) => (
          <CustomerCenterNavBox
            innerText={nav.text}
            link={nav.link}
            selectedNo={index}
          />
        ))}
      </ul>
    </div>
  );
}
