import React from 'react';
import './MypageMemberEventContents.css';
import MypageMemberEventList from './MypageMemberEventList';
import MypageMemberEventBtn from './MypageMemberEventBtn';

export default function MypageMemberEventContents({ cardContents, contents }) {
  const [participateDate, place, deadline, applyResult] = cardContents;
  const {
    eventId,
    eventName,
    eventStartDate,
    eventRecruitEndDate,
    eventAddr,
    eventProgressStatus,
  } = contents;
  const buttons = [
    {
      text: '이벤트 상세보기',
      link: `/app/community/event/board/detail/${eventId}`,
    },
  ]; // 참여 취소하기, 응모 취소하기, 사연 수정하기

  return (
    <div className="mypageMemberEventContents">
      <h3>{eventName}</h3>
      <hr />
      <div>
        <div>
          <MypageMemberEventList
            type="date"
            title={participateDate}
            content={eventStartDate}
          />
          <MypageMemberEventList title={place} content={eventAddr} />
        </div>
        <div>
          <MypageMemberEventList
            type="date"
            title={deadline}
            content={eventRecruitEndDate}
          />
          <MypageMemberEventList
            title={applyResult}
            content={eventProgressStatus}
          />
        </div>
      </div>
      <div className="mypageMemberEventButtonSet">
        {buttons.map((btn) => (
          <MypageMemberEventBtn
            key={btn.text}
            text={btn.text}
            link={btn.link}
          />
        ))}
      </div>
    </div>
  );
}
