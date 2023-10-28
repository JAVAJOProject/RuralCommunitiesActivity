import React from "react";
import "./MyPageMemberContentsBox.css";

// 예약 내역의 상세 정보와 구체적인 예약 항목을 나타
export default function MyPageMemberContentsBox({ children }) {
  return <div className="myPageMemberContentsBox">{children}</div>;
}
