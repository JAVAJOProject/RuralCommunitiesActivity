import React from "react";
import "./MypageReservationBtn.css";

export default function MypageReservationBtn({ btnContent, link, oneCheck }) {
  if (oneCheck == 1) {
    // 체험 상세보기 하나일 때
    return (
      <button className="MypageReservationOneBtn">
        <p>{btnContent}</p>
      </button>
    );
  } else {
    return (
      <button className="MypageReservationBtn">
        <p>{btnContent}</p>
      </button>
    );
  }
}
