import React, { useContext, useEffect } from 'react';
import './SelectMenuBox.css';
import MenuSetBox from './MenuSetBox';
import { ToggleContext } from '../../toggleMenuContext/ToggleMenu';

const detailMenu = {
  recActivity: {
    menuId: 1,
    content: [
      { text: '키워드 추천', link: 'recommendation/keywordActivity' },
      { text: '지도 콕콕', link: 'recommendation/region' },
      { text: '마을 도감', link: 'recommendation/villageGuide' },
    ],
  },
  totalActivity: {
    menuId: 2,
    content: [
      { text: '테마별 체험', link: 'activity/theme' },
      { text: '지역별 체험', link: 'activity/region' },
      { text: '농촌관광등급', link: 'activity/grade' },
      { text: '민박', link: 'activity/accommodation' },
    ],
  },
  community: {
    id: 3,
    content: [
      { text: '이벤트', link: 'community/event' },
      { text: '소통 공간', link: 'community/board' },
      { text: '마을 소식', link: 'community/news' },
    ],
  },
  customerCenter: {
    menuId: 4,
    content: [
      { text: '공지사항', link: 'customerService/notice' },
      { text: 'FAQ', link: 'customerService/faq' },
      { text: '문의글 목록', link: 'customerService/inquiry/list' },
      { text: '1:1 문의', link: 'customerService/inquiry/post' },
    ],
  },
};

export default function SelectMenuBox() {
  const { visibleAll, updateVisibleAll } = useContext(ToggleContext);
  const { visible, pointInTop, pointInMiddle } = visibleAll;
  const { recActivity, totalActivity, community, customerCenter } = detailMenu;

  useEffect(() => {
    if (pointInMiddle || pointInTop) {
      updateVisibleAll((draft) => {
        draft.visible = true;
      });
    } else {
      updateVisibleAll((draft) => {
        draft.visible = false;
      });
    }
  }, [pointInMiddle, pointInTop]);

  return (
    visible && (
      <div
        className="selectMenuBox"
        onPointerOver={() => {
          updateVisibleAll((draft) => {
            draft.pointInMiddle = true;
          });
        }}
        onPointerOut={() => {
          updateVisibleAll((draft) => {
            draft.pointInMiddle = false;
          });
        }}
      >
        <div className="MenuSetBoxList">
          <div className="divForSpaceLeft" />
          <MenuSetBox detailMenu={recActivity} />
          <MenuSetBox detailMenu={totalActivity} />
          <MenuSetBox detailMenu={community} />
          <MenuSetBox detailMenu={customerCenter} />
          <div className="divForSpaceRight" />
        </div>
      </div>
    )
  );
}
