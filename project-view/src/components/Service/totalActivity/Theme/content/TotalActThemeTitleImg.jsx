import React from "react";
import "./TotalActThemeTitleImg.css";

export default function TotalActThemeTitleImg({ imgSrc }) {
  return (
    <div className="totalActThemeTitleImg">
      <img src={imgSrc} alt="themeTitleImg" />
    </div>
  );
}
