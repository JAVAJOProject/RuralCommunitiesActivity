import React from "react";
import MypageReservationTitleImg from "./MypageReservationTitleImg";
import MypageReservationTitleMain from "./MypageReservationTitleMain";
import MypageReservationTitleLine from "./MypageReservationTitleLine";
import "./MypageReservationTitleBox.css";

export default function MypageReservationTitleBox({ imgSrc, mainTitle }) {
  return (
    <div className="mypageReservationTitleBox">
      <MypageReservationTitleImg imgSrc={imgSrc} />
      <div className="mypageReservationTitleSet">
        <MypageReservationTitleMain mainTitle={mainTitle} />
        <MypageReservationTitleLine />
      </div>
    </div>
  );
}
