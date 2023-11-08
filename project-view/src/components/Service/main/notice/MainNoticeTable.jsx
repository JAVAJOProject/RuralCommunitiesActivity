import React from "react";
import "./MainNoticeTable.css";

const tableHead = {
  noticeTypeName: "카테고리",
  noticeTitle: "제목",
  noticeDateCreated: "날짜",
};

export default function MainNoticeTable({ noticeData }) {
  return (
    <table className="mainNoticeTable">
      <tr>
        <th>{tableHead.noticeTypeName}</th>
        <th>{tableHead.noticeTitle}</th>
        <th>{tableHead.noticeDateCreated}</th>
      </tr>
      {noticeData.map((onePost) => {
        const text = "" + onePost.noticeTitle;
        return (
          <tr key={onePost.noticeId}>
            <td>{onePost.noticeTypeName}</td>
            <td>{text.substr(0, 24) + (text.length > 24 ? "..." : "")}</td>
            <td>
              {onePost.noticeDateCreated.toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </td>
          </tr>
        );
      })}
    </table>
  );
}
