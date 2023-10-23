import React from 'react';
import Header from '../../components/Service/Nav/header/Header';
import Footer from '../../components/Service/Nav/footer/Footer';
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