import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './DeleteBtn.css';
import PopupDelete from '../popup/PopupDelete';

export default function DeleteBtn({ text, imgSrc, showModal, setShowModal }) {
  const modalBtnRef = useRef();
  console.log('btn : ', modalBtnRef);

  const openModal = (e) => {
    if (modalBtnRef.current === e.target) {
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="deleteBtnA" ref={modalBtnRef} onClick={openModal}>
        {text}
      </div>
    </>
  );
}
