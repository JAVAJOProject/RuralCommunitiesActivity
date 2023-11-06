import React from 'react';
import { Outlet } from 'react-router-dom';

import CommunityMainTitle from './community/maintitle/CommunityMainTitle';
import CommunityRuleBoard from './community/communityRules/CommunityRuleBoard';
import CommunityWritingBtn from './community/buttons/CommunityWritingBtn';
import CommunityListBtnSet from './community/buttons/CommunityListBtnSet';

import titleImg from '../../../view_img/Service/community/community/sellerTitle.jpg';
import speakerImg from '../../../view_img/Service/community/community/speaker.svg';
import noteImg from '../../../view_img/Service/community/community/note.svg';

const defaultContents = {
  titles: {
    mainTitle: '빛길 지키미의 마을 소식',
    subtitle: '빛길을 지키는 마을 주민들이 물어오는 소식들!!!',
    imgSrc: titleImg,
  },
  ruleBoard: {
    imgSrc: speakerImg,
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
  writingBtn: {
    text: '글쓰기',
    imgSrc: noteImg,
  },
};

export default function RootLayoutCommunity() {
  const { titles, ruleBoard, writingBtn } = defaultContents;
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
          height: 'max-content;',
        }}
      >
        <div style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
          <CommunityRuleBoard
            imgSrc={ruleBoard.imgSrc}
            title={ruleBoard.title}
            rules={ruleBoard.rules}
          />
        </div>
        <div style={{ width: '59.3125rem', margin: 'auto' }}>
          <CommunityWritingBtn
            imgSrc={writingBtn.imgSrc}
            text={writingBtn.text}
          />
          <CommunityListBtnSet />
        </div>
        <div style={{ clear: 'both' }}>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
