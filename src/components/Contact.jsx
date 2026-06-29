import React from 'react';

export default function Contact() {
  const items = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'rkishore0333@gmail.com', href: 'mailto:rkishore0333@gmail.com' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+91 63746 68193', href: 'tel:+916374668193' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'kishore-r03', href: 'https://linkedin.com/in/kishore-r03' },
    { icon: 'fab fa-github', label: 'GitHub', value: 'kishore2003K', href: 'https://github.com/kishore2003K' },
  ];
  return (
    <div className="page-container bg-dark fade-in">
      <div className="bg-watermark">CONTACT</div>
      
      <div className="content-wrapper">
        <h1 className="page-title" style={{ color: 'transparent' }}>Let's Talk</h1>
        <div className="content-grid">
          {items.map(c => (
            <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card-dark" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'transform 0.2s', cursor: 'pointer' }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ fontSize: '2rem', color: '#fff', width: '50px', textAlign: 'center' }}><i className={c.icon}></i></div>
                <div>
                  <div style={{ fontWeight: 600, color: '#888', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{c.label}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>{c.value}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
