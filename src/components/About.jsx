import React from 'react';

export default function About() {
  return (
    <div className="page-container bg-dark fade-in">
      <div className="bg-watermark">ABOUT</div>
      
      <div className="content-wrapper">
        <h1 className="page-title" style={{ color: 'transparent' }}>About Me</h1>
        <div className="content-grid">
          <div className="text-block" style={{ color: '#fff' }}>
            <p style={{ color: '#888' }}>I'm a Full-Stack Developer based in Tamil Nadu, India with a background in Electronics & Communication Engineering. I transitioned into web and mobile development, starting with PHP and MySQL before moving into the React ecosystem.</p>
            <p style={{ color: '#888' }}>I work at Rathna Softnet Technology in Nagercoil, where I build cross-platform mobile apps in React Native and maintain PHP web systems. On the side, I shipped a MERN billing SaaS for a wedding films studio.</p>
            <p style={{ color: '#888' }}>I'm most interested in mobile-first product work — particularly React Native apps that need solid offline support, clean API integration, and real-world production deployment.</p>
          </div>
          <div>
            <div className="card-dark">
              <h3 style={{marginBottom:'1rem', fontWeight: 800}}>Fast Facts</h3>
              <div style={{marginBottom:'10px'}}><strong>Location:</strong> Tamil Nadu, India</div>
              <div style={{marginBottom:'10px'}}><strong>Education:</strong> ECE Engineer</div>
              <div style={{marginBottom:'10px'}}><strong>Focus:</strong> React Native, MERN</div>
              <div style={{marginBottom:'10px'}}><strong>Interests:</strong> UI/UX, Performance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
