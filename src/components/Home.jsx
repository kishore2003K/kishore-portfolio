import React from 'react';

export default function Home({ setPage }) {
  return (
    <div className="home-container fade-in">
      {/* Edge Navigation */}
      <div className="nav-link nav-top diff-text" onClick={() => setPage('experience')}>Experience</div>
      <div className="nav-link nav-bottom-left diff-text" onClick={() => setPage('about')}>About</div>
      <div className="nav-link nav-bottom-right diff-text" onClick={() => setPage('skills')}>My Skills</div>
      <div className="nav-link nav-left diff-text" onClick={() => setPage('projects')}>Projects</div>
      <div className="nav-link nav-right diff-text" onClick={() => setPage('contact')}>Contact</div>
      
      {/* Logos & Icons */}
      <div className="logo diff-text">KR</div>
      <div className="say-hi diff-text" onClick={() => setPage('contact')}>Say hi..</div>
      
      <div className="socials-left">
        <a href="https://linkedin.com/in/kishore-r03" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/kishore2003K" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="mailto:rkishore0333@gmail.com"><i className="fas fa-envelope"></i></a>
      </div>

      <i className="fas fa-yin-yang yin-yang" onClick={() => {
        document.querySelector('.home-container').style.background = 'linear-gradient(to left, #050505 50%, #f4f4f0 50%)';
        setTimeout(() => {
          document.querySelector('.home-container').style.background = 'linear-gradient(to right, #050505 50%, #f4f4f0 50%)';
        }, 1000);
      }}></i>

      {/* Central Box */}
      <div className="hero-box">
        <div className="hero-box-outline diff-border"></div>
        <div className="hero-left diff-text">
          <h1>Hi,<br/>I'm Kishore R</h1>
          <p>A self-motivated, highly skilled Full-Stack Developer specializing in React, React Native, and robust web applications.</p>
        </div>
        <div className="hero-right">
          <div className="avatar-placeholder">K</div>
        </div>
      </div>
    </div>
  );
}
