import React from 'react';

export default function Contact() {
  const items = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'rkishore0333@gmail.com', href: 'mailto:rkishore0333@gmail.com' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+91 63746 68193', href: 'tel:+916374668193' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'kishore-r03', href: 'https://linkedin.com/in/kishore-r03' },
    { icon: 'fab fa-github', label: 'GitHub', value: 'kishore2003K', href: 'https://github.com/kishore2003K' },
  ];
  return (
    <div className="page-container fade-in">
      <h1 className="page-title">Let's Talk</h1>
      <div className="content-grid">
        {items.map(c => (
          <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="exp-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'transform 0.2s', cursor: 'pointer' }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2rem', color: '#0066cc', width: '50px', textAlign: 'center' }}><i className={c.icon}></i></div>
              <div>
                <div style={{ fontWeight: 600, color: '#86868b', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{c.label}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{c.value}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
