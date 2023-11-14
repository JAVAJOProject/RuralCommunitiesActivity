import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './AppSignInModal.css';

import SignInUserTypeSelect from './signIn/SignInUserTypeSelect';
import SignInMemberContents from './signIn/SignInMemberContents';
import SignInSellerContents from './signIn/SignInSellerContents';

import memberSignInImg from '../../../../view_img/Service/common/memberSignIn.svg';
import sellerSignInImg from '../../../../view_img/Service/common/sellerSignIn.png';

const defaultContents = {
  title: '로그인 해주세요',
  member: {
    text: '서비스 이용자',
    imgSrc: memberSignInImg,
  },
  seller: {
    text: '서비스 제공자',
    imgSrc: sellerSignInImg,
  },
};

export default function AppSignInModal({
  isOpen,
  closeModal,
  selectedUserType,
  setSelectedUserType,
  openCheckUserModal,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
				position: fixed; 
				top: -${window.scrollY}px;
        overflow-y: scroll;
				width: 100%;
			`;

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
  }, [isOpen]);

  const appSignInModalStyles = {
    overlay: {
      backgroundColor: 'rgba(127, 127, 127, 0.58)',
      width: '100%',
      height: '100vh',
      zIndex: '1000',
      top: '0',
      left: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      width: 'fit-content',
      inset: 'unset',
      padding: '0',
      border: 'none',
      borderRadius: '1.25rem',
      backgroundColor: '#fff',
      position: 'relative',
    },
  };

  const { title, member, seller } = defaultContents;

  return (
    <Modal isOpen={isOpen} style={appSignInModalStyles}>
      <div className="appSignInModal">
        <div>
          <h4>{title}</h4>
        </div>
        <div className="appSignInModalUserTypeBtn">
          <SignInUserTypeSelect
            type="member"
            imgSrc={member.imgSrc}
            text={member.text}
            active={selectedUserType === 1}
            handleClick={() => {
              setSelectedUserType(1);
            }}
          />
          <SignInUserTypeSelect
            type="seller"
            imgSrc={seller.imgSrc}
            text={seller.text}
            active={selectedUserType === 2}
            handleClick={() => {
              setSelectedUserType(2);
            }}
          />
        </div>
        {selectedUserType === 1 && (
          <div className="appSignInModalMember">
            <SignInMemberContents closeModal={closeModal} openCheckUserModal={openCheckUserModal} />
          </div>
        )}
        {selectedUserType === 2 && (
          <div className="appSignInModalSeller">
            <SignInSellerContents closeModal={closeModal} openCheckUserModal={openCheckUserModal} />
          </div>
        )}
      </div>
    </Modal>
  );
}
