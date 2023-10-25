import React from "react";
import "./NoticeListBar.css";
import NoticeListBarCategory from "./NoticeListBarCategory";
import NoticeListBarTitle from "./NoticeListBarTitle";
import NoticeListBarDate from "./NoticeListBarDate";
import { useNavigate } from "react-router-dom";

export default function NoticeListBar({ noticeId, type, title, dateCreated }) {
  const navigate = useNavigate();

  let firstText;
  switch (type) {
    case "분류":
      firstText = type;
      break;
    case 1:
      firstText = "[공지]";
      break;
    case 2:
      firstText = "[정책]";
      break;
    case 3:
      firstText = "[행사]";
      break;
    default:
      firstText = "";
      break;
  }

  let lastText;
  if (dateCreated === "작성일") {
    lastText = dateCreated;
  } else {
    const dateT = new Date(dateCreated);
    lastText = `${dateT.getFullYear()}-${
      dateT.getMonth() + 1
    }-${dateT.getDate()}`;
  }

  let categoryType;
  switch (type) {
    case 1:
      categoryType = "notification";
      break;
    case 2:
      categoryType = "policy";
      break;
    case 3:
      categoryType = "event";
  }

  return (
    <div
      className="noticeListBar"
      onClick={() => {
        navigate(
          `/app/customerService/notice/${categoryType}/detail/${noticeId}`,
          {
            state: { boardType: "list" },
          }
        );
      }}
    >
      <NoticeListBarCategory text={firstText} />
      <NoticeListBarTitle
        text={title}
        style={title === "제목" ? { textAlign: "center" } : {}}
      />
      <NoticeListBarDate text={lastText} />
    </div>
  );
}
