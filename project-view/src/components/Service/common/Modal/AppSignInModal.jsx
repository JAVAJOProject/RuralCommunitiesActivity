import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './AppSignInModal.css';

import memberSignInImg from '../../../../view_img/Service/common/memberSignIn.svg';
import sellerSignInImg from '../../../../view_img/Service/common/sellerSignIn.png';
import SignInUserTypeSelect from './signIn/SignInUserTypeSelect';
import SignInSellerContents from './signIn/SignInSellerContents';
import SignInMemberContents from './signIn/SignInMemberContents';

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

export default function AppSignInModal({ isOpen, closeModal }) {
  const [selectedUserType, setSelectedUserType] = useState(true);

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
            active={selectedUserType}
            handleClick={() => {
              setSelectedUserType(true);
            }}
          />
          <SignInUserTypeSelect
            type="seller"
            imgSrc={seller.imgSrc}
            text={seller.text}
            active={!selectedUserType}
            handleClick={() => {
              setSelectedUserType(false);
            }}
          />
        </div>
        {selectedUserType && (
          <div className="appSignInModalMember">
            <SignInMemberContents closeModal={closeModal} />
          </div>
        )}
        {!selectedUserType && (
          <div className="appSignInModalSeller">
            <SignInSellerContents closeModal={closeModal} />
          </div>
        )}
      </div>
    </Modal>
  );
}
