import React from 'react';

export default function Skills() {
  const skills = [
    { label: 'Mobile App', tags: ['React Native', 'Context API', 'MMKV', 'AsyncStorage', 'NetInfo', 'Axios'] },
    { label: 'Frontend', tags: ['React.js', 'JavaScript ES6+', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'] },
    { label: 'Backend', tags: ['Node.js', 'Express.js', 'PHP', 'RESTful APIs', 'JWT Auth'] },
    { label: 'Databases & Tools', tags: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Postman'] },
  ];
  return (
    <div className="page-container bg-dark fade-in">
      <div className="bg-watermark">SKILLS</div>
      
      <div className="content-wrapper">
        <h1 className="page-title" style={{ color: 'transparent' }}>My Arsenal</h1>
        <div className="content-grid">
          {skills.map(s => (
            <div key={s.label} className="card-dark">
              <h3 style={{ marginBottom: '1.5rem', color: '#fff', fontWeight: 800 }}>{s.label}</h3>
              <div>
                {s.tags.map(t => <span key={t} className="tech-pill" style={{ margin: '4px', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
