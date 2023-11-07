import React from 'react';
import { Outlet } from 'react-router-dom';

import CommunityMainTitle from './community/maintitle/CommunityMainTitle';
import CommunityRuleBoard from './community/communityRules/CommunityRuleBoard';
import CommunityListBtnSet from './community/buttons/CommunityListBtnSet';

import titleImg from '../../../view_img/Service/community/community/sellerTitle.jpg';
import speakerImg from '../../../view_img/Service/community/community/speaker.svg';
import pickRed from '../../../view_img/Service/community/community/communityRed.png';

const defaultContents = {
  titles: {
    mainTitle: '빛길 지키미의 마을 소식',
    subtitle: '빛길을 지키는 마을 주민들이 물어오는 소식들!!!',
    imgSrc: titleImg,
  },
  ruleBoard: {
    imgSrc: speakerImg,
    imgPick: pickRed,
    title: '소통공간 이용수칙',
    rules: [
      '욕설 X',
      '남을 비방하는 말 X',
      '도배 X',
      '성인물 및 부적절한 발언 X',
      '유해 사이트 링크 X',
      '스팸 및 사이트와 관련없는 광고 X',
    ],
  },
};

export default function RootLayoutCommunity() {
  const { titles, ruleBoard } = defaultContents;

  return (
    <main className="appMain">
      <CommunityMainTitle
        mainTitle={titles.mainTitle}
        subtitle={titles.subtitle}
        imgSrc={titles.imgSrc}
      />
      <div
        style={{
          backgroundColor: 'rgba(190, 190, 190, 0.17)',
          width: '100%',
          height: 'max-content',
        }}
      >
        <div style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
          <CommunityRuleBoard
            imgPick={ruleBoard.imgPick}
            imgSrc={ruleBoard.imgSrc}
            title={ruleBoard.title}
            rules={ruleBoard.rules}
          />
        </div>
        <div style={{ width: '48rem', margin: 'auto' }}>
          <CommunityListBtnSet />
        </div>
        <div style={{ clear: 'both', marginTop: '5rem' }}>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
