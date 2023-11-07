import React from "react";
import "./MypageMemberEventList.css";

export default function MypageMemberEventList({ type, title, content }) {
  let text = "";
  if (content && type && type === "date") {
    const dateT = new Date(content);
    text = `${dateT.getFullYear()}-${dateT.getMonth() + 1}-${dateT.getDate()}`;
  } else if (content) {
    text = content;
  }

  return (
    <div className="mypageMemberEventList">
      <div />
      <p>
        {title} : {text.length > 10 ? `${text.substr(0, 10)}...` : text}
      </p>
    </div>
  );
}
