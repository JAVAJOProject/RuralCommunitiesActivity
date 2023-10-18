import React from 'react';
import './Footer.css';

const contents = [
  `상호명 (주)규하네농어촌놀이터 | 대표이사 : 이시향 | 개인정보 책임자 : 김경미 | 사업자등록번호 : 000-00-00000`,
  `본사 : 서울 강남구 테헤란로`,
  `고객지원 : 문의 게시판 또는 1:1 문의`,
  `회사 소개  |  이용약관  |  개인정보처리방침`,
  `Made by ♥ Wooril Javazo Corp.`,
];

export default function Footer() {
  return (
    <div className="footer">
      {contents.map((content) => (
        <p key={content}>{content}</p>
      ))}
    </div>
  );
}
