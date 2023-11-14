import React, { useState } from 'react';
import AppCheckExistingUser from '../components/Service/common/Modal/AppCheckExistingUser';

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

      <AppCheckExistingUser
        isOpen={isOpen}
        closeOpen={() => {
          setIsOpen(false);
        }}
        selectedMemType={1}
      />
    </>
  );
}
