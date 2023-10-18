import React from "react";
import "./MypageReservationActList.css";

export default function MypageReservationActList({ title, content, type }) {
  let text;
  switch (type) {
    case "date":
    case "deadline":
      let dateT = content ? new Date(content) : "";
      text = dateT
        ? `${dateT.getFullYear()}-${dateT.getMonth() + 1}-${dateT.getDate()}`
        : "";
      break;
    case "payment":
      text = content ? `${(+content).toLocaleString()}원` : "-";
      break;
    case "maxPeople":
      text = content ? `${content}명` : "-";
      break;
    case "status":
      switch (content) {
        case "1":
          text = "결제 완료";
          break;
        case "2":
          text = "결제 대기";
          break;
        case "3":
          text = "결제 취소";
          break;
      }
      break;
  }

  return (
    <li className="mypageReservationActList">
      <div></div>
      <p>
        {title} : {text}
      </p>
    </li>
  );
}
