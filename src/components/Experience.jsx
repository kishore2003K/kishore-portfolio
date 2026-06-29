import React from 'react';

export default function Experience() {
  return (
    <div className="page-container fade-in">
      <h1 className="page-title">Work History</h1>
      <div className="exp-grid">
        <div className="exp-card">
          <div className="exp-company">Rathna Softnet Technology</div>
          <div style={{color: '#86868b', fontSize: '14px', marginBottom: '4px', fontFamily: "'Fira Code', monospace"}}>Jul 2025 – Present</div>
          <div className="exp-role">Full-Stack Developer</div>
          <div className="exp-point"><i className="fas fa-check" style={{marginTop:'4px', color:'#0066cc'}}></i> Developed and maintained PHP web applications with MySQL integration.</div>
          <div className="exp-point"><i className="fas fa-check" style={{marginTop:'4px', color:'#0066cc'}}></i> Built cross-platform mobile apps using React Native with native feature integration.</div>
          <div className="exp-point"><i className="fas fa-check" style={{marginTop:'4px', color:'#0066cc'}}></i> Created responsive UIs using Tailwind CSS, Bootstrap, and mobile-first principles.</div>
        </div>
        <div className="exp-card">
          <div className="exp-company">Ponjesly College of Engineering</div>
          <div style={{color: '#86868b', fontSize: '14px', marginBottom: '4px', fontFamily: "'Fira Code', monospace"}}>2020 – 2024</div>
          <div className="exp-role">B.E. – Electronics & Communication Engineering</div>
          <div className="exp-point"><i className="fas fa-graduation-cap" style={{marginTop:'4px', color:'#0066cc'}}></i> Graduated with CGPA 7.7/10</div>
        </div>
      </div>
    </div>
  );
}
