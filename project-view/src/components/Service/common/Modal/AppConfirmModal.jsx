import React, { useEffect } from 'react';
import Modal from 'react-modal';
import './AppConfirmModal.css';

export default function AppConfirmModal({ texts, isOpen, confirmModal }) {
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

  const { titleText, contentText } = texts;
  const appConfirmModalStyles = {
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

  return (
    <Modal isOpen={isOpen} style={appConfirmModalStyles}>
      <div className="appConfirmModal">
        <div>
          <h4>{titleText}</h4>
        </div>
        <div>
          <p>{contentText}</p>
          <button onClick={confirmModal}>확인</button>
        </div>
      </div>
    </Modal>
  );
}
