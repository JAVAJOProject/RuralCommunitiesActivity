import React from "react";
import "./MypageReservationContents.css";
import MypageReservationActTitle from "./MypageReservationActTitle";
import MypageReservationActLine from "./MypageReservationActLine";
import MypageReservationActList from "./MypageReservationActList";
import MypageReservationBtnBox from "./MypageReservationBtnBox";

// const btnContentTemp = [{ status: 1 }, { status: 2 }];

export default function MypageReservationContents({
  mainTitle,
  subtitles,
  contents,
}) {
  const [reserDate, payment, deadline, reserPeople, payStatus] = subtitles;
  // btnStatus : 버튼 모양 (1: 결제하러가기, 2: 후기쓰러가기, 3: 후기보기, default: 상세보기)
  const {
    reservationDate,
    paymentInfo,
    paymentStatusId,
    reservationHeadCount,
    reviewStatus,
  } = contents;
  let today = new Date();
  let btnStatus;

  if (paymentStatusId === "2") {
    // 결제 전 -> 결제하러 가기 버튼
    btnStatus = 1;
  } else if (
    paymentStatusId === "3" ||
    (paymentStatusId === "1" && today < new Date(reservationDate))
  ) {
    // 결제취소거나 체험 시작(결제완료 후) 전
    btnStatus = 4;
  } else if (paymentStatusId === "1" && reviewStatus === 0) {
    // 체험 후 후기를 안썻을 떄
    btnStatus = 2;
  } else {
    // 후기를 썻을 때
    btnStatus = 3;
  }

  return (
    <div className="mypageReservationContents">
      <MypageReservationActTitle title={mainTitle} />
      <MypageReservationActLine />
      <ul className="mypageReservationUl">
        <div>
          <MypageReservationActList
            title={reserDate}
            content={reservationDate}
            type="date"
          />
          <MypageReservationActList
            title={payment}
            content={paymentInfo.paymentAmount}
            type="payment"
          />
          <MypageReservationActList
            title={deadline}
            content={paymentInfo.paymentDeadline}
            type="deadline"
          />
        </div>
        <div>
          <MypageReservationActList
            title={reserPeople}
            content={reservationHeadCount}
            type="maxPeople"
          />
          <MypageReservationActList
            title={payStatus}
            content={paymentStatusId}
            type="status"
          />
        </div>
      </ul>
      <MypageReservationBtnBox btnContents={btnStatus} />
    </div>
  );
}
