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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      {page !== 'home' && <PageNav setPage={setPage} />}
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'projects' && <Projects />}
      {page === 'experience' && <Experience />}
      {page === 'about' && <About />}
      {page === 'skills' && <Skills />}
      {page === 'contact' && <Contact />}
    </>
  );
}

export default App;
