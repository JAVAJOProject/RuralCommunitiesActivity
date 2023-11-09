import React, { useContext, useEffect, useRef } from 'react';
import TopMenu from './TopMenu';
import './TopMenus.css';
import { ToggleContext } from '../../toggleMenuContext/ToggleMenu';
import { TopMenuPosContext } from './TopMenuPos';

const menuContents = {
  recActivity: { name: '추천 체험', link: 'recommendation' },
  totalActivity: { name: '전체 체험', link: 'activity' },
  community: { name: '커뮤니티', link: 'community' },
  customerCenter: { name: '고객센터', link: 'customerService' },
};

export default function TopMenus() {
  const topMenusRef = useRef(null);
  const { setTopMenuPos } = useContext(TopMenuPosContext);
  useEffect(() => {
    if (topMenusRef?.current) {
      const topMenuPos = topMenusRef.current.getBoundingClientRect().x;
      setTopMenuPos(topMenuPos);
    }
  }, [topMenusRef, topMenusRef?.current?.getBoundingClientRect().x]);

  const { visibleAll, updateVisibleAll } = useContext(ToggleContext);
  useContext(ToggleContext);
  const { visible, pointInTop, pointInMiddle } = visibleAll;
  const { recActivity, totalActivity, community, customerCenter } =
    menuContents;

  useEffect(() => {
    if (pointInTop || pointInMiddle) {
      updateVisibleAll((draft) => {
        draft.visible = true;
      });
    } else {
      updateVisibleAll((draft) => {
        draft.visible = false;
      });
    }
  }, [pointInTop, pointInMiddle]);

  return (
    <ul
      ref={topMenusRef}
      className="menuListUl"
      onPointerOver={() => {
        updateVisibleAll((draft) => {
          draft.pointInTop = true;
        });
      }}
      onPointerOut={() => {
        updateVisibleAll((draft) => {
          draft.pointInTop = false;
        });
      }}
    >
      <TopMenu menuNo={1} menu={recActivity} />
      <TopMenu menuNo={2} menu={totalActivity} />
      <TopMenu menuNo={3} menu={community} />
      <TopMenu menuNo={4} menu={customerCenter} />
    </ul>
  );
}
