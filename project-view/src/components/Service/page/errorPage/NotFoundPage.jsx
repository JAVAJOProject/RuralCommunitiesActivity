import React from 'react';
import Header from '../../Nav/header/Header';
import Footer from '../../Nav/footer/Footer';
import './NotFoundPage.css';

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
