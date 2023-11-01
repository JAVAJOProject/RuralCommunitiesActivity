import React ,{useCallback, useEffect, useRef}from 'react';
import './PopupDelete.css';
import { fetchDataGET } from '../../../../config/ApiService';

export default function PopupDelete({showModal, setShowModal,delId }) {
console.log(delId);
const modalRef = useRef();
console.log(modalRef);

const closeModal = (e) => {
    if(modalRef.current === e.target) {
        setShowModal(false);
    }
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

if (!showModal) return null;


//삭제 서버요청
const FetchDeleteData = async () => {
    try {
        const mem = 1;
        const delDataForMember = await fetchDataGET(
            `/admin/membermanage/delete/${delId}/${mem}`
        );

        

        if(delDataForMember !== null) {
            console.log('delDataForMember 출력', delDataForMember); 
            setShowModal((modal) => !modal);

        }else {
        console.error('api fail');
        }
    }catch(error){
        console.error(error);
    }
};

//삭제하기 확인 눌렀을때

    const delMember = () => {
        FetchDeleteData();
    };


    
    

    
    return (
        <div className='popupDeleteBoxA'>
            <p className='popupP'>삭제 하시겠습니까?</p>
            <div >
            <div className='popupCancelBtn' ref={modalRef} onClick={closeModal} >취소</div>
            <div className='popupDeleteBtn' onClick={delMember} >확인</div>
            </div>
        </div>
    );
}

