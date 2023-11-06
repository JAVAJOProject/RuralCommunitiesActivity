import React from 'react';
import './MypageSellerEventManagementParticipation.css';

export default function MypageSellerEventManagementParticipation({
  data,
  styles,
}) {
  const {
    eventReportId,
    userInfo: { uId, uName, uNick, uTel, uEmail },
    eventProgressStatusId,
    eventProgressStatus,
  } = data;

  return (
    <div className="mypageSellerEventManagementParticipation">
      <p style={styles[0].style} title={uNick}>
        {uNick}
      </p>
      <p style={styles[1].style} title={uName}>
        {uName}
      </p>
      <p style={styles[2].style} title={uTel}>
        {uTel.substr(0, 3)}-
        {uTel.length === 7 ? uTel.substr(3, 3) : uTel.substr(3, 4)}-
        {uTel.substr(-4, 4)}
      </p>
      <p style={styles[3].style} title={uEmail}>
        {uEmail}
      </p>
      <p style={styles[4].style} title={eventProgressStatus}>
        {eventProgressStatus}
      </p>
    </div>
  );
}
