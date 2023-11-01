import React, { useState } from 'react';
import AppYNModal from '../components/Service/common/Modal/AppYNModal';

export default function ExPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpen = () => {
    setModalIsOpen(true);
  };
  const modalClose = () => {
    setModalIsOpen(false);
  };
  const contents = {
    titleText: '게시글 등록',
    contentText:
      '게시글이 등록되었습니다. 게시글이 등록되었습니다. 게시글이 등록되었습니다. 게시글이 등록되었습니다. 게시글이 등록되었습니다. 게시글이 등록되었습니다.',
    // yesText: null,
    yesText: '작성 취소',
  };
  return (
    <>
      <main className="appMain">
        <button onClick={modalOpen}>테스트 버튼</button>
      </main>

      <AppYNModal
        isOpen={modalIsOpen}
        texts={contents}
        yesAction={modalClose}
        noAction={modalClose}
      />
    </>
  );
}
