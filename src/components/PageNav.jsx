import React from 'react';

export default function PageNav({ setPage }) {
  return (
    <nav className="page-nav">
      <div className="logo" style={{ fontFamily: "'Pacifico', cursive", fontSize: '1.5rem' }}>KR</div>
      <div className="back-btn" onClick={() => setPage('home')}>
        <i className="fas fa-arrow-left"></i> Back to Hub
      </div>
    </nav>
  );
}
