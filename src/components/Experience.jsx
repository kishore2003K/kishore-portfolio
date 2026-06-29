import React from 'react';

export default function Experience() {
  return (
    <div className="page-container bg-dark fade-in">
      <div className="bg-watermark">EXPERIENCE</div>
      
      <div className="content-wrapper">
        <h1 className="page-title" style={{ color: 'transparent' }}>Work History</h1>
        <div className="exp-grid">
          <div className="card-dark">
            <div className="exp-company">Rathna Softnet Technology</div>
            <div style={{color: '#888', fontSize: '14px', marginBottom: '4px', fontFamily: "'Fira Code', monospace"}}>Jul 2025 – Present</div>
            <div className="exp-role">Full-Stack Developer</div>
            <div className="exp-point"><i className="fas fa-check" style={{marginTop:'4px', color:'#fff'}}></i> Developed and maintained PHP web applications with MySQL integration.</div>
            <div className="exp-point"><i className="fas fa-check" style={{marginTop:'4px', color:'#fff'}}></i> Built cross-platform mobile apps using React Native with native feature integration.</div>
            <div className="exp-point"><i className="fas fa-check" style={{marginTop:'4px', color:'#fff'}}></i> Created responsive UIs using Tailwind CSS, Bootstrap, and mobile-first principles.</div>
          </div>
          <div className="card-dark">
            <div className="exp-company">Ponjesly College of Engineering</div>
            <div style={{color: '#888', fontSize: '14px', marginBottom: '4px', fontFamily: "'Fira Code', monospace"}}>2020 – 2024</div>
            <div className="exp-role">B.E. – Electronics & Communication Engineering</div>
            <div className="exp-point"><i className="fas fa-graduation-cap" style={{marginTop:'4px', color:'#fff'}}></i> Graduated with CGPA 7.7/10</div>
          </div>
        </div>
      </div>
    </div>
  );
}
