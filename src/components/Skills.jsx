import React from 'react';

export default function Skills() {
  const skills = [
    { label: 'Mobile App', tags: ['React Native', 'Context API', 'MMKV', 'AsyncStorage', 'NetInfo', 'Axios'] },
    { label: 'Frontend', tags: ['React.js', 'JavaScript ES6+', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'] },
    { label: 'Backend', tags: ['Node.js', 'Express.js', 'PHP', 'RESTful APIs', 'JWT Auth'] },
    { label: 'Databases & Tools', tags: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Postman'] },
  ];
  return (
    <div className="page-container fade-in">
      <h1 className="page-title">My Arsenal</h1>
      <div className="content-grid">
        {skills.map(s => (
          <div key={s.label} className="exp-card" style={{ boxShadow: 'none', background: '#fff', border: '1px solid #d2d2d7' }}>
            <h3 style={{ marginBottom: '1.5rem', color: '#0066cc' }}>{s.label}</h3>
            <div>
              {s.tags.map(t => <span key={t} className="tech-pill" style={{ margin: '4px' }}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
