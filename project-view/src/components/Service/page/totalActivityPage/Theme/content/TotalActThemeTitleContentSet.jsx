import React from "react";
import TotalActThemeTitleText from "./TotalActThemeTitleText";
import TotalActThemeTitleBar from "./TotalActThemeTitleBar";
import "./TotalActThemeTitleContentSet.css";

export default function TotalActThemeTitleContentSet({ contents, isLeft }) {
  return (
    <div
      className={
        isLeft
          ? "totalActThemeTitleContentSetLeft"
          : "totalActThemeTitleContentSetRight"
      }
    >
      <TotalActThemeTitleText text={contents} isLeft={isLeft} />
      <TotalActThemeTitleBar />
    </div>
  );
}
