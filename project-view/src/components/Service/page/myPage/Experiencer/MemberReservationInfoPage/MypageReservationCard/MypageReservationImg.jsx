import React from "react";
import "./MypageReservationImg.css";

export default function MypageReservationImg({ imgSrc }) {
  return (
    <div className="mypageReservationImg">
      <img src={imgSrc} alt="" />
    </div>
  );
}
