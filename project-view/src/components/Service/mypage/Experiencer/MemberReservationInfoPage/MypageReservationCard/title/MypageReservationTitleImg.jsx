import React from "react";
import "./MypageReservationTitleImg.css";

export default function MypageReservationTitleImg({ imgSrc }) {
  return (
    <div className="mypageReservationTitleImg">
      <img src={imgSrc} alt="" />
    </div>
  );
}
