import React, { useState } from 'react';
import AppSiteMap from '../components/Service/common/Modal/AppSiteMap';

export default function ExPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <main className="appMain">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          style={{ margin: 'auto', display: 'block' }}
        >
          테스트
        </button>
      </main>

      <AppSiteMap
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}
