import React from "react";
import "./TotalActThemeTitleText.css";

export default function TotalActThemeTitleText({ text, isLeft }) {
  return (
    <div
      className={
        isLeft ? "totalActThemeTitleTextLeft" : "totalActThemeTitleTextRight"
      }
    >
      <p>{text}</p>
    </div>
  );
}
