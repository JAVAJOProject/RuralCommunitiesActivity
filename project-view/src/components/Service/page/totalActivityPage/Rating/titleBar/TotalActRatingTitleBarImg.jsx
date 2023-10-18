import React from "react";
import "./TotalActRatingTitleBarImg.css";

export default function TotalActRatingTitleBarImg({ imgSrc }) {
  return (
    <div className="totalActRatingTitleBarImg">
      <img src={imgSrc} alt="Image" />
    </div>
  );
}
