import React, { useEffect, useState, useRef } from 'react';
import './Buttonbtn.css';

export default function Buttonbtn({
  type,
  text,
  imgSrc,
  style,
  click,
  showModal,
  setShowModal,
}) {
  const [classText, setClassText] = useState('buttonFullAdmin');
  const modalBtnRef = useRef();

  useEffect(() => {
    switch (text) {
      case '수 정':
        setClassText('modifyBtnA');
        break;
      case '검 색':
        setClassText('searchBtnA');
        break;
      case '저 장':
        setClassText('updateBtnA');
        break;
      case '등록하기':
        setClassText('insertBtnA');
        break;
      case '닫 기':
        setClassText('closeBtnA');
        break;
      case '초기화':
        setClassText('resetBtnA');
        break;
      case '삭 제':
        setClassText('deleteBtnA');
        break;
      case '미답변':
        setClassText('unansweredA');
        break;
      case '완료':
        setClassText('answeredA');
        break;
      default:
        setClassText('buttonFullAdmin');
    }
  }, [text]);

  const openModal = (e) => {
    if (modalBtnRef.current === e.target) {
      setShowModal(true);
    }
  };

  return (
    <button
      type={type}
      className={classText}
      style={style}
      onClick={showModal === undefined ? click : openModal}
      ref={modalBtnRef}
    >
      {imgSrc && <img src={imgSrc} alt="ImgBtn" />}
      {text}
    </button>
  );
}
