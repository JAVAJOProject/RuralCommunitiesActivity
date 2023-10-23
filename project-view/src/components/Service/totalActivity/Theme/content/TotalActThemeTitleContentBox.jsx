import React from "react";
import TotalActThemeTitleContentSet from "./TotalActThemeTitleContentSet";
import "./TotalActThemeTitleContentBox.css";
import tractor from "../../../../../view_img/Service/totalActivity/theme/tractor.png";
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
// 뭔가 적용이 안돼서 div로 여러번 감싼것(헷갈리지말기)