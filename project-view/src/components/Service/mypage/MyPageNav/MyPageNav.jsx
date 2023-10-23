import React from 'react';
import MyPageTitleImg from './MyPageTitleImg';
import MyPageTitleText from './MyPageTitleText';
import MyPageSegBar from './MyPageSegBar';
import MyPageNavBox from './MyPageNavBox';
import './MyPageNav.css';

export default function MyPageNav({ navContents }) {
  const { titleImg, titleText, navTexts } = navContents;

  return (
    <div className="myPageNav">
      <div className="myPageNavTitleBox">
        <MyPageTitleImg
          className={titleImg.className}
          imgSrc={titleImg.imgSrc}
        />
        <MyPageTitleText titleText={titleText} />
      </div>
      <MyPageSegBar />
      <ul className="myPageNavBoxes">
        {navTexts.map((nav) => (
          <MyPageNavBox text={nav.text} link={nav.link} />
        ))}
      </ul>
    </div>
  );
}
