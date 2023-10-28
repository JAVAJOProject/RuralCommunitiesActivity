import React from 'react';
import './MypageMemberEventContents.css';
import MypageMemberEventList from './MypageMemberEventList';
import MypageMemberEventBtn from './MypageMemberEventBtn';

export default function MypageMemberEventContents({ cardContents, contents }) {
  const [paticipateDate, place, deadline, applyResult] = cardContents;
  const { eventName, eventDate, recruitEndDate, addr, result } = contents;
  const buttons = ['이벤트 상세보기']; // 참여 취소하기, 응모 취소하기, 사연 수정하기

  return (
    <div className="mypageMemberEventContents">
      <h3>{eventName}</h3>
      <hr />
      <div>
        <div>
          <MypageMemberEventList
            type="date"
            title={paticipateDate}
            content={eventDate}
          />
          <MypageMemberEventList title={place} content={addr} />
        </div>
        <div>
          <MypageMemberEventList
            type="date"
            title={deadline}
            content={recruitEndDate}
          />
          <MypageMemberEventList title={applyResult} content={result} />
        </div>
      </div>
      <div className="mypageMemberEventButtonSet">
        {buttons.map((btn) => (
          <MypageMemberEventBtn key={btn} text={btn} link={''} />
        ))}
      </div>
    </div>
  );
}
