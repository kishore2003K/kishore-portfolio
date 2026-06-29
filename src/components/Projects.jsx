import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const projectsData = [
  {
    name: 'Nadarmahamai Matrimony',
    desc: 'React Native mobile application for matchmaking and profile management. Designed multi-step registration flow and integrated backend REST APIs.',
    tech: ['React Native', 'AsyncStorage', 'REST APIs', 'Axios']
  },
  {
    name: 'CLIKZ Wedding Films',
    desc: 'Full-stack billing platform for a photography studio. Automated invoice generation, PDF exports, and one-click WhatsApp sharing.',
    tech: ['React','Node.js','Express','MongoDB']
  },
  {
    name: 'Atreyapp',
    desc: 'Production React Native app for real-time industrial energy monitoring, published on Google Play Store with 20+ REST APIs.',
    tech: ['React Native','react-native-svg','NetInfo']
  },
  {
    name: 'Tenant Management App',
    desc: 'App enabling tenants to manage contracts, submit move-out requests, and upload documents securely. Features offline-first auto-save.',
    tech: ['React Native','Context API','MMKV']
  }
];

export default function Projects() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.project-card'));
    if (cards.length > 0) {
      VanillaTilt.init(cards, { max: 5, speed: 400, glare: true, "max-glare": 0.1, scale: 1.02 });
    }
  }, []);

  return (
    <div className="page-container bg-dark fade-in">
      <div className="bg-watermark">WORK</div>
      
      <div className="content-wrapper">
        <h1 className="page-title" style={{ color: 'transparent' }}>Projects</h1>
        <div className="projects-carousel">
          {projectsData.map(p => (
            <div key={p.name} className="project-card card-light">
              <div className="project-header">
                <div className="project-name">{p.name}</div>
              </div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tech">
                {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
