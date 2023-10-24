import React from 'react';
import TotalActReservationTitle from '../../../components/Service/totalActivity/Reservation/Title/TotalActReservationTitle';

import reservationTitleImg from '../../../view_img/Service/totalActivity/reservation/title.svg';
import TotalActReservationContentsBoxSet from '../../../components/Service/totalActivity/Reservation/Contents/TotalActReservationContentsBoxSet';

const contents = {
  titles: {
    mainTitle: '예약하기',
    subtitle: '* 예약 내역은 마이페이지에서 확인하실 수 있습니다. *',
    imgSrc: reservationTitleImg,
  },
  inputContents: {
    title: {
      labelText: '참여 체험명',
      type: 'thin',
      inputName: 'aName',
    },
    date: {
      labelText: '참여 일자',
      type: 'thin',
      inputName: 'reservationDate',
    },
    actAddr: {
      labelText: '참여 장소',
      type: 'thin',
      inputName: 'aAddr',
    },
    participant: {
      labelText: '예약자명',
      type: 'thin',
      inputName: 'participantName',
    },
    headCount: {
      labelText: '참여 인원',
      type: 'thin',
      inputName: 'headCount',
    },
    payment: {
      labelText: '결제 금액',
      type: 'thin',
      inputName: 'payment',
    },
    paymentDeadline: {
      labelText: '결제 기한',
      type: 'thin',
      inputName: 'deadline',
    },
    map: {
      labelText: '약도보기',
      type: 'thinTextArea',
      inputName: 'map',
    },
    buttons: {
      submit: { text: '예약하기', type: 'button' },
      cancel: { text: '입력 취소', type: 'reset' },
    },
  },
};

const testContents = {
  aName: '전통 요리 체험',
  recruitStartDate: '2023-09-15',
  recruitEndDate: '2023-12-15',
  startDate: '2023-10-01',
  endDate: '2023-12-31',
  addr: '울산광역시 남구 중앙로 201',
  availablePeople: 30,
  ratePerPerson: 10000,
  deadline: '2023-11-15',
};

export default function TotalActReservationPage() {
  const { titles, inputContents } = contents;

  return (
    <div>
      <TotalActReservationTitle
        imgSrc={titles.imgSrc}
        mainTitle={titles.mainTitle}
        subtitle={titles.subtitle}
      />
      <TotalActReservationContentsBoxSet
        api={''}
        method="post"
        contents={inputContents}
        data={testContents}
      />
    </div>
  );
}
