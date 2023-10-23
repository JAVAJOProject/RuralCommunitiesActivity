import React from "react";
import TotalActMainTitleImg from "./TotalActMainTitleImg";
import TotalActMainTitleText from "./TotalActMainTitleText";
import "./TotalActMainTitleSet.css";

export default function TotalActMainTitleSet({ contents }) {
  const { text, imgSrc } = contents;

  return (
    <div className="totalActMainTitleSet">
      <TotalActMainTitleImg imgSrc={imgSrc} />
      <TotalActMainTitleText text={text} />
    </div>
  );
}
