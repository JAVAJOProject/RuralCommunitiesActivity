import React from 'react';
import EventTitleSet from '../title/EventTitleSet';
import { Outlet } from 'react-router-dom';

const title = {
  mainTitleText: '이벤트',
  subtitleText: '지금 🔥핫🔥한 이벤트 참여해보세요!',
};

export default function RootLayoutEventTitle() {
  return (
    <main className="appMain">
      <EventTitleSet text={title} />
      <div>
        <Outlet />
      </div>
    </main>
  );
}
