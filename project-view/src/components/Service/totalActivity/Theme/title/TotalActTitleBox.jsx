import React from "react";
import scarecrow from "../../../../../view_img/Service/totalActivity/theme/scarecrow.png";
import tree from "../../../../../view_img/Service/totalActivity/theme/tree.png";
import TotalActMainTitleSet from "./TotalActMainTitleSet";
import TotalActSubtitleSet from "./TotalActSubtitleSet";
import "./TotalActTitleBox.css";

const titleText = {
  mainTitle: {
    text: "멋진 체험들이 한가득!",
    imgSrc: scarecrow,
  },
  subtitle: {
    text: "농어촌의 빛길 함께 걸어요!",
    imgSrc: tree,
  },
};

export default function TotalActTitleBox() {
  const { mainTitle, subtitle } = titleText;

  return (
    <div className="totalActTitleBox">
      <TotalActMainTitleSet contents={mainTitle} />
      <TotalActSubtitleSet contents={subtitle} />
    </div>
  );
}