import React from "react";
import TotalActSubtitleText from "./TotalActSubtitleText";
import TotalActSubtitleImg from "./TotalActSubtitleImg";
import "./TotalActSubtitleSet.css";

export default function TotalActSubtitleSet({ contents }) {
  const { text, imgSrc } = contents;

  return (
    <div className="totalActSubtitleSet">
      <TotalActSubtitleText text={text} />
      <TotalActSubtitleImg imgSrc={imgSrc} />
    </div>
  );
}
