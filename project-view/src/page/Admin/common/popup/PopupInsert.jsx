import React ,{useCallback, useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import './PopupInsert.css';

export default function PopupInsert({showModal, setShowModal,insertId,name,result}) {
    // const navigate = useNavigate();
    const sucessMsg = '님 등록 완료 되었습니다.';
    const errorMsg = '님 등록 실패';

    
const closeModal = (e) => {

    setShowModal(false);
    
};

const closeKey = useCallback(
    (e) => {
        if(e.key === "Escape" && showModal) {
            setShowModal(false);
        }
    },[setShowModal, showModal]
);

useEffect(()=> {
    document.addEventListener("keydown", closeKey); 
}, [closeKey]);

// if (!showModal) return null;

   
    return (
        <div className='popupInsertBoxA'>
            <p className='popupInsertP'>{name}{result ? sucessMsg : errorMsg}</p>
            <div>
                <div className='popupBtnA'  onClick={closeModal} >확 인</div>
            </div>
        </div>
    );
}

