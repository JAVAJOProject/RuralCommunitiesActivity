import React from "react";
import TotalActThemeTitleContentSet from "./TotalActThemeTitleContentSet";
import "./TotalActThemeTitleContentBox.css";
import TotalActThemeTitleImg from "./TotalActThemeTitleImg";

export default function TotalActThemeTitleContentBox({ contents, isLeft }) {
  const { themeName, imgSrc } = contents;

  return (
    <div
      className={
        isLeft
          ? "totalActThemeTitleContentBoxLeft"
          : "totalActThemeTitleContentBoxRight"
      }
    >
      <TotalActThemeTitleContentSet contents={themeName} isLeft={isLeft} />
      <div
        className={
          isLeft
            ? "totalActThemeTitleImgBoxLeft"
            : "totalActThemeTitleImgBoxRight"
        }
      >
        <TotalActThemeTitleImg imgSrc={imgSrc} />
      </div>
    </div>
  );
}
