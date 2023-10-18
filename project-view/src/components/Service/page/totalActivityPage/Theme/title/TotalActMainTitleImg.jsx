import React from "react";
import "./TotalActMainTitleImg.css";

export default function TotalActMainTitleImg({ imgSrc }) {
  return (
    <div className="totalActMainTitleImgBox">
      <img src={imgSrc} alt="total" />
    </div>
  );
}
