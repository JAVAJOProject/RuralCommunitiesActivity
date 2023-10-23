import React from "react";
import MypageRservationBtn from "./MypageReservationBtn";
import "./MypageReservationBtnBox.css";

export default function MypageReservationBtnBox({ btnContents, aId }) {
  let link;
  let content;

  const contents = [];
  switch (btnContents) {
    case 1:
      contents.push({ link: "/app", content: "결제하러 가기" });
      break;
    case 2:
      contents.push({ link: "/app", content: "후기쓰러 가기" });
      break;
    case 3:
      contents.push({ link: "/app", content: "내 후기 보기" });
      break;
  }
  contents.push({
    link: "/app/activity/detail/" + aId,
    content: "체험 상세보기",
  });

  return (
    <div className="mypageReservationBtnBox">
      {contents.map((item) => {
        return (
          <MypageRservationBtn
            btnContent={item.content}
            link={item.link}
            oneCheck={contents.length}
          />
        );
      })}
    </div>
  );
}
