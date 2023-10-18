import React from "react";
import "./TotalActRatingBarImg.css";

export default function TotalActRatingBarImg({ image, text }) {
  return (
    <div className="totalActRatingBarImg">
      <div className="image-container">
        <img src={image} alt={"BarImg"} />
      </div>
      <p>{text}</p>
    </div>
  );
}
