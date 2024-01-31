import React from 'react';
import '../../components/Service/error/NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <>
      <main className="appMain">
        <h1
          style={{
            textAlign: 'center',
            color: 'red',
          }}
        >
          404 Not Found
        </h1>
      </main>
    </>
  );
}
