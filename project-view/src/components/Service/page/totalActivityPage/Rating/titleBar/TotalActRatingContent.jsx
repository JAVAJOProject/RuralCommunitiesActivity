import React from "react";
import "./TotalActRatingContent.css";

export default function TotalActRatingContent({ text1, text2 }) {
  return (
    <div className="totalActRatingContent">
      {text1}, {text2}
    </div>
  );
}
