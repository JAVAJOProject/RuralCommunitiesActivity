import React from 'react';
import './TotalBtnBox.css';
import TotalReservationBtn from './TotalReservationBtn';
import TotalBackBtn from './TotalBackBtn';

import buttonReservation from '../../../../../view_img/Service/community/event/applyCheck.jpg';
import buttonCancel from '../../../../../view_img/Service/community/event/cancel.jpg';

const buttons = {
  reservation: {
    text: '예약하기',
    link: '',
    imgSrc: buttonReservation,
  },
  back: {
    text: '목록보기',
    imgSrc: buttonCancel,
  },
};

export default function TotalBtnBox({ isReservation, handleNavigate }) {
  const { reservation, back } = buttons;

  return (
    <div className="totalBtnBox">
      {isReservation && (
        <TotalReservationBtn
          text={reservation.text}
          link={reservation.link}
          imgSrc={reservation.imgSrc}
        />
      )}
      <TotalBackBtn text={back.text} handleNavigate={handleNavigate} imgSrc={back.imgSrc} />
    </div>
  );
}