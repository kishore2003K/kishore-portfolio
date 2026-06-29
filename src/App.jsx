import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import PageNav from './components/PageNav';
import './index.css';

function App() {
  const [page, setPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (newPage) => {
    if (newPage === page) return;
    setIsTransitioning(true);
    
    // Fade in overlay, change page, then fade out
    setTimeout(() => {
      setPage(newPage);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400); 
    }, 350); 
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      {page !== 'home' && <PageNav setPage={handleNavigate} />}
      {page === 'home' && <Home setPage={handleNavigate} />}
      {page === 'projects' && <Projects />}
      {page === 'experience' && <Experience />}
      {page === 'about' && <About />}
      {page === 'skills' && <Skills />}
      {page === 'contact' && <Contact />}

      <div className={`transition-overlay ${isTransitioning ? 'active' : ''}`}>
        <i className="fas fa-yin-yang spinner-icon"></i>
      </div>
    </>
  );
}

export default App;
